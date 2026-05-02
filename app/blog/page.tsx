import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Marc Fernandez - Software Engineer',
  description: 'A showcase of Marc Fernandez\'s thoughts and experiences on web development, programming, and technology. Explore clean, scalable systems that matter.',
}

export default function BlogPage() {
  return (
    <>
      <h3 className="mb-5 text-lg font-mono font-semibold">Blog</h3>
      <p className="text-neutral-500 dark:text-neutral-400">
        This is where I share my thoughts and experiences on web development, programming, and technology. Stay tuned for updates!
      </p>
    </>
  )
}