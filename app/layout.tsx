import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import './favicon.ico'
import './../public/favicon.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nishiraj Singh Panwar - Cloud & Swift Developer',
  description: 'Portfolio of Nishiraj Singh Panwar - Cloud Developer and Swift Developer',
  icons: {
    icon: './../public/favicon.svg',
    shortcut: './favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}