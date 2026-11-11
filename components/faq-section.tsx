import { Badge } from "@/components/ui/badge"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"

export const FAQS = [
  {
    q: "Kitabu hiki kinahusu nini?",
    a: "Kinahusu namna ya kushughulikia objections za wateja ili kuboresha mazungumzo ya mauzo na kuongeza uwezo wa kufunga deals.",
  },
  {
    q: "Nani anaweza kusoma kitabu hiki?",
    a: "Mtu yeyote anayeuza bidhaa au huduma, wakiwemo sales representatives, entrepreneurs na business owners.",
  },
  {
    q: "Bei ya kitabu ni kiasi gani?",
    a: "TSh 30,000.",
  },
  {
    q: "Ninawezaje kuagiza?",
    a: "Bonyeza kitufe cha WhatsApp na utume ujumbe wa kuagiza.",
  },
  {
    q: "Je, kinafaa kwa mtu anayeanza sales?",
    a: "Ndiyo. Maudhui yake yanalenga kuwasaidia wauzaji kuboresha namna wanavyoshughulikia objections.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="border-navy/30 font-mono text-[11px] tracking-[0.28em] text-navy uppercase"
          >
            FAQ
          </Badge>
          <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink uppercase sm:text-4xl lg:text-5xl">
            Maswali Kuhusu Kitabu cha 20 Objections That Cost You Sales
          </h2>
          <p className="mt-5 text-base font-medium text-ash sm:text-lg">
            Majibu ya haraka kuhusu kitabu, bei na namna ya kuagiza nakala yako.
          </p>
        </Reveal>

        <Stagger className="mx-auto mt-14 max-w-screen-sm">
          {FAQS.map((f, i) => (
            <StaggerItem key={f.q}>
              <div className="mb-8 flex gap-4">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-mist font-mono text-xs font-semibold text-navy ring-1 ring-line">
                  {i + 1}
                </span>
                <div>
                  <h3 className="mb-2 font-medium text-ink">{f.q}</h3>
                  <p className="text-sm leading-relaxed text-ash">{f.a}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
