"use client"


import Image from "next/image";

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { FiStar,  FiCheck } from "react-icons/fi"

export default function ContactFormPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // WhatsApp integration
    const whatsappNumber = "+919947400278";
    const message =
      `${t('contact.whatsapp.intro') || 'New Contact Form Submission:'}\n` +
      `${t('contact.whatsapp.name') || 'Name'}: ${formData.name}\n` +
      `${t('contact.whatsapp.email') || 'Email'}: ${formData.email}\n` +
      `${t('contact.whatsapp.phone') || 'Phone'}: ${formData.phone}\n` +
      `${t('contact.whatsapp.requirements') || 'Requirements'}: ${formData.requirements}`;
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank');
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", requirements: "" });
      setSubmitted(false);
    }, 2000);
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 md:p-8 ${language === 'ar' ? 'text-right' : ''}` } dir={language === 'ar' ? 'rtl' : 'ltr'}
    style={{
  backgroundImage: "url('/bg-3.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}
    >
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .form-input {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .form-input:nth-child(1) { animation-delay: 0.1s; }
        .form-input:nth-child(2) { animation-delay: 0.2s; }
        .form-input:nth-child(3) { animation-delay: 0.3s; }
        .form-input:nth-child(4) { animation-delay: 0.4s; }
        .form-input:nth-child(5) { animation-delay: 0.5s; }
      `}</style>

      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.85fr_1fr] gap-8 lg:gap-12 h-auto  pt-[120px]">
          {/* Left Section - Form */}
          <div className="flex flex-col justify-center animate-slide-in-left">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight form-input opacity-0">
                {t('contact.heading') || 'Start your journey to profit'}
              </h1>
              <p className="text-lg text-slate-600 mb-8 form-input opacity-0">
                {t('contact.subheading') || `Let's work together to grow your idea into a market success.`}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="form-input opacity-0">
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.name') || 'Name*'}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000539] focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                    placeholder={t('contact.namePlaceholder') || 'Your name'}
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 form-input opacity-0">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.email') || 'Email*'}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000539] focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                      placeholder={t('contact.emailPlaceholder') || 'your@email.com'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t('contact.phone') || 'Phone number*'}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000539] focus:border-transparent transition-all bg-slate-50 hover:bg-white"
                      placeholder={t('contact.phonePlaceholder') || '+1 (555) 000-0000'}
                    />
                  </div>
                </div>

                {/* Requirements Field */}
                <div className="form-input opacity-0">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t('contact.requirements') || 'Tell us about your requirements'}
                  </label>
                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#000539] focus:border-transparent transition-all bg-slate-50 hover:bg-white resize-none"
                    placeholder={t('contact.requirementsPlaceholder') || 'Describe your project, goals, and any specific requirements...'}
                  />
                </div>

                {/* Submit Button */}
                <div className="form-input opacity-0">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-gradient-to-r from-[#000539] to-[#000000] hover:from-[#1d2793] hover:to-purple-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    {submitted ? (
                      <>
                        <FiCheck className="w-5 h-5" />
                        {t('contact.sent') || 'Message sent!'}
                      </>
                    ) : (
                      <>
                        {t('contact.send') || 'Send a message'}
                        
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section - Testimonial */}
          <div className="flex flex-col justify-center animate-slide-in-right">
            <div className="bg-gradient-to-br from-[#030f96] via-[#000539] to-[#111a7d] rounded-2xl p-8 md:p-10 shadow-2xl text-white h-full flex flex-col justify-center">
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6 form-input opacity-0">
                <div className="w-12 h-12   rounded-full flex items-center justify-center font-bold text-[#000539]text-lg" >
                  <Image src="/rafi-one.jpg" alt="Logo" width={48} height={48} className="rounded-full object-cover w-full h-full" priority />
                </div>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 fill-red-400 text-red-400" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold mt-1">47 Reviews</p>
                </div>
              </div>

              {/* Testimonial Content */}
              <h3 className="text-2xl md:text-3xl font-bold mb-6 form-input opacity-0">{t('contact.testimonialTitle') || 'Our client says'}</h3>

              <blockquote className="text-lg md:text-xl leading-relaxed mb-8 italic form-input opacity-0">
                {t('contact.testimonialText') || `“The people working in Aufait are not just about doing their job and delivering, they are unique in their ability to communicate well, build rapport and have continuously great engagement. They have a great company culture.”`}
              </blockquote>

              {/* Client Info */}
              <div className="border-t border-white/30 pt-6 form-input opacity-0">
                <p className="font-bold text-lg">{t('contact.testimonialAuthor') || 'Director'}</p>
                <p className="text-purple-100">{t('contact.testimonialCompany') || 'Contracting PLUS'}</p>
              </div>
            </div>

            {/* Mobile Testimonial Card - Additional Info */}
            <div className="mt-6 lg:hidden bg-white rounded-xl p-6 shadow-md animate-fade-in-up">
              <p className="text-sm text-slate-600">
                {t('contact.mobileTestimonial') || 'Join hundreds of satisfied clients who have transformed their business with our services.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
