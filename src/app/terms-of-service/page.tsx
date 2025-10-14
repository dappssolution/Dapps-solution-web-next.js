"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";

export default function TermsOfService() {
  const { t, language } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
    }
  }, [language]);

  return (
    <div
      ref={contentRef}
      className={`w-full min-h-screen primary-background-two px-4 md:px-16 lg:px-32 py-16 ${language === "ar" ? "text-right" : ""}`}
    >
      {/* Banner */}
      <section className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl sm:text-4xl pt-8 text-center lg:text-5xl font-semibold text-white mb-2 font-poppins">
          {t("terms.title")}
        </h1>
      </section>

      {/* Terms Content */}
      <section className="max-w-4xl mx-auto rounded-xl shadow-lg px-6 md:p-10 text-white/80">
        <h2 className="text-2xl font-semibold mb-4 text-white">{t("terms.intro.title")}</h2>
        <p className="mb-4">{t("terms.intro.body")}</p>

    <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("terms.refund.title")}</h2>
    <p className="mb-4">{t("terms.refund.body")}</p>
        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("terms.accept.title")}</h2>
        <p className="mb-4">{t("terms.accept.body")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("terms.use.title")}</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>{t("terms.use.1")}</li>
          <li>{t("terms.use.2")}</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("terms.ip.title")}</h2>
        <p className="mb-4">{t("terms.ip.body")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("terms.user.title")}</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>{t("terms.user.1")}</li>
          <li>{t("terms.user.2")}</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("terms.liability.title")}</h2>
        <p className="mb-4">{t("terms.liability.body")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("terms.changes.title")}</h2>
        <p className="mb-4">{t("terms.changes.body")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("terms.contact.title")}</h2>
        <p>
          {t("terms.contact.body")} <a href="mailto:info@brandbik.com" className="text-blue-600 underline">info@brandbik.com</a>.
        </p>
      </section>
    </div>
  );
} 