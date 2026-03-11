import type { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: 'Traffic Management Nelson | Men at Work',
  description:
    'Professional traffic management services in Nelson and Tasman. Men at Work provides traffic control, TMP design, event traffic management and consultancy across the top of the South Island.',
  alternates: {
    canonical: '/traffic-management-nelson',
  },
}

export default function NelsonPage() {
  return (
    <LocationPage
      city="Nelson"
      region="Nelson Tasman"
      coverage={[
        'Nelson',
        'Richmond',
        'Motueka',
        'Tasman',
        'Golden Bay',
      ]}
    />
  )
}
