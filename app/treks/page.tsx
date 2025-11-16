import type { Metadata } from 'next'
import Link from 'next/link'
import { loadTreks } from '@/lib/content'
import { treksNavigation } from '@/lib/navigation'

export const metadata: Metadata = {
  title: 'All Treks - Air Plus Nepal Treks',
  description: 'Explore our complete collection of trekking routes in Nepal. From beginner-friendly trails to challenging high-altitude expeditions in the Himalayas.',
}

export default async function TreksPage() {
  const treksData = await loadTreks()

  // Organize treks by category from navigation structure
  const treksByCategory = treksNavigation.map((category) => {
    const categoryTreks = category.treks.map((navTrek) => {
      return treksData.all.find((t) => t.slug === navTrek.slug) || {
        name: navTrek.name,
        slug: navTrek.slug,
        region: '',
        duration: '',
        difficulty: '',
        image: '',
      }
    }).filter((t) => t)
    
    return {
      category: category.category,
      treks: categoryTreks,
    }
  })

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section bg-muted/30 pt-24 pb-12">
        <div className="max-w-7xl mx-auto container-px text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">All Treks</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our complete collection of trekking adventures in the Himalayas.
          </p>
        </div>
      </section>

      {/* Treks List by Category */}
      <section className="section py-8">
        <div className="max-w-7xl mx-auto container-px">
          <div className="space-y-8">
            {treksByCategory.map((categoryGroup) => (
              <div key={categoryGroup.category}>
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">
                  {categoryGroup.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {categoryGroup.treks.map((trek) => (
                    <Link
                      key={trek.slug}
                      href={`/treks/${trek.slug}`}
                      className="group px-4 py-3 bg-card hover:bg-primary/5 border border-border hover:border-primary/30 rounded-lg transition-all"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-base group-hover:text-primary transition-colors mb-1 line-clamp-2">
                            {trek.name}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-1.5">
                            {trek.duration && (
                              <span>{trek.duration}</span>
                            )}
                            {trek.region && (
                              <span>• {trek.region}</span>
                            )}
                            {trek.difficulty && (
                              <span>• {trek.difficulty}</span>
                            )}
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
