"use client"

import { useEffect, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ExpandIcon,
} from "@hugeicons/core-free-icons"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { Reveal } from "@/components/reveal"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

const TESTIMONIALS = [
  { src: "/images/testimonial-1.jpg", alt: "Testimonial from a reader — 1" },
  { src: "/images/testimonial-2.jpg", alt: "Testimonial from a reader — 2" },
  { src: "/images/testimonial-3.jpg", alt: "Testimonial from a reader — 3" },
]

function TestimonialCard({
  position,
  item,
  index,
  cardSize,
  onSelect,
}: {
  position: number
  item: { src: string; alt: string }
  index: number
  cardSize: number
  onSelect: (position: number) => void
}) {
  const isCenter = position === 0

  return (
    <button
      type="button"
      onClick={() => onSelect(position)}
      aria-label={isCenter ? `Expand ${item.alt}` : `Show ${item.alt}`}
      className={cn(
        "absolute top-1/2 left-1/2 cursor-pointer border-2 transition-all duration-500 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy",
        isCenter
          ? "z-10 border-navy bg-white"
          : "z-0 border-line bg-mist hover:border-navy/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath:
          "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)",
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -40 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px rgba(6,43,73,0.15)"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-line"
        style={{ right: -2, top: 48, width: SQRT_5000, height: 2 }}
        aria-hidden
      />
      <ImageWithFallback
        src={item.src}
        alt={item.alt}
        label={`Testimonial ${index + 1}`}
        className="absolute inset-0"
        sizes="(max-width: 640px) 290px, 365px"
      />
      <span
        className={cn(
          "absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase",
          isCenter ? "bg-navy text-white" : "bg-white/90 text-ash"
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      {isCenter && (
        <span className="absolute top-14 right-4 grid size-9 place-items-center rounded-full bg-white/90 text-navy shadow">
          <HugeiconsIcon icon={ExpandIcon} className="size-4" />
        </span>
      )}
    </button>
  )
}

export function TestimonialsSection() {
  const [cardSize, setCardSize] = useState(365)
  const [list, setList] = useState(TESTIMONIALS)
  const [zoomed, setZoomed] = useState(false)

  useEffect(() => {
    const updateSize = () =>
      setCardSize(window.matchMedia("(min-width: 640px)").matches ? 365 : 290)
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const handleMove = (steps: number) => {
    const next = [...list]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = next.shift()
        if (!item) return
        next.push(item)
      }
    } else if (steps < 0) {
      for (let i = steps; i < 0; i++) {
        const item = next.pop()
        if (!item) return
        next.unshift(item)
      }
    }
    setList(next)
  }

  const handleSelect = (position: number) => {
    if (position === 0) setZoomed(true)
    else handleMove(position)
  }

  const centerIndex = Math.floor(list.length / 2)

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

        <Reveal className="mt-8">
          <div className="relative h-[560px] w-full overflow-hidden">
            {list.map((t, index) => (
              <TestimonialCard
                key={t.src}
                item={t}
                index={index}
                position={index - centerIndex}
                cardSize={cardSize}
                onSelect={handleSelect}
              />
            ))}

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              <button
                type="button"
                onClick={() => handleMove(-1)}
                aria-label="Previous testimonial"
                className="grid size-12 place-items-center border-2 border-line bg-white text-ink transition-colors hover:border-navy hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:size-14"
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => handleMove(1)}
                aria-label="Next testimonial"
                className="grid size-12 place-items-center border-2 border-line bg-white text-ink transition-colors hover:border-navy hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy sm:size-14"
              >
                <HugeiconsIcon icon={ArrowRight01Icon} className="size-5" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6 text-center">
          <p className="text-xs tracking-[0.18em] text-ash/70 uppercase">
            Real screenshots from readers are added here — no fabricated reviews
          </p>
        </Reveal>
      </div>

      <Dialog open={zoomed} onOpenChange={setZoomed}>
        <DialogContent
          className="max-w-3xl border-none bg-transparent p-0 shadow-none"
          showCloseButton
        >
          <DialogTitle className="sr-only">
            {list[centerIndex]?.alt ?? "Testimonial"}
          </DialogTitle>
          {list[centerIndex] && (
            <ImageWithFallback
              src={list[centerIndex].src}
              alt={list[centerIndex].alt}
              label={`Testimonial ${centerIndex + 1}`}
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
