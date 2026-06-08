import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

const projects = [
  {
    name: 'FlowBond',
    tag: 'Ecosystem',
    description: 'A relational ecosystem for community, connection, and covenant. Parent platform for FlowCastle, FlowGarden, and FlowNation.',
  },
  {
    name: 'FlowCastle',
    tag: 'Networked Community',
    description: 'A connected space for people to gather, belong, and build relationships within the FlowBond ecosystem.',
  },
  {
    name: 'FlowGarden',
    tag: 'Networked Projects',
    description: 'A shared space for collaborating on ideas, initiatives, and meaningful work within the FlowBond ecosystem.',
  },
  {
    name: 'FlowNation',
    tag: 'Networked Events',
    description: 'A living calendar of gatherings, activations, and experiences within the FlowBond ecosystem.',
  },
  {
    name: 'CaptainsLog',
    tag: 'Sovereignty',
    description: 'Sovereign AI-assisted journaling and thought organization. Your thoughts, your keys, your legacy.',
  },
  {
    name: 'Feed a Brain',
    tag: 'Health',
    description: 'Brain health education and resources for optimizing human potential through nutrition and lifestyle.',
  },
  {
    name: 'Adventures in Brain Injury',
    tag: 'Health',
    description: 'Stories, resources, and community support for those navigating life after brain injury.',
  },
  {
    name: 'Neuromixology',
    tag: 'Health',
    description: 'The art and science of brain optimization through nutrition, conscious living, and integrative health.',
  },
  {
    name: 'Medical Empowerment',
    tag: 'Health',
    description: 'Navigating healthcare with clear eyes — recognizing where profit has displaced people, and empowering individuals to assert their autonomy and place human value above monetary value.',
  },
]

const resources = [
  { label: 'Statement of Faith', href: '/ethos' },
  { label: 'Membership Application', href: '/membership' },
  { label: 'Public Ministry Overview', href: '/about' },
  { label: 'Project Overview', href: '/projects' },
  { label: 'FAQ', href: '/resources#faq' },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-900">
      <Nav />
      <main className="flex-1">

        {/* Hero */}
        <section className="px-6 py-36 sm:py-48 text-center bg-stone-900">
          <div className="flex justify-center mb-8">
            <Image
              src="/mohe-logo-trans.png"
              alt="Ministry of Human Empowerment"
              width={480}
              height={480}
              priority
            />
          </div>
          <p className="mt-6 text-xl sm:text-2xl italic text-amber-400">
            Because All People Are Very Important
          </p>
          <p className="mt-6 text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            An unincorporated Private Ministerial Association dedicated to the upliftment, enlightenment, healing, education, privacy, and empowerment of every human being on Earth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="px-8 py-3 rounded-full bg-amber-500 text-stone-900 text-sm font-medium hover:bg-amber-400 transition-colors"
            >
              Become a Member
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full border border-stone-500 text-stone-300 text-sm font-medium hover:border-stone-300 hover:text-white transition-colors"
            >
              Explore the Ecosystem
            </Link>
          </div>
        </section>

        {/* Mission */}
        <section className="px-6 py-20 bg-stone-950 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-5">Our Mission</p>
            <p className="text-2xl sm:text-3xl text-stone-200 leading-relaxed font-light">
              The Ministry exists to further the upliftment, enlightenment, spiritual realization, and general welfare of people throughout the world.
            </p>
          </div>
        </section>

        {/* Ethos */}
        <section className="px-6 py-20 bg-stone-900 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-8">Our Ethos</p>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {['Faith', 'Privacy', 'Stewardship', 'Healing', 'Education', 'Sovereignty', 'Service'].map((value) => (
              <span
                key={value}
                className="px-6 py-2.5 rounded-full border border-stone-600 bg-stone-800 text-stone-200 text-sm font-medium"
              >
                {value}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/ethos" className="text-sm text-stone-400 underline underline-offset-4 hover:text-white transition-colors">
              Read our Statement of Faith →
            </Link>
          </div>
        </section>

        {/* Projects */}
        <section className="px-6 py-24 bg-stone-950">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3 text-center">Ecosystem</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-14">Ministry Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="border border-stone-700 rounded-2xl p-6 hover:border-amber-500 hover:shadow-sm transition-all bg-stone-800"
                >
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{project.tag}</span>
                  <h3 className="text-base font-semibold text-white mt-2 mb-2">{project.name}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/projects" className="text-sm text-stone-400 underline underline-offset-4 hover:text-white transition-colors">
                View full ecosystem →
              </Link>
            </div>
          </div>
        </section>

        {/* Membership Invitation */}
        <section className="px-6 py-24 bg-stone-900 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-5">Membership</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">Join the Ministry</h2>
            <p className="text-lg text-stone-300 leading-relaxed mb-10">
              We welcome sincere people of faith, conscience, and goodwill. Membership is an invitation into something meaningful — a community devoted to living with greater purpose, dignity, and care for one another.
            </p>
            <Link
              href="/membership"
              className="px-8 py-3 rounded-full bg-amber-500 text-stone-900 text-sm font-medium hover:bg-amber-400 transition-colors"
            >
              Learn About Membership
            </Link>
          </div>
        </section>

        {/* Public Resources */}
        <section className="px-6 py-24 bg-stone-950">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3">Resources</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-10">Public Documents</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {resources.map((r) => (
                <Link
                  key={r.label}
                  href={r.href}
                  className="flex items-center gap-3 px-5 py-4 border border-stone-700 rounded-xl text-stone-300 hover:border-amber-500 hover:text-white transition-all text-sm font-medium bg-stone-800"
                >
                  <span className="text-amber-400 shrink-0">→</span>
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="px-6 py-24 bg-stone-900 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl text-stone-300 leading-relaxed font-light">
              The Ministry of Human Empowerment is an ecosystem for people committed to living with greater agency, wisdom, conscience, and purpose.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="px-8 py-3 rounded-full bg-amber-500 text-stone-900 text-sm font-medium hover:bg-amber-400 transition-colors"
              >
                About the Ministry
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full border border-stone-600 text-stone-300 text-sm font-medium hover:border-stone-400 hover:text-white transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
