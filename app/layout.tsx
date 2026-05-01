import type { Viewport, Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "next-themes"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export const metadata: Metadata = {
  title: "Marc Fernandez - Software Engineer",
  description:
    "I'm Marc, an IT Technician and web developer located in Barcelona, Spain. I'm passionate about building innovative solutions that make a positive impact.",

  openGraph: {
    title: "Marc Fernandez - Personal Site",
    description:
      "I'm Marc, an IT Technician and web developer located in Barcelona, Spain. I'm passionate about building innovative solutions that make a positive impact.",
    url: "https://marcfernandez.dev",
    siteName: "Marc Fernandez - Personal Site",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          defaultTheme="system"
          attribute="class"
          storageKey="theme"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
