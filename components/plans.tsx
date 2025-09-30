"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function Plans() {
  const plans = [
    {
      name: "Básico",
      description: "Ideal para uso residencial básico",
      price: "R$ 79,90",
      speed: "100 Mbps",
      features: [
        "Download: 100 Mbps",
        "Upload: 50 Mbps",
        "Wi-Fi grátis",
        "Instalação gratuita",
        "Suporte técnico",
        "Sem fidelidade",
      ],
      sla: "8 horas",
      popular: false,
    },
    {
      name: "Pro",
      description: "Perfeito para famílias e home office",
      price: "R$ 129,90",
      speed: "300 Mbps",
      features: [
        "Download: 300 Mbps",
        "Upload: 150 Mbps",
        "Wi-Fi 6 grátis",
        "Instalação gratuita",
        "Suporte prioritário",
        "IP fixo incluso",
        "Roteador premium",
      ],
      sla: "4 horas",
      popular: true,
    },
    {
      name: "Empresarial",
      description: "Solução completa para empresas",
      price: "R$ 299,90",
      speed: "500 Mbps",
      features: [
        "Download: 500 Mbps",
        "Upload: 250 Mbps",
        "Link dedicado",
        "SLA 99,9%",
        "Suporte 24/7",
        "IP fixo",
        "Backup 4G",
        "Monitoramento",
      ],
      sla: "2 horas",
      popular: false,
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="planos" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Planos de Internet</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Escolha o plano ideal para suas necessidades. Todos incluem instalação gratuita e suporte técnico
            especializado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto overflow-hidden">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${plan.popular ? "border-primary shadow-lg scale-105" : ""} hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground whitespace-nowrap">
                  Mais Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl break-words">{plan.name}</CardTitle>
                <CardDescription className="text-base text-pretty">{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-primary whitespace-nowrap">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">/mês</div>
                </div>
                <div className="text-lg font-semibold text-secondary whitespace-nowrap">{plan.speed}</div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3 overflow-hidden">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-sm break-words">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-4 break-words">
                    <strong>SLA de Atendimento:</strong> {plan.sla}
                  </div>
                  <Button
                    className={`w-full hover:scale-101 hover:shadow-lg transition-all duration-300 transform-gpu will-change-transform ${
                      plan.popular ? "text-white rounded-2xl" : "rounded-2xl"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={scrollToContact}
                    style={
                      plan.popular
                        ? {
                            backgroundColor: "#003270",
                          }
                        : undefined
                    }
                    onMouseEnter={
                      plan.popular
                        ? (e) => {
                            e.currentTarget.style.backgroundColor = "#002050"
                          }
                        : undefined
                    }
                    onMouseLeave={
                      plan.popular
                        ? (e) => {
                            e.currentTarget.style.backgroundColor = "#003270"
                          }
                        : undefined
                    }
                  >
                    Contratar Plano
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4 text-pretty">
            Precisa de um plano personalizado? Entre em contato conosco.
          </p>
          <Button variant="outline" onClick={scrollToContact}>
            Solicitar Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  )
}
