"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function Resume() {
  const experiences = [
    {
      title: "Mobile Application Developer",
      company: "Eskalate LLC",
      logo: "/placeholder.svg?height=80&width=80", // Placeholder for company logo
      period: "June 2024 - November 2024",
      description:
        "Led a team to build and optimize mobile apps using Flutter, REST APIs, and system native APIs. Created an e-commerce app with Clean Architecture. Applied Test-Driven Development (TDD) practices for critical components. Utilized Provider, Bloc, and Mockito for state management and testing.",
    },
    {
      title: "Full Stack Developer Intern",
      company: "Camara Education Ethiopia",
      logo: "/placeholder.svg?height=80&width=80", // Placeholder for company logo
      period: "July 2023 - November 2023",
      description:
        "Developed educational platform used by Ethiopian schools, expanding access to quality education. The platform supplied digital study materials, including books and past exams, to students. Implemented front-end features that improved content access and site engagement.",
    },
    {
      title: "Full Stack Developer",
      company: "Upwork",
      logo: "/placeholder.svg?height=80&width=80", // Placeholder for company logo
      period: "July 2024 - Present",
      description:
        "Working as a top-rated freelancer on Upwork, specializing in Full-Stack Development and Process Automation. Delivering high-quality solutions for clients across various industries, with expertise in web development, mobile applications, and automation tools.",
    },
  ]

  const education = [
    {
      degree: "Master's in Software Engineering | Fast Track Program",
      institution: "Addis Ababa Science and Technology University (AASTU)",
      logo: "/placeholder.svg?height=80&width=80", // Placeholder for institution logo
      period: "December 2023 - July 2026",
      description:
        "CGPA 3.75/4.0. Pursuing an advanced degree in Software Engineering through the Fast Track program, which enables students to begin their master's before completing bachelor's. Granted a scholarship for academic excellence. Focusing on advanced software engineering concepts, research methodologies, and specialized technical skills to develop innovative solutions for complex problems.",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Addis Ababa Science and Technology University (AASTU)",
      logo: "/placeholder.svg?height=80&width=80", // Placeholder for institution logo
      period: "May 2021 - July 2025",
      description:
        "CGPA 3.78/4.0. Comprehensive education in software engineering fundamentals, including programming paradigms, system design, database management, and software development methodologies. Developed strong analytical and problem-solving skills through practical projects and theoretical coursework in various computing disciplines.",
    },
    {
      degree: "Software Engineering Trainee",
      institution: "Africa to Silicon Valley (A2SV)",
      logo: "/placeholder.svg?height=80&width=80", // Placeholder for institution logo
      period: "November 2023 - November 2024",
      description:
        "Participated in an intensive software engineering training program focused on data structures, algorithms, and problem-solving skills. Collaborated with peers on group projects to develop teamwork and communication skills. Awarded a gold medal for being a finalist in the A2SV Generative AI Hackathon for Africa, demonstrating excellence in AI application development.",
    },
  ]

  return (
    <section id="resume" className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#0468D7]/5 dark:bg-[#0468D7]/10 text-[#0468D7] rounded-md text-sm font-medium mb-4 transition-colors duration-300">
            EXPERIENCE
          </span>
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            <span className="text-gray-900 dark:text-white">Resume & Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8 text-center transition-colors duration-300">
            My professional journey and educational background that have shaped my expertise in software development.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#0468D7] to-[#54C5F8] hover:from-[#0468D7]/90 hover:to-[#54C5F8]/90 text-white rounded-full shadow-md"
          >
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <Briefcase className="h-5 w-5 mr-3 text-[#0468D7]" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-px before:bg-gray-200 dark:before:bg-gray-800">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative flex items-start group"
                >
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 mt-1.5">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#0468D7] bg-white dark:bg-black group-hover:bg-[#0468D7] transition-colors duration-300"></div>
                  </div>

                  <div className="ml-10 lg:ml-0 lg:max-w-md lg:mr-auto lg:pr-8 lg:group-odd:ml-auto lg:group-odd:mr-0 lg:group-odd:pr-0 lg:group-odd:pl-8">
                    <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-sm">
                      {/* Company Logo */}
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800 mr-4 flex-shrink-0 border border-gray-200 dark:border-gray-700">
                          <Image
                            src={exp.logo || "/placeholder.svg"}
                            alt={`${exp.company} logo`}
                            width={48}
                            height={48}
                            className="object-contain w-full h-full p-1"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                            {exp.title}
                          </h4>
                          <p className="text-gray-700 dark:text-gray-400 transition-colors duration-300 text-sm">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-[#0468D7]">{exp.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-500 transition-colors duration-300 text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="h-5 w-5 mr-3 text-[#0468D7]" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Education
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-px before:bg-gray-200 dark:before:bg-gray-800">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative flex items-start group"
                >
                  <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 mt-1.5">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#0468D7] bg-white dark:bg-black group-hover:bg-[#0468D7] transition-colors duration-300"></div>
                  </div>

                  <div className="ml-10 lg:ml-0 lg:max-w-md lg:mr-auto lg:pr-8 lg:group-odd:ml-auto lg:group-odd:mr-0 lg:group-odd:pr-0 lg:group-odd:pl-8">
                    <div className="bg-white dark:bg-gray-900 p-5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-sm">
                      {/* Institution Logo */}
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800 mr-4 flex-shrink-0 border border-gray-200 dark:border-gray-700">
                          <Image
                            src={edu.logo || "/placeholder.svg"}
                            alt={`${edu.institution} logo`}
                            width={48}
                            height={48}
                            className="object-contain w-full h-full p-1"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                            {edu.degree}
                          </h4>
                          <p className="text-gray-700 dark:text-gray-400 transition-colors duration-300 text-sm">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-[#0468D7]">{edu.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-500 transition-colors duration-300 text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
