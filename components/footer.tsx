"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-50 dark:bg-black py-10 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="inline-block">
              <span className="font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0468D7] to-[#54C5F8] text-xl tracking-tight">
                ABDULMAJID
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md transition-colors duration-300 text-sm">
              Creating elegant digital experiences with a focus on performance, accessibility, modern design and AI automation.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-white dark:bg-gray-900 p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:border-[#0468D7] dark:hover:border-[#0468D7] transition-colors duration-300 mb-4 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-[#0468D7] dark:group-hover:text-[#0468D7] transition-colors duration-300" />
            </button>

            <div className="flex space-x-3">
              <a
                href="https://github.com/maajidAwol"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:border-[#0468D7] dark:hover:border-[#0468D7] transition-colors duration-300 hoverable"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-[#0468D7] dark:hover:text-[#0468D7] transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/maajidawol/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-900 p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:border-[#0468D7] dark:hover:border-[#0468D7] transition-colors duration-300 hoverable"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-[#0468D7] dark:hover:text-[#0468D7] transition-colors duration-300" />
              </a>

              <a
                href="mailto:maajidawol@gmail.com"
                className="bg-white dark:bg-gray-900 p-2 rounded-md border border-gray-200 dark:border-gray-800 hover:border-[#0468D7] dark:hover:border-[#0468D7] transition-colors duration-300 hoverable"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-[#0468D7] dark:hover:text-[#0468D7] transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-500 text-xs mb-4 md:mb-0 transition-colors duration-300">
            © {new Date().getFullYear()} Abdulmajid Awol.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* <Link
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-[#0468D7] dark:hover:text-[#0468D7] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-[#0468D7] dark:hover:text-[#0468D7] transition-colors duration-300"
            >
              Terms of Service
            </Link> */}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
