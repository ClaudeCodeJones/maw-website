export type HiringStatus = 'hiring' | 'limited' | 'closed'

export type BranchHiring = {
  branch: string
  region: string
  status: HiringStatus
  fulltimeRoles: string[]
  casualRoles: string[]
  tagline: string
  tempCompany?: boolean
}

export const branchHiring: BranchHiring[] = [
  {
    branch: 'Wellington',
    region: 'Capital Region',
    status: 'limited',
    fulltimeRoles: ['STMS (Practicing)'],
    casualRoles: ['Apply via The Temp Company'],
    tagline: 'Selective intake. Experienced controllers only.',
    tempCompany: true,
  },
  {
    branch: 'Nelson',
    region: 'Tasman',
    status: 'hiring',
    fulltimeRoles: ['STMS (Practicing)', 'TMO P'],
    casualRoles: ['Unqualified', 'TTM Worker'],
    tagline: 'Growing fast. Looking for experienced controllers and coordinators.',
  },
  {
    branch: 'Blenheim',
    region: 'Marlborough',
    status: 'limited',
    fulltimeRoles: ['STMS (Practicing)', 'TMO P'],
    casualRoles: ['Apply via The Temp Company'],
    tagline: 'One or two roles available for the right candidates.',
    tempCompany: true,
  },
  {
    branch: 'Christchurch',
    region: 'Head Office',
    status: 'limited',
    fulltimeRoles: ['STMS (Practicing)'],
    casualRoles: ['Apply via The Temp Company'],
    tagline: 'Our busiest hub. Multiple openings across operations and planning.',
    tempCompany: true,
  },
  {
    branch: 'Timaru',
    region: 'South Canterbury',
    status: 'limited',
    fulltimeRoles: ['STMS (Practicing)'],
    casualRoles: ['TMO P', 'Unqualified', 'TTM Worker'],
    tagline: 'No current vacancies. Register your interest for future roles.',
  },
]

export const statusLabel: Record<HiringStatus, string> = {
  hiring: 'Actively Hiring',
  limited: 'Limited Openings',
  closed: 'Not Hiring',
}
