import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { loadTrips } from '@/lib/content'
import { ArrowLeft } from 'lucide-react'

interface TripPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  // Will be populated later with actual trips data
  try {
    const tripsData = await loadTrips()
    return tripsData.all.map((trip) => ({
      slug: trip.slug,
    }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: TripPageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const tripsData = await loadTrips()
    const trip = tripsData.all.find((t) => t.slug === slug)
    if (!trip) {
      return {
        title: 'Trip Not Found',
      }
    }
    return {
      title: `${trip.name} - Air Plus Nepal`,
      description: trip.description || `Experience the ${trip.name}`,
    }
  } catch {
    return {
      title: `${slug} - Air Plus Nepal`,
      description: `Trip details for ${slug}`,
    }
  }
}

export default async function TripPage({ params }: TripPageProps) {
  const { slug } = await params
  
  // Will be used later when trips data is available
  // const tripsData = await loadTrips()
  // const trip = tripsData.all.find((t) => t.slug === slug)
  // if (!trip) {
  //   notFound()
  // }

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto container-px pt-20">
        <Link
          href="/trips"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all trips
        </Link>
      </div>

      {/* Trip Details - Empty for now */}
      <section className="section">
        <div className="max-w-7xl mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Content will be added here later */}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Sidebar content will be added here later */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

