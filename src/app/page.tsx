import { Suspense } from 'react'
import Calendar from '@/components/Calendar'
import Onboarding from '@/components/Onboarding'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <Calendar />
        </Suspense>
      </div>
      <Onboarding />
    </main>
  )
}
