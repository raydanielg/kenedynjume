import Image from "next/image"
import { BookMockup } from "@/components/book-mockup"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"

const STEPS = [
  "Bonyeza kitufe cha WhatsApp.",
  "Tuma ujumbe wa kuagiza kitabu.",
  "Pata maelekezo ya malipo na upokeaji wa kitabu.",
]

export function PricingSection() {
  return (
    <section id="order" className="scroll-mt-24 bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        <div>
          {/* Mobile purchase card — compact product summary + order */}
          <Reveal className="mb-10 lg:hidden">
            <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="relative size-16 shrink-0">
                <Image
                  src="/images/book-cover-removebg-preview.png"
                  alt="20 Objections That Cost You Sales"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold tracking-tight uppercase">
                  20 Objections
                </p>
                <p className="text-xs text-white/60">Kenedy Njume</p>
                <p className="mt-1 text-lg font-extrabold tracking-tight">
                  TSh 30,000
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-white/50 uppercase sm:text-xs">
              Price &amp; purchase
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight uppercase sm:text-4xl lg:text-5xl">
              Acha kupoteza deals kwa sababu ya objections.
            </h2>

            <div className="mt-8">
              <p className="text-sm font-semibold tracking-[0.2em] text-white/60 uppercase">
                20 Objections That Cost You Sales
              </p>
              <p className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
                TSh 30,000
              </p>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Uwekezaji wa TSh 30,000 utaboresha uwezo wako wa ku-handle
              objections ili zisiwe sababu ya kupoteza wateja na mauzo tena.
            </p>

            <div className="mt-10">
              <WhatsAppButton
                label="Agiza Kitabu Sasa"
                variant="light"
                icon="whatsapp"
                fullWidth
                className="sm:w-auto"
              />
            </div>
          </Reveal>

          <Stagger className="mt-14 space-y-0">
            {STEPS.map((step, i) => (
              <StaggerItem key={step}>
                <div className="flex items-center gap-5 border-t border-white/15 py-5 last:border-b">
                  <span className="font-display text-2xl text-white/40 italic tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-medium text-white/90 sm:text-base">
                    {step}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="relative">
          <BookMockup />
        </Reveal>
      </div>
    </section>
  )
}
