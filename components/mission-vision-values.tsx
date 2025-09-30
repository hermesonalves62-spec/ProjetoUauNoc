"use client" // Added use client directive for hooks usage

import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/use-scroll-animation"

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="6" strokeWidth={2} />
    <circle cx="12" cy="12" r="2" strokeWidth={2} />
  </svg>
)

const Eye = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
)

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
)

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

export function MissionVisionValues() {
  const headerAnimation = useScrollAnimation<HTMLDivElement>({ delay: 200 })
  const cardsAnimation = useStaggeredScrollAnimation<HTMLDivElement>(3, { staggerDelay: 200, delay: 400 })

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden">
        <div
          ref={headerAnimation.ref}
          className={`text-center mb-8 md:mb-12 transition-all duration-1000 ease-out ${
            headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl mb-3 md:mb-4 text-balance font-semibold text-[rgba(0,50,112,1)]">
            Valores e Propósito
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-muted-foreground mx-auto max-w-4xl text-balance">
            Conheça os pilares que guiam nossa empresa e nosso compromisso com a excelência:
          </p>
        </div>

        <div ref={cardsAnimation.ref} className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {/* Missão */}
          <Card
            className={`hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50/50 transition-all duration-500 ease-out border-primary/20 group ${
              cardsAnimation.visibleItems[0]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <CardContent className="p-4 md:p-6 text-center">
              <div className="mb-3 md:mb-4 flex justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#003270] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:bg-[#004080] transition-all duration-500 group-hover:scale-102">
                  <Target className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-primary mb-3 md:mb-4 group-hover:text-[#004080] transition-colors duration-300 text-xl md:text-2xl">
                Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center text-sm md:text-base">
                Oferecer soluções especializadas em cabeamento estruturado e redes de telecom, garantindo eficiência,
                segurança e inovação para empresas e provedores.
              </p>
            </CardContent>
          </Card>

          {/* Visão */}
          <Card
            className={`hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50/50 transition-all duration-500 ease-out border-primary/20 group ${
              cardsAnimation.visibleItems[1]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <CardContent className="p-4 md:p-6 text-center">
              <div className="mb-3 md:mb-4 flex justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#003270] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:bg-[#004080] transition-all duration-500 group-hover:scale-102">
                  <Eye className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4 group-hover:text-[#004080] transition-colors duration-300">
                Visão
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Ser referência em soluções inovadoras para o setor de telecom, reconhecida pela qualidade e confiança em
                transformar operações em parcerias de sucesso.
              </p>
            </CardContent>
          </Card>

          {/* Valores */}
          <Card
            className={`hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50/50 transition-all duration-500 ease-out border-primary/20 group ${
              cardsAnimation.visibleItems[2]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <CardContent className="p-4 md:p-6 text-center">
              <div className="mb-3 md:mb-4 flex justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#003270] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:bg-[#004080] transition-all duration-500 group-hover:scale-102">
                  <img
                    src="/images/person-icon.png"
                    alt="Person icon"
                    className="w-6 h-6 md:w-7 md:h-7 brightness-0 invert"
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4 group-hover:text-[#004080] transition-colors duration-300">
                Valores
              </h3>
              <div className="text-muted-foreground leading-relaxed space-y-1 md:space-y-2 text-sm md:text-base">
                <p>
                  <span className="text-[#003270] font-bold">•</span> Profissionalismo;
                </p>
                <p>
                  <span className="text-[#003270] font-bold">•</span> Confiabilidade;
                </p>
                <p>
                  <span className="text-[#003270] font-bold">•</span> Agilidade;
                </p>
                <p>
                  <span className="text-[#003270] font-bold">•</span> Inovação;
                </p>
                <p>
                  <span className="text-[#003270] font-bold">•</span> Parceria.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
