import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Projects — Ministry of Human Empowerment',
}

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />
      <main className="flex-1">

        {/* Header */}
        <section className="px-6 py-24 bg-stone-50 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-4">Ecosystem</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 max-w-3xl mx-auto">
            Ministry Projects
          </h1>
          <p className="mt-5 text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
            A growing ecosystem of tools, platforms, and communities — all in service of human empowerment.
          </p>
        </section>

        {/* FlowBond Ecosystem */}
        <section className="px-6 py-20 bg-white" id="flowbond">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Parent Ecosystem</span>
              <h2 className="text-3xl font-semibold text-stone-900 mt-2 mb-4">FlowBond</h2>
              <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
                FlowBond is the relational ecosystem at the heart of the Ministry — a platform for community, connection, and covenant. It is the parent layer for three interconnected environments, each serving a distinct purpose within the same network.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="border border-stone-200 rounded-2xl p-6 bg-stone-50" id="flowcastle">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">FlowBond</span>
                <h3 className="text-lg font-semibold text-stone-900 mt-2 mb-2">FlowCastle</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Sovereign digital spaces for individuals and families. Private, personal, and fully protected — your digital home within the FlowBond network.
                </p>
              </div>
              <div className="border border-stone-200 rounded-2xl p-6 bg-stone-50" id="flowgarden">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">FlowBond</span>
                <h3 className="text-lg font-semibold text-stone-900 mt-2 mb-2">FlowGarden</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  A shared space for growing ideas, collaborations, and community projects. Where individuals come together to cultivate something larger than themselves.
                </p>
              </div>
              <div className="border border-stone-200 rounded-2xl p-6 bg-stone-50" id="flownation">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">FlowBond</span>
                <h3 className="text-lg font-semibold text-stone-900 mt-2 mb-2">FlowNation</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  A network layer connecting communities and values-aligned movements. The commons where the FlowBond ecosystem meets the wider world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CaptainsLog */}
        <section className="px-6 py-20 bg-stone-50" id="captainslog">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Sovereignty</span>
              <h2 className="text-3xl font-semibold text-stone-900 mt-2 mb-4">CaptainsLog</h2>
              <p className="text-xl text-stone-700 font-light italic mb-5">
                &ldquo;Your thoughts, your keys, your legacy.&rdquo;
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                CaptainsLog is a sovereign AI-assisted journaling and thought organization platform. It is built on the conviction that your inner life belongs entirely to you — not to a platform, not to an algorithm, not to a corporation. CaptainsLog gives individuals the tools to capture, organize, and protect their most important thinking, with sovereign control over their own data.
              </p>
              <p className="text-sm text-stone-500 mt-4">Available at CaptainsLog.vip / CaptainsLog.EIP</p>
            </div>
          </div>
        </section>

        {/* Health Projects */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">Health & Education</p>
            <h2 className="text-3xl font-semibold text-stone-900 mb-10">Additional Ministry Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="border border-stone-200 rounded-2xl p-6" id="feedabrain">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Health</span>
                <h3 className="text-lg font-semibold text-stone-900 mt-2 mb-2">Feed a Brain</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Brain health education and resources for optimizing human potential through nutrition, lifestyle, and functional medicine.
                </p>
              </div>
              <div className="border border-stone-200 rounded-2xl p-6" id="abi">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Health</span>
                <h3 className="text-lg font-semibold text-stone-900 mt-2 mb-2">Adventures in Brain Injury</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Stories, resources, and community support for those navigating life after brain injury — with honesty, hope, and practical guidance.
                </p>
              </div>
              <div className="border border-stone-200 rounded-2xl p-6" id="neuromixology">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Health</span>
                <h3 className="text-lg font-semibold text-stone-900 mt-2 mb-2">Neuromixology</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  The art and science of brain optimization through nutrition, conscious living, and integrative health practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 bg-stone-50 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-stone-600 leading-relaxed text-lg mb-8">
              These projects are expressions of the Ministry&apos;s mission — and membership connects you to all of them.
            </p>
            <Link
              href="/membership"
              className="px-8 py-3 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-700 transition-colors"
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
