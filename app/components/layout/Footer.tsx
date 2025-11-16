import Link from 'next/link'
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto container-px section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Mountain className="w-6 h-6 text-primary" />
              <span>Air Plus Nepal</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Discover the magic of Nepal with expert guides and unforgettable trekking experiences in the heart of the Himalayas.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/treks" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  All Treks
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Cultural Tours
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h3 className="font-bold mb-4">Popular Treks</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/treks/everest-base-camp" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Everest Base Camp
                </Link>
              </li>
              <li>
                <Link href="/treks/annapurna-circuit" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Annapurna Circuit
                </Link>
              </li>
              <li>
                <Link href="/treks/langtang-valley" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Langtang Valley
                </Link>
              </li>
              <li>
                <Link href="/treks/annapurna-base-camp" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Annapurna Base Camp
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Thamel, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <div className="flex flex-col">
                  <span>+977 1-4701234</span>
                  <span>+977 9851234567</span>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:info@airplusnepal.com" className="hover:text-primary transition-colors">
                  info@airplusnepal.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} Air Plus Nepal Treks. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs">
              <span>Reg. No: 123456/078/079</span>
              <span className="hidden md:inline">•</span>
              <span>Tourism License: 1234/078</span>
              <span className="hidden md:inline">•</span>
              <span>PAN/VAT: 123456789</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
