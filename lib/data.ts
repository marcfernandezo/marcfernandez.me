export type Project = {
  icon: string
  coverImage?: string   // ← nuevo
  title: string
  description: string
  link: string
  repository?: string
  tags?: string[]
  type?: "client" | "personal" | "open-source"
}
type WorkExperience = {
  company: string
  position: string
  description: string
  date: string
  link: string
  id: string
}

type SocialLinks = {
  label: string
  href: string
}


export const FEATURED_PROJECTS: Project[] = [
  {
    icon: "/assets/ledgate.webp",
    coverImage: "/assets/ledgate_background.svg",
    title: "Ledgate",
    description: "Ledgate is a software agency for customized web solutions for businesses.",
    link: "https://ledgate.dev",
    tags: ["Software Engineering", "Web Agency"],
    type: "personal",
  },
  {
    icon: "/assets/stellarengine.webp",
    coverImage: "/assets/stellarengine_background.png",
    title: "Stellar Engine",
    description: "Browser-based space simulation engine with real-time gravitational physics and orbital mechanics.",
    link: "https://stellarengine.vercel.app/",
    tags: ["Universe Sandbox", "Physics"],
    type: "personal",
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
    company: "Bdr Informática y Comunicaciones, SL",
    position: "IT Technician",
    description:
      "I provided IT consulting, custom software development, technical support, network solutions, and cybersecurity services. My role involved maintaining and securing IT infrastructure and equipment to ensure optimal performance and security.",
    date: "2026",
    link: "https://bdrinformatica.com/",
    id: "2",
  },
  {
    company: "Bdr Informática y Comunicaciones, SL",
    position: "IT Technician",
    description:
      "I provided IT consulting, custom software development, technical support, network solutions, and cybersecurity services. My role involved maintaining and securing IT infrastructure and equipment to ensure optimal performance and security.",
    date: "2024",
    link: "https://bdrinformatica.com/",
    id: "1",
  },
]

export const SOCIAL_LINKS: SocialLinks[] = [
  {
    label: "GitHub",
    href: "https://github.com/marcfernandezo",
  },
  {
    label: "Twitter",
    href: "https://x.com/marcfernandezo",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marcfernandezo/",
  },
]

export const EMAIL = "marc.fernandezo@hotmail.com"

export const URL = "https://marcfernandez.me"