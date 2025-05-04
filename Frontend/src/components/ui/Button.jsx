import { cn } from "../../utils"

const buttonVariants = {
  default: "bg-slate-700 text-white hover:bg-slate-600",
  ghost: "bg-transparent hover:bg-slate-800 text-slate-300",
}

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-8 px-3 text-sm",
  lg: "h-12 px-6 text-lg",
  icon: "h-9 w-9",
}

export function Button({
  className,
  variant = "default",
  size = "default",
  as: Component = "button",
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:opacity-50 disabled:pointer-events-none",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
