import { auth, signOut } from "@/auth"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "MOHE Admin",
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="border-b border-zinc-800 px-6 py-3 flex items-center justify-between sticky top-0 z-50 bg-zinc-950/95 backdrop-blur">
        <div className="flex items-center gap-3">
          <Link
            href="/admin"
            className="text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            MOHE
          </Link>
          <span className="text-zinc-700">/</span>
          <span className="text-sm font-medium text-zinc-200">Admin</span>
          <span className="text-zinc-700 ml-2">·</span>
          <Link
            href="/admin/editor"
            className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors ml-2"
          >
            Editor
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {session?.user && (
            <>
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name ?? ""}
                  width={28}
                  height={28}
                  className="rounded-full ring-1 ring-zinc-700"
                />
              )}
              <span className="text-sm text-zinc-400">{session.user.githubLogin}</span>
              <form
                action={async () => {
                  "use server"
                  await signOut()
                }}
              >
                <button
                  type="submit"
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Sign out
                </button>
              </form>
            </>
          )}
        </div>
      </header>

      <main className="p-6 max-w-7xl mx-auto">{children}</main>
    </div>
  )
}
