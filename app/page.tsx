import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ObjectionsSection } from "@/components/objections-section"
import { LostSalesSection } from "@/components/lost-sales-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AuthorSection } from "@/components/author-section"
import { BookSection } from "@/components/book-section"
import { BenefitsSection } from "@/components/benefits-section"
import { AudienceSection } from "@/components/audience-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { FooterTear } from "@/components/footer-tear"
import { BottomNav } from "@/components/bottom-nav"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { InstallPrompt } from "@/components/install-prompt"
import { SwRegister } from "@/components/sw-register"

export default function Page() {
  return (
    <div className="overflow-x-clip bg-white pb-[76px] text-ink lg:pb-0">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <ObjectionsSection />
        <LostSalesSection />
        <TestimonialsSection />
        <AuthorSection />
        <BookSection />
        <BenefitsSection />
        <AudienceSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <FooterTear />
      <BottomNav />
      <WhatsAppFab />
      <InstallPrompt />
      <SwRegister />
    </div>
  )
}
