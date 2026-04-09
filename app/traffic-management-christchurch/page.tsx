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
      faqs={[
        {
          question: 'Do you provide traffic management services across the Canterbury region?',
          answer: 'Yes. Our Christchurch branch covers the full Canterbury region including Christchurch city, North Canterbury, Rolleston, Rangiora, Banks Peninsula, and Ashburton.',
        },
        {
          question: 'How quickly can you get traffic management crews on site in Christchurch?',
          answer: 'We maintain a local pool of qualified crews in Christchurch and can often respond at short notice. Contact our team to discuss your timeline and requirements.',
        },
        {
          question: 'Can you handle traffic management for large infrastructure projects in Christchurch?',
          answer: 'Yes. Our Christchurch team has extensive experience supporting major roading, infrastructure, and civil construction projects across Canterbury, with qualified crews and a full fleet of traffic management vehicles.',
        },
        {
          question: 'Do you design Traffic Management Plans (TMPs) for Christchurch projects?',
          answer: 'Yes. TMP design is handled through our specialist division MW Training & Planning, who design compliant, risk-based plans for roadworks, infrastructure, and events across the Canterbury region.',
        },
      ]}
    />
  )
}
