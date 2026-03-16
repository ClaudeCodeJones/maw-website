import type { Metadata } from 'next'
import InductionClient from './InductionClient'

export const metadata: Metadata = {
  title: 'Welcome Aboard | Men at Work Traffic Management',
  description: 'New starter induction resources for Men at Work Traffic Management employees.',
  robots: { index: false, follow: false },
}

export default function InductionPage() {
  return <InductionClient />
}
