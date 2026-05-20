import PRCard from "@/components/admin/PRCard"

const MOCK_PRS = [
  {
    id: 1,
    number: 4,
    title: "feat(homepage): update hero copy and call-to-action",
    user: { login: "cavino", avatar_url: "" },
    head: { ref: "feature/hero-update" },
    draft: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    approvedBy: ["steph"],
    openComments: 2,
  },
  {
    id: 2,
    number: 3,
    title: "feat(membership): add application form and intake flow",
    user: { login: "steph", avatar_url: "" },
    head: { ref: "feature/membership-form" },
    draft: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    approvedBy: ["steph", "cavino"],
    openComments: 0,
  },
  {
    id: 3,
    number: 2,
    title: "docs(mission): update vision statement and guiding values",
    user: { login: "cavino", avatar_url: "" },
    head: { ref: "docs/mission-update" },
    draft: true,
    created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    approvedBy: [],
    openComments: 0,
  },
]

export default function DemoPage() {
  const readyCount = MOCK_PRS.filter((p) => p.approvedBy.length >= 2).length

  return (
    <div>
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-zinc-50">Pull Requests</h1>
          <p className="text-sm text-zinc-500 mt-1">
            {MOCK_PRS.length} open
            {readyCount > 0 && (
              <span className="ml-2 text-emerald-500">· {readyCount} ready to merge</span>
            )}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-600">Dual approval required</p>
          <p className="text-xs text-zinc-700 mt-0.5">2 reviews before merge</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {MOCK_PRS.map(({ id, approvedBy, openComments, ...pr }) => (
          <PRCard
            key={id}
            pr={pr}
            approvedBy={approvedBy}
            openComments={openComments}
            currentUser="steph"
            hrefOverride={`/demo/pr/${pr.number}`}
          />
        ))}
      </div>
    </div>
  )
}
