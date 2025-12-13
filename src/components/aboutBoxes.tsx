"use client";

import React, { useRef, useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
// Load Montserrat font with required weights
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FiBriefcase,
  FiCheck,
  FiGlobe,
  FiTrendingUp,
  FiDollarSign,
  FiSmile,
  FiArrowRight,
} from "react-icons/fi";

// ---------------------------------------------------------------------------
// 1. Data & Types
// ---------------------------------------------------------------------------

type CardData = {
  id: number; // Added ID for reliable keying
  imageAlt: string;
  value: string | number;
  description: string;
  details: string;
};

// ---------------------------------------------------------------------------
// 2. The Individual Card Component (Mobile-only, Compact Size)
// ---------------------------------------------------------------------------

interface StatCardProps {
  data: CardData;
  isLeft: boolean; // Prop to determine gradient direction
}

const StatCard = ({ data, isLeft }: StatCardProps) => {
  const router = useRouter();

  // GRADIENT LOGIC
  const gradientClass = isLeft
    ? "bg-gradient-to-br from-[#452D9B] to-[#01040D]"
    : "bg-gradient-to-br from-[#01040D] to-[#452D9B]";

  const handleClick = () => {
    router.push("/about");
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative w-full h-full
        flex flex-col justify-between
        rounded-[20px] p-5
        shadow-xl
        border border-white/10
        group cursor-pointer
        ${gradientClass}
        ${montserrat.className}
      `}
    >
      {/* Top Section: Icon & Arrow */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/5 shadow-inner">
          {data.imageAlt === "Brands We Work With" && (
            <FiBriefcase className="text-white text-xl" />
          )}
          {data.imageAlt === "Projects Completed" && (
            <FiCheck className="text-white text-xl" />
          )}
          {data.imageAlt === "Countries we work with" && (
            <FiGlobe className="text-white text-xl" />
          )}
          {data.imageAlt === "Brands scaled with us" && (
            <FiTrendingUp className="text-white text-xl" />
          )}
          {data.imageAlt === "Revenue Generated" && (
            <FiDollarSign className="text-white text-xl" />
          )}
          {data.imageAlt === "Happy Clients" && (
            <FiSmile className="text-white text-xl" />
          )}
        </div>

        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:bg-white group-hover:text-[#452D9B] transition-all duration-300 text-white transform group-hover:-rotate-45">
          <FiArrowRight className="text-sm" />
        </div>
      </div>

      {/* Middle Section: Big Number & Title */}
      <div className="mb-3">
        <h2 className="text-3xl font-bold text-white mb-1 tracking-tighter drop-shadow-lg">
          {data.value}+
        </h2>
        <h3 className="text-sm font-bold text-purple-200 uppercase tracking-wide">
          {data.imageAlt}
        </h3>
      </div>

      {/* Bottom Section: Description & Details */}
      <div>
        <p className="text-sm text-gray-200 font-medium mb-2 leading-relaxed">
          {data.description}
        </p>
        <p className="text-xs text-white/40 leading-relaxed border-t border-white/10 pt-2">
          {data.details}
        </p>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 3. Main Section
// ---------------------------------------------------------------------------

export default function AboutBoxesStack() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeRowIdx, setActiveRowIdx] = useState(0);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [rowProgress, setRowProgress] = useState<number[]>([]);

  // Data (move inside useMemo)
  const rows = React.useMemo(() => {
    const rawCards: CardData[] = [
      {
        id: 1,
        imageAlt: "Brands We Work With",
        value: 20,
        description: t("about.boxes.brands"),
        details:
          "We build long-term strategic partnerships with industry leaders, ensuring consistent growth.",
      },
      {
        id: 2,
        imageAlt: "Projects Completed",
        value: 40,
        description: t("about.boxes.projects"),
        details:
          "From complex web applications to high-conversion marketing funnels, our portfolio showcases success.",
      },
      {
        id: 3,
        imageAlt: "Countries we work with",
        value: 5,
        description: t("about.boxes.countries"),
        details:
          "Our global footprint allows us to understand diverse market dynamics and cultural nuances.",
      },
      {
        id: 4,
        imageAlt: "Brands scaled with us",
        value: 20,
        description: t("about.boxes.scaled"),
        details:
          "We don't just build; we scale. Our clients average a 3x return on investment quickly.",
      },
      {
        id: 5,
        imageAlt: "Revenue Generated",
        value: "2M",
        description: t("about.boxes.revenue"),
        details:
          "Driving tangible financial results is our core metric. We focus on high-impact strategies.",
      },
      {
        id: 6,
        imageAlt: "Happy Clients",
        value: 45,
        description: t("about.boxes.clients"),
        details:
          "Client satisfaction is paramount. Our agile approach ensures transparency and speed.",
      },
    ];
    // Always use chunk size of 1 for mobile-only view
    return rawCards.map((card) => [card]);
  }, [t]);

  // -------------------------------------------------------------------------
  // Animation Logic
  // -------------------------------------------------------------------------
  useEffect(() => {
    let rafId: number | null = null;

    // Reset refs array when row count changes
    rowRefs.current = rowRefs.current.slice(0, rows.length);
    setRowProgress(new Array(rows.length).fill(0));

    const loop = () => {
      if (sectionRef.current) {
        const currentScrollYMid = window.scrollY + window.innerHeight * 0.5;
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const totalRows = rows.length;
        const step = sectionHeight / totalRows;

        let newRowIdx = Math.floor((currentScrollYMid - sectionTop) / step);
        if (newRowIdx < 0) newRowIdx = 0;
        if (newRowIdx >= totalRows) newRowIdx = totalRows - 1;
        setActiveRowIdx((prev) => (prev !== newRowIdx ? newRowIdx : prev));

        const newProgressArray = rows.map((_, idx) => {
          const el = rowRefs.current[idx];
          if (!el) return 0;
          const rect = el.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Animation offset for mobile-only view
          const stickyTopPx = 80;
          const entryStart = viewportHeight;
          const entryEnd = stickyTopPx;

          const raw = (entryStart - rect.top) / (entryStart - entryEnd);
          return Math.min(Math.max(raw, 0), 1);
        });

        setRowProgress(newProgressArray);
      }
      rafId = window.requestAnimationFrame(loop);
    };
    rafId = window.requestAnimationFrame(loop);
    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [rows, rows.length]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col items-center justify-center pt-8   md:hidden"
      style={{
        perspective: "1000px",
        backgroundImage: "url('/work-bg.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="w-full max-w-[400px] mx-auto relative flex flex-col z-10 px-4 pb-16"
        style={{ transformStyle: "preserve-3d" }}
      >
        {rows.map((rowItems, rowIdx) => {
          const isActive = rowIdx === activeRowIdx;
          const progress = rowProgress[rowIdx] || 0;

          // Rotation Logic (Alternating) - Reduced for mobile
          const isRightTilt = rowIdx % 2 === 0;
          const ROTATION_MAX = 1;
          const targetDeg = isRightTilt ? ROTATION_MAX : -ROTATION_MAX;
          const rotation = progress * targetDeg;

          // Slide Up Animation - Reduced for compact layout
          const rowTranslateY = (1 - progress) * 40;

          // Depth for Stacking
          let depthZ = 0;
          if (rowIdx > activeRowIdx) depthZ = 3;
          else if (rowIdx === activeRowIdx) depthZ = 1;

          return (
            <div
              key={rowIdx}
              ref={(el) => {
                rowRefs.current[rowIdx] = el;
              }}
              // Sticky behavior ensures one covers the other
              className="sticky top-[120px] w-full"
              style={{
                transform: `rotate(${rotation}deg) translateY(${rowTranslateY}px) translateZ(${depthZ}px)`,
                pointerEvents: isActive ? "auto" : "none",
                // Compact margins for mobile-only view
                marginTop: rowIdx !== 0 ? "40px" : undefined,
                marginBottom: rowIdx !== rows.length - 1 ? "40px" : "80px",
                transition: "opacity 0.3s, translateZ 0.3s",
              }}
            >
              {/* Grid Container - Single column for mobile-only */}
              <div className="grid grid-cols-1 gap-4 w-full">
                {rowItems.map((item) => {
                  // GRADIENT DETERMINATION - Alternating pattern
                  const isLeftStyle = rowIdx % 2 === 0;

                  return (
                    <div key={item.id}>
                      <StatCard data={item} isLeft={isLeftStyle} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
