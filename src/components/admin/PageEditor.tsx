"use client"
import { useState } from "react"

interface Field {
  key: string
  label: string
  multiline?: boolean
}

interface Section {
  title: string
  key: string
  fields: Field[]
}

interface Props {
  page: string
  sections: Section[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValues: Record<string, Record<string, any>>
  previewUrl: string
}

export default function PageEditor({ page, sections, initialValues, previewUrl }: Props) {
  const [values, setValues] = useState(initialValues)
  const [prTitle, setPrTitle] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ number: number; url: string; title: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const hasChanges = JSON.stringify(values) !== JSON.stringify(initialValues)

  const updateField = (section: string, key: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [section]: { ...prev[section], [key]: value },
    }))
  }

  const propose = async () => {
    if (!prTitle.trim()) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch("/api/editor/propose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page, fields: values, prTitle: prTitle.trim() }),
      })
      const data = await res.json()
      if (res.ok) {
        setResult(data.pr)
        setShowModal(false)
        setPrTitle("")
      } else {
        setError(data.error ?? "Something went wrong")
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Success banner */}
      {result && (
        <div className="border border-emerald-800 bg-emerald-950/40 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-400">PR #{result.number} opened</p>
            <p className="text-xs text-emerald-700 mt-0.5">{result.title}</p>
          </div>
          <a
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-emerald-500 hover:text-emerald-300 border border-emerald-800 rounded-lg px-3 py-1.5 transition-colors"
          >
            View on GitHub ↗
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Edit form */}
        <div className="flex flex-col gap-6">
          {sections.map((section) => (
            <div key={section.key} className="border border-zinc-800 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-900/60">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  {section.title}
                </h3>
              </div>
              <div className="p-4 flex flex-col gap-4">
                {section.fields.map((field) => (
                  <div key={field.key}>
                    <label className="block text-xs text-zinc-500 mb-1.5">{field.label}</label>
                    {field.multiline ? (
                      <textarea
                        value={values[section.key]?.[field.key] ?? ""}
                        onChange={(e) => updateField(section.key, field.key, e.target.value)}
                        rows={3}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 resize-none focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    ) : (
                      <input
                        type="text"
                        value={values[section.key]?.[field.key] ?? ""}
                        onChange={(e) => updateField(section.key, field.key, e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={() => setShowModal(true)}
            disabled={!hasChanges}
            className="w-full py-3 rounded-xl bg-zinc-100 text-zinc-900 text-sm font-semibold hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {hasChanges ? "Propose Edit →" : "No changes yet"}
          </button>

          {error && (
            <p className="text-xs text-red-400 text-center">{error}</p>
          )}
        </div>

        {/* Live preview */}
        <div className="flex flex-col gap-2">
          <p className="text-xs text-zinc-600 uppercase tracking-widest font-semibold">Live site</p>
          <div className="border border-zinc-800 rounded-xl overflow-hidden" style={{ height: "600px" }}>
            <iframe
              src={previewUrl}
              className="w-full h-full border-0"
              title="Live site preview"
            />
          </div>
          <p className="text-xs text-zinc-700 text-center">
            Reference only — your edits will appear after the PR is merged and deployed
          </p>
        </div>
      </div>

      {/* PR title modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl">
            <h2 className="text-base font-semibold text-zinc-50 mb-1">Propose this edit</h2>
            <p className="text-xs text-zinc-500 mb-5">
              This will open a pull request on GitHub for review before publishing.
            </p>
            <label className="block text-xs text-zinc-500 mb-1.5">What does this change?</label>
            <input
              type="text"
              value={prTitle}
              onChange={(e) => setPrTitle(e.target.value)}
              placeholder="e.g. Update hero headline copy"
              autoFocus
              onKeyDown={(e) => { if (e.key === "Enter") propose() }}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors mb-5"
            />
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => { setShowModal(false); setPrTitle("") }}
                className="text-sm text-zinc-500 hover:text-zinc-300 px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={propose}
                disabled={!prTitle.trim() || submitting}
                className="text-sm bg-zinc-100 text-zinc-900 font-medium px-5 py-2 rounded-lg hover:bg-white transition-colors disabled:opacity-40"
              >
                {submitting ? "Opening PR…" : "Open PR →"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
