"use client"
import { useState, useEffect, useRef, useCallback } from "react"

interface FieldClick {
  field: string
  value: string
  rect: { top: number; left: number; width: number; height: number }
}

interface Change {
  field: string
  label: string
  original: string
  current: string
}

const FIELD_LABELS: Record<string, string> = {
  "hero.eyebrow": "Hero eyebrow",
  "hero.headline": "Hero headline",
  "hero.tagline": "Hero tagline",
  "hero.body": "Hero description",
  "hero.cta_primary_label": "Primary button",
  "hero.cta_secondary_label": "Secondary button",
  "statement.quote": "Statement of Faith quote",
  "statement.attribution": "Statement attribution",
  "ecosystem.eyebrow": "Ecosystem section title",
  "ecosystem.body": "Ecosystem description",
  "join.headline": "Join section headline",
  "join.body": "Join section description",
  "join.cta_label": "Join button label",
}

export default function VisualEditor() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [activeField, setActiveField] = useState<FieldClick | null>(null)
  const [editValue, setEditValue] = useState("")
  const [changes, setChanges] = useState<Record<string, Change>>({})
  const [showPRModal, setShowPRModal] = useState(false)
  const [prTitle, setPrTitle] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<{ number: number; url: string } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [iframeReady, setIframeReady] = useState(false)

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "mohe-field-click") {
        const click = e.data as FieldClick & { type: string }
        setActiveField(click)
        setEditValue(
          changes[click.field]?.current ?? click.value
        )
      }
    }
    window.addEventListener("message", handler)
    return () => window.removeEventListener("message", handler)
  }, [changes])

  const sendUpdate = useCallback((field: string, value: string) => {
    iframeRef.current?.contentWindow?.postMessage({ type: "mohe-update", field, value }, "*")
  }, [])

  const handleTextChange = (value: string) => {
    setEditValue(value)
    sendUpdate(activeField!.field, value)
  }

  const applyChange = () => {
    if (!activeField) return
    const field = activeField.field
    const original = changes[field]?.original ?? activeField.value
    setChanges((prev) => ({
      ...prev,
      [field]: { field, label: FIELD_LABELS[field] ?? field, original, current: editValue },
    }))
    setActiveField(null)
  }

  const cancelChange = () => {
    if (!activeField) return
    const original = changes[activeField.field]?.original ?? activeField.value
    sendUpdate(activeField.field, original)
    setActiveField(null)
  }

  const propose = async () => {
    if (!prTitle.trim()) return
    setSubmitting(true)
    setError(null)

    const fields: Record<string, Record<string, string>> = {}
    for (const change of Object.values(changes)) {
      const [section, key] = change.field.split(".")
      if (!fields[section]) fields[section] = {}
      fields[section][key] = change.current
    }

    try {
      const res = await fetch("/api/editor/propose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ page: "home", fields, prTitle: prTitle.trim() }),
      })
      const data = await res.json()
      if (res.ok) {
        setResult(data.pr)
        setShowPRModal(false)
        setChanges({})
        setPrTitle("")
      } else {
        setError(data.error ?? "Something went wrong")
      }
    } finally {
      setSubmitting(false)
    }
  }

  const changeCount = Object.keys(changes).length

  return (
    <div className="flex flex-col h-[calc(100vh-60px)]">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-zinc-950 shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-zinc-300">Visual Editor</span>
          <span className="text-zinc-700">·</span>
          <span className="text-xs text-zinc-600">Homepage</span>
          {changeCount > 0 && (
            <span className="text-xs bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">
              {changeCount} change{changeCount !== 1 ? "s" : ""}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {result && (
            <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
              PR #{result.number} opened ↗
            </a>
          )}
          <button
            onClick={() => setShowPRModal(true)}
            disabled={changeCount === 0}
            className="text-xs bg-zinc-100 text-zinc-900 font-semibold px-4 py-1.5 rounded-lg hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Propose Edit →
          </button>
        </div>
      </div>

      {/* Iframe */}
      <div className="relative flex-1 overflow-hidden">
        {!iframeReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-950 z-10">
            <p className="text-sm text-zinc-600">Loading site…</p>
          </div>
        )}
        <iframe
          ref={iframeRef}
          src="/?edit=1"
          className="w-full h-full border-0"
          title="Visual editor"
          onLoad={() => setIframeReady(true)}
        />

        {/* Floating edit panel */}
        {activeField && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-20">
            <div className="bg-zinc-900 border border-amber-500/40 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-amber-400">
                  {FIELD_LABELS[activeField.field] ?? activeField.field}
                </p>
                <button onClick={cancelChange} className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">✕ Cancel</button>
              </div>
              <textarea
                value={editValue}
                onChange={(e) => handleTextChange(e.target.value)}
                autoFocus
                rows={editValue.length > 80 ? 3 : 2}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-100 resize-none focus:outline-none focus:border-amber-500/60 transition-colors"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) applyChange()
                  if (e.key === "Escape") cancelChange()
                }}
              />
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-zinc-600">⌘↵ to apply · Esc to cancel</p>
                <button
                  onClick={applyChange}
                  className="text-xs bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold px-4 py-1.5 rounded-lg transition-colors"
                >
                  Apply change ✓
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Changes sidebar (when no active field) */}
        {!activeField && changeCount > 0 && (
          <div className="absolute top-4 right-4 w-64 bg-zinc-900/95 border border-zinc-700 rounded-xl p-3 shadow-xl backdrop-blur-sm">
            <p className="text-xs font-semibold text-zinc-400 mb-2 uppercase tracking-wider">Pending changes</p>
            <div className="space-y-2">
              {Object.values(changes).map((c) => (
                <div key={c.field} className="text-xs">
                  <p className="text-zinc-400 font-medium">{c.label}</p>
                  <p className="text-zinc-600 truncate">{c.current}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* PR Modal */}
      {showPRModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl">
            <h2 className="text-base font-semibold text-zinc-50 mb-1">Propose {changeCount} edit{changeCount !== 1 ? "s" : ""}</h2>
            <p className="text-xs text-zinc-500 mb-4">Opens a pull request on GitHub for review before publishing.</p>
            <div className="space-y-2 mb-5 border border-zinc-800 rounded-xl p-3 bg-zinc-950">
              {Object.values(changes).map((c) => (
                <div key={c.field} className="text-xs flex gap-2">
                  <span className="text-zinc-500 w-32 shrink-0">{c.label}</span>
                  <span className="text-zinc-300 truncate">{c.current}</span>
                </div>
              ))}
            </div>
            <label className="block text-xs text-zinc-500 mb-1.5">Describe this change</label>
            <input
              type="text"
              value={prTitle}
              onChange={(e) => setPrTitle(e.target.value)}
              placeholder="e.g. Update hero headline and tagline"
              autoFocus
              onKeyDown={(e) => { if (e.key === "Enter") propose() }}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 mb-5"
            />
            {error && <p className="text-xs text-red-400 mb-3">{error}</p>}
            <div className="flex gap-3 justify-end">
              <button onClick={() => setShowPRModal(false)} className="text-sm text-zinc-500 hover:text-zinc-300 px-4 py-2 rounded-lg transition-colors">Cancel</button>
              <button onClick={propose} disabled={!prTitle.trim() || submitting} className="text-sm bg-zinc-100 text-zinc-900 font-medium px-5 py-2 rounded-lg hover:bg-white transition-colors disabled:opacity-40">
                {submitting ? "Opening PR…" : "Open PR →"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
