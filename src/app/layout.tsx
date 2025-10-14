
"use client"



import "./globals.css";
import { Lexend } from 'next/font/google';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import LayoutShell from "@/components/LayoutShell";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FontProvider from "@/components/FontProvider";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// Load Lexend font with required weights
const poppins = Lexend({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // add the weights you need
  style: ['normal'], // Lexend only supports normal style
  display: 'swap',             // best for SEO and performance
});

// Load IBM Plex Sans Arabic font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
});

 


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Brandbik",
              "url": "https://www.brandbik.com",
              "logo": "https://www.brandbik.com/images/brandbik-icon.png"
            }),
          }}
        />
      </head>
      <body>
        {loading ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#3D096C]">
            <div className="relative w-40 h-40 flex items-center justify-center">
              {/* Animated glowing gradient ring */}
              <div className="absolute w-full h-full rounded-full animate-spin-slow bg-gradient-to-tr from-[#A43EF9] via-[#5A189A] to-[#E1AAFF] opacity-80 shadow-[0_0_40px_10px_#A43EF9]" />
              {/* Pulsing shadow effect */}
              <div className="absolute w-36 h-36 rounded-full bg-[#3D096C] flex items-center justify-center shadow-[0_0_60px_10px_#E1AAFF] animate-pulse">
                <Image src="/logo.png" alt="Logo" width={80} height={80} className="drop-shadow-[0_0_20px_#A43EF9]" />
              </div>
            </div>
            {/* Subtle text or loading bar below logo */}
            <div className="absolute bottom-1/3 w-full flex justify-center">
              <div className="w-32 h-2 rounded-full bg-gradient-to-r from-[#A43EF9] via-[#5A189A] to-[#E1AAFF] animate-gradient-x" />
            </div>
          </div>
        ) : (
          <LanguageProvider>
            <FontProvider 
              poppinsClass={poppins.className} 
              ibmPlexSansArabicClass={ibmPlexSansArabic.className}
            >
              <LayoutShell>{children}</LayoutShell>
            </FontProvider>
          </LanguageProvider>
        )}
      </body>
    </html>
  );
}
