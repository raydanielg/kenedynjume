"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ExpandIcon } from "@hugeicons/core-free-icons"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { Reveal, Stagger, StaggerItem } from "@/components/reveal"

const TESTIMONIALS = [
  { src: "/images/testimonial-1.jpg", alt: "Testimonial from a reader — 1" },
  { src: "/images/testimonial-2.jpg", alt: "Testimonial from a reader — 2" },
  { src: "/images/testimonial-3.jpg", alt: "Testimonial from a reader — 3" },
]

export function TestimonialsSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="testimonials" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-ash uppercase sm:text-xs">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight text-ink uppercase sm:text-4xl lg:text-5xl">
            Anayefuata kutoa shuhuda ni wewe!
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ash sm:text-lg">
            Jiunge na watu wanaochukua hatua kuboresha uwezo wao wa kuuza.
          </p>
        </Reveal>

        <Stagger className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {TESTIMONIALS.map((t, i) => (
            <StaggerItem
              key={t.src}
              className="w-[78vw] shrink-0 snap-center sm:w-auto sm:shrink"
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full cursor-pointer rounded-2xl border border-line bg-mist text-left transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-[0_24px_40px_-24px_rgba(0,0,0,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
                aria-label={`Open ${t.alt}`}
              >
                <ImageWithFallback
                  src={t.src}
                  alt={t.alt}
                  label={`Testimonial ${i + 1}`}
                  className="aspect-[4/5] w-full rounded-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
                  <HugeiconsIcon icon={ExpandIcon} className="size-4" />
                </span>
              </button>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-10 text-center">
          <p className="text-xs tracking-[0.18em] text-ash/70 uppercase">
            Real screenshots from readers are added here — no fabricated reviews
          </p>
        </Reveal>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          className="max-w-3xl border-none bg-transparent p-0 shadow-none"
          showCloseButton
        >
          <DialogTitle className="sr-only">
            {active !== null ? TESTIMONIALS[active].alt : "Testimonial"}
          </DialogTitle>
          {active !== null && (
            <ImageWithFallback
              src={TESTIMONIALS[active].src}
              alt={TESTIMONIALS[active].alt}
              label={`Testimonial ${active + 1}`}
              className="max-h-[80vh] min-h-[50vh] w-full rounded-2xl"
              imgClassName="object-contain"
              sizes="90vw"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
