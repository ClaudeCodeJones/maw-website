import type { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: 'Traffic Management Christchurch | Men at Work',
  description:
    'Professional traffic management services in Christchurch. Men at Work provides traffic control, TMP design, event traffic management and consultancy across Canterbury.',
  alternates: {
    canonical: '/traffic-management-christchurch',
  },
}

export default function ChristchurchPage() {
  return (
    <LocationPage
      city="Christchurch"
      region="Canterbury"
      coverage={[
        'Christchurch',
        'North Canterbury',
        'Rolleston',
        'Rangiora',
        'Kaiapoi',
        'Ashburton',
      ]}
    />
  )
}
