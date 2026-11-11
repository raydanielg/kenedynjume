import { TestimonialGlobe } from "@/components/ui/testimonial-globe"
import type { GlobeTestimonial } from "@/components/ui/testimonial-globe"

const ITEMS: GlobeTestimonial[] = [
  {
    id: "kenedy",
    quote:
      "Kitabu hiki kimekusanya objections 20 zinazopoteza mauzo — na majibu halisi ya kuzishughulikia.",
    name: "Kenedy Njume",
    role: "Mwandishi",
    company: "High Return Consulting",
    city: "Dar es Salaam",
    country: "TZ",
    lat: -6.79,
    lng: 39.21,
    image: "/images/kenedy-portrait.png",
    rating: 5,
    tone: 1,
  },
  {
    id: "amina",
    quote:
      "Nimebadilika kabisa jinsi ninavyoshughulikia mteja anaposema bei iko juu.",
    name: "Amina K.",
    role: "Sales Professional",
    city: "Dar es Salaam",
    country: "TZ",
    lat: -6.37,
    lng: 38.7,
    image: "/images/training-1.jpg",
    rating: 5,
    tone: 2,
  },
  {
    id: "baraka",
    quote:
      "Sasa najua la kusema mteja akisema 'nitakurudia' — sikupotezi wateja tena.",
    name: "Baraka M.",
    role: "Entrepreneur",
    city: "Arusha",
    country: "TZ",
    lat: -3.37,
    lng: 36.68,
    image: "/images/training-2.jpg",
    rating: 5,
    tone: 3,
  },
  {
    id: "neema",
    quote:
      "Mazungumzo yangu ya mauzo yamekuwa ya kuaminika zaidi tangu nisome kitabu hiki.",
    name: "Neema S.",
    role: "Business Owner",
    city: "Mwanza",
    country: "TZ",
    lat: -2.52,
    lng: 32.9,
    image: "/images/training-3.jpg",
    rating: 4,
    tone: 4,
  },
  {
    id: "joseph",
    quote:
      "Objections za supplier mwingine zilinivunja — kitabu hiki kimenipa majibu.",
    name: "Joseph T.",
    role: "Sales Representative",
    city: "Dodoma",
    country: "TZ",
    lat: -6.16,
    lng: 35.75,
    image: "/images/training-1.jpg",
    rating: 5,
    tone: 5,
  },
  {
    id: "rehema",
    quote: "Nimetumia maswali ya kitabu kufunga deals mbili wiki hii pekee.",
    name: "Rehema L.",
    role: "Marketing Director",
    city: "Mbeya",
    country: "TZ",
    lat: -8.9,
    lng: 33.45,
    image: "/images/training-2.jpg",
    rating: 5,
    tone: 1,
  },
  {
    id: "zawadi",
    quote:
      "Mteja akisema 'ngoja nikafikirie' sasa ninajua jibu sahihi la kumpa.",
    name: "Zawadi H.",
    role: "Account Manager",
    city: "Zanzibar",
    country: "TZ",
    lat: -6.17,
    lng: 39.19,
    image: "/images/training-3.jpg",
    rating: 5,
    tone: 2,
  },
  {
    id: "wanjiru",
    quote:
      "Our team stopped losing deals at the last minute. The objection scripts just work.",
    name: "Wanjiru K.",
    role: "Operations Director",
    company: "Kilele Pay",
    city: "Nairobi",
    country: "KE",
    lat: -1.29,
    lng: 36.82,
    image: "/images/training-1.jpg",
    rating: 5,
    tone: 3,
  },
  {
    id: "omari",
    quote:
      "Kitabu kisicho na ujinga — mifano halisi ya kujibu wateja Tanzanian market.",
    name: "Omari J.",
    role: "Sales Lead",
    city: "Mombasa",
    country: "KE",
    lat: -4.05,
    lng: 39.67,
    image: "/images/training-2.jpg",
    rating: 4,
    tone: 4,
  },
  {
    id: "nakato",
    quote:
      "I used the 'spouse objection' script the same week I read it. Closed the deal.",
    name: "Nakato S.",
    role: "Field Sales Agent",
    city: "Kampala",
    country: "UG",
    lat: 0.35,
    lng: 32.58,
    image: "/images/training-3.jpg",
    rating: 5,
    tone: 5,
  },
  {
    id: "mugisha",
    quote:
      "Rahisi kusoma, rahisi kutumia. Kila objection ina jibu lake wazi.",
    name: "Mugisha P.",
    role: "Business Developer",
    city: "Kigali",
    country: "RW",
    lat: -1.94,
    lng: 30.06,
    image: "/images/training-1.jpg",
    rating: 5,
    tone: 1,
  },
  {
    id: "tembo",
    quote:
      "The questions chapter alone changed how I qualify prospects.",
    name: "Tembo C.",
    role: "Key Accounts",
    city: "Lusaka",
    country: "ZM",
    lat: -15.41,
    lng: 28.28,
    image: "/images/training-2.jpg",
    rating: 5,
    tone: 2,
  },
  {
    id: "dube",
    quote:
      "Finally a sales book that talks about real objections, not theory.",
    name: "Sipho D.",
    role: "Regional Sales Manager",
    city: "Johannesburg",
    country: "ZA",
    lat: -26.2,
    lng: 28.05,
    image: "/images/training-3.jpg",
    rating: 4,
    tone: 3,
  },
  {
    id: "farah",
    quote:
      "Practical, direct, and it works across different markets. Highly recommended.",
    name: "Farah A.",
    role: "Sales Consultant",
    city: "Dubai",
    country: "AE",
    lat: 25.2,
    lng: 55.27,
    image: "/images/training-1.jpg",
    rating: 5,
    tone: 4,
  },
]

export function TestimonialsSection() {
  return (
    <TestimonialGlobe
      id="testimonials"
      items={ITEMS}
      eyebrow="Testimonials"
      heading="Anayefuata kutoa shuhuda ni wewe!"
      caption="Wasomaji na wataalamu wa mauzo kutoka nchi mbalimbali wanaotumia mbinu za kitabu hiki."
      autoplay
      interval={4000}
      className="scroll-mt-24 bg-white py-10 lg:py-16"
      labels={{
        previous: "Shuhuda iliyopita",
        next: "Shuhuda inayofuata",
        pin: "Onyesha shuhuda kutoka kwa",
      }}
    />
  )
}
