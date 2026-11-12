import { BookMockup } from "@/components/book-mockup"
import { BookPreview } from "@/components/book-preview"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Reveal } from "@/components/reveal"

export function BookSection() {
  return (
    <section id="the-book" className="scroll-mt-24 overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        <Reveal className="relative order-2 lg:order-1">
          <BookPreview
            className="group relative block w-full cursor-pointer"
            trigger={
              <>
                <BookMockup />
                <span className="absolute right-4 bottom-6 rounded-full bg-navy px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-white uppercase shadow-lg transition-transform duration-200 group-hover:scale-105 sm:right-8">
                  Fungua dukizo
                </span>
              </>
            }
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-ash uppercase sm:text-xs">
              Nimekuandalia suluhisho!
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink uppercase sm:text-4xl lg:text-5xl">
              20 Objections That Cost You Sales
            </h2>

            <div className="mt-8 border-l-2 border-navy pl-6">
              <p className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                How to Handle Customer Objections and Close More Deals.
              </p>
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ash sm:text-lg">
              Kitabu hiki kitakufundisha nini cha kusema na nini cha kuuliza ili
              uweze ku-handle objections mbalimbali kutoka kwa wateja na
              kuongeza uwezo wako wa ku-close deals.
            </p>

            <p className="mt-6 max-w-xl rounded-2xl border border-line bg-mist p-5 font-display text-lg leading-snug text-ink italic sm:text-xl">
              “Kama unauza bidhaa au huduma yoyote, kitabu hiki ni kwa ajili
              yako.”
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ash sm:text-lg">
              Uwekezaji wa <strong className="text-ink">TSh 30,000</strong>{" "}
              utaboresha uwezo wako wa ku-handle objections ili zisiwe sababu
              ya kupoteza wateja na mauzo tena.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton label="Nunua Kitabu Sasa" />
              <BookPreview />
              <p className="text-xl font-extrabold tracking-tight text-ink">
                TSh 30,000
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
