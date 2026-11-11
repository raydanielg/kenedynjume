"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Menu01Icon,
} from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import { getWhatsAppHref } from "@/lib/whatsapp"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { buttonClasses } from "@/components/ui/button"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "The Problem", href: "#the-problem" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About Kenedy", href: "#about-kenedy" },
  { label: "The Book", href: "#the-book" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const wa = getWhatsAppHref()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-all duration-300",
        scrolled ? "border-line shadow-[0_8px_30px_-18px_rgba(0,0,0,0.25)]" : "border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          aria-label="20 Objections That Cost You Sales — home"
          className="flex items-center"
        >
          <Image
            src="/images/logo-mark.png"
            alt="20 Objections That Cost You Sales"
            width={1476}
            height={700}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] font-medium tracking-wide text-ash transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({
                type: "primary",
                shape: "square",
                size: "small",
                className:
                  "hidden gap-2 px-5 text-xs font-semibold tracking-[0.08em] uppercase transition-all hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex",
              })}
            >
              Get the book — TSh 30,000
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5" />
            </a>
          ) : (
            <span className="hidden items-center gap-2 rounded-full bg-navy/60 px-5 py-2.5 text-xs font-semibold tracking-[0.08em] text-white uppercase sm:inline-flex">
              Get the book — TSh 30,000
            </span>
          )}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
                aria-label="Open menu"
              >
                <HugeiconsIcon icon={Menu01Icon} className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm bg-white">
              <SheetHeader>
                <SheetTitle className="text-left text-sm font-extrabold tracking-[0.22em] uppercase">
                  20 <span className="text-ash">Objections</span>
                </SheetTitle>
              </SheetHeader>
              <ul className="mt-8 flex flex-col gap-1 px-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-mist"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 px-7">
                {wa ? (
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses({
                      type: "primary",
                      shape: "square",
                      size: "large",
                      fullWidth: true,
                      className:
                        "gap-2 text-sm font-semibold tracking-[0.08em] uppercase",
                    })}
                  >
                    Get the book — TSh 30,000
                    <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
                  </a>
                ) : (
                  <p className="font-mono text-xs text-ash">
                    Dev: set NEXT_PUBLIC_WHATSAPP_NUMBER
                  </p>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
