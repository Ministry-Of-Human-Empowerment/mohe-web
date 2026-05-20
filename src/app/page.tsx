import homeContent from "../../content/pages/home.json"
import HomepageContent from "@/components/HomepageContent"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ edit?: string }>
}) {
  const { edit } = await searchParams
  return <HomepageContent content={homeContent} editMode={edit === "1"} />
}
