"use client"

import { motion, useReducedMotion } from "framer-motion"
import { getWhatsAppHref } from "@/lib/whatsapp"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function WhatsAppFab() {
  const href = getWhatsAppHref()
  const reduce = useReducedMotion()
  if (!href) return null

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agiza kitabu kupitia WhatsApp — TSh 30,000"
      data-track-wa="fab"
      initial={reduce ? { opacity: 0 } : { scale: 0, opacity: 0, y: 12 }}
      animate={reduce ? { opacity: 1 } : { scale: 1, opacity: 1, y: 0 }}
      transition={
        reduce
          ? { delay: 0.8, duration: 0.3 }
          : { delay: 1.2, type: "spring", stiffness: 280, damping: 16 }
      }
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.92 }}
      className="group fixed right-4 bottom-[calc(84px+env(safe-area-inset-bottom))] z-40 flex items-center gap-3 lg:right-8 lg:bottom-8"
    >
      {/* hover label — desktop only */}
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold tracking-[0.08em] whitespace-nowrap text-white uppercase opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
        Agiza — TSh 30,000
      </span>

      <span className="relative flex size-12 items-center justify-center rounded-full bg-[#25d366] shadow-[0_12px_32px_-8px_rgba(37,211,102,0.7)] ring-2 ring-white lg:size-14">
        <span
          className="animate-fab-ping absolute inset-0 rounded-full bg-[#25d366]"
          aria-hidden
        />
        <WhatsAppIcon className="relative size-6 text-white lg:size-7" />
      </span>
    </motion.a>
  )
}
