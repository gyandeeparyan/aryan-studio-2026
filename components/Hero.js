"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";
import { useI18n } from "@/lib/I18nProvider";
import { useGeolocation } from "@/lib/useGeolocation";
import { companyInfo } from "@/lib/config";
import TerminalBox from "@/components/TerminalBox";

export default function Hero() {
  const { theme } = useTheme();
  const { t, tReplace, mounted: i18nMounted } = useI18n();
  const { placeName, loading: geoLoading } = useGeolocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const displayLocation = placeName || companyInfo.contact.address;

  // Helper to highlight AI in text
  const highlightAI = (text) => {
    const parts = text.split(/(\bAI\b)/g);
    return parts.map((part, idx) =>
      part === "AI" ? (
        <span
          key={idx}
          className={`${
            theme === "dark"
              ? "text-[#4a9d6f] font-semibold"
              : "text-[#292524] font-semibold"
          }`}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section
      suppressHydrationWarning
      id="hero"
      className={`relative min-h-screen flex flex-col justify-center overflow-hidden ${
        theme === "dark" ? "bg-[#0c0a09]" : "bg-[#f5f5f5]"
      } pt-16 transition-colors`}
    >
      {/* Atmospheric gradient orbs */}
      <div
        className="pointer-events-none absolute top-[-10%] right-[-5%] w-150 h-150 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, #f4c5a8 0%, #f4c5a820 50%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-5%] left-[-8%] w-125 h-125 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, #c8b8e0 0%, #c8b8e020 50%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-[40%] left-[30%] w-75 h-75 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, #a7e5d3 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-300 mx-auto px-6 py-24 w-full">
        {/* Location badge */}
        <div className="flex items-center gap-2 mb-8">
          <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase ${
            theme === "dark"
              ? "text-[#b0b0b0] bg-[#1a1a1a] border border-[#404040]"
              : "text-[#777169] bg-[#f0efed] border border-[#e7e5e4]"
          } px-3 py-1.5 rounded-full`}>
            <MapPin size={10} strokeWidth={2.5} />
            {displayLocation} · {t("common.availableForProjects", "Available for Projects")}
          </span>
        </div>

        {/* Grid Layout for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
          {/* Left side - Text Content */}
          <div>
            {/* Main headline */}
            <h1
              className={`text-[clamp(40px,7vw,72px)] leading-[1.08] tracking-[-0.03em] ${
                theme === "dark" ? "text-white" : "text-[#0c0a09]"
              } max-w-[14ch] mb-6`}
              style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
            >
              {i18nMounted ? (
                <>
                Aryan Studio
                </>
              ) : (
                "Aryan Studio"
              )}
            </h1>

            {/* Sub-headline with AI highlight and company highlight */}
            <p className={`text-[16px] leading-[1.7] tracking-[0.01em] ${
              theme === "dark" ? "text-[#b0b0b0]" : "text-[#4e4e4e]"
            } max-w-[50ch] mb-8`}>
              <span className={`${
                theme === "dark"
                  ? "text-[#4a9d6f] font-semibold"
                  : "text-[#292524] font-semibold"
              }`}> {companyInfo.name}</span> crafts fast, modern websites
              and web applications that drive real results for your business. We specialize in building{" "}
              {highlightAI("AI")}-powered apps with{" "}
              {highlightAI("AI")} models integrated.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className={`rounded-full text-white text-[15px] font-medium px-6 h-11 transition-colors duration-200 shadow-none ${
                  theme === "dark"
                    ? "bg-[#4a9d6f] hover:bg-[#3a8d5f]"
                    : "bg-[#292524] hover:bg-[#0c0a09]"
                }`}
              >
                <Link href="#contact">
                  {t("common.startProject", "Start a Project")}
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className={`rounded-full text-[15px] font-medium px-6 h-11 transition-all duration-200 shadow-none ${
                  theme === "dark"
                    ? "border-[#404040] text-white hover:bg-[#1a1a1a] hover:border-[#707070]"
                    : "border-[#d6d3d1] text-[#292524] hover:bg-[#f0efed] hover:border-[#292524]"
                }`}
              >
                <Link href="#projects">{t("common.viewWork", "View Our Work")}</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Terminal Box (Hidden on mobile) */}
          <div className="hidden lg:block">
            <TerminalBox />
          </div>
        </div>

        {/* Terminal Box for Mobile - Display below text */}
        <div className="lg:hidden mb-10">
          <TerminalBox />
        </div>

        {/* Metrics strip */}
        <div className={`flex flex-wrap gap-10 pt-10 ${
          theme === "dark" ? "border-[#404040]" : "border-[#e7e5e4]"
        } border-t`}>
          {companyInfo.stats.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span
                className={`text-[28px] leading-none tracking-[-0.03em] ${
                  theme === "dark" ? "text-white" : "text-[#0c0a09]"
                }`}
                style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
              >
                {item.value}
              </span>
              <span className={`text-[13px] font-medium tracking-[0.02em] ${
                theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"
              }`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className={`text-[11px] font-medium tracking-[0.15em] uppercase ${
          theme === "dark" ? "text-[#707070]" : "text-[#777169]"
        }`}>
          {t("common.scroll", "Scroll")}
        </span>
        <div className={`w-px h-8 ${theme === "dark" ? "bg-[#707070]" : "bg-[#777169]"}`} />
      </div>
    </section>
  );
}
