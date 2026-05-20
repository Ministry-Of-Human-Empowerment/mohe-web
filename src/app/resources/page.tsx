import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Resources — Ministry of Human Empowerment',
}

const documents = [
  {
    title: 'Statement of Faith',
    description: 'The spiritual and ethical convictions that guide the Ministry.',
    href: '/ethos',
    available: true,
  },
  {
    title: 'Membership Application',
    description: 'Begin the process of becoming a member of the Ministry.',
    href: '/membership#apply',
    available: true,
  },
  {
    title: 'Public Ministry Overview',
    description: 'An introduction to who we are and what we do.',
    href: '/about',
    available: true,
  },
  {
    title: 'Project Overview',
    description: 'A guide to the full MOHE ecosystem of projects and platforms.',
    href: '/projects',
    available: true,
  },
  {
    title: 'FAQ',
    description: 'Answers to common questions about the Ministry and membership.',
    href: '#faq',
    available: true,
  },
]

const faq = [
  {
    q: 'Is MOHE a church?',
    a: 'MOHE is a spiritual ministry and Private Membership Association. While we are faith-based, we are not a traditional church in the denominational sense. We welcome people of sincere faith and conscience from all backgrounds.',
  },
  {
    q: 'Is membership free?',
    a: 'There is no fee to apply for membership. The Ministry may offer paid programs, resources, or platforms — but membership itself is extended by invitation and mutual agreement, not by purchase.',
  },
  {
    q: 'What does "Private Membership Association" mean?',
    a: 'A Private Membership Association (PMA) is a gathering of people united by shared values and purpose, operating within the protection of private association rights. As a PMA, MOHE can serve its members in ways that reflect our deepest commitments to spiritual freedom, privacy, and personal sovereignty.',
  },
  {
    q: 'How does MOHE protect member privacy?',
    a: 'Privacy is one of our core principles. Member information is held in confidence and is never sold or shared with third parties. As a PMA, we take the protection of our members\' information and autonomy seriously.',
  },
  {
    q: 'How do I get involved in Ministry projects?',
    a: 'Membership is the primary pathway to involvement. Once you are a member, you will have access to information about how to participate in and contribute to Ministry projects.',
  },
]

export default function Resources() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />
      <main className="flex-1">

        {/* Header */}
        <section className="px-6 py-24 bg-stone-50 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-4">Resources</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 max-w-3xl mx-auto">
            Public Resources
          </h1>
          <p className="mt-5 text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
            Documents, information, and answers freely available to anyone interested in the Ministry.
          </p>
        </section>

        {/* Documents */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-stone-900 mb-8">Documents</h2>
            <div className="space-y-4">
              {documents.map((doc) => (
                <Link
                  key={doc.title}
                  href={doc.href}
                  className="flex items-start gap-4 border border-stone-200 rounded-xl px-6 py-5 hover:border-stone-400 hover:shadow-sm transition-all group"
                >
                  <span className="text-amber-600 mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform">→</span>
                  <div>
                    <p className="font-medium text-stone-900">{doc.title}</p>
                    <p className="text-sm text-stone-500 mt-1">{doc.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 bg-stone-50" id="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-stone-900 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faq.map(({ q, a }) => (
                <div key={q} className="bg-white border border-stone-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-stone-900 mb-3">{q}</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Questions */}
        <section className="px-6 py-20 bg-white text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-stone-600 text-lg mb-6">Have a question that isn&apos;t answered here?</p>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
