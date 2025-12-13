"use client";

// import { useState } from "react"
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Clock,
  Users,
  Zap,
  Heart,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// 1. Font Configuration
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
});

// --- Data Configuration ---
const jobs = [
  {
    id: 1,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    type: "Full-time",
    location: "On-site",
    description:
      "We are looking for a creative and analytical Digital Marketing Specialist to drive our online presence. You will lead SEO strategies, manage social media campaigns, and analyze performance metrics to accelerate growth.",
    requirements: [
      "3+ years experience in Digital Marketing or SEO",
      "Proficiency in Google Analytics, SEMrush, and Ad Managers",
      "Strong copywriting and content creation skills",
      "Ability to build comprehensive marketing funnels",
    ],
  },
  {
    id: 2,
    title: "Front Desk Assistant",
    department: "Operations",
    type: "Part-time / Full-time",
    location: "On-site",
    description:
      "Be the face of our company. We need a warm, organized, and proactive Front Desk Assistant to manage reception duties, coordinate schedules, and ensure our daily office operations run seamlessly.",
    requirements: [
      "Excellent verbal and written communication skills",
      "Proficient in Microsoft Office Suite & Google Workspace",
      "Strong organizational and multitasking abilities",
      "Previous experience in admin/customer service is a plus",
    ],
  },
];

const benefits = [
  {
    icon: Users,
    title: "Great Culture",
    desc: "Collaborative environment where every voice matters.",
  },
  {
    icon: Zap,
    title: "Fast Growth",
    desc: "Opportunities to learn and advance your career quickly.",
  },
  {
    icon: Heart,
    title: "Wellness",
    desc: "Healthy work-life balance and supportive management.",
  },
];

// --- Components ---

const JobCard = ({ job }: { job: (typeof jobs)[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_40px_rgba(82,22,147,0.5)]"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-white/10">
            {job.department}
          </span>
          <span className="p-3 bg-white/10 rounded-full group-hover:bg-white group-hover:text-[#2D0C74] transition-colors duration-300 text-white">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
          {job.title}
        </h3>

        <div className="flex items-center gap-6 text-sm text-white/60 mb-8 font-medium">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {job.type}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {job.location}
          </div>
        </div>

        <p className="text-white/80 mb-8 leading-relaxed font-light">
          {job.description}
        </p>

        <div className="mb-10">
          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider opacity-90">
            Requirements
          </h4>
          <ul className="space-y-3">
            {job.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start text-sm text-white/70">
                <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-[#a78bfa] rounded-full flex-shrink-0 shadow-[0_0_10px_#a78bfa]" />
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={`mailto:info@dappssolutions.com?subject=Application for ${encodeURIComponent(
          job.title
        )}`}
        className="w-full mt-auto inline-flex items-center justify-center gap-2 bg-white text-[#2D0C74] py-4 px-6 rounded-xl font-bold transition-all hover:bg-[#a78bfa] hover:text-white"
      >
        Apply for this role
        <ArrowRight className="w-5 h-5" />
      </a>
    </motion.div>
  );
};

export default function CareerSection() {
  return (
    <div
      className={`min-h-screen text-white selection:bg-white selection:text-[#2D0C74] ${montserrat.className}`}
    >
      {/* BACKGROUND GRADIENT
         Using fixed position to ensure it stays perfect during scroll 
      */}
      <div
        className="fixed inset-0 z-[-1]"
        style={{
          backgroundImage: `url('/bg-1.jpg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative Blur Orbs for visual interest */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#521693] rounded-full blur-[120px] opacity-40 -translate-x-1/2 -translate-y-1/2 z-[-1]" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#2D0C74] rounded-full blur-[150px] opacity-40 translate-x-1/3 translate-y-1/3 z-[-1]" />

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 sm:px-12 lg:px-24 max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 text-sm font-semibold tracking-wide text-white/90">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>WE ARE HIRING</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-12 drop-shadow-2xl">
            Do your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              best work
            </span>{" "}
            here.
          </h1>

          <p className="max-w-2xl text-lg sm:text-2xl text-white/70 leading-relaxed font-light">
            Join a team of visionaries. We are building the future of digital
            solutions, and we need passionate people like you to help shape what
            comes next.
          </p>
        </motion.div>
      </section>

      {/* 2. Culture / Benefits Section */}
      <section className="border-y border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {benefits.map((item, idx) => (
              <div key={idx} className="py-16 md:px-12 first:pl-0 last:pr-0">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white border border-white/10 shadow-lg">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Job Listings Grid */}
      <section
        className="py-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto"
        id="openings"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Open Positions
            </h2>
            <p className="text-white/60 text-lg">
              We are currently looking for talent in the following roles.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/20 mx-12 mb-4" />
          <span className="text-sm font-mono text-white/40 border border-white/20 px-4 py-2 rounded-lg">
            0{jobs.length} POSITIONS
          </span>
        </div>

        {/* Desktop View: Grid with 2 columns
            Mobile View: Single column
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Empty State / General Contact */}
        <div className="mt-32 p-12 rounded-3xl text-center border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-3">Don&apos;t see your role?</h3>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            We are always looking for exceptional talent. If you think
            you&apos;d be a great fit, we want to hear from you.
          </p>
          <a
            href="mailto:info@dappssolutions.com"
            className="inline-block text-white font-semibold border-b border-white pb-1 hover:text-[#a78bfa] hover:border-[#a78bfa] transition-colors"
          >
            Email us your portfolio
          </a>
        </div>
      </section>
    </div>
  );
}
