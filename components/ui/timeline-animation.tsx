"use client"

import { motion, type Variants } from "framer-motion"
import type { ComponentType, ElementType, ReactNode, RefObject } from "react"

interface TimelineContentProps {
  children?: ReactNode
  animationNum?: number
  timelineRef?: RefObject<HTMLElement | null>
  customVariants?: Variants
  as?: ElementType
  className?: string
  [key: string]: unknown
}

/**
 * Staggered scroll-reveal wrapper. Each child declares an `animationNum`
 * (its order in the sequence) which is passed to `customVariants` as `i`,
 * so variants can compute `delay: i * 0.4`.
 */
const motionCache = new Map<ElementType, ComponentType<Record<string, unknown>>>()

function getMotionComponent(as: ElementType): ComponentType<Record<string, unknown>> {
  let component = motionCache.get(as)
  if (!component) {
    component = motion.create(as) as ComponentType<Record<string, unknown>>
    motionCache.set(as, component)
  }
  return component
}

export function TimelineContent({
  as = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  children,
  ...props
}: TimelineContentProps) {
  void timelineRef
  const MotionComponent = getMotionComponent(as)

  return (
    // eslint-disable-next-line react-hooks/static-components -- memoized in module-level cache
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={animationNum}
      variants={customVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
