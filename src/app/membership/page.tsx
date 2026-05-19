import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Membership — Ministry of Human Empowerment',
  description:
    'Join the Ministry of Human Empowerment — a Private Ministerial Association open to all who seek to advance human sovereignty, spiritual freedom, privacy, and empowerment.',
}

const memberRights = [
  {
    num: '01',
    title: 'Sovereignty & Self-Determination',
    body: 'You decide which members qualify to provide you counsel and advice concerning all matters — physical, spiritual, healthcare, law, and any other matter.',
  },
  {
    num: '02',
    title: 'Freedom of Choice',
    body: 'Members have the freedom to choose and perform for themselves the types of therapies, treatments, and activities they believe best for their own health, wellness, and personal sovereignty.',
  },
  {
    num: '03',
    title: 'Private Domain Protection',
    body: 'All activities within the Ministry are matters of private contract, protected by the First and Fourteenth Amendments and the Universal Declaration of Human Rights.',
  },
  {
    num: '04',
    title: 'Voluntary Association',
    body: 'Membership is entirely voluntary. You may withdraw from this agreement and terminate membership at any time, by written notice to the Ministry.',
  },
  {
    num: '05',
    title: 'Common Law Jurisdiction',
    body: 'Member activity within MOHE is under common law rather than statutory or regulatory law — free from the jurisdiction of government agencies and public entities.',
  },
  {
    num: '06',
    title: 'Community & Counsel',
    body: 'Access to a network of members, knowledge systems, technologies, and projects dedicated to human empowerment, health, privacy, and spiritual growth.',
  },
]

const memberAgreement = [
  "MOHE's purpose is furthering the empowerment, upliftment, enlightenment, spiritual realization, and general welfare of people throughout the world.",
  'The Ministry is a creation of free men and women to associate with each other in the private domain according to their ministry and talents.',
  'MOHE is a platform for members to conduct all manner of private speech and business within the private domain.',
  "Members affirm their right to freedom of religion, free speech, petition, assembly, and the right to freely exercise all unalienable rights as granted by our Creator.",
  "Members voluntarily change their capacity from that of a public person to that of a private member.",
  "I enter into this agreement freely, without duress or coercion, exercising my right of freedom of association.",
]

export default function MembershipPage() {
  return (
    <div className="text-[#EDE8DC]">

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-5%,rgba(196,30,30,0.1),transparent)] pointer-events-none" />
        <p className="text-[10px] font-semibold tracking-[0.35em] uppercase text-zinc-600 mb-5">
          Voluntary Association
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-50 max-w-3xl mx-auto leading-tight mb-6">
          Become a Member
        </h1>
        <p className="text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">
          Membership in the Ministry of Human Empowerment is an act of conscious, voluntary
          association — an affirmation of your sovereignty and your commitment to the
          advancement of human empowerment.
        </p>
      </section>

      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* What Membership Means */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-10">
            What Membership Means
          </p>
          <div className="space-y-5 text-sm text-zinc-400 leading-relaxed">
            <p>
              Membership in MOHE is open to any natural man or woman of sound mind who adheres
              to the purposes of this Ministry and has not been previously sanctioned or banned by the Ministry.
            </p>
            <p>
              By becoming a member, you voluntarily change your legal capacity from that of a public
              person to that of a private member — entering the private domain of the Ministry, governed
              by common law and ecclesiastical law, outside the jurisdiction of public government regulation.
            </p>
            <p>
              This is not a decision made lightly — it is a declaration of your sovereignty, your faith,
              and your commitment to the principles of human empowerment.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Member Rights */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 text-center mb-14">
            Member Rights &amp; Benefits
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {memberRights.map((r) => (
              <div
                key={r.num}
                className="p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-red-900/30 transition-all"
              >
                <div className="text-xs text-red-700 font-mono mb-3">{r.num}</div>
                <h3 className="text-sm font-semibold text-zinc-200 mb-2">{r.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Membership Agreement Summary */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-4">
            Membership Agreement
          </p>
          <p className="text-sm text-zinc-500 leading-relaxed mb-10">
            By joining the Ministry of Human Empowerment, members agree to the following core principles:
          </p>
          <div className="space-y-3">
            {memberAgreement.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/6 bg-white/[0.02]"
              >
                <div className="w-1 h-1 rounded-full bg-red-700 mt-2 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-zinc-600 leading-relaxed">
            The full Membership Application, containing all 21 articles of agreement, will be provided
            upon request. Membership may be terminated by written notice at any time.
          </p>
        </div>
      </section>

      <div className="w-full max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Eligibility */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-zinc-600 mb-10">
            Eligibility
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Open to', value: 'Any natural man or woman of sound mind' },
              { label: 'Founded on', value: 'May 8, 2026' },
              { label: 'Jurisdiction', value: 'Common law / Ecclesiastical law' },
              { label: 'Type', value: 'Unincorporated Private Ministerial Association' },
              { label: 'Dues', value: 'At discretion of the Trustees' },
              { label: 'Exit', value: 'Voluntary withdrawal at any time by written notice' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-1 p-4 rounded-xl border border-white/6 bg-white/[0.02]">
                <span className="text-[10px] text-zinc-700 uppercase tracking-widest">{item.label}</span>
                <span className="text-sm text-zinc-300">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto text-center border border-red-900/30 rounded-3xl p-14 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(196,30,30,0.1),transparent)]">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-50 mb-4">
            Ready to Join?
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-md mx-auto">
            Membership applications are currently handled directly by the Ministry.
            Reach out to begin your voluntary association with the Ministry of Human Empowerment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@mohe.org"
              className="px-10 py-3 rounded-full bg-red-700 hover:bg-red-600 text-white text-sm font-medium transition-colors"
            >
              Apply for Membership
            </a>
            <Link
              href="/mission"
              className="px-10 py-3 rounded-full border border-white/15 text-zinc-300 text-sm font-medium hover:border-white/30 hover:text-zinc-100 transition-colors"
            >
              Read Our Mission
            </Link>
          </div>
          <p className="mt-6 text-xs text-zinc-700">
            By applying, you affirm your voluntary association and agreement with the Ministry principles.
          </p>
        </div>
      </section>

    </div>
  )
}
