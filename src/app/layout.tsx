"use client"

import "./globals.css";
import { Montserrat } from 'next/font/google';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import LayoutShell from "@/components/LayoutShell";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FontProvider from "@/components/FontProvider";

// Load Montserrat font with required weights
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
});

// Load IBM Plex Sans Arabic font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <title>Dapps Solutions | AI-Powered Web & Apps</title>
        <meta name="description" content="Dapps Solutions - Transforming Businesses with AI-powered websites, apps, automation, and digital transformation services for growth and efficiency." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#040150" />
        <meta name="keywords" content="Dapps Solutions, AI, automation, digital transformation, web development, apps, CRM, ERP, marketing" />
        <meta name="author" content="Dapps Solutions" />
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
        <link rel="shortcut icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta property="og:title" content="Dapps Solutions | AI-Powered Web & Apps" />
        <meta property="og:description" content="Transforming Businesses with AI-powered websites, apps, automation, and digital transformation services." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dappssolutions.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dapps Solutions | AI-Powered Web & Apps" />
        <meta name="twitter:description" content="Transforming Businesses with AI-powered websites, apps, automation, and digital transformation services." />
        <meta name="twitter:image" content="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dapps Solutions",
              "url": "https://www.dappssolutions.com",
              "logo": "/logo.png"
            }),
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <FontProvider 
            poppinsClass={montserrat.className} 
            ibmPlexSansArabicClass={ibmPlexSansArabic.className}
          >
            <LayoutShell>{children}</LayoutShell>
          </FontProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
