import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mission & Statement of Faith — Ministry of Human Empowerment',
  description:
    "The Ministry of Human Empowerment's Statement of Faith, mission, and core commitments to human sovereignty, privacy, and the flourishing of life.",
}

const commitments = [
  'The cultivation of awareness',
  'The protection and enhancement of life',
  'The preservation of privacy, sovereignty, and human dignity',
  'The free exchange of knowledge and insight through voluntary and conscious association',
  'The empowerment of individuals to realize their fullest expression',
]

const purposes = [
  'To promote faith-based doctrines grounded in spiritual inquiry, nature, and higher truth',
  'To establish and oversee places of gathering, reflection, study, education, contemplation, and spiritual exploration',
  'To evangelize worldwide',
  'To support ministries, missionary activities, and ordain ministers',
  'The preservation of truth',
  'To protect and defend the gifts given to us by our Creator',
  'To train, develop, and support leaders in our community and nation',
  'To engage in activities necessary for the accomplishment of this purpose',
]

export default function MissionPage() {
  return (
    <div className="text-[#EDE8DC]">

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-5%,rgba(196,30,30,0.1),transparent)] pointer-events-none" />
        <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-zinc-600 mb-5">
          Ministry of Human Empowerment
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-50 max-w-3xl mx-auto leading-tight mb-6">
          Mission &amp; Statement of Faith
        </h1>
        <p className="text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">
          Our faith is our foundation. Below is the living expression of what we believe,
          what we commit to, and why this Ministry exists.
        </p>
      </section>

      {/* Divider */}
      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Statement of Faith */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-12">
            Statement of Faith
          </p>

          <div className="space-y-8 text-zinc-300 leading-relaxed">

            <p className="text-base">
              We recognize that all life arises from a unified field of consciousness, expressed through
              nature and the living world.
            </p>

            <p className="text-base">
              We hold that each individual is a unique expression of this greater whole, inherently
              connected to all beings and to the unfolding intelligence of life itself.
            </p>

            <p className="text-base">
              We place our faith in the harmony of nature and in the guiding intelligence often referred
              to as <span className="text-zinc-100 italic">"Nature's God"</span> — not as a distant authority, but as the living
              source present within all things.
            </p>

            {/* We Affirm block */}
            <div className="border-l-2 border-red-800/60 pl-6 py-2 space-y-4">
              <p className="text-sm font-semibold text-zinc-400 tracking-wider uppercase mb-4">We Affirm</p>
              <ul className="space-y-3">
                {[
                  'Life, awareness, and creation are sacred',
                  'The expansion of consciousness is a natural and desirable path',
                  'Beauty emerges from alignment with the flow of life',
                  'Truth is revealed through direct experience, reflection, and communion with nature',
                  'Every individual possesses an inherent right to sovereignty over their own mind, body, consciousness, and personal information',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span className="text-red-700 mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-base">
              We recognize that life flourishes when nurtured within environments aligned with truth,
              freedom, privacy, creativity, nourishment, connection, mutual respect, ease, and flow.
              Just as the quality of soil shapes the health, vitality, and fruitfulness of a plant,
              the conditions surrounding human beings shape the expression of consciousness, health,
              creativity, and human potential.
            </p>

            <p className="text-base">
              We therefore seek to cultivate environments in which life may thrive — physically, mentally,
              emotionally, spiritually, socially, and creatively — and to do so in ways that reduce
              unnecessary friction, coercion, fear, manipulation, and artificial barriers to human flourishing.
            </p>

            <p className="text-base">
              We recognize ease not as passivity, but as alignment with the natural flow through which
              life most fully expresses its vitality, intelligence, beauty, and creative potential.
            </p>

            {/* Privacy */}
            <div className="border border-white/8 rounded-2xl p-6 bg-white/[0.02]">
              <h3 className="text-sm font-semibold text-zinc-200 mb-3 tracking-wide">Privacy as Sacred</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                We recognize privacy as a natural and essential condition for the flourishing of life and
                authentic self-expression. A person's thoughts, consciousness, experiences, communications,
                and personal information are extensions of the individual and remain their rightful property
                and responsibility.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                In an age where human attention, behavior, and personal information have become commodified,
                many systems offer convenience in exchange for ownership, access, surveillance, or exploitation
                of personal data through agreements rarely understood or consciously accepted. We reject
                systems and practices that exploit, commodify, manipulate, or extract human information,
                awareness, attention, or identity without informed and voluntary consent.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We believe privacy and convenience should coexist harmoniously. We support the creation of
                systems, technologies, and communities that make privacy, sovereignty, and human dignity
                accessible, practical, and easy to maintain — so that life may flourish more naturally and freely.
              </p>
            </div>

            <p className="text-base">
              We recognize that which supports life, growth, clarity, vitality, and connection as aligned
              with our path. We recognize that which diminishes life, suppresses awareness, disrupts harmony,
              or turns against the living flow of existence as misaligned with our principles.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Our Commitments */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-12">
            We Commit To
          </p>
          <div className="space-y-4">
            {commitments.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-white/6 bg-white/[0.02]">
                <div className="text-xs text-red-700 font-mono mt-0.5 shrink-0">0{i + 1}</div>
                <p className="text-sm text-zinc-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Purpose */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-4">
            Ministry Purpose
          </p>
          <p className="text-sm text-zinc-500 leading-relaxed mb-10 max-w-xl">
            The purpose and mission of The Ministry of Human Empowerment, as declared in our
            founding Charter &amp; Bylaws:
          </p>
          <div className="space-y-3">
            {purposes.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1 h-1 rounded-full bg-red-700 mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honor */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center border border-white/8 rounded-2xl p-10 bg-white/[0.02]">
          <p className="text-sm text-zinc-400 leading-relaxed italic">
            "We honor the freedom of each member to explore, interpret, and embody truth in their
            own way, in alignment with conscience, nature, and the greater good of life."
          </p>
          <p className="mt-4 text-[10px] text-zinc-700 tracking-widest uppercase">
            — Statement of Faith, Ministry of Human Empowerment
          </p>
        </div>
      </section>

    </div>
  )
}
