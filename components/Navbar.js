"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";
import { useI18n } from "@/lib/I18nProvider";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "#services", label: "Services", labelKey: "nav.services" },
  { href: "#about", label: "About", labelKey: "nav.about" },
  { href: "#projects", label: "Work", labelKey: "nav.projects" },
  { href: "#pricing", label: "Pricing", labelKey: "nav.pricing" },
  { href: "#faqs", label: "FAQs", labelKey: "faqs.title" },
  { href: "#contact", label: "Contact", labelKey: "nav.contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, switchLanguage, t, mounted: i18nMounted } = useI18n();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) {
    // Return minimal nav to prevent hydration errors
    return (
      <header className="fixed top-0 inset-x-0 z-50 h-16" style={{
        backgroundColor: "rgba(245, 245, 245, 0.97)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid #e7e5e4",
      }}>
        <div className="max-w-300 mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-[#292524] to-[#0c0a09] text-white" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      suppressHydrationWarning
      className="fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300"
      style={scrolled ? {
        backgroundColor: theme === "dark" ? "rgba(12,10,9,0.97)" : "rgba(245,245,245,0.97)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${theme === "dark" ? "#404040" : "#e7e5e4"}`,
        boxShadow: theme === "dark"
          ? "0 2px 16px rgba(0,0,0,0.5)"
          : "0 2px 16px rgba(0,0,0,0.08)",
      } : {}}
    >
      <div className="max-w-300 mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2.5 group">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              suppressHydrationWarning
              className={`text-[14px] font-medium transition-colors duration-200 ${
                theme === "dark"
                  ? "text-[#b0b0b0] hover:text-white"
                  : "text-[#777169] hover:text-[#0c0a09]"
              }`}
            >
              {i18nMounted ? t(link.labelKey, link.label) : link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            suppressHydrationWarning
            onClick={() => switchLanguage(language === "en" ? "hi" : "en")}
            className={`p-2 rounded-lg cursor-pointer transition-colors flex items-center gap-1 ${
              theme === "dark"
                ? "bg-[#1a1a1a] text-[#b0b0b0] hover:bg-[#2a2a2a]"
                : "bg-[#f0efed] text-[#777169] hover:bg-[#e7e5e4]"
            }`}
            aria-label="Switch language"
          >
            <Globe size={18} />
            <span className="text-xs font-medium">{language.toUpperCase()}</span>
          </button>

          {/* Theme Toggle */}
          <button
            suppressHydrationWarning
            onClick={toggleTheme}
            className={`p-2 rounded-lg cursor-pointer transition-colors ${
              theme === "dark"
                ? "bg-[#1a1a1a] text-[#b0b0b0] hover:bg-[#2a2a2a]"
                : "bg-[#f0efed] text-[#777169] hover:bg-[#e7e5e4]"
            }`}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA Button */}
          <Button
            suppressHydrationWarning
            asChild
            className={`rounded-full text-white text-[14px] font-medium px-5 h-9 transition-colors duration-200 shadow-none ${
              theme === "dark"
                ? "bg-[#4a9d6f] hover:bg-[#3a8d5f]"
                : "bg-[#292524] hover:bg-[#0c0a09]"
            }`}
          >
            <Link href="#contact">{i18nMounted ? t("common.startProject", "Start a Project") : "Start a Project"}</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          suppressHydrationWarning
          className={`md:hidden p-1 ${
            theme === "dark" ? "text-white" : "text-[#0c0a09]"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div suppressHydrationWarning className={`md:hidden ${
          theme === "dark"
            ? "bg-[#0c0a09]/98 border-b border-[#404040]"
            : "bg-[#f5f5f5]/98 border-b border-[#e7e5e4]"
        } backdrop-blur-md px-6 py-5 flex flex-col gap-4 transition-colors`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              suppressHydrationWarning
              className={`text-[15px] font-medium transition-colors ${
                theme === "dark"
                  ? "text-[#b0b0b0] hover:text-white"
                  : "text-[#4e4e4e] hover:text-[#0c0a09]"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {i18nMounted ? t(link.labelKey, link.label) : link.label}
            </Link>
          ))}
          <div suppressHydrationWarning className="flex items-center gap-2 mt-2 pt-4 border-t flex-wrap" style={{
            borderColor: theme === "dark" ? "#404040" : "#e7e5e4"
          }}>
            <button
              suppressHydrationWarning
              onClick={() => {
                switchLanguage(language === "en" ? "hi" : "en");
              }}
              className={`p-2 rounded-lg text-sm transition-colors flex items-center gap-1 flex-1 justify-center ${
                theme === "dark"
                  ? "bg-[#1a1a1a] text-[#b0b0b0] hover:bg-[#2a2a2a]"
                  : "bg-[#f0efed] text-[#777169] hover:bg-[#e7e5e4]"
              }`}
              aria-label="Switch language"
            >
              <Globe size={16} />
              <span>{language === "en" ? "हिंदी" : "English"}</span>
            </button>
            <button
              suppressHydrationWarning
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors flex-1 ${
                theme === "dark"
                  ? "bg-[#1a1a1a] text-[#b0b0b0] hover:bg-[#2a2a2a]"
                  : "bg-[#f0efed] text-[#777169] hover:bg-[#e7e5e4]"
              }`}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button
              suppressHydrationWarning
              asChild
              className={`rounded-full text-white text-sm font-medium px-4 h-9 transition-colors duration-200 shadow-none flex-1 ${
                theme === "dark"
                  ? "bg-[#4a9d6f] hover:bg-[#3a8d5f]"
                  : "bg-[#292524] hover:bg-[#0c0a09]"
              }`}
            >
              <Link href="#contact" onClick={() => setMobileOpen(false)}>
                {i18nMounted ? t("common.startProject", "Start a Project") : "Start a Project"}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
