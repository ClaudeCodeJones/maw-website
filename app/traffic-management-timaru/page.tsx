import type { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: 'Traffic Management Timaru | Men at Work',
  description:
    'Traffic management services across Timaru and South Canterbury. Men at Work provides traffic management, TMP design, event traffic management and consultancy for infrastructure, civil and event projects.',
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
        'Twizel',
      ]}
      teamDescription="The Timaru branch is led by Branch Manager Christina Elliott and Foreman Adrian Lester, who coordinate scheduling and client communication, supported by a team of STMS and traffic management crews operating across the South Canterbury region."
      history="The Timaru branch was established in 2021 to support infrastructure and construction projects across South Canterbury. Today the team delivers traffic management across Timaru and the wider South Canterbury region, supporting roadworks, infrastructure projects, and events."
    />
  )
}
