import Link from "next/link"

interface PR {
  number: number
  title: string
  user: { login: string; avatar_url: string } | null
  head: { ref: string }
  draft?: boolean
  created_at: string
}

interface Props {
  pr: PR
  approvedBy: string[]
  openComments: number
  currentUser: string
  hrefOverride?: string
}

const REQUIRED = 2

export default function PRCard({ pr, approvedBy, openComments, currentUser, hrefOverride }: Props) {
  const isReady = approvedBy.length >= REQUIRED
  const youApproved = approvedBy.includes(currentUser)

  return (
    <Link
      href={hrefOverride ?? `/admin/pr/${pr.number}`}
      className="block border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-colors bg-zinc-900/50 group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="text-xs text-zinc-500">#{pr.number}</span>
            {pr.draft && (
              <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">
                Draft
              </span>
            )}
            {isReady && (
              <span className="text-xs bg-emerald-900/60 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full">
                Ready to merge
              </span>
            )}
          </div>
          <h2 className="text-sm font-medium text-zinc-100 group-hover:text-white">
            {pr.title}
          </h2>
          <p className="text-xs text-zinc-500 mt-1">
            {pr.head.ref} · by {pr.user?.login ?? "unknown"}
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          {openComments > 0 && (
            <span className="text-xs text-zinc-400">
              {openComments} comment{openComments !== 1 ? "s" : ""}
            </span>
          )}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: REQUIRED }).map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  i < approvedBy.length ? "bg-emerald-500" : "bg-zinc-700"
                }`}
              />
            ))}
            <span className="text-xs text-zinc-500 ml-1">
              {approvedBy.length}/{REQUIRED}
            </span>
          </div>
        </div>
      </div>

      {youApproved && (
        <p className="text-xs text-emerald-500 mt-3">✓ You approved</p>
      )}
    </Link>
  )
}
