"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Cancel01Icon,
  CompassIcon,
  Download01Icon,
  PlusIcon,
  Share08Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"
import { buttonClasses } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

const DISMISS_KEY = "20o-install-dismissed"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

const IOS_STEPS = [
  { icon: CompassIcon, text: "Fungua website kupitia Safari." },
  { icon: Share08Icon, text: "Bonyeza Share." },
  { icon: PlusIcon, text: "Chagua Add to Home Screen." },
  { icon: Tick02Icon, text: "Bonyeza Add." },
]

export function InstallPrompt() {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null)
  const [isIos, setIsIos] = useState(false)
  const [visible, setVisible] = useState(false)
  const [blocked, setBlocked] = useState(true)

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BeforeInstallPromptEvent)
    }
    const onInstalled = () => {
      localStorage.setItem(DISMISS_KEY, "1")
      setVisible(false)
      trackEvent("install_app_success")
    }
    window.addEventListener("beforeinstallprompt", onPrompt)
    window.addEventListener("appinstalled", onInstalled)
    const timer = setTimeout(() => {
      const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        (navigator as unknown as { standalone?: boolean }).standalone === true
      const dismissed = localStorage.getItem(DISMISS_KEY) === "1"
      setBlocked(isStandalone || dismissed)
      setIsIos(/iphone|ipad|ipod/i.test(navigator.userAgent))
      setVisible(true)
    }, 7000)
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt)
      window.removeEventListener("appinstalled", onInstalled)
      clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1")
    setVisible(false)
  }

  const install = async () => {
    if (!deferred) return
    trackEvent("install_app_click")
    await deferred.prompt()
    await deferred.userChoice
    setDeferred(null)
    setVisible(false)
  }

  const show = visible && !blocked && (deferred !== null || isIos)

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-4 bottom-24 left-4 z-50 lg:right-8 lg:bottom-8 lg:left-auto lg:w-[380px]"
          role="dialog"
          aria-label="Install app"
        >
          <div className="relative rounded-2xl border border-line bg-white p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.4)]">
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close install prompt"
              className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full text-ash transition-colors hover:bg-mist hover:text-ink"
            >
              <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
            </button>

            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white p-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo-icon.png" alt="" className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="text-sm font-bold tracking-tight text-ink">
                  {isIos ? "Install kwenye iPhone" : "Install 20 Objections"}
                </p>
                <p className="text-xs text-ash">
                  Pata app kwenye Home Screen yako.
                </p>
              </div>
            </div>

            {isIos ? (
              <ol className="mt-4 space-y-2.5">
                {IOS_STEPS.map((step, i) => (
                  <li
                    key={step.text}
                    className="flex items-center gap-3 text-sm text-ink"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-mist">
                      <HugeiconsIcon icon={step.icon} className="size-3.5 text-ink" strokeWidth={2} />
                    </span>
                    <span>
                      <span className="mr-1.5 font-mono text-xs text-ash">
                        {i + 1}.
                      </span>
                      {step.text}
                    </span>
                  </li>
                ))}
              </ol>
            ) : (
              <button
                type="button"
                onClick={install}
                className={buttonClasses({
                  type: "primary",
                  shape: "square",
                  size: "medium",
                  fullWidth: true,
                  className: "mt-4 gap-2",
                })}
              >
                <HugeiconsIcon icon={Download01Icon} className="size-4" />
                Install App
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
