"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, X } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface GetStartedPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetStartedPanel({ isOpen, onClose }: GetStartedPanelProps) {
  const [activeSection, setActiveSection] = useState("impact")
  const { t } = useLanguage()

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-700 ease-out ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Main Content Container */}
      <div
        className={`relative w-full h-full transform transition-transform duration-700 ease-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-10 p-3 text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex h-full">
          {/* Left Content Section */}
          <div className="flex-1 flex flex-col justify-center px-16 lg:px-24 relative">
            <div
              key={activeSection}
              className="animate-in slide-in-from-left-8 duration-500 relative z-10"
            >
              {activeSection === "impact" && (
                <>
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    {t('panel.impact.title')}
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                    {t('panel.impact.desc')}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.impact.feature1.title')}</h3>
                      <p className="text-white/70">{t('panel.impact.feature1.desc')}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.impact.feature2.title')}</h3>
                      <p className="text-white/70">{t('panel.impact.feature2.desc')}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-3">{t('panel.impact.feature3.title')}</h3>
                      <p className="text-white/70">{t('panel.impact.feature3.desc')}</p>
                    </div>
                  </div>

                  <Link
                    href="/impact"
                    onClick={onClose}
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg">{t('panel.impact.cta')}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}

              {activeSection === "testimonials" && (
                <>
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    {t('panel.testimonials.title')}
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                    {t('panel.testimonials.desc')}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.testimonials.feature1.title')}</h3>
                      <p className="text-white/70">{t('panel.testimonials.feature1.desc')}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.testimonials.feature2.title')}</h3>
                      <p className="text-white/70">{t('panel.testimonials.feature2.desc')}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.testimonials.feature3.title')}</h3>
                      <p className="text-white/70">{t('panel.testimonials.feature3.desc')}</p>
                    </div>
                  </div>

                  <Link
                    href="/testimonials"
                    onClick={onClose}
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg">{t('panel.testimonials.cta')}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}

              {activeSection === "clients" && (
                <>
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    {t('panel.clients.title')}
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                    {t('panel.clients.desc')}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.clients.feature1.title')}</h3>
                      <p className="text-white/70">{t('panel.clients.feature1.desc')}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.clients.feature2.title')}</h3>
                      <p className="text-white/70">{t('panel.clients.feature2.desc')}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.clients.feature3.title')}</h3>
                      <p className="text-white/70">{t('panel.clients.feature3.desc')}</p>
                    </div>
                  </div>

                  <Link
                    href="/clients"
                    onClick={onClose}
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg">{t('panel.clients.cta')}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}

              {activeSection === "partnership" && (
                <>
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    {t('panel.partnership.title')}
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                    {t('panel.partnership.desc')}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.partnership.feature1.title')}</h3>
                      <p className="text-white/70">{t('panel.partnership.feature1.desc')}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.partnership.feature2.title')}</h3>
                      <p className="text-white/70">{t('panel.partnership.feature2.desc')}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.partnership.feature3.title')}</h3>
                      <p className="text-white/70">{t('panel.partnership.feature3.desc')}</p>
                    </div>
                  </div>

                  <Link
                    href="/partnership"
                    onClick={onClose}
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg">{t('panel.partnership.cta')}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}

              {activeSection === "insights" && (
                <>
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    {t('panel.insights.title')}
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                    {t('panel.insights.desc')}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.insights.feature1.title')}</h3>
                      <p className="text-white/70">{t('panel.insights.feature1.desc')}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.insights.feature2.title')}</h3>
                      <p className="text-white/70">{t('panel.insights.feature2.desc')}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.insights.feature3.title')}</h3>
                      <p className="text-white/70">{t('panel.insights.feature3.desc')}</p>
                    </div>
                  </div>

                  <Link
                    href="/insights"
                    onClick={onClose}
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg">{t('panel.insights.cta')}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}

              {activeSection === "contact" && (
                <>
                  <h1 className="text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                    {t('panel.contact.title')}
                  </h1>

                  <p className="text-lg text-white/80 mb-12 leading-relaxed max-w-2xl">
                    {t('panel.contact.desc')}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.contact.feature1.title')}</h3>
                      <p className="text-white/70">{t('panel.contact.feature1.desc')}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.contact.feature2.title')}</h3>
                      <p className="text-white/70">{t('panel.contact.feature2.desc')}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                      <h3 className="text-xl font-medium text-white mb-2">{t('panel.contact.feature3.title')}</h3>
                      <p className="text-white/70">{t('panel.contact.feature3.desc')}</p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="text-lg">{t('panel.contact.cta')}</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Right Navigation Section */}
          <div className="w-64 lg:w-80 border-l border-white/10 flex flex-col justify-center px-8 lg:px-12">
            <nav className="space-y-2">
              {[
                { key: "impact", label: t('panel.impact') },
                { key: "testimonials", label: t('panel.testimonials') },
                { key: "clients", label: t('panel.clients') },
                { key: "partnership", label: t('panel.partnership') },
                { key: "insights", label: t('panel.insights') },
                { key: "contact", label: t('panel.getInTouch') }
              ].map((section) => (
                <button
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.key
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}