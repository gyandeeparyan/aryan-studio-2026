import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#f5f5f5] pt-16"
    >
      {/* Atmospheric gradient orbs */}
      <div
        className="pointer-events-none absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, #f4c5a8 0%, #f4c5a820 50%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-5%] left-[-8%] w-[500px] h-[500px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, #c8b8e0 0%, #c8b8e020 50%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, #a7e5d3 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 w-full">
        {/* Location badge */}
        <div className="flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] uppercase text-[#777169] bg-[#f0efed] border border-[#e7e5e4] px-3 py-1.5 rounded-full">
            <MapPin size={10} strokeWidth={2.5} />
            Patna, Bihar · Available for Projects
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="text-[clamp(40px,7vw,88px)] leading-[1.03] tracking-[-0.03em] text-[#0c0a09] max-w-[14ch] mb-7"
          style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
        >
          We Build Digital Experiences That Actually Work.
        </h1>

        {/* Sub-headline */}
        <p className="text-[17px] leading-[1.6] tracking-[0.01em] text-[#4e4e4e] max-w-[48ch] mb-10">
          From Patna to the world — Aryan Studio crafts fast, modern websites
          and web applications that drive real results for your business.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#292524] text-white text-[15px] font-medium px-6 h-11 hover:bg-[#0c0a09] transition-colors duration-200 shadow-none"
          >
            <Link href="#contact">
              Start a Project <ArrowRight size={15} className="ml-1.5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#d6d3d1] text-[#292524] text-[15px] font-medium px-6 h-11 hover:bg-[#f0efed] hover:border-[#292524] transition-all duration-200 shadow-none bg-transparent"
          >
            <Link href="#projects">View Our Work</Link>
          </Button>
        </div>

        {/* Metrics strip */}
        <div className="flex flex-wrap gap-10 mt-20 pt-10 border-t border-[#e7e5e4]">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "3+", label: "Years of Excellence" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "₹8K+", label: "Starting Price" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span
                className="text-[28px] leading-none tracking-[-0.03em] text-[#0c0a09]"
                style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
              >
                {item.number}
              </span>
              <span className="text-[13px] text-[#777169] font-medium tracking-[0.02em]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#777169]">
          Scroll
        </span>
        <div className="w-px h-8 bg-[#777169]" />
      </div>
    </section>
  );
}
