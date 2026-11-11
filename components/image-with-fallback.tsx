"use client"

import Image from "next/image"
import { useState, type ReactNode } from "react"
import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Renders a public/ image with next/image. If the file doesn't exist yet,
 * shows a tasteful placeholder card naming the file to add — or a custom
 * `fallback` node when provided.
 */
export function ImageWithFallback({
  src,
  alt,
  label,
  fallback,
  className,
  imgClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  src: string
  alt: string
  label?: string
  fallback?: ReactNode
  className?: string
  imgClassName?: string
  sizes?: string
  priority?: boolean
}) {
  const [failed, setFailed] = useState(false)

  if (failed && fallback) {
    return <>{fallback}</>
  }

  if (failed) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 border border-dashed border-line bg-mist p-6 text-center",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="size-8 text-ash/60" strokeWidth={1.25} />
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-ash uppercase">
            {label ?? "Image placeholder"}
          </p>
          <p className="mt-1 font-mono text-[11px] text-ash/70">
            {src.replace(/^\//, "public/")}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
        onError={() => setFailed(true)}
      />
    </div>
  )
}
