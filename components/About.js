"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";
import { useI18n } from "@/lib/I18nProvider";

const highlightKeys = [
  "about.labels.h1",
  "about.labels.h2",
  "about.labels.h3",
  "about.labels.h4",
];

export default function About() {
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
    <section suppressHydrationWarning id="about" className={`${theme === "dark" ? "bg-[#0c0a09]" : "bg-[#f5f5f5]"} py-24 overflow-hidden transition-colors`}>
      <div className="max-w-300 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className={`inline-block text-[11px] font-semibold tracking-[0.12em] uppercase ${
              theme === "dark"
                ? "text-[#9a9a9a] bg-[#2a2a2a] border border-[#404040]"
                : "text-[#777169] bg-[#f0efed] border border-[#e7e5e4]"
            } px-3 py-1.5 rounded-full mb-6`}>
              {t("common.aboutUs", "About Us")}
            </span>
            <h2
              className={`text-[clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.02em] ${
                theme === "dark" ? "text-white" : "text-[#0c0a09]"
              } mb-6`}
              style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
            >
              {t("about.labels.rooted", "Your digital partner, rooted in Patna")}
            </h2>
            <p className={`text-[15px] leading-[1.7] ${
              theme === "dark" ? "text-[#b0b0b0]" : "text-[#4e4e4e]"
            } mb-4`}>
              {t("about.labels.para1", "Aryan Studio was born from a simple belief: great web design shouldn't be a luxury reserved for big-city businesses. We set out to bring world-class digital craftsmanship to Bihar's most ambitious entrepreneurs and growing brands.")}
            </p>
            <p className={`text-[15px] leading-[1.7] ${
              theme === "dark" ? "text-[#b0b0b0]" : "text-[#4e4e4e]"
            } mb-8`}>
              {t("about.labels.para2", "Every project we take on is treated like our own business — obsessing over the details, the copy, the micro-interactions, and most importantly, the results it drives for you.")}
            </p>
            <ul className="flex flex-col gap-3">
              {highlightKeys.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className={`${
                      theme === "dark" ? "text-[#4a9d6f]" : "text-[#292524]"
                    } mt-0.5 shrink-0`}
                    strokeWidth={1.8}
                  />
                  <span className={`text-[14px] leading-[1.6] ${
                    theme === "dark" ? "text-[#b0b0b0]" : "text-[#4e4e4e]"
                  }`}>
                    {t(key)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — gradient orb card */}
          <div className="relative">
            {/* Atmospheric orb */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-80 h-80 rounded-full opacity-70"
              style={{
                background:
                  "radial-gradient(ellipse at center, #a7e5d3 0%, transparent 65%)",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-12 -left-12 w-60 h-60 rounded-full opacity-50"
              style={{
                background:
                  "radial-gradient(ellipse at center, #a8c8e8 0%, transparent 65%)",
              }}
            />

            {/* Card */}
            <div className={`relative ${
              theme === "dark" ? "bg-[#1a1a1a] border-[#404040]" : "bg-[#fafafa] border-[#e7e5e4]"
            } rounded-3xl border p-10 overflow-hidden`}>
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse at 70% 30%, #f4c5a8 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10 grid grid-cols-2 gap-8">
                {[
                  { num: "10+", label: "Projects Completed" },
                  { num: "3+", label: "Years in Business" },
                  { num: "20+", label: "Happy Clients" },
                  { num: "4.9★", label: "Average Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1.5">
                    <span
                      className={`text-[36px] leading-none tracking-[-0.03em] ${
                        theme === "dark" ? "text-white" : "text-[#0c0a09]"
                      }`}
                      style={{
                        fontFamily: "var(--font-garamond)",
                        fontWeight: 400,
                      }}
                    >
                      {stat.num}
                    </span>
                    <span className={`text-[13px] font-medium ${
                      theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"
                    }`}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className={`relative z-10 mt-10 pt-8 ${
                theme === "dark" ? "border-[#404040]" : "border-[#e7e5e4]"
              } border-t`}>
                <p
                  className={`text-[22px] leading-tight tracking-[-0.01em] ${
                    theme === "dark" ? "text-white" : "text-[#0c0a09]"
                  } mb-1`}
                  style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
                >
                  &ldquo;We don&apos;t just build websites. We build growth
                  engines.&rdquo;
                </p>
                <span className={`text-[13px] font-medium ${
                  theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"
                }`}>
                  —  Founder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
