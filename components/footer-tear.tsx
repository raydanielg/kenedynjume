import PushpinTearFooter from "@/components/ui/pushpin-tear-footer"
import { getWhatsAppHref } from "@/lib/whatsapp"

export function FooterTear() {
  const wa = getWhatsAppHref() ?? "#order"
  const year = new Date().getFullYear()

  return (
    <PushpinTearFooter
      brand="20 objections."
      name="kenedy njume"
      logo={
        <span
          style={{
            fontSize: "1.5em",
            fontWeight: 800,
            letterSpacing: "0.14em",
          }}
        >
          20
        </span>
      }
      logoHref="#home"
      sheet="#062b49"
      paper="#f5f5f5"
      paperInk="#062b49"
      seed={20}
      height="min(100svh, 780px)"
      email="0746 274 010"
      newsletter={null}
      status={{ label: "inapokea oda — WhatsApp", href: wa }}
      mark="TSh 30,000"
      timeZone="Africa/Dar_es_Salaam"
      timeLabel="EAT"
      socials={[{ icon: "chat", label: "WhatsApp", href: wa }]}
      columns={[
        {
          title: "navigate",
          links: [
            { label: "Home", href: "#home" },
            { label: "The Problem", href: "#the-problem" },
            { label: "The Book", href: "#the-book" },
          ],
          cta: { label: "order.", href: wa },
        },
        {
          title: "more",
          links: [
            { label: "About Kenedy", href: "#about-kenedy" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "FAQ", href: "#faq" },
          ],
          cta: { label: "agiza.", href: wa },
        },
      ]}
      chat={{ label: "agiza — tsh 30,000", href: wa }}
      sideLinks={[
        { icon: "shield", label: "privacy", href: "#" },
        { icon: "doc", label: "terms", href: "#" },
      ]}
      copyright={`© ${year} Kenedy Njume — High Return Consulting`}
      credit="learn. handle. close."
      handle={{ label: "WhatsApp — 0746 274 010", href: wa }}
    />
  )
}
