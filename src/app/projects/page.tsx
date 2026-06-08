import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Projects — Ministry of Human Empowerment',
}

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-900">
      <Nav />
      <main className="flex-1">

        {/* Header */}
        <section className="px-6 py-24 bg-stone-900 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">Ecosystem</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Ministry Projects
          </h1>
          <p className="mt-5 text-lg text-stone-300 max-w-xl mx-auto leading-relaxed">
            A growing ecosystem of tools, platforms, and communities — all in service of human empowerment.
          </p>
        </section>

        {/* FlowBond Ecosystem */}
        <section className="px-6 py-20 bg-stone-950" id="flowbond">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Parent Ecosystem</span>
              <h2 className="text-3xl font-semibold text-white mt-2 mb-4">FlowBond</h2>
              <p className="text-lg text-stone-400 leading-relaxed max-w-2xl">
                FlowBond is the relational ecosystem at the heart of the Ministry — a platform for community, connection, and covenant. It is the parent layer for three interconnected environments, each serving a distinct purpose within the same network.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  id: 'flowcastle',
                  tag: 'Networked Community',
                  name: 'FlowCastle',
                  desc: 'A connected space for people to gather, belong, and build relationships — your digital home within the FlowBond network.',
                },
                {
                  id: 'flowgarden',
                  tag: 'Networked Projects',
                  name: 'FlowGarden',
                  desc: 'A shared space for collaborating on ideas, initiatives, and meaningful work within the FlowBond ecosystem.',
                },
                {
                  id: 'flownation',
                  tag: 'Networked Events',
                  name: 'FlowNation',
                  desc: 'A living calendar of gatherings, activations, and experiences within the FlowBond ecosystem.',
                },
              ].map(({ id, tag, name, desc }) => (
                <div key={id} id={id} className="border border-stone-700 rounded-2xl p-6 bg-stone-800 hover:border-amber-500 transition-colors">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{tag}</span>
                  <h3 className="text-lg font-semibold text-white mt-2 mb-2">{name}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CaptainsLog */}
        <section className="px-6 py-20 bg-stone-900" id="captainslog">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Sovereignty</span>
              <h2 className="text-3xl font-semibold text-white mt-2 mb-2">
                <a href="https://captainslog.vip" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  CaptainsLog.vip
                </a>
              </h2>
              <p className="text-base italic text-amber-400 mb-6">Because Privacy Is Very Important.</p>
              <p className="text-lg text-stone-300 leading-relaxed mb-5">
                A sovereign AI-assisted journaling and thought organization system built for explorers, creators, leaders, and lifelong learners.
              </p>
              <p className="text-lg text-stone-300 leading-relaxed mb-5">
                Capture your thoughts. Refine your logic. Preserve your memories. Clarify your decisions. Build your legacy.
              </p>
              <p className="text-lg text-stone-300 leading-relaxed mb-6">
                Everything remains under your control.
              </p>
              <p className="text-base font-semibold text-white">
                Your thoughts. Your keys. Your mind. Your data. Your story.
              </p>
            </div>
          </div>
        </section>

        {/* Health Projects */}
        <section className="px-6 py-20 bg-stone-950">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">Health & Education</p>
            <h2 className="text-3xl font-semibold text-white mb-10">Additional Ministry Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  id: 'feedabrain',
                  tag: 'Health',
                  name: 'Feed a Brain',
                  desc: 'Brain health education and resources for optimizing human potential through nutrition, lifestyle, and functional medicine.',
                },
                {
                  id: 'abi',
                  tag: 'Health',
                  name: 'Adventures in Brain Injury',
                  desc: 'Stories, resources, and community support for those navigating life after brain injury — with honesty, hope, and practical guidance.',
                },
                {
                  id: 'neuromixology',
                  tag: 'Health',
                  name: 'Neuromixology',
                  desc: 'The art and science of brain optimization through nutrition, conscious living, and integrative health practices.',
                },
                {
                  id: 'medicalempowerment',
                  tag: 'Health',
                  name: 'Medical Empowerment',
                  desc: 'Navigating healthcare with clear eyes — empowering individuals to assert their autonomy and place human value above monetary value.',
                },
              ].map(({ id, tag, name, desc }) => (
                <div key={id} id={id} className="border border-stone-700 rounded-2xl p-6 bg-stone-800 hover:border-amber-500 transition-colors">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{tag}</span>
                  <h3 className="text-lg font-semibold text-white mt-2 mb-2">{name}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 bg-stone-900 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-stone-300 leading-relaxed text-lg mb-8">
              These projects are expressions of the Ministry&apos;s mission — and membership connects you to all of them.
            </p>
            <Link
              href="/membership"
              className="px-8 py-3 rounded-full bg-amber-500 text-stone-900 text-sm font-medium hover:bg-amber-400 transition-colors"
            >
              Become a Member
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
