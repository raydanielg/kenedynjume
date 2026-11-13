import { HeroSection } from "@/components/hero-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AuthorSection } from "@/components/author-section"
import { BookSection } from "@/components/book-section"
import { FinalCta } from "@/components/final-cta"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { InstallPrompt } from "@/components/install-prompt"
import { SwRegister } from "@/components/sw-register"
import { JsonLd } from "@/components/json-ld"
import { WhatsAppTrack } from "@/components/whatsapp-track"

export default function Page() {
  return (
    <div className="overflow-x-clip bg-white text-ink">
      <JsonLd />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <AuthorSection />
        <BookSection />
        <FinalCta />
      </main>
      <WhatsAppFab />
      <InstallPrompt />
      <SwRegister />
      <WhatsAppTrack />
    </div>
  )
}
