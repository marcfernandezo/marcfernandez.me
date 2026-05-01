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
        <h3 className="text-lg font-medium">Featured Projects</h3>
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
            <Card className="absolute inset-0" size={300} />
            <div className="relative h-full w-full overflow-hidden rounded-xl dark:bg-zinc-900/90 p-5 border dark:border-zinc-800/60 transition-all duration-300 hover:border-zinc-700">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  {project.icon && (
                    <div className="relative h-8 w-8 overflow-hidden rounded-md">
                      <Image
                        src={project.icon || "/placeholder.svg"}
                        alt=""
                        width={32}
                        height={32}
                        className="object-cover"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-medium text-zinc-900 dark:text-zinc-100 transition-colors dark:hover:text-white"
                    aria-label={`${project.title} (opens in new tab)`}
                  >
                    {project.title}
                    <ExternalLink
                      size={14}
                      className="text-zinc-800 dark:text-zinc-500 transition-colors dark:group-hover:text-zinc-300"
                    />
                  </a>
                </div>
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-zinc-600 transition-colors hover:text-zinc-400"
                  aria-label="View source code on GitHub (opens in new tab)"
                >
                </a>
              </div>
              <p className="mt-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400 hover:cursor-default">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
