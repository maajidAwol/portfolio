"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  Code2,
  ExternalLink,
  Github,
  Cpu,
  Layers,
  Smartphone,
  Zap,
  Database,
  ChevronDown,
  ChevronUp,
  Calendar,
} from "lucide-react"

// Update the ProjectProps interface to support multiple tech stacks and period
interface ProjectProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tech: string | string[]
    techName: string | string[]
    period?: string
    details?: string
    github?: string
    demo?: string
  }
  index: number
}

// Update the ProjectCard component to handle multiple tech stacks
export default function ProjectCard({ project, index }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  // Tech-specific styling - simplified
  const getTechStyles = (tech: string) => {
    switch (tech) {
      case "flutter":
        return {
          icon: <Smartphone className="h-4 w-4" />,
          color: "text-[#0468D7]",
          bgColor: "bg-[#0468D7]/5",
        }
      case "react":
        return {
          icon: <Zap className="h-4 w-4" />,
          color: "text-[#61DAFB]",
          bgColor: "bg-[#61DAFB]/5",
        }
      case "nextjs":
        return {
          icon: <Layers className="h-4 w-4" />,
          color: "text-gray-900 dark:text-white",
          bgColor: "bg-gray-100 dark:bg-gray-800",
        }
      case "node":
        return {
          icon: <Database className="h-4 w-4" />,
          color: "text-[#68A063]",
          bgColor: "bg-[#68A063]/5",
        }
      case "ai":
        return {
          icon: <Cpu className="h-4 w-4" />,
          color: "text-[#9C27B0]",
          bgColor: "bg-[#9C27B0]/5",
        }
      case "python":
        return {
          icon: <Code2 className="h-4 w-4" />,
          color: "text-[#306998]",
          bgColor: "bg-[#306998]/5",
        }
      case "firebase":
        return {
          icon: <Database className="h-4 w-4" />,
          color: "text-[#FFCA28]",
          bgColor: "bg-[#FFCA28]/5",
        }
      default:
        return {
          icon: <Code2 className="h-4 w-4" />,
          color: "text-gray-700 dark:text-gray-300",
          bgColor: "bg-gray-100 dark:bg-gray-800",
        }
    }
  }

  // Function to render tech badges - simplified
  const renderTechBadges = () => {
    if (Array.isArray(project.tech) && Array.isArray(project.techName)) {
      return project.tech.map((tech, index) => {
        const techStyle = getTechStyles(tech)
        return (
          <motion.span
            key={index}
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${techStyle.color} ${techStyle.bgColor} mr-1 mb-1`}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
          >
            {techStyle.icon}
            <span className="ml-1">{project.techName[index]}</span>
          </motion.span>
        )
      })
    } else {
      const techStyle = getTechStyles(project.tech as string)
      return (
        <motion.span
          className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs ${techStyle.color} ${techStyle.bgColor}`}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {techStyle.icon}
          <span className="ml-1">{project.techName}</span>
        </motion.span>
      )
    }
  }

  // Project details content
  const projectDetails =
    project.details ||
    "This project showcases my skills in building responsive, user-friendly applications with modern technologies. It features clean code architecture, responsive design, and performance optimization."

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="hoverable h-full"
    >
      <Card
        className="overflow-hidden border-0 bg-white dark:bg-gray-900 transition-all duration-300 group shadow-sm hover:shadow-md h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className={`transition-transform duration-500 ease-out ${
              project.title.toLowerCase().includes('mobile') 
                ? 'object-contain bg-gray-50 dark:bg-gray-800' 
                : 'object-cover'
            }`}
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />

          {/* Simple gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* Project title on image */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <h3 className="text-lg font-medium text-white mb-0 transition-colors duration-300">{project.title}</h3>

            {/* Add period if available */}
            {project.period && (
              <div className="flex items-center mt-1 text-white/80 text-xs">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{project.period}</span>
              </div>
            )}
          </div>

          {/* Minimal action buttons */}
          <div
            className={`absolute top-4 right-4 flex gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/90 text-gray-900 hover:bg-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View source code"
              >
                <Github className="h-4 w-4" />
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/90 text-gray-900 hover:bg-white transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Visit live site"
              >
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            )}
          </div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 transition-colors duration-300">
            {project.description}
          </p>

          {/* Tech stack badges - simplified */}
          <div className="flex flex-wrap mb-3">{renderTechBadges()}</div>

          {/* Toggle details button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-auto pt-2 text-sm text-[#0468D7] hover:text-[#54C5F8] transition-colors duration-200 flex items-center"
          >
            {showDetails ? "Hide Details" : "View Details"}
            {showDetails ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
          </button>

          {/* Expandable details section */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-3 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 mt-3">
                  {projectDetails}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  )
}
