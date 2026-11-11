"use client"

import { RotateCw } from "lucide-react"
import { buttonClasses } from "@/components/ui/button"

export function RetryButton() {
  return (
    <button
      type="button"
      onClick={() => window.location.reload()}
      className={buttonClasses({
        type: "primary",
        shape: "square",
        size: "large",
        className: "gap-2 px-7",
      })}
    >
      <RotateCw className="size-4" />
      Jaribu tena
    </button>
  )
}
