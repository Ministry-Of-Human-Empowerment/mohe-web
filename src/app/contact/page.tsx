import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Contact — Ministry of Human Empowerment',
}

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Nav />
      <main className="flex-1">

        {/* Header */}
        <section className="px-6 py-24 bg-stone-50 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-4">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 max-w-3xl mx-auto">
            Get in Touch
          </h1>
          <p className="mt-5 text-lg text-stone-600 max-w-xl mx-auto leading-relaxed">
            We&apos;d love to hear from you. Reach out with questions, to learn more about the Ministry, or to begin the membership process.
          </p>
        </section>

        {/* Contact Options */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              <div className="border border-stone-200 rounded-2xl p-7">
                <h3 className="font-semibold text-stone-900 mb-2">General Inquiries</h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Questions about the Ministry, our mission, or our projects.
                </p>
                <a
                  href="mailto:info@ministryofhumanempowerment.org"
                  className="text-sm text-amber-700 hover:text-amber-900 font-medium transition-colors"
                >
                  info@ministryofhumanempowerment.org
                </a>
              </div>

              <div className="border border-stone-200 rounded-2xl p-7">
                <h3 className="font-semibold text-stone-900 mb-2">Membership</h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  Ready to begin the membership process or want to know more before applying?
                </p>
                <Link
                  href="/membership"
                  className="text-sm text-amber-700 hover:text-amber-900 font-medium transition-colors"
                >
                  View membership information →
                </Link>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="border border-stone-200 rounded-2xl p-8 bg-stone-50">
              <h2 className="text-xl font-semibold text-stone-900 mb-2">Send a Message</h2>
              <p className="text-stone-500 text-sm mb-8">Contact form coming soon. In the meantime, reach us by email above.</p>
              <div className="space-y-4 opacity-50 pointer-events-none">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Your Name</label>
                  <div className="w-full border border-stone-200 rounded-lg px-4 py-2.5 bg-white text-sm text-stone-400">Full name</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                  <div className="w-full border border-stone-200 rounded-lg px-4 py-2.5 bg-white text-sm text-stone-400">your@email.com</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Message</label>
                  <div className="w-full border border-stone-200 rounded-lg px-4 py-2.5 bg-white text-sm text-stone-400 h-28">Your message...</div>
                </div>
                <div className="px-8 py-3 rounded-full bg-stone-900 text-white text-sm font-medium w-fit">
                  Send Message
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
