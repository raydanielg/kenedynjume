import { ArrowDownRight } from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"
import { buttonClasses } from "@/components/ui/button"

const LOSSES = [
  "Lost customers",
  "Lost commissions",
  "Lost revenue",
  "Lost business opportunities",
  "Reduced sales performance",
]

export function LostSalesSection() {
  return (
    <section id="cost" className="scroll-mt-24 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-ash uppercase sm:text-xs">
              The real cost
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink uppercase sm:text-4xl lg:text-5xl">
              Objections zinakugharimu zaidi ya unavyofikiria.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ash sm:text-lg">
              Objection moja inayoshughulikiwa vibaya inaweza kumaanisha zaidi ya
              mazungumzo yamekwisha. Kila siku, haya ndiyo yanayopotea:
            </p>
          </Reveal>

          <Stagger className="flex flex-col justify-center">
            {LOSSES.map((loss, i) => (
              <StaggerItem key={loss}>
                <div className="group flex items-baseline gap-5 border-t border-line py-5 transition-colors last:border-b hover:border-navy sm:gap-8 sm:py-6">
                  <span className="font-display text-3xl text-ash/50 italic tabular-nums sm:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="flex-1 text-xl font-extrabold tracking-tight text-ink uppercase sm:text-2xl lg:text-3xl">
                    {loss}
                  </p>
                  <ArrowDownRight
                    className="size-5 shrink-0 text-ash transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-navy"
                    strokeWidth={1.5}
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-16 lg:mt-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-display text-2xl leading-snug text-navy italic sm:text-3xl lg:text-4xl">
              “Huenda tatizo si bidhaa yako. Huenda ni namna unavyojibu
              objections.”
            </p>
            <a
              href="#the-book"
              className={buttonClasses({
                type: "secondary",
                shape: "square",
                size: "large",
                className:
                  "mt-10 px-7 text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
              })}
            >
              Jifunze jinsi ya kuzishughulikia
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
