"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/lib/ThemeProvider";
import { useI18n } from "@/lib/I18nProvider";
import { ChevronDown } from "lucide-react";

export default function Faqs() {
  const { theme } = useTheme();
  const { t, mounted } = useI18n();
  const [openIndex, setOpenIndex] = useState(null);
  const [clientMounted, setClientMounted] = useState(false);

  useEffect(() => {
    setClientMounted(true);
  }, []);

  if (!clientMounted || !mounted) {
    return null;
  }

  const faqs = t("faqs.questions");

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className={`relative py-24 px-6 ${
        theme === "dark" ? "bg-[#0c0a09]" : "bg-white"
      } transition-colors`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-[-10%] w-100 h-100 rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, #a7e5d3 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-800 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-[clamp(32px,5vw,52px)] leading-[1.2] tracking-[-0.02em] mb-4 ${
              theme === "dark" ? "text-white" : "text-[#0c0a09]"
            }`}
            style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
          >
            {t("faqs.title")}
          </h2>
          <p
            className={`text-[16px] leading-[1.6] ${
              theme === "dark" ? "text-[#b0b0b0]" : "text-[#4e4e4e]"
            }`}
          >
            {t("faqs.description")}
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg transition-all duration-300 ${
                openIndex === index
                  ? theme === "dark"
                    ? "bg-[#1a1a1a] border-[#4a9d6f]"
                    : "bg-[#f9f7f4] border-[#292524]"
                  : theme === "dark"
                  ? "border-[#404040] hover:border-[#505050]"
                  : "border-[#e7e5e4] hover:border-[#d0ccc9]"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full px-6 py-4 text-left flex items-center justify-between transition-all ${
                  theme === "dark"
                    ? "text-white hover:text-[#4a9d6f]"
                    : "text-[#0c0a09] hover:text-[#292524]"
                }`}
              >
                <span className="text-[16px] font-medium leading-normal">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div
                  className={`px-6 pb-4 border-t ${
                    theme === "dark"
                      ? "border-[#404040] text-[#b0b0b0]"
                      : "border-[#e7e5e4] text-[#4e4e4e]"
                  }`}
                >
                  <p className="text-[15px] leading-[1.7]">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className={`text-[15px] mb-4 ${
            theme === "dark" ? "text-[#b0b0b0]" : "text-[#4e4e4e]"
          }`}>
            {t("cta.ready")}
          </p>
          <a
            href="#contact"
            className={`inline-block px-8 py-3 rounded-full font-medium transition-all duration-200 ${
              theme === "dark"
                ? "bg-[#4a9d6f] hover:bg-[#3a8d5f] text-white"
                : "bg-[#292524] hover:bg-[#0c0a09] text-white"
            }`}
          >
            {t("cta.contact")}
          </a>
        </div>
      </div>
    </section>
  );
}
