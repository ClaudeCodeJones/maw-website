import type { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: 'Traffic Management Nelson | Men at Work',
  description:
    'Professional traffic management services in Nelson and Tasman. Men at Work provides traffic management, TMP design, event traffic management and consultancy across the top of the South Island.',
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
      teamDescription="The Nelson branch is led by Operations Co-ordinator Darryn Clearwater and Lead STMS Niamh Read-Hayes, who coordinate scheduling and client communication, supported by a team of STMS and traffic management crews operating across the Nelson Tasman region."
      history="The Nelson branch was established in 2023 to support infrastructure and construction projects across the Tasman and Nelson regions. Today the team delivers traffic management across Nelson and the wider Tasman region, supporting roadworks, infrastructure projects, and events."
    />
  )
}
