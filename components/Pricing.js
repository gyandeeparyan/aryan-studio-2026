"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, Zap } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";

const plans = [
  {
    name: "Starter",
    price: "₹8,999",
    period: "per project",
    tagline: "Perfect for freelancers & small businesses.",
    featured: false,
    features: [
      "Landing page (up to 5 sections)",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic on-page SEO",
      "Google Analytics setup",
      "2 revision rounds",
      "5-day delivery",
      "1 month free support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "₹29,999",
    period: "per project",
    tagline: "For growing businesses ready to scale.",
    featured: true,
    features: [
      "Multi-page website (up to 10 pages)",
      "CMS integration (headless/WordPress)",
      "Advanced SEO & performance",
      "Custom animations & interactions",
      "Blog or product catalog",
      "Social media integration",
      "5 revision rounds",
      "14-day delivery",
      "3 months free support",
    ],
    cta: "Most Popular",
  },
  {
    name: "Premium",
    price: "₹74,999",
    period: "per project",
    tagline: "For brands who need something truly custom.",
    featured: false,
    features: [
      "Custom web application",
      "Full-stack development",
      "Database design & integration",
      "Admin dashboard / CMS",
      "API & third-party integrations",
      "Authentication & user management",
      "Unlimited revisions",
      "30-day delivery",
      "6 months priority support",
    ],
    cta: "Let's Build It",
  },
];

export default function Pricing() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section suppressHydrationWarning id="pricing" className={`${theme === "dark" ? "bg-[#0c0a09]" : "bg-[#fafafa]"} py-24 overflow-hidden transition-colors`}>
      <div className="max-w-300 mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span className={`text-[11px] font-semibold tracking-[0.12em] uppercase ${
            theme === "dark"
              ? "text-[#9a9a9a] bg-[#2a2a2a] border border-[#404040]"
              : "text-[#777169] bg-[#f0efed] border border-[#e7e5e4]"
          } px-3 py-1.5 rounded-full`}>
            Pricing
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className={`text-[clamp(28px,4.5vw,48px)] leading-[1.08] tracking-[-0.02em] ${
              theme === "dark" ? "text-white" : "text-[#0c0a09]"
            } max-w-[18ch]`}
            style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
          >
            Transparent pricing, real value
          </h2>
          <p className={`text-[15px] leading-[1.6] ${
            theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"
          } max-w-[38ch] md:text-right`}>
            Competitive rates tailored for Patna&apos;s market — no hidden
            costs, no surprises.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border flex flex-col overflow-hidden ${
                plan.featured
                  ? theme === "dark"
                    ? "bg-[#1a1a1a] border-[#4a9d6f]"
                    : "bg-[#0c0a09] border-[#292524]"
                  : theme === "dark"
                  ? "bg-[#1a1a1a] border-[#404040]"
                  : "bg-white border-[#e7e5e4]"
              }`}
            >
              {plan.featured && (
                <div className={`absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent ${
                  theme === "dark" ? "via-[#4a9d6f]" : "via-[#f4c5a8]"
                } to-transparent opacity-60`} />
              )}

              {/* Atmospheric orb for featured */}
              {plan.featured && (
                <div
                  className="pointer-events-none absolute top-0 right-0 w-56 h-56 opacity-20"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, #c8b8e0 0%, transparent 70%)",
                  }}
                />
              )}

              <div className="relative z-10 p-8 flex flex-col gap-6 flex-1">
                {/* Plan name & badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[13px] font-semibold tracking-[0.08em] uppercase ${
                      plan.featured
                        ? theme === "dark"
                          ? "text-[#9a9a9a]"
                          : "text-[#a8a29e]"
                        : theme === "dark"
                        ? "text-[#9a9a9a]"
                        : "text-[#777169]"
                    }`}
                  >
                    {plan.name}
                  </span>
                  {plan.featured && (
                    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.06em] px-2.5 py-1 rounded-full ${
                      theme === "dark"
                        ? "text-[#0c0a09] bg-[#4a9d6f]"
                        : "text-[#0c0a09] bg-[#f4c5a8]"
                    }`}>
                      <Zap size={9} strokeWidth={2.5} /> Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="flex flex-col gap-1">
                  <span
                    className={`text-[40px] leading-none tracking-[-0.03em] ${
                      plan.featured || theme === "dark" ? "text-white" : "text-[#0c0a09]"
                    }`}
                    style={{
                      fontFamily: "var(--font-garamond)",
                      fontWeight: 400,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-[13px] ${
                      plan.featured
                        ? theme === "dark"
                          ? "text-[#9a9a9a]"
                          : "text-[#a8a29e]"
                        : theme === "dark"
                        ? "text-[#9a9a9a]"
                        : "text-[#777169]"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Tagline */}
                <p
                  className={`text-[14px] leading-normal ${
                    plan.featured
                      ? theme === "dark"
                        ? "text-[#9a9a9a]"
                        : "text-[#a8a29e]"
                      : theme === "dark"
                      ? "text-[#b0b0b0]"
                      : "text-[#4e4e4e]"
                  }`}
                >
                  {plan.tagline}
                </p>

                {/* Divider */}
                <div
                  className={`h-px ${
                    plan.featured
                      ? theme === "dark"
                        ? "bg-white/10"
                        : "bg-white/10"
                      : theme === "dark"
                      ? "bg-[#404040]"
                      : "bg-[#e7e5e4]"
                  }`}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${
                          plan.featured
                            ? theme === "dark"
                              ? "text-[#4a9d6f]"
                              : "text-[#f4c5a8]"
                            : theme === "dark"
                            ? "text-[#4a9d6f]"
                            : "text-[#292524]"
                        }`}
                        strokeWidth={2.5}
                      />
                      <span
                        className={`text-[13px] leading-normal ${
                          plan.featured
                            ? theme === "dark"
                              ? "text-[#9a9a9a]"
                              : "text-[#a8a29e]"
                            : theme === "dark"
                            ? "text-[#b0b0b0]"
                            : "text-[#4e4e4e]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  className={`rounded-full h-10 text-[14px] font-medium w-full mt-2 shadow-none transition-all duration-200 ${
                    plan.featured
                      ? theme === "dark"
                        ? "bg-[#4a9d6f] text-white hover:bg-[#3a8d5f]"
                        : "bg-white text-[#0c0a09] hover:bg-[#f0efed]"
                      : theme === "dark"
                      ? "bg-[#4a9d6f] text-white hover:bg-[#3a8d5f]"
                      : "bg-[#292524] text-white hover:bg-[#0c0a09]"
                  }`}
                >
                  <Link href="#contact">
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className={`text-center text-[13px] mt-8 ${
          theme === "dark" ? "text-[#9a9a9a]" : "text-[#a8a29e]"
        }`}>
          All prices are in INR and exclusive of GST. Need something custom?{" "}
          <Link
            href="#contact"
            className={`underline underline-offset-2 transition-colors ${
              theme === "dark"
                ? "text-[#4a9d6f] hover:text-[#5aad7f]"
                : "text-[#292524] hover:text-[#0c0a09]"
            }`}
          >
            Let&apos;s talk.
          </Link>
        </p>
      </div>
    </section>
  );
}
