import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://marcfernandez.me",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}