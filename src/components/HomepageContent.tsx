"use client"
import React, { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import type homeJson from "../../content/pages/home.json"

type Content = typeof homeJson

const pillars = [
  { numeral: "I", title: "Human Sovereignty", body: "Every individual possesses an inherent right to sovereignty over their own mind, body, consciousness, and personal information. This right is God-given, not granted by government." },
  { numeral: "II", title: "Privacy as Sacred", body: "Privacy is a natural and essential condition for the flourishing of life. A person's thoughts, consciousness, and personal information are extensions of the individual and remain their rightful property." },
  { numeral: "III", title: "Voluntary Community", body: "Life flourishes most fully through voluntary association, informed consent, ease, dignity, and mutual respect for personal sovereignty." },
]

const affirmations = [
  "Life, awareness, and creation are sacred",
  "The expansion of consciousness is a natural and desirable path",
  "Beauty emerges from alignment with the flow of life",
  "Truth is revealed through direct experience, reflection, and communion with nature",
  "Every individual possesses an inherent right to sovereignty over mind, body, and consciousness",
  "Privacy and convenience should coexist harmoniously",
]

const projects = [
  { name: "FlowBond", desc: "Layer 0 identity & connection protocol" },
  { name: "FlowCastle", desc: "Sovereign digital spaces" },
  { name: "FlowGarden", desc: "Garden intelligence & natural health" },
  { name: "FlowNation", desc: "Faith-based community & nation-building" },
  { name: "Captain's Log", desc: "Personal sovereignty & journaling" },
  { name: "Feed a Brain", desc: "Medical empowerment & brain health" },
]

interface Props {
  content: Content
  editMode: boolean
}

export default function HomepageContent({ content, editMode }: Props) {
  const [local, setLocal] = useState(content)
  const [activeField, setActiveField] = useState<string | null>(null)
  const activeFieldRef = useRef<string | null>(null)

  // Listen for value updates from admin parent
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
      activeFieldRef.current = field
      setActiveField(field)
      const rect = el.getBoundingClientRect()
      window.parent.postMessage(
        { type: "mohe-field-click", field, value, rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height } },
        "*"
      )
    },
    [editMode]
  )

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
          {(local as Record<string, Record<string, string>>)[field.split(".")[0]]?.[field.split(".")[1]] ?? value}
        </Tag>
      )
    },
    [editMode, activeField, handleClick, local]
  )

  const get = (field: string): string => {
    const [s, k] = field.split(".")
    return (local as Record<string, Record<string, string>>)[s]?.[k] ?? ""
  }

  return (
    <div className="text-[#EDE8DC]">
      {editMode && (
        <div className="fixed top-0 left-0 right-0 z-[9999] bg-amber-500 text-zinc-900 text-xs font-semibold text-center py-1.5 tracking-wide">
          ✏️ Edit Mode — click any highlighted text to edit
        </div>
      )}

      {/* Hero */}
      <section className={`relative flex flex-col items-center justify-center px-6 text-center overflow-hidden ${editMode ? "pt-28 pb-28" : "pt-24 pb-28"}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(196,30,30,0.12),transparent)] pointer-events-none" />
        <Image src="/mohe-logo.png" alt="Phoenix Brain — Ministry of Human Empowerment" width={160} height={160} priority className="mb-8 drop-shadow-[0_0_60px_rgba(196,30,30,0.35)]" />
        <E field="hero.eyebrow" value={get("hero.eyebrow")} className="text-[10px] font-semibold tracking-[0.35em] uppercase text-zinc-600 mb-5 block" />
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50 max-w-4xl leading-[1.05] mb-6">
          <E field="hero.headline" value={get("hero.headline")} />
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed italic mb-4">
          "<E field="hero.tagline" value={get("hero.tagline")} />"
        </p>
        <p className="text-sm text-zinc-500 max-w-xl leading-relaxed mb-10">
          <E field="hero.body" value={get("hero.body")} />
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href={get("hero.cta_primary_href")} className="px-8 py-3 rounded-full bg-red-700 hover:bg-red-600 text-white text-sm font-medium transition-colors">
            <E field="hero.cta_primary_label" value={get("hero.cta_primary_label")} />
          </Link>
          <Link href={get("hero.cta_secondary_href")} className="px-8 py-3 rounded-full border border-white/15 text-zinc-300 text-sm font-medium hover:border-white/35 hover:text-zinc-100 transition-colors">
            <E field="hero.cta_secondary_label" value={get("hero.cta_secondary_label")} />
          </Link>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Core Principles */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 text-center mb-14">Core Principles</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div key={p.numeral} className="rounded-2xl border border-white/8 p-7 bg-white/[0.02] hover:border-red-900/40 hover:bg-white/[0.03] transition-all">
                <div className="text-3xl font-serif text-red-700/80 mb-5">{p.numeral}</div>
                <h3 className="text-sm font-semibold text-zinc-100 mb-3 tracking-wide">{p.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-16" />
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-red-700/50 text-5xl font-serif mb-6">&ldquo;</div>
          <blockquote className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light">
            <E field="statement.quote" value={get("statement.quote")} />
          </blockquote>
          <cite className="block mt-8 text-[10px] text-zinc-600 tracking-[0.3em] uppercase not-italic">
            — <E field="statement.attribution" value={get("statement.attribution")} />
          </cite>
        </div>
        <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mt-16" />
      </section>

      {/* We Affirm */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 text-center mb-14">We Affirm</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {affirmations.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-white/[0.02]">
                <div className="w-1 h-1 rounded-full bg-red-600 mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Ecosystem */}
      <section className="px-6 py-20 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(196,30,30,0.05),transparent)]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 text-center mb-4">
            <E field="ecosystem.eyebrow" value={get("ecosystem.eyebrow")} />
          </p>
          <p className="text-center text-zinc-500 text-sm mb-12 max-w-lg mx-auto leading-relaxed">
            <E field="ecosystem.body" value={get("ecosystem.body")} />
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {projects.map((p) => (
              <div key={p.name} className="p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-white/16 hover:bg-white/[0.04] transition-all">
                <p className="text-sm font-semibold text-zinc-200 mb-1">{p.name}</p>
                <p className="text-xs text-zinc-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-20" />
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-8">Founded By</p>
          <div className="inline-flex items-center gap-4 border border-white/10 rounded-2xl px-8 py-6 bg-white/[0.02]">
            <div className="text-left">
              <p className="text-base font-semibold text-zinc-100">Cavin Balaster</p>
              <p className="text-xs text-zinc-500 mt-0.5">Founding Trustee & Senior Chairman</p>
              <p className="text-xs text-zinc-700 mt-1">Est. May 8, 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto text-center border border-red-900/30 rounded-3xl p-12 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(196,30,30,0.1),transparent)]">
          <Image src="/mohe-logo.png" alt="MOHE" width={56} height={56} className="mx-auto mb-6 drop-shadow-[0_0_20px_rgba(196,30,30,0.4)]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-50 mb-4">
            <E field="join.headline" value={get("join.headline")} />
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-md mx-auto">
            <E field="join.body" value={get("join.body")} />
          </p>
          <Link href={get("join.cta_href")} className="inline-block px-10 py-3 rounded-full bg-red-700 hover:bg-red-600 text-white text-sm font-medium transition-colors">
            <E field="join.cta_label" value={get("join.cta_label")} />
          </Link>
        </div>
      </section>
    </div>
  )
}
