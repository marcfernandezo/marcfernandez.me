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
  title: "Marc Fernandez Otero - Software Engineer",
  description:
    "Marc Fernandez is a Barcelona-based Software Engineer specializing in backend development and software architecture. Building clean, scalable systems that matter.",

  keywords: [
    "Marc Fernandez",
    "Marc Fernandez Otero",
    "Marc Fernandez Barcelona",
    "Software Engineer Barcelona",
    "Backend Developer Barcelona",
    "Marc Fernandez Software Engineer",
    "Marc Fernandez Backend Developer",
    "Marc Fernandez Software Architecture",
    "marcfernandez.dev",
    "marcfernandez.me",
  ],

  authors: [{ name: "Marc Fernandez", url: "https://marcfernandez.me" }],
  creator: "Marc Fernandez",

  metadataBase: new URL("https://marcfernandez.me"),

  alternates: {
    canonical: "https://marcfernandez.me",
  },

  openGraph: {
    title: "Marc Fernandez — Software Engineer",
    description:
      "Marc Fernandez is a Barcelona-based Software Engineer specializing in backend development and software architecture. Building clean, scalable systems that matter.",
    url: "https://marcfernandez.me",
    siteName: "Marc Fernandez",
    locale: "en_US",
    type: "profile",
    firstName: "Marc",
    lastName: "Fernandez Otero",
    username: "marcfernandezo",
  },

  twitter: {
    card: "summary",
    title: "Marc Fernandez — Software Engineer",
    description:
      "Barcelona-based Software Engineer specializing in backend development and software architecture.",
    creator: "@marcfernandezo",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
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
