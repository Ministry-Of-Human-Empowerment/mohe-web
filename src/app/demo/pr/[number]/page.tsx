import { notFound } from "next/navigation"
import DemoPRDetail from "@/components/admin/DemoPRDetail"
import type { PRComment } from "@/lib/supabase"

const MOCK_PRS = {
  4: {
    number: 4,
    title: "feat(homepage): update hero copy and call-to-action",
    branch: "feature/hero-update",
    author: "cavino",
    commits: 3,
    additions: 47,
    deletions: 12,
    changedFiles: 4,
    body: "Updates the homepage hero section with the final approved copy from Cavino's doc.\n\n- New headline: 'A sanctuary for the human spirit'\n- Updated CTA button labels\n- Added secondary tagline below hero\n\nNeeds Steph's approval before merging to dev.",
    initialApprovedBy: ["cavino"],
    initialComments: [
      {
        id: "demo-1",
        pr_number: 4,
        author_login: "cavino",
        author_avatar: "",
        body: "The button spacing feels tight on mobile. Can we add more padding?",
        x_pct: 52,
        y_pct: 68,
        page_path: "/",
        resolved: false,
        created_at: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
      },
      {
        id: "demo-2",
        pr_number: 4,
        author_login: "steph",
        author_avatar: "",
        body: "Love the new headline. The tagline font size could go up one step.",
        x_pct: 35,
        y_pct: 42,
        page_path: "/",
        resolved: false,
        created_at: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
      },
    ] as PRComment[],
  },
  3: {
    number: 3,
    title: "feat(membership): add application form and intake flow",
    branch: "feature/membership-form",
    author: "steph",
    commits: 8,
    additions: 214,
    deletions: 5,
    changedFiles: 9,
    body: "Full membership application form with field validation and Supabase submission.\n\n- Name, email, phone fields\n- 'Why do you want to join?' free text\n- Submit → Supabase insert → confirmation screen\n- Mobile-first layout\n\nBoth approvals received — ready to merge.",
    initialApprovedBy: ["steph", "cavino"],
    initialComments: [] as PRComment[],
  },
  2: {
    number: 2,
    title: "docs(mission): update vision statement and guiding values",
    branch: "docs/mission-update",
    author: "cavino",
    commits: 1,
    additions: 28,
    deletions: 14,
    changedFiles: 2,
    body: "Draft — updating the mission page MDX with the revised vision statement.\nNot ready for review yet.",
    initialApprovedBy: [],
    initialComments: [] as PRComment[],
  },
}

export default async function DemoPRPage({
  params,
}: {
  params: Promise<{ number: string }>
}) {
  const { number: numberStr } = await params
  const prNumber = parseInt(numberStr) as keyof typeof MOCK_PRS
  const mock = MOCK_PRS[prNumber]
  if (!mock) notFound()

  const { initialApprovedBy, initialComments, ...pr } = mock

  return (
    <DemoPRDetail
      pr={pr}
      initialApprovedBy={initialApprovedBy}
      initialComments={initialComments}
    />
  )
}
