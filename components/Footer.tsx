import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800 font-bold">
      <div className="flex items-center justify-between">
        <span className="text-xs text-zinc-500">
          Marc Fernandez &copy; {new Date().getFullYear()}
        </span>
        
        <div className="flex gap-4 text-xs text-zinc-500">
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </footer>
  )
}
