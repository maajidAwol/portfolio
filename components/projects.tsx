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
    image: "/projects/miiltoo/1.jpg",
    tech: ["ai", "python", "react"],
    techName: ["AI/ML", "Python", "Flask"],
    period: "August 2023 - November 2024",
    details:
      "Miiltoo is an educational platform using AI chatbots, personalized quizzes, and interactive PDF tools to enhance high school learning. Tailored AI chatbots match textbook content, making learning engaging. Students create quizzes for targeted assessment, and PDF uploads enable custom AI models for interactive study. Powered by technologies like OpenAI's GPT-3.5-turbo, Flask, and LangChain, Miiltoo aims to make education more engaging and accessible. Led a team for the development of this generative AI chatbot and quizbot to address Ethiopia's low Grade 12 exam pass rate. Managed backend development with Flask, MySQL, and the OpenAI API.",
    github: "https://github.com/maajidAwol/Miiltoo_Knowledge_Companion",
    demo: "https://miiltoo.onrender.com/",
  },
  {
    id: 2,
    title: "Meeting Video Automation Pipeline for CRM",
    description: "End-to-end automation system streamlining video processing, transcription, and delivery for customer engagement.",
    image: "/projects/video-automation/1.jpg",
    tech: ["nextjs", "node", "ai"],
    techName: ["Next.js", "Windmill.dev", "FFmpeg"],
    period: "2024",
    details:
      "Architected an end-to-end automation pipeline transforming raw meeting recordings into searchable, transcribed video assets for enhanced customer engagement. Built with Notion forms as triggers, the system uses Windmill.dev workflows to process any meeting link via yt-dlp/FFmpeg, converts to MP4, and uploads to Vimeo. Features automated transcription using ElevenLabs TTS and custom ML models, interactive Next.js playback portal with timestamp-synced commenting (PostgreSQL), and Redis-powered asynchronous processing queues. Reduced manual effort by 80% (2 hours → 15 minutes per video) while handling 50+ customer meetings weekly with consistent sub-15 minute turnaround times.",
  },
  {
    id: 3,
    title: "TubeStats Analytics Platform",
    description: "Comprehensive YouTube analytics dashboard with AI-powered revenue analysis and real-time insights for creators.",
    image: "/projects/tubestats/1.png",
    tech: ["react", "nextjs", "ai"],
    techName: ["Next.js", "Perplexity AI", "Docker"],
    period: "2023 - 2024",
    details:
      "Built a comprehensive full-stack YouTube analytics platform using Next.js, JavaScript, Tailwind CSS, MySQL, and Redux for state management. Integrated with YouTube Data API and Perplexity AI's real-time web search API to generate authoritative financial summaries for YouTube channels with 3M+ subscribers. The AI system intelligently searches trusted financial sources (NetWorthSpot, SocialBlade, Forbes, Youtubers.me) to compile definitive revenue estimates and net worth valuations, presenting findings as professional financial reports with proper source citations. Features automated data ingestion pipelines using Cron jobs, Docker containerization, GitHub Actions CI/CD, and comprehensive error handling with intelligent fallback systems for API rate limits.",
    demo: "http://tubestats.io/",
  },
  {
    id: 4,
    title: "Enterprise Customer Feedback & Analytics Platform",
    description: "Comprehensive feedback collection system with advanced analytics, NPS scoring, and real-time performance insights.",
    image: "/projects/customer-feedback/1.png",
    tech: ["nextjs", "react", "python"],
    techName: ["Next.js", "Supabase", "TypeScript"],
    period: "2024",
    details:
      "Developed an enterprise-grade customer feedback platform revolutionizing sentiment analysis through secure, encrypted workflows. Features AES-256 encryption for GDPR compliance, one-click emoji-based feedback collection with multi-language support, and real-time analytics dashboards with NPS calculation. Built with Next.js 15, TypeScript, and Supabase, the platform includes interactive Recharts dashboards, agent performance league tables with A-F grading, and tamper-proof URLs with 24-hour token expiration. Delivers 40% increase in measurement accuracy, 80% reduction in collection friction, and comprehensive performance insights that drive customer experience improvements.",
  },
  {
    id: 5,
    title: "Gemini Dart Test Generator",
    description: "AI-powered CLI tool that automatically generates robust unit tests for Dart classes.",
    image: "/projects/gemini-test/1.png",
    tech: ["ai", "dart"],
    techName: ["AI/ML", "Dart"],
    period: "2024",
    details:
      "GeminiTest AI is a command-line tool that leverages package:coverage insights and cutting-edge Large Language Models to automatically generate robust unit tests for Dart classes. Developed as a GSoC 2025 proposal project, it streamlines import management, dependency handling, and test code generation—ensuring comprehensive coverage of normal cases, edge cases, and error conditions. This innovative approach simplifies and enhances the testing process, demonstrating the transformative potential of AI in software development.",
    github: "https://github.com/maajidAwol/dart_test_generator",
  },
  {
    id: 6,
    title: "Flutter Clean Architecture VS Code Extension",
    description:
      "A custom VS Code extension that streamlines the development of Flutter apps using Clean Architecture.",
    image: "/projects/vs-extension/1.png",
    tech: ["node", "flutter"],
    techName: ["Node.js", "Flutter"],
    period: "2023",
    details:
      "A custom Visual Studio Code extension built with Node.js that streamlines the development of Flutter apps using Clean Architecture. It automates the generation of boilerplate code and folder structures for the core, data, domain, and presentation layers—helping developers maintain scalable, testable, and modular codebases effortlessly. The extension auto-generates Clean Architecture file & folder structures, provides one-command feature creation and removal, scaffolds BLoC, use cases, repositories, and more, detects missing core structure and creates it if needed, and is built with Node.js and the VS Code Extension API.",
    github: "https://github.com/maajidAwol/Flutter-Clean-Architecture-Starter-Kit-Vs-Extension",
  },
  {
    id: 7,
    title: "ConnectX Backend-as-a-Service Platform",
    description: "Scalable multi-tenant e-commerce platform with comprehensive order processing and payment workflows.",
    image: "/projects/connectx/web/1.png",
    tech: ["python", "react", "nextjs"],
    techName: ["Django", "PostgreSQL", "Next.js"],
    period: "2023 - 2024",
    details:
      "Architected and developed a robust multi-tenant backend-as-a-service platform for e-commerce solutions using Django, Django REST Framework, and PostgreSQL. Led a development team to implement sophisticated order and payment processing workflows, secure JWT authentication, and comprehensive API endpoints. Created intuitive onboarding documentation and a modern landing site using Next.js and Tailwind CSS. The platform successfully streamlined merchant onboarding processes, reduced setup complexity, and provided scalable infrastructure for multiple e-commerce businesses.",
    github: "https://github.com/maajidAwol/ConnectX",
    demo: "https://connect-x-peach.vercel.app/",
  },
  {
    id: 8,
    title: "ConnectX Mobile App",
    description: "Cross-platform e-commerce mobile storefront with real-time order tracking and seamless payment integration.",
    image: "/projects/connectx/mobile/1.jpg",
    tech: ["flutter", "python"],
    techName: ["Flutter", "Django"],
    period: "2023 - 2024",
    details:
      "Developed a comprehensive cross-platform mobile e-commerce application using Flutter Clean Architecture with BLoC state management. The app provides a seamless shopping experience with real-time order tracking, secure payment processing, and intuitive user interface. Built with Django REST Framework backend, the application features JWT authentication, comprehensive order management workflows, and responsive design optimized for mobile-first users. Successfully reduced merchant onboarding time while significantly improving accessibility and user experience across Android and iOS platforms.",
    github: "https://github.com/maajidAwol/ConnectX",
    demo: "https://connect-x-peach.vercel.app/",
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
    { id: "nextjs", label: "Next.js", icon: <Code2 className="h-4 w-4 mr-1" /> },
    { id: "python", label: "Python", icon: <Server className="h-4 w-4 mr-1" /> },
    { id: "node", label: "Node.js", icon: <Database className="h-4 w-4 mr-1" /> },
    { id: "ai", label: "AI/ML", icon: <Cpu className="h-4 w-4 mr-1" /> },
    { id: "dart", label: "Dart", icon: <Code2 className="h-4 w-4 mr-1" /> },
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
