import { promises as fs } from 'fs'
import path from 'path'

/**
 * Loads JSON content from the public/content/config directory
 */
export async function loadContent<T>(filename: string): Promise<T> {
  const filePath = path.join(process.cwd(), 'public', 'content', 'config', filename)
  const fileContents = await fs.readFile(filePath, 'utf8')
  return JSON.parse(fileContents)
}

/**
 * Loads site configuration
 */
export async function loadSiteConfig() {
  return loadContent<SiteConfig>('site.json')
}

/**
 * Loads home page content
 */
export async function loadHomeContent() {
  return loadContent<HomeContent>('home.json')
}

/**
 * Loads contact information
 */
export async function loadContactInfo() {
  return loadContent<ContactInfo>('contact.json')
}

/**
 * Loads trek listings
 */
export async function loadTreks() {
  return loadContent<TrekData>('treks.json')
}

/**
 * Loads tour listings
 */
export async function loadTours() {
  return loadContent<TourData>('tours.json')
}

/**
 * Loads gallery images
 */
export async function loadGallery() {
  return loadContent<GalleryData>('gallery.json')
}

// Type definitions
export interface SiteConfig {
  name: string
  tagline: string
  description: string
  keywords: string
  url?: string
  logo?: string
}

export interface HomeContent {
  hero: {
    title: string
    subtitle: string
    image: string
    cta: {
      primary: { text: string; href: string }
      secondary: { text: string; href: string }
    }
  }
  stats: Array<{
    value: string
    label: string
  }>
  activities: Array<{
    name: string
    description: string
    icon: string
  }>
  sections: {
    treks: {
      title: string
      subtitle?: string
    }
    tours: {
      title: string
      subtitle?: string
    }
    why: {
      title: string
      features: Array<{
        title: string
        description: string
        icon: string
      }>
    }
    gallery: {
      title: string
      subtitle?: string
    }
    cta: {
      title: string
      description: string
      buttonText: string
      buttonHref: string
    }
  }
  testimonials: Array<{
    quote: string
    author: string
    location?: string
  }>
  faq: Array<{
    question: string
    answer: string
  }>
}

export interface ContactInfo {
  office: {
    name: string
    address: string
    phones: string[]
    whatsapp: string
    email: string
  }
  company: {
    registered: string
    tourismLicense: string
    vat: string
  }
  representatives?: Array<{
    country: string
    name: string
    email: string
    phone?: string
  }>
  social?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export interface Trek {
  name: string
  slug: string
  duration: string
  region: string
  image: string
  difficulty?: string
  elevation?: string
  price?: string
  featured?: boolean
  description?: string
  highlights?: string[]
  itinerary?: Array<{
    day: number
    title: string
    description: string
  }>
  gallery?: string[]
}

export interface TrekData {
  featured: Trek[]
  all: Trek[]
}

export interface Tour {
  name: string
  slug: string
  duration: string
  region: string
  image: string
  featured?: boolean
  description?: string
  highlights?: string[]
  itinerary?: Array<{
    day: number
    title: string
    description: string
  }>
  gallery?: string[]
}

export interface TourData {
  featured: Tour[]
  all: Tour[]
}

export interface GalleryData {
  images: Array<{
    src: string
    alt: string
    category?: string
  }>
}
