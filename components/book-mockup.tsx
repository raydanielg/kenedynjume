"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const THICKNESS = 40 // px — book depth for the CSS fallback

/**
 * Shows the real book render (transparent-background 3D mockup).
 * If the file is missing, a pure-CSS 3D book stands in — so the page never
 * breaks, and swapping the real artwork in later is a one-file drop-in.
 */
export function BookMockup({
  className,
  coverSrc = "/images/book-cover-removebg-preview.png",
  priority = false,
}: {
  className?: string
  coverSrc?: string
  priority?: boolean
}) {
  const [loaded, setLoaded] = useState(false)
  const [missing, setMissing] = useState(false)

  if (missing) {
    return <CssBook className={className} />
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[440px]">
        <Image
          src={coverSrc}
          alt="20 Objections That Cost You Sales — kitabu cha Kenedy Njume"
          width={456}
          height={547}
          priority={priority}
          sizes="(max-width: 640px) 85vw, 440px"
          className={cn(
            "h-auto w-full drop-shadow-[0_45px_45px_rgba(0,0,0,0.45)] transition-all duration-700",
            loaded ? "opacity-100" : "animate-pulse opacity-60"
          )}
          onLoad={() => setLoaded(true)}
          onError={() => setMissing(true)}
        />
      </div>
    </div>
  )
}

/* Pure-CSS 3D book used only when no cover image exists. */
function CssBook({ className }: { className?: string }) {
  const t = THICKNESS / 2
  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative mx-auto aspect-[2/3] w-full max-w-[300px] [perspective:1600px] sm:max-w-[360px]">
        <div
          className="absolute inset-0 [transform-style:preserve-3d]"
          style={{ transform: "rotateY(-18deg) rotateX(4deg) rotateZ(1deg)" }}
        >
          <div
            className="absolute inset-0 rounded-md bg-[#062b49]"
            style={{ transform: `translateZ(-${t}px)` }}
          />
          <div
            className="absolute top-[1.5%] h-[97%] bg-[repeating-linear-gradient(90deg,#fafafa_0px,#fafafa_2px,#e3e3e3_2px,#e3e3e3_4px)]"
            style={{ right: -t, width: THICKNESS, transform: "rotateY(90deg)" }}
          />
          <div
            className="absolute top-0 flex h-full flex-col justify-between rounded-l-sm bg-[#031e35] py-8"
            style={{ left: -t, width: THICKNESS, transform: "rotateY(90deg)" }}
          >
            <span className="text-[7px] font-bold tracking-[0.3em] whitespace-nowrap text-white [writing-mode:vertical-rl]">
              20 OBJECTIONS THAT COST YOU SALES
            </span>
            <span className="text-[6px] font-semibold tracking-[0.3em] whitespace-nowrap text-neutral-400 [writing-mode:vertical-rl]">
              KENEDY NJUME
            </span>
          </div>
          <div
            className="absolute inset-0 overflow-hidden rounded-r-md rounded-l-[2px] shadow-[0_60px_80px_-24px_rgba(0,0,0,0.45)] ring-1 ring-black/20"
            style={{ transform: `translateZ(${t}px)` }}
          >
            <FallbackCover />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-black/25" />
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-4 h-8 w-[72%] rounded-[50%] bg-black/25 blur-2xl" />
    </div>
  )
}

function FallbackCover() {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#031e35] p-6 text-white">
      <div className="flex items-center justify-between border-b border-white/20 pb-3">
        <span className="text-[9px] font-semibold tracking-[0.35em] uppercase">
          Sales Playbook
        </span>
        <span className="text-[9px] font-semibold tracking-[0.35em]">№ 01</span>
      </div>
      <div>
        <p className="font-display text-7xl leading-none font-medium sm:text-8xl">
          20
        </p>
        <p className="mt-2 text-2xl leading-tight font-extrabold tracking-tight uppercase sm:text-3xl">
          Objections
        </p>
        <p className="text-sm font-semibold tracking-[0.28em] text-neutral-400 uppercase">
          That Cost You Sales
        </p>
        <p className="mt-4 max-w-[24ch] text-[10px] leading-relaxed text-neutral-500">
          How to Handle Customer Objections and Close More Deals
        </p>
      </div>
      <div className="flex items-end justify-between border-t border-white/20 pt-3">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
          Kenedy Njume
        </span>
        <span className="size-2 rounded-full bg-white" />
      </div>
    </div>
  )
}
