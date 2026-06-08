"use client"
import React, { useState, useEffect, useCallback } from "react"
import type missionJson from "../../content/pages/mission.json"

type Content = typeof missionJson

interface Props {
  content: Content
  editMode: boolean
}

export default function MissionContent({ content, editMode }: Props) {
  const [local, setLocal] = useState(content)
  const [activeField, setActiveField] = useState<string | null>(null)

  // Listen for value updates from admin parent (visual editor)
  useEffect(() => {
    if (!editMode) return
    const handler = (e: MessageEvent) => {
      if (e.data?.type !== "mohe-update") return
      const { field, value } = e.data
      const [section, key] = field.split(".")
      setLocal((prev) => ({
        ...prev,
        [section]: { ...(prev as Record<string, unknown>)[section] as object, [key]: value },
      }))
    }
    window.addEventListener("message", handler)
    return () => window.removeEventListener("message", handler)
  }, [editMode])

  const handleClick = useCallback(
    (field: string, value: string, el: HTMLElement) => {
      if (!editMode) return
      setActiveField(field)
      const rect = el.getBoundingClientRect()
      window.parent.postMessage(
        { type: "mohe-field-click", field, value, rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height } },
        "*"
      )
    },
    [editMode]
  )

  // Editable text field — click-to-edit in the visual editor, plain text otherwise
  const E = useCallback(
    ({ field, value, as: Tag = "span", className }: { field: string; value: string; as?: keyof React.JSX.IntrinsicElements; className?: string }) => {
      if (!editMode) return <Tag className={className}>{value}</Tag>
      const isActive = activeField === field
      return (
        <Tag
          className={`${className ?? ""} cursor-pointer transition-all outline-none ${
            isActive
              ? "ring-2 ring-amber-400 ring-offset-2 ring-offset-transparent rounded-sm bg-amber-400/10"
              : "hover:ring-2 hover:ring-amber-400/60 hover:ring-offset-1 hover:ring-offset-transparent rounded-sm hover:bg-amber-400/5"
          }`}
          onClick={(e) => {
            e.stopPropagation()
            handleClick(field, value, e.currentTarget as HTMLElement)
          }}
          title="Click to edit"
        >
          {(local as unknown as Record<string, Record<string, string>>)[field.split(".")[0]]?.[field.split(".")[1]] ?? value}
        </Tag>
      )
    },
    [editMode, activeField, handleClick, local]
  )

  const get = (field: string): string => {
    const [s, k] = field.split(".")
    return (local as unknown as Record<string, Record<string, string>>)[s]?.[k] ?? ""
  }

  const divider = (
    <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
  )

  return (
    <div className="text-[#EDE8DC]">
      {editMode && (
        <div className="fixed top-0 left-0 right-0 z-[9999] bg-amber-500 text-zinc-900 text-xs font-semibold text-center py-1.5 tracking-wide">
          ✏️ Edit Mode — click any highlighted text to edit
        </div>
      )}

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-5%,rgba(196,30,30,0.1),transparent)] pointer-events-none" />
        <E field="hero.eyebrow" value={get("hero.eyebrow")} className="text-[10px] font-semibold tracking-[0.35em] uppercase text-zinc-600 mb-5 block" />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-50 max-w-3xl mx-auto leading-tight mb-6">
          <E field="hero.headline" value={get("hero.headline")} />
        </h1>
        <p className="text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">
          <E field="hero.body" value={get("hero.body")} />
        </p>
      </section>

      {divider}

      {/* Statement of Faith */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <E field="statement.eyebrow" value={get("statement.eyebrow")} className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-12 block" />

          <div className="space-y-8 text-zinc-300 leading-relaxed">
            {local.statement.intro_paragraphs.map((p, i) => (
              <p key={i} className="text-base">{p}</p>
            ))}

            {/* We Affirm block */}
            <div className="border-l-2 border-red-800/60 pl-6 py-2 space-y-4">
              <E field="statement.affirm_heading" value={get("statement.affirm_heading")} as="p" className="text-sm font-semibold text-zinc-400 tracking-wider uppercase mb-4 block" />
              <ul className="space-y-3">
                {local.statement.affirmations.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span className="text-red-700 mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {local.statement.body_paragraphs.map((p, i) => (
              <p key={i} className="text-base">{p}</p>
            ))}

            {/* Privacy */}
            <div className="border border-white/8 rounded-2xl p-6 bg-white/[0.02]">
              <E field="privacy.heading" value={get("privacy.heading")} as="h3" className="text-sm font-semibold text-zinc-200 mb-3 tracking-wide block" />
              {local.privacy.paragraphs.map((p, i) => (
                <p key={i} className={`text-sm text-zinc-400 leading-relaxed ${i < local.privacy.paragraphs.length - 1 ? "mb-4" : ""}`}>{p}</p>
              ))}
            </div>

            <p className="text-base">{local.statement.closing}</p>
          </div>
        </div>
      </section>

      {divider}

      {/* Our Commitments */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <E field="commitments.eyebrow" value={get("commitments.eyebrow")} className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-12 block" />
          <div className="space-y-4">
            {local.commitments.items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-white/6 bg-white/[0.02]">
                <div className="text-xs text-red-700 font-mono mt-0.5 shrink-0">0{i + 1}</div>
                <p className="text-sm text-zinc-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {divider}

      {/* Purpose */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <E field="purpose.eyebrow" value={get("purpose.eyebrow")} className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-4 block" />
          <p className="text-sm text-zinc-500 leading-relaxed mb-10 max-w-xl">
            <E field="purpose.intro" value={get("purpose.intro")} />
          </p>
          <div className="space-y-3">
            {local.purpose.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-red-700 mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honor */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center border border-white/8 rounded-2xl p-10 bg-white/[0.02]">
          <p className="text-sm text-zinc-400 leading-relaxed italic">
            &ldquo;<E field="honor.quote" value={get("honor.quote")} />&rdquo;
          </p>
          <p className="mt-4 text-[10px] text-zinc-700 tracking-widest uppercase">
            — <E field="honor.attribution" value={get("honor.attribution")} />
          </p>
        </div>
      </section>
    </div>
  )
}
