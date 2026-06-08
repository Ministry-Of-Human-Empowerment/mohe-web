'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ApplyForm() {
  const [affirmed, setAffirmed] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!affirmed) return
    setStatus('submitting')
    try {
      const res = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, agreedToTerms: true, date: new Date().toISOString() }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-semibold text-white mb-4">Welcome to the Ministry</p>
        <p className="text-stone-300 max-w-md mx-auto leading-relaxed">
          Thank you, {form.name}. Your membership has been received. We&apos;ll be in touch at {form.email}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={affirmed}
          onChange={e => setAffirmed(e.target.checked)}
          className="mt-1 w-5 h-5 rounded border-stone-600 bg-stone-800 accent-amber-500 shrink-0"
        />
        <span className="text-stone-300 text-sm leading-relaxed group-hover:text-white transition-colors">
          I affirm the mission, principles, and Statement of Faith of the Ministry of Human Empowerment and choose to join this voluntary community.
        </span>
      </label>

      <div>
        <label className="block text-sm font-medium text-stone-300 mb-2">Name</label>
        <input
          type="text"
          required
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-600 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-300 mb-2">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-600 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
          placeholder="your@email.com"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm">Something went wrong. Please try again or contact us directly.</p>
      )}

      <button
        type="submit"
        disabled={!affirmed || status === 'submitting'}
        className="w-full sm:w-auto px-10 py-3 rounded-full bg-amber-500 text-stone-900 text-sm font-semibold hover:bg-amber-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Joining…' : 'Join the Ministry'}
      </button>

      <p className="text-xs text-stone-500 leading-relaxed">
        By joining, you acknowledge and agree to the Ministry&apos;s{' '}
        <Link href="/membership/agreement" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors">
          Membership Agreement
        </Link>
        .
      </p>
    </form>
  )
}
