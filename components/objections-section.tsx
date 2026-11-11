import { HugeiconsIcon } from "@hugeicons/react"
import { QuoteUpIcon } from "@hugeicons/core-free-icons"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"
import { cn } from "@/lib/utils"

const OBJECTIONS = [
  {
    quote: "Bei yenu iko juu.",
    description:
      "Mteja anaona bei yako ni kubwa kuliko thamani anayoielewa.",
    span: "lg:col-span-4",
  },
  {
    quote: "Nitakurudia.",
    description:
      "Mteja anaahirisha maamuzi na mazungumzo yanaanza kupoteza nguvu.",
    span: "lg:col-span-2",
  },
  {
    quote: "Tuna supplier mwingine.",
    description:
      "Mteja tayari ana relationship na supplier mwingine.",
    span: "lg:col-span-2",
  },
  {
    quote: "Ngoja nikafikirie.",
    description:
      "Mteja bado hajapata sababu ya kutosha kufanya maamuzi.",
    span: "lg:col-span-2",
  },
  {
    quote: "Ngoja niongee na mume/mke wangu.",
    description: "Uamuzi unategemea mtu mwingine.",
    span: "lg:col-span-2",
  },
]

export function ObjectionsSection() {
  return (
    <section id="the-problem" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-ash uppercase sm:text-xs">
              The problem
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink uppercase sm:text-4xl lg:text-5xl">
              Unamjibu nini mteja anaposema haya?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ash sm:text-lg">
              Unaweza kuwa na bidhaa bora, bei nzuri na huduma nzuri. Lakini
              ukishindwa kujibu objections za mteja, unaweza kupoteza mauzo.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {OBJECTIONS.map((o, i) => (
            <StaggerItem key={o.quote} className={cn(o.span)}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-[0_24px_40px_-24px_rgba(0,0,0,0.25)] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <HugeiconsIcon
                    icon={QuoteUpIcon}
                    className="size-6 text-navy transition-transform duration-300 group-hover:-rotate-6"
                    strokeWidth={1.5}
                  />
                  <span className="font-mono text-xs text-ash">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <blockquote className="mt-8 text-xl leading-snug font-extrabold tracking-tight text-ink uppercase sm:text-2xl">
                  “{o.quote}”
                </blockquote>
                <p className="mt-4 text-sm leading-relaxed text-ash">
                  {o.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
