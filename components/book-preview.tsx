"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  BookOpen01Icon,
  Cancel01Icon,
  QuoteUpIcon,
} from "@hugeicons/core-free-icons"
import { getWhatsAppHref } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/*  Pages                                                              */
/* ------------------------------------------------------------------ */

const SAMPLE_OBJECTIONS = [
  {
    n: "01",
    quote: "Bei yenu iko juu.",
    text: "Mteja anaona bei yako ni kubwa kuliko thamani anayoielewa. Kitabu kinakuonesha jinsi ya kujibu bila kupunguza bei.",
  },
  {
    n: "02",
    quote: "Nitakurudia.",
    text: "Mteja anaahirisha maamuzi na mazungumzo yanaanza kupoteza nguvu. Jifunze jinsi ya kuwarudisha kwa nguvu.",
  },
  {
    n: "03",
    quote: "Tuna supplier mwingine.",
    text: "Mteja tayari ana relationship na supplier mwingine. Hapa ndipo sales professionals wanaotenganishwa.",
  },
  {
    n: "04",
    quote: "Ngoja nikafikirie.",
    text: "Mteja bado hajapata sababu ya kutosha kufanya maamuzi. Kitabu kinakufundisha kuunda urgency ya kweli.",
  },
  {
    n: "05",
    quote: "Ngoja niongee na mume/mke wangu.",
    text: "Uamuzi unategemea mtu mwingine. Jifunze ku-handle decision makers wawili kwa wakati mmoja.",
  },
]

function Sheet({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden border border-line bg-white",
        className
      )}
    >
      {children}
    </div>
  )
}

function PageHead({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-line px-5 py-3 sm:px-7">
      <span className="text-[9px] font-semibold tracking-[0.3em] text-navy uppercase sm:text-[10px]">
        20 Objections
      </span>
      <span className="text-[9px] font-semibold tracking-[0.2em] text-ash uppercase sm:text-[10px]">
        {label}
      </span>
    </div>
  )
}

