import { HugeiconsIcon } from "@hugeicons/react"
import { Tick02Icon } from "@hugeicons/core-free-icons"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"

const AUDIENCE = [
  "Sales Representatives",
  "Business Owners",
  "Entrepreneurs",
  "Real Estate Agents",
  "Insurance Agents",
  "Marketing Professionals",
  "Freelancers",
  "Consultants",
  "Anyone selling products or services",
]

export function AudienceSection() {
  return (
    <section id="audience" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-ash uppercase sm:text-xs">
            Who it&apos;s for
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink uppercase sm:text-4xl lg:text-5xl">
            Kitabu hiki ni kwa ajili ya nani?
          </h2>
        </Reveal>

        <Stagger className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map((a) => (
            <StaggerItem key={a}>
              <div className="flex h-full items-center gap-3 bg-white p-5 transition-colors duration-300 hover:bg-mist">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-navy">
                  <HugeiconsIcon icon={Tick02Icon} className="size-3.5 text-white" strokeWidth={3} />
                </span>
                <p className="text-sm font-semibold tracking-wide text-ink">
                  {a}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mx-auto mt-10 max-w-3xl text-center">
          <p className="font-display text-xl leading-relaxed text-ash italic sm:text-2xl">
            “Kama kazi yako inahusisha kushawishi, kujadiliana au kuuza, kitabu
            hiki kinaweza kukusaidia kuboresha mazungumzo yako na wateja.”
          </p>
        </Reveal>
      </div>
    </section>
  )
}
