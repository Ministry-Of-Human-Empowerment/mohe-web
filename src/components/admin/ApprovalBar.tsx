"use client"
import { useState } from "react"

interface Props {
  prNumber: number
  approvedBy: string[]
  currentUser: string
}

const REQUIRED = 2

export default function ApprovalBar({ prNumber, approvedBy: initial, currentUser }: Props) {
  const [approvedBy, setApprovedBy] = useState(initial)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const youApproved = approvedBy.includes(currentUser)
  const isReady = approvedBy.length >= REQUIRED

  const approve = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/prs/${prNumber}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "APPROVE",
          body: "Approved via MOHE admin dashboard.",
        }),
      })
      if (res.ok) {
        setApprovedBy((prev) => [...prev.filter((l) => l !== currentUser), currentUser])
      } else {
        const data = await res.json()
        setError(data.error ?? "Failed to approve")
      }
    } catch {
      setError("Network error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="border border-zinc-800 rounded-xl p-4 bg-zinc-900/50">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
        Approval
      </h3>

      <div className="flex gap-1.5 mb-4">
        {Array.from({ length: REQUIRED }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
              i < approvedBy.length ? "bg-emerald-500" : "bg-zinc-700"
            }`}
          />
        ))}
      </div>

      {isReady ? (
        <p className="text-sm font-medium text-emerald-400 mb-3">✓ Ready to merge</p>
      ) : (
        <p className="text-xs text-zinc-500 mb-4">
          {approvedBy.length}/{REQUIRED} — {REQUIRED - approvedBy.length} more needed
        </p>
      )}

      {approvedBy.length > 0 && (
        <div className="mb-4 space-y-1">
          {approvedBy.map((login) => (
            <div key={login} className="flex items-center gap-2 text-xs text-emerald-500">
              <span>✓</span>
              <span>{login}</span>
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-xs text-red-400 mb-3">{error}</p>}

      {!youApproved && currentUser && (
        <button
          onClick={approve}
          disabled={loading}
          className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Approving…" : "Approve PR"}
        </button>
      )}

      {youApproved && (
        <p className="text-xs text-emerald-600 text-center">You approved this PR</p>
      )}
    </div>
  )
}