function PageFoot({ n }: { n: number }) {
  return (
    <div className="mt-auto flex items-center justify-center gap-3 px-5 py-3">
      <span className="h-px w-6 bg-line" />
      <span className="font-mono text-[10px] font-semibold text-navy">{n}</span>
      <span className="h-px w-6 bg-line" />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Fullscreen overlay                                                 */
/* ------------------------------------------------------------------ */

type FlipBookComponent = React.ComponentType<Record<string, unknown> & { children?: React.ReactNode }>

function PreviewOverlay({ onClose }: { onClose: () => void }) {
  const stageRef = React.useRef<HTMLDivElement>(null)
  const bookRef = React.useRef<{ pageFlip: () => { flipNext: () => void; flipPrev: () => void } } | null>(null)
  const [FlipBook, setFlipBook] = React.useState<FlipBookComponent | null>(null)
  const [size, setSize] = React.useState({ w: 0, h: 0 })
  const [page, setPage] = React.useState(0)
  const wa = getWhatsAppHref()

  const PAGES = 12

  // client-only load — page-flip needs the DOM
  React.useEffect(() => {
    let alive = true
    import("react-pageflip").then((m) => {
      if (alive) setFlipBook(() => m.default as unknown as FlipBookComponent)
    })
    return () => {
      alive = false
    }
  }, [])

  // lock body scroll + esc to close
  React.useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") bookRef.current?.pageFlip().flipNext()
      if (e.key === "ArrowLeft") bookRef.current?.pageFlip().flipPrev()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener("keydown", onKey)
    }
  }, [onClose])

  // measure the stage
  React.useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const ro = new ResizeObserver(() =>
      setSize({ w: el.clientWidth, h: el.clientHeight })
    )
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const portrait = size.w < 640
  const pageW = portrait
    ? Math.min(size.w - 36, 380)
    : Math.min(Math.floor((size.w - 80) / 2), 390)
  const pageH = Math.min(Math.round(pageW * 1.38), size.h - 24)

  const pages: React.ReactNode[] = [
    /* 1 — front cover (hard) */
    <div key="cover" data-density="hard" className="h-full">
      <div className="relative h-full overflow-hidden border border-line bg-white">
        <Image
          src="/images/book-cover-removebg-preview.png"
          alt="20 Objections That Cost You Sales — cover"
          fill
          sizes="400px"
          className="object-contain p-6 drop-shadow-[0_25px_30px_rgba(0,0,0,0.3)]"
          priority
        />
      </div>
    </div>,

    /* 2 — title page (navy) */
    <div key="title" className="h-full">
      <Sheet className="border-navy-deep bg-navy-deep text-white">
        <div className="flex h-full flex-col items-center justify-center px-6 text-center sm:px-8">
          <span className="h-px w-10 bg-white/40" />
          <p className="mt-6 text-[10px] font-semibold tracking-[0.35em] text-white/60 uppercase">
            Kenedy Njume
          </p>
          <h3 className="mt-4 text-2xl leading-tight font-extrabold tracking-tight uppercase sm:text-3xl">
            20 Objections That Cost You Sales
          </h3>
          <p className="mt-4 text-xs leading-relaxed text-white/70 sm:text-sm">
            How to Handle Customer Objections and Close More Deals.
          </p>
          <span className="mt-6 h-px w-10 bg-white/40" />
          <p className="mt-6 font-mono text-xs tracking-widest text-white/60">
            DUKIZO · PREVIEW
          </p>
        </div>
      </Sheet>
    </div>,

    /* 3 — intro */
    <div key="intro" className="h-full">
      <Sheet>
        <PageHead label="Utangulizi" />
        <div className="px-5 py-6 sm:px-7">
          <p className="text-[9px] font-semibold tracking-[0.3em] text-ash uppercase sm:text-[10px]">
            Kwa nini kitabu hiki
          </p>
          <h4 className="mt-3 text-lg leading-snug font-extrabold tracking-tight text-ink uppercase sm:text-xl">
            Unapoteza wateja wangapi kwa kushindwa kujibu objections zao?
          </h4>
          <p className="mt-4 text-xs leading-relaxed text-ash sm:text-sm">
            Unaweza kuwa na bidhaa bora, bei nzuri na huduma nzuri. Lakini
            ukishindwa kujibu objections za mteja, unaweza kupoteza mauzo.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-ash sm:text-sm">
            Kitabu hiki kitakufundisha nini cha kusema na nini cha kuuliza ili
            uweze ku-handle objections mbalimbali na kuongeza uwezo wako wa
            ku-close deals.
          </p>
          <p className="mt-4 border-l-2 border-navy pl-4 font-display text-sm leading-snug text-ink italic sm:text-base">
            “Kama unauza bidhaa au huduma yoyote, kitabu hiki ni kwa ajili
            yako.”
          </p>
        </div>
        <PageFoot n={3} />
      </Sheet>
    </div>,

    /* 4-8 — five sample objection pages */
    ...SAMPLE_OBJECTIONS.map((o, i) => (
      <div key={o.n} className="h-full">
        <Sheet>
          <PageHead label={`Sura · ${o.n}`} />
          <div className="flex-1 px-5 py-5 sm:px-7">
            <div className="flex items-center justify-between">
              <HugeiconsIcon icon={QuoteUpIcon} className="size-5 text-navy" strokeWidth={1.5} />
              <span className="font-mono text-[10px] text-ash">
                OBJECTION {o.n}
              </span>
            </div>
            <h4 className="mt-5 text-xl leading-snug font-extrabold tracking-tight text-ink uppercase sm:text-2xl">
              “{o.quote}”
            </h4>
            <p className="mt-4 text-xs leading-relaxed text-ash sm:text-sm">
              {o.text}
            </p>
            <div className="mt-5 rounded-xl bg-mist p-4">
              <p className="text-[9px] font-semibold tracking-[0.25em] text-navy uppercase">
                Ndani ya kitabu
              </p>
              <ul className="mt-2 space-y-1.5 text-[11px] leading-snug text-ash sm:text-xs">
                <li>— Kwa nini mteja anasema hivyo</li>
                <li>— Msamiati sahihi wa kujibu</li>
                <li>— Maswali ya kurejesha mazungumzo</li>
                <li>— Hatua za kufunga deal</li>
              </ul>
            </div>
          </div>
          <PageFoot n={4 + i} />
        </Sheet>
      </div>
    )),

    /* 9 — contents */
    <div key="toc" className="h-full">
      <Sheet>
        <PageHead label="Yaliyomo" />
        <div className="px-5 py-6 sm:px-7">
          <h4 className="text-lg font-extrabold tracking-tight text-ink uppercase sm:text-xl">
            Yaliyomo ndani
          </h4>
          <div className="mt-4 grid grid-cols-4 gap-1.5 sm:grid-cols-5">
            {Array.from({ length: 20 }, (_, i) => (
              <span
                key={i}
                className="grid aspect-square place-items-center rounded-md border border-line font-mono text-[10px] font-semibold text-navy"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-ash sm:text-xs">
            Objections 20 zilizoandaliwa kikamilifu — kila moja na sababu,
            msamiati wa kujibu, na hatua za kufunga deal. Hii ni dukizo la
            sura 5 za kwanza.
          </p>
        </div>
        <PageFoot n={9} />
      </Sheet>
    </div>,

    /* 10 — author */
    <div key="author" className="h-full">
      <Sheet>
        <PageHead label="Mwandishi" />
        <div className="flex-1 px-5 py-5 sm:px-7">
          <div className="relative mx-auto aspect-[4/5] w-3/5 overflow-hidden rounded-xl">
            <Image
              src="/images/kenedy-portrait.png"
              alt="Kenedy Njume"
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>
          <h4 className="mt-4 text-center text-base font-extrabold tracking-tight text-ink uppercase sm:text-lg">
            Kenedy Njume
          </h4>
          <p className="mt-1 text-center text-[10px] font-semibold tracking-[0.18em] text-navy uppercase sm:text-[11px]">
            Sales Trainer · Entrepreneur
          </p>
          <p className="mt-3 text-center text-[11px] leading-relaxed text-ash sm:text-xs">
            Founder, High Return Consulting · 2,200+ sales professionals ·
            160+ companies · 5+ years
          </p>
        </div>
        <PageFoot n={10} />
      </Sheet>
    </div>,

    /* 11 — CTA (navy) */
    <div key="cta" className="h-full">
      <Sheet className="border-navy-deep bg-navy-deep text-white">
        <div className="flex h-full flex-col items-center justify-center px-6 text-center sm:px-8">
          <p className="text-[9px] font-semibold tracking-[0.35em] text-white/60 uppercase sm:text-[10px]">
            Endelea kusoma
          </p>
          <h4 className="mt-4 text-xl leading-snug font-extrabold tracking-tight uppercase sm:text-2xl">
            Agiza nakala yako leo
          </h4>
          <p className="mt-3 font-mono text-xl font-bold tracking-tight sm:text-2xl">
            TSh 30,000
          </p>
          <a
            href={wa ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-[10px] bg-white px-6 text-sm font-bold tracking-wide text-navy transition-transform duration-150 hover:-translate-y-0.5"
          >
            AGIZA KUPITIA WHATSAPP
          </a>
          <p className="mt-4 text-[10px] leading-relaxed text-white/60 sm:text-xs">
            Malipo na upokeaji kupitia WhatsApp · 0746 274 010
          </p>
        </div>
      </Sheet>
    </div>,

    /* 12 — back cover (hard) */
    <div key="back" data-density="hard" className="h-full">
      <div className="flex h-full flex-col items-center justify-center border border-navy-deep bg-navy-deep px-6 text-center text-white">
        <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">20</p>
        <p className="mt-2 text-[9px] font-semibold tracking-[0.3em] text-white/60 uppercase">
          Objections that cost you sales
        </p>
        <span className="mt-6 h-px w-10 bg-white/30" />
        <p className="mt-6 font-mono text-[10px] tracking-widest text-white/50">
          HIGH RETURN CONSULTING
        </p>
      </div>
    </div>,
  ]

  const atStart = page <= 0
  const atEnd = page >= PAGES - (portrait ? 1 : 2)

  return (
    <div className="fixed inset-0 z-[80] flex flex-col bg-white">
      {/* header */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-line px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <HugeiconsIcon icon={BookOpen01Icon} className="size-4 text-navy" strokeWidth={2} />
          <p className="text-[11px] font-bold tracking-[0.22em] text-ink uppercase sm:text-xs">
            20 Objections — <span className="text-navy">Dukizo</span>
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Funga dukizo"
          className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-navy hover:text-navy"
        >
          <HugeiconsIcon icon={Cancel01Icon} className="size-5" />
        </button>
      </header>

      {/* stage */}
      <div ref={stageRef} className="relative flex flex-1 items-center justify-center overflow-hidden px-3 py-4">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 h-40 w-[140%] -translate-x-1/2 rounded-[100%] bg-navy/5 blur-3xl"
        />
        {FlipBook && size.w > 0 ? (
          <FlipBook
            {...({
              ref: bookRef,
              width: pageW,
              height: pageH,
              size: "fixed",
              minWidth: 140,
              minHeight: 200,
              maxShadowOpacity: 0.35,
              drawShadow: true,
              flippingTime: 750,
              showCover: true,
              usePortrait: portrait,
              mobileScrollSupport: true,
              onFlip: (e: { data: number }) => setPage(e.data),
            } as Record<string, unknown>)}
          >
            {pages}
          </FlipBook>
        ) : (
          <div className="flex flex-col items-center gap-3 text-ash">
            <HugeiconsIcon icon={BookOpen01Icon} className="size-8 animate-pulse text-navy" strokeWidth={1.5} />
            <p className="text-xs font-semibold tracking-[0.2em] uppercase">
              Inafungua dukizo…
            </p>
          </div>
        )}
      </div>

      {/* footer controls */}
      <footer className="flex h-16 shrink-0 items-center justify-center gap-5 border-t border-line px-4 pb-[env(safe-area-inset-bottom)]">
        <button
          type="button"
          onClick={() => bookRef.current?.pageFlip().flipPrev()}
          disabled={atStart}
          aria-label="Ukurasa uliopita"
          className="grid size-11 place-items-center rounded-full border border-line text-ink transition-colors enabled:hover:border-navy enabled:hover:text-navy disabled:opacity-30"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} className="size-5" />
        </button>
        <p className="min-w-16 text-center font-mono text-xs text-ash">
          <span className="font-bold text-navy">{page + 1}</span> / {PAGES}
        </p>
        <button
          type="button"
          onClick={() => bookRef.current?.pageFlip().flipNext()}
          disabled={atEnd}
          aria-label="Ukurasa unaofuata"
          className="grid size-11 place-items-center rounded-full border border-line text-ink transition-colors enabled:hover:border-navy enabled:hover:text-navy disabled:opacity-30"
        >
          <HugeiconsIcon icon={ArrowRight01Icon} className="size-5" />
        </button>
      </footer>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Trigger + portal                                                   */
/* ------------------------------------------------------------------ */

export function BookPreview({
  trigger,
  className,
}: {
  trigger?: React.ReactNode
  className?: string
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {trigger ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn("cursor-pointer", className)}
        >
          {trigger}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "inline-flex h-[54px] cursor-pointer items-center justify-center gap-2 rounded-[10px] border border-navy bg-white px-5 text-sm font-semibold text-navy transition-colors duration-150 hover:bg-navy/5",
            className
          )}
        >
          <HugeiconsIcon icon={BookOpen01Icon} className="size-4" />
          SOMA DUKIZO
        </button>
      )}
      {open && createPortal(<PreviewOverlay onClose={() => setOpen(false)} />, document.body)}
    </>
  )
}
