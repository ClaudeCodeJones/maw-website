import { TrafficCone, ClipboardList, HardHat, ShieldCheck, Briefcase } from 'lucide-react'

const steps = [
  {
    icon: TrafficCone,
    title: 'TTM Worker',
    description: 'Start on the tools. Learn signals, site setup, and traffic control fundamentals.',
  },
  {
    icon: HardHat,
    title: 'STMS',
    description: 'Take responsibility for traffic sites and manage safe traffic operations.',
  },
  {
    icon: ShieldCheck,
    title: 'Lead STMS',
    description: 'Oversee complex sites and coordinate crews and client communication.',
  },
  {
    icon: ClipboardList,
    title: 'Foreman',
    description: 'Lead multiple crews across projects and support operational planning.',
  },
  {
    icon: Briefcase,
    title: 'Manager',
    description: 'Move into regional operations, training, or business development.',
  },
]

export default function CareerPath() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-10 text-center">
      {steps.map(({ icon: Icon, title, description }) => (
        <div key={title} className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center mx-auto mb-5 transition duration-300 hover:border-[#F26522] hover:bg-[#F26522]/10 hover:scale-[1.05]">
            <Icon className="w-10 h-10 text-[#F26522]" />
          </div>
          <p className="text-lg font-semibold text-slate-900 mb-2">{title}</p>
          <p className="max-w-[190px] mx-auto text-sm text-slate-600 leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  )
}
