import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '/ethos', label: 'Ethos' },
  { href: '/projects', label: 'Projects' },
  { href: '/membership', label: 'Membership' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="w-full border-b border-stone-700 bg-stone-900 px-6 py-4 flex items-center justify-between gap-6">
      <Link href="/" className="text-sm font-semibold tracking-widest uppercase text-white shrink-0">
        MOHE
      </Link>
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-400">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="hover:text-white transition-colors">
            {label}
          </Link>
        ))}
        <Link
          href="/data-room"
          className="px-4 py-1.5 rounded-full border border-stone-600 text-stone-300 hover:border-stone-400 hover:text-white transition-colors"
        >
          Data Room
        </Link>
      </nav>
    </header>
  )
}
