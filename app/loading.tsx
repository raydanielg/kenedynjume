import Image from "next/image"
import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8 bg-white px-8">
      <Image
        src="/images/logo-full.png"
        alt="20 Objections That Cost You Sales — Kenedy Njume"
        width={1536}
        height={1024}
        priority
        className="w-56 max-w-full sm:w-72"
      />
      <Spinner size={30} color="#062b49" />
    </div>
  )
}
