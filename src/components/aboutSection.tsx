/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useEffect, useState, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
 

 

 

 

const AboutSection = () => {
  const gradient = "linear-gradient(135deg, #040150 0%, #5A189A 50%, #000 100%)";

  const carouselImages = [
    {
      src: "https://img.freepik.com/premium-photo/phone-mobile-application-development-concept-mobile-internet-3d-illustration_76964-5164.jpg?w=826",
      alt: "Shamna",
    },
    {
      src: "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/02/179_1675948994.png",
      alt: "Shaheed",
    },
  ];

  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const prevImg = () => setImgIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const nextImg = () => setImgIndex((prev) => (prev + 1) % carouselImages.length);

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const languageContext = useContext(LanguageContext);
  const t = languageContext?.t || ((key: string) => key);

  return (
    <section className="relative w-full bg-white py-14  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col md:flex-row items-center md:items-start gap-10"
        >
          {/* Left: Animated image carousel */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
            className="md:w-1/2 w-full justify-center hidden md:flex"
            style={{ minHeight: "420px", maxHeight: "600px" }}
          >
            <div className="relative w-full flex items-center justify-center" style={{ maxWidth: "520px", height: "100%" }}>
              <div
                key={imgIndex}
                className="fade-anim-box relative w-full rounded-2xl bg-white overflow-hidden flex items-center justify-center"
                style={{ height: "100%" }}
              >
                <Image
                  src={carouselImages[imgIndex].src}
                  alt={carouselImages[imgIndex].alt}
                  className="fade-img object-cover rounded-2xl"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "520px",
                    aspectRatio: "4/5",
                    animation: "fade-ltr 1.2s",
                    background: "black",
                    display: "block",
                  }}
                  loading="eager"
                  width={520}
                  height={520}
                  priority
                  unoptimized
                />
                <style>{`
                  @keyframes fade-ltr {
                    0% { opacity: 0; transform: translateX(-40px); }
                    100% { opacity: 1; transform: translateX(0); }
                  }
                `}</style>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[#4B1083] bg-white px-2 py-1">
                  <button
                    className="rounded-full p-2 text-[#4B1083] transition hover:bg-[#4B1083] hover:text-white"
                    onClick={prevImg}
                  >
                    <FiChevronLeft className="size-5" />
                  </button>
                  <div className="flex items-center gap-1">
                    {carouselImages.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-6 rounded-full transition-all ${i === imgIndex ? "bg-[#A43EF9]" : "bg-black"}`}
                      />
                    ))}
                  </div>
                  <button
                    className="rounded-full p-2 text-[#4B1083] transition hover:bg-[#4B1083] hover:text-white"
                    onClick={nextImg}
                  >
                    <FiChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
            className="md:w-1/2 w-full flex flex-col justify-center"
          >
            <div className="flex justify-start items-center">
              <span
                className="mb-4 text-xs font-medium sm:text-sm text-white rounded-[8px] px-3 py-2"
                style={{ background: gradient }}
              >
                {t('aboutSection.badge')}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black">
              {t('aboutSection.headline')}
            </h2>
            <p className="text-gray-600 mb-8 text-base md:text-lg max-w-xl">
              {t('aboutSection.description')}
            </p>
            <motion.a href="/about">
              <button
                className="px-8 py-3 font-bold text-lg shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 rounded-[8px] focus:ring-[#A43EF9] border-2 hover:scale-105"
                style={{
                  background: gradient,
                  color: "#fff",
                  borderColor: "#A43EF9",
                  boxShadow: "0 4px 32px 0 #A43EF966",
                  letterSpacing: 1.5,
                }}
              >
                {t('aboutSection.button')}
              </button>
            </motion.a>
          </motion.div>
        </motion.div>

         
      </div>
    </section>
  );
};

export default AboutSection;
