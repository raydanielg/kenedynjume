"use client"

import { useEffect } from "react"
import { trackWhatsAppClick } from "@/lib/analytics"

/**
 * Delegated tracker: any element with data-track-wa="location" fires
 * whatsapp_click + purchase_intent GA events when clicked.
 */
export function WhatsAppTrack() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element).closest?.("[data-track-wa]")
      if (!el) return
      trackWhatsAppClick(el.getAttribute("data-track-wa") ?? "unknown")
    }
    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])
  return null
}
