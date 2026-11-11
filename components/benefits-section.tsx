import {
  Clock,
  MessageCircleQuestion,
  ShieldCheck,
  Tag,
  TrendingUp,
  Users,
} from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"

const BENEFITS = [
  {
    icon: Tag,
    title: "Handle price objections",
    text: "Jifunze namna ya kujibu wateja wanaosema bei yako iko juu.",
  },
  {
    icon: ShieldCheck,
    title: "Respond with confidence",
    text: "Jenga ujasiri unapokutana na objections.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Ask better questions",
    text: "Jifunze maswali yanayokusaidia kuelewa sababu halisi ya mteja kusita.",
  },
  {
    icon: Users,
    title: "Handle competitor objections",
    text: "Jifunze namna ya kuzungumza na wateja wenye supplier mwingine.",
  },
  {
    icon: Clock,
    title: "Overcome hesitation",
    text: "Shughulikia wateja wanaosema wanahitaji muda wa kufikiria.",
  },
  {
    icon: TrendingUp,
    title: "Close more deals",
    text: "Boresha mazungumzo yako ya mauzo na kuongeza uwezo wako wa ku-convert prospects.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="scroll-mt-24 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-ash uppercase sm:text-xs">
            What you will gain
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink uppercase sm:text-4xl lg:text-5xl">
            Unapata nini ndani ya kitabu hiki?
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-5">
          {BENEFITS.map((b) => (
            <StaggerItem key={b.title}>
              <article className="group h-full rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-[0_24px_40px_-24px_rgba(0,0,0,0.25)] sm:p-7">
                <span className="flex size-11 items-center justify-center rounded-full bg-[#062b49]/10 text-navy transition-transform duration-300 group-hover:scale-110">
                  <b.icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-sm font-extrabold tracking-tight text-ink uppercase sm:text-base">
                  {b.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-ash sm:text-sm">
                  {b.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
