import './globals.css'
import './styles/bg.css'
import './styles/centerpiece.css'

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Noot-Tools',
  description: 'site for all tools for your kiddies',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
