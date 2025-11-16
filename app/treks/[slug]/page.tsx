import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadTreks } from '@/lib/content'
import { Clock, MapPin, Mountain, TrendingUp, ArrowLeft } from 'lucide-react'

interface TrekPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const treksData = await loadTreks()
  return treksData.all.map((trek) => ({
    slug: trek.slug,
  }))
}

export async function generateMetadata({ params }: TrekPageProps): Promise<Metadata> {
  const { slug } = await params
  const treksData = await loadTreks()
  const trek = treksData.all.find((t) => t.slug === slug)

  if (!trek) {
    return {
      title: 'Trek Not Found',
    }
  }

  return {
    title: `${trek.name} - Air Plus Nepal Treks`,
    description: trek.description || `Experience the ${trek.name}, a ${trek.duration} trek in the ${trek.region}.`,
  }
}

export default async function TrekPage({ params }: TrekPageProps) {
  const { slug } = await params
  const treksData = await loadTreks()
  const trek = treksData.all.find((t) => t.slug === slug)

  if (!trek) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto container-px pt-20">
        <Link
          href="/treks"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all treks
        </Link>
      </div>

      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={trek.image}
          alt={trek.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto container-px pb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            {trek.name}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{trek.region}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{trek.duration}</span>
            </div>
            {trek.difficulty && (
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>{trek.difficulty}</span>
              </div>
            )}
            {trek.elevation && (
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5" />
                <span>Max Elevation: {trek.elevation}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trek Details */}
      <section className="section">
        <div className="max-w-7xl mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              {trek.description && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {trek.description}
                  </p>
                </div>
              )}

              {/* Highlights */}
              {trek.highlights && trek.highlights.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Highlights</h2>
                  <ul className="space-y-3">
                    {trek.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Itinerary */}
              {trek.itinerary && trek.itinerary.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Itinerary</h2>
                  <div className="space-y-4">
                    {trek.itinerary.map((day) => (
                      <div key={day.day} className="glass p-6 rounded-2xl">
                        <h3 className="font-bold mb-2">
                          Day {day.day}: {day.title}
                        </h3>
                        <p className="text-muted-foreground">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass p-8 rounded-2xl sticky top-24">
                <h3 className="text-xl font-bold mb-6">Book This Trek</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold">{trek.duration}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border">
                    <span className="text-muted-foreground">Difficulty</span>
                    <span className="font-semibold">{trek.difficulty || 'Moderate'}</span>
                  </div>
                  {trek.elevation && (
                    <div className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Max Elevation</span>
                      <span className="font-semibold">{trek.elevation}</span>
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="block w-full px-6 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all hover:scale-105 text-center shadow-lg"
                >
                  Book Now
                </Link>

                <p className="text-sm text-muted-foreground text-center mt-4">
                  Contact us for customized itineraries and group bookings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
