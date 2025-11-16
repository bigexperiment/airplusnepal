'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Mountain } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/treks', label: 'Treks' },
  { href: '/tours', label: 'Tours' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all text-center"
            >
              Plan Your Trek
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
