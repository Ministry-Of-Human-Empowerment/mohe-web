import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Ministry of Human Empowerment',
  description:
    'Learn about the Ministry of Human Empowerment — a Private Ministerial Association founded by Cavin Balaster on May 8, 2026, dedicated to human sovereignty, spiritual freedom, and empowerment.',
}

const ecosystemProjects = [
  {
    name: 'FlowBond',
    desc: 'Layer 0 identity and connection protocol. The foundational infrastructure for sovereign digital identity within the MOHE ecosystem.',
  },
  {
    name: 'FlowCastle',
    desc: 'Sovereign digital spaces where members can operate, communicate, and build within the private domain.',
  },
  {
    name: 'FlowGarden',
    desc: 'Garden intelligence and natural health platform. A bridge between ancient wisdom and modern technology for conscious living.',
  },
  {
    name: 'FlowNation',
    desc: 'Faith-based community and nation-building platform for members to gather, organize, and act in alignment with ministry principles.',
  },
  {
    name: "Captain's Log",
    desc: "Personal sovereignty journaling and consciousness tracking — a space for each member's inner voyage.",
  },
  {
    name: 'Feed a Brain',
    desc: 'Medical empowerment and brain health platform, advancing access to life-changing neurological knowledge.',
  },
  {
    name: 'Adventure and Brain Injury',
    desc: "Empowerment, recovery, and adventure for those navigating brain injury — founded in Cavin Balaster's personal experience.",
  },
]

export default function AboutPage() {
  return (
    <div className="text-[#EDE8DC]">

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-5%,rgba(196,30,30,0.08),transparent)] pointer-events-none" />
        <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-zinc-600 mb-5">
          About MOHE
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-50 max-w-3xl mx-auto leading-tight mb-6">
          Who We Are
        </h1>
        <p className="text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">
          The Ministry of Human Empowerment is an unincorporated Private Ministerial Association,
          operating under the authority of the Creator and the laws of Nature and Nature's God.
        </p>
      </section>

      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* What is MOHE */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-10">
            What is MOHE
          </p>

          <div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
            <p>
              The Ministry of Human Empowerment (MOHE) is a faith-based, unincorporated Private
              Ministerial Association established on <span className="text-zinc-200">May 8, 2026</span> by
              Founding Trustee <span className="text-zinc-200">Cavin Balaster</span>.
            </p>
            <p>
              MOHE is organized for worship, education, spiritual freedom, and beneficent purposes,
              operating under the exclusive jurisdiction of ecclesiastical law as a Private Membership
              Association — outside the jurisdiction of government entities, agencies, and regulatory bodies,
              as protected by the First and Fourteenth Amendments to the United States Constitution,
              the Universal Declaration of Human Rights, and the laws of Nature's God.
            </p>
            <p>
              The Ministry recognizes <span className="text-zinc-200">privacy, sovereignty of consciousness,
              and stewardship of personal information</span> as natural extensions of the unalienable rights
              of free and spiritually autonomous beings.
            </p>
            <p>
              The Ministry supports the creation of systems, technologies, environments, and communities
              that allow life to flourish through voluntary association, informed consent, ease, dignity,
              and respect for personal sovereignty.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* What is a PMA */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-10">
            Private Membership Association
          </p>

          <div className="border border-white/8 rounded-2xl p-8 bg-white/[0.02] space-y-5 text-sm text-zinc-400 leading-relaxed">
            <p>
              A <span className="text-zinc-200">Private Membership Association (PMA)</span> is a private
              organization in which members voluntarily associate within the private domain, outside the
              jurisdiction of public law and government regulation.
            </p>
            <p>
              Members of a PMA change their legal capacity from public to private, enabling them to
              conduct affairs, share information, receive counsel, and engage in activities under common
              law — protected by rights of assembly, association, and religious freedom.
            </p>
            <p>
              The Ministry of Human Empowerment is established under Title 26 USC sections 508(c)(1)(A)
              and 6033(a)(3)(A), as a faith-based private organization not subject to incorporation with
              the state.
            </p>
            <p>
              Membership is <span className="text-zinc-200">voluntary</span> — an act of free will and
              conscious choice to associate with a community committed to the advancement of human
              sovereignty, health, spiritual freedom, and empowerment.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Founder */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-10">
            Founding Trustee
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="shrink-0 w-20 h-20 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
              <Image
                src="/mohe-logo-bnw.png"
                alt="MOHE"
                width={48}
                height={48}
                className="opacity-60"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-100 mb-1">Cavin Balaster</h2>
              <p className="text-xs text-zinc-600 mb-4">Senior Chairman &amp; Founding Trustee · Est. May 8, 2026</p>
              <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                <p>
                  Cavin Balaster is the Founding Trustee and Senior Chairman of The Ministry of Human
                  Empowerment. As the designated Director, Cavin retains all rights to unlimited contract
                  on behalf of the Ministry and full authority to designate or delegate powers and duties.
                </p>
                <p>
                  Known for his work in brain health, human potential, and conscious living — Cavin
                  established MOHE to create a legal and spiritual framework that protects and advances
                  the sovereign rights of every human being, while building the technological and
                  community infrastructure to support that mission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Ecosystem */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 text-center mb-4">
            Ministry Ecosystem
          </p>
          <p className="text-center text-zinc-500 text-sm mb-14 max-w-lg mx-auto leading-relaxed">
            MOHE is the organizational home and spiritual foundation for a growing network of
            projects, platforms, and initiatives.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ecosystemProjects.map((p) => (
              <div
                key={p.name}
                className="p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-white/14 hover:bg-white/[0.03] transition-all"
              >
                <p className="text-sm font-semibold text-zinc-200 mb-2">{p.name}</p>
                <p className="text-xs text-zinc-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
            Ready to join? Membership in MOHE is open to any natural man or woman who adheres
            to the purposes of this Ministry.
          </p>
          <Link
            href="/membership"
            className="inline-block px-10 py-3 rounded-full bg-red-700 hover:bg-red-600 text-white text-sm font-medium transition-colors"
          >
            Become a Member
          </Link>
        </div>
      </section>

    </div>
  )
}
