import { Reveal } from "@/components/reveal"
import { WhatsAppButton } from "@/components/whatsapp-button"

export function FinalCta() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-36">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-white/50 uppercase sm:text-xs">
            One last question
          </p>
          <h2 className="mt-6 text-3xl leading-[1.1] font-extrabold tracking-tight uppercase sm:text-5xl">
            Next time customer anasema{" "}
            <span className="font-display font-medium normal-case italic">
              “Bei yenu iko juu”
            </span>
            , utajibu nini?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Usiache objection iwe mwisho wa mazungumzo yako na mteja.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-sm font-semibold tracking-[0.2em] text-white/60 uppercase">
              20 Objections That Cost You Sales
            </p>
            <p className="text-4xl font-extrabold tracking-tight">TSh 30,000</p>
            <div className="mt-4">
              <WhatsAppButton label="Nunua Kitabu Sasa" variant="light" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
