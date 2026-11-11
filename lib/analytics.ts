export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ""

type EventParams = {
  book_title?: string
  price?: number
  currency?: string
  button_location?: string
  page_location?: string
  [key: string]: string | number | undefined
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(event: string, params: EventParams = {}) {
  if (typeof window === "undefined" || !GA_ID || !window.gtag) return
  window.gtag("event", event, {
    page_location: window.location.href,
    ...params,
  })
}

export function trackWhatsAppClick(buttonLocation: string) {
  trackEvent("whatsapp_click", {
    book_title: "20 Objections That Cost You Sales",
    price: 30000,
    currency: "TZS",
    button_location: buttonLocation,
  })
  trackEvent("purchase_intent", {
    book_title: "20 Objections That Cost You Sales",
    price: 30000,
    currency: "TZS",
    button_location: buttonLocation,
  })
}
