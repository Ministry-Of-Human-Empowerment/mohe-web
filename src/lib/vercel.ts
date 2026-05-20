const VERCEL_TOKEN = process.env.VERCEL_TOKEN
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID ?? "prj_2g5JC63Lthtpq5ZOgXwrmKYDEa8K"
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID ?? "team_qyOCVOtlgqRZGGgmo5D1fl2j"

function branchToVercelSlug(branch: string): string {
  return branch
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 52)
}

export function getBranchPreviewUrl(branch: string): string {
  const slug = branchToVercelSlug(branch)
  return `https://mohe-web-git-${slug}-flowbond.vercel.app`
}

export async function getVercelPreviewForBranch(branch: string): Promise<string | null> {
  if (!VERCEL_TOKEN) return null

  try {
    const params = new URLSearchParams({
      projectId: VERCEL_PROJECT_ID,
      teamId: VERCEL_TEAM_ID,
      target: "preview",
      limit: "20",
    })

    const res = await fetch(`https://api.vercel.com/v6/deployments?${params}`, {
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` },
      next: { revalidate: 30 },
    })

    if (!res.ok) return null

    const { deployments } = await res.json()
    const match = deployments?.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (d: any) => d.meta?.githubCommitRef === branch && d.state === "READY"
    )

    return match ? `https://${match.url}` : null
  } catch {
    return null
  }
}
