"use client"

import Image from "next/image";
import { motion } from "framer-motion";

interface Client {
  name: string;
  logo: string;
  description: string;
  industry: string;
  website?: string;
}

const clients: Client[] = [
  {
    name: "CHRFFFF",
    logo: "/images/CHRFFFF-logo-1.png",
    description: "Leading provider of innovative solutions in the technology sector.",
    industry: "Technology",
  },
  {
    name: "Genchi Global",
    logo: "/images/genchi-logo-2.png",
    description: "Global consulting firm specializing in business transformation.",
    industry: "Consulting",
  },
  {
    name: "Take Off",
    logo: "/images/take-off-logo.png",
    description: "Pioneering solutions in the aviation and travel industry.",
    industry: "Aviation",
  },
  {
    name: "Arson",
    logo: "/images/arson.png",
    description: "Educational institution focused on technology and innovation.",
    industry: "Education",
  },
  {
    name: "SeaStar International",
    logo: "/images/seastar-logo-5.png",
    description: "International trading and logistics solutions provider.",
    industry: "Logistics",
  },
  {
    name: "We On Wheels",
    logo: "/images/WEONWEELS-logo-6.png",
    description: "Revolutionizing transportation and mobility solutions.",
    industry: "Transportation",
  },
  {
    name: "Financeva",
    logo: "/images/legislead.png",
    description: "Innovative financial technology solutions provider.",
    industry: "FinTech",
  },
  {
    name: "Team AE",
    logo: "/images/team-ae-logo-8.png",
    description: "Professional services and consulting firm.",
    industry: "Professional Services",
  },
  {
    name: "AE's School of Commerce",
    logo: "/images/aes-logo.png",
    description: "Leading educational institution in business and commerce.",
    industry: "Education",
  },
  {
    name: "Cyber Seed",
    logo: "/images/cyber-black-logo-10.png",
    description: "Cybersecurity and digital protection solutions.",
    industry: "Cybersecurity",
  },
  {
    name: "Abu Glumbo",
    logo: "/images/abu-glumbo-1111.png",
    description: "Innovative solutions in the manufacturing sector.",
    industry: "Manufacturing",
  },
  {
    name: "Kanzul Hind",
    logo: "/images/LOGO-LANDSCAPE-purple-logo-12.png",
    description: "Traditional and modern business solutions provider.",
    industry: "Business Services",
  },
  {
    name: "Matrixx Microns",
    logo: "/images/MATRIXX-MICRONS-logo-14.png",
    description: "Advanced materials and manufacturing solutions.",
    industry: "Manufacturing",
  },
  {
    name: "Prozomann",
    logo: "/images/prozomann-logo-15.png",
    description: "Creative solutions in design and branding.",
    industry: "Design",
  },
  {
    name: "JamJoom Hypermarket",
    logo: "/images/logo-21.png",
    description: "Leading retail and hypermarket chain.",
    industry: "Retail",
  },
];

export default function ClientsGrid() {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-2 sm:p-3 md:p-4 transition-all duration-300 flex items-center justify-center aspect-square"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={80}
                className="object-contain w-full h-full max-h-16 sm:max-h-20 md:max-h-24 hover:grayscale transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 