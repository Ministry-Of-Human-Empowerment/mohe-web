import Image from 'next/image'
import Link from 'next/link'

const pillars = [
  {
    numeral: 'I',
    title: 'Human Sovereignty',
    body: 'Every individual possesses an inherent right to sovereignty over their own mind, body, consciousness, and personal information. This right is God-given, not granted by government.',
  },
  {
    numeral: 'II',
    title: 'Privacy as Sacred',
    body: "Privacy is a natural and essential condition for the flourishing of life. A person's thoughts, consciousness, and personal information are extensions of the individual and remain their rightful property.",
  },
  {
    numeral: 'III',
    title: 'Voluntary Community',
    body: 'Life flourishes most fully through voluntary association, informed consent, ease, dignity, and mutual respect for personal sovereignty.',
  },
]

const affirmations = [
  'Life, awareness, and creation are sacred',
  'The expansion of consciousness is a natural and desirable path',
  'Beauty emerges from alignment with the flow of life',
  'Truth is revealed through direct experience, reflection, and communion with nature',
  'Every individual possesses an inherent right to sovereignty over mind, body, and consciousness',
  'Privacy and convenience should coexist harmoniously',
]

const projects = [
  { name: 'FlowBond', desc: 'Layer 0 identity & connection protocol' },
  { name: 'FlowCastle', desc: 'Sovereign digital spaces' },
  { name: 'FlowGarden', desc: 'Garden intelligence & natural health' },
  { name: 'FlowNation', desc: 'Faith-based community & nation-building' },
  { name: "Captain's Log", desc: 'Personal sovereignty & journaling' },
  { name: 'Feed a Brain', desc: 'Medical empowerment & brain health' },
]

export default function Home() {
  return (
    <div className="text-[#EDE8DC]">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(196,30,30,0.12),transparent)] pointer-events-none" />

        <Image
          src="/mohe-logo.png"
          alt="Phoenix Brain — Ministry of Human Empowerment"
          width={160}
          height={160}
          priority
          className="mb-8 drop-shadow-[0_0_60px_rgba(196,30,30,0.35)]"
        />

        <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-zinc-600 mb-5">
          Private Membership Association · Est. May 8, 2026
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-50 max-w-4xl leading-[1.05] mb-6">
          Ministry of Human<br className="hidden sm:block" /> Empowerment
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed italic mb-4">
          "A Spiritual Ministry Reliant Upon a Faith in Nature and Nature's God"
        </p>

        <p className="text-sm text-zinc-500 max-w-xl leading-relaxed mb-10">
          An unincorporated Private Ministerial Association dedicated to the upliftment, enlightenment,
          and empowerment of every human being on Earth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/membership"
            className="px-8 py-3 rounded-full bg-red-700 hover:bg-red-600 text-white text-sm font-medium transition-colors"
          >
            Become a Member
          </Link>
          <Link
            href="/mission"
            className="px-8 py-3 rounded-full border border-white/15 text-zinc-300 text-sm font-medium hover:border-white/35 hover:text-zinc-100 transition-colors"
          >
            Our Mission
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Core Principles */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 text-center mb-14">
            Core Principles
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.numeral}
                className="rounded-2xl border border-white/8 p-7 bg-white/[0.02] hover:border-red-900/40 hover:bg-white/[0.03] transition-all"
              >
                <div className="text-3xl font-serif text-red-700/80 mb-5">{p.numeral}</div>
                <h3 className="text-sm font-semibold text-zinc-100 mb-3 tracking-wide">{p.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement of Faith Quote */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-16" />
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-red-700/50 text-5xl font-serif mb-6">&ldquo;</div>
          <blockquote className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light">
            We recognize that all life arises from a unified field of consciousness, expressed through
            nature and the living world. We hold that each individual is a unique expression of this
            greater whole, inherently connected to all beings and to the unfolding intelligence of life itself.
          </blockquote>
          <cite className="block mt-8 text-[10px] text-zinc-600 tracking-[0.3em] uppercase not-italic">
            — Statement of Faith, Ministry of Human Empowerment
          </cite>
        </div>
        <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mt-16" />
      </section>

      {/* We Affirm */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 text-center mb-14">
            We Affirm
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {affirmations.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-white/[0.02]"
              >
                <div className="w-1 h-1 rounded-full bg-red-600 mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Ecosystem */}
      <section className="px-6 py-20 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(196,30,30,0.05),transparent)]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 text-center mb-4">
            Ministry Ecosystem
          </p>
          <p className="text-center text-zinc-500 text-sm mb-12 max-w-lg mx-auto leading-relaxed">
            MOHE is home to a growing network of projects — each advancing human empowerment,
            natural health, privacy, and conscious technology.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {projects.map((p) => (
              <div
                key={p.name}
                className="p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-white/16 hover:bg-white/[0.04] transition-all"
              >
                <p className="text-sm font-semibold text-zinc-200 mb-1">{p.name}</p>
                <p className="text-xs text-zinc-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-20" />
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-8">
            Founded By
          </p>
          <div className="inline-flex items-center gap-4 border border-white/10 rounded-2xl px-8 py-6 bg-white/[0.02]">
            <div className="text-left">
              <p className="text-base font-semibold text-zinc-100">Cavin Balaster</p>
              <p className="text-xs text-zinc-500 mt-0.5">Founding Trustee & Senior Chairman</p>
              <p className="text-xs text-zinc-700 mt-1">Est. May 8, 2026</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
            An unincorporated Private Ministerial Association operating under ecclesiastical law
            and the authority of the Creator, with full protections of voluntary association.
          </p>
        </div>
      </section>

      {/* Join CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto text-center border border-red-900/30 rounded-3xl p-12 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(196,30,30,0.1),transparent)]">
          <Image
            src="/mohe-logo.png"
            alt="MOHE"
            width={56}
            height={56}
            className="mx-auto mb-6 drop-shadow-[0_0_20px_rgba(196,30,30,0.4)]"
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-50 mb-4">
            Join the Ministry
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-md mx-auto">
            Membership is an act of voluntary association — an affirmation of your sovereignty as a
            free and spiritually autonomous being, and your commitment to the advancement of human empowerment.
          </p>
          <Link
            href="/membership"
            className="inline-block px-10 py-3 rounded-full bg-red-700 hover:bg-red-600 text-white text-sm font-medium transition-colors"
          >
            Apply for Membership
          </Link>
        </div>
      </section>

    </div>
  )
}
