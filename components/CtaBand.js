"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";
import { useI18n } from "@/lib/I18nProvider";

export default function CtaBand() {
  const { theme } = useTheme();
  const { t, mounted: i18nMounted } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !i18nMounted) {
    return null;
  }

  return (
    <section suppressHydrationWarning className={`relative ${theme === "dark" ? "bg-[#0c0a09]" : "bg-[#f5f5f5]"} py-24 overflow-hidden transition-colors`}>
      {/* Atmospheric orbs */}
      <div
        className="pointer-events-none absolute top-[-20%] left-[10%] w-100 h-100 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, #e8b8c4 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] right-[5%] w-87.5 h-87.5 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, #a7e5d3 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-300 mx-auto px-6 text-center flex flex-col items-center gap-8">
        <span className={`text-[11px] font-semibold tracking-[0.12em] uppercase ${
          theme === "dark"
            ? "text-[#9a9a9a] bg-[#2a2a2a] border border-[#404040]"
            : "text-[#777169] bg-[#f0efed] border border-[#e7e5e4]"
        } px-3 py-1.5 rounded-full`}>
          {t("cta.contact", "Start Today")}
        </span>
        <h2
          className={`text-[clamp(32px,5vw,56px)] leading-[1.06] tracking-tight ${
            theme === "dark" ? "text-white" : "text-[#0c0a09]"
          } max-w-[20ch]`}
          style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
        >
          {t("cta.ready", "Your next great website is one conversation away.")}
        </h2>
        <p className={`text-[16px] leading-[1.6] ${
          theme === "dark" ? "text-[#9a9a9a]" : "text-[#4e4e4e]"
        } max-w-[46ch]`}>
          {t("contact.description", "Whether you need a landing page or a full-stack web app, we're here to make it happen — on time and on budget.")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className={`rounded-full text-white text-[15px] font-medium px-7 h-12 transition-colors duration-200 shadow-none ${
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
            className={`rounded-full text-[15px] font-medium px-7 h-12 transition-all duration-200 shadow-none bg-transparent ${
              theme === "dark"
                ? "border-[#404040] text-white hover:bg-[#1a1a1a] hover:border-[#4a9d6f]"
                : "border-[#d6d3d1] text-[#292524] hover:bg-[#f0efed] hover:border-[#292524]"
            }`}
          >
            <Link href="tel:+917800123456">Call Us Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
