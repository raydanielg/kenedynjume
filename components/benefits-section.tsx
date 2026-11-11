import { HugeiconsIcon } from "@hugeicons/react"
import { Tick02Icon } from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"

const BENEFITS = [
  {
    title: "Handle price objections",
    text: "Jifunze namna ya kujibu wateja wanaosema bei yako iko juu.",
  },
  {
    title: "Respond with confidence",
    text: "Jenga ujasiri unapokutana na objections.",
  },
  {
    title: "Ask better questions",
    text: "Jifunze maswali yanayokusaidia kuelewa sababu halisi ya mteja kusita.",
  },
  {
    title: "Handle competitor objections",
    text: "Jifunze namna ya kuzungumza na wateja wenye supplier mwingine.",
  },
  {
    title: "Overcome hesitation",
    text: "Shughulikia wateja wanaosema wanahitaji muda wa kufikiria.",
  },
  {
    title: "Close more deals",
    text: "Boresha mazungumzo yako ya mauzo na uongeze uwezo wa ku-convert prospects.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="scroll-mt-24 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="flex flex-col items-start gap-4">
          <Badge
            variant="outline"
            className="border-navy/30 font-mono text-[11px] tracking-[0.28em] text-navy uppercase"
          >
            What you will gain
          </Badge>
          <div className="flex flex-col gap-3">
            <h2 className="max-w-xl text-3xl tracking-tighter text-ink sm:text-4xl lg:text-5xl">
              Unachoweza Kujifunza Kuhusu Sales Objection Handling
            </h2>
            <p className="max-w-xl text-base leading-relaxed tracking-tight text-ash sm:text-lg">
              Ujuzi wa vitendo unaoweza kutumia mara moja kwenye mazungumzo
              yako ya mauzo.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 items-start gap-x-10 gap-y-8 pt-2 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <StaggerItem key={b.title}>
              <div className="flex flex-row items-start gap-5">
                <HugeiconsIcon
                  icon={Tick02Icon}
                  className="mt-1 size-4 shrink-0 text-navy"
                  strokeWidth={2.5}
                />
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-ink">{b.title}</p>
                  <p className="text-sm leading-relaxed text-ash">{b.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
