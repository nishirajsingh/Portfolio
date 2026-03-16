import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Only protect dashboard routes, not the login page itself
  return <>{children}</>
}
