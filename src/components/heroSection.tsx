"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

const headlineVariants: Variants = {
  initial: { opacity: 0, y: 60, rotateX: 45, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 12, delay: 0.2 },
  },
};

const buttonVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.8 },
  },
  hover: { scale: 1.09, boxShadow: "0 0 32px 6px #A43EF9" },
  tap: { scale: 0.97 },
};

const logoVariants: Variants = {
  initial: { opacity: 0, scale: 0.7, rotateY: 30 },
  animate: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { type: "spring", stiffness: 80, damping: 10, delay: 0.6 },
  },
  hover: { rotateY: 15, scale: 1.12, boxShadow: "0 0 32px 0 #A43EF9" },
};

// Define the gradient once to reuse it
const gradient = "linear-gradient(135deg, #040150 0%, #5A189A 50%, #000 100%)";

const HeroSection = () => {
  const { t } = useLanguage();

  // WhatsApp prefilled message
  const whatsappNumber = "919947400278";
  const message = `Hello Dapps Solutions,%0AI'm interested in learning more about your AI-driven websites, automation systems, and digital transformation services designed to enhance business growth and efficiency.%0APlease share more details.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image (optimized) */}
        <Image
          src="/work-bg.jpg"
          alt="Background"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"
          draggable={false}
        />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-6 z-20"
      >
        <span
          className="inline-block px-3 py-2 font-semibold tracking-wider rounded-[8px] text-[14px] sm:text-base shadow-lg backdrop-blur-sm"
          style={{
            background: gradient,
            color: "#fff",
            letterSpacing: 2,
          }}
        >
          {t("hero.tagline")}
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={headlineVariants}
        initial="initial"
        animate="animate"
        className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-[1.1] drop-shadow-2xl flex flex-col items-center text-white gap-3 z-20 font-nohemi capitalize"
        style={{
          perspective: 800,
          textShadow: "0 8px 32px #040150",
        }}
      >
        
        <span>{t("hero.headline")}</span>
        <span className="flex items-center justify-center gap-3">
          {/* Show logo only on md+ screens */}
          <span className="hidden md:inline-flex">
            <motion.span
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              style={{ perspective: 600 }}
            >
              <Image
                src="/logo.png"
                alt="Dapps Solutions Logo"
                width={60}
                height={60}
                className="object-contain w-10 h-10 md:w-16 md:h-16"
                priority
              />
            </motion.span>
          </span>
          <span className="text-white">{t("hero.forYourBusiness")}</span>
        </span>
      </motion.h1>

      {/* CTA Button */}
      <motion.div
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        className="mt-10 z-20"
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 font-bold text-lg shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 rounded-[8px] focus:ring-[#040150] hover:scale-105 cursor-pointer inline-block"
          style={{
            background: gradient,
            color: "#fff",
            boxShadow: "0 4px 32px 0 #A43EF966",
            letterSpacing: 1.5,
          }}
        >
          {t("hero.cta")}
        </a>
      </motion.div>

      {/* Short Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-xl mt-8 leading-relaxed font-medium z-20"
        style={{
          color: "#FFFFFF",
          fontSize: "clamp(1rem, 2vw, 1.2rem)",
          textShadow: "0 2px 12px #040150",
        }}
      >
        {t("hero.shortTagline")}
      </motion.p>
    </section>
  );
};

export default HeroSection;
