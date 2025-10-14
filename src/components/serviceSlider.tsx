"use client";

import React from "react";
 
 

type Service = {
  name: string;
  id: string;
};

export default function ServiceSlider() {
  const services: Service[] = [
    { name: "Branding", id: "branding" },
    { name: "App Development", id: "app-dev" },
    { name: "Social Media", id: "social" },
    { name: "Website Design", id: "website" },
    { name: "UX/UI Design", id: "ux-ui" },
    { name: "Digital Marketing", id: "marketing" },
  ];

 
 

 

 
    
  

 

  return (
   <div className="w-full h-screen">
      <div className="relative overflow-hidden py-12 w-full rotate-3" >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800 to-blue-900 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
         
        
        <div className="overflow-hidden"  >
          <div className="flex">
            {services.map((service) => (
              <div 
                key={service.id}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4 first:pl-0"
              >
                <div className="group cursor-pointer">
                  
                    <h3 className="text-white text-xl font-medium text-center group-hover:scale-105 transition-transform duration-300">
                      {service.name}
                    </h3>
            
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
      </div>
        
      </div>
   </div>
  );
}