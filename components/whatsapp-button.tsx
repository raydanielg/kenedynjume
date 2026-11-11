import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import { getWhatsAppHref } from "@/lib/whatsapp"
import { buttonClasses } from "@/components/ui/button"

type Variant = "dark" | "light" | "outline"

const variantType: Record<Variant, "primary" | "secondary"> = {
  dark: "primary",
  light: "secondary",
  outline: "secondary",
}

export function WhatsAppButton({
  label,
  variant = "dark",
  className,
  icon = "arrow",
  devNote = false,
  fullWidth = false,
}: {
  label: string
  variant?: Variant
  className?: string
  icon?: "arrow" | "whatsapp" | "none"
  devNote?: boolean
  fullWidth?: boolean
}) {
  const href = getWhatsAppHref()

  const iconData =
    icon === "arrow" ? ArrowRight01Icon : icon === "whatsapp" ? WhatsappIcon : null

  const classes = cn(
    buttonClasses({
      type: variantType[variant],
      shape: "square",
      size: "large",
      fullWidth,
    }),
    "group gap-2.5 px-7 text-sm font-semibold tracking-[0.08em] uppercase [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-0.5",
    variant === "light" &&
      "hover:!bg-white hover:!text-[#062b49] hover:!fill-[#062b49] hover:!border-white/60 hover:!shadow-[0_18px_36px_-14px_rgba(255,255,255,0.35)]",
    className
  )

  if (!href) {
    return (
      <span
        className={cn(
          "inline-flex flex-col items-center gap-1.5",
          fullWidth && "w-full"
        )}
      >
        <span
          className={cn(classes, "cursor-not-allowed opacity-60")}
          aria-disabled="true"
        >
          {label}
          {iconData && <HugeiconsIcon icon={iconData} className="size-4" />}
        </span>
        <span className="font-mono text-[11px] tracking-normal text-ash normal-case">
          Dev: set NEXT_PUBLIC_WHATSAPP_NUMBER
        </span>
      </span>
    )
  }

  return (
    <span
      className={cn(
        "inline-flex flex-col items-center gap-1.5",
        fullWidth && "w-full"
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {label}
        {iconData && <HugeiconsIcon icon={iconData} className="size-4" />}
      </a>
      {devNote && (
        <span className="text-[11px] tracking-normal text-ash normal-case">
          Orders via WhatsApp
        </span>
      )}
    </span>
  )
}
