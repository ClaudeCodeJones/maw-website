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
      faqs={[
        {
          question: 'What areas does your Timaru branch cover?',
          answer: 'Our Timaru branch covers South Canterbury, including Timaru city, Temuka, Geraldine, and the wider South Canterbury district.',
        },
        {
          question: 'When did Men at Work open in Timaru?',
          answer: 'The Timaru branch opened in 2021, extending our South Island coverage into South Canterbury to support the region\'s growing infrastructure and roading needs.',
        },
        {
          question: 'Can you support roadworks and civil projects in South Canterbury?',
          answer: 'Yes. Our Timaru team provides qualified traffic management crews for roadworks, civil construction, and infrastructure projects across South Canterbury.',
        },
        {
          question: 'Do you provide TMPs for projects in Timaru and South Canterbury?',
          answer: 'Yes. Traffic Management Plans are designed through our specialist division MW Training & Planning, covering projects across the South Canterbury region.',
        },
      ]}
    />
  )
}
