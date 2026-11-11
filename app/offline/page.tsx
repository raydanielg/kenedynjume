import type { Metadata } from "next"
import { WifiOff } from "lucide-react"
import { RetryButton } from "./retry-button"

export const metadata: Metadata = {
  title: "Hauna Muunganisho",
  robots: { index: false },
}

export default function OfflinePage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-white px-6 text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-mist">
        <WifiOff className="size-7 text-navy" strokeWidth={1.5} />
      </span>
      <p className="mt-8 text-[11px] font-semibold tracking-[0.28em] text-ash uppercase">
        20 Objections That Cost You Sales
      </p>
      <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-ink uppercase sm:text-3xl">
        Hauna muunganisho wa internet
      </h1>
      <p className="mt-4 max-w-sm text-base leading-relaxed text-ash">
        Angalia internet yako kisha ujaribu tena.
      </p>
      <div className="mt-8">
        <RetryButton />
      </div>
    </main>
  )
}
