import Spark from "@/components/ui/spark"

interface SpinnerProps {
  size?: number
  color?: string
}

/**
 * Project spinner — renders the Spark loader. Kept under the Spinner name so
 * existing call sites (buttons, loading screens) get the new style for free.
 */
export function Spinner({ size = 20, color = "#8f8f8f" }: SpinnerProps) {
  return <Spark size={size} color={color} />
}
