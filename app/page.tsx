import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import dynamic from "next/dynamic"

const WhoWeAre = dynamic(() => import("@/components/who-we-are").then((mod) => ({ default: mod.WhoWeAre })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
})

const MissionVisionValues = dynamic(
  () => import("@/components/mission-vision-values").then((mod) => ({ default: mod.MissionVisionValues })),
  {
    loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
  },
)

const OurServices = dynamic(() => import("@/components/our-services").then((mod) => ({ default: mod.OurServices })), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
})

const CoverageArea = dynamic(
  () => import("@/components/coverage-area").then((mod) => ({ default: mod.CoverageArea })),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  },
)

const FAQ = dynamic(() => import("@/components/faq").then((mod) => ({ default: mod.FAQ })), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />,
})

const Footer = dynamic(() => import("@/components/footer").then((mod) => ({ default: mod.Footer })), {
  loading: () => <div className="h-32 bg-gray-50 animate-pulse" />,
})

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <MissionVisionValues />
        <OurServices />
        <CoverageArea />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
