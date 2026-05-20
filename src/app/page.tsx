import content from "../../content/pages/home.json"

export default function Home() {
  const { hero, footer } = content

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <header className="w-full border-b border-zinc-100 dark:border-zinc-800 px-6 py-4 flex items-center justify-between">
        <span className="text-sm font-semibold tracking-widest uppercase text-zinc-900 dark:text-zinc-50">
          MOHE
        </span>
        <nav className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <a href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">About</a>
          <a href="/mission" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Mission</a>
          <a href="/membership" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Membership</a>
          <a href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Docs</a>
        </nav>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-6">
          {hero.eyebrow}
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 max-w-3xl leading-tight">
          {hero.headline}
        </h1>
        <p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
          {hero.body}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={hero.cta_primary_href}
            className="px-8 py-3 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-700 transition-colors dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {hero.cta_primary_label}
          </a>
          <a
            href={hero.cta_secondary_href}
            className="px-8 py-3 rounded-full border border-zinc-200 text-zinc-700 text-sm font-medium hover:border-zinc-400 transition-colors dark:border-zinc-700 dark:text-zinc-300"
          >
            {hero.cta_secondary_label}
          </a>
        </div>
      </main>

      <footer className="border-t border-zinc-100 dark:border-zinc-800 px-6 py-6 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} {footer.legal}
      </footer>
    </div>
  )
}
