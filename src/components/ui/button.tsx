import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "h-9 px-4 py-2 text-sm": size === "sm",
            "h-10 px-4 py-2": size === "md",
            "h-11 px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button } 