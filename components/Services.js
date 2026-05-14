"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/lib/ThemeProvider";
import { useI18n } from "@/lib/I18nProvider";
import {
  Palette,
  Code2,
  ShoppingBag,
  Search,
  Smartphone,
  Wrench,
} from "lucide-react";

const servicesKeys = [
  {
    icon: Palette,
    titleKey: "services.labels.webDesign",
    descKey: "services.labels.webDesignDesc",
  },
  {
    icon: Code2,
    titleKey: "services.labels.webDev",
    descKey: "services.labels.webDevDesc",
  },
  {
    icon: ShoppingBag,
    titleKey: "services.labels.ecommerce",
    descKey: "services.labels.ecommerceDesc",
  },
  {
    icon: Search,
    titleKey: "services.labels.seo",
    descKey: "services.labels.seoDesc",
  },
  {
    icon: Smartphone,
    titleKey: "services.labels.mobile",
    descKey: "services.labels.mobileDesc",
  },
  {
    icon: Wrench,
    titleKey: "services.labels.maintenance",
    descKey: "services.labels.maintenanceDesc",
  },
];

export default function Services() {
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
    <section suppressHydrationWarning id="services" className={`${theme === "dark" ? "bg-[#1a1815]" : "bg-[#fafafa]"} py-24 transition-colors`}>
      <div className="max-w-300 mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-5">
          <span className={`text-[11px] font-semibold tracking-[0.12em] uppercase ${
            theme === "dark"
              ? "text-[#9a9a9a] bg-[#2a2a2a] border border-[#404040]"
              : "text-[#777169] bg-[#f0efed] border border-[#e7e5e4]"
          } px-3 py-1.5 rounded-full`}>
            {t("common.whatWeDo", "What We Do")}
          </span>
        </div>

        {/* Section heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className={`text-[clamp(28px,4.5vw,48px)] leading-[1.08] tracking-[-0.02em] ${
              theme === "dark" ? "text-white" : "text-[#0c0a09]"
            } max-w-[18ch]`}
            style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
          >
            {t("services.title", "Services that move businesses forward")}
          </h2>
          <p className={`text-[15px] leading-[1.6] ${
            theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"
          } max-w-[38ch] md:text-right`}>
            {t("services.description", "We blend strategy, design, and technology to create digital products that your users love.")}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesKeys.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.titleKey}
                className={`${
                  theme === "dark"
                    ? "bg-[#2a2a2a] border-[#404040] hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
                    : "bg-white border-[#e7e5e4] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                } rounded-2xl shadow-none group transition-shadow duration-300 cursor-default`}
              >
                <CardContent className="p-7">
                  <div className={`w-10 h-10 rounded-xl ${
                    theme === "dark"
                      ? "bg-[#404040] group-hover:bg-white"
                      : "bg-[#f0efed] group-hover:bg-[#0c0a09]"
                  } flex items-center justify-center mb-5 transition-colors duration-300`}>
                    <Icon
                      size={18}
                      className={`${
                        theme === "dark"
                          ? "text-[#9a9a9a] group-hover:text-[#0c0a09]"
                          : "text-[#4e4e4e] group-hover:text-white"
                      } transition-colors duration-300`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className={`text-[17px] font-medium ${
                    theme === "dark" ? "text-white" : "text-[#0c0a09]"
                  } mb-2.5 leading-tight`}>
                    {t(service.titleKey)}
                  </h3>
                  <p className={`text-[14px] leading-[1.6] ${
                    theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"
                  } tracking-[0.01em]`}>
                    {t(service.descKey)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
