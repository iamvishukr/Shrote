"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { db } from "@/lib/firebase"
import { addDoc, collection } from "firebase/firestore"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult("Sending...")

    try {
      // 1. Save to DB
      await addDoc(collection(db, "contactUs"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date(),
      })

      // 2. Send to Web3Forms
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "41cea524-32f1-47ce-8c82-995b98110cbc",
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: "Shrote Website - Landing Page Contact"
          }),
        })
      } catch (err) {
        console.error("Web3Forms submission failed:", err)
      }

      setResult("Message sent successfully! ✅")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error adding document: ", error)
      setResult("Something went wrong ❌. Please try again!")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "info@shrote.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+91-7667983607",
      description: "Mon-Sat from 10am to 8pm IST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "25th Main Rd, Jayanagara, Bengaluru, Karnataka 560041",
      description: "Come say hello at our office",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-[#F5F5F4] relative overflow-hidden" ref={ref}>
      {/* Background Orbs */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
            Ready to start your next project or have questions? Let's build something exceptional together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">Let's Start a Conversation</h3>
              <p className="text-stone-500 leading-relaxed font-light">
                We're here to help bring your vision to life. Whether you have a specific project in mind or just want to
                explore possibilities, we'd love to chat about how we can work together.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-white border border-gray-100 hover:border-blue-500/20 rounded-2xl p-5 hover:bg-gray-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-stone-900 font-semibold text-base mb-0.5">{item.title}</h4>
                    <p className="text-blue-600 font-medium text-sm mb-1">{item.info}</p>
                    <p className="text-stone-500 text-xs font-light">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-950/30 backdrop-blur-md border border-white/5 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_32px_rgb(0,0,0,0.06)]">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label className="block text-stone-700 font-medium text-sm mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-gray-200 rounded-xl text-stone-900 placeholder-stone-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-sm"
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label className="block text-stone-700 font-medium text-sm mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-gray-200 rounded-xl text-stone-900 placeholder-stone-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-sm"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label className="block text-stone-700 font-medium text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-stone-50 border border-gray-200 rounded-xl text-stone-900 placeholder-stone-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 text-sm"
                  placeholder="Project inquiry"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label className="block text-stone-700 font-medium text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-stone-50 border border-gray-200 rounded-xl text-stone-900 placeholder-stone-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 focus:outline-none transition-all duration-300 resize-none text-sm"
                  placeholder="Tell us about your project..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white rounded-xl font-bold tracking-wide shadow-[0_4px_20px_rgba(59,130,246,0.25)] hover:shadow-[0_4px_30px_rgba(59,130,246,0.45)] hover:opacity-95 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none text-sm"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Send size={16} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {result && (
                <p className={`text-center mt-4 text-sm font-medium ${result.includes("successfully") ? "text-green-400" : "text-slate-400"}`}>
                  {result}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
