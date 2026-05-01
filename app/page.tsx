"use client"
import WorkExperience from "@/components/Experience"
import FeaturedProjects from "@/components/Featured-Projects"
import Social from "@/components/Social"
import { EMAIL } from "@/lib/data"
import { motion } from "motion/react"

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Home() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <p className="text-zinc-600 dark:text-zinc-400">
            Marc is a Barcelona-based Backend & Software Engineer who designs systems 
            where clean architecture meets purposeful engineering. He builds things 
            that don't just work, he builds things that matter.
        </p>
        <Social />
      </motion.section>
      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <FeaturedProjects />
      </motion.section>

      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <WorkExperience />
      </motion.section>

      <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Connect with me at{" "}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
      </motion.section>
    </motion.main>
  )
}
