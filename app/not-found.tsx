import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Marc Fernandez - Software Engineer',
} 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-6xl font-bold mb-4'>404</h1>
        <p className='text-lg text-neutral-600 dark:text-neutral-400 mb-6 text-center max-w-md'>
            The requested route was not found.  
            Maybe you mistyped the URL or I haven't built it yet.
        </p>
        
        <p className='text-sm text-neutral-500 dark:text-neutral-500 mb-8'>
            While you're here, feel free to explore the rest of this site.
            </p>
        <div className="flex gap-4">
            <Link href="/" className='font-bold dark:text-blue-400 hover:underline'>
                Home
            </Link>

            <span>|</span>

            <Link href="/blog" className='font-bold dark:text-blue-400 hover:underline'>
                Blog
            </Link>

            <span>|</span>

            <Link href="/projects" className='font-bold dark:text-blue-400 hover:underline'>
                Projects
            </Link>
        </div>
    </div>
  )
}