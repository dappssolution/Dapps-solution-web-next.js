"use client"

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import components with loading fallbacks
const HeroSection = dynamic(() => import("@/components/clients/HeroSection"), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200" />
});

const ClientsGrid = dynamic(() => import("@/components/clients/ClientsGrid"), {
  loading: () => <div className="h-[600px] animate-pulse bg-gray-200" />
});

const CTASection = dynamic(() => import("@/components/clients/CTASection"), {
  loading: () => <div className="h-[300px] animate-pulse bg-gray-200" />
});

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-white pt-10">
      <Suspense fallback={<div className="h-[300px] animate-pulse bg-gray-200" />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div className="h-[600px] animate-pulse bg-gray-200" />}>
        <ClientsGrid />
      </Suspense>

      <Suspense fallback={<div className="h-[300px] animate-pulse bg-gray-200" />}>
        <CTASection />
      </Suspense>
    </main>
  );
} 