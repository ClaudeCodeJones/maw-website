import type { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: 'Traffic Management Blenheim | Men at Work',
  description:
    'Traffic management services in Blenheim and Marlborough. Men at Work provides traffic control, TMP design, event traffic management and consultancy across the Marlborough region.',
  alternates: {
    canonical: '/traffic-management-blenheim',
  },
}

export default function BlenheimPage() {
  return (
    <LocationPage
      city="Blenheim"
      region="Marlborough"
      coverage={[
        'Blenheim',
        'Picton',
        'Renwick',
        'Seddon',
        'Marlborough',
      ]}
    />
  )
}
