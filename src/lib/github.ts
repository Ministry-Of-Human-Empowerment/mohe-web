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

// Deep-merge edited fields ({ section: { key: value } }) into an existing
// content object. Only the touched keys are overwritten — sibling keys and
// arrays (paragraphs, items, projects…) under each section are preserved.
function mergeFields(
  existing: Record<string, unknown>,
  fields: Record<string, Record<string, string>>
): Record<string, unknown> {
  const merged: Record<string, unknown> = { ...existing }
  for (const [section, keys] of Object.entries(fields)) {
    merged[section] = { ...(existing[section] as object ?? {}), ...keys }
  }
  return merged
}

export async function proposeEdit({
  token,
  filePath,
  fields,
  branchName,
  commitMessage,
  prTitle,
  prBody,
  baseBranch = "dev",
}: {
  token: string
  filePath: string
  fields: Record<string, Record<string, string>>
  branchName: string
  commitMessage: string
  prTitle: string
  prBody: string
  baseBranch?: string
}) {
  const octokit = getOctokit(token)

  const { data: baseRef } = await octokit.git.getRef({ owner: ORG, repo: REPO, ref: `heads/${baseBranch}` })
  const baseSha = baseRef.object.sha

  await octokit.git.createRef({
    owner: ORG,
    repo: REPO,
    ref: `refs/heads/${branchName}`,
    sha: baseSha,
  })

  const { data: fileData } = await octokit.repos.getContent({
    owner: ORG,
    repo: REPO,
    path: filePath,
    ref: baseBranch,
  })

  const fileSha = (fileData as { sha: string }).sha
  const existingRaw = Buffer.from((fileData as { content: string }).content, "base64").toString("utf-8")
  const merged = mergeFields(JSON.parse(existingRaw), fields)
  const newContent = JSON.stringify(merged, null, 2) + "\n"

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
    base: baseBranch,
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
