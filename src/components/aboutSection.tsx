/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useEffect, useState } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";


const stats = [
  { label: "Years of experience", value: 20, suffix: "+" },
  { label: "Client Satisfaction", value: 120, suffix: "+" },
  { label: "Awards Achievement", value: 50, suffix: "+" },
];

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

function AnimatedCounter({ value, suffix }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const start = 0;
      const end = value;
      if (start === end) return;
      const duration = 1200;
      const increment = end / (duration / 16);
      let current = start;
      const step = () => {
        current += increment;
        if (current < end) {
          setCount(Math.floor(current));
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      step();
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function SpinnerKnot() {
  const meshRef = useRef<any>(null);
  useEffect(() => {
    let frame: number;
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.012;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[0.8, 0.25, 120, 16]} />
      <meshStandardMaterial roughness={0.35} metalness={0.6} color="#111" />
    </mesh>
  );
}

const AboutSection = () => {
  // Carousel logic for images (same as clientReview.tsx)
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
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="relative w-full bg-white py-14 md:py-28 overflow-hidden">
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
          {/* Left: Animated image carousel, hidden on mobile */}
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
                    className="rounded-full p-2 text-[#4B1083] transition hover:bg-[#4B1083] hover:text-white focus-visible:outline-none focus-visible:ring-2"
                    aria-label="Previous"
                    onClick={prevImg}
                  >
                    <FiChevronLeft className="size-5" />
                  </button>
                  <div className="flex items-center gap-1">
                    {carouselImages.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-6 rounded-full transition-all ${i === imgIndex ? "bg-[#A43EF9]" : "bg-black"}`}
                        aria-hidden
                      />
                    ))}
                  </div>
                  <button
                    className="rounded-full p-2 text-[#4B1083] transition hover:bg-[#4B1083] hover:text-white focus-visible:outline-none focus-visible:ring-2"
                    aria-label="Next"
                    onClick={nextImg}
                  >
                    <FiChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Right: Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
            className="md:w-1/2 w-full flex flex-col justify-center"
          >
            <div className="flex justify-start items-center"> <span className="mb-4 text-xs font-medium text-muted-foreground sm:text-sm text-white rounded-[8px] px-3 py-2 bg-[#A43EF9]">About</span></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-black">
              We prioritize open communication and reliability, keeping you informed and valued every step.
            </h2>
            <p className="text-gray-600 mb-8 text-base md:text-lg max-w-xl">
              At Leniq, we believe that creativity has the power to transform brands and connect them with their audiences in meaningful ways. Based in the heart of innovation, our agency specializes in crafting digital experiences that resonate and inspire.
            </p>
            <motion.a href="/about">
              <button
                className="px-8 cursor-pointer py-3 font-bold text-lg shadow-2xl transition-all duration-200 focus:outline-none focus:ring-4 rounded-[8px] focus:ring-[#A43EF9] border-2 border-[#A43EF9] hover:scale-105"
                style={{
                  background: 'linear-gradient(90deg, #A43EF9 0%, #5A189A 100%)',
                  color: '#fff',
                  boxShadow: '0 4px 32px 0 #A43EF966',
                  letterSpacing: 1.5,
                }}
              >
                About Us
              </button>
            </motion.a>
          </motion.div>
        </motion.div>
        {/* Stats Section - enhanced colors and style */}
        <div className="relative flex flex-col items-center justify-center mt-16">
          {/* 3D Canvas background */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-30 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }} dpr={[1, 1.5]} style={{ width: '100%', height: 260 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 3, 2]} intensity={1} />
              <group position={[0, -0.2, 0]}>
                <SpinnerKnot />
              </group>
              <Environment preset="studio" />
            </Canvas>
          </div>
          <motion.div
            className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.22 } },
            }}
          >
            {stats.map((stat, i) => {
              // Linear gradient palette for cards
              const gradients = [
                "linear-gradient(135deg, #A43EF9 0%, #E1AAFF 100%)",
                "linear-gradient(135deg, #3D096C 0%, #5A189A 100%)",
                "linear-gradient(135deg, #5A189A 0%, #A43EF9 100%)",
              ];
              return (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 60, scale: 0.85, rotateX: 30 },
                    visible: { opacity: 1, y: 0, scale: 1, rotateX: 0, transition: { duration: 0.9, ease: "easeOut" } },
                  }}
                  whileHover={{ scale: 1.07, boxShadow: "0 0 32px 0 #11111122", rotateY: 8 }}
                  className={`rounded-2xl p-8 text-center shadow-xl border-2 transition-all duration-300 hover:border-white hover:shadow-2xl text-white`}
                  style={{ background: gradients[i % gradients.length], borderColor: "#E1AAFF" }}
                >
                  <div className={`text-base font-semibold mb-2 tracking-wide uppercase text-white`}>{stat.label}</div>
                  <div className="text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-1">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
