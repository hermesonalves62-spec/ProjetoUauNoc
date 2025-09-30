"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import { createWhatsAppLink, WHATSAPP_NUMBER } from "@/lib/whatsapp"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerAnimation = useScrollAnimation({ delay: 0, threshold: 0.2 })

  const handleServiceWhatsApp = (serviceName: string) => {
    const message = `Olá! Gostaria de saber mais sobre o serviço de ${serviceName}. Podem me ajudar?`
    const whatsappUrl = createWhatsAppLink(WHATSAPP_NUMBER, message)
    window.open(whatsappUrl, "_blank")
  }

  return (
    <footer>
      {/* Main footer content */}
      <div className="bg-[#003270] text-primary-foreground">
        <div
          ref={footerAnimation.ref}
          className={`container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 transition-all duration-700 ${
            footerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <Image
                    src="/images/noc-servicos-logo.png"
                    alt="NOC Serviços"
                    width={100}
                    height={32}
                    className="h-6 sm:h-8 w-auto brightness-0 invert"
                    sizes="100px"
                  />
                </button>
              </div>
              <p className="text-primary-foreground/80 text-sm sm:text-base text-pretty max-w-md">
                Terceirização que conecta seu provedor ao sucesso.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold">Serviços</h4>
              <ul className="space-y-2 text-sm sm:text-base text-primary-foreground/80">
                <li>
                  <button
                    onClick={() => handleServiceWhatsApp("Instalação de Infraestrutura")}
                    className="hover:text-primary-foreground transition-colors cursor-pointer text-left text-pretty"
                  >
                    Instalação de Infraestrutura
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleServiceWhatsApp("Manutenção de Redes")}
                    className="hover:text-primary-foreground transition-colors cursor-pointer text-left text-pretty"
                  >
                    Manutenção de Redes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleServiceWhatsApp("Configuração de Equipamentos")}
                    className="hover:text-primary-foreground transition-colors cursor-pointer text-left text-pretty"
                  >
                    Configuração de Equipamentos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleServiceWhatsApp("Terceirização de Equipes")}
                    className="hover:text-primary-foreground transition-colors cursor-pointer text-left text-pretty"
                  >
                    Terceirização de Equipes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleServiceWhatsApp("Manutenção de Equipamentos")}
                    className="hover:text-primary-foreground transition-colors cursor-pointer text-left text-pretty"
                  >
                    Manutenção de Equipamentos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleServiceWhatsApp("Projetos de Backbone")}
                    className="hover:text-primary-foreground transition-colors cursor-pointer text-left text-pretty"
                  >
                    Projetos de Backbone
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold">Contato</h4>
              <ul className="space-y-2 text-sm sm:text-base text-primary-foreground/80">
                <li className="break-words">(79) 93618-1578</li>
                <li className="break-words">nocservicos@hotmail.com</li>
                <li className="text-pretty">
                  Rodovia Pedro Almeida Valadares 2363
                  <br />
                  Centro - Simão Dias, SE
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="text-center">
            <div className="text-xs sm:text-sm text-[rgba(0,51,112,1)] text-pretty font-mono">
              © {currentYear} NOC Serviços. Todos os direitos reservados. | CNPJ: 46.100.278/0001-31
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
