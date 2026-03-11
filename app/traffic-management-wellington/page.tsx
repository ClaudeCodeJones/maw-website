import type { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: 'Traffic Management Wellington | Men at Work',
  description:
    'Professional traffic management services in Wellington. Men at Work provides traffic control, TMP design, event traffic management and consultancy across the Wellington region.',
  alternates: {
    canonical: '/traffic-management-wellington',
  },
}

export default function WellingtonPage() {
  return (
    <LocationPage
      city="Wellington"
      region="Wellington"
      coverage={[
        'Wellington',
        'Lower Hutt',
        'Upper Hutt',
        'Porirua',
        'Kapiti Coast',
      ]}
    />
  )
}
