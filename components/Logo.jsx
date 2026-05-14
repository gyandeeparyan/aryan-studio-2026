"use client";

import { useTheme } from "@/lib/ThemeProvider";
import { companyInfo } from "@/lib/config";
import { useState, useEffect } from "react";

export default function Logo() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-linear-to-br from-[#292524] to-[#0c0a09]" />
        <div className="hidden sm:flex flex-col gap-0">
          <span className="text-sm font-bold tracking-tight leading-none text-[#0c0a09]">
            {companyInfo.name}
          </span>

        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {/* A Logo */}
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-200 ${
          theme === "dark"
            ? "bg-linear-to-br from-[#4a9d6f] to-[#2d6b4f] text-white shadow-lg shadow-[#4a9d6f]/20"
            : "bg-linear-to-br from-[#292524] to-[#0c0a09] text-white shadow-lg shadow-[#292524]/20"
        }`}
      >
        Ã
      </div>

      {/* Company Name - Hidden on mobile */}
      <div className="hidden sm:flex flex-col gap-0">


      </div>
    </div>
  );
}
