import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import Link from 'next/link'

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-4 z-50">
      {/* WhatsApp button */}
      <Link
        href="https://wa.me/971544115335"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#8E6E3B]  text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 text-white hover:text-white"  />
      </Link>

      {/* Phone call button */}
      <Link
        href="tel:+971544115335"
        className="bg-[#8E6E3B] hover:bg-[#8E6E3B] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Call Phone"
      >
        <FaPhone className="w-6 h-6  text-white hover:text-white" />
      </Link>
    </div>
  )
}


