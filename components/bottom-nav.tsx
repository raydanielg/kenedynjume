"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  AlertCircleIcon,
  BookOpen01Icon,
  Home01Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

const ITEMS = [
  { id: "home", label: "Home", icon: Home01Icon },
  { id: "the-problem", label: "Objections", icon: AlertCircleIcon },
  { id: "the-book", label: "Kitabu", icon: BookOpen01Icon },
  { id: "about-kenedy", label: "About", icon: UserCircleIcon },
]

export function BottomNav() {
  const [active, setActive] = useState("home")

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
            <HugeiconsIcon
              icon={item.icon}
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
      </div>
    </nav>
  )
}
