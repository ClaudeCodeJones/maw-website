import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Men at Work Traffic Management',
  description:
    'Contact Men at Work Traffic Management for traffic control services, TMP design, event traffic management or project support across Christchurch, Wellington, Nelson, Blenheim and Timaru.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
