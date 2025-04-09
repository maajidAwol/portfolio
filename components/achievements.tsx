"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Award, BadgeIcon as Certificate, Medal, Lightbulb, Newspaper, ExternalLink, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Achievements() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null)
 
  const achievements = [
    {
      title: "A2SV Generative AI Hackathon Finalist",
      category: "Competition",
      date: "November 2023",
      description: "Awarded a gold medal for being a finalist in the A2SV Generative AI Hackathon for Africa.",
      icon: <Medal className="h-5 w-5" />,
      color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Academic Excellence Scholarship",
      category: "Academic",
      date: "December 2023",
      description: "Granted a scholarship for academic excellence to join the Fast Track program at AASTU.",
      icon: <Award className="h-5 w-5" />,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "University Presidential Award",
      category: "Academic",
      date: "March 2021",
      description: "Received the University's Exceptional Academic Performance Award for attaining a GPA of 3.96.",
      icon: <Award className="h-5 w-5" />,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Flutter Development Certification",
      category: "Certification",
      date: "2023",
      description:
        "Completed advanced Flutter development certification, demonstrating expertise in mobile app development.",
      icon: <Certificate className="h-5 w-5" />,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Technical Article Publication",
      category: "Publication",
      date: "2024",
      description:
        "Published article on 'Implementing Clean Architecture in Flutter Applications' in a leading tech blog.",
      icon: <Newspaper className="h-5 w-5" />,
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Open Source Contribution Recognition",
      category: "Community",
      date: "2023",
      description: "Recognized for significant contributions to open-source Flutter projects and developer tools.",
      icon: <Lightbulb className="h-5 w-5" />,
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section id="achievements" className="py-20 section-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#0468D7]/5 dark:bg-[#0468D7]/10 text-[#0468D7] rounded-md text-sm font-medium mb-4 transition-colors duration-300">
            RECOGNITION
          </span>
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            <span className="text-gray-900 dark:text-white">Achievements & Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto transition-colors duration-300">
            Recognition, certifications, and milestones that highlight my commitment to excellence and continuous
            learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col"
            >
              {/* Certificate Image Preview */}
              <div
                className="relative h-40 overflow-hidden cursor-pointer group"
                onClick={() => setExpandedImage(achievement.image)}
              >
                <Image
                  src={achievement.image || "/placeholder.svg"}
                  alt={`${achievement.title} certificate`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Achievement Details */}
              <div className="p-5 flex-grow">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-md ${achievement.color}`}>{achievement.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                        {achievement.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs font-normal">
                        {achievement.category}
                      </Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{achievement.date}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Image Modal */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setExpandedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10 bg-white/80 dark:bg-black/80 rounded-full"
                onClick={() => setExpandedImage(null)}
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="relative h-[80vh] w-full">
                <Image src={expandedImage || "/placeholder.svg"} alt="Certificate" fill className="object-contain" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
