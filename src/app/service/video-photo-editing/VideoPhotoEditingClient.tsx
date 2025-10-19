"use client";
import ServiceDetailAccordion from "@/components/services-innerpages/ServiceDetailAccordian";
import ServiceDetailBanner from "@/components/services-innerpages/ServiceDetailBanner";
import ServiceDetailMain from "@/components/services-innerpages/ServiceDetailMain";
import { serviceDetails } from "../service-detail-contents";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VideoPhotoEditingClient() {
  const { language } = useLanguage();
  const content = serviceDetails[language].video;
  return (
    <>
      <ServiceDetailBanner {...content.banner} />
      <ServiceDetailMain {...content.main} />
      <ServiceDetailAccordion {...content.accordion} />
    </>
  );
}
