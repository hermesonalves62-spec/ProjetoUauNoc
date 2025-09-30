"use client" // Added use client directive for hooks usage

import Image from "next/image"
import { useStaggeredScrollAnimation, useScrollAnimation } from "@/hooks/use-scroll-animation"

const Trophy = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.618 7.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 018.618 5.04A12.02 12.02 0 0021 9c0 5.591-3.824 10.29-9 11.622C6.824 19.29 3 14.591 3 9c0-1.042.133-2.052.382-3.016z"
    />
  </svg>
)

const BadgeCheck = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const ModernShield = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const OutlineShield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"
    />
  </svg>
)

export function WhoWeAre() {
  const statsAnimation = useStaggeredScrollAnimation<HTMLDivElement>(3, { staggerDelay: 200 })

  const logoAnimation = useScrollAnimation<HTMLDivElement>({ delay: 200 })
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>({ delay: 300 })
  const paragraphsAnimation = useStaggeredScrollAnimation<HTMLDivElement>(4, { staggerDelay: 150, delay: 400 })

  return (
    <>
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl overflow-hidden">
          <div ref={statsAnimation.ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative">
            <div
              className={`text-center space-y-4 transition-all duration-700 ease-out hover:scale-[1.02] hover:duration-700 hover:ease-in-out cursor-pointer ${
                statsAnimation.visibleItems[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex justify-center">
                <Image src="/images/232.png" alt="Experiência" width={48} height={48} className="w-12 h-12" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">Experiência</h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  Equipe especializada na gestão de provedores de internet, com atuação reconhecida
                </p>
              </div>
            </div>

            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

            <div
              className={`text-center space-y-4 transition-all duration-700 ease-out hover:scale-[1.02] hover:duration-700 hover:ease-in-out cursor-pointer ${
                statsAnimation.visibleItems[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex justify-center">
                <BadgeCheck className="w-12 h-12 text-[#003270]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">Qualificação</h3>
                <p className="text-gray-600 leading-relaxed">
                  Um quadro de colaboradores técnicos altamente qualificados e com experiência em campo
                </p>
              </div>
            </div>

            <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>

            <div
              className={`text-center space-y-4 transition-all duration-700 ease-out hover:scale-[1.02] hover:duration-700 hover:ease-in-out cursor-pointer ${
                statsAnimation.visibleItems[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex justify-center">
                <OutlineShield className="w-12 h-12 text-[#003270]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">Inovação</h3>
                <p className="text-gray-600 leading-relaxed">
                  Treinamento constante e utilização de tecnologias inovadoras garantindo qualidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quem-somos" className="pt-12 pb-20 bg-[#F7F7F9] mt-8 relative overflow-hidden contain-layout">
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-no-repeat bg-right bg-contain"
          style={{
            backgroundImage: "url('/images/tech-network-pattern.png')",
            backgroundPosition: "right center",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={logoAnimation.ref}
              className={`flex justify-center lg:justify-start lg:pl-4 lg:pr-4 transition-all duration-1000 ease-out ml-4 lg:-ml-8 ${
                logoAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <Image
                src="/images/noc-logo-badge.png"
                alt="NOC Serviços"
                width={650}
                height={650}
                className="max-w-lg w-full h-auto transition-all duration-500 ease-out hover:scale-105 hover:drop-shadow-xl cursor-pointer rounded-lg hover:brightness-110"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 650px"
                quality={80}
                priority={false}
              />
            </div>

            <div className="space-y-6 lg:ml-4">
              <h2
                ref={titleAnimation.ref}
                className={`text-3xl mb-6 text-[rgba(0,50,112,1)] text-center lg:text-left font-semibold transition-all duration-1000 ease-out lg:text-4xl ${
                  titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Quem somos?
              </h2>

              <div ref={paragraphsAnimation.ref} className="space-y-6">
                <p
                  className={`text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed font-sans transition-all duration-700 ease-out text-justify ${
                    paragraphsAnimation.visibleItems[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  A NOC Serviços e Comércio, sediada em Simão Dias - SE, é especializada em soluções de cabeamento
                  estruturado para empresas e em redes de telecom para provedores.
                </p>

                <p
                  className={`text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed font-sans transition-all duration-700 ease-out text-justify ${
                    paragraphsAnimation.visibleItems[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  Mais do que executar atividades técnicas, buscamos simplificar processos, otimizar recursos e
                  proporcionar segurança nas operações de telecom, sempre com profissionalismo, inovação e compromisso
                  com resultados.
                </p>

                <p
                  className={`text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed font-sans transition-all duration-700 ease-out text-justify ${
                    paragraphsAnimation.visibleItems[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  Com uma equipe qualificada e estrutura preparada para atender às demandas do setor, a NOC se consolida
                  como a escolha inteligente para quem deseja crescer com eficiência e confiança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
