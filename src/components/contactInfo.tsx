"use client";


import { MdMail, MdWork, MdHelpOutline } from "react-icons/md";
import { useLanguage } from "../contexts/LanguageContext";


export default function ContactInfo() {
  const { language } = useLanguage();
  const contacts = [
    {
      icon: MdWork,
      email: "hr@dappssolutions.in",
      title: language === "ar" ? "الموارد البشرية والوظائف" : "HR & Careers",
      description:
        language === "ar"
          ? "اكتشف فرص العمل في Dapps Solutions"
          : "Explore career opportunities at Dapps Solutions",
    },
    {
      icon: MdMail,
      email: "sales@dappssolutions.in",
      title: language === "ar" ? "المبيعات" : "Sales",
      description:
        language === "ar"
          ? "تواصل مع Dapps Solutions للاستفسارات التجارية"
          : "Reach out to Dapps Solutions for business inquiries",
    },
    {
      icon: MdHelpOutline,
      email: "info@dappssolutions.in",
      title: language === "ar" ? "الاستفسارات العامة" : "General Inquiries",
      description:
        language === "ar"
          ? "تواصل مع Dapps Solutions لأي معلومات إضافية"
          : "Contact Dapps Solutions for any additional information",
    },
  ];

  return (
    <div className={`bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4 py-12 md:py-16${language === "ar" ? " rtl" : ""}`}>
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <p className="text-base md:text-lg text-gray-600 mb-2">
            {language === "ar"
              ? "هل لديك سؤال أو ملاحظة أو ترغب فقط في التواصل؟"
              : "Have a question, feedback, or just want to say"}
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#000539" }}
          >
            {language === "ar"
              ? "مرحباً! تواصل معنا عبر البريد التالي:"
              : "hello? Reach out to us at:"}
          </h1>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer hover:border-gray-200"
                onClick={() => window.location.href = `mailto:${contact.email}`}
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                  <Icon size={28} style={{ color: "#000539" }} />
                </div>

                {/* Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="block mb-3 text-lg md:text-xl font-semibold hover:underline transition-all"
                  style={{ color: "#000539" }}
                >
                  {contact.email}
                </a>

                {/* Title */}
                <h3 className="text-sm font-medium mb-2 text-gray-500 uppercase tracking-wide">
                  {contact.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {contact.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#000539] to-[#00010b] rounded-full w-0 group-hover:w-full transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
