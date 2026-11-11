import { FAQS } from "@/components/faq-section"

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "")

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "20 Objections That Cost You Sales",
        url: SITE_URL,
        inLanguage: "sw",
        publisher: { "@type": "Organization", name: "High Return Consulting" },
      },
      {
        "@type": "Organization",
        name: "High Return Consulting",
        url: SITE_URL,
        founder: { "@type": "Person", name: "Kenedy Njume" },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+255746274010",
          contactType: "sales",
          areaServed: "TZ",
          availableLanguage: ["sw", "en"],
        },
      },
      {
        "@type": "Person",
        name: "Kenedy Njume",
        jobTitle: "Sales Trainer | Entrepreneur | Founder",
        worksFor: { "@type": "Organization", name: "High Return Consulting" },
        url: `${SITE_URL}/#about-kenedy`,
      },
      {
        "@type": "Book",
        name: "20 Objections That Cost You Sales",
        alternateName: "How to Handle Customer Objections and Close More Deals",
        author: {
          "@type": "Person",
          name: "Kenedy Njume",
        },
        inLanguage: "sw",
        image: `${SITE_URL}/images/book-cover.png`,
        url: SITE_URL,
        offers: {
          "@type": "Offer",
          price: "30000",
          priceCurrency: "TZS",
          availability: "https://schema.org/InStock",
          url: SITE_URL,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
