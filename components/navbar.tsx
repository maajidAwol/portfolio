"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import ThemeToggle from "@/components/theme-toggle"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section based on scroll position
      const sections = ["home", "projects", "skills", "resume", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 dark:bg-black/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold hoverable">
          <div className="flex items-center">
            <span className="font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0468D7] to-[#54C5F8] text-xl md:text-2xl tracking-tight">
              ABDULMAJID
            </span>
            <span className="ml-1 h-4 w-1 bg-[#0468D7] rounded-full animate-pulse"></span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-gray-700 dark:text-gray-300 hover:text-[#0468D7] dark:hover:text-white transition-colors duration-300 relative group px-1 py-1 text-sm font-medium hoverable ${
                activeSection === link.href.substring(1) ? "text-[#0468D7] dark:text-white" : ""
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#0468D7] transition-all duration-300 ${
                  activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}

          <div className="flex items-center gap-3 ml-4">
            <ThemeToggle />

            <Button
              className="bg-gradient-to-r from-[#0468D7] to-[#54C5F8] hover:from-[#0468D7]/90 hover:to-[#54C5F8]/90 text-white rounded-full shadow-md hoverable"
              size="sm"
              asChild
            >
              <Link href="/Abdulmajid-Awol(CV).pdf" target="_blank" download>
              <Download className="mr-2 h-4 w-4" /> Download CV
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-3">
          <ThemeToggle />

          <Button
            className="bg-gradient-to-r from-[#0468D7] to-[#54C5F8] hover:from-[#0468D7]/90 hover:to-[#54C5F8]/90 text-white rounded-full shadow-md hoverable"
            size="sm"
          >
            <Download className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-white hoverable"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-gray-800 dark:text-gray-300 hover:text-[#0468D7] dark:hover:text-white transition-colors duration-300 py-2 border-b border-gray-200/50 dark:border-gray-800/50 ${
                    activeSection === link.href.substring(1) ? "text-[#0468D7] dark:text-white font-medium" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
