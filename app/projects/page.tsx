import type { Metadata } from 'next'
import Link from 'next/link'

import { fetchRepositories } from '@/lib/github'
import { GitHubRepository } from '@/lib/github'

export const metadata: Metadata = {
  title: 'Projects - Marc Fernandez - Software Engineer',
  description: 'A showcase of projects by Marc Fernandez, a Barcelona-based Software Engineer specializing in backend development and software architecture. Explore clean, scalable systems that matter.',
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-400',
  JavaScript: 'bg-yellow-400',
  Java: 'bg-orange-500',
  Python: 'bg-green-400',
  Go: 'bg-cyan-400',
  Rust: 'bg-orange-700',
  CSS: 'bg-purple-400',
  HTML: 'bg-red-400',
  Shell: 'bg-emerald-400',
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ProjectCard({ repo }: { repo: GitHubRepository }) {
  return (
    <div className="group flex flex-col rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 p-4 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">⬡</span>
          <Link
            href={repo.homepage ?? repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-100 hover:text-black dark:hover:text-white flex items-center gap-1"
          >
            {repo.name}
            <span className="text-neutral-400 dark:text-neutral-500 text-xs">↗</span>
          </Link>
        </div>
        <Link
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          aria-label="GitHub repository"
        >
          <GitHubIcon />
        </Link>
      </div>

      {/* Description — flex-1 empuja stats al fondo */}
      <p className="flex-1 text-sm text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed line-clamp-2">
        {repo.description}
      </p>

      {/* Topics — siempre 3 máximo */}
      <div className="flex flex-wrap gap-2 mb-3 min-h-[24px]">
        {repo.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="inline-flex items-center px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs font-mono border border-neutral-200 dark:border-neutral-700"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Stats — siempre al fondo */}
      <div className="flex items-center gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-400 dark:text-neutral-500">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full inline-block ${LANGUAGE_COLORS[repo.language] ?? 'bg-neutral-400'}`} />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
          </svg>
          {repo.forks_count}
        </span>
      </div>
    </div>
  )
}

export default async function ProjectsPage() {
  const repos = await fetchRepositories()

  return (
    <>
      <h3 className="mb-5 text-lg font-mono font-semibold">Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {repos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </>
  )
}