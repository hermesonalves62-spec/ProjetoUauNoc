"use client"

import type React from "react"
import { useState, useCallback, memo, lazy, Suspense } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const ContactInfo = memo(() => (
  <Card className="overflow-hidden">
    <CardHeader>
      <CardTitle>Informações de Contato</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="flex items-center gap-4">
        <Phone className="h-6 w-6 text-primary flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="font-medium">Telefone</div>
          <a href="tel:+5511999999999" className="text-muted-foreground hover:text-primary break-all">
            (11) 99999-9999
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mail className="h-6 w-6 text-primary flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <div className="font-medium">E-mail</div>
          <a href="mailto:contato@conectanet.com.br" className="text-muted-foreground hover:text-primary break-all">
            contato@conectanet.com.br
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
        <div className="min-w-0 flex-1">
          <div className="font-medium">Endereço</div>
          <div className="text-muted-foreground break-words">
            Rodovia Pedro Almeida Valadares 2363
            <br />
            Centro - Simão Dias, SE
            <br />
            CEP: 49480-000
          </div>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
        <div className="min-w-0 flex-1">
          <div className="font-medium">Horário de Atendimento</div>
          <div className="text-muted-foreground break-words">
            Segunda a Sexta: 8h às 18h
            <br />
            Sábado: 8h às 12h
            <br />
            Suporte 24/7 para emergências
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
))

ContactInfo.displayName = "ContactInfo"

const GoogleMap = lazy(() =>
  Promise.resolve({
    default: () => (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6333824!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      </div>
    ),
  }),
)

export function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    endereco: "",
    servico: "",
    data: "",
    mensagem: "",
  })

  const formAnimation = useScrollAnimation({ delay: 200 })
  const contactInfoAnimation = useScrollAnimation({ delay: 400 })
  const mapAnimation = useScrollAnimation({ delay: 600 })

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      if (!formData.nome || !formData.telefone || !formData.email) {
        alert("Por favor, preencha todos os campos obrigatórios.")
        return
      }

      try {
        const response = await fetch("/api/contato", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
          setFormData({
            nome: "",
            telefone: "",
            email: "",
            endereco: "",
            servico: "",
            data: "",
            mensagem: "",
          })
        } else {
          throw new Error("Erro ao enviar mensagem")
        }
      } catch (error) {
        alert("Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.")
      }
    },
    [formData],
  )

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }, [])

  return (
    <section id="contato" className="py-20 overflow-hidden contain-layout">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card
            ref={formAnimation.ref}
            className={`transition-all duration-700 delay-200 overflow-hidden lg:order-1 ${
              formAnimation.isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
            }`}
          >
            <CardHeader>
              <CardTitle>Solicitar Orçamento</CardTitle>
              <CardDescription className="text-pretty">
                Preencha o formulário e entraremos em contato em até 2 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => handleInputChange("nome", e.target.value)}
                      placeholder="Seu nome completo"
                      required
                      className="break-words"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange("telefone", e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="break-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input
                    id="endereco"
                    value={formData.endereco}
                    onChange={(e) => handleInputChange("endereco", e.target.value)}
                    placeholder="Rua, número, bairro, cidade"
                    className="break-words"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="servico">Serviço Desejado</Label>
                    <Select onValueChange={(value) => handleInputChange("servico", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residencial">Instalação Residencial</SelectItem>
                        <SelectItem value="empresarial">Instalação Empresarial</SelectItem>
                        <SelectItem value="cabeamento">Cabeamento Estruturado</SelectItem>
                        <SelectItem value="manutencao">Manutenção e Suporte</SelectItem>
                        <SelectItem value="wifi-mesh">Wi-Fi Mesh</SelectItem>
                        <SelectItem value="projetos">Projetos de Redes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="data">Melhor Data para Visita</Label>
                    <Input
                      id="data"
                      type="date"
                      value={formData.data}
                      onChange={(e) => handleInputChange("data", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => handleInputChange("mensagem", e.target.value)}
                    placeholder="Conte-nos mais sobre suas necessidades..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full hover:scale-101 hover:shadow-lg transition-all duration-300 text-white rounded-2xl transform-gpu will-change-transform"
                  style={{
                    backgroundColor: "#003270",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#002050"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#003270"
                  }}
                >
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8 lg:order-2 order-2">
            <div
              ref={contactInfoAnimation.ref}
              className={`transition-all duration-700 delay-400 ${
                contactInfoAnimation.isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <ContactInfo />
            </div>

            <Card
              ref={mapAnimation.ref}
              className={`transition-all duration-700 delay-600 overflow-hidden ${
                mapAnimation.isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <CardContent className="p-0">
                <Suspense fallback={<div className="aspect-video bg-muted rounded-lg animate-pulse" />}>
                  <GoogleMap />
                </Suspense>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
