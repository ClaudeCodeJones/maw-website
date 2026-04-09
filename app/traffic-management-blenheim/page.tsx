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
        'Kaikoura',
        'Havelock',
      ]}
      teamDescription="The Blenheim branch is led by Branch Manager Luke Roberts and Lead STMS Josh Thomason, who coordinate scheduling and client communication, supported by a team of STMS and traffic management crews operating across the Marlborough region."
      history="The Blenheim branch was established in 2017 to support infrastructure and construction activity across the Marlborough region. Today the team delivers traffic management across Blenheim and the wider Marlborough region, supporting roadworks, infrastructure projects, and events."
      faqs={[
        {
          question: 'What areas does your Blenheim branch cover?',
          answer: 'Our Blenheim branch covers the Marlborough region, including Blenheim, Picton, Havelock, and surrounding rural and coastal areas.',
        },
        {
          question: 'How long has Men at Work operated in Blenheim?',
          answer: 'The Blenheim branch opened in 2017 and has been supporting traffic management across Marlborough ever since, making it one of our longest-established regional branches outside Christchurch.',
        },
        {
          question: 'Can you provide traffic management for events in Marlborough?',
          answer: 'Yes. We provide event traffic management for public events, festivals, and gatherings across the Marlborough region, including planning and on-site crew deployment.',
        },
        {
          question: 'Do you handle Traffic Management Plans for Blenheim and Marlborough projects?',
          answer: 'Yes. TMP design is delivered through MW Training & Planning, covering projects of all sizes across the Marlborough region.',
        },
      ]}
    />
  )
}
