"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { createWhatsAppLink, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/whatsapp"

export function CoverageArea() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = createWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section
      id="atuacao"
      className="py-12 sm:py-16 lg:py-20 bg-white relative"
      style={{
        backgroundImage: `url('/images/n-logo-bg.png')`,
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-white/90 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans text-[rgba(0,50,112,1)] text-balance font-semibold text-center lg:text-left">
              Nossa região de atuação
            </h2>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-600 font-sans text-pretty text-justify">
                Estamos localizados em Sergipe e atuamos especialmente na região centro-sul do estado, onde já
                realizamos atendimentos em diferentes localidades. Essa experiência nos permite entender as
                particularidades de cada cidade e oferecer soluções técnicas ágeis e de qualidade.
              </p>

              <p className="text-sm sm:text-base text-gray-600 font-sans text-pretty text-justify">
                Nosso compromisso é garantir atendimento eficiente e de alta qualidade em toda a região em que atuamos.
              </p>

              <div className="pt-2">
                <Button
                  size="lg"
                  className="hover:scale-101 hover:shadow-lg transition-all duration-300 text-white rounded-2xl w-full sm:w-auto transform-gpu will-change-transform"
                  style={{
                    backgroundColor: "#003270",
                    padding: "clamp(0.8rem, 1.8vw, 1.1rem) clamp(1.5rem, 3vw, 2.2rem)",
                    fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#002050"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#003270"
                  }}
                  onClick={handleWhatsAppClick}
                >
                  Verificar disponibilidade
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-center order-2 lg:order-2">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl flex justify-center">
              <div className="relative drop-shadow-lg">
                <Image
                  src="/images/mapa-c-sombra.png"
                  alt="Mapa da região sul do Brasil - Santa Catarina e Paraná"
                  width={700}
                  height={560}
                  className="w-full h-auto rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
                  loading="lazy"
                  quality={80}
                  priority={false}
                />

                <Image
                  src="/images/mapa-com-cidades.png"
                  alt="Mapa com cidades: Pinhão, Pedra Mole, Simão Dias e Lagarto"
                  width={700}
                  height={560}
                  className="w-full h-auto absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-out rounded-lg"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
                  loading="lazy"
                  quality={80}
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
