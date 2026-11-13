"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkBadge01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"

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
    alt: "WhatsApp testimonial — objection 04 na 10 zimemsaidia ku-close deals 04",
    quote: "“Zimeniwezesha ku-close deals 04”",
    ratio: "1289 / 1637",
  },
]

/* Duplicate the set enough times that the loop is seamless on wide screens */
const TRACK = [...SHOTS, ...SHOTS, ...SHOTS, ...SHOTS]
const SET_COUNT = 4

export function TestimonialShots() {
  const scroller = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // start one set in, so the loop can wrap in both directions
    const setWidth0 = el.scrollWidth / SET_COUNT
    if (el.scrollLeft === 0 && setWidth0 > 0) el.scrollLeft = setWidth0

    let raf = 0
    let lastInteract = 0
    const interact = () => {
      lastInteract = performance.now()
    }

    const step = () => {
      const setWidth = el.scrollWidth / SET_COUNT
      if (setWidth > 0) {
        if (performance.now() - lastInteract > 1600) {
          el.scrollLeft += 0.55
        }
        // wrap within [setWidth, 2*setWidth] — identical view either side
        while (el.scrollLeft >= 2 * setWidth) el.scrollLeft -= setWidth
        while (el.scrollLeft <= 0) el.scrollLeft += setWidth
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)

    const events = ["pointerdown", "wheel", "touchstart", "touchend"] as const
    events.forEach((e) => el.addEventListener(e, interact, { passive: true }))
    return () => {
      cancelAnimationFrame(raf)
      events.forEach((e) => el.removeEventListener(e, interact))
    }
  }, [])

  return (
    <div className="relative">
      <div
        ref={scroller}
        className="-mx-4 flex cursor-grab items-start gap-4 overflow-x-auto px-4 pb-2 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [scrollbar-width:none] active:cursor-grabbing sm:-mx-6 sm:gap-5 sm:px-6 lg:mx-0 lg:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {TRACK.map((shot, i) => (
          <figure
            key={`${shot.src}-${i}`}
            className="w-48 shrink-0 select-none sm:w-56 lg:w-60"
            draggable={false}
          >
            {/* Dashboard-style card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_-18px_rgba(3,30,53,0.35)] ring-1 ring-line transition-transform duration-300 hover:-translate-y-1.5">
              {/* panel header */}
              <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
                <HugeiconsIcon
                  icon={WhatsappIcon}
                  className="size-3.5 text-[#25D366]"
                  strokeWidth={2.2}
                />
                <span className="text-[10px] font-bold tracking-[0.14em] text-ink uppercase">
                  WhatsApp
                </span>
                <HugeiconsIcon
                  icon={CheckmarkBadge01Icon}
                  className="ml-auto size-3.5 text-navy"
                  strokeWidth={1.8}
                />
              </div>
              <div
                className="relative bg-white"
                style={{ aspectRatio: shot.ratio }}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 240px"
                  className="object-contain"
                  draggable={false}
                />
              </div>
            </div>
            <figcaption className="mt-3 text-center text-[11px] font-bold text-ink sm:text-xs">
              {shot.quote}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] font-medium tracking-[0.15em] text-ash/70 uppercase">
        Zinatembea — sogeza kuona zaidi
      </p>
    </div>
  )
}
