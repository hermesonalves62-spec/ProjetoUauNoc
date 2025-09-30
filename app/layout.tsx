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
  title: "NOC Comércios e Serviços - Cabeamento Estruturado e Rede Telecom | Centro-Sul de Sergipe",
  description:
    "Soluções especializadas em cabeamento estruturado para empresas e rede telecom para provedores. NOC Comércios e Serviços é a melhor opção para quem busca confiança e profissionalismo no setor de telecom.",
  keywords:
    "cabeamento estruturado, rede telecom, NOC, provedores de internet, infraestrutura de rede, fibra óptica, projetos de rede, Centro-Sul de Sergipe, Sergipe, serviços telecom",
  authors: [{ name: "NOC Comércios e Serviços" }],
  creator: "NOC Comércios e Serviços",
  publisher: "NOC Comércios e Serviços",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.nocservicos.com.br",
    title: "NOC Comércios e Serviços - Cabeamento Estruturado e Rede Telecom",
    description:
      "Soluções especializadas em cabeamento estruturado para empresas e rede telecom para provedores no Centro-Sul de Sergipe.",
    siteName: "NOC Comércios e Serviços",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NOC Comércios e Serviços - Soluções em Telecom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOC Comércios e Serviços - Cabeamento Estruturado e Rede Telecom",
    description: "Soluções especializadas em cabeamento estruturado para empresas e rede telecom para provedores.",
    images: ["/assets/og-image.jpg"],
  },
  generator: "v0.app",
}

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NOC Comércios e Serviços",
  description: "Soluções especializadas em cabeamento estruturado para empresas e rede telecom para provedores",
  url: "https://www.nocservicos.com.br",
  telephone: "+5534999999999",
  email: "contato@nocservicos.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Centro-Sul de Sergipe",
    addressRegion: "SE",
    addressCountry: "BR",
  },
  openingHours: ["Mo-Fr 08:00-18:00"],
  areaServed: {
    "@type": "State",
    name: "Sergipe",
  },
  serviceType: ["Cabeamento Estruturado", "Rede Telecom", "Infraestrutura de Rede", "Projetos de Fibra Óptica"],
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
