import { useScrollAnimation, useStaggeredScrollAnimation } from "@/hooks/use-scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Shield } from "lucide-react"

export function About() {
  const stats = [
    {
      icon: Users,
      number: "5.000+",
      label: "Clientes Atendidos",
    },
    {
      icon: Clock,
      number: "8+",
      label: "Anos de Experiência",
    },
    {
      icon: Award,
      number: "99,9%",
      label: "Uptime Garantido",
    },
    {
      icon: Shield,
      number: "24/7",
      label: "Suporte Técnico",
    },
  ]

  const titleAnimation = useScrollAnimation({ delay: 0 })
  const contentAnimation = useScrollAnimation({ delay: 200 })
  const credentialsAnimation = useScrollAnimation({ delay: 400 })
  const imageAnimation = useScrollAnimation({ delay: 300 })
  const statsAnimation = useStaggeredScrollAnimation(stats.length, { staggerDelay: 150, delay: 500 })

  return (
    <section id="sobre" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2
                ref={titleAnimation.ref}
                className={`text-3xl lg:text-5xl font-bold mb-6 text-balance transition-all duration-700 ${
                  titleAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Quem Somos
              </h2>

              <div
                ref={contentAnimation.ref}
                className={`space-y-4 text-lg text-muted-foreground transition-all duration-700 delay-200 ${
                  contentAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-pretty">
                  A <strong className="text-foreground">ConectaNet</strong> é uma empresa especializada em soluções de
                  conectividade, com mais de 8 anos de experiência no mercado de telecomunicações.
                </p>
                <p className="text-pretty">
                  Nossa missão é fornecer internet de alta qualidade e serviços técnicos especializados, garantindo que
                  nossos clientes tenham sempre a melhor experiência de conectividade.
                </p>
                <p className="text-pretty">
                  Contamos com uma equipe de técnicos certificados e utilizamos equipamentos de última geração para
                  garantir a excelência em todos os nossos serviços.
                </p>
              </div>
            </div>

            <div
              ref={credentialsAnimation.ref}
              className={`space-y-4 transition-all duration-700 delay-400 ${
                credentialsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-semibold">Nossas Credenciais</h3>
              <ul className="space-y-2 text-muted-foreground overflow-hidden">
                <li className="break-words font-mono">• CNPJ: 12.345.678/0001-90</li>
                <li className="break-words">• Técnicos certificados ANATEL</li>
                <li className="break-words">• Licença SCM (Serviço de Comunicação Multimídia)</li>
                <li className="break-words">• Certificação ISO 9001:2015</li>
                <li className="break-words">• Membro da ABRINT (Associação Brasileira de Provedores)</li>
              </ul>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            <div
              ref={imageAnimation.ref}
              className={`aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-700 delay-300 ${
                imageAnimation.isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <img
                src="/professional-technical-team-working-on-network-ins.jpg"
                alt="Equipe técnica da ConectaNet"
                className="w-full h-full object-cover"
              />
            </div>

            <div ref={statsAnimation.ref} className="grid grid-cols-2 gap-4 overflow-hidden">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Card
                    key={index}
                    className={`text-center p-6 transition-all duration-700 overflow-hidden ${
                      statsAnimation.visibleItems[index]
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-8 scale-95"
                    }`}
                  >
                    <CardContent className="space-y-2 p-0">
                      <IconComponent className="h-8 w-8 text-primary mx-auto flex-shrink-0" />
                      <div className="text-2xl font-bold text-primary whitespace-nowrap">{stat.number}</div>
                      <div className="text-sm text-muted-foreground text-center break-words">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
