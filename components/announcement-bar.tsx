import { ArrowRight } from "lucide-react"

export function AnnouncementBar() {
  return (
    <div className="bg-navy text-white">
      <a
        href="#the-book"
        className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-semibold tracking-[0.25em] uppercase transition-colors hover:text-white/80 sm:text-xs"
      >
        The sales playbook you need to close more deals
        <ArrowRight className="size-3.5" aria-hidden />
      </a>
    </div>
  )
}
