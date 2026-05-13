"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";

const projects = [
  {
    category: "Tourism",
    title: "Bihar Tourism Portal",
    description:
      "A vibrant digital gateway showcasing Bihar's rich cultural heritage, pilgrimage sites, and wildlife sanctuaries. Fully CMS-managed with multilingual support.",
    tags: ["Next.js", "Tailwind CSS", "CMS"],
    gradient: "radial-gradient(ellipse at 30% 40%, #a7e5d3 0%, transparent 65%)",
    year: "2024",
  },
  {
    category: "Food Tech",
    title: "Patna Eats",
    description:
      "A hyperlocal restaurant discovery and food ordering platform for Patna's growing food scene. Real-time order tracking and digital menu management.",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "radial-gradient(ellipse at 70% 30%, #f4c5a8 0%, transparent 65%)",
    year: "2024",
  },
  {
    category: "EdTech",
    title: "Vidya Connect",
    description:
      "A comprehensive school management and e-learning platform for 5,000+ students across Bihar. Attendance, grades, and parent communication — all in one place.",
    tags: ["Next.js", "PostgreSQL", "AWS"],
    gradient: "radial-gradient(ellipse at 50% 60%, #c8b8e0 0%, transparent 65%)",
    year: "2023",
  },
  {
    category: "E-commerce",
    title: "ShopLocal Bihar",
    description:
      "An e-commerce marketplace connecting Bihar's local artisans and handloom weavers with buyers across India. 200+ sellers onboarded in the first month.",
    tags: ["Next.js", "Stripe", "Prisma"],
    gradient: "radial-gradient(ellipse at 60% 50%, #a8c8e8 0%, transparent 65%)",
    year: "2023",
  },
];

export default function Projects() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section suppressHydrationWarning id="projects" className={`${theme === "dark" ? "bg-[#0c0a09]" : "bg-[#f5f5f5]"} py-24 transition-colors`}>
      <div className="max-w-300 mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span className={`text-[11px] font-semibold tracking-[0.12em] uppercase ${
            theme === "dark"
              ? "text-[#9a9a9a] bg-[#2a2a2a] border border-[#404040]"
              : "text-[#777169] bg-[#f0efed] border border-[#e7e5e4]"
          } px-3 py-1.5 rounded-full`}>
            Our Work
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className={`text-[clamp(28px,4.5vw,48px)] leading-[1.08] tracking-[-0.02em] ${
              theme === "dark" ? "text-white" : "text-[#0c0a09]"
            } max-w-[18ch]`}
            style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
          >
            Projects we&apos;re proud of
          </h2>
          <p className={`text-[15px] leading-[1.6] ${
            theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"
          } max-w-[36ch] md:text-right`}>
            A selection of our recent work across industries and technologies.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative ${
                theme === "dark"
                  ? "bg-[#1a1a1a] border-[#404040] hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
                  : "bg-[#fafafa] border-[#e7e5e4] hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
              } rounded-2xl border overflow-hidden transition-shadow duration-300 cursor-pointer`}
            >
              {/* Gradient orb background */}
              <div
                className="absolute inset-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                style={{ background: project.gradient }}
              />

              {/* Spacer (visual canvas) */}
              <div className="relative h-44 flex items-center justify-center">
                <span
                  className={`text-[72px] leading-none tracking-[-0.04em] ${
                    theme === "dark" ? "text-white/5" : "text-[#0c0a09]/8"
                  } select-none`}
                  style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
                >
                  {project.title.charAt(0)}
                </span>
              </div>

              {/* Content */}
              <div className={`relative z-10 p-7 ${
                theme === "dark"
                  ? "border-t border-[#404040] bg-[#0c0a09]/80 backdrop-blur-sm"
                  : "border-t border-[#e7e5e4] bg-white/60 backdrop-blur-sm"
              }`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${
                      theme === "dark"
                        ? "text-[#9a9a9a] bg-[#2a2a2a] border-[#404040]"
                        : "text-[#777169] bg-[#f0efed] border-[#e7e5e4]"
                    }`}>
                      {project.category}
                    </span>
                    <span className={`text-[11px] font-medium ${
                      theme === "dark" ? "text-[#707070]" : "text-[#a8a29e]"
                    }`}>
                      {project.year}
                    </span>
                  </div>
                  <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    theme === "dark"
                      ? "border-[#404040] bg-[#1a1a1a] group-hover:bg-[#4a9d6f] group-hover:border-[#4a9d6f]"
                      : "border-[#e7e5e4] bg-white group-hover:bg-[#292524] group-hover:border-[#292524]"
                  }`}>
                    <ArrowUpRight
                      size={13}
                      className={`transition-colors duration-200 ${
                        theme === "dark"
                          ? "text-[#707070] group-hover:text-white"
                          : "text-[#777169] group-hover:text-white"
                      }`}
                    />
                  </div>
                </div>
                <h3
                  className={`text-[20px] leading-tight tracking-[-0.01em] ${
                    theme === "dark" ? "text-white" : "text-[#0c0a09]"
                  } mb-2.5`}
                  style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
                >
                  {project.title}
                </h3>
                <p className={`text-[13px] leading-[1.6] ${
                  theme === "dark" ? "text-[#9a9a9a]" : "text-[#4e4e4e]"
                } mb-4`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${
                        theme === "dark"
                          ? "text-[#9a9a9a] bg-[#2a2a2a] border-[#404040]"
                          : "text-[#4e4e4e] bg-[#f0efed] border-[#e7e5e4]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

