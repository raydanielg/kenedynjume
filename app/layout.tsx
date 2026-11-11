import type { Metadata, Viewport } from "next"
import { Geist_Mono, Instrument_Serif, Public_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MotionProvider } from "@/components/motion-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
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
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
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
    default: "20 Objections That Cost You Sales — Kenedy Njume",
    template: "%s — 20 Objections That Cost You Sales",
  },
  description:
    "Kitabu cha Kenedy Njume kinachokufundisha namna ya kushughulikia objections za wateja, kuboresha mazungumzo ya mauzo na kufunga deals zaidi. TSh 30,000.",
  openGraph: {
    title: "20 Objections That Cost You Sales",
    description:
      "How to Handle Customer Objections and Close More Deals — kitabu cha Kenedy Njume. TSh 30,000.",
    type: "website",
    locale: "sw_TZ",
    siteName: "20 Objections That Cost You Sales",
    images: [{ url: "/images/book-cover.png", width: 1145, height: 1374 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "20 Objections That Cost You Sales",
    description:
      "How to Handle Customer Objections and Close More Deals — kitabu cha Kenedy Njume. TSh 30,000.",
    images: ["/images/book-cover.png"],
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
        <ThemeProvider forcedTheme="light">
          <MotionProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </MotionProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
