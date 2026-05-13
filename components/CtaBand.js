import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="relative bg-[#f5f5f5] py-24 overflow-hidden">
      {/* Atmospheric orbs */}
      <div
        className="pointer-events-none absolute top-[-20%] left-[10%] w-[400px] h-[400px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, #e8b8c4 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] right-[5%] w-[350px] h-[350px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, #a7e5d3 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center gap-8">
        <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#777169] bg-[#f0efed] border border-[#e7e5e4] px-3 py-1.5 rounded-full">
          Start Today
        </span>
        <h2
          className="text-[clamp(32px,5vw,56px)] leading-[1.06] tracking-[-0.025em] text-[#0c0a09] max-w-[20ch]"
          style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
        >
          Your next great website is one conversation away.
        </h2>
        <p className="text-[16px] leading-[1.6] text-[#4e4e4e] max-w-[46ch]">
          Whether you need a landing page or a full-stack web app, we&apos;re
          here to make it happen — on time and on budget.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            className="rounded-full bg-[#292524] text-white text-[15px] font-medium px-7 h-12 hover:bg-[#0c0a09] transition-colors duration-200 shadow-none"
          >
            <Link href="#contact">
              Start a Project <ArrowRight size={15} className="ml-2" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-[#d6d3d1] text-[#292524] text-[15px] font-medium px-7 h-12 hover:bg-[#f0efed] hover:border-[#292524] transition-all duration-200 shadow-none bg-transparent"
          >
            <Link href="tel:+917800123456">Call Us Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
