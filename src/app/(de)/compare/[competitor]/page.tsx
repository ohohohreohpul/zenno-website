import '@/styles/marketing.css'
import { ComparePage, compareMetadata } from '@/components/marketing/compare/ComparePage'
import { COMPETITOR_IDS, type CompetitorId } from '@/lib/marketing/content/compare'

export const dynamicParams = false

export function generateStaticParams() {
  return COMPETITOR_IDS.map((competitor) => ({ competitor }))
}

interface Props {
  params: Promise<{ competitor: CompetitorId }>
}

export async function generateMetadata({ params }: Props) {
  const { competitor } = await params
  return compareMetadata('de', competitor)
}

export default async function Page({ params }: Props) {
  const { competitor } = await params
  return <ComparePage lang="de" id={competitor} />
}
