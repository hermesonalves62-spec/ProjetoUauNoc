"use client"

import { useState, useEffect, useRef } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function OurServices() {
  const [currentSlide, setCurrentSlide] = useState(1) // Start at 1 to account for cloned first slide
  const [isTransitioning, setIsTransitioning] = useState(false)
  const titleAnimation = useScrollAnimation<HTMLHeadingElement>({ delay: 200 })
  const carouselRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      image: "/fiber-optic-installation-infrastructure.jpg",
      title: "Instalação de\nInfraestrutura",
      description: "Implementação de fibra óptica, cabeamento estruturado e antenas de rede.",
    },
    {
      image: "/network-testing-maintenance-equipment.jpg",
      title: "Manutenção de\nRedes",
      description: "Ações corretivas e preventivas para garantir estabilidade e desempenho.",
    },
    {
      image: "/router-modem-configuration-setup.jpg",
      title: "Configuração de\nEquipamentos",
      description: "Instalação de roteadores, ONU/ONT, modems e dispositivos de cliente.",
    },
    {
      image: "/backbone-infrastructure-planning.jpg",
      title: "Projetos de\nBackbone",
      description: "Estruturação de projetos para expansão e confiabilidade da rede.",
    },
    {
      image: "/data-center-team-collaboration.jpg",
      title: "Terceirização de\nEquipes",
      description: "Equipes especializadas para provedores de internet e empresas de tecnologia.",
    },
    {
      image: "/equipment-repair-maintenance-tools.jpg",
      title: "Manutenção de\nEquipamentos",
      description: "Serviços de reparo e conservação de ativos de rede e telecom.",
    },
  ]

  const getServicesPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1
      if (window.innerWidth < 1024) return 2
      return 3
    }
    return 3
  }

  const [servicesPerSlide, setServicesPerSlide] = useState(3)
  const totalSlides = Math.ceil(services.length / servicesPerSlide)

  useEffect(() => {
    const handleResize = () => {
      const newServicesPerSlide = getServicesPerSlide()
      if (newServicesPerSlide !== servicesPerSlide) {
        setServicesPerSlide(newServicesPerSlide)
        setCurrentSlide(1) // Reset to 1 instead of 0
      }
    }

    setServicesPerSlide(getServicesPerSlide())
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [servicesPerSlide])

  useEffect(() => {
    if (!isTransitioning) return

    const timer = setTimeout(() => {
      if (currentSlide === 0) {
        // Jumped to clone at start, reset to actual last slide
        setCurrentSlide(totalSlides)
        setIsTransitioning(false)
      } else if (currentSlide === totalSlides + 1) {
        // Jumped to clone at end, reset to actual first slide
        setCurrentSlide(1)
        setIsTransitioning(false)
      } else {
        setIsTransitioning(false)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [currentSlide, isTransitioning, totalSlides])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => prev + 1)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => prev - 1)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(index + 1) // Add 1 to account for cloned first slide
  }

  const extendedSlides = [totalSlides - 1, ...Array.from({ length: totalSlides }, (_, i) => i), 0]

  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2
          ref={titleAnimation.ref}
          className={`text-3xl lg:text-4xl font-semibold text-[#003270] text-center mb-4 transition-all duration-1000 ease-out ${
            titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Nossos Serviços
        </h2>

        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Conheça os serviços que oferecemos para apoiar o crescimento do seu provedor de internet:
        </p>

        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-12 sm:h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 border border-gray-200 disabled:opacity-50"
            aria-label="Serviços anteriores"
          >
            <ChevronLeft className="w-6 h-6 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-12 sm:h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 border border-gray-200 disabled:opacity-50"
            aria-label="Próximos serviços"
          >
            <ChevronRight className="w-6 h-6 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {extendedSlides.map((slideIndex, idx) => (
                <div key={idx} className="w-full flex-shrink-0">
                  <div
                    className={`grid gap-4 sm:gap-6 px-16 sm:px-8 lg:px-12 ${
                      servicesPerSlide === 1 ? "grid-cols-1" : servicesPerSlide === 2 ? "grid-cols-2" : "grid-cols-3"
                    }`}
                  >
                    {services
                      .slice(slideIndex * servicesPerSlide, (slideIndex + 1) * servicesPerSlide)
                      .map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm mx-auto sm:max-w-none"
                        >
                          <div className="h-40 sm:h-44 lg:h-48 overflow-hidden">
                            <img
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="p-4 sm:p-6 text-center">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight whitespace-pre-line">
                              {service.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-200 disabled:opacity-50 ${
                  currentSlide === index + 1 ||
                  (currentSlide === 0 && index === totalSlides - 1) ||
                  (currentSlide === totalSlides + 1 && index === 0)
                    ? "bg-[#003270]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para grupo de serviços ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
