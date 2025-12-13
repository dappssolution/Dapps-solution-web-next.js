"use client";

import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

type Item = {
  src: string;
  alt: string;
  nameKey: string;
  roleKey: string;
  quoteKey: string;
};

const ITEMS: Item[] = [
  {
    src: "/web-development.jpg",
    alt: "Basil Saman",
    nameKey: "clientReview.item1.name",
    roleKey: "clientReview.item1.role",
    quoteKey: "clientReview.item1.quote",
  },
  {
    src: "/ai-agents.jpg",
    alt: "Fadhil Alim",
    nameKey: "clientReview.item2.name",
    roleKey: "clientReview.item2.role",
    quoteKey: "clientReview.item2.quote",
  },
];

const fadeAnimStyle = `
@keyframes fade-ltr {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
`;

export default function TestimonialHero() {
  const [index, setIndex] = useState(0);
  const { t, language } = useLanguage();

  // Auto advance carousel every 2 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % ITEMS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const current = useMemo(() => ITEMS[index], [index]);

  const prev = () =>
    setIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);
  const next = () => setIndex((prev) => (prev + 1) % ITEMS.length);

  // Add fade animation CSS on mount
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = fadeAnimStyle;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      className={`relative w-full min-h-screen overflow-hidden bg-white text-black${
        language === "ar" ? " rtl" : ""
      }`}
      aria-label="Testimonial Hero"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        {/* Left content */}
        <div className="flex flex-col gap-8">
          <header className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-black">
              {t("clientReview.title")}
            </h1>
            <p className="text-pretty leading-relaxed text-base sm:text-lg text-black">
              {t("clientReview.description")}
            </p>
          </header>

          <div className="flex flex-wrap items-center gap-6">
            <button
              className="inline-flex items-center gap-3 rounded-lg border border-border bg-secondary px-5 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              aria-label={t("clientReview.cta")}
            >
              <span>{t("clientReview.cta")}</span>
            </button>

            <div className="flex items-center gap-2 text-[#A43EF9]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="size-5" />
              ))}
              <span className="ml-2 text-sm text-[#A43EF9]">
                {t("clientReview.rating")}
              </span>
            </div>
          </div>

          <div className="mt-2 flex items-start gap-4 rounded-xl border border-[#4B1083] bg-white p-5">
            <div className="mt-1 rounded-full border border-[#4B1083] p-2 text-[#4B1083]">
              <FaStar className="size-6" />
            </div>
            <blockquote className="text-pretty leading-relaxed">
              <p className="text-base sm:text-lg text-black">
                {t("clientReview.blockquotePrefix")}
                {t(current.quoteKey)}
                {t("clientReview.blockquoteSuffix")}
              </p>
              <footer className="mt-3 text-sm text-[#4B1083]">
                {t("clientReview.blockquoteBy")
                  .replace("{name}", t(current.nameKey))
                  .replace("{role}", t(current.roleKey))}
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Right content - client image and controls */}
        <div
          className="relative w-full max-w-[400px] md:max-w-[340px] lg:max-w-[520px] flex items-center"
          style={{ height: "100%" }}
        >
          <div className="group relative w-full flex items-center justify-center">
            <div
              key={index}
              className="fade-anim-box relative w-full rounded-2xl bg-white overflow-hidden flex items-center justify-center"
              style={{ height: "100%" }}
            >
              <Image
                src={current.src}
                alt={current.alt}
                className="fade-img object-contain rounded-2xl"
                width={520}
                height={520}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "520px",
                  aspectRatio: "4/5",
                  animation: "fade-ltr 1.2s",
                  background: "black",
                  display: "block",
                }}
                unoptimized
              />
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[#4B1083] bg-white px-2 py-1">
                <button
                  className="rounded-full p-2 text-[#4B1083] transition hover:bg-[#4B1083] hover:text-white focus-visible:outline-none focus-visible:ring-2"
                  aria-label="Previous"
                  onClick={prev}
                >
                  <FiChevronLeft className="size-5" />
                </button>
                <div className="flex items-center gap-1">
                  {ITEMS.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-6 rounded-full transition-all ${
                        i === index ? "bg-[#4B1083]" : "bg-black"
                      }`}
                      aria-hidden
                    />
                  ))}
                </div>
                <button
                  className="rounded-full p-2 text-[#4B1083] transition hover:bg-[#4B1083] hover:text-white focus-visible:outline-none focus-visible:ring-2"
                  aria-label="Next"
                  onClick={next}
                >
                  <FiChevronRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
