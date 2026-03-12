import type { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: 'Traffic Management Blenheim | Men at Work',
  description:
    'Traffic management services in Blenheim and Marlborough. Men at Work provides traffic management, TMP design, event traffic management and consultancy across the Marlborough region.',
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
        'Havelock',
      ]}
      teamDescription="The Blenheim branch is led by Branch Manager Luke Roberts and Lead STMS Josh Thomason, who coordinate scheduling and client communication, supported by a team of STMS and traffic management crews operating across the Marlborough region."
      history="The Blenheim branch was established in 2017 to support infrastructure and construction activity across the Marlborough region. Today the team delivers traffic management across Blenheim and the wider Marlborough region, supporting roadworks, infrastructure projects, and events."
    />
  )
}
