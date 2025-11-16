import type { Metadata } from 'next'
import TrekCard from '../components/ui/TrekCard'
import { loadTreks } from '@/lib/content'

export const metadata: Metadata = {
  title: 'All Treks - Air Plus Nepal Treks',
  description: 'Explore our complete collection of trekking routes in Nepal. From beginner-friendly trails to challenging high-altitude expeditions in the Himalayas.',
}

export default async function TreksPage() {
  const treksData = await loadTreks()

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section bg-muted/30 pt-24">
        <div className="max-w-7xl mx-auto container-px text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">All Treks</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our complete collection of trekking adventures in the Himalayas.
            From iconic routes like Everest Base Camp to hidden gems, find your perfect journey.
          </p>
        </div>
      </section>

      {/* Treks Grid */}
      <section className="section">
        <div className="max-w-7xl mx-auto container-px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treksData.all.map((trek, index) => (
              <TrekCard
                key={trek.slug}
                title={trek.name}
                slug={trek.slug}
                region={trek.region}
                duration={trek.duration}
                image={trek.image}
                difficulty={trek.difficulty}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
