import { WORK_EXPERIENCE } from "@/lib/data"
import { ExternalLink } from "lucide-react"

export default function WorkExperience() {
  return (
    <>
      <h3 className="mb-5 text-lg font-mono font-semibold">Work Experience</h3>
      <ol className="relative border-s border-gray-300 dark:border-gray-400">
        <li className="ms-4">
          <div className="flex flex-col space-y-2">
            {WORK_EXPERIENCE.map((job) => (
              <section key={job.id} className="space-y-2">
                <div className="absolute -inset-s-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-500 dark:border-gray-900 dark:bg-gray-700"></div>

                <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {job.date}
                </time>

                <h3 className="text-lg text-gray-900 dark:text-white font-medium">{job.position}</h3>
                <a
                  className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                  target="_blank"
                  href={job.link}
                >
                  <h3 className="dark:hover:text-neutral flex items-center transition-all hover:text-neutral-400">
                    {job.company} <ExternalLink className="ml-1 w-4 h-4" />
                  </h3>
                </a>

                <p className="text-base text-zinc-600 dark:text-zinc-400">{job.description}</p>
              </section>
            ))}
          </div>
        </li>
      </ol>
    </>
  )
}
