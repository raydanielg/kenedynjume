import type { HTMLAttributes, CSSProperties } from "react"

export type PlayState = "running" | "paused"

/** Props the Spark spinner accepts. Extra span attributes are passed through to the root element. */
export interface SparkProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "children" | "color"
> {
  /** Width and height in pixels. Defaults to `20`. */
  size?: number
  /** Any CSS color. Defaults to `currentColor`. */
  color?: string
  /** Length of one loop in milliseconds. Defaults to `1400`. */
  duration?: number
  /** Pauses or resumes the animation. Defaults to `running`. */
  playState?: PlayState
}

const DEFAULT_SIZE = 20
const DEFAULT_DURATION = 1400

/*
 * Each petal starts 3 out from the centre. Long ones flare between 4 and 8 long, short
 * ones between 2.5 and 5. Scaling a rounded petal scales its ends too, so each is drawn
 * at the length between the two and scaled either way, which keeps the ends looking
 * round at both.
 */
const petals = Array.from({ length: 8 }, (_, i) => (i % 2 ? 3.54 : 5.66))

/**
 * Eight petals, long and short, flaring in a wave while the spark slowly turns.
 *
 * Ported from the Svelte "Spark" spinner in Pedro Lunet's loadsv library
 * (https://loadsv.pedrolu.net/spinners/spark), MIT licensed.
 */
export default function Spark({
  size = DEFAULT_SIZE,
  color,
  duration,
  playState,
  className,
  style,
  ...rest
}: SparkProps) {
  return (
    <span
      aria-hidden="true"
      {...rest}
      className={["lsv-spark", className].filter(Boolean).join(" ")}
      style={
        {
          "--lsv-size": `${size}px`,
          "--_duration":
            duration === undefined
              ? `var(--lsv-duration, ${DEFAULT_DURATION}ms)`
              : `${duration}ms`,
          "--_play-state": playState ?? "var(--lsv-play-state, running)",
          color,
          ...style,
        } as CSSProperties
      }
    >
      <span className="lsv-spark-turn">
        {petals.map((length, i) => (
          <span
            className="lsv-spark-arm"
            key={i}
            style={{ "--i": i } as CSSProperties}
          >
            <span
              className="lsv-spark-petal"
              style={{ "--length": length } as CSSProperties}
            />
          </span>
        ))}
      </span>
    </span>
  )
}
