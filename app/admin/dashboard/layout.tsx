import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import DashboardSidebar from './sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const session = cookieStore.get('admin_session')
  if (session?.value !== process.env.ADMIN_SECRET) {
    redirect('/admin')
  }

  return (
    <div className="min-h-screen bg-[#030303] flex">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
