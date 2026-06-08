import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import ApplyForm from './ApplyForm'

export const metadata = {
  title: 'Membership — Ministry of Human Empowerment',
}

export default function Membership() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-900">
      <Nav />
      <main className="flex-1">

        {/* Header */}
        <section className="px-6 py-24 bg-stone-900 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-4">Membership</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
            Join the Ministry
          </h1>
          <p className="mt-5 text-lg text-stone-300 max-w-xl mx-auto leading-relaxed">
            Membership is an invitation — not a transaction. We welcome sincere people of faith, conscience, and goodwill.
          </p>
        </section>

        {/* Why Join */}
        <section className="px-6 py-20 bg-stone-950">
          <div className="max-w-3xl mx-auto space-y-6 text-stone-300 text-lg leading-relaxed">
            <h2 className="text-3xl font-bold text-white">Why Join the Ministry of Human Empowerment?</h2>

            <p>
              The Ministry of Human Empowerment is a voluntary community of individuals who believe that every human being possesses inherent worth, dignity, and potential.
            </p>
            <p>
              We are united by a shared commitment to human flourishing, personal sovereignty, lifelong learning, healing, service, and the betterment of life on Earth.
            </p>
            <p className="font-medium text-white">
              Membership is not about obligation. It is about alignment.
            </p>
            <p>
              By joining, you become part of a growing community dedicated to empowering individuals, strengthening families, supporting personal growth, protecting privacy, fostering meaningful connection, and creating tools, resources, and opportunities that help people live more fully and freely.
            </p>
            <p>
              Whether your passion is education, health, technology, creativity, community building, spiritual growth, or simply helping others, the Ministry provides a place for people of diverse backgrounds and beliefs to come together in service of a common vision:
            </p>
            <p className="text-xl font-semibold text-white">
              A world where every person is empowered to thrive.
            </p>
            <p>
              Members may participate in Ministry projects, educational initiatives, community discussions, events, volunteer opportunities, and collaborative efforts designed to uplift, enlighten, and empower humanity.
            </p>
            <p>
              Our projects include initiatives focused on personal development, health and wellness, knowledge sharing, privacy, human-centered technology, community building, and the exploration of human potential.
            </p>
            <p>Above all, we recognize a simple truth:</p>

            <div className="border-l-2 border-amber-500 pl-6 py-2">
              <p className="text-2xl font-bold text-amber-400">All People Are Very Important.</p>
            </div>

            <p>If these values resonate with you, we welcome you to join us.</p>
          </div>
        </section>

        {/* Join Form */}
        <section className="px-6 py-20 bg-stone-900" id="join">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Become a Member</h2>

            <div className="space-y-4 text-stone-300 text-lg leading-relaxed mb-10">
              <p>
                The Ministry of Human Empowerment is a voluntary community dedicated to the upliftment, enlightenment, empowerment, and flourishing of all people.
              </p>
              <p>
                By joining, you affirm the mission, principles, and Statement of Faith of the Ministry of Human Empowerment and choose to participate in this community according to your interests, gifts, and calling.
              </p>
            </div>

            <ApplyForm />
          </div>
        </section>

        {/* Closing */}
        <section className="px-6 py-20 bg-stone-950 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-stone-300 leading-relaxed font-light">
              Membership in this Ministry is not about dues or obligation. It is about belonging to something — and being part of something that belongs to you.
            </p>
            <div className="mt-8">
              <Link href="/ethos" className="text-sm text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors">
                Read our Statement of Faith →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
