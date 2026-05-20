import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full border-b border-white/8 px-6 py-4 flex items-center justify-between bg-[#060810]/95 backdrop-blur-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/mohe-logo.png"
          alt="Ministry of Human Empowerment"
          width={36}
          height={36}
          className="group-hover:scale-105 transition-transform"
        />
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-300 hidden sm:block group-hover:text-white transition-colors">
          Ministry of Human Empowerment
        </span>
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-300 sm:hidden">
          MOHE
        </span>
      </Link>
      <nav className="flex gap-6 text-sm text-zinc-500">
        <Link href="/about" className="hover:text-zinc-100 transition-colors">About</Link>
        <Link href="/mission" className="hover:text-zinc-100 transition-colors">Mission</Link>
        <Link href="/membership" className="hover:text-zinc-100 transition-colors">Membership</Link>
      </nav>
    </header>
  )
}
