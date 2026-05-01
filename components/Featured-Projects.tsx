"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { FEATURED_PROJECTS } from "@/lib/data"
import { Card } from "@/components/ui/card"

export default function FeaturedProjects() {
  return (
    <section aria-labelledby="featured-projects-heading">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-lg font-medium">Case Studies</h3>
        <Link
          href="/projects"
          className="group flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-neutral-400"
        >
          <span>View more</span>
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {FEATURED_PROJECTS.map((project) => (
          <div key={project.title} className="group relative">
            <Card className="absolute inset-0" size={350} />
            <div className="elative h-full w-full overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/90 transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-md">

              {/* Cover image */}
              {project.coverImage ? (
                <div className="relative w-max h-52 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={project.coverImage}  
                    alt={`${project.title} preview`}
                    width={450}
                    height={450}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>
              ) : (
                <div className="h-40 w-full bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900" />
              )}

              {/* Content */}
              <div className="p-5">

                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {project.icon && (
                      <div className="relative h-8 w-8 overflow-hidden rounded-md ring-1 ring-zinc-200 dark:ring-zinc-700">
                        <Image
                          src={project.icon}
                          alt={`${project.title} icon · Marc Fernandez`}
                          fill
                          className="object-cover"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                    
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-zinc-100 transition-colors hover:text-zinc-600 dark:hover:text-white"
                      aria-label={`${project.title} (opens in new tab)`}
                    >
                      {project.title}
                      <ExternalLink
                        size={13}
                        className="text-zinc-400 dark:text-zinc-500 transition-colors group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                      />
                    </a>
                  </div>

                  {project.type === "client" && (
                    <span className="text-xs px-2 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 font-medium">
                      Freelance
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}