import '@/styles/marketing.css'
import { CityPage, cityPageMetadata } from '@/components/marketing/city/CityPage'
import { CITY_SLUGS, type CitySlug } from '@/lib/marketing/cities'

export const dynamicParams = false

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }))
}

interface Props {
  params: Promise<{ city: CitySlug }>
}

export async function generateMetadata({ params }: Props) {
  const { city } = await params
  return cityPageMetadata({ lang: 'en', industry: 'yoga-studios', city })
}

export default async function Page({ params }: Props) {
  const { city } = await params
  return <CityPage lang="en" industry="yoga-studios" city={city} />
}
