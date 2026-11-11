"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AlertCircle, BookOpen, Home, ShoppingBag, UserRound } from "lucide-react"
import { cn } from "@/lib/utils"
import { getWhatsAppHref } from "@/lib/whatsapp"

const ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "the-problem", label: "Objections", icon: AlertCircle },
  { id: "the-book", label: "Kitabu", icon: BookOpen },
  { id: "about-kenedy", label: "About", icon: UserRound },
]

export function BottomNav() {
  const [active, setActive] = useState("home")
  const wa = getWhatsAppHref()

  useEffect(() => {
    const sections = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => el !== null
    )
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="App navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <div className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {ITEMS.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            aria-label={item.label}
            aria-current={active === item.id ? "page" : undefined}
            className="flex min-h-[56px] min-w-[64px] flex-col items-center justify-center gap-1 py-2 transition-colors"
          >
            <item.icon
              className={cn(
                "size-5 transition-colors",
                active === item.id ? "text-navy" : "text-ash/70"
              )}
              strokeWidth={active === item.id ? 2.25 : 1.75}
            />
            <span
              className={cn(
                "text-[10px] font-semibold tracking-wide",
                active === item.id ? "text-navy" : "text-ash/70"
              )}
            >
              {item.label}
            </span>
          </Link>
        ))}

        {wa ? (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agiza kitabu — TSh 30,000 kupitia WhatsApp"
            className="my-auto flex min-w-[72px] flex-col items-center gap-1"
          >
            <span className="flex size-11 items-center justify-center rounded-full bg-navy text-white shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)] transition-transform active:scale-95">
              <ShoppingBag className="size-5" strokeWidth={2} />
            </span>
            <span className="text-[10px] font-bold tracking-wide text-navy">
              Agiza
            </span>
          </a>
        ) : (
          <span className="my-auto flex min-w-[72px] flex-col items-center gap-1">
            <span className="flex size-11 items-center justify-center rounded-full bg-navy/50 text-white">
              <ShoppingBag className="size-5" strokeWidth={2} />
            </span>
            <span className="text-[10px] font-bold tracking-wide text-ash">
              Agiza
            </span>
          </span>
        )}
      </div>
    </nav>
  )
}
