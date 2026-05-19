"use client"
import { useState, useRef, useCallback } from "react"
import CommentPin from "./CommentPin"
import type { PRComment } from "@/lib/supabase"

interface Props {
  prNumber: number
  previewUrl: string | null
  comments: PRComment[]
  currentUser: string
  currentUserAvatar: string
}

export default function PreviewViewer({
  prNumber,
  previewUrl,
  comments: initial,
  currentUser,
  currentUserAvatar,
}: Props) {
  const [comments, setComments] = useState(initial)
  const [pendingPin, setPendingPin] = useState<{ x: number; y: number } | null>(null)
  const [commentText, setCommentText] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!overlayRef.current) return
    const rect = overlayRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setPendingPin({ x, y })
    setCommentText("")
  }, [])

  const submitComment = async () => {
    if (!pendingPin || !commentText.trim()) return
    setSubmitting(true)
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pr_number: prNumber,
          body: commentText.trim(),
          x_pct: pendingPin.x,
          y_pct: pendingPin.y,
          page_path: "/",
        }),
      })
      if (res.ok) {
        const newComment = await res.json()
        setComments((prev) => [...prev, newComment])
        setPendingPin(null)
        setCommentText("")
      }
    } finally {
      setSubmitting(false)
    }
  }

  const resolveComment = async (id: string) => {
    await fetch(`/api/comments?id=${id}`, { method: "DELETE" })
    setComments((prev) => prev.map((c) => (c.id === id ? { ...c, resolved: true } : c)))
  }

  const active = comments.filter((c) => !c.resolved)

  return (
    <div className="flex flex-col gap-4">
      {/* Preview frame */}
      <div
        className="relative border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950"
        style={{ aspectRatio: "16/9" }}
      >
        {previewUrl ? (
          <iframe
            src={previewUrl}
            className="w-full h-full border-0"
            title={`PR #${prNumber} preview`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-zinc-600">No preview available</p>
              <p className="text-xs text-zinc-700 mt-1">
                Vercel deployment pending or not connected
              </p>
            </div>
          </div>
        )}

        {/* Transparent click-capture overlay */}
        <div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="absolute inset-0 cursor-crosshair"
          title="Click anywhere to add a comment"
        />

        {/* Comment pins */}
        {active.map((comment) => (
          <CommentPin
            key={comment.id}
            comment={comment}
            onResolve={() => resolveComment(comment.id)}
            canResolve={comment.author_login === currentUser}
          />
        ))}

        {/* Pending pin */}
        {pendingPin && (
          <div
            className="absolute z-20 w-5 h-5 rounded-full bg-amber-400 border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ left: `${pendingPin.x}%`, top: `${pendingPin.y}%` }}
          />
        )}
      </div>

      {/* Hint */}
      {!pendingPin && (
        <p className="text-xs text-zinc-600 text-center">
          Click anywhere on the preview to drop a comment
        </p>
      )}

      {/* Comment input */}
      {pendingPin && (
        <div className="border border-amber-800/60 rounded-xl p-4 bg-zinc-900 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            {currentUserAvatar && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={currentUserAvatar} alt="" className="w-5 h-5 rounded-full" />
            )}
            <p className="text-xs text-amber-400">
              Comment at ({pendingPin.x.toFixed(0)}%, {pendingPin.y.toFixed(0)}%)
            </p>
          </div>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="What do you see here?"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 resize-none focus:outline-none focus:border-zinc-500"
            rows={3}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) submitComment()
              if (e.key === "Escape") {
                setPendingPin(null)
                setCommentText("")
              }
            }}
          />
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => {
                setPendingPin(null)
                setCommentText("")
              }}
              className="text-xs text-zinc-500 hover:text-zinc-300 px-3 py-1.5 rounded-lg transition-colors"
            >
              Cancel (Esc)
            </button>
            <button
              onClick={submitComment}
              disabled={!commentText.trim() || submitting}
              className="text-xs bg-zinc-100 text-zinc-900 px-4 py-1.5 rounded-lg font-medium disabled:opacity-40 hover:bg-white transition-colors"
            >
              {submitting ? "Adding…" : "Add comment (⌘↵)"}
            </button>
          </div>
        </div>
      )}

      {/* Thread */}
      {active.length > 0 && (
        <div className="border border-zinc-800 rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              {active.length} open comment{active.length !== 1 ? "s" : ""}
            </h3>
          </div>
          <div className="divide-y divide-zinc-800">
            {active.map((comment) => (
              <div key={comment.id} className="p-4 flex gap-3">
                {comment.author_avatar && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={comment.author_avatar}
                    alt=""
                    className="w-6 h-6 rounded-full shrink-0 mt-0.5"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-zinc-300">
                      {comment.author_login}
                    </span>
                    <span className="text-xs text-zinc-600">
                      {new Date(comment.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{comment.body}</p>
                  {comment.author_login === currentUser && (
                    <button
                      onClick={() => resolveComment(comment.id)}
                      className="text-xs text-zinc-600 hover:text-emerald-400 mt-2 transition-colors"
                    >
                      Resolve
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
