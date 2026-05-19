import { auth } from "@/auth"
import { getPR, getPRReviews, getDeploymentPreviewUrl } from "@/lib/github"
import { supabase } from "@/lib/supabase"
import PreviewViewer from "@/components/admin/PreviewViewer"
import ApprovalBar from "@/components/admin/ApprovalBar"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function PRPage({
  params,
}: {
  params: Promise<{ number: string }>
}) {
  const { number: numberStr } = await params
  const prNumber = parseInt(numberStr)
  if (isNaN(prNumber)) notFound()

  const session = await auth()
  const token = session?.user?.accessToken

  const [pr, reviews] = await Promise.all([
    getPR(prNumber, token).catch(() => null),
    getPRReviews(prNumber, token).catch(() => []),
  ])

  if (!pr) notFound()

  const previewUrl = await getDeploymentPreviewUrl(prNumber, pr.head.sha, token)

  const latestByUser: Record<string, string> = {}
  for (const r of reviews) {
    if (r.user?.login && r.state !== "COMMENTED") {
      latestByUser[r.user.login] = r.state
    }
  }
  const approvedBy = Object.entries(latestByUser)
    .filter(([, state]) => state === "APPROVED")
    .map(([login]) => login)

  const { data: comments } = await supabase
    .from("pr_comments")
    .select("*")
    .eq("pr_number", prNumber)
    .order("created_at", { ascending: true })

  return (
    <div>
      <div className="mb-6">
        <Link
          href="/admin"
          className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          ← All PRs
        </Link>
        <div className="mt-2 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-lg font-semibold text-zinc-50">
              #{pr.number} — {pr.title}
            </h1>
            <p className="text-sm text-zinc-500 mt-0.5">
              <span className="font-mono text-zinc-600">{pr.head.ref}</span>
              {pr.user?.login && <> · by {pr.user.login}</>}
            </p>
          </div>
          {pr.html_url && (
            <a
              href={pr.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 hover:text-zinc-300 border border-zinc-800 rounded-lg px-3 py-1.5 transition-colors shrink-0"
            >
              View on GitHub ↗
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        {/* Preview + comments */}
        <PreviewViewer
          prNumber={prNumber}
          previewUrl={previewUrl}
          comments={comments ?? []}
          currentUser={session?.user?.githubLogin ?? ""}
          currentUserAvatar={session?.user?.image ?? ""}
        />

        {/* Sidebar */}
        <div className="flex flex-col gap-4">
          <ApprovalBar
            prNumber={prNumber}
            approvedBy={approvedBy}
            currentUser={session?.user?.githubLogin ?? ""}
          />

          {/* PR details */}
          <div className="border border-zinc-800 rounded-xl p-4 bg-zinc-900/50">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
              Details
            </h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-zinc-500">Branch</dt>
                <dd className="text-zinc-300 font-mono text-xs">{pr.head.ref}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Author</dt>
                <dd className="text-zinc-300">{pr.user?.login ?? "—"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Commits</dt>
                <dd className="text-zinc-300">{pr.commits}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-500">Changes</dt>
                <dd className="text-xs">
                  <span className="text-emerald-500">+{pr.additions}</span>
                  {" "}
                  <span className="text-red-500">-{pr.deletions}</span>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Files</dt>
                <dd className="text-zinc-300">{pr.changed_files}</dd>
              </div>
            </dl>
          </div>

          {/* PR description */}
          {pr.body && (
            <div className="border border-zinc-800 rounded-xl p-4 bg-zinc-900/50">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
                Description
              </h3>
              <p className="text-sm text-zinc-400 whitespace-pre-wrap leading-relaxed">
                {pr.body}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
