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

        {/* Intro */}
        <section className="px-6 py-12 bg-stone-950">
          <div className="max-w-3xl mx-auto space-y-4 text-stone-300 text-lg leading-relaxed text-center">
            <p>
              Each project of The Ministry of Human Empowerment represents a different expression of the same mission: creating environments where life can flourish.
            </p>
            <p className="text-stone-400">
              Some projects focus on empowering individuals through health education and healing. Others focus on privacy-preserving technology, personal sovereignty, community, creativity, knowledge sharing, and conscious living.
            </p>
          </div>
        </section>

        {/* FlowBond Ecosystem */}
        <section className="px-6 py-20 bg-stone-950" id="flowbond">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Parent Ecosystem</span>
              <h2 className="text-3xl font-semibold text-white mt-2 mb-4">FlowBond</h2>
              <p className="text-lg text-stone-400 leading-relaxed max-w-2xl">
                FlowBond is the relational ecosystem at the heart of the Ministry — built to help people create trusted communities and aligned relationships. It is the parent layer for three interconnected environments, each grounded in belonging, mutual support, human connection, and shared purpose.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  id: 'flowcastle',
                  tag: 'Networked Community',
                  name: 'FlowCastle',
                  desc: 'A space for knowledge organization, information architecture, and structured learning — your digital home for personal and collective intelligence within the FlowBond network.',
                },
                {
                  id: 'flowgarden',
                  tag: 'Networked Projects',
                  name: 'FlowGarden',
                  desc: 'A garden for growth, creativity, and cultivation. A space for nurturing ideas, projects, and people — tended with care, intention, and a commitment to human development.',
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
                Captain&apos;s Log exists to make privacy convenient again.
              </p>
              <p className="text-lg text-stone-300 leading-relaxed mb-5">
                The project explores privacy-preserving artificial intelligence, secure journaling, personal knowledge management, encrypted communications, and technologies that allow individuals to benefit from powerful digital tools without surrendering ownership of their thoughts, memories, personal information, or creative work.
              </p>
              <p className="text-lg text-stone-300 leading-relaxed mb-5">
                Its purpose is to help people maintain sovereignty over their data while still enjoying the convenience and capabilities of modern technology.
              </p>
              <p className="text-lg text-stone-300 leading-relaxed mb-6">
                Capture your thoughts. Refine your logic. Preserve your memories. Clarify your decisions. Build your legacy — entirely on your own terms.
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
                  desc: 'Feed a Brain exists to empower individuals and families through education, practical tools, and accessible knowledge related to brain health, recovery, healing, and human performance. Medical empowerment, health literacy, and self-directed healing at the center.',
                },
                {
                  id: 'abi',
                  tag: 'Health',
                  name: 'Adventures in Brain Injury',
                  desc: 'Stories, education, and inspiration drawn from real recovery journeys. A testament to human resilience — offered with honesty, hope, and practical guidance for those navigating life after brain injury.',
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
