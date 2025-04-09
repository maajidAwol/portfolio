"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Code2,
  Database,
  Smartphone,
  Globe,
  Cpu,
  Server,
  Layers,
  Zap,
  FileCode,
  GitBranch,
  Box,
  Workflow,
  Cloud,
  Repeat,
  Palette,
  Monitor,
} from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Define tech icons
  const techIcons = {
    // Frontend
    React: <Zap className="h-5 w-5" />,
    "Next.js": <Layers className="h-5 w-5" />,
    "Tailwind CSS": <Palette className="h-5 w-5" />,
    Bootstrap: <Monitor className="h-5 w-5" />,

    // Backend
    Flask: <FileCode className="h-5 w-5" />,
    Django: <Box className="h-5 w-5" />,
    "Node.js": <Server className="h-5 w-5" />,
    Express: <Workflow className="h-5 w-5" />,

    // Mobile
    Flutter: <Smartphone className="h-5 w-5" />,
    Dart: <Code2 className="h-5 w-5" />,
    "Bloc Pattern": <Repeat className="h-5 w-5" />,
    "Clean Architecture": <Layers className="h-5 w-5" />,

    // Databases
    Firebase: <Database className="h-5 w-5" />,
    PostgreSQL: <Database className="h-5 w-5" />,
    MySQL: <Database className="h-5 w-5" />,
    SQLite: <Database className="h-5 w-5" />,

    // AI
    OpenAI: <Cpu className="h-5 w-5" />,
    Gemini: <Cpu className="h-5 w-5" />,
    Snowflake: <Cloud className="h-5 w-5" />,
    Langchain: <Workflow className="h-5 w-5" />,

    // Other
    Git: <GitBranch className="h-5 w-5" />,
    Docker: <Box className="h-5 w-5" />,
    "CI/CD": <Repeat className="h-5 w-5" />,
    "RESTful APIs": <Cloud className="h-5 w-5" />,
  }

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
      delay: 0.1,
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: ["Flask", "Django", "Node.js", "Express"],
      delay: 0.2,
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      skills: ["Flutter", "Dart", "Bloc Pattern", "Clean Architecture"],
      delay: 0.3,
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["Firebase", "PostgreSQL", "MySQL", "SQLite"],
      delay: 0.4,
    },
    {
      title: "AI & Automation",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["OpenAI", "Gemini", "Snowflake", "Langchain"],
      delay: 0.5,
    },
    {
      title: "Other Technologies",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["Git", "Docker", "CI/CD", "RESTful APIs"],
      delay: 0.6,
    },
  ]

  return (
    <section id="skills" className="py-20 section-light relative overflow-hidden" ref={ref}>
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-grid-pattern"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#0468D7]/5 dark:bg-[#0468D7]/10 text-[#0468D7] rounded-md text-sm font-medium mb-4 transition-colors duration-300">
            EXPERTISE
          </span>
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            <span className="text-gray-900 dark:text-white">Technical Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto transition-colors duration-300">
            My technical toolkit spans multiple domains, enabling me to deliver comprehensive solutions from concept to
            deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: category.delay }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 p-2 rounded-md bg-[#0468D7]/10 text-[#0468D7]">{category.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-[#0468D7] rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: category.delay + skillIndex * 0.1,
                    }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-md p-3 flex items-center gap-2 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300"
                  >
                    <div className="text-[#0468D7] dark:text-[#54C5F8] transition-colors duration-300">
                      {techIcons[skill]}
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-medium transition-colors duration-300 text-sm">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills summary - simplified */}
        <motion.div
          className="mt-16 bg-[#0468D7]/5 dark:bg-[#0468D7]/10 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300">
                Let's Work Together
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-lg transition-colors duration-300">
                My diverse skill set allows me to tackle complex projects and deliver high-quality solutions that meet
                your specific needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <motion.div
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-md shadow-sm"
                whileHover={{ y: -3 }}
              >
                <span className="text-2xl font-bold text-[#0468D7]">5+</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Years Experience</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-md shadow-sm"
                whileHover={{ y: -3 }}
              >
                <span className="text-2xl font-bold text-[#0468D7]">50+</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-md shadow-sm"
                whileHover={{ y: -3 }}
              >
                <span className="text-2xl font-bold text-[#0468D7]">30+</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
