"use client"


import type React from "react"
import { FiMapPin, FiPhone, FiArrowRight } from "react-icons/fi"
import { useLanguage } from "../contexts/LanguageContext";

export default function LocationsSection() {
  const {  language } = useLanguage();
  const locations = [
    {
      id: 1,
      name: language === "ar" ? "دبي-ديرة" : "Dubai-Deira",
      address:
        language === "ar"
          ? "Dubai-Deira, UAE"
          : "Dubai-Deira, UAE",
      phone: "+971544878929",
      coordinates: { lat: 25.2048, lng: 55.2708 },
    },
    {
      id: 2,
      name: language === "ar" ? "كاليكوت" : "Calicut",
      address:
        language === "ar"
          ? "KPM Arcade, Calicut Road, Valanchery, Kerala, India, 676552"
          : "KPM Arcade, Calicut Road, Valanchery, Kerala, India, 676552",
      phone: "+91 9947400278",
      coordinates: { lat: 11.2588, lng: 75.7804 },
    },
    {
      id: 3,
      name: language === "ar" ? "Qatar" : "Qatar",
      address:
        language === "ar"
          ? "Doha, Qatar"
          : "Doha, Qatar",
      phone: "+91 9947400278",
      coordinates: { lat: 25.2854, lng: 51.5310 },
    },
  ];


  const handleLocationClick = (coordinates: { lat: number; lng: number }) => {
    const mapsUrl = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`
    window.open(mapsUrl, "_blank")
  }

  return (
    <section className={`w-full bg-white py-12 md:py-16 lg:py-20${language === "ar" ? " rtl" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-balance"
            style={{ color: "#000539" }}
          >
            {language === "ar"
              ?   "لاستكشاف فرص عمل أو أعمال أخرى، تواصل معنا"
              :   "To explore other business opportunities or career options, reach out to us"}
          </h2>
        </div>

  {/* Locations Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" style={{ direction: "ltr" }}>
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => handleLocationClick(location.coordinates)}
              className="group relative h-full overflow-hidden rounded-lg border border-gray-200 bg-white p-6 md:p-8 text-left transition-all duration-300 hover:shadow-lg hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ "--ring-color": "#000539" } as React.CSSProperties}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10">
                {/* Location Name with Icon */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#000539", color: "white" }}
                  >
                    <FiMapPin size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold" style={{ color: "#000539" }}>
                    {location.name}
                  </h3>
                </div>

                {/* Address */}
                <p className="mb-6 text-sm md:text-base leading-relaxed text-gray-600">{location.address}</p>

                {/* Phone */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <FiPhone size={18} style={{ color: "#000539" }} />
                  <a
                    href={`tel:${location.phone.replace(/\s/g, "")}`}
                    className="text-sm md:text-base font-medium transition-colors duration-200"
                    style={{ color: "#000539" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {location.phone}
                  </a>
                </div>

                {/* Arrow Icon on Hover */}
                <div className="absolute top-6 right-6 transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowRight
                    size={24}
                    style={{ color: "#000539" }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
