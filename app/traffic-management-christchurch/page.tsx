import type { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: 'Traffic Management Christchurch | Men at Work',
  description:
    'Professional traffic management services in Christchurch. Men at Work provides traffic management, TMP design, event traffic management and consultancy across Canterbury.',
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
        'Banks Peninsula',
        'Ashburton',
      ]}
      teamDescription="The Christchurch branch is led by Branch Manager Pete Manahi and Client Manager Brendan Ivory, who coordinate scheduling and client communication, supported by a team of STMS and traffic management crews operating across the Canterbury region."
      history="The Christchurch branch was established in 2008 to support the region's growing infrastructure, construction, and event sectors. Today the team delivers professional traffic management across Christchurch and the wider Canterbury region, supporting roadworks, infrastructure projects, and events."
    />
  )
}
