"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Rotate01Icon } from "@hugeicons/core-free-icons"
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
      <HugeiconsIcon icon={Rotate01Icon} className="size-4" />
      Jaribu tena
    </button>
  )
}
