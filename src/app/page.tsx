import dynamic from 'next/dynamic';
 
 

const HeroSection = dynamic(() => import("@/components/heroSection"));
const ClientsSection = dynamic(() => import("@/components/clientsSection"));
const AboutSection = dynamic(() => import("@/components/aboutSection"));
const ServicesSection = dynamic(() => import("@/components/services"));
const Works = dynamic(() => import("@/components/worksSection"));
const AboutBoxes = dynamic(() => import("@/components/aboutBoxes"));
const ClientReviews = dynamic(() => import("@/components/clientReview"));

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <AboutBoxes />
      <ServicesSection />
      <Works />
      <ClientReviews />
    </div>
  );
}
