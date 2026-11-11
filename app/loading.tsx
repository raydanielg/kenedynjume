import { Spinner } from "@/components/ui/spinner"

export default function Loading() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-white">
      <p className="text-sm font-extrabold tracking-[0.3em] text-ink uppercase">
        20 <span className="text-ash">Objections</span>
      </p>
      <p className="text-[10px] font-medium tracking-[0.2em] text-ash uppercase">
        That cost you sales
      </p>
      <Spinner size={20} color="#062b49" />
    </div>
  )
}
