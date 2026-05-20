import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'Membership — Ministry of Human Empowerment',
}

export default function Membership() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />
      <main className="flex-1">

        {/* Header */}
        <section className="px-6 py-24 bg-stone-50 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-4">Membership</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 max-w-3xl mx-auto">
            Join the Ministry
          </h1>
          <p className="mt-5 text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
            Membership is an invitation — not a transaction. We welcome sincere people of faith, conscience, and goodwill.
          </p>
        </section>

        {/* What Membership Means */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-stone-900 mb-4">What Membership Means</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                Becoming a member of the Ministry of Human Empowerment is a commitment to a community — not a subscription to a service. Members share in the life, mission, and values of the Ministry, and are welcomed into its network of projects, resources, and relationships.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900 mb-4">Who We Welcome</h2>
              <p className="text-stone-600 leading-relaxed text-lg mb-6">
                Membership is open to those who resonate with the Ministry&apos;s principles and sincerely wish to participate in its community and mission. We welcome people of all backgrounds who share a commitment to:
              </p>
              <ul className="space-y-3">
                {[
                  'Living with faith, integrity, and conscience',
                  'Respecting the dignity and sovereignty of every person',
                  'Supporting healing, education, and human empowerment',
                  'Contributing to community with generosity and goodwill',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-600">
                    <span className="text-amber-600 mt-1 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-stone-900 mb-4">Member Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Access to Ministry resources and projects',
                  'Connection to a values-aligned community',
                  'Participation in Ministry initiatives',
                  'Access to private member communications',
                  'Support from and for fellow members',
                  'A voice in the Ministry\'s direction',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 border border-stone-200 rounded-xl px-5 py-4 text-sm text-stone-700">
                    <span className="text-amber-600 shrink-0">✦</span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application */}
        <section className="px-6 py-20 bg-stone-50" id="apply">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-stone-900 mb-3">Membership Application</h2>
            <p className="text-stone-600 leading-relaxed text-lg mb-10">
              The membership process begins with a simple application. This helps us understand who you are and how you hope to participate in the Ministry community. There is no fee to apply — membership is extended by invitation and mutual agreement.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-700 transition-colors"
              >
                Apply Online
              </button>
              <button
                className="px-8 py-3 rounded-full border border-stone-300 text-stone-700 text-sm font-medium hover:border-stone-600 hover:text-stone-900 transition-colors"
              >
                Download Membership Application
              </button>
            </div>

            <p className="text-sm text-stone-400 mt-6">
              Online application and downloadable PDF will be available shortly. Contact us if you&apos;d like to begin the process now.
            </p>
          </div>
        </section>

        {/* Closing note */}
        <section className="px-6 py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-stone-700 leading-relaxed font-light">
              Membership in this Ministry is not about dues or obligation. It is about belonging to something — and being part of something that belongs to you.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
