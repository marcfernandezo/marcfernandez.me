import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Projects - Marc Fernandez - Software Engineer',
  description: 'A showcase of projects by Marc Fernandez, a Barcelona-based Software Engineer specializing in backend development and software architecture. Explore clean, scalable systems that matter.',
}

export default function ProjectsPage() {
    return (
        <>
            <h3 className="mb-5 text-lg font-mono font-semibold">Projects</h3>
        </>
    )
}