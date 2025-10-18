import ClientsSection from "@/components/clientsSection";
import ServiceContent from "@/components/serviceContent";
import ServiceMain from "@/components/serviceMain";
import ServicesSection from "@/components/services";
 
 


export default function About() {
  return (
    <div>
       <ServiceMain/>
       <ServicesSection/>
       <ServiceContent/>
       <ClientsSection/>
 
    </div>
  );
};