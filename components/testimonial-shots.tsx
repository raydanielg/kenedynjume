"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon, ArrowRight01Icon, WhatsappIcon } from "@hugeicons/core-free-icons"

const SHOTS = [
  {
    src: "/images/testimonial-wa-1.webp",
    alt: "WhatsApp testimonial: msomaji akisema kitabu kimemgusa kwenye objections zote",
    quote: "“Objection zote zimenigusa 🙌”",
    ratio: "1290 / 2222",
  },
  {
    src: "/images/testimonial-wa-2.webp",
    alt: "WhatsApp testimonial: objection 04 na 10 zimemsaidia ku-close deals 04",
    quote: "“Zimeniwezesha ku-close deals 04”",
    ratio: "1289 / 1637",
  },
  {
    src: "/images/testimonial-wa-3.webp",
    alt: "WhatsApp testimonial: msomaji ame-close deal ya 2.2M baada ya kusoma kitabu",
    quote: "“Nime-close deal ya 2.2M — leo!”",
    ratio: "1290 / 2310",
  },
]

export function TestimonialShots() {
  const scroller = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollTo = (i: number) => {
    const el = scroller.current
    if (!el) return
    const slide = el.children[i] as HTMLElement | undefined
    slide?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    })
  }

  const onScroll = () => {
    const el = scroller.current
    if (!el) return
    const slides = Array.from(el.children) as HTMLElement[]
    const center = el.scrollLeft + el.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    slides.forEach((s, i) => {
      const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - center)
      if (d < bestDist) {
        bestDist = d
        best = i
      }
    })
    setActive(best)
  }

  return (
    <div className="relative">
      {/* Scroller */}
      <div
        ref={scroller}
        onScroll={onScroll}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:snap-none lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {SHOTS.map((shot) => (
          <figure
            key={shot.src}
            className="w-[72%] shrink-0 snap-center self-start sm:w-[300px] lg:w-auto lg:flex-1"
          >
            {/* Phone frame */}
            <div className="rounded-[2rem] bg-ink p-1.5 shadow-[0_24px_50px_-20px_rgba(3,30,53,0.45)] ring-1 ring-ink/10 transition-transform duration-300 hover:-translate-y-1.5 sm:rounded-[2.4rem] sm:p-2">
              <div
                className="relative overflow-hidden rounded-[1.6rem] bg-white sm:rounded-[1.9rem]"
                style={{ aspectRatio: shot.ratio }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 72vw, (max-width: 1024px) 300px, 30vw"
                  className="object-contain"
                />
              </div>
            </div>
            {/* Real quote chip */}
            <figcaption className="mt-4 flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mist px-3 py-1.5 text-[11px] font-bold text-ink sm:text-xs">
                <HugeiconsIcon
                  icon={WhatsappIcon}
                  className="size-3.5 text-[#25D366]"
                  strokeWidth={2}
                />
                {shot.quote}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Controls — mobile only (desktop sees all 3) */}
      <div className="mt-2 flex items-center justify-center gap-4 lg:hidden">
        <button
          type="button"
          aria-label="Shuhuda iliyopita"
          onClick={() => scrollTo(Math.max(0, active - 1))}
          className="flex size-10 items-center justify-center rounded-full border border-line bg-white text-navy shadow-sm transition-colors hover:bg-navy hover:text-white"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
        </button>
        <div className="flex gap-1.5" aria-hidden>
          {SHOTS.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Nenda kwa shuhuda ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={
                "h-1.5 rounded-full transition-all duration-300 " +
                (i === active ? "w-6 bg-navy" : "w-1.5 bg-ash/30")
              }
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Shuhuda inayofuata"
          onClick={() => scrollTo(Math.min(SHOTS.length - 1, active + 1))}
          className="flex size-10 items-center justify-center rounded-full border border-line bg-white text-navy shadow-sm transition-colors hover:bg-navy hover:text-white"
        >
          <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
        </button>
      </div>
    </div>
  )
}
