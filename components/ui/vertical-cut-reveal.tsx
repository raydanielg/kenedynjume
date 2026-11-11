"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

type SplitBy = "characters" | "words" | "string"
type StaggerFrom = "first" | "last" | "center" | number

interface VerticalCutRevealProps {
  children: string
  splitBy?: SplitBy
  staggerDuration?: number
  staggerFrom?: StaggerFrom
  /** Swap the direction of the top/bottom halves. */
  reverse?: boolean
  transition?: Record<string, unknown>
  containerClassName?: string
  wordLevelClassName?: string
  elementLevelClassName?: string
}

/**
 * Slices each text unit into a top and bottom half which slide in from
 * opposite directions and meet in the middle. Ported from the 21st.dev
 * "Vertical Cut Reveal" component.
 */
export function VerticalCutReveal({
  children,
  splitBy = "characters",
  staggerDuration = 0.15,
  staggerFrom = "first",
  reverse = false,
  transition = {},
  containerClassName,
  wordLevelClassName,
  elementLevelClassName,
}: VerticalCutRevealProps) {
  const reduce = useReducedMotion()

  const words =
    splitBy === "string" ? [children] : children.split(" ")
  const units = words.map((word) =>
    splitBy === "characters" ? word.split("") : [word]
  )
  const flatCount = units.reduce((n, u) => n + u.length, 0)
  const centerIndex = (flatCount - 1) / 2

  let running = 0
  const orderFor = (index: number) =>
    staggerFrom === "first"
      ? index
      : staggerFrom === "last"
        ? flatCount - 1 - index
        : staggerFrom === "center"
          ? Math.abs(index - centerIndex) * 2
          : Math.abs(index - staggerFrom)

  const baseDelay = typeof transition.delay === "number" ? transition.delay : 0

  const makeHalf = (top: boolean): Variants => {
    const off = (top !== reverse ? -1 : 1) * 120
    const t = { duration: 0.5, ...transition } as Record<string, unknown>
    if (t.type === "spring") delete t.duration
    return {
      hidden: { y: `${off}%`, opacity: 0 },
      visible: (order: number) => ({
        y: "0%",
        opacity: 1,
        transition: { ...t, delay: baseDelay + order * staggerDuration },
      }),
    }
  }

  if (reduce) return <span className={containerClassName}>{children}</span>

  return (
    <motion.span
      className={cn("inline-block", containerClassName)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      aria-label={children}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          className={cn("inline-flex whitespace-pre", wordLevelClassName)}
        >
          {units[wi].map((unit, ui) => {
            const index = running++
            const order = orderFor(index)
            return (
              <span
                key={ui}
                className={cn(
                  "relative inline-block overflow-hidden align-baseline",
                  elementLevelClassName
                )}
                aria-hidden
              >
                <motion.span
                  className="absolute inset-0"
                  style={{ clipPath: "inset(0 0 50% 0)" }}
                  variants={makeHalf(true)}
                  custom={order}
                >
                  {unit}
                </motion.span>
                <motion.span
                  className="absolute inset-0"
                  style={{ clipPath: "inset(50% 0 0 0)" }}
                  variants={makeHalf(false)}
                  custom={order}
                >
                  {unit}
                </motion.span>
                <span className="invisible">{unit}</span>
              </span>
            )
          })}
          {wi < words.length - 1 && <span>{"\u00A0"}</span>}
        </span>
      ))}
    </motion.span>
  )
}
