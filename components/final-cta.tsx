import { WhatsAppButton } from "@/components/whatsapp-button"

export function FinalCta() {
  return (
    <section id="order" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[900px] px-4 py-16 text-center sm:px-6 lg:py-24">
        <div>
          <div className="flex justify-center">
            <WhatsAppButton
              label="Click hapa kupata nakala"
              icon="whatsapp"
              className="animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
