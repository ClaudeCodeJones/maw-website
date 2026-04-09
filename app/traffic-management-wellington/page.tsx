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
      faqs={[
        {
          question: 'Do you provide traffic management across the greater Wellington region?',
          answer: 'Yes. Our Wellington branch covers Wellington city, Lower Hutt, Upper Hutt, Porirua, the Kapiti Coast, and the Wairarapa.',
        },
        {
          question: 'When did Men at Work establish a presence in Wellington?',
          answer: 'Our Wellington branch opened in 2021, initially supporting the Transmission Gully project. We\'ve since grown into a key part of our operations, delivering traffic management across the capital region.',
        },
        {
          question: 'Can you manage traffic for events in Wellington?',
          answer: 'Yes. We provide event traffic management for concerts, festivals, sporting events, and public gatherings across the Wellington region, including event traffic planning and on-site crews.',
        },
        {
          question: 'Do you provide Traffic Management Plans for Wellington projects?',
          answer: 'Yes. TMP design is delivered through MW Training & Planning, our specialist planning division, covering projects of all sizes across the Greater Wellington region.',
        },
      ]}
    />
  )
}
