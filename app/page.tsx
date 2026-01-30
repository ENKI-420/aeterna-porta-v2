import { HeroSection } from "@/components/hero-section"
import { StagesSection } from "@/components/stages-section"
import { DiscoveriesSection } from "@/components/discoveries-section"
import { StatusSection } from "@/components/status-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StagesSection />
      <DiscoveriesSection />
      <StatusSection />
    </main>
  )
}
