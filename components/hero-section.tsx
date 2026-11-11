"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"
import { BookMockup } from "@/components/book-mockup"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { buttonClasses } from "@/components/ui/button"

const CREDIBILITY = [
  "Practical sales strategies",
  "Real-world objection handling",
  "Better conversations. More closed deals.",
]

const ease = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  const reduce = useReducedMotion()
  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        }

  return (
    <section id="home" className="scroll-mt-24 overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-x-10 lg:gap-y-0 lg:px-8 lg:pt-20 lg:pb-28">
        {/* 1 — Intro (mobile: top, desktop: left) */}
        <div className="lg:col-start-1 lg:row-start-1">
          <motion.p
            {...fadeUp(0)}
            className="text-[11px] font-semibold tracking-[0.28em] text-navy uppercase sm:text-xs"
          >
            For sales professionals, entrepreneurs &amp; business owners
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 text-[clamp(1.8rem,7.5vw,3.4rem)] leading-[1.05] font-extrabold tracking-tight text-ink uppercase"
          >
            Umepoteza wateja wangapi kwa{" "}
            <span className="bg-navy px-2 text-white box-decoration-clone">
              kushindwa kujibu objections
            </span>{" "}
            zao?
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-xl text-base leading-relaxed text-ash sm:text-lg"
          >
            Unazungumza na mteja. Ameonyesha interest. Unaamini kabisa kwamba
            unakaribia ku-close deal. Ghafla anatoa objection. Je, unajua cha
            kumjibu?
          </motion.p>
        </div>

        {/* 2 — Book (mobile: after paragraph, desktop: right column spanning both rows) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 40, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="relative lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <div
            aria-hidden
            className="absolute inset-8 -z-0 rounded-full bg-navy/5 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute top-6 right-2 -z-0 size-24 rounded-full border-[10px] border-navy/10 sm:right-10 sm:size-32"
          />
          <BookMockup priority className="relative" />
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
            className="absolute bottom-4 left-3 rounded-2xl bg-navy px-5 py-4 text-white shadow-[0_20px_40px_-16px_rgba(0,0,0,0.5)] sm:left-8"
          >
            <p className="text-[10px] font-semibold tracking-[0.25em] text-white/60 uppercase">
              Get your copy
            </p>
            <p className="mt-1 text-xl font-extrabold tracking-tight">
              TSh 30,000
            </p>
          </motion.div>
        </motion.div>

        {/* 3 — Actions (mobile: after book, desktop: left column second row) */}
        <div className="lg:col-start-1 lg:row-start-2">
          <motion.ul {...fadeUp(0.3)} className="space-y-3">
            {CREDIBILITY.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm font-medium text-ink"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-mist">
                  <Check className="size-3 text-navy" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.p
            {...fadeUp(0.4)}
            className="mt-8 flex items-baseline gap-2"
          >
            <span className="text-2xl font-extrabold tracking-tight text-ink">
              TSh 30,000
            </span>
            <span className="text-xs font-medium tracking-[0.15em] text-navy uppercase">
              per copy
            </span>
          </motion.p>

          <motion.div
            {...fadeUp(0.5)}
            className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
          >
            <WhatsAppButton
              label="Nunua Kitabu Sasa"
              fullWidth
              className="sm:w-auto"
            />
            <a
              href="#the-book"
              className={buttonClasses({
                type: "secondary",
                shape: "square",
                size: "large",
                fullWidth: true,
                className:
                  "px-7 text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto",
              })}
            >
              Jifahamishe Zaidi
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
