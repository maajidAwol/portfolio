import { Suspense } from "react"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Resume from "@/components/resume"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Loading from "@/components/loading"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gradient-to-b dark:from-black dark:to-gray-900 text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
      <Suspense fallback={<Loading />}>
        <Hero />
        <Projects />
        <Skills />
        <Resume />
        <Achievements />
        <Contact />
      </Suspense>
    </main>
  )
}
