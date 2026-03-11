import type { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: 'Traffic Management Timaru | Men at Work',
  description:
    'Traffic management services across Timaru and South Canterbury. Men at Work provides traffic control, TMP design, event traffic management and consultancy for infrastructure, civil and event projects.',
  alternates: {
    canonical: '/traffic-management-timaru',
  },
}

export default function TimaruPage() {
  return (
    <LocationPage
      city="Timaru"
      region="South Canterbury"
      coverage={[
        'Timaru',
        'Geraldine',
        'Temuka',
        'Waimate',
        'Mackenzie District',
      ]}
    />
  )
}
