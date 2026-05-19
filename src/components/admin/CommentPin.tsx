"use client"
import { useState } from "react"
import type { PRComment } from "@/lib/supabase"

interface Props {
  comment: PRComment
  onResolve: () => void
  canResolve: boolean
}

export default function CommentPin({ comment, onResolve, canResolve }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${comment.x_pct}%`, top: `${comment.y_pct}%` }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation()
          setOpen((v) => !v)
        }}
        className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
        title={comment.author_login}
      >
        <span className="text-[9px] text-white font-bold leading-none">✦</span>
      </button>

      {open && (
        <div
          className="absolute left-8 top-0 w-64 bg-zinc-900 border border-zinc-700 rounded-xl p-3 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2 mb-2">
            {comment.author_avatar && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={comment.author_avatar}
                alt=""
                className="w-5 h-5 rounded-full"
              />
            )}
            <span className="text-xs font-medium text-zinc-300">
              {comment.author_login}
            </span>
            <span className="text-xs text-zinc-600 ml-auto">
              {new Date(comment.created_at).toLocaleDateString()}
            </span>
          </div>
          <p className="text-sm text-zinc-300">{comment.body}</p>
          {canResolve && (
            <button
              onClick={onResolve}
              className="text-xs text-zinc-500 hover:text-emerald-400 mt-2 block transition-colors"
            >
              Resolve ✓
            </button>
          )}
        </div>
      )}
    </div>
  )
}
