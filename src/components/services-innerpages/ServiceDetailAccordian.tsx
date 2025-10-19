"use client"

import { useState, useEffect } from "react"
import { Plus, Minus } from "lucide-react"

interface Vertical {
  title: string;
  description: string;
}

interface ServiceDetailAccordionProps {
  title: string;
  verticals: Vertical[];
}

const ServiceDetailAccordion = ({ title, verticals }: ServiceDetailAccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(5);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Section - Title */}
          <div
            className="animate-in fade-in slide-in-from-left-8 duration-700"
            style={{
              animation: mounted ? "fadeInSlideLeft 0.8s ease-out" : "none",
            }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title}
            </h1>
          </div>

          {/* Right Section - Accordion */}
          <div
            className="space-y-0"
            style={{
              animation: mounted ? "fadeInSlideRight 0.8s ease-out" : "none",
            }}
          >
            {verticals.map((vertical, index) => (
              <div
                key={index}
                className="border-b border-purple-500/20 transition-all duration-300"
                style={{
                  animation: mounted ? `fadeInUp 0.6s ease-out ${0.1 * index}s both` : "none",
                }}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full py-4 sm:py-5 lg:py-6 px-0 flex items-center justify-between group hover:opacity-80 transition-opacity duration-200"
                >
                  <span className="text-lg sm:text-xl lg:text-2xl font-medium text-white text-left">
                    {vertical.title}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {expandedIndex === index ? (
                      <Minus
                        size={24}
                        className="text-purple-400 transition-transform duration-300"
                        style={{
                          animation: "rotateIn 0.3s ease-out",
                        }}
                      />
                    ) : (
                      <Plus
                        size={24}
                        className="text-white group-hover:text-purple-400 transition-colors duration-200"
                        style={{
                          animation: "rotateIn 0.3s ease-out",
                        }}
                      />
                    )}
                  </div>
                </button>

                {/* Animated Underline */}
                {expandedIndex === index && (
                  <div
                    className="h-0.5 bg-gradient-to-r from-purple-500 to-purple-400 mb-4"
                    style={{
                      animation: "slideInWidth 0.4s ease-out",
                    }}
                  />
                )}

                {/* Expanded Content */}
                {expandedIndex === index && (
                  <div
                    className="overflow-hidden"
                    style={{
                      animation: "slideDown 0.3s ease-out",
                    }}
                  >
                    <p className="text-sm sm:text-base text-purple-200/80 pb-4 sm:pb-5 lg:pb-6 leading-relaxed">
                      {vertical.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInSlideLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInSlideRight {
          from {
            opacity: 0;
            transform: translateX(40px);
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

        @keyframes slideInWidth {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 500px;
            transform: translateY(0);
          }
        }

        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-90deg) scale(0.5);
          }
          to {
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }
      `}</style>
    </div>
  )
}

export default ServiceDetailAccordion
