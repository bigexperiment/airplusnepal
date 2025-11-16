import Hero from './components/ui/Hero'
import TrekCard from './components/ui/TrekCard'
import StatsSection from './components/sections/StatsSection'
import ActivitiesSection from './components/sections/ActivitiesSection'
import WhyChooseUsSection from './components/sections/WhyChooseUsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import FAQSection from './components/sections/FAQSection'
import CTASection from './components/sections/CTASection'
import { loadHomeContent, loadTreks, loadTours } from '@/lib/content'

export default async function Home() {
  const homeContent = await loadHomeContent()
  const treksData = await loadTreks()
  const toursData = await loadTours()

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        image={homeContent.hero.image}
        primaryCta={homeContent.hero.cta.primary}
        secondaryCta={homeContent.hero.cta.secondary}
      />

      {/* Stats Section */}
      <StatsSection stats={homeContent.stats} />

      {/* Activities Section */}
      <ActivitiesSection activities={homeContent.activities} />

      {/* Featured Treks Section */}
      <section className="section bg-muted/30">
        <div className="max-w-7xl mx-auto container-px">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {homeContent.sections.treks.title}
            </h2>
            {homeContent.sections.treks.subtitle && (
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {homeContent.sections.treks.subtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treksData.featured.slice(0, 6).map((trek, index) => (
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

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        title={homeContent.sections.why.title}
        features={homeContent.sections.why.features}
      />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={homeContent.testimonials} />

      {/* FAQ Section */}
      <FAQSection faqs={homeContent.faq} />

      {/* CTA Section */}
      <CTASection
        title={homeContent.sections.cta.title}
        description={homeContent.sections.cta.description}
        buttonText={homeContent.sections.cta.buttonText}
        buttonHref={homeContent.sections.cta.buttonHref}
      />
    </>
  )
}
