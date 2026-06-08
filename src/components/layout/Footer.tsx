import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-stone-500">
        <p>© {new Date().getFullYear()} Ministry of Human Empowerment. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center gap-6">
          <Link href="/about" className="hover:text-stone-900 transition-colors">About</Link>
          <Link href="/ethos" className="hover:text-stone-900 transition-colors">Ethos</Link>
          <Link href="/projects" className="hover:text-stone-900 transition-colors">Projects</Link>
          <Link href="/membership" className="hover:text-stone-900 transition-colors">Membership</Link>
          <Link href="/resources" className="hover:text-stone-900 transition-colors">Resources</Link>
          <Link href="/contact" className="hover:text-stone-900 transition-colors">Contact</Link>
          <Link href="/data-room" className="hover:text-stone-900 transition-colors">Data Room</Link>
        </nav>
      </div>
    </footer>
  )
}
