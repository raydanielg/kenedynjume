import type { Metadata, Viewport } from "next"
import { Geist_Mono, Instrument_Serif, Public_Sans } from "next/font/google"

import "./globals.css"
import { MotionProvider } from "@/components/motion-provider"
import { Analytics } from "@/components/analytics"
import { cn } from "@/lib/utils";

const publicSans = Public_Sans({subsets:['latin'],variable:'--font-sans'})

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  applicationName: "20 Objections",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "20 Objections",
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/icons/icon-192.png",
  },
  title: {
    default: "20 Objections That Cost You Sales | Kenedy Njume",
    template: "%s | 20 Objections That Cost You Sales",
  },
  description:
    "Jifunze namna ya kushughulikia objections za wateja, kujibu pingamizi za mauzo na kufunga deals nyingi zaidi. Pata kitabu cha Kenedy Njume kwa TSh 30,000.",
  keywords: [
    "20 Objections That Cost You Sales",
    "how to handle customer objections",
    "sales objection handling",
    "how to close more sales",
    "sales training Tanzania",
    "sales techniques",
    "jinsi ya kuongeza mauzo",
    "mafunzo ya mauzo Tanzania",
    "mbinu za kushawishi wateja kununua",
    "jinsi ya kujibu wateja wanaosema bei ni kubwa",
    "vitabu vya biashara na mauzo",
    "Kenedy Njume",
    "High Return Consulting",
  ],
  authors: [{ name: "Kenedy Njume" }],
  creator: "Kenedy Njume",
  publisher: "High Return Consulting",
  category: "Business & Sales",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: false },
  openGraph: {
    url: "/",
    title: "20 Objections That Cost You Sales",
    description:
      "How to Handle Customer Objections and Close More Deals — kitabu cha Kenedy Njume. TSh 30,000.",
    type: "website",
    locale: "sw_TZ",
    siteName: "20 Objections That Cost You Sales",
    images: [{ url: "/images/book-cover.jpg", width: 1145, height: 1374 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "20 Objections That Cost You Sales",
    description:
      "How to Handle Customer Objections and Close More Deals — kitabu cha Kenedy Njume. TSh 30,000.",
    images: ["/images/book-cover.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#062b49",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="sw"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", publicSans.variable, instrument.variable)}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
