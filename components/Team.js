"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";

const team = [
  {
    name: "Aryan Kumar",
    role: "Founder & Full Stack Developer",
    bio: "5+ years building web applications. Obsessed with clean code and elegant UI. Leads all technical architecture decisions.",
    initials: "AK",
    orb: "radial-gradient(ellipse at center, #f4c5a8 0%, transparent 70%)",
    bg: "#fdf5f0",
  },
  {
    name: "Priya Sharma",
    role: "Lead UI/UX Designer",
    bio: "Figma wizard with an eye for editorial design. Crafts interfaces that convert. Previously at a Delhi-based design studio.",
    initials: "PS",
    orb: "radial-gradient(ellipse at center, #c8b8e0 0%, transparent 70%)",
    bg: "#f6f2fb",
  },
  {
    name: "Rohit Verma",
    role: "Frontend Developer",
    bio: "React & Next.js specialist. Brings pixel-perfect precision to every component. Passionate about web performance and a11y.",
    initials: "RV",
    orb: "radial-gradient(ellipse at center, #a7e5d3 0%, transparent 70%)",
    bg: "#f0faf6",
  },
  {
    name: "Neha Singh",
    role: "Project Manager & SEO",
    bio: "Keeps projects on time and on budget. Google-certified in SEO and analytics. The glue that holds every delivery together.",
    initials: "NS",
    orb: "radial-gradient(ellipse at center, #a8c8e8 0%, transparent 70%)",
    bg: "#f0f6fb",
  },
];

export default function Team() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section suppressHydrationWarning id="team" className={`${theme === "dark" ? "bg-[#0c0a09]" : "bg-[#f5f5f5]"} py-24 transition-colors`}>
      <div className="max-w-300 mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span className={`text-[11px] font-semibold tracking-[0.12em] uppercase ${
            theme === "dark"
              ? "text-[#9a9a9a] bg-[#2a2a2a] border border-[#404040]"
              : "text-[#777169] bg-[#f0efed] border border-[#e7e5e4]"
          } px-3 py-1.5 rounded-full`}>
            The Team
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className={`text-[clamp(28px,4.5vw,48px)] leading-[1.08] tracking-[-0.02em] ${
              theme === "dark" ? "text-white" : "text-[#0c0a09]"
            } max-w-[18ch]`}
            style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
          >
            The people behind the pixels
          </h2>
          <p className={`text-[15px] leading-[1.6] ${
            theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"
          } max-w-[36ch] md:text-right`}>
            A tight-knit crew of designers, developers, and strategists — all
            based in Patna.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member) => (
            <Card
              key={member.name}
              className={`${
                theme === "dark"
                  ? "bg-[#1a1a1a] border-[#404040] hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  : "bg-white border-[#e7e5e4] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              } rounded-2xl shadow-none group transition-shadow duration-300 overflow-hidden`}
            >
              <CardContent className="p-0">
                {/* Avatar area */}
                <div
                  className="relative h-36 flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: theme === "dark" ? "#2a2a2a" : member.bg }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: member.orb, opacity: 0.6 }}
                  />
                  <div className={`relative z-10 w-14 h-14 rounded-full ${
                    theme === "dark"
                      ? "bg-[#0c0a09]/80 border-[#404040]"
                      : "bg-white/80 border-[#e7e5e4]"
                  } backdrop-blur-sm border flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.06)]`}>
                    <span
                      className={`text-[18px] tracking-[-0.01em] ${
                        theme === "dark" ? "text-white" : "text-[#0c0a09]"
                      }`}
                      style={{
                        fontFamily: "var(--font-garamond)",
                        fontWeight: 400,
                      }}
                    >
                      {member.initials}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className={`text-[15px] font-medium ${
                    theme === "dark" ? "text-white" : "text-[#0c0a09]"
                  } leading-tight mb-0.5`}>
                    {member.name}
                  </h3>
                  <p className={`text-[12px] font-medium ${
                    theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"
                  } mb-3 tracking-[0.01em]`}>
                    {member.role}
                  </p>
                  <p className={`text-[12px] leading-[1.6] ${
                    theme === "dark" ? "text-[#9a9a9a]" : "text-[#4e4e4e]"
                  }`}>
                    {member.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

