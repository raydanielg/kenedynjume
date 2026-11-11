import { ImageWithFallback } from "@/components/image-with-fallback"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"

const METRICS = [
  { value: "2,200+", label: "Sales professionals trained" },
  { value: "160+", label: "Companies worked with" },
  { value: "5+", label: "Years of experience" },
]

const TRAINING_IMAGES = [
  { src: "/images/training-1.jpg", alt: "Kenedy Njume leading a sales training session" },
  { src: "/images/training-2.jpg", alt: "Sales professionals at a High Return Consulting workshop" },
  { src: "/images/training-3.jpg", alt: "Kenedy Njume training a corporate sales team" },
]

export function AuthorSection() {
  return (
    <section id="about-kenedy" className="scroll-mt-24 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <ImageWithFallback
                src="/images/kenedy-portrait.png"
                alt="Professional portrait of Kenedy Njume, Sales Trainer and Founder of High Return Consulting"
                label="Kenedy Njume — portrait"
                className="aspect-[4/5] w-full rounded-2xl shadow-[0_30px_60px_-30px_rgba(0,0,0,0.4)] ring-1 ring-line"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur">
                <p className="text-xs font-bold tracking-[0.15em] text-ink uppercase">
                  Kenedy Njume
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="text-[11px] font-semibold tracking-[0.28em] text-ash uppercase sm:text-xs">
                About the author
              </p>
              <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink uppercase sm:text-4xl lg:text-5xl">
                Mimi ni nani?
              </h2>
              <p className="mt-4 text-lg font-bold tracking-tight text-ink">
                Kenedy Njume
              </p>
              <p className="mt-1 text-sm font-medium tracking-wide text-ash">
                Sales Trainer | Entrepreneur | Founder, High Return Consulting
              </p>
            </Reveal>

            <Stagger className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6">
              {METRICS.map((m) => (
                <StaggerItem key={m.label}>
                  <p className="text-2xl font-extrabold tracking-tight text-navy sm:text-4xl">
                    {m.value}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold tracking-[0.14em] text-ash uppercase sm:text-xs">
                    {m.label}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-8 space-y-4 text-base leading-relaxed text-ash">
              <p>
                Kwa uzoefu wa zaidi ya miaka 5 katika sales, nimefundisha Sales
                Professionals 2,200+ na kushirikiana na makampuni 160+.
              </p>
              <p>
                Changamoto ya objection handling ni jambo ambalo binafsi
                nimewahi kulipitia na pia kushuhudia likiwa kikwazo kikubwa kwa
                wauzaji wengi.
              </p>
              <p>
                Niligundua kuwa wauzaji wengi wanapoteza wateja kwa kukosa
                majibu na maswali sahihi wanapokutana na objections.
              </p>
              <p className="font-medium text-ink">
                Hilo ndilo lililonihamasisha kuandika kitabu hiki.
              </p>
            </Reveal>
          </div>
        </div>

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINING_IMAGES.map((img, i) => (
            <StaggerItem
              key={img.src}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                label={`Training photo ${i + 1}`}
                className="aspect-[4/3] w-full rounded-2xl shadow-sm ring-1 ring-line"
                sizes={
                  i === 0
                    ? "(max-width: 640px) 100vw, 66vw"
                    : "(max-width: 640px) 100vw, 33vw"
                }
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
