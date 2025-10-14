"use client"
import Image from "next/image" 
import { Plus, Minus } from "lucide-react"
import { Poppins } from 'next/font/google'
import { useState } from 'react'
import { useLanguage } from "@/contexts/LanguageContext";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Medium
  variable: '--font-poppins', // Optional, for Tailwind
})


interface Location {
  id: string;
  name: string;
  flag: string;
  address: string;
  mapUrl: string;
}

export default function LocationsSection() {
  const { t } = useLanguage();

  const locations: Location[] = [
    {
      id: 'india',
      name: t('location.india.name'),
      flag: '/images/india-flag.png',
      address: t('location.india.address'),
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.945519479!2d76.10872!3d11.11667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b5803b9e5c7b%3A0x3b7f8b8f8b8f8b8f!2sManjeri%2C%20Kerala!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin'
    },
    {
      id: 'saudi',
      name: t('location.saudi.name'),
      flag: '/images/saudia-flag.jpg',
      address: t('location.saudi.address'),
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6719404031995!2d46.6752773!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sAl%20Batha%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin'
    },
    {
      id: 'uk',
      name: t('location.uk.name'),
      flag: '/images/uk-flag.png',
      address: t('location.uk.address'),
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.1234567890123!2d-1.5083!3d52.4068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48774c9c8e8b3c1f%3A0x1e67c8735d3a2f25!2sCoventry%2C%20UK!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin'
    }
  ];

  const [selectedLocationId, setSelectedLocationId] = useState('india');
  const [isLoading, setIsLoading] = useState(false);

  const selectedLocation = locations.find(loc => loc.id === selectedLocationId) || locations[0];

  const handleLocationChange = (location: Location) => {
    setIsLoading(true);
    setSelectedLocationId(location.id);
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className={`container mx-auto px-5 md:px-16 lg:px-24 md:py-20 py-12 ${poppins.className}`}>
      <h1 className="text-4xl lg:text-[48px] font-medium mb-10">{t('location.title')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {locations.map((location) => (
          <div key={location.id}>
            <div
              onClick={() => handleLocationChange(location)}
              className={`bg-white rounded-lg border border-[#848484] py-3 lg:py-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                selectedLocationId === location.id ? 'ring-2 ring-black' : ''
              }`}
            >
              <div className="p-6 h-[140px]">
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-10 h-10 relative">
                    <Image 
                      src={location.flag} 
                      alt={`${location.name} Flag`} 
                      fill 
                      className="object-cover rounded-md"
                      priority
                      quality={100}
                    />
                  </div>
                  <h2 className="text-[30px] font-medium">{location.name}</h2>
                </div>
                <p className="text-gray-600 text-sm font-light">
                  {location.address}
                </p>
              </div>
            </div>
            
            {/* Mobile View Map - Show below selected location */}
            {selectedLocationId === location.id && (
              <div className="md:hidden mt-4">
                {isLoading ? (
                  <div className="animate-pulse bg-gray-200 h-[300px] rounded-lg"></div>
                ) : (
                  <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                      src={selectedLocation.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      className="grayscale"
                    ></iframe>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop View Map */}
      <div className="hidden md:block relative w-full h-[400px] rounded-lg overflow-hidden border border-gray-200">
        {isLoading ? (
          <div className="animate-pulse bg-gray-200 h-full rounded-lg"></div>
        ) : (
          <>
            <iframe
              src={selectedLocation.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="grayscale"
            ></iframe>

            {/* Map Controls */}
            <div className="absolute right-4 bottom-16 flex flex-col">
              <button className="bg-white w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
              <button className="bg-white w-8 h-8 flex items-center justify-center shadow-md border-t border-gray-200 hover:bg-gray-50 transition-colors">
                <Minus className="w-4 h-4" />
              </button>
            </div>

            {/* Map Attribution */}
            <div className="absolute bottom-0 left-0 right-0 bg-white text-[10px] text-gray-500 px-2 py-1">
              <span>{t('location.map.attribution')}</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
