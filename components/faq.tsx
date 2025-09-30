"use client"

import { useState } from "react"
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/use-scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { createWhatsAppLink, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/whatsapp"

const ChevronDown = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const ChevronUp = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
)

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const handleWhatsAppClick = () => {
    const whatsappUrl = createWhatsAppLink(WHATSAPP_NUMBER, WHATSAPP_MESSAGE)
    window.open(whatsappUrl, "_blank")
  }

  const faqs = [
    {
      question: "A NOC faz projetos personalizados?",
      answer:
        "Sim. Desenvolvemos soluções sob medida, incluindo planejamento e implantação de backbone, expansão de rede e consultoria técnica.",
    },
    {
      question: "Em quais regiões a NOC atua?",
      answer:
        "Atendemos clientes principalmente na região Centro-Sul de Sergipe, mas também podemos analisar a possibilidade de atender em outras regiões do estado conforme a demanda do projeto.",
    },
    {
      question: "Como posso contratar os serviços da NOC?",
      answer:
        "Você pode entrar em contato pelo nosso site, WhatsApp ou e-mail. Nossa equipe comercial vai entender sua demanda e indicar a melhor solução para sua empresa.",
    },
    {
      question: "Por que escolher a NOC?",
      answer:
        "Porque oferecemos expertise técnica, agilidade e confiança, permitindo que o provedor foque no crescimento do negócio enquanto cuidamos da parte operacional.",
    },
  ]

  const headerAnimation = useScrollAnimation({ delay: 0 })
  const faqsAnimation = useStaggeredScrollAnimation(faqs.length, { staggerDelay: 150 })
  const footerAnimation = useScrollAnimation({ delay: 600 })

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f7f7f9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden">
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-8 sm:mb-10 lg:mb-12 transition-all duration-700 ${
            headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-balance text-[rgba(0,50,112,1)]">
            FAQ - Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tire suas dúvidas sobre nossos serviços de telecomunicações e terceirização.
          </p>
        </div>

        <div ref={faqsAnimation.ref} className="max-w-2xl mx-auto space-y-3 sm:space-y-4 font-light">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className={`overflow-hidden bg-white shadow-sm transition-all duration-700 ${
                faqsAnimation.visibleItems[index]
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
                >
                  <h3 className="text-sm sm:text-base md:text-lg pr-3 text-[rgba(0,50,112,1)] text-balance font-normal">
                    {faq.question}
                  </h3>
                  <div className={`transition-transform duration-300 ${openItems.includes(index) ? "rotate-180" : ""}`}>
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-[rgba(0,50,112,1)] flex-shrink-0" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`px-4 sm:px-5 pb-4 sm:pb-5 transform transition-transform duration-300 ${
                      openItems.includes(index) ? "translate-y-0" : "-translate-y-2"
                    }`}
                  >
                    <p className="text-sm sm:text-base text-muted-foreground text-pretty leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          ref={footerAnimation.ref}
          className={`text-center mt-6 sm:mt-8 transition-all duration-700 delay-600 ${
            footerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm sm:text-base text-muted-foreground mb-3">
            Não encontrou sua resposta? Entre em contato conosco.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="text-sm sm:text-base text-[#003270] hover:text-[#003270]/80 font-medium"
          >
            Falar com Suporte →
          </button>
        </div>
      </div>
    </section>
  )
}
