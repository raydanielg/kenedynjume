import { Reveal } from "@/components/reveal"

export function AuthorSection() {
  return (
    <section
      id="about-kenedy"
      className="scroll-mt-24 border-b border-line bg-white"
    >
      <div className="mx-auto max-w-[900px] px-4 py-14 sm:px-6 lg:py-20">
        <Reveal>
          <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-navy uppercase sm:text-4xl">
            Mimi ni nani?
          </h2>
          <p className="mt-8 text-2xl font-bold text-navy">KENEDY NJUME</p>
          <p className="mt-1 text-base text-ash sm:text-lg">
            Sales Trainer | Entrepreneur | Founder, High Return Consulting.
          </p>

          <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink">
            <p>
              Nina uzoefu wa zaidi ya miaka 5 katika sales, nimefundisha Sales
              Professionals 2,200+ na kushirikiana na makampuni 160+.
            </p>
            <p>
              Nimewahi kupitia changamoto ya kushindwa ku-handle objections, na
              nimeona wauzaji wengi wakipoteza wateja kwa sababu hiyo hiyo.
            </p>
            <p>
              Ndiyo maana nimeamua kushiriki maarifa haya kupitia kitabu hiki.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
