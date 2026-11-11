import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"

const FAQS = [
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
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-ash uppercase sm:text-xs">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink uppercase sm:text-4xl">
            Maswali yanayoulizwa mara kwa mara
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-line"
              >
                <AccordionTrigger className="py-5 text-left text-base font-bold tracking-tight text-ink hover:text-navy hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-ash sm:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
