import { Card, CardContent } from "@/components/ui/card";
import {
  Palette,
  Code2,
  ShoppingBag,
  Search,
  Smartphone,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design & UI/UX",
    description:
      "Pixel-perfect designs crafted for conversions. We build interfaces that look great and feel intuitive.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Clean, scalable code built with modern frameworks. Next.js, React, Node.js — we speak every tech stack.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    description:
      "Online stores that actually sell. From product pages to checkout, we build end-to-end commerce experiences.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description:
      "Get found on Google. We optimize every site for speed, accessibility, and search-engine visibility.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    description:
      "Your site looks flawless on every screen — phone, tablet, or desktop. Always responsive, always sharp.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "We don't disappear after launch. Ongoing support, updates, and improvements whenever you need us.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#fafafa] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#777169] bg-[#f0efed] border border-[#e7e5e4] px-3 py-1.5 rounded-full">
            What We Do
          </span>
        </div>

        {/* Section heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className="text-[clamp(28px,4.5vw,48px)] leading-[1.08] tracking-[-0.02em] text-[#0c0a09] max-w-[18ch]"
            style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
          >
            Services that move businesses forward
          </h2>
          <p className="text-[15px] leading-[1.6] text-[#777169] max-w-[38ch] md:text-right">
            We blend strategy, design, and technology to create digital products
            that your users love.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="bg-white border border-[#e7e5e4] rounded-2xl shadow-none group hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 cursor-default"
              >
                <CardContent className="p-7">
                  <div className="w-10 h-10 rounded-xl bg-[#f0efed] flex items-center justify-center mb-5 group-hover:bg-[#0c0a09] transition-colors duration-300">
                    <Icon
                      size={18}
                      className="text-[#4e4e4e] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-[17px] font-medium text-[#0c0a09] mb-2.5 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-[#777169] tracking-[0.01em]">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
