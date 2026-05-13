import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

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
  return (
    <footer className="bg-[#f5f5f5] border-t border-[#e7e5e4]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="#hero" className="flex items-center gap-2">
              <span
                className="text-[20px] leading-none tracking-[-0.02em] text-[#0c0a09]"
                style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
              >
                Aryan Studio
              </span>
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#777169] bg-[#f0efed] border border-[#e7e5e4] px-2 py-0.5 rounded-full">
                Patna
              </span>
            </Link>
            <p className="text-[13px] leading-[1.7] text-[#777169] max-w-[28ch]">
              Web development services crafted for Bihar&apos;s ambitious
              businesses. Modern, fast, and built to last.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="tel:+917800123456"
                className="inline-flex items-center gap-2 text-[13px] text-[#4e4e4e] hover:text-[#0c0a09] transition-colors"
              >
                <Phone size={12} strokeWidth={1.8} />
                +91 78001 23456
              </a>
              <a
                href="mailto:hello@aryanstudio.in"
                className="inline-flex items-center gap-2 text-[13px] text-[#4e4e4e] hover:text-[#0c0a09] transition-colors"
              >
                <Mail size={12} strokeWidth={1.8} />
                hello@aryanstudio.in
              </a>
              <span className="inline-flex items-start gap-2 text-[13px] text-[#4e4e4e]">
                <MapPin size={12} strokeWidth={1.8} className="mt-0.5 shrink-0" />
                Fraser Road, Patna, Bihar 800001
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#777169]">
                {group}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[13px] text-[#4e4e4e] hover:text-[#0c0a09] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-[#0c0a09] rounded-2xl p-6 flex flex-col gap-4 self-start">
            <p
              className="text-[18px] leading-[1.2] tracking-[-0.01em] text-white"
              style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
            >
              Ready to start your project?
            </p>
            <p className="text-[12px] text-[#a8a29e] leading-[1.6]">
              Free consultation. No commitment. Just a conversation.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-[#0c0a09] text-[13px] font-medium h-9 px-4 hover:bg-[#f0efed] transition-colors duration-200"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#e7e5e4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#a8a29e]">
            © {new Date().getFullYear()} Aryan Studio. All rights reserved.
          </p>
          <p className="text-[12px] text-[#a8a29e]">
            Made with ♥ in Patna, Bihar
          </p>
        </div>
      </div>
    </footer>
  );
}
