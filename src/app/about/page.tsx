import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'About — Ministry of Human Empowerment',
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-900">
      <Nav />
      <main className="flex-1">

        {/* Header */}
        <section className="px-6 py-24 bg-stone-900 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            About the Ministry
          </h1>
          <p className="mt-5 text-lg text-stone-300 max-w-xl mx-auto leading-relaxed">
            A spiritual ministry and Private Ministerial Association devoted to human dignity, healing, and empowerment.
          </p>
        </section>

        {/* What We Are */}
        <section className="px-6 py-20 bg-stone-950">
          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">What is MOHE?</h2>
              <p className="text-stone-400 leading-relaxed text-lg">
                The Ministry of Human Empowerment (MOHE) is a faith-based spiritual ministry and unincorporated Private Ministerial Association. We exist to support the upliftment, healing, education, and general welfare of people throughout the world — guided by principles of faith, privacy, sovereignty, and service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">What is a Private Ministerial Association?</h2>
              <p className="text-stone-400 leading-relaxed text-lg">
                A Private Ministerial Association is a gathering of people united by shared faith, values, and purpose. As a PMA, MOHE operates within the protection of private association rights — allowing us to serve our members in ways that reflect our deepest commitments to human dignity, spiritual freedom, and personal sovereignty.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Purpose</h2>
              <p className="text-stone-400 leading-relaxed text-lg">
                MOHE serves as an umbrella for a growing ecosystem of projects, tools, and communities — all oriented around one core commitment: empowering human beings to live with greater agency, wisdom, health, and purpose. From brain health education to sovereign digital tools, our work is practical, spiritually grounded, and community-centered.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { value: 'Faith', desc: 'Grounded in spiritual truth and sincere conscience.' },
                  { value: 'Privacy', desc: 'Your life, your information, your choice.' },
                  { value: 'Stewardship', desc: 'Caring for people, resources, and relationships with intention.' },
                  { value: 'Healing', desc: 'Physical, emotional, and spiritual restoration.' },
                  { value: 'Education', desc: 'Knowledge as a path to freedom and empowerment.' },
                  { value: 'Sovereignty', desc: 'The inherent right of every person to self-determination.' },
                  { value: 'Service', desc: 'Giving generously to others as the foundation of community.' },
                ].map(({ value, desc }) => (
                  <div key={value} className="border border-stone-700 rounded-xl p-5 bg-stone-800">
                    <p className="font-semibold text-white mb-1">{value}</p>
                    <p className="text-sm text-stone-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 bg-stone-900 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">Learn More</h2>
            <p className="text-stone-400 mb-8 leading-relaxed">
              Explore our ethos, review our projects, or take the first step toward membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ethos" className="px-8 py-3 rounded-full bg-amber-500 text-stone-900 text-sm font-medium hover:bg-amber-400 transition-colors">
                Read Our Ethos
              </Link>
              <Link href="/membership" className="px-8 py-3 rounded-full border border-stone-600 text-stone-300 text-sm font-medium hover:border-stone-400 hover:text-white transition-colors">
                Become a Member
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
