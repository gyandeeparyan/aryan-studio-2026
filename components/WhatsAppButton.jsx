"use client";

import { MessageCircle } from "lucide-react";
import { companyInfo } from "@/lib/config";
import { useTheme } from "@/lib/ThemeProvider";

export default function WhatsAppButton() {
  const { theme } = useTheme();

  const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsapp}?text=Hi%20Aryan%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${
        theme === "dark"
          ? "bg-[#25D366] hover:bg-[#20BA5A] text-white"
          : "bg-[#25D366] hover:bg-[#20BA5A] text-white"
      }`}
      title="Chat with us on WhatsApp"
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} fill="currentColor" strokeWidth={1.5} />
    </a>
  );
}
