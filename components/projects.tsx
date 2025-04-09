"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Code2, Database, Smartphone, Globe, Cpu, Server } from "lucide-react"

// Project data with tech stack information and details
const projects = [
  {
    id: 1,
    title: "Miiltoo Knowledge Companion",
    description:
      "Educational platform using AI chatbots, personalized quizzes, and interactive PDF tools to enhance high school learning.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["ai", "python", "react"],
    techName: ["AI/ML", "Python", "Flask"],
    period: "August 2023 - November 2024",
    details:
      "Miiltoo is an educational platform using AI chatbots, personalized quizzes, and interactive PDF tools to enhance high school learning. Tailored AI chatbots match textbook content, making learning engaging. Students create quizzes for targeted assessment, and PDF uploads enable custom AI models for interactive study. Powered by technologies like OpenAI's GPT-3.5-turbo, Flask, and LangChain, Miiltoo aims to make education more engaging and accessible. Led a team for the development of this generative AI chatbot and quizbot to address Ethiopia's low Grade 12 exam pass rate. Managed backend development with Flask, MySQL, and the OpenAI API.",
  },
  {
    id: 2,
    title: "SmartRide",
    description: "Flutter-based ride-sharing app designed for seamless, real-time ride matching and tracking.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["flutter", "firebase"],
    techName: ["Flutter", "Dart"],
    period: "June 2024 - August 2024",
    details:
      "Smart Ride is a feature-rich, Flutter-based ride-sharing app designed for seamless, real-time ride matching and tracking. With Bloc state management, in-app communication, secure payments, and live GPS tracking, Smart Ride provides a user-friendly, efficient, and reliable urban transportation experience. Built with Django for secure backend operations, it ensures high performance and convenience across Android and iOS. Developed to enhance transportation accessibility for students. Implemented scheduling and tracking features that improved user experience.",
  },
  {
    id: 3,
    title: "Ethio News",
    description:
      "Flutter-based application that provides users with timely, location-based news updates through integration with the News API.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["flutter", "python"],
    techName: ["Flutter", "Flask"],
    period: "January 2024 - April 2024",
    details:
      "Local News App is a Flutter-based application that provides users with timely, location-based news updates through integration with the News API. With an intuitive interface for browsing, bookmarking, and real-time notifications, the app keeps users informed effortlessly. Backed by Django it ensures efficient content delivery and seamless performance. The app features location-based news filtering, personalized content recommendations, and a clean, responsive UI design for optimal user experience across devices.",
  },
  {
    id: 4,
    title: "Flutter Clean Architecture VS Code Extension",
    description:
      "A custom VS Code extension that streamlines the development of Flutter apps using Clean Architecture.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["node", "flutter"],
    techName: ["Node.js", "Flutter"],
    period: "2023",
    details:
      "A custom Visual Studio Code extension built with Node.js that streamlines the development of Flutter apps using Clean Architecture. It automates the generation of boilerplate code and folder structures for the core, data, domain, and presentation layers—helping developers maintain scalable, testable, and modular codebases effortlessly. The extension auto-generates Clean Architecture file & folder structures, provides one-command feature creation and removal, scaffolds BLoC, use cases, repositories, and more, detects missing core structure and creates it if needed, and is built with Node.js and the VS Code Extension API.",
  },
  {
    id: 5,
    title: "Social Media Marketing Website",
    description: "A sleek and responsive SMM website for purchasing Instagram likes, followers, and views.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["react", "nextjs"],
    techName: ["React.js", "Tailwind CSS"],
    period: "2023",
    details:
      "Developed a sleek and responsive Social Media Marketing (SMM) website for an Upwork client using React.js, Tailwind CSS, and Framer Motion. The platform allows users to seamlessly browse and purchase services like Instagram likes, followers, and views with an engaging user experience. The website features a fast single-page app powered by React, fully responsive UI built with Tailwind CSS, and smooth animations and transitions using Framer Motion.",
  },
  {
    id: 6,
    title: "Alanelachu Nonprofit Website",
    description: "Official website for a nonprofit organization focused on raising awareness about mental illness.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["python"],
    techName: ["Django"],
    period: "2022",
    details:
      "Maintained and enhanced the official website for Alanelachu, a nonprofit organization focused on raising awareness about mental illness. The platform includes event announcements, a gallery of past initiatives, a secure donation system, and a mental health blog. My contributions helped create an engaging, informative, and accessible digital presence aligned with the organization's mission. Skills & Deliverables: Developed and updated features using Django and SQLite, Managed hosting and deployments via cPanel, Designed responsive UI elements using Bootstrap, Ensured secure and smooth donation functionality, Improved performance and accessibility for all user types.",
  },
  {
    id: 7,
    title: "Gemini Dart Test Generator",
    description: "AI-powered CLI tool that automatically generates robust unit tests for Dart classes.",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["ai", "dart"],
    techName: ["AI/ML", "Dart"],
    period: "2024",
    details:
      "GeminiTest AI is a command-line tool that leverages package:coverage insights and cutting-edge Large Language Models to automatically generate robust unit tests for Dart classes. Developed as a GSoC 2025 proposal project, it streamlines import management, dependency handling, and test code generation—ensuring comprehensive coverage of normal cases, edge cases, and error conditions. This innovative approach simplifies and enhances the testing process, demonstrating the transformative potential of AI in software development.",
  },
]

export default function Projects() {
  const [filter, setFilter] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => {
          if (Array.isArray(project.tech)) {
            return project.tech.includes(filter)
          }
          return project.tech === filter
        })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Tech filter options with icons
  const techFilters = [
    { id: "all", label: "All", icon: <Globe className="h-4 w-4 mr-1" /> },
    { id: "flutter", label: "Flutter", icon: <Smartphone className="h-4 w-4 mr-1" /> },
    { id: "react", label: "React", icon: <Code2 className="h-4 w-4 mr-1" /> },
    { id: "python", label: "Python", icon: <Server className="h-4 w-4 mr-1" /> },
    { id: "node", label: "Node.js", icon: <Database className="h-4 w-4 mr-1" /> },
    { id: "ai", label: "AI/ML", icon: <Cpu className="h-4 w-4 mr-1" /> },
  ]

  return (
    <section id="projects" className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="inline-block px-3 py-1 bg-[#0468D7]/5 dark:bg-[#0468D7]/10 text-[#0468D7] rounded-md text-sm font-medium mb-4 transition-colors duration-300">
            SELECTED WORK
          </span>
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            <span className="text-gray-900 dark:text-white">Featured Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto transition-colors duration-300">
            A collection of my most significant projects, showcasing my expertise across different technologies.
          </p>
        </motion.div>

        {/* Tech filter buttons with icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {techFilters.map((techFilter) => (
            <Button
              key={techFilter.id}
              variant={filter === techFilter.id ? "default" : "outline"}
              onClick={() => setFilter(techFilter.id)}
              className={`rounded-full px-4 py-1 h-auto text-sm ${
                filter === techFilter.id
                  ? "bg-[#0468D7] hover:bg-[#0468D7]/90"
                  : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <span className="flex items-center">
                {techFilter.icon}
                {techFilter.label}
              </span>
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
