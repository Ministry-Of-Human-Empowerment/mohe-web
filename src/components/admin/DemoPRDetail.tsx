"use client"
import { useState, useRef, useCallback } from "react"
import Link from "next/link"
import CommentPin from "./CommentPin"
import type { PRComment } from "@/lib/supabase"

interface MockPR {
  number: number
  title: string
  branch: string
  author: string
  commits: number
  additions: number
  deletions: number
  changedFiles: number
  body: string
}

interface Props {
  pr: MockPR
  initialApprovedBy: string[]
  initialComments: PRComment[]
}

const REQUIRED = 2
const CURRENT_USER = "steph"
const CURRENT_AVATAR = ""

export default function DemoPRDetail({ pr, initialApprovedBy, initialComments }: Props) {
  const [approvedBy, setApprovedBy] = useState(initialApprovedBy)
  const [comments, setComments] = useState(initialComments)
  const [pendingPin, setPendingPin] = useState<{ x: number; y: number } | null>(null)
  const [commentText, setCommentText] = useState("")
  const overlayRef = useRef<HTMLDivElement>(null)

  const youApproved = approvedBy.includes(CURRENT_USER)
  const isReady = approvedBy.length >= REQUIRED

  const approve = () => {
    if (!youApproved) {
      setApprovedBy((prev) => [...prev, CURRENT_USER])
    }
  }

  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!overlayRef.current) return
    const rect = overlayRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setPendingPin({ x, y })
    setCommentText("")
  }, [])

  const submitComment = () => {
    if (!pendingPin || !commentText.trim()) return
    const newComment: PRComment = {
      id: crypto.randomUUID(),
      pr_number: pr.number,
      author_login: CURRENT_USER,
      author_avatar: CURRENT_AVATAR,
      body: commentText.trim(),
      x_pct: pendingPin.x,
      y_pct: pendingPin.y,
      page_path: "/",
      resolved: false,
      created_at: new Date().toISOString(),
    }
    setComments((prev) => [...prev, newComment])
    setPendingPin(null)
    setCommentText("")
  }

  const resolveComment = (id: string) => {
    setComments((prev) => prev.map((c) => (c.id === id ? { ...c, resolved: true } : c)))
  }

  const active = comments.filter((c) => !c.resolved)

  return (
    <div>
      <div className="mb-6">
        <Link href="/demo" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
          ← All PRs
        </Link>
        <div className="mt-2 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-lg font-semibold text-zinc-50">
              #{pr.number} — {pr.title}
            </h1>
            <p className="text-sm text-zinc-500 mt-0.5">
              <span className="font-mono text-zinc-600">{pr.branch}</span>
              {" · by "}{pr.author}
            </p>
          </div>
          <span className="text-xs text-zinc-600 border border-zinc-800 rounded-lg px-3 py-1.5 shrink-0">
            View on GitHub ↗
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        {/* Preview + comment pins */}
        <div className="flex flex-col gap-4">
          <div
            className="relative border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe
              src="http://localhost:3000"
              className="w-full h-full border-0"
              title="PR preview"
            />
            <div
              ref={overlayRef}
              onClick={handleOverlayClick}
              className="absolute inset-0 cursor-crosshair"
              title="Click anywhere to add a comment"
            />
            {active.map((comment) => (
              <CommentPin
                key={comment.id}
                comment={comment}
                onResolve={() => resolveComment(comment.id)}
                canResolve={comment.author_login === CURRENT_USER}
              />
            ))}
            {pendingPin && (
              <div
                className="absolute z-20 w-5 h-5 rounded-full bg-amber-400 border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ left: `${pendingPin.x}%`, top: `${pendingPin.y}%` }}
              />
            )}
          </div>

          {!pendingPin && (
            <p className="text-xs text-zinc-600 text-center">
              Click anywhere on the preview to drop a comment pin
            </p>
          )}

          {pendingPin && (
            <div className="border border-amber-800/60 rounded-xl p-4 bg-zinc-900 flex flex-col gap-3">
              <p className="text-xs text-amber-400">
                Comment at ({pendingPin.x.toFixed(0)}%, {pendingPin.y.toFixed(0)}%)
              </p>
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="What do you see here?"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder-zinc-600 resize-none focus:outline-none focus:border-zinc-500"
                rows={3}
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) submitComment()
                  if (e.key === "Escape") { setPendingPin(null); setCommentText("") }
                }}
              />
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => { setPendingPin(null); setCommentText("") }}
                  className="text-xs text-zinc-500 hover:text-zinc-300 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Cancel (Esc)
                </button>
                <button
                  onClick={submitComment}
                  disabled={!commentText.trim()}
                  className="text-xs bg-zinc-100 text-zinc-900 px-4 py-1.5 rounded-lg font-medium disabled:opacity-40 hover:bg-white transition-colors"
                >
                  Add comment (⌘↵)
                </button>
              </div>
            </div>
          )}

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
                    <div className="w-6 h-6 rounded-full bg-zinc-700 shrink-0 mt-0.5 flex items-center justify-center text-[10px] text-zinc-300">
                      {comment.author_login[0].toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-zinc-300">{comment.author_login}</span>
                        <span className="text-xs text-zinc-600">{new Date(comment.created_at).toLocaleDateString()}</span>
                      </div>
                      <p className="text-sm text-zinc-400">{comment.body}</p>
                      {comment.author_login === CURRENT_USER && (
                        <button
                          onClick={() => resolveComment(comment.id)}
                          className="text-xs text-zinc-600 hover:text-emerald-400 mt-2 transition-colors"
                        >
                          Resolve ✓
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">
          {/* Approval */}
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
            {!youApproved ? (
              <button
                onClick={approve}
                className="w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors"
              >
                Approve PR
              </button>
            ) : (
              <p className="text-xs text-emerald-600 text-center">You approved this PR</p>
            )}
          </div>

          {/* Details */}
          <div className="border border-zinc-800 rounded-xl p-4 bg-zinc-900/50">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
              Details
            </h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-zinc-500">Branch</dt>
                <dd className="text-zinc-300 font-mono text-xs">{pr.branch}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Author</dt>
                <dd className="text-zinc-300">{pr.author}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Commits</dt>
                <dd className="text-zinc-300">{pr.commits}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-500">Changes</dt>
                <dd className="text-xs">
                  <span className="text-emerald-500">+{pr.additions}</span>
                  {" "}
                  <span className="text-red-500">-{pr.deletions}</span>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-zinc-500">Files</dt>
                <dd className="text-zinc-300">{pr.changedFiles}</dd>
              </div>
            </dl>
          </div>

          {/* Description */}
          <div className="border border-zinc-800 rounded-xl p-4 bg-zinc-900/50">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">
              Description
            </h3>
            <p className="text-sm text-zinc-400 whitespace-pre-wrap leading-relaxed">{pr.body}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
