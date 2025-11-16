import type { Metadata } from 'next'
import { loadTrips } from '@/lib/content'

export const metadata: Metadata = {
  title: 'All Trips - Air Plus Nepal',
  description: 'Explore our complete collection of tours and trips in Nepal.',
}

export default async function TripsPage() {
  // Will be used later when trips data is available
  // const tripsData = await loadTrips()
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section bg-muted/30 pt-24">
        <div className="max-w-7xl mx-auto container-px text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">All Trips</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our complete collection of tour adventures in Nepal.
          </p>
        </div>
      </section>

      {/* Trips Grid - Empty for now */}
      <section className="section">
        <div className="max-w-7xl mx-auto container-px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trips will be added here later */}
          </div>
        </div>
      </section>
    </div>
  )
}

