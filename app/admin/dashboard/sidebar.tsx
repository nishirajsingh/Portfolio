'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Award, Star, FolderOpen, Camera, LogOut, Terminal, LayoutDashboard, FileText } from 'lucide-react'

const NAV = [
  { href: '/admin/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/admin/dashboard/certifications', label: 'Certifications', icon: Award },
  { href: '/admin/dashboard/badges', label: 'Badges', icon: Star },
  { href: '/admin/dashboard/projects', label: 'Projects', icon: FolderOpen },
  { href: '/admin/dashboard/events', label: 'Events', icon: Camera },
  { href: '/admin/dashboard/resume', label: 'Resume', icon: FileText },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function logout() {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin')
  }

  return (
    <aside className="w-64 min-h-screen bg-zinc-900/80 border-r border-zinc-800 flex flex-col p-6 shrink-0">
      <div className="flex items-center gap-2 text-orange-500 font-mono text-xs mb-8">
        <Terminal size={14} />
        <span>./admin-panel</span>
      </div>

      <p className="text-white font-bold text-lg tracking-tight mb-1">Portfolio CMS</p>
      <p className="text-zinc-600 font-mono text-[10px] mb-10">Nishiraj Singh Panwar</p>

      <nav className="flex-1 space-y-1">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                active
                  ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              <Icon size={16} />
              {label}
            </Link>
          )
        })}
      </nav>

      <button
        onClick={logout}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-all mt-4"
      >
        <LogOut size={16} />
        Logout
      </button>
    </aside>
  )
}
