import * as React from "react"
import { Spinner } from "@/components/ui/spinner"

const sizes = [
  {
    tiny: "px-1.5 h-6 text-sm",
    small: "px-1.5 h-8 text-sm",
    medium: "px-2.5 h-10 text-sm",
    large: "px-3.5 h-[54px] text-base",
  },
  {
    tiny: "w-6 h-6 text-sm",
    small: "w-8 h-8 text-sm",
    medium: "w-10 h-10 text-sm",
    large: "w-12 h-12 text-base",
  },
] as const

const types = {
  primary:
    "relative overflow-hidden bg-[#062b49] text-white fill-white hover:bg-[#0a3658] hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-14px_rgba(6,43,73,0.65)] after:absolute after:inset-0 after:-translate-x-[120%] after:skew-x-12 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:transition-transform after:duration-700 hover:after:translate-x-[120%] active:translate-y-0",
  secondary:
    "relative overflow-hidden bg-white text-[#062b49] fill-[#062b49] border border-[#062b49]/30 hover:bg-[#062b49] hover:text-white hover:fill-white hover:border-[#062b49] hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-14px_rgba(6,43,73,0.5)] after:absolute after:inset-0 after:-translate-x-[120%] after:skew-x-12 after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent after:transition-transform after:duration-700 hover:after:translate-x-[120%] active:translate-y-0",
  tertiary:
    "bg-white dark:bg-[#171717] hover:bg-[#00000014] dark:hover:bg-[#ffffff17] text-[#171717] dark:text-[#ededed] fill-[#171717] dark:fill-[#ededed]",
  error:
    "bg-[#ea001d] dark:bg-[#e2162a] hover:bg-[#ae292f] dark:hover:bg-[#ff565f] text-[#f5f5f5] dark:text-white fill-[#f5f5f5] dark:fill-white",
  warning: "bg-[#ff9300] hover:bg-[#d27504] text-[#0a0a0a] fill-[#0a0a0a]",
} as const

const shapes = {
  square: {
    tiny: "rounded",
    small: "rounded-md",
    medium: "rounded-[10px]",
    large: "rounded-[10px]",
  },
  circle: {
    tiny: "rounded-[100%]",
    small: "rounded-[100%]",
    medium: "rounded-[100%]",
    large: "rounded-[100%]",
  },
  rounded: {
    tiny: "rounded-[100px]",
    small: "rounded-[100px]",
    medium: "rounded-[100px]",
    large: "rounded-[100px]",
  },
} as const

export interface ButtonProps {
  size?: keyof (typeof sizes)[0]
  type?: keyof typeof types
  shape?: keyof typeof shapes
  svgOnly?: boolean
  children?: React.ReactNode
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  shadow?: boolean
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  className?: string
  onClick?: () => void
  ref?: React.Ref<HTMLButtonElement>
}

export function buttonClasses({
  size = "medium",
  type = "primary",
  shape = "square",
  svgOnly = false,
  shadow = false,
  loading = false,
  disabled = false,
  fullWidth = false,
  className = "",
}: Pick<
  ButtonProps,
  | "size"
  | "type"
  | "shape"
  | "svgOnly"
  | "shadow"
  | "loading"
  | "disabled"
  | "fullWidth"
  | "className"
>) {
  return `inline-flex justify-center items-center gap-0.5 font-medium transition-all duration-300 ${sizes[+svgOnly][size]} ${
    disabled || loading
      ? "bg-[#f2f2f2] dark:bg-[#1a1a1a] text-[#8f8f8f] fill-[#8f8f8f] border border-[#ebebeb] dark:border-[#2e2e2e] cursor-not-allowed"
      : types[type]
  } ${shapes[shape][size]}${shadow ? " shadow-[0_0_0_1px_#00000014,_0px_2px_2px_#0000000a] border-none" : ""}${fullWidth ? " w-full" : ""} focus-visible:shadow-[0_0_0_2px_hsla(0,0%,100%,1),0_0_0_4px_oklch(57.61%_0.2508_258.23)] focus-visible:outline-none${className ? ` ${className}` : ""}`
}

export const Button = ({
  size = "medium",
  type = "primary",
  shape = "square",
  svgOnly = false,
  children,
  prefix,
  suffix,
  shadow = false,
  loading = false,
  disabled = false,
  fullWidth = false,
  className,
  onClick,
  ref,
  ...rest
}: ButtonProps) => {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled || loading}
      onClick={onClick}
      tabIndex={0}
      className={buttonClasses({
        size,
        type,
        shape,
        svgOnly,
        shadow,
        loading,
        disabled,
        fullWidth,
        className,
      })}
      {...rest}
    >
      {loading ? <Spinner size={size === "large" ? 24 : 16} /> : prefix}
      <span
        className={`overflow-hidden font-sans overflow-ellipsis whitespace-nowrap${size === "tiny" ? "" : " px-1.5"}`}
      >
        {children}
      </span>
      {!loading && suffix}
    </button>
  )
}
