"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { createWhatsAppLink, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/whatsapp"

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Tentando navegar para:", sectionId)

    setTimeout(() => {
      const element = document.getElementById(sectionId)
      console.log("[v0] Elemento encontrado:", element)

      if (element) {
        // Get the element's position relative to the document
        const elementRect = element.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const elementTop = elementRect.top + scrollTop

        console.log("[v0] Posição atual do scroll:", scrollTop)
        console.log("[v0] Posição do elemento no documento:", elementTop)
        console.log("[v0] Altura da viewport:", window.innerHeight)

        // Calculate target position with header offset
        const headerHeight = 100 // Increased offset for better visibility
        const targetPosition = elementTop - headerHeight

        console.log("[v0] Posição alvo:", targetPosition)

        // Use scrollTo with smooth behavior
        window.scrollTo({
          top: Math.max(0, targetPosition), // Ensure we don't scroll to negative position
          behavior: "smooth",
        })

        setIsMenuOpen(false)
      } else {
        console.log("[v0] Elemento não encontrado para ID:", sectionId)

        // Fallback: try to find element by data attribute or class
        const fallbackElement =
          document.querySelector(`[data-section="${sectionId}"]`) || document.querySelector(`.${sectionId}`)

        if (fallbackElement) {
          console.log("[v0] Elemento encontrado via fallback:", fallbackElement)
          fallbackElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          })
          setIsMenuOpen(false)
        }
      }
    }, 100) // Small delay to ensure DOM is ready
  }

  const handleWhatsAppClick = () => {
    const whatsappUrl = createWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)
    window.open(whatsappUrl, "_blank")
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-[999] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex-shrink-0 -ml-4 sm:-ml-6 lg:-ml-8">
            <Image
              src="/images/noc-servicos-logo.png"
              alt="NOC Serviços"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto"
              priority
              sizes="120px"
            />
          </div>

          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              <button
                onClick={() => scrollToSection("quem-somos")}
                className="text-sm lg:text-base text-gray-600 hover:text-[#003270] transition-all duration-300 font-medium relative hover:scale-105 group whitespace-nowrap"
              >
                Quem somos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003270] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-sm lg:text-base text-gray-600 hover:text-[#003270] transition-all duration-300 font-medium relative hover:scale-105 group whitespace-nowrap"
              >
                Serviços
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003270] transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("atuacao")}
                className="text-sm lg:text-base text-gray-600 hover:text-[#003270] transition-all duration-300 font-medium relative hover:scale-105 group whitespace-nowrap"
              >
                Atuação
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#003270] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </nav>

            <div className="ml-4 lg:ml-6 xl:ml-8">
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                size="sm"
                className="border-gray-300 text-gray-700 hover:bg-[#003270] hover:text-white hover:border-[#003270] hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full px-4 lg:px-6 text-sm whitespace-nowrap bg-transparent"
              >
                Fale conosco
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 !hover:bg-[#003270]/10 !hover:text-[#003270] hover:!bg-[#003270]/10 hover:!text-[#003270]"
            >
              {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 max-h-[calc(100vh-4rem)] overflow-y-auto relative z-[998]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection("quem-somos")}
                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-[#003270] hover:bg-[#003270]/10 transition-all duration-300 w-full text-left rounded-md"
              >
                Quem somos
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-[#003270] hover:bg-[#003270]/10 transition-all duration-300 w-full text-left rounded-md"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("atuacao")}
                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-[#003270] hover:bg-[#003270]/10 transition-all duration-300 w-full text-left rounded-md"
              >
                Atuação
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-[#003270] hover:bg-[#003270] text-white"
                  size="sm"
                >
                  Fale conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
