"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useEffect } from "react"
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-transparent transition-colors duration-300"
    >
      {/* Background elements with texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-black dark:to-gray-900 opacity-90 transition-colors duration-300"></div>

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-texture opacity-[0.03] dark:opacity-[0.05]"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>

      {/* Abstract shapes for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-3xl"></div>

      {/* Animated particles */}
      {[...Array(6)].map((_, i) => {
        // Use a seed-based approach for consistent random values
        const seedWidth = 50 + ((i * 17) % 100);
        const seedHeight = 50 + ((i * 23) % 100);
        const seedTop = `${(i * 19) % 100}%`;
        const seedLeft = `${(i * 13) % 100}%`;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10 dark:bg-blue-500/20"
            style={{
              width: seedWidth,
              height: seedHeight,
              top: seedTop,
              left: seedLeft,
            }}
            animate={{
              y: [0, (i * 7) % 50 - 25],
              x: [0, (i * 11) % 50 - 25],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + (i * 3),
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        );
      })}

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-full border border-[#0468D7]/20 animate-spin-slow"></div>

              {/* Image container */}
              <div className="absolute  inset-4 rounded-full overflow-hidden border-2 border-[#0468D7]/20 shadow-lg backdrop-blur-sm">
                <Image
                  src="/photo.jpg"
                  alt="Abdulmajid Awol"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Social links */}
              <motion.a
                href="https://github.com/maajidAwol"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 right-0 bg-white dark:bg-gray-900 p-2 rounded-full shadow-md hoverable"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-[#0468D7]" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/maajidawol/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 left-0 bg-white dark:bg-gray-900 p-2 rounded-full shadow-md hoverable"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-[#54C5F8]" />
              </motion.a>
            </div>
          </motion.div>

          {/* Text Content - with improved text rendering */}
          <motion.div
            className="w-full md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium mb-2 text-gray-900 dark:text-white transition-colors duration-300 font-montserrat antialiased">
                ABDULMAJID AWOL
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0468D7] to-[#54C5F8]">
                  <TypeAnimation
                    sequence={[
                      "Software Engineer",
                      2000,
                      "Mobile Developer",
                      2000,
                      "Full Stack Developer",
                      2000,
                      "AI Enthusiast",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-6 transition-colors duration-300 font-light antialiased"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Creating elegant digital experiences with a focus on performance, accessibility, modern design, and AI automation.
            </motion.p>

            {/* Achievement badges */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-1 px-2 py-1 bg-purple-500/10 dark:bg-purple-500/20 rounded-full">
                <span className="text-xs">🎓</span>
                <span className="text-xs font-medium text-purple-700 dark:text-purple-300">
                  Honors Graduate • 3.78 GPA
                </span>
              </div>
              
              <div className="flex items-center gap-1 px-2 py-1 bg-orange-500/10 dark:bg-orange-500/20 rounded-full">
                <span className="text-xs">🔥</span>
                <span className="text-xs font-medium text-orange-700 dark:text-orange-300">
                  A2SV Hackathon Finalist
                </span>
              </div>
              
              <div className="flex items-center gap-1 px-2 py-1 bg-green-500/10 dark:bg-green-500/20 rounded-full">
                <span className="text-xs">⭐</span>
                <span className="text-xs font-medium text-green-700 dark:text-green-300">
                  Top-Rated Upwork Freelancer
                </span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0468D7] to-[#54C5F8] hover:from-[#0468D7]/90 hover:to-[#54C5F8]/90 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300 hoverable"
                asChild
              >
                <motion.a href="#projects" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  View My Work
                </motion.a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-black/80 hover:bg-black text-white border-0 font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300 hoverable"
                asChild
              >
                <motion.a href="#contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Get In Touch
                </motion.a>
              </Button>
            </motion.div>

            {/* Tech stack badges - Commented out to reduce clutter and avoid redundancy with project filters */}
            {/* <motion.div
              className="flex flex-wrap gap-2 mt-8 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              {["Flutter", "React", "Next.js", "Node.js", "AI/ML"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <ArrowDown className="h-6 w-6 text-gray-500 dark:text-white/70 transition-colors duration-300" />
      </motion.div>
    </section>
  )
}
