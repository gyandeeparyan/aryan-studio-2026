"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/lib/ThemeProvider";
import { Terminal } from "lucide-react";

export default function TerminalBox() {
  const { theme } = useTheme();
  const [displayedCode, setDisplayedCode] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const codeLines = [
    "$ npm create next-app",
    "",
    "✓ Creating AI-powered app...",
    "✓ Integrating ML models...",
    "✓ Building responsive UI...",
    "✓ Optimizing performance...",
    "",
    "🚀 Ready to deploy!",
  ];

  const fullCode = codeLines.join("\n");

  // Typing effect
  useEffect(() => {
    if (!mounted) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullCode.length) {
        setDisplayedCode(fullCode.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [mounted, fullCode]);

  // Blinking cursor
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <div
      className={`rounded-lg border overflow-hidden shadow-2xl transition-all duration-300 ${
        theme === "dark"
          ? "bg-[#1a1a1a] border-[#404040]"
          : "bg-[#f9f7f4] border-[#e7e5e4]"
      }`}
    >
      {/* Terminal Header */}
      <div
        className={`flex items-center gap-2 px-4 py-3 border-b ${
          theme === "dark"
            ? "bg-[#0c0a09] border-[#404040]"
            : "bg-[#f0efed] border-[#e7e5e4]"
        }`}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="ml-2 flex items-center gap-1.5">
          <Terminal size={14} className={theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"} />
          <span className={`text-xs font-medium ${theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"}`}>
            aryan-studio
          </span>
        </div>
      </div>

      {/* Terminal Content */}
      <div
        className={`p-4 font-mono text-sm leading-relaxed overflow-hidden ${
          theme === "dark" ? "text-[#b0b0b0]" : "text-[#4e4e4e]"
        }`}
      >
        <pre className="whitespace-pre-wrap wrap-break-word">
          {displayedCode}
          {displayedCode.length < fullCode.length && (
            <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity`}>
              _
            </span>
          )}
          {displayedCode.length === fullCode.length && cursorVisible && (
            <span className="opacity-100">_</span>
          )}
        </pre>
      </div>
    </div>
  );
}
