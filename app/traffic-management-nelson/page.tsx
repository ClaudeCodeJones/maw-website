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
        'Murchison',
        'Tasman',
        'Golden Bay',
      ]}
      teamDescription="The Nelson branch is led by Operations Co-ordinator Darryn Clearwater and Lead STMS Niamh Read-Hayes, who coordinate scheduling and client communication, supported by a team of STMS and traffic management crews operating across the Nelson Tasman region."
      history="The Nelson branch was established in 2023 to support infrastructure and construction projects across the Tasman and Nelson regions. Today the team delivers traffic management across Nelson and the wider Tasman region, supporting roadworks, infrastructure projects, and events."
      faqs={[
        {
          question: 'What areas does your Nelson branch cover?',
          answer: 'Our Nelson branch services the Tasman region, providing traffic management across Nelson city and the surrounding areas of the top of the South Island.',
        },
        {
          question: 'When did Men at Work open in Nelson?',
          answer: 'The Nelson branch opened in 2023, established to provide local crews and faster response times across the Tasman region.',
        },
        {
          question: 'Can you supply traffic management for infrastructure projects in Nelson?',
          answer: 'Yes. Our Nelson team supports roading, civil construction, and infrastructure projects across the region with qualified crews and traffic management equipment.',
        },
        {
          question: 'Do you design TMPs for projects in the Nelson and Tasman region?',
          answer: 'Yes. TMP design is handled through MW Training & Planning, our specialist division, covering projects across Nelson and the wider Tasman region.',
        },
      ]}
    />
  )
}
