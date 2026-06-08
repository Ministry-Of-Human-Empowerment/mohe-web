import type { Metadata } from 'next'
import missionContent from '../../../content/pages/mission.json'
import MissionContent from '@/components/MissionContent'

export const metadata: Metadata = {
  title: 'Mission & Statement of Faith — Ministry of Human Empowerment',
  description:
    "The Ministry of Human Empowerment's Statement of Faith, mission, and core commitments to human sovereignty, privacy, and the flourishing of life.",
}

export default async function MissionPage({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string }>
}) {
  const { edit } = await searchParams
  return <MissionContent content={missionContent} editMode={edit === '1'} />
}
