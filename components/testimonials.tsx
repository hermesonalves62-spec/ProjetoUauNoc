import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      rating: 5,
      text: "Excelente serviço! A instalação foi rápida e a internet é muito estável. Recomendo para todos que precisam de qualidade.",
      service: "Plano Pro - 300 Mbps",
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      text: "Migrei minha empresa para a ConectaNet e a diferença foi impressionante. Suporte técnico sempre disponível e conexão confiável.",
      service: "Plano Empresarial",
      rating: 5,
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      text: "Atendimento excepcional desde o primeiro contato. Técnicos muito profissionais e educados. Estou muito satisfeita!",
      service: "Plano Básico - 100 Mbps",
      rating: 5,
    },
  ]

  const caseStudy = {
    company: "Escola Técnica Inovação",
    challenge: "Necessidade de internet estável para 200 alunos simultâneos",
    solution: "Link dedicado de 500 Mbps com redundância",
    result: "Aumento de 85% na produtividade das aulas online",
  }

  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Mais de 5.000 clientes confiam na ConectaNet para suas necessidades de conectividade.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                <p className="text-muted-foreground mb-6 text-pretty">"{testimonial.text}"</p>

                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-sm text-primary mt-1">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Study */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Case de Sucesso</h3>
              <p className="text-muted-foreground">Como ajudamos uma instituição a transformar sua conectividade</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-primary mb-2">Cliente</h4>
                <p className="text-sm">{caseStudy.company}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Desafio</h4>
                <p className="text-sm">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Solução</h4>
                <p className="text-sm">{caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Resultado</h4>
                <p className="text-sm font-medium">{caseStudy.result}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
