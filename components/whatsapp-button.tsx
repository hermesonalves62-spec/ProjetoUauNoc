"use client"

import Image from "next/image"
import { useState } from "react"
import { createWhatsAppLink, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/whatsapp"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    const whatsappUrl = createWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          bg-[#25D366] text-white font-medium shadow-lg 
          hover:bg-[#20BA5A] focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2
          flex items-center justify-center rounded-full overflow-hidden
          transition-all duration-500 ease-out
          ${isHovered ? "w-[280px] h-14 px-4" : "w-16 h-16"}
        `}
        aria-label="Falar no WhatsApp"
      >
        {!isHovered ? (
          <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={32} height={32} className="object-contain" />
        ) : (
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/images/whatsapp-icon.png"
              alt="WhatsApp"
              width={32}
              height={32}
              className="object-contain flex-shrink-0"
            />
            <span className="text-sm font-medium whitespace-nowrap">Falar com um especialista</span>
          </div>
        )}
      </button>
    </div>
  )
}
