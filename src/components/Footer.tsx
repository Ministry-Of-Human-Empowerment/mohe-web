import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#060810] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-3">
            <Image src="/mohe-logo.png" alt="MOHE" width={32} height={32} />
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-zinc-300">
                Ministry of Human Empowerment
              </p>
              <p className="text-xs text-zinc-600 mt-0.5">A Private Ministerial Association</p>
            </div>
          </div>
          <nav className="flex gap-6 text-xs text-zinc-600">
            <Link href="/about" className="hover:text-zinc-400 transition-colors">About</Link>
            <Link href="/mission" className="hover:text-zinc-400 transition-colors">Mission</Link>
            <Link href="/membership" className="hover:text-zinc-400 transition-colors">Membership</Link>
          </nav>
        </div>
        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} Ministry of Human Empowerment. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">
            Est. May 8, 2026 · Cavin Balaster, Founding Trustee
          </p>
        </div>
      </div>
    </footer>
  )
}
