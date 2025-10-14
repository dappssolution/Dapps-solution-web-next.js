"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Twitter, MessageCircle, Mail } from "lucide-react"

function SocialLinks({ className = "" }: { className?: string }) {
  const iconBase = "size-5 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 text-white";
  const linkBase =
    "group inline-flex items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20 hover:ring-white/40 hover:bg-white/20 px-3 py-2";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Link href="https://www.instagram.com/brandbik_creatives/" aria-label="Instagram" className={linkBase}>
        <Instagram className={iconBase} />
      </Link>
      <Link href="https://wa.me/919074851748" aria-label="WhatsApp" className={linkBase}>
        <MessageCircle className={iconBase} />
      </Link>
      <Link href="https://www.linkedin.com/company/brandbik-creatives" aria-label="LinkedIn" className={linkBase}>
        <Linkedin className={iconBase} />
      </Link>
      <Link href="https://twitter.com/brandbik" aria-label="Twitter" className={linkBase}>
        <Twitter className={iconBase} />
      </Link>
    </div>
  );
}


export default function Footer() {
  return (
    <footer
      className="w-full bg-[#E1AAFF] text-white px-4 py-10 md:py-14 lg:px-0 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3D096C 0%, #A43EF9 40%, #5A189A 80%, #E1AAFF 100%)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-6 md:gap-16 lg:gap-24">
        {/* Logo & About */}
        <div className="flex-1 min-w-[250px] flex flex-col items-start">
          <div className="relative h-14 w-36 mb-3">
            <Image
              src="/white-logo.png"
              alt="Dapps Solutions Logo"
              fill
              priority
              className="object-contain drop-shadow-lg"
            />
          </div>
          <div className="text-sm text-white/90 text-left max-w-xs">
            Transforming Businesses with AI-Powered Web, Apps & Automation
          </div>
          <div className="hidden md:block mt-6">
            <SocialLinks />
          </div>
        </div>

        {/* Pages Section */}
        <div className="flex-1 min-w-[150px] flex flex-col items-start">
          <div className="font-semibold text-lg mb-2">Pages</div>
          <nav className="flex flex-col gap-1 text-white/90 text-base w-full">
            <Link href="/about" className="hover:underline text-left">About</Link>
            <Link href="/service" className="hover:underline text-left">Services</Link>
            <Link href="/works" className="hover:underline text-left">Works</Link>
            <Link href="/careers" className="hover:underline text-left">Career</Link>
            <Link href="/solutions" className="hover:underline text-left">Solutions</Link>
          </nav>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1 min-w-[150px] flex flex-col items-start">
          <div className="font-semibold text-lg mb-2">Quick Links</div>
          <nav className="flex flex-col gap-1 text-white/90 text-base w-full">
            <Link href="/privacy-policy" className="hover:underline text-left">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:underline text-left">Terms of Service</Link>
            <Link href="/contact" className="hover:underline text-left">Contact</Link>
            <Link href="/" className="hover:underline text-left">Home</Link>
          </nav>
        </div>

        {/* Contact & Locations */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-3 items-start">
          <div className="font-semibold text-lg mb-1">Contact</div>
          <div className="flex items-center gap-2 text-white/90">
            <Mail className="size-5" />
            <a href="mailto:info@dappssolutions.com" className="underline hover:text-white">info@dappssolutions.com</a>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <span className="font-semibold">Phone:</span>
            <a href="tel:+919947400278" className="hover:underline">+91 99474 00278</a>
          </div>
          <div className="font-semibold text-lg mt-4 mb-1">Locations</div>
          <div className="flex flex-col gap-1 text-white/90 text-base">
            <span>UAE</span>
            <span>Kerala, Calicut</span>
          </div>
        </div>
      </div>

      {/* Social mobile */}
      <div className="mt-8 flex flex-col items-start gap-2 md:hidden">
        <SocialLinks className="justify-start" />
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4 text-xs text-white/80 max-w-7xl mx-auto">
        <div className="text-left w-full">
          &copy; {new Date().getFullYear()} Dapps Solutions. All rights reserved.
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <Link href="/privacy-policy" className="hover:underline text-left">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:underline text-left">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
