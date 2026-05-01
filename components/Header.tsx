"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { TextEffect } from "@/components/ui/text-effect"
import { AnimatedBackground } from "@/components/ui/animated-background"

const Themes = [
  {
    label: "Light",
    id: "light",
    icon: <SunIcon className="w-4 h-4" />,
  },
  {
    label: "Dark",
    id: "dark",
    icon: <MoonIcon className="w-4 h-4" />,
  },
  {
    label: "System",
    id: "system",
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {Themes.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50
            hover:cursor-pointer"
            type="button"
            aria-label={`Switch theme to ${theme.label}`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}
export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-mono text-black dark:text-white">
          Marc Fernandez
        </Link>

        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500 font-mono"
          delay={0.5}
        >
          Software Engineer
        </TextEffect>
      </div>
      <div className="flex items-center gap-2">
        <ThemeSwitch />
      </div>
    </header>
  )
}
