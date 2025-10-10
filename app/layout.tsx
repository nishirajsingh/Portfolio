import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { ThemeScript } from './components/theme-script'
import './favicon.ico'
import './../public/favicon.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nishiraj Singh Panwar - Cloud & AI/ML Developer',
  description: 'Portfolio of Nishiraj Singh Panwar - Cloud Developer and AI/ML Developer',
  icons: {
    icon: './../public/favicon.svg',
    shortcut: './favicon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}