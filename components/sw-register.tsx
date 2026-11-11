"use client"

import { useEffect } from "react"

export function SwRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return
    if (!("serviceWorker" in navigator)) return
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Registration failures are non-fatal — the page still works online.
    })
  }, [])
  return null
}
