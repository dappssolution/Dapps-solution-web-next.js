"use client"

import { useEffect, useState } from "react";

export interface ServiceCard {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

interface ServiceDetailMainProps {
  services: ServiceCard[];
  header?: string;
  subheader?: string;
}

export default function ServiceDetailMain({ services, header = "Web application development", subheader = "services we deliver:" }: ServiceDetailMainProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 lg:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {header}
            <br />
            {subheader}
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group transition-all duration-700 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="h-full bg-white rounded-lg border border-gray-200 p-6 sm:p-8 hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:-translate-y-1">
                  {/* Icon Container */}
                  <div className="mb-6 inline-flex">
                    <div className="relative">
                      {/* Animated background glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      {/* Icon */}
                      <div className="relative bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-3 sm:p-4 text-white transform group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-12 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
