import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { WhatsappIcon } from "@hugeicons/core-free-icons"
import { getWhatsAppHref } from "@/lib/whatsapp"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "The Problem", href: "#the-problem" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About Kenedy", href: "#about-kenedy" },
  { label: "The Book", href: "#the-book" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
]

export function Footer() {
  const wa = getWhatsAppHref()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-sm font-extrabold tracking-[0.22em] uppercase">
              20 Objections That Cost You Sales
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              How to Handle Customer Objections and Close More Deals.
            </p>
            <p className="mt-6 text-sm font-semibold text-white/80">
              Kenedy Njume
            </p>
            <p className="mt-1 text-xs tracking-wide text-white/50">
              Sales Trainer | Entrepreneur | Founder, High Return Consulting
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-white/50 uppercase">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] text-white/50 uppercase">
              Contact
            </p>
            {wa ? (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <HugeiconsIcon icon={WhatsappIcon} className="size-4" />
                WhatsApp — order the book
              </a>
            ) : (
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-white/50">
                <HugeiconsIcon icon={WhatsappIcon} className="size-4" />
                WhatsApp (number not configured)
              </p>
            )}
            <ul className="mt-6 space-y-2.5">
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/40 transition-colors hover:text-white/70"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-white/40 transition-colors hover:text-white/70"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {year} Kenedy Njume — High Return Consulting. All rights reserved.
          </p>
          <p className="text-xs tracking-[0.2em] text-white/40 uppercase">
            TSh 30,000 — via WhatsApp
          </p>
        </div>
      </div>
    </footer>
  )
}
