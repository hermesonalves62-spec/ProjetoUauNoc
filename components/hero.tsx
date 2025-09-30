"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { createWhatsAppLink, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/whatsapp"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Hero() {
  const titleAnimation = useScrollAnimation({ delay: 200 })
  const descriptionAnimation = useScrollAnimation({ delay: 400 })
  const buttonsAnimation = useScrollAnimation({ delay: 600 })
  const logoAnimation = useScrollAnimation({ delay: 300 })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWhatsAppClick = () => {
    const whatsappUrl = createWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section
      id="inicio"
      className="py-4 md:py-16 lg:py-20 bg-cover bg-center bg-no-repeat relative min-h-[65vh] sm:min-h-[70vh] md:min-h-[85vh] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, transparent 70%, #F7F7F9 100%), url('/images/hero-background.png')",
      }}
    >
      <div
        ref={logoAnimation.ref}
        className={`absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-20 pointer-events-none transition-all duration-1000 ease-out transform-gpu will-change-transform ${
          logoAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
      >
        <Image
          src="/images/logo-large.png"
          alt="NOC - Comércios e Serviços"
          width={600}
          height={600}
          className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain"
          priority={true}
          sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 500px, 600px"
          quality={85}
        />
      </div>

      <div className="container mx-auto px-2 sm:px-6 md:px-8 lg:px-12 relative z-10 pt-6 sm:pt-12 md:pt-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 md:gap-16 lg:gap-24 items-center">
          <div className="space-y-4 sm:space-y-8 md:space-y-10 max-w-none lg:max-w-2xl xl:max-w-3xl">
            <div className="space-y-3 sm:space-y-4 md:space-y-8 text-center md:text-left">
              <h1
                ref={titleAnimation.ref}
                className={`font-bold leading-tight transition-all duration-1000 ease-out transform-gpu will-change-transform ${
                  titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  fontSize: "clamp(0.7rem, 3.2vw, 3.8rem)",
                  lineHeight: "1.1",
                }}
              >
                <span className="block text-gray-700 font-normal whitespace-nowrap tracking-tighter sm:tracking-tight">
                  Soluções especializadas em
                </span>
                <span className="block font-light sm:whitespace-nowrap">
                  {" "}
                  <span className="text-[#003270] tracking-normal">cabeamento estruturado</span>
                  <span className="text-gray-700"> para empresas </span>
                </span>
                <span className="block text-gray-700 font-normal sm:whitespace-nowrap">
                  <span className="text-[#003270]">rede telecom</span>
                  <br className="sm:hidden" /> <span className="whitespace-nowrap">para provedores</span>
                </span>
              </h1>

              <p
                ref={descriptionAnimation.ref}
                className={`text-gray-600 font-sans transition-all duration-1000 ease-out transform-gpu will-change-transform font-normal w-full lg:w-[150%] text-center md:text-left ${
                  descriptionAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  lineHeight: "1.5",
                  fontSize: "clamp(1.15rem, 2.3vw, 1.4rem)",
                  wordSpacing: "0.05em",
                }}
              >
                NOC Comércios e Serviços é a melhor opção para quem busca confiança e profissionalismo no setor de
                telecom. A escolha certa para fortalecer sua operação. Fale conosco agora.
              </p>
            </div>

            <div
              ref={buttonsAnimation.ref}
              className={`flex flex-col sm:flex-row gap-3 md:gap-6 px-4 sm:px-0 transition-all duration-1000 ease-out transform-gpu will-change-transform ${
                buttonsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                className="hover:scale-101 hover:shadow-lg transition-all duration-300 text-white rounded-2xl w-full sm:w-auto transform-gpu will-change-transform min-h-[44px] sm:min-h-[52px]"
                onClick={() => scrollToSection("servicos")}
                style={{
                  backgroundColor: "#003270",
                  padding: "clamp(0.6rem, 1.8vw, 1.1rem) clamp(1.2rem, 3vw, 2.2rem)",
                  fontSize: "clamp(0.85rem, 1.6vw, 1.1rem)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#002050"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#003270"
                }}
              >
                Conheça nossos serviços
              </Button>
              <Button
                size="lg"
                className="hover:scale-101 hover:shadow-lg transition-all duration-300 text-white rounded-2xl w-full sm:w-auto transform-gpu will-change-transform min-h-[44px] sm:min-h-[52px]"
                onClick={handleWhatsAppClick}
                style={{
                  backgroundColor: "#003270",
                  padding: "clamp(0.6rem, 1.8vw, 1.1rem) clamp(1.2rem, 3vw, 2.2rem)",
                  fontSize: "clamp(0.85rem, 1.6vw, 1.1rem)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#002050"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#003270"
                }}
              >
                Falar com um especialista
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Additional content can be added here */}
          </div>
        </div>
      </div>
    </section>
  )
}
