'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    travelers: '',
    interest: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    // In a real app, you would send this to your backend or email service
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        dates: '',
        travelers: '',
        interest: '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="+1 234 567 8900"
          />
        </div>

        <div>
          <label htmlFor="dates" className="block text-sm font-medium mb-2">
            Preferred Dates
          </label>
          <input
            type="text"
            id="dates"
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="e.g., March 2025"
          />
        </div>

        <div>
          <label htmlFor="travelers" className="block text-sm font-medium mb-2">
            Number of Travelers
          </label>
          <input
            type="number"
            id="travelers"
            name="travelers"
            min="1"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder="2"
          />
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium mb-2">
            Trek/Tour Interest
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Select a trek or tour</option>
            <option value="everest-base-camp">Everest Base Camp Trek</option>
            <option value="annapurna-circuit">Annapurna Circuit Trek</option>
            <option value="langtang-valley">Langtang Valley Trek</option>
            <option value="annapurna-base-camp">Annapurna Base Camp Trek</option>
            <option value="manaslu-circuit">Manaslu Circuit Trek</option>
            <option value="custom">Custom Itinerary</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
          placeholder="Tell us about your dream trek, any questions, or special requirements..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-accent/20 border border-accent rounded-lg text-accent-foreground">
          Thank you! We&apos;ll get back to you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-100">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-semibold rounded-lg transition-all hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
