import Calendar from '@/components/Calendar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow">
        <Calendar />
      </div>
    </main>
  )
}
