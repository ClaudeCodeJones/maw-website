import type { Metadata } from 'next'
import LocationPage from '../components/LocationPage'

export const metadata: Metadata = {
  title: 'Traffic Management Wellington | Men at Work',
  description:
    'Professional traffic management services in Wellington. Men at Work provides traffic management, TMP design, event traffic management and consultancy across the Wellington region.',
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
        'Wairarapa',
      ]}
      teamDescription="The Wellington branch is led by Branch Manager Jason Rankin and Operations Co-ordinators Shaun Pevreal and Luke Henare, who coordinate scheduling and client communication, supported by a team of STMS and traffic management crews operating across the Wellington region."
      history="The Wellington branch was established in 2021 to support infrastructure, construction, and event projects across the capital region. Today the team delivers traffic management across Wellington and the wider Greater Wellington region, supporting roadworks, infrastructure upgrades, and events."
    />
  )
}
