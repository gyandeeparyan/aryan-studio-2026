"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { companyInfo } from "@/lib/config";
import { useTheme } from "@/lib/ThemeProvider";

const footerLinks = {
  Services: [
    { label: "Web Design", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "E-commerce", href: "#services" },
    { label: "SEO & Performance", href: "#services" },
    { label: "Maintenance", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Work", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer suppressHydrationWarning className={`${
      theme === "dark" ? "bg-[#1a1815] border-[#404040]" : "bg-[#f5f5f5] border-[#e7e5e4]"
    } border-t transition-colors`}>
      <div className="max-w-300uto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="#hero" className="flex items-center gap-2">
              <span
                suppressHydrationWarning
                className={`text-[20px] leading-none tracking-[-0.02em] ${
                  theme === "dark" ? "text-white" : "text-[#0c0a09]"
                }`}
                style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
              >
                {companyInfo.name}
              </span>

            </Link>
            <p suppressHydrationWarning className={`text-[13px] leading-[1.7] ${
              theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"
            } max-w-[28ch]`}>
              Web development services crafted for Bihar&apos;s ambitious
              businesses. Modern, fast, and built to last.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a
                href={companyInfo.contact.phoneLink}
                className={`inline-flex items-center gap-2 text-[13px] transition-colors ${
                  theme === "dark"
                    ? "text-[#9a9a9a] hover:text-white"
                    : "text-[#4e4e4e] hover:text-[#0c0a09]"
                }`}
              >
                <Phone size={12} strokeWidth={1.8} />
                {companyInfo.contact.phone}
              </a>
              <a
                href={companyInfo.contact.emailLink}
                className={`inline-flex items-center gap-2 text-[13px] transition-colors ${
                  theme === "dark"
                    ? "text-[#9a9a9a] hover:text-white"
                    : "text-[#4e4e4e] hover:text-[#0c0a09]"
                }`}
              >
                <Mail size={12} strokeWidth={1.8} />
                {companyInfo.contact.email}
              </a>
              <span className={`inline-flex items-start gap-2 text-[13px] ${
                theme === "dark" ? "text-[#9a9a9a]" : "text-[#4e4e4e]"
              }`}>
                <MapPin size={12} strokeWidth={1.8} className="mt-0.5 shrink-0" />
                {companyInfo.contact.fullAddress}
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <h4 className={`text-[11px] font-semibold tracking-[0.12em] uppercase ${
                theme === "dark" ? "text-[#707070]" : "text-[#777169]"
              }`}>
                {group}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`text-[13px] transition-colors ${
                        theme === "dark"
                          ? "text-[#9a9a9a] hover:text-white"
                          : "text-[#4e4e4e] hover:text-[#0c0a09]"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div className={`${
            theme === "dark" ? "bg-[#2a2a2a]" : "bg-[#0c0a09]"
          } rounded-2xl p-6 flex flex-col gap-4 self-start transition-colors`}>
            <p
              className="text-[18px] leading-[1.2] tracking-[-0.01em] text-white"
              style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
            >
              Ready to start your project?
            </p>
            <p className={`text-[12px] ${
              theme === "dark" ? "text-[#9a9a9a]" : "text-[#a8a29e]"
            } leading-[1.6]`}>
              Free consultation. No commitment. Just a conversation.
            </p>
            <Link
              href="#contact"
              className={`inline-flex items-center justify-center rounded-full text-[13px] font-medium h-9 px-4 transition-colors duration-200 ${
                theme === "dark"
                  ? "bg-[#4a9d6f] text-white hover:bg-[#3a8d5f]"
                  : "bg-white text-[#0c0a09] hover:bg-[#f0efed]"
              }`}
            >
              Get in touch →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-12 pt-6 ${
          theme === "dark" ? "border-[#404040]" : "border-[#e7e5e4]"
        } border-t flex flex-col sm:flex-row items-center justify-between gap-3`}>
          <p className={`text-[12px] ${
            theme === "dark" ? "text-[#707070]" : "text-[#a8a29e]"
          }`}>
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <p className={`text-[12px] ${
            theme === "dark" ? "text-[#707070]" : "text-[#a8a29e]"
          }`}>
            Made with ♥ in Patna, Bihar
          </p>
        </div>
      </div>
    </footer>
  );
}
