const PREFILLED_MESSAGE =
  "Habari!\n\nNingependa kupata E book yangu kwa 30,000/=. Naomba maelekezo ya malipo na upokeaji."

export const WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "255746274010"
).replace(/\D/g, "")

export function getWhatsAppHref(): string | null {
  if (!WHATSAPP_NUMBER) return null
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`
}
