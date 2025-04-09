"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300"
        aria-label="Toggle theme"
      >
        <Sun className="h-4 w-4 text-gray-400" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#0468D7] dark:hover:border-[#0468D7] transition-all duration-300"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 text-[#54C5F8]" />
      ) : (
        <Moon className="h-4 w-4 text-[#0468D7]" />
      )}
    </Button>
  )
}
