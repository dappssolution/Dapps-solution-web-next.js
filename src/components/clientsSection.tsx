"use client";
import React from "react";
import Image from "next/image";

const LOGOS = [
  {
    src: "/dapps-logo.png",
    alt: "Dapps Solutions",
    label: "Dapps Solutions",
  },
  {
    src: "/dapps-logo.png",
    alt: "AWS",
    label: "aws",
  },
  {
    src: "/dapps-logo.png",
    alt: "Clutch",
    label: "Clutch",
  },
  {
    src: "/dapps-logo.png",
    alt: "AppFutura",
    label: "appfutura",
  },
  {
    src: "/dapps-logo.png",
    alt: "Google Ads",
    label: "Google Ads",
  },
  {
    src: "/dapps-logo.png",
    alt: "Trustpilot",
    label: "Trustpilot",
  },
];

const ClientsSection = () => {
  return (
    <section className="md:py-12 py-6 px-4 w-full bg-white  ">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 tracking-tight text-gray-900">
        Proudly Associated with
      </h2>
      <div
        className="w-full flex flex-row justify-center items-center gap-x-8 md:gap-x-16 lg:gap-x-24 xl:gap-x-32 overflow-x-auto scrollbar-hide px-2"
        aria-label="Associated Brands"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {LOGOS.map((logo) => (
          <div
            key={logo.alt}
            className="flex flex-col items-center min-w-[120px] max-w-[160px] mx-2 clients-3d-group"
            style={{ perspective: "600px" }}
          >
            <div className="relative h-12 md:h-16 lg:h-20 w-full flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={80}
                className="h-12 md:h-16 lg:h-20 object-contain mb-2 transition-transform duration-500"
                loading="lazy"
                sizes="(max-width: 768px) 120px, 160px"
                style={{ willChange: "transform" }}
                priority={false}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
