import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Membership Agreement — Ministry of Human Empowerment',
}

const terms = [
  "THE MINISTRY OF HUMAN EMPOWERMENT's purpose is furthering the upliftment, enlightenment, spiritual realization, human flourishing, conscious growth, and general welfare of people throughout the world, the betterment of life on planet Earth, and other spiritual, humanitarian, and beneficent purposes.",
  "THE MINISTRY OF HUMAN EMPOWERMENT is a creation of free men and women to associate with each other in the private domain according to their ministry and talents.",
  "THE MINISTRY OF HUMAN EMPOWERMENT is a platform on which members may, for THE MINISTRY OF HUMAN EMPOWERMENT's good purpose, conduct all manner of private speech and business with THE MINISTRY OF HUMAN EMPOWERMENT, members, and other associations — keeping all business in the private domain and utilizing the protections thereof.",
  "THE MINISTRY OF HUMAN EMPOWERMENT is a private, unincorporated ministry that operates outside the jurisdiction of government entities, agencies, officers, agents, contractors, and other representatives, as protected by law.",
  "THE MINISTRY OF HUMAN EMPOWERMENT lawfully stands upon the inherent and unalienable rights endowed to all people by our Creator, Nature, and Nature's God, as reflected through conscience, spiritual inquiry, sacred and holy writings, wisdom traditions, the Constitution of the United States of America, the constitutions of the several states of the union, the Canadian Charter of Rights and Freedoms, and the universal principles of human dignity, voluntary association, privacy, and freedom of conscience.",
  "Members claim the right to freedom of religion, free speech, petition, assembly, privacy, and the right to gather in association to assert our rights protected by those Constitutions, Charters, and Statutes.",
  "Members claim the right to be free from unreasonable search and seizure, the right to not incriminate ourselves, and the right to freely exercise all other unalienable rights as granted by our Creator and guaranteed by those Constitutions, Charters, and Statutes.",
  "Members decide for themselves which member(s) qualify to provide them counsel and advice concerning all matters, including but not limited to physical, spiritual, healthcare, law, technology, education, and any other matter, and may contract for counsel, advice, services, and support they believe assist their ministry through THE MINISTRY OF HUMAN EMPOWERMENT.",
  "Members have the freedom to choose and perform for ourselves the types of therapies, treatments, practices, technologies, and methods we think best for diagnosing, treating, and preventing illness and disease, for achieving and maintaining optimum wellness, and for pursuing spiritual, emotional, intellectual, and personal growth, as well as the freedom to choose assistance in lawful matters and any other private business activity. Members further retain the right to stewardship and privacy concerning their personal information, communications, consciousness, and lawful private affairs.",
  "THE MINISTRY OF HUMAN EMPOWERMENT recognizes that life flourishes most fully within environments grounded in dignity, voluntary association, privacy, informed consent, mutual respect, creativity, ease, and harmony with the natural flow of life.",
  "THE MINISTRY OF HUMAN EMPOWERMENT will recognize as a member any person(s), natural or otherwise (irrespective of race, color, religion, background, or spiritual tradition) who has joined THE MINISTRY OF HUMAN EMPOWERMENT or its social media groups and has agreed to the terms of membership, providing said person has not been sanctioned, excommunicated, or otherwise banned by THE MINISTRY OF HUMAN EMPOWERMENT.",
  "THE MINISTRY OF HUMAN EMPOWERMENT's trustees, or their designee, may, at any time, terminate my membership should they conclude I am interacting with them or other members in a way that is contrary or detrimental to the focus, principles, harmony, or betterment of THE MINISTRY OF HUMAN EMPOWERMENT.",
  "THE MINISTRY OF HUMAN EMPOWERMENT is protected by the First and Fourteenth Amendments to the U.S. Constitution and outside the jurisdiction and authority of Federal and State Agencies and Authorities concerning complaints or grievances against THE MINISTRY OF HUMAN EMPOWERMENT, members, or other staff persons. All rights of complaints or grievances will be settled by a THE MINISTRY OF HUMAN EMPOWERMENT designee, committee, or tribunal and will be waived by the member for the benefit of THE MINISTRY OF HUMAN EMPOWERMENT and its members.",
  "THE MINISTRY OF HUMAN EMPOWERMENT and member activity is under common law rather than statutory law or regulatory law, which are creations of public government for the public.",
  "In my relations as a member, I voluntarily change my capacity from that of a public person to that of a private member.",
  "My activities within THE MINISTRY OF HUMAN EMPOWERMENT are matters of private contracts that I refuse to share with Local, State, or Federal investigative or enforcement agencies. I agree not to pursue legal action against a fellow member of THE MINISTRY OF HUMAN EMPOWERMENT unless that member has exposed me to a clear and present danger of substantive harm and upon the recommendation and approval of THE MINISTRY OF HUMAN EMPOWERMENT.",
  "I do not, and will not while a member, represent any Local, State, or Federal agency whose purpose is to regulate and approve products or services or to conduct any mission of enforcement, entrapment, or investigation.",
  "I may, by written notice to THE MINISTRY OF HUMAN EMPOWERMENT, withdraw from this agreement and terminate membership at any time. I will not misrepresent myself as being a member beyond the term of my membership.",
  "These pages consist of the entire agreement for membership in THE MINISTRY OF HUMAN EMPOWERMENT.",
  "I enter into this agreement freely, without duress or coercion.",
  "I hereby exercise my right of freedom of association as guaranteed by the Universal Declaration of Human Rights (UDHR), the U.S. Constitution, equivalent provisions of the various State Constitutions, and the Canadian Charter of Rights and Freedoms.",
  "I agree this contract began on the date of my joining THE MINISTRY OF HUMAN EMPOWERMENT. I declare that by joining THE MINISTRY OF HUMAN EMPOWERMENT and/or THE MINISTRY OF HUMAN EMPOWERMENT's websites and/or social media group(s), I have carefully read this document and I understand and agree with it.",
]

export default function MembershipAgreement() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-900">
      <Nav />
      <main className="flex-1">

        <section className="px-6 py-24 bg-stone-900 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">Membership</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Membership Agreement
          </h1>
          <p className="mt-5 text-lg text-stone-300 max-w-xl mx-auto leading-relaxed">
            The full terms and conditions of membership in THE MINISTRY OF HUMAN EMPOWERMENT.
          </p>
        </section>

        <section className="px-6 py-20 bg-stone-950">
          <div className="max-w-3xl mx-auto">
            <p className="text-stone-300 text-lg leading-relaxed mb-10">
              By becoming a member of THE MINISTRY OF HUMAN EMPOWERMENT, I agree to the following terms and conditions:
            </p>
            <ol className="space-y-5">
              {terms.map((term, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-amber-400 font-semibold text-sm shrink-0 mt-0.5">{i + 1}.</span>
                  <p className="text-stone-300 text-sm leading-relaxed">{term}</p>
                </li>
              ))}
            </ol>
            <div className="mt-14 pt-10 border-t border-stone-700">
              <Link
                href="/membership#join"
                className="px-8 py-3 rounded-full bg-amber-500 text-stone-900 text-sm font-medium hover:bg-amber-400 transition-colors"
              >
                ← Back to Membership
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
