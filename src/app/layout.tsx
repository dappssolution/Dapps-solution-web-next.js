"use client";

import "./globals.css";
import { Montserrat } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import LayoutShell from "@/components/LayoutShell";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FontProvider from "@/components/FontProvider";

// Load Montserrat font with required weights
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

// Load IBM Plex Sans Arabic font
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Dapps Solutions | AI-Powered Web & Apps</title>
        <meta
          name="description"
          content="Dapps Solutions - Transforming Businesses with AI-powered websites, apps, automation, and digital transformation services for growth and efficiency."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#040150" />
        <meta
          name="keywords"
          content="Dapps Solutions, AI, automation, digital transformation, web development, apps, CRM, ERP, marketing"
        />
        <meta name="author" content="Dapps Solutions" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
        <link rel="shortcut icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="canonical" href="https://www.dappssolutions.com/" />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Dapps Solutions | AI-Powered Web & Apps"
        />
        <meta
          property="og:description"
          content="Dapps Solutions - Transforming Businesses with AI-powered websites, apps, automation, and digital transformation services for growth and efficiency."
        />
        <meta property="og:url" content="https://www.dappssolutions.com/" />
        <meta property="og:site_name" content="Dapps Solutions" />
        <meta property="og:image" content="/logo.png" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dapps Solutions | AI-Powered Web & Apps"
        />
        <meta
          name="twitter:description"
          content="Dapps Solutions - Transforming Businesses with AI-powered websites, apps, automation, and digital transformation services for growth and efficiency."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:site" content="@dappssolutions" />
        {/* Security headers for best practices */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https:; font-src 'self' data: https:; connect-src 'self' https:;"
        />
        <meta
          httpEquiv="Strict-Transport-Security"
          content="max-age=63072000; includeSubDomains; preload"
        />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
        <meta
          httpEquiv="Permissions-Policy"
          content="geolocation=(), microphone=(), camera=()"
        />
        {/* Accessibility: set lang and ARIA landmarks */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        {/* Preconnect for font and CDN optimization */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Preload critical font */}
        <link
          rel="preload"
          href="/nohemi-font-family-1760774811-0/Nohemi-Regular-BF6438cc579d934.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        {/* Preload logo for LCP */}
        <link rel="preload" href="/logo.png" as="image" />
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dapps Solutions",
              url: "https://www.dappssolutions.com",
              logo: "/logo.png",
              sameAs: [
                "https://www.facebook.com/dappssolutions",
                "https://twitter.com/dappssolutions",
                "https://www.linkedin.com/company/dappssolutions/",
              ],
            }),
          }}
        />
        {/* Breadcrumb Structured Data Example (can be made dynamic per page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.dappssolutions.com/",
                },
              ],
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
