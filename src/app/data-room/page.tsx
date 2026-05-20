import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Data Room — Ministry of Human Empowerment',
}

const categories = [
  {
    title: 'Formation Documents',
    description: 'Ministry charter, bylaws, articles of trust, and foundational legal documents.',
  },
  {
    title: 'Trustee Records',
    description: 'Trustee appointments, governance records, and related documentation.',
  },
  {
    title: 'Member Records',
    description: 'Membership applications, agreements, and member-related correspondence.',
  },
  {
    title: 'Internal Strategy',
    description: 'Planning documents, roadmaps, and internal Ministry communications.',
  },
  {
    title: 'Financial & Administrative Docs',
    description: 'Financial records, tax filings, and administrative documentation.',
  },
  {
    title: 'Drafts & Sensitive Files',
    description: 'Working documents, drafts, and other confidential materials.',
  },
]

export default function DataRoom() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />
      <main className="flex-1">

        {/* Header */}
        <section className="px-6 py-24 bg-stone-900 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">Internal Access</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Ministry Data Room
          </h1>
          <p className="mt-5 text-lg text-stone-400 max-w-xl mx-auto leading-relaxed">
            This area is for authorized Ministry access only. If you believe you should have access, please contact the Ministry directly.
          </p>
        </section>

        {/* Access Notice */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="border border-amber-200 bg-amber-50 rounded-2xl p-7 mb-14">
              <h2 className="font-semibold text-amber-900 mb-2">Authorized Access Only</h2>
              <p className="text-amber-800 text-sm leading-relaxed">
                The Ministry Data Room contains confidential formation documents, trustee records, member information, and internal strategy materials. Access is restricted to authorized Ministry trustees, officers, and designated members. Unauthorized access is prohibited.
              </p>
            </div>

            {/* Login Placeholder */}
            <div className="border border-stone-200 rounded-2xl p-8 bg-stone-50 mb-14">
              <h2 className="text-xl font-semibold text-stone-900 mb-2">Sign In</h2>
              <p className="text-stone-500 text-sm mb-8">Secure login for authorized Ministry personnel. Authentication system coming soon.</p>
              <div className="space-y-4 opacity-50 pointer-events-none">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                  <div className="w-full border border-stone-200 rounded-lg px-4 py-2.5 bg-white text-sm text-stone-400">ministry@email.com</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Password</label>
                  <div className="w-full border border-stone-200 rounded-lg px-4 py-2.5 bg-white text-sm text-stone-400">••••••••</div>
                </div>
                <div className="px-8 py-3 rounded-full bg-stone-900 text-white text-sm font-medium w-fit">
                  Sign In
                </div>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h2 className="text-xl font-semibold text-stone-900 mb-6">Data Room Contents</h2>
              <p className="text-stone-500 text-sm mb-8">The following categories of documents will be accessible to authorized users upon login.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.map(({ title, description }) => (
                  <div
                    key={title}
                    className="border border-stone-200 rounded-xl px-5 py-5 opacity-60"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-stone-400">🔒</span>
                      <p className="font-medium text-stone-700 text-sm">{title}</p>
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-6 py-16 bg-stone-50 text-center">
          <p className="text-stone-600 mb-4">Need access? Have questions about the Data Room?</p>
          <Link
            href="/contact"
            className="text-sm text-amber-700 hover:text-amber-900 font-medium underline underline-offset-4 transition-colors"
          >
            Contact the Ministry →
          </Link>
        </section>

      </main>
      <Footer />
    </div>
  )
}
