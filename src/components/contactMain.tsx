"use client"

import type React from "react"

import { useState } from "react" 
import {   Phone, Mail, Twitter, Linkedin, MessageCircle, Instagram } from "lucide-react"
// import Image from "next/image"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext";

// Add keyframes animation
const gradientAnimation = `
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default function ContactMain() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    
    // Format the message for WhatsApp
    const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nMessage: ${formData.message}`
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/966571961404?text=${encodedMessage}`, '_blank')
  }

  return (
    <div
      dir="ltr"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-5 md:px-16 lg:px-24 font-poppins`}
      style={{
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite',
        direction: 'ltr', // extra safety
      }}
    >
      <style>{gradientAnimation}</style>
      {/* Background image */}
      <div className="absolute w-full h-full">
        <Image 
          src="/images/contact-bg.webp" 
          alt="Contact background" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-12">
        {/* Right side form */}
        <div className="lg:w-1/2 w-full order-1 lg:order-2">
          <div className="lg:bg-[#9696961f] backdrop-blur-sm p-0 sm:p-2 md:p-8 rounded-[24px] lg:border lg:border-[#dedddd] lg:shadow-lg">
            <div className="sm:hidden block text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 sm:mb-6">{t('contact.title')}</h1>
          <p className="text-gray-300 text-[14px] sm:text-[16px] mb-8 sm:mb-12 lg:max-w-[460px] max-w-[300px] font-medium mx-auto lg:mx-0">
            {t('contact.subtitle')}
          </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-white font-medium text-left text-sm sm:text-base block">
                    {t('contact.form.firstName')}
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={t('contact.form.firstNamePlaceholder')}
                    className="w-full px-4 py-3 border border-[#dedddd] rounded-md sm:bg-[#a2a1a1] text-white placeholder:text-white placeholder:font-light focus:ring-2 focus:ring-white focus:outline-none transition-all text-left sm:px-3 sm:py-2 sm:rounded-md sm:border-0"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-white font-medium text-left text-sm sm:text-base block">
                    {t('contact.form.lastName')}
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={t('contact.form.lastNamePlaceholder')}
                    className="w-full px-4 py-3 border border-[#dedddd] rounded-md sm:bg-[#a2a1a1] text-white placeholder:text-white placeholder:font-light focus:ring-2 focus:ring-white focus:outline-none transition-all text-left sm:px-3 sm:py-2 sm:rounded-md sm:border-0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white font-medium text-left text-sm sm:text-base block">
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 py-3 border border-[#dedddd] rounded-md sm:bg-[#a2a1a1] text-white placeholder:text-white placeholder:font-light focus:ring-2 focus:ring-white focus:outline-none transition-all text-left sm:px-3 sm:py-2 sm:rounded-md sm:border-0"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="mobile" className="text-white font-medium text-left text-sm sm:text-base block">
                    {t('contact.form.mobile')}
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder={t('contact.form.mobilePlaceholder')}
                    className="w-full px-4 py-3 border border-[#dedddd] rounded-md sm:bg-[#a2a1a1] text-white placeholder:text-white placeholder:font-light focus:ring-2 focus:ring-white focus:outline-none transition-all text-left sm:px-3 sm:py-2 sm:rounded-md sm:border-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-white font-medium text-left text-sm sm:text-base block">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-4 py-3 border border-[#dedddd] rounded-md sm:bg-[#a2a1a1] text-white placeholder:text-white placeholder:font-light min-h-[120px] focus:ring-2 focus:ring-white focus:outline-none transition-all text-left sm:px-3 sm:py-2 sm:rounded-md sm:border-0"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-white sm:bg-black hover:bg-zinc-900 sm:text-white py-3 rounded-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-medium"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>

        {/* Left side content */}
        <div className=" w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
         <div className="hidden sm:block">
         <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-4 sm:mb-6">{t('contact.title')}</h1>
          <p className="text-gray-300 text-[14px] sm:text-[16px] mb-8 sm:mb-12 lg:max-w-[460px] max-w-[300px] font-medium mx-auto lg:mx-0">
            {t('contact.subtitle')}
          </p>
         </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center gap-4 sm:gap-5 bg-[#24242483] border border-[#dedddd] shadow-lg backdrop-blur-sm p-3 sm:p-4 px-6 sm:px-8 rounded-[24px] w-full sm:w-auto h-[80px]">
              <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-gray-300">
                <a href="tel:+919074851748" className="text-[14px] sm:text-[16px] font-medium hover:text-white transition-colors">+91 90748 51748,</a>
                <br />
                <a href="tel:+966571961404" className="text-[14px] sm:text-[16px] font-medium hover:text-white transition-colors">+966 571 961 404</a>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 bg-[#24242483] border border-[#dedddd] shadow-lg backdrop-blur-sm p-3 sm:p-4 px-6 sm:px-8 rounded-[24px] w-full sm:w-auto h-[80px]">
              <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              <div className="text-gray-300">
                <a href="mailto:info@brandbik.com" className="text-[14px] sm:text-[16px] font-medium hover:text-white transition-colors">info@brandbik.com</a>
                <br />
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-6 sm:mt-8 justify-center lg:justify-start">
            <a href="https://www.instagram.com/brandbik_creatives/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors transform hover:scale-110">
              <Instagram className="text-[20px] sm:text-[24px]" />
            </a>
            <a href="https://wa.me/919074851748" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors transform hover:scale-110">
              <MessageCircle className="text-[20px] sm:text-[24px]" />
            </a>
            <a href="https://twitter.com/brandbik" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors transform hover:scale-110">
              <Twitter className="text-[20px] sm:text-[24px]" />
            </a>
            <a href="https://www.linkedin.com/company/brandbik-creatives" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors transform hover:scale-110">
              <Linkedin className="text-[20px] sm:text-[24px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
