import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ministry of Human Empowerment',
  description:
    "A Private Ministerial Association dedicated to the upliftment, enlightenment, sovereignty, and empowerment of every human being. Reliant upon a faith in Nature and Nature's God.",
  openGraph: {
    title: 'Ministry of Human Empowerment',
    description:
      'A Private Ministerial Association dedicated to human sovereignty, privacy, spiritual freedom, and the empowerment of every human being.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#060810]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
