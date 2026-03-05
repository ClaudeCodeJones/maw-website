export type HiringStatus = 'hiring' | 'limited' | 'closed'

export type BranchHiring = {
  branch: string
  region: string
  status: HiringStatus
  roles: string[]
  tagline: string
  tempCompany?: boolean
}

export const branchHiring: BranchHiring[] = [
  {
    branch: 'Wellington',
    region: 'Capital Region',
    status: 'limited',
    roles: ['STMS (Practicing)'],
    tagline: 'Selective intake. Experienced controllers only.',
    tempCompany: true,
  },
  {
    branch: 'Nelson',
    region: 'Tasman',
    status: 'hiring',
    roles: ['STMS (Practicing)', 'Casuals'],
    tagline: 'Growing fast. Looking for experienced controllers and coordinators.',
  },
  {
    branch: 'Blenheim',
    region: 'Marlborough',
    status: 'limited',
    roles: ['STMS (Practicing)'],
    tagline: 'One or two roles available for the right candidates.',
    tempCompany: true,
  },
  {
    branch: 'Christchurch',
    region: 'Head Office',
    status: 'limited',
    roles: ['STMS (Practicing)'],
    tagline: 'Our busiest hub. Multiple openings across operations and planning.',
    tempCompany: true,
  },
  {
    branch: 'Timaru',
    region: 'South Canterbury',
    status: 'limited',
    roles: ['STMS (Practicing)'],
    tagline: 'No current vacancies. Register your interest for future roles.',
  },
]

export const statusLabel: Record<HiringStatus, string> = {
  hiring: 'Actively Hiring',
  limited: 'Limited Openings',
  closed: 'Not Hiring',
}
