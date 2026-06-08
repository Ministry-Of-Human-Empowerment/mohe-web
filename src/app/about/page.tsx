import type { Metadata } from 'next'
import aboutContent from '../../../content/pages/about.json'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About — Ministry of Human Empowerment',
  description:
    'Learn about the Ministry of Human Empowerment — a Private Ministerial Association founded by Cavin Balaster on May 8, 2026, dedicated to human sovereignty, spiritual freedom, and empowerment.',
}

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string }>
}) {
  const { edit } = await searchParams
  return <AboutContent content={aboutContent} editMode={edit === '1'} />
}
