"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FaqItem {
  question: string
  answer: string
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const faqItems: FaqItem[] = [
    {
      question: "What digital services do you offer?",
      answer: "We provide a comprehensive suite of digital services including web development, mobile app development, brand development, digital marketing, advertising, and social media management. Our integrated approach ensures all your digital needs are met under one roof, creating cohesive and effective digital solutions.",
    },
    {
      question: "How do you approach web and app development projects?",
      answer: "Our development process follows industry best practices: Requirements Analysis → Design & Prototyping → Development → Testing → Deployment → Maintenance. We use modern technologies and frameworks, ensuring responsive, secure, and scalable solutions. We also focus on user experience and performance optimization.",
    },
    {
      question: "What digital marketing services do you provide?",
      answer: "Our digital marketing services include SEO optimization, PPC advertising, content marketing, email marketing, social media marketing, and analytics. We create data-driven strategies tailored to your business goals, focusing on measurable results and ROI. We also provide regular performance reports and optimization recommendations.",
    },
    {
      question: "How do you handle social media management?",
      answer: "Our social media management includes content strategy, content creation, community management, paid social advertising, and performance analytics. We develop platform-specific strategies, create engaging content, and maintain consistent brand voice across all channels. We also provide regular performance reports and optimization strategies.",
    },
    {
      question: "What is your approach to brand development and advertising?",
      answer: "We combine strategic brand development with creative advertising solutions. This includes brand strategy, visual identity design, brand guidelines, advertising campaigns, and brand implementation across all channels. We ensure your brand message is consistent and impactful across all touchpoints.",
    },
    {
      question: "How do you measure the success of your digital services?",
      answer: "We use various metrics and KPIs specific to each service: website traffic and conversion rates for web development, app downloads and user engagement for app development, brand awareness and recognition for branding, ROI and conversion rates for digital marketing, and engagement metrics for social media. We provide detailed analytics and regular performance reports.",
    },
    {
      question: "What is your project timeline and pricing structure?",
      answer: "Project timelines vary based on scope and complexity. Web development typically takes 8-12 weeks, app development 12-16 weeks, and digital marketing campaigns are ongoing. We offer flexible pricing models including project-based, retainer, and performance-based options. We provide detailed proposals with clear timelines and pricing before project commencement.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages for all our services. This includes regular updates, security patches, performance monitoring, content updates, and technical support. We also provide training and documentation to help your team manage and maintain the solutions we create.",
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full px-4 md:px-16 lg:px-32 bg-[#efefef] py-8 lg:py-20">
      <h1 className={`text-3xl lg:text-[48px] font-bold mb-8 font-poppins`}>FAQ</h1>
      <div className="space-y-1">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="font-medium text-base md:text-lg pr-4">{item.question}</span>
              <motion.div
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 text-gray-600">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}