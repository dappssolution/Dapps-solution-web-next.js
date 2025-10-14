"use client"

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef } from "react";

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl sm:text-4xl pt-8  text-center lg:text-5xl font-semibold text-white mb-2 font-poppins">
          {t("privacy.title")}
        </h1>
      </section>

      {/* Policy Content */}
      <section className="max-w-4xl mx-auto  rounded-xl shadow-lg px-6 md:p-10 text-white/80">
        <h2 className="text-2xl font-semibold mb-4 text-white">{t("privacy.intro.title")}</h2>
        <p className="mb-4">{t("privacy.intro.body")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("privacy.collect.title")}</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>{t("privacy.collect.1")}</li>
          <li>{t("privacy.collect.2")}</li>
          <li>{t("privacy.collect.3")}</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("privacy.use.title")}</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>{t("privacy.use.1")}</li>
          <li>{t("privacy.use.2")}</li>
          <li>{t("privacy.use.3")}</li>
          <li>{t("privacy.use.4")}</li>
          <li>{t("privacy.use.5")}</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("privacy.share.title")}</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>{t("privacy.share.1")}</li>
          <li>{t("privacy.share.2")}</li>
          <li>{t("privacy.share.3")}</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("privacy.security.title")}</h2>
        <p className="mb-4">{t("privacy.security.body")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("privacy.rights.title")}</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>{t("privacy.rights.1")}</li>
          <li>{t("privacy.rights.2")}</li>
          <li>
            {t("privacy.rights.3")} <a href="mailto:info@brandbik.com" className="text-blue-600 underline">info@brandbik.com</a>.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("privacy.children.title")}</h2>
        <p className="mb-4">{t("privacy.children.body")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("privacy.changes.title")}</h2>
        <p className="mb-4">{t("privacy.changes.body")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-2 text-white">{t("privacy.contact.title")}</h2>
        <p>
          {t("privacy.contact.body")} <a href="mailto:info@brandbik.com" className="text-blue-600 underline">info@brandbik.com</a>.
        </p>
      </section>
    </div>
  );
} 