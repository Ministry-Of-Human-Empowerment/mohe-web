import Link from "next/link"

export const metadata = { title: "MOHE Admin — Demo" }

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="border-b border-zinc-800 px-6 py-3 flex items-center justify-between sticky top-0 z-50 bg-zinc-950/95 backdrop-blur">
        <div className="flex items-center gap-3">
          <Link href="/demo" className="text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-zinc-200 transition-colors">
            MOHE
          </Link>
          <span className="text-zinc-700">/</span>
          <span className="text-sm font-medium text-zinc-200">Admin</span>
          <span className="text-xs bg-amber-500/15 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full ml-1">
            Demo Mode
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-zinc-700 ring-1 ring-zinc-600 flex items-center justify-center text-xs text-zinc-300 font-medium">
            S
          </div>
          <span className="text-sm text-zinc-400">steph</span>
        </div>
      </header>
      <main className="p-6 max-w-7xl mx-auto">{children}</main>
    </div>
  )
}
