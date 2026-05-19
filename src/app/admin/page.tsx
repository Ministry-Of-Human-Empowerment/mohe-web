import { auth } from "@/auth"
import { listOpenPRs, getPRReviews } from "@/lib/github"
import { supabase } from "@/lib/supabase"
import PRCard from "@/components/admin/PRCard"

const REQUIRED_APPROVALS = 2

export default async function AdminPage() {
  const session = await auth()

  let prs: Awaited<ReturnType<typeof listOpenPRs>> = []
  let fetchError: string | null = null

  try {
    prs = await listOpenPRs(session?.user?.accessToken)
  } catch (e) {
    fetchError = e instanceof Error ? e.message : "Failed to load PRs"
  }

  const prsWithStatus = await Promise.all(
    prs.map(async (pr) => {
      const reviews = await getPRReviews(pr.number, session?.user?.accessToken).catch(() => [])

      const latestByUser: Record<string, string> = {}
      for (const r of reviews) {
        if (r.user?.login && r.state !== "COMMENTED") {
          latestByUser[r.user.login] = r.state
        }
      }
      const approvedBy = Object.entries(latestByUser)
        .filter(([, state]) => state === "APPROVED")
        .map(([login]) => login)

      const { count } = await supabase
        .from("pr_comments")
        .select("id", { count: "exact", head: true })
        .eq("pr_number", pr.number)
        .eq("resolved", false)

      return { pr, approvedBy, openComments: count ?? 0 }
    })
  )

  const readyCount = prsWithStatus.filter((p) => p.approvedBy.length >= REQUIRED_APPROVALS).length

  return (
    <div>
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-zinc-50">Pull Requests</h1>
          <p className="text-sm text-zinc-500 mt-1">
            {prs.length} open
            {readyCount > 0 && (
              <span className="ml-2 text-emerald-500">· {readyCount} ready to merge</span>
            )}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-600">Dual approval required</p>
          <p className="text-xs text-zinc-700 mt-0.5">
            {REQUIRED_APPROVALS} reviews before merge
          </p>
        </div>
      </div>

      {fetchError && (
        <div className="border border-red-900/60 bg-red-950/30 rounded-xl p-4 mb-6 text-sm text-red-400">
          <strong>GitHub error:</strong> {fetchError}
          <p className="text-xs text-red-600 mt-1">
            Check that GITHUB_TOKEN is set and has repo access to Ministry-Of-Human-Empowerment.
          </p>
        </div>
      )}

      {prsWithStatus.length === 0 && !fetchError ? (
        <div className="text-center py-24 text-zinc-600">
          <p className="text-sm">No open pull requests</p>
          <p className="text-xs mt-1 text-zinc-700">
            All clear — or push a branch to create one.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {prsWithStatus.map(({ pr, approvedBy, openComments }) => (
            <PRCard
              key={pr.id}
              pr={pr}
              approvedBy={approvedBy}
              openComments={openComments}
              currentUser={session?.user?.githubLogin ?? ""}
            />
          ))}
        </div>
      )}
    </div>
  )
}
