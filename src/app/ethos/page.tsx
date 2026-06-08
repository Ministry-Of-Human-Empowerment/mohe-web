import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Ethos — Ministry of Human Empowerment',
}

const principles = [
  {
    title: 'Faith',
    body: 'We believe in a living spiritual reality that transcends and underlies all things. The Ministry is rooted in sincere faith and genuine conscience — not dogma, but devotion.',
  },
  {
    title: 'Privacy',
    body: 'Privacy is a sacred right. Every person has the right to control their own information, their own body, and their own spiritual journey without interference or surveillance.',
  },
  {
    title: 'Stewardship',
    body: 'We are stewards — of our bodies, our relationships, our communities, and the earth. Stewardship means caring for what has been entrusted to us with wisdom and gratitude.',
  },
  {
    title: 'Healing',
    body: 'Healing is possible. Physical, emotional, and spiritual restoration are not luxuries — they are the birthright of every human being. MOHE is committed to making paths to healing more accessible.',
  },
  {
    title: 'Education',
    body: 'Knowledge is liberation. We believe in the free exchange of honest, life-giving information as the foundation of individual and community empowerment.',
  },
  {
    title: 'Sovereignty',
    body: 'Every person is a sovereign being — endowed with inherent rights that no institution can grant or revoke. We honor and protect the self-determination of every member.',
  },
  {
    title: 'Service',
    body: 'Service is not obligation — it is love in action. MOHE is built on the conviction that giving generously to others is the highest expression of community.',
  },
]

export default function Ethos() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />
      <main className="flex-1">

        {/* Header */}
        <section className="px-6 py-24 bg-stone-50 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-4">Ethos</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 max-w-3xl mx-auto">
            Statement of Faith & Core Principles
          </h1>
          <p className="mt-5 text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
            The convictions that guide everything we do.
          </p>
        </section>

        {/* Statement of Faith */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-stone-900 mb-6">Statement of Faith</h2>
            <div className="text-stone-600 leading-relaxed text-lg space-y-5 border-l-2 border-amber-300 pl-6">
              <p>
                We believe in the inherent dignity and worth of every human being, created in the image of a living, loving spiritual reality.
              </p>
              <p>
                We believe that faith is not confined to a building, a denomination, or a doctrine — but lives in the sincere heart of every person who seeks truth, goodness, and service.
              </p>
              <p>
                We believe that healing — physical, emotional, spiritual — is not only possible but is a sacred calling for those equipped to offer it.
              </p>
              <p>
                We believe in the freedom of every person to pursue their own relationship with the Divine, to govern their own body and mind, and to live according to the light of their own conscience.
              </p>
              <p>
                We believe that community built on these principles is among the most powerful forces for good in the world.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="px-6 py-20 bg-stone-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-stone-900 mb-10 text-center">Core Principles</h2>
            <div className="space-y-6">
              {principles.map(({ title, body }) => (
                <div key={title} className="bg-white border border-stone-200 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">{title}</h3>
                  <p className="text-stone-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 bg-white text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-stone-600 mb-8 leading-relaxed text-lg">
              These principles are the foundation of our membership community. If they resonate with you, we welcome you.
            </p>
            <Link
              href="/membership"
              className="px-8 py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-700 transition-colors"
            >
              Explore Membership
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
