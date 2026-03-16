import { readData } from '@/lib/db'
import { Award, Star, FolderOpen, Camera, Terminal } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const data = readData()

  const stats = [
    { label: 'Certifications', count: data.certifications.length, icon: Award, href: '/admin/dashboard/certifications', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { label: 'Badges', count: data.badges.length, icon: Star, href: '/admin/dashboard/badges', color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { label: 'Projects', count: data.projects.length, icon: FolderOpen, href: '/admin/dashboard/projects', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Events', count: data.events.length, icon: Camera, href: '/admin/dashboard/events', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  ]

  return (
    <div className="p-10">
      <div className="flex items-center gap-2 text-orange-500 font-mono text-sm mb-6">
        <Terminal size={16} />
        <span>./overview</span>
      </div>
      <h1 className="text-4xl font-bold text-white tracking-tighter mb-2">Dashboard</h1>
      <p className="text-zinc-500 font-mono text-xs mb-12">Manage your portfolio content</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, count, icon: Icon, href, color, bg }) => (
          <Link
            key={label}
            href={href}
            className="group p-8 rounded-[2rem] border border-zinc-800 bg-zinc-900/50 hover:border-orange-500/30 transition-all"
          >
            <div className={`p-3 rounded-2xl ${bg} ${color} inline-block mb-6`}>
              <Icon size={24} />
            </div>
            <p className="text-4xl font-bold text-white mb-1">{count}</p>
            <p className="text-zinc-500 text-sm font-medium">{label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30">
        <p className="text-zinc-500 font-mono text-xs">
          <span className="text-orange-500">tip:</span> To change your admin password, edit{' '}
          <span className="text-zinc-300">.env.local</span> → <span className="text-zinc-300">ADMIN_PASSWORD</span> and restart the server.
        </p>
      </div>
    </div>
  )
}
