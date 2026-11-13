import { Reveal } from "@/components/reveal"
import { WhatsAppButton } from "@/components/whatsapp-button"

export function FinalCta() {
  return (
    <section id="order" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[900px] px-4 py-16 text-center sm:px-6 lg:py-24">
        <Reveal>
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
            Pata nakala yako leo!
          </h2>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton label="Agiza E Book Sasa" icon="whatsapp" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
