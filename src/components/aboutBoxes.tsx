'use client'

// Removed unused Suspense import after fallback cleanup
import { useLanguage } from "@/contexts/LanguageContext"
import React from 'react';
// Import react-icons for box icons
import { FiBriefcase, FiCheck, FiGlobe, FiTrendingUp, FiDollarSign, FiSmile } from "react-icons/fi";

// Separate client component for interactive cards

const InteractiveCard = ({ 
  imageAlt, 
  title, 
  description,
}: { 
  // imageSrc removed
  imageAlt: string; 
  title: React.ReactNode; 
  description: string;
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    
    <div 
      className="flex flex-col relative z-30 border rounded-[8px] border-gray-400 bg-gray-700/50 backdrop-blur-md transition-all duration-300 ease-out "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="p-8 lg:p-16 flex justify-center items-center mb-0">
        <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center rounded-[8px] bg-gradient-to-br from-[#A43EF9] via-[#3D096C] to-[#E1AAFF] shadow-lg">
          {imageAlt === "Brands We Work With" && <FiBriefcase className="text-white text-3xl lg:text-4xl" />}
          {imageAlt === "Projects Completed" && <FiCheck className="text-white text-3xl lg:text-4xl" />}
          {imageAlt === "Countries we work with" && <FiGlobe className="text-white text-3xl lg:text-4xl" />}
          {imageAlt === "Brands scaled with us" && <FiTrendingUp className="text-white text-3xl lg:text-4xl" />}
          {imageAlt === "Revenue Generated" && <FiDollarSign className="text-white text-3xl lg:text-4xl" />}
          {imageAlt === "Happy Clients" && <FiSmile className="text-white text-3xl lg:text-4xl" />}
        </div>
      </div>
      <div className="bg-white p-4 lg:p-4 h-[80px] lg:h-auto flex flex-col justify-center rounded-b-[8px]">
        <h3 className={`text-xl lg:text-3xl font-bold text-gray-900 font-poppins`}>{title}</h3>
        <p className="text-sm lg:text-base text-gray-500">{description}</p>
      </div>
    </div>
  );
};

// Main server component
export default function AboutBoxes() {
  const { t } = useLanguage()
  
  const cards = [
    {
      imageSrc: "/images/work-one.png",
      imageAlt: "Brands We Work With",
      value: 20,
      suffix: "",
      description: t('about.boxes.brands')
    },
    {
      imageSrc: "/images/work-two.png",
      imageAlt: "Projects Completed",
      value: 40,
      suffix: "",
      description: t('about.boxes.projects')
    },
    {
      imageSrc: "/images/work-three.png",
      imageAlt: "Countries we work with",
      value: 5,
      suffix: "",
      description: t('about.boxes.countries')
    },
    {
      imageSrc: "/images/work-four.png",
      imageAlt: "Brands scaled with us",
      value: 20,
      suffix: "",
      description: t('about.boxes.scaled')
    },
    {
      imageSrc: "/images/work-five.png",
      imageAlt: "Revenue Generated",
      value: "2M",
      suffix: "",
      description: t('about.boxes.revenue')
    },
    {
      imageSrc: "/images/work-one.png",
      imageAlt: "Happy Clients",
      value: 45,
      suffix: "",
      description: t('about.boxes.clients'),
      className: "block lg:hidden"
    }
  ];

  return (
    <div className="relative pt-16 lg:py-28 flex justify-center items-center w-full   px-4 md:px-16 lg:px-24 overflow-hidden"
    style={{
  backgroundImage: "url('/work-bg.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}
>
 
      {/* Shadow effects */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent"></div>
      </div>

      <div className="container mx-auto">
        <div
          className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar pb-4 lg:pb-0 lg:grid lg:grid-cols-5"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            overflowY: 'hidden',
          }}
        >
          {cards.map((card, index) => {
            const displayValue = <span dir="ltr">{card.value}+</span>;
            return (
              <div
                key={index}
                className={index === 5 ? "block lg:hidden" : "about-box-square"}
                style={{
                  width: '260px',
                  minWidth: '260px',
                  height: '260px',
                  maxWidth: '100%',
                  display: index === 5 ? undefined : 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  borderRadius: '8px',
                }}
              >
                <InteractiveCard
                  imageAlt={card.imageAlt}
                  title={displayValue}
                  description={card.description}
                />
              </div>
            );
          })}
        </div>
          <style>{`
          .hide-scrollbar {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none !important;
          }
          .about-box-square {
            width: 240px !important;
            min-width: 240px !important;
            height: 290px !important;
            border-radius: 8px; !important;
          }
          @media (max-width: 640px) {
            .about-box-square {
              width: 180px !important;
              min-width: 180px !important;
              height: 180px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}