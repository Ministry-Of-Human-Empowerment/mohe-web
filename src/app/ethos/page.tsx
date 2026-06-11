import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Ethos — Ministry of Human Empowerment',
}

const principles = [
  {
    title: 'Faith',
    body: 'Faith is not about dogma. Faith is a living orientation toward truth, goodness, courage, growth, and the possibility of healing, even in a world where fear, suffering, and conflict exist. We believe in a living spiritual reality that transcends and underlies all things. The Ministry is rooted in sincere faith and genuine conscience.',
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
    body: 'Physical, emotional, and spiritual health are the birthright of every human being. The Ministry of Human Empowerment is committed to making paths to healing more possible and accessible.',
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
    body: 'Service is a desirable path. The Ministry of Human Empowerment is built on the conviction that giving generously to others, without depleting ourselves, is a powerful path towards the expansion of consciousness and value for humanity.',
  },
]

const affirmations = [
  'Life, awareness, and creation are sacred',
  'The expansion of consciousness is a natural and desirable path',
  'Beauty emerges from alignment with the flow of life',
  'Truth may be explored through sacred writings, spiritual traditions, personal experience, reflection, conscience, prayer, meditation, and communion with nature',
  'Every individual possesses an inherent right to sovereignty over their own mind, body, consciousness, and personal information',
]

const commitments = [
  'The cultivation of awareness',
  'The protection and enhancement of life',
  'The preservation of privacy, sovereignty, and human dignity',
  'The free exchange of knowledge and insight through voluntary and conscious association',
  'The empowerment of individuals to realize their fullest expression',
]

export default function Ethos() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-900">
      <Nav />
      <main className="flex-1">

        {/* Header */}
        <section className="px-6 py-24 bg-stone-900 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">Ethos</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Statement of Faith & Core Principles
          </h1>
          <p className="mt-5 text-lg text-stone-300 max-w-xl mx-auto leading-relaxed">
            The convictions that guide everything we do.
          </p>
        </section>

        {/* Statement of Faith */}
        <section className="px-6 py-20 bg-stone-950">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3">Statement of Faith</p>
            <h2 className="text-2xl font-semibold text-white mb-10">Ministry of Human Empowerment</h2>

            <div className="text-stone-300 leading-relaxed text-lg space-y-6 border-l-2 border-amber-500 pl-8">
              <p>
                We recognize that all life arises from a unified field of consciousness, expressed through nature and the living world.
              </p>
              <p>
                We hold that each individual is a unique expression of this greater whole, inherently connected to all beings and to the unfolding intelligence of life itself.
              </p>
              <p>
                We place our faith in the harmony of nature and in the guiding intelligence often referred to as &ldquo;Nature&rsquo;s God,&rdquo; not as a distant authority, but as the living source present within all things.
              </p>

              <div>
                <p className="mb-4">We affirm that:</p>
                <ul className="space-y-3 ml-2">
                  {affirmations.map((a) => (
                    <li key={a} className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1 shrink-0">✦</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                We recognize that life flourishes most fully within environments grounded in dignity, voluntary association, informed consent, mutual respect, creativity, ease, and harmony with the natural flow of life. Just as the quality of soil shapes the health, vitality, and fruitfulness of a plant, the conditions surrounding human beings shape the expression of consciousness, health, creativity, and human potential.
              </p>
              <p>
                We therefore seek to cultivate environments in which life may thrive physically, mentally, emotionally, spiritually, socially, and creatively, and to do so in ways that reduce unnecessary friction, coercion, fear, manipulation, and artificial barriers to human flourishing. We recognize ease not as passivity, but as alignment with the natural flow through which life most fully expresses its vitality, intelligence, beauty, and creative potential.
              </p>
              <p>
                We recognize privacy as a natural and essential condition for the flourishing of life and authentic self-expression. A person&rsquo;s thoughts, consciousness, experiences, communications, and personal information are extensions of the individual and remain their rightful property and responsibility.
              </p>
              <p>
                In an age where human attention, behavior, and personal information have become commodified, many systems offer convenience in exchange for ownership, access, surveillance, or exploitation of personal data through agreements rarely understood or consciously accepted. We reject systems and practices that exploit, commodify, manipulate, or extract human information, awareness, attention, or identity without informed and voluntary consent.
              </p>
              <p>
                We believe privacy and convenience should coexist harmoniously. We support the creation of systems, technologies, and communities that make privacy, sovereignty, and human dignity accessible, practical, and easy to maintain, so that life may flourish more naturally and freely.
              </p>
              <p>
                We recognize that which supports life, growth, clarity, vitality, and connection as aligned with our path.
              </p>
              <p>
                We recognize that which diminishes life, suppresses awareness, disrupts harmony, or turns against the living flow of existence as misaligned with our principles. In this sense, &ldquo;evil&rdquo; may be understood symbolically as LIVE inverted: a movement away from vitality, awareness, connection, and conscious creation.
              </p>

              <div>
                <p className="mb-4">We commit to:</p>
                <ul className="space-y-3 ml-2">
                  {commitments.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="text-amber-400 mt-1 shrink-0">✦</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                We honor the freedom of each member to explore, interpret, and embody truth in their own way, in alignment with conscience, nature, and the greater good of life.
              </p>
              <p>
                The Ministry honors Christianity and the Holy Bible as a living source of truth, wisdom, and spiritual nourishment. We equally welcome sincere seekers from all spiritual traditions — recognizing that genuine faith and the pursuit of truth can arise through many paths, and that the Spirit of life moves through those who seek it with honesty and integrity.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy as Sacred */}
        <section className="px-6 py-20 bg-stone-900">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3">Privacy as Sacred</p>
            <h2 className="text-2xl font-semibold text-white mb-8">Privacy as Sacred</h2>
            <div className="text-stone-300 leading-relaxed text-lg space-y-5 border-l-2 border-amber-500 pl-8">
              <p>
                We recognize privacy as a natural and essential condition for human flourishing.
              </p>
              <p>
                A person&rsquo;s thoughts, experiences, communications, consciousness, and personal information are extensions of the individual and remain their rightful responsibility and stewardship.
              </p>
              <p>
                In a world where personal information has become increasingly commodified, we support the development of technologies, communities, and practices that allow privacy and convenience to coexist.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="px-6 py-20 bg-stone-950">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-3 text-center">Core Principles</p>
            <h2 className="text-2xl font-semibold text-white mb-10 text-center">What We Stand For</h2>
            <div className="space-y-5">
              {principles.map(({ title, body }) => (
                <div key={title} className="bg-stone-800 border border-stone-700 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                  <p className="text-stone-400 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 bg-stone-950 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-stone-300 mb-8 leading-relaxed text-lg">
              These principles are the foundation of our membership community. If they resonate with you, we welcome you.
            </p>
            <Link
              href="/membership#apply"
              className="px-8 py-3 rounded-full bg-amber-500 text-stone-900 text-sm font-medium hover:bg-amber-400 transition-colors"
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
