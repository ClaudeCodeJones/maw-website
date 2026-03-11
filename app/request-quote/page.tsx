import type { Metadata } from 'next'
import RequestQuotePageClient from './RequestQuotePageClient'

export const metadata: Metadata = {
  title: 'Request a Traffic Management Quote | Men at Work',
  description:
    'Request a quote for traffic management services, TMP design, event traffic management or project support across Christchurch, Wellington, Nelson, Blenheim and Timaru.',
  alternates: {
    canonical: '/request-quote',
  },
}

export default function RequestQuotePage() {
  return <RequestQuotePageClient />
}
