import dynamic from 'next/dynamic';
import { Suspense } from 'react';
 

// Dynamically import components with loading states
const HeroSection = dynamic(() => import("@/components/heroSection"), {
  loading: () => <div className="h-screen animate-pulse bg-gray-100" />
});

const ClientsSection = dynamic(() => import("@/components/clientsSection"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const AboutSection = dynamic(() => import("@/components/aboutSection"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const ServicesSection = dynamic(() => import("@/components/services"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

const Works = dynamic(() => import("@/components/worksSection"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});



const ClientReviews = dynamic(() => import("@/components/clientReview"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});

export default function Home() {
  return (

    <div>
      <Suspense fallback={<div className="h-screen animate-pulse bg-gray-100" />}>
        <HeroSection />
      </Suspense>

         <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <ClientsSection />
      </Suspense>

       <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <AboutSection />
      </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <ServicesSection />
      </Suspense>
 
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <Works />
      </Suspense>
     
      <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100" />}>
        <ClientReviews />
      </Suspense>
    </div>
  );
}
