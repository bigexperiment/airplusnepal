'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const whatsappNumber = '+9779851234567' // Format: country code + number without +
  const message = 'Hello! I would like to inquire about trekking packages.'

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
        Chat with us
      </span>
    </button>
  )
}
