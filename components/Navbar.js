"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300 ${
        scrolled
          ? "bg-[#f5f5f5]/95 backdrop-blur-md border-b border-[#e7e5e4] shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="#hero" className="flex items-center gap-2.5 group">
          <span
            className="text-[#0c0a09] text-[20px] leading-none tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
          >
            Aryan Studio
          </span>
          <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#777169] bg-[#f0efed] px-2 py-0.5 rounded-full border border-[#e7e5e4]">
            Patna
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-[#777169] hover:text-[#0c0a09] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="rounded-full bg-[#292524] text-white text-[14px] font-medium px-5 h-9 hover:bg-[#0c0a09] transition-colors duration-200 shadow-none"
          >
            <Link href="#contact">Start a Project</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#0c0a09] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#f5f5f5]/98 backdrop-blur-md border-b border-[#e7e5e4] px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[#4e4e4e] hover:text-[#0c0a09] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="rounded-full bg-[#292524] text-white w-fit px-5 h-9 mt-1"
          >
            <Link href="#contact" onClick={() => setMobileOpen(false)}>
              Start a Project
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
