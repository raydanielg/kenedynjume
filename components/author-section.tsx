import { Reveal } from "@/components/reveal"
import { ImageWithFallback } from "@/components/image-with-fallback"

const TRAINING_IMAGES = [
  {
    src: "/images/training-2.jpg",
    alt: "Sales professionals at a High Return Consulting workshop",
  },
  {
    src: "/images/training-3.jpg",
    alt: "Kenedy Njume training a corporate sales team",
  },
]

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

        {/* Training photos — status strip */}
        <Reveal className="mt-10">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-navy">
              <ImageWithFallback
                src="/images/book-cover-removebg-preview.png"
                alt="20 Objections That Cost You Sales by Kenedy Njume — ebook"
                label="Book cover"
                className="absolute inset-0"
                imgClassName="object-contain p-4 sm:p-8"
                sizes="(max-width: 640px) 33vw, 30vw"
              />
              <p className="absolute top-3 right-3 left-3 text-center text-[8px] font-bold tracking-[0.22em] text-white/70 uppercase sm:text-[10px]">
                Ebook · Available online
              </p>
              <p className="absolute right-3 bottom-3 left-3 text-center text-[8px] font-bold tracking-[0.22em] text-white uppercase sm:text-[10px]">
                Get yours today
              </p>
            </div>
            {TRAINING_IMAGES.map((img, i) => (
              <ImageWithFallback
                key={img.src}
                src={img.src}
                alt={img.alt}
                label={`Training photo ${i + 1}`}
                className="aspect-[3/4] w-full rounded-xl ring-1 ring-line"
                sizes="(max-width: 640px) 33vw, 30vw"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
