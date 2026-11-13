import { BookMockup } from "@/components/book-mockup"
import { BookPreview } from "@/components/book-preview"

export function BookSection() {
  return (
    <section
      id="the-book"
      className="scroll-mt-24 border-b border-line bg-white"
    >
      <div className="mx-auto max-w-[900px] px-4 py-14 sm:px-6 lg:py-20">
        <div>
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
            Suluhisho
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink">
            Nimekuandalia suluhisho la changamoto za customer objections
          </p>
        </div>

        <div className="mt-10 grid items-center gap-10 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div>
            <BookPreview
              className="group relative mx-auto block w-full max-w-[390px]"
              trigger={
                <>
                  <BookMockup />
                  <span className="absolute bottom-5 left-3 rounded-2xl bg-navy px-5 py-4 text-white shadow-[0_18px_36px_-14px_rgba(3,30,53,0.5)] sm:left-5">
                    <span className="block text-lg leading-tight font-extrabold tracking-tight">
                      E book
                    </span>
                    <span className="mt-1 block text-[10px] font-medium tracking-[0.22em] text-white/55 uppercase">
                      soft copy
                    </span>
                  </span>
                </>
              }
            />
          </div>

          <div>
            <h3 className="text-2xl leading-tight font-extrabold tracking-tight text-navy uppercase sm:text-3xl">
              20 Objections That Cost You Sales
            </h3>
            <p className="mt-3 text-lg text-ash italic">
              How to Handle Customer Objections and Close More Deals.
            </p>

            <h4 className="mt-8 text-lg font-bold text-navy">Utajifunza:</h4>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink">
              <p>
                Nini cha kusema, nini cha kuuliza ili uweze ku-handle kila aina
                ya objection na ku-close deal.
              </p>
              <p>
                Kama unauza bidhaa au huduma yoyote, kitabu hiki ni kwa ajili
                yako.
              </p>
            </div>

            <p className="mt-8 text-2xl font-extrabold text-navy">
              BEI: TSH 30,000
            </p>
            <p className="mt-3 text-lg leading-relaxed text-ink">
              Wekeza kwenye maarifa yatakayokusaidia ku-handle objections na
              kuongeza uwezo wako wa ku-close deal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
