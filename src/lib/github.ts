import { Octokit } from "@octokit/rest"

const ORG = process.env.GITHUB_ORG ?? "Ministry-Of-Human-Empowerment"
const REPO = process.env.GITHUB_REPO ?? "mohe-web"

function getOctokit(token?: string) {
  return new Octokit({ auth: token ?? process.env.GITHUB_TOKEN })
}

export async function listOpenPRs(token?: string) {
  const octokit = getOctokit(token)
  const { data } = await octokit.pulls.list({
    owner: ORG,
    repo: REPO,
    state: "open",
    per_page: 30,
  })
  return data
}

export async function getPR(number: number, token?: string) {
  const octokit = getOctokit(token)
  const { data } = await octokit.pulls.get({
    owner: ORG,
    repo: REPO,
    pull_number: number,
  })
  return data
}

export async function getPRReviews(number: number, token?: string) {
  const octokit = getOctokit(token)
  const { data } = await octokit.pulls.listReviews({
    owner: ORG,
    repo: REPO,
    pull_number: number,
  })
  return data
}

export async function submitReview(
  number: number,
  event: "APPROVE" | "REQUEST_CHANGES" | "COMMENT",
  body: string,
  token: string
) {
  const octokit = getOctokit(token)
  const { data } = await octokit.pulls.createReview({
    owner: ORG,
    repo: REPO,
    pull_number: number,
    event,
    body,
  })
  return data
}

export async function proposeEdit({
  token,
  filePath,
  newContent,
  branchName,
  commitMessage,
  prTitle,
  prBody,
}: {
  token: string
  filePath: string
  newContent: string
  branchName: string
  commitMessage: string
  prTitle: string
  prBody: string
}) {
  const octokit = getOctokit(token)

  const { data: devRef } = await octokit.git.getRef({ owner: ORG, repo: REPO, ref: "heads/dev" })
  const devSha = devRef.object.sha

  await octokit.git.createRef({
    owner: ORG,
    repo: REPO,
    ref: `refs/heads/${branchName}`,
    sha: devSha,
  })

  const { data: fileData } = await octokit.repos.getContent({
    owner: ORG,
    repo: REPO,
    path: filePath,
    ref: "dev",
  })

  const fileSha = (fileData as { sha: string }).sha

  await octokit.repos.createOrUpdateFileContents({
    owner: ORG,
    repo: REPO,
    path: filePath,
    message: commitMessage,
    content: Buffer.from(newContent).toString("base64"),
    sha: fileSha,
    branch: branchName,
  })

  const { data: pr } = await octokit.pulls.create({
    owner: ORG,
    repo: REPO,
    title: prTitle,
    head: branchName,
    base: "dev",
    body: prBody,
  })

  return pr
}

export async function getDeploymentPreviewUrl(
  _prNumber: number,
  headSha: string,
  token?: string
): Promise<string | null> {
  const octokit = getOctokit(token)
  try {
    const { data: statuses } = await octokit.repos.listCommitStatusesForRef({
      owner: ORG,
      repo: REPO,
      ref: headSha,
    })
    const vercelStatus = statuses.find(
      (s) => s.context?.includes("vercel") && s.target_url && s.state === "success"
    )
    if (vercelStatus?.target_url) return vercelStatus.target_url

    const { data: deployments } = await octokit.repos.listDeployments({
      owner: ORG,
      repo: REPO,
      ref: headSha,
      environment: "Preview",
      per_page: 5,
    })
    if (deployments.length > 0) {
      const { data: depStatuses } = await octokit.repos.listDeploymentStatuses({
        owner: ORG,
        repo: REPO,
        deployment_id: deployments[0].id,
        per_page: 5,
      })
      const success = depStatuses.find((s) => s.state === "success")
      if (success?.environment_url) return success.environment_url
    }
  } catch {
    // no deployment found
  }
  return null
}
