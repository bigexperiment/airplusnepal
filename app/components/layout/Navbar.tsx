'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Mountain, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { treksNavigation, tripsNavigation } from '@/lib/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [treksOpen, setTreksOpen] = useState(false)
  const [tripsOpen, setTripsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto container-px">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white hover:text-primary transition-colors">
            <Mountain className="w-6 h-6" />
            <span>Air Plus Nepal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Treks Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setTreksOpen(!treksOpen)
                  setTripsOpen(false)
                }}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all flex items-center gap-1"
              >
                Treks
                <ChevronDown className={cn("w-4 h-4 transition-transform", treksOpen && "rotate-180")} />
              </button>
              {treksOpen && (
                <>
                  {/* Overlay to close on click outside */}
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setTreksOpen(false)}
                  />
                  <div className="fixed top-16 left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[90vw] bg-white rounded-lg shadow-2xl border border-gray-200 p-4 z-50 max-h-[70vh] overflow-y-auto">
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
                      <h2 className="text-lg font-bold text-gray-900">All Treks</h2>
                      <button
                        onClick={() => setTreksOpen(false)}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Close menu"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {treksNavigation.map((category) => (
                        <div key={category.category}>
                          <h3 className="font-semibold text-gray-900 mb-2 text-sm border-b border-gray-200 pb-1.5">{category.category}</h3>
                          <ul className="space-y-1">
                            {category.treks.map((trek) => (
                              <li key={trek.slug}>
                                <Link
                                  href={`/treks/${trek.slug}`}
                                  className="block px-2.5 py-1.5 text-xs text-gray-700 hover:bg-primary/10 hover:text-primary rounded transition-colors leading-relaxed"
                                  onClick={() => setTreksOpen(false)}
                                >
                                  {trek.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Trips Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setTripsOpen(!tripsOpen)
                  setTreksOpen(false)
                }}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all flex items-center gap-1"
              >
                Trips
                <ChevronDown className={cn("w-4 h-4 transition-transform", tripsOpen && "rotate-180")} />
              </button>
              {tripsOpen && (
                <>
                  {/* Overlay to close on click outside */}
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setTripsOpen(false)}
                  />
                  <div className="fixed top-16 left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-[90vw] bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50 max-h-[80vh] overflow-y-auto">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                      <h2 className="text-xl font-bold text-gray-900">All Trips</h2>
                      <button
                        onClick={() => setTripsOpen(false)}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Close menu"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {tripsNavigation.map((category) => (
                        <div key={category.category} className="min-w-0">
                          <h3 className="font-semibold text-gray-900 mb-3 text-sm border-b border-gray-200 pb-2">{category.category}</h3>
                          <ul className="space-y-2">
                            {category.trips.map((trip) => (
                              <li key={trip.slug}>
                                <Link
                                  href={`/trips/${trip.slug}`}
                                  className="block px-3 py-2 text-xs text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors leading-relaxed"
                                  onClick={() => setTripsOpen(false)}
                                  title={trip.name}
                                >
                                  {trip.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link
              href="/contact"
              className="ml-4 px-6 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all"
            >
              Plan Your Trek
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[90vh] pb-4 overflow-y-auto" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-base font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Treks Section */}
            <div className="bg-white/5 rounded-lg p-2">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => {
                    setTreksOpen(!treksOpen)
                    setTripsOpen(false)
                  }}
                  className="flex-1 px-4 py-3 text-base font-semibold text-white hover:bg-white/10 rounded-lg transition-all flex items-center justify-between"
                >
                  <span>Treks</span>
                  <ChevronDown className={cn("w-5 h-5 transition-transform", treksOpen && "rotate-180")} />
                </button>
              </div>
              <Link
                href="/treks"
                onClick={() => {
                  setIsOpen(false)
                  setTreksOpen(false)
                }}
                className="ml-4 block px-4 py-2 text-sm text-white/70 hover:text-white underline"
              >
                View All Treks →
              </Link>
              {treksOpen && (
                <div className="mt-3 space-y-4 pt-3 border-t border-white/20">
                  {treksNavigation.map((category) => (
                    <div key={category.category} className="px-2">
                      <p className="text-sm font-bold text-white mb-2 pb-1 border-b border-white/20">{category.category}</p>
                      <div className="space-y-1">
                        {category.treks.map((trek) => (
                          <Link
                            key={trek.slug}
                            href={`/treks/${trek.slug}`}
                            onClick={() => {
                              setIsOpen(false)
                              setTreksOpen(false)
                            }}
                            className="block px-3 py-2.5 text-sm text-white/85 hover:text-white hover:bg-white/15 rounded-lg transition-colors active:bg-white/20"
                          >
                            {trek.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Trips Section */}
            <div className="bg-white/5 rounded-lg p-2">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => {
                    setTripsOpen(!tripsOpen)
                    setTreksOpen(false)
                  }}
                  className="flex-1 px-4 py-3 text-base font-semibold text-white hover:bg-white/10 rounded-lg transition-all flex items-center justify-between"
                >
                  <span>Trips</span>
                  <ChevronDown className={cn("w-5 h-5 transition-transform", tripsOpen && "rotate-180")} />
                </button>
              </div>
              <Link
                href="/trips"
                onClick={() => {
                  setIsOpen(false)
                  setTripsOpen(false)
                }}
                className="ml-4 block px-4 py-2 text-sm text-white/70 hover:text-white underline"
              >
                View All Trips →
              </Link>
              {tripsOpen && (
                <div className="mt-3 space-y-4 pt-3 border-t border-white/20 max-h-[60vh] overflow-y-auto">
                  {tripsNavigation.map((category) => (
                    <div key={category.category} className="px-2">
                      <p className="text-sm font-bold text-white mb-2 pb-1 border-b border-white/20">{category.category}</p>
                      <div className="grid grid-cols-1 gap-1">
                        {category.trips.map((trip) => (
                          <Link
                            key={trip.slug}
                            href={`/trips/${trip.slug}`}
                            onClick={() => {
                              setIsOpen(false)
                              setTripsOpen(false)
                            }}
                            className="block px-3 py-2.5 text-sm text-white/85 hover:text-white hover:bg-white/15 rounded-lg transition-colors active:bg-white/20"
                          >
                            {trip.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all text-center text-base"
            >
              Plan Your Trek
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
