import PageEditor from "@/components/admin/PageEditor"
import homeContent from "../../../../content/pages/home.json"

const SECTIONS = [
  {
    title: "Hero",
    key: "hero",
    fields: [
      { key: "eyebrow", label: "Eyebrow (small text above headline)" },
      { key: "headline", label: "Headline" },
      { key: "body", label: "Body copy", multiline: true },
      { key: "cta_primary_label", label: "Primary button label" },
      { key: "cta_primary_href", label: "Primary button link" },
      { key: "cta_secondary_label", label: "Secondary button label" },
      { key: "cta_secondary_href", label: "Secondary button link" },
    ],
  },
  {
    title: "Footer",
    key: "footer",
    fields: [
      { key: "legal", label: "Legal text (after the year)" },
    ],
  },
]

export default function EditorPage() {
  return (
    <div>
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-zinc-50">Editor</h1>
          <p className="text-sm text-zinc-500 mt-1">
            Edit page content — changes open a PR for review before going live.
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-600">Homepage</p>
          <p className="text-xs text-zinc-700 mt-0.5">humanempowerment.vip</p>
        </div>
      </div>

      <PageEditor
        page="home"
        sections={SECTIONS}
        initialValues={homeContent}
        previewUrl="https://humanempowerment.vip"
      />
    </div>
  )
}
