"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons"

const SHOTS = [
  {
    src: "/images/testimonial-wa-5.webp",
    alt: "WhatsApp testimonial kutoka Tanzania — msomaji akisema kitabu kimemgusa kwenye objections zote",
    quote: "“Objection zote zimenigusa”",
    ratio: "1289 / 2700",
  },
  {
    src: "/images/testimonial-wa-4.webp",
    alt: "WhatsApp testimonial kutoka Burundi — msomaji ame-close deals 12",
    quote: "“Closed 12 deals — incredible!”",
    ratio: "1290 / 2459",
  },
  {
    src: "/images/testimonial-wa-6.webp",
    alt: "WhatsApp testimonial kutoka Tanzania — msomaji ame-close deal ya 2.2M",
    quote: "“Nime-close deal ya 2.2M”",
    ratio: "1290 / 2480",
  },
  {
    src: "/images/testimonial-wa-2.webp",
    alt: "WhatsApp testimonial kutoka Tanzania — objection 04 na 10 zimemsaidia ku-close deals 04",
    quote: "“Zimeniwezesha ku-close deals 04”",
    ratio: "1289 / 1787",
  },
]

export function TestimonialShots() {
  const scroller = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()

  const scrollTo = (i: number) => {
    const el = scroller.current
    const slide = el?.children[i] as HTMLElement | undefined
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
      <div
        ref={scroller}
        onScroll={onScroll}
        className="-mx-4 flex snap-x snap-mandatory items-start gap-5 overflow-x-auto px-4 pb-2 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [scrollbar-width:none] sm:-mx-6 sm:gap-6 sm:px-6 lg:mx-0 lg:px-2 [&::-webkit-scrollbar]:hidden"
      >
        {SHOTS.map((shot) => (
          <figure
            key={shot.src}
            className="w-[86%] shrink-0 snap-center select-none sm:w-[460px]"
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_50px_-20px_rgba(3,30,53,0.4)] ring-1 ring-line transition-transform duration-300 hover:-translate-y-1.5">
              <div
                className="relative bg-white"
                style={{ aspectRatio: shot.ratio }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 86vw, 460px"
                  className="object-contain"
                  draggable={false}
                />
              </div>
            </div>
            <figcaption className="mt-4 text-center text-xs font-bold text-ink sm:text-sm">
              {shot.quote}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Swipe hint + dots */}
      <div className="mt-5 flex flex-col items-center gap-3">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.18em] text-ash uppercase">
          <motion.span
            animate={reduce ? {} : { x: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="flex"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="size-3.5" />
          </motion.span>
          Swipe kuona zaidi
        </p>
        <div className="flex gap-1.5">
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
      </div>
    </div>
  )
}
