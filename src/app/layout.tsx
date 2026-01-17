import type { Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

export const metadata: Metadata = {
  title: 'Office Attendance',
  description: 'Track your office attendance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}<SpeedInsights /></body>
    </html>
  )
}
