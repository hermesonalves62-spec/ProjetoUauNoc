import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"

const orbitron = localFont({
  src: [
    {
      path: "./fonts/Orbitron-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Orbitron-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Orbitron-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Orbitron-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-orbitron",
  display: "swap",
  preload: true,
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "ConectaNet - Internet Estável para Casa e Empresa | Instalação e Suporte 24/7",
  description:
    "Internet de alta velocidade com instalação profissional, suporte 24/7 e garantia de 12 meses. Planos residenciais e empresariais com fibra óptica. Solicite seu orçamento!",
  keywords:
    "internet fibra óptica, instalação internet, provedor internet, internet empresarial, cabeamento estruturado, suporte técnico 24/7, wifi mesh, projetos de rede",
  authors: [{ name: "ConectaNet" }],
  creator: "ConectaNet",
  publisher: "ConectaNet",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.conectanet.com.br",
    title: "ConectaNet - Internet Estável para Casa e Empresa",
    description:
      "Internet de alta velocidade com instalação profissional, suporte 24/7 e garantia de 12 meses. Planos residenciais e empresariais com fibra óptica.",
    siteName: "ConectaNet",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ConectaNet - Provedor de Internet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ConectaNet - Internet Estável para Casa e Empresa",
    description: "Internet de alta velocidade com instalação profissional e suporte 24/7.",
    images: ["/assets/og-image.jpg"],
  },
  generator: "v0.app",
}

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ConectaNet",
  description: "Provedor de internet com instalação residencial e empresarial, manutenção e projetos de redes",
  url: "https://www.conectanet.com.br",
  telephone: "+5511999999999",
  email: "contato@conectanet.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rodovia Pedro Almeida Valadares 2363",
    addressLocality: "Simão Dias",
    addressRegion: "SE",
    postalCode: "49480-000",
    addressCountry: "BR",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -10.7364,
      longitude: -37.8197,
    },
    geoRadius: 50000,
  },
  priceRange: "R$ 79,90 - R$ 299,90",
  paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
  currenciesAccepted: "BRL",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${orbitron.variable} ${poppins.variable} antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </head>
      <body className="overflow-x-hidden">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
