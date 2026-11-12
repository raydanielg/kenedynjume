"use client"

import { useRef } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { BookOpen01Icon, Call02Icon } from "@hugeicons/core-free-icons"
import { TimelineContent } from "@/components/ui/timeline-animation"
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal"
import { ImageWithFallback } from "@/components/image-with-fallback"
import { getWhatsAppHref, WHATSAPP_NUMBER } from "@/lib/whatsapp"
import type { Variants } from "framer-motion"

const revealVariants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.4, duration: 0.5 },
  }),
  hidden: { y: -20, opacity: 0 },
}

const scaleVariants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.4, duration: 0.5 },
  }),
  hidden: { opacity: 0 },
}

const TRAINING_IMAGES = [
  {
    src: "/images/training-2.jpg",
    alt: "Sales professionals at a High Return Consulting workshop",
  },
  {
    src: "/images/training-3.jpg",
    alt: "Kenedy Njume training a corporate sales team",
  },
]

export function AuthorSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const waHref = getWhatsAppHref() ?? "#order"
  const telHref = WHATSAPP_NUMBER ? `tel:+${WHATSAPP_NUMBER}` : waHref

  return (
    <section id="about-kenedy" className="scroll-mt-24 bg-mist px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl" ref={heroRef}>
        <div className="relative">
          {/* Eyebrow + quick actions */}
          <div className="absolute -top-3 z-10 flex w-[85%] items-center justify-between sm:-top-2 md:top-0 lg:top-4">
            <div className="flex items-center gap-2 text-xl">
              <span className="animate-spin text-navy [animation-duration:4s]">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm font-medium tracking-[0.15em] text-ash uppercase"
              >
                Mimi ni nani?
              </TimelineContent>
            </div>
            <div className="flex gap-4">
              {[
                { href: telHref, icon: Call02Icon, label: "Call Kenedy", num: 2 },
                {
                  href: "#the-book",
                  icon: BookOpen01Icon,
                  label: "See the book",
                  num: 3,
                },
              ].map((a) => (
                <TimelineContent
                  as="a"
                  key={a.label}
                  animationNum={a.num}
                  timelineRef={heroRef}
                  customVariants={revealVariants}
                  href={a.href}
                  target={a.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    a.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={a.label}
                  className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-lg border border-line bg-white text-navy transition-colors hover:bg-navy hover:text-white sm:h-6 sm:w-6 md:h-8 md:w-8"
                >
                  <HugeiconsIcon icon={a.icon} className="size-3 sm:size-4" strokeWidth={1.75} />
                </TimelineContent>
              ))}
            </div>
          </div>

          {/* Notched banner */}
          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="group relative"
          >
            <svg className="h-full w-full" width="100%" height="100%" viewBox="0 0 100 40">
              <defs>
                <clipPath id="clip-inverted" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                href="/images/training-1.jpg"
              />
            </svg>
          </TimelineContent>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-between py-3 text-sm lg:justify-start">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="mb-2 flex items-center gap-2 text-xs sm:text-base">
                <span className="font-bold text-navy">5+</span>
                <span className="text-ash">years of experience</span>
                <span className="text-line">|</span>
              </div>
              <div className="mb-2 flex items-center gap-2 text-xs sm:text-base">
                <span className="font-bold text-navy">2,200+</span>
                <span className="text-ash">professionals trained</span>
              </div>
            </TimelineContent>
            <div className="right-0 bottom-16 flex flex-row-reverse gap-4 lg:absolute lg:flex-col lg:gap-0">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-2 flex items-center gap-2 text-2xl sm:text-3xl lg:text-4xl"
              >
                <span className="font-semibold text-navy">160+</span>
                <span className="text-ash uppercase">companies</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-8 text-2xl !leading-[110%] font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.12}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 0.4,
                }}
              >
                Kenedy Njume — Sales Trainer na Entrepreneur
              </VerticalCutReveal>
            </h2>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid gap-8 text-ash md:grid-cols-2"
            >
              <div className="text-xs sm:text-base">
                <p className="text-justify leading-relaxed">
                  Kwa uzoefu wa zaidi ya miaka 5 katika sales, nimefundisha Sales
                  Professionals 2,200+ na kushirikiana na makampuni 160+.
                </p>
                <p className="mt-4 text-justify leading-relaxed">
                  Changamoto ya objection handling ni jambo ambalo binafsi
                  nimewahi kulipitia na pia kushuhudia likiwa kikwazo kikubwa
                  kwa wauzaji wengi.
                </p>
              </div>
              <div className="text-xs sm:text-base">
                <p className="text-justify leading-relaxed">
                  Niligundua kuwa wauzaji wengi wanapoteza wateja kwa kukosa
                  majibu na maswali sahihi wanapokutana na objections.
                </p>
                <p className="mt-4 text-justify leading-relaxed font-medium text-ink">
                  Hilo ndilo lililonihamasisha kuandika kitabu hiki.
                </p>
              </div>
            </TimelineContent>
          </div>

          <div className="md:col-span-1">
            <div className="text-left md:text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-2 text-2xl font-bold text-navy"
              >
                KENEDY NJUME
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-8 text-sm text-ash"
              >
                Sales Trainer | Entrepreneur | Founder, High Return Consulting
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p className="font-medium text-ink">
                  Uko tayari kuacha kupoteza deals kwa sababu ya objections?
                </p>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Training gallery — status-strip layout */}
        <div className="mt-16 grid grid-cols-3 gap-2 sm:gap-4">
          {/* Ebook promo panel */}
          <TimelineContent
            as="div"
            animationNum={16}
            timelineRef={heroRef}
            customVariants={revealVariants}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-navy ring-1 ring-line">
              <ImageWithFallback
                src="/images/book-cover-removebg-preview.png"
                alt="20 Objections That Cost You Sales by Kenedy Njume — ebook"
                label="Book cover"
                className="absolute inset-0"
                imgClassName="object-contain p-6 sm:p-10"
                sizes="(max-width: 640px) 33vw, 30vw"
              />
              <p className="absolute top-3 right-3 left-3 text-center text-[8px] font-bold tracking-[0.25em] text-white/70 uppercase sm:top-5 sm:text-[11px]">
                Ebook · Available online
              </p>
              <p className="absolute right-3 bottom-3 left-3 text-center text-[8px] font-bold tracking-[0.25em] text-white uppercase sm:bottom-5 sm:text-[11px]">
                Get yours today
              </p>
            </div>
          </TimelineContent>

          {TRAINING_IMAGES.map((img, i) => (
            <TimelineContent
              as="div"
              key={img.src}
              animationNum={17 + i}
              timelineRef={heroRef}
              customVariants={revealVariants}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                label={`Training photo ${i + 1}`}
                className="aspect-[3/4] w-full rounded-2xl shadow-sm ring-1 ring-line"
                sizes="(max-width: 640px) 33vw, 30vw"
              />
            </TimelineContent>
          ))}
        </div>
      </div>
    </section>
  )
}
