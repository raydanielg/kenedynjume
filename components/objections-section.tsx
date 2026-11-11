import { HugeiconsIcon } from "@hugeicons/react"
import { PlusSignIcon } from "@hugeicons/core-free-icons"
import { Stagger, StaggerItem } from "@/components/reveal"
import { cn } from "@/lib/utils"

const OBJECTIONS = [
  {
    quote: "Bei yenu iko juu.",
    description:
      "Mteja anaona bei yako ni kubwa kuliko thamani anayoielewa.",
    span: "lg:col-span-3",
  },
  {
    quote: "Nitakurudia.",
    description:
      "Mteja anaahirisha maamuzi na mazungumzo yanaanza kupoteza nguvu.",
    span: "lg:col-span-3",
  },
  {
    quote: "Tuna supplier mwingine.",
    description:
      "Mteja tayari ana relationship na supplier mwingine.",
    span: "lg:col-span-4",
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

function Corner() {
  const cls =
    "pointer-events-none absolute size-3.5 text-ash/60 select-none"
  return (
    <>
      <HugeiconsIcon icon={PlusSignIcon} className={cn(cls, "-top-2 -left-2")} aria-hidden />
      <HugeiconsIcon icon={PlusSignIcon} className={cn(cls, "-top-2 -right-2")} aria-hidden />
      <HugeiconsIcon icon={PlusSignIcon} className={cn(cls, "-bottom-2 -left-2")} aria-hidden />
      <HugeiconsIcon icon={PlusSignIcon} className={cn(cls, "-bottom-2 -right-2")} aria-hidden />
    </>
  )
}

export function ObjectionsSection() {
  return (
    <section id="the-problem" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Stagger className="grid grid-cols-1 gap-0 sm:gap-0 lg:grid-cols-6">
          {/* headline cell — sits inside the grid, bottom-right on desktop */}
          <StaggerItem className="order-first lg:order-last lg:col-span-4">
            <div className="relative flex h-full flex-col justify-center border border-dashed border-ash/30 p-8 sm:p-12">
              <Corner />
              <p className="text-[11px] font-semibold tracking-[0.28em] text-navy uppercase sm:text-xs">
                The problem
              </p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight font-extrabold tracking-tight text-ink uppercase sm:text-4xl lg:text-5xl">
                Jinsi ya Kushughulikia Customer Objections na Kupunguza
                Kupoteza Mauzo
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ash sm:text-lg">
                Unaweza kuwa na bidhaa bora, bei nzuri na huduma nzuri. Lakini
                ukishindwa kujibu objections za mteja, unaweza kupoteza mauzo.
              </p>
            </div>
          </StaggerItem>

          {OBJECTIONS.map((o, i) => (
            <StaggerItem key={o.quote} className={cn(o.span)}>
              <article className="group relative flex h-full flex-col justify-between border border-dashed border-ash/30 p-6 transition-colors duration-300 hover:bg-mist sm:p-8">
                <Corner />
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl leading-snug font-extrabold tracking-tight text-ink uppercase sm:text-2xl">
                    “{o.quote}”
                  </h3>
                  <span className="font-mono text-xs text-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-ash sm:mt-12">
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
