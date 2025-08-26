"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  // Initialize EmailJS
  useEffect(() => {
      emailjs.init("zk9puILM9Ik9wRJEQ")
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    // Map EmailJS field names to formData properties
    let fieldName = name
    if (name === "from_name") fieldName = "name"
    if (name === "from_email") fieldName = "email"
    
    setFormData((prev) => ({ ...prev, [fieldName]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        "service_mnwy9ra", 
        "template_wos0nj5", 
        formRef.current!
      )

      if (result.status === 200) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        // Show success message
        setIsSubmitted(true)

        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (err) {
      console.error("Email sending error:", err)
      setError("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 section-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-[#0468D7]/5 dark:bg-[#0468D7]/10 text-[#0468D7] rounded-md text-sm font-medium mb-4 transition-colors duration-300">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            <span className="text-gray-900 dark:text-white">Let's Work Together</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto transition-colors duration-300">
            Have a project in mind or want to collaborate? Feel free to reach out and let's discuss how we can work
            together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#0468D7]/10 dark:bg-[#0468D7]/20 p-3 rounded-md mr-4 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-[#0468D7]" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1 text-gray-900 dark:text-white transition-colors duration-300">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">maajidawol@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0468D7]/10 dark:bg-[#0468D7]/20 p-3 rounded-md mr-4 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-[#0468D7]" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1 text-gray-900 dark:text-white transition-colors duration-300">
                    Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">+251 99 317 4585</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#0468D7]/10 dark:bg-[#0468D7]/20 p-3 rounded-md mr-4 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-[#0468D7]" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1 text-gray-900 dark:text-white transition-colors duration-300">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-base font-semibold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
                Connect With Me
              </h4>
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

              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                Send Me a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="from_name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="from_email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={4}
                    required
                    className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300"
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {isSubmitted && (
                  <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <AlertDescription className="text-green-600 dark:text-green-400">
                      Thank you so much for contacting me! I truly appreciate you taking the time to reach out. I'll get back to you as soon as possible.
                    </AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full bg-[#0468D7] hover:bg-[#0468D7]/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
