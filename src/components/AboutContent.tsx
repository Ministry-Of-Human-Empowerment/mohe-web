"use client"
import React, { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import type aboutJson from "../../content/pages/about.json"

type Content = typeof aboutJson

interface Props {
  content: Content
  editMode: boolean
}

export default function AboutContent({ content, editMode }: Props) {
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-5%,rgba(196,30,30,0.08),transparent)] pointer-events-none" />
        <E field="hero.eyebrow" value={get("hero.eyebrow")} className="text-[10px] font-semibold tracking-[0.35em] uppercase text-zinc-600 mb-5 block" />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-50 max-w-3xl mx-auto leading-tight mb-6">
          <E field="hero.headline" value={get("hero.headline")} />
        </h1>
        <p className="text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">
          <E field="hero.body" value={get("hero.body")} />
        </p>
      </section>

      {divider}

      {/* What is MOHE */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <E field="what_is_mohe.eyebrow" value={get("what_is_mohe.eyebrow")} className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-10 block" />
          <div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
            {local.what_is_mohe.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {divider}

      {/* What is a PMA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <E field="pma.eyebrow" value={get("pma.eyebrow")} className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-10 block" />
          <div className="border border-white/8 rounded-2xl p-8 bg-white/[0.02] space-y-5 text-sm text-zinc-400 leading-relaxed">
            {local.pma.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {divider}

      {/* Founder */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <E field="founder.eyebrow" value={get("founder.eyebrow")} className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-10 block" />
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="shrink-0 w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
              <Image src="/mohe-logo-bnw.png" alt="MOHE" width={48} height={48} className="opacity-60" />
            </div>
            <div>
              <E field="founder.name" value={get("founder.name")} as="h2" className="text-xl font-bold text-zinc-100 mb-1 block" />
              <E field="founder.title" value={get("founder.title")} className="text-xs text-zinc-600 mb-4 block" />
              <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                {local.founder.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {divider}

      {/* Ecosystem */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <E field="ecosystem.eyebrow" value={get("ecosystem.eyebrow")} className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 text-center mb-4 block" />
          <p className="text-center text-zinc-500 text-sm mb-14 max-w-lg mx-auto leading-relaxed">
            <E field="ecosystem.body" value={get("ecosystem.body")} />
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {local.ecosystem.projects.map((p) => (
              <div
                key={p.name}
                className="p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-white/14 hover:bg-white/[0.03] transition-all"
              >
                <p className="text-sm font-semibold text-zinc-200 mb-2">{p.name}</p>
                <p className="text-xs text-zinc-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
            <E field="cta.body" value={get("cta.body")} />
          </p>
          <Link
            href={get("cta.cta_href")}
            className="inline-block px-10 py-3 rounded-full bg-red-700 hover:bg-red-600 text-white text-sm font-medium transition-colors"
          >
            <E field="cta.cta_label" value={get("cta.cta_label")} />
          </Link>
        </div>
      </section>
    </div>
  )
}
