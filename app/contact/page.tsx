import type { Metadata } from 'next'
import { Mail, Phone, MapPin, Shield, Award, Clock } from 'lucide-react'
import ContactForm from '../components/ui/ContactForm'
import { loadContactInfo } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Contact Us - Air Plus Nepal Treks',
  description: 'Get in touch with Air Plus Nepal Treks to plan your perfect Himalayan adventure. Expert guidance and personalized service.',
}

export default async function ContactPage() {
  const contactInfo = await loadContactInfo()

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="section bg-muted/30 pt-24">
        <div className="max-w-7xl mx-auto container-px text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Plan Your Trek</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let us help you create the perfect Himalayan adventure. Fill out the form below
            or contact us directly, and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass p-8 lg:p-12 rounded-2xl">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Tell us about your dream trek and we&apos;ll create a customized itinerary just for you.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Contact Details */}
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Office Address</p>
                        <p className="text-sm text-muted-foreground">{contactInfo.office.address}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        {contactInfo.office.phones.map((phone, index) => (
                          <p key={index} className="text-sm text-muted-foreground">
                            <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
                              {phone}
                            </a>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <p className="text-sm text-muted-foreground">
                          <a href={`mailto:${contactInfo.office.email}`} className="hover:text-primary transition-colors">
                            {contactInfo.office.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Trek With Us */}
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6">Why Trek With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Licensed & Insured</p>
                      <p className="text-sm text-muted-foreground">Government certified with full insurance coverage</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Expert Guides</p>
                      <p className="text-sm text-muted-foreground">Certified local guides with years of experience</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">24/7 Support</p>
                      <p className="text-sm text-muted-foreground">Round-the-clock assistance during your trek</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Company Details</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{contactInfo.company.registered}</p>
                  <p>{contactInfo.company.tourismLicense}</p>
                  <p>{contactInfo.company.vat}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
