"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 78001 23456",
    href: "tel:+917800123456",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@aryanstudio.in",
    href: "mailto:hello@aryanstudio.in",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Shop No. 12, Fraser Road, Patna, Bihar 800001",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat, 10 AM – 7 PM IST",
    href: null,
  },
];

const projectTypes = [
  "Landing Page",
  "Business Website",
  "E-commerce Store",
  "Web Application",
  "SEO & Performance",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-[#fafafa] py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#777169] bg-[#f0efed] border border-[#e7e5e4] px-3 py-1.5 rounded-full">
            Contact
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            className="text-[clamp(28px,4.5vw,48px)] leading-[1.08] tracking-[-0.02em] text-[#0c0a09] max-w-[18ch]"
            style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
          >
            Let&apos;s build something great together
          </h2>
          <p className="text-[15px] leading-[1.6] text-[#777169] max-w-[38ch] md:text-right">
            Tell us about your project and we&apos;ll get back to you within 24
            hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* Form */}
          <div className="bg-white rounded-2xl border border-[#e7e5e4] p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#f0faf6] flex items-center justify-center">
                  <CheckCircle2 size={22} className="text-[#16a34a]" strokeWidth={1.8} />
                </div>
                <h3
                  className="text-[24px] tracking-[-0.01em] text-[#0c0a09]"
                  style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
                >
                  Message received!
                </h3>
                <p className="text-[14px] text-[#777169] max-w-[30ch]">
                  Thanks for reaching out. We&apos;ll get back to you within 24
                  hours.
                </p>
                <Button
                  className="rounded-full bg-[#292524] text-white px-5 h-9 text-[14px] mt-2"
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-medium text-[#4e4e4e] tracking-[0.02em]">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Rahul Gupta"
                      className="h-11 rounded-lg border-[#d6d3d1] bg-[#fafafa] text-[14px] text-[#0c0a09] placeholder:text-[#a8a29e] focus-visible:border-[#292524] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-medium text-[#4e4e4e] tracking-[0.02em]">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="rahul@yourbusiness.com"
                      className="h-11 rounded-lg border-[#d6d3d1] bg-[#fafafa] text-[14px] text-[#0c0a09] placeholder:text-[#a8a29e] focus-visible:border-[#292524] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-medium text-[#4e4e4e] tracking-[0.02em]">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="h-11 rounded-lg border-[#d6d3d1] bg-[#fafafa] text-[14px] text-[#0c0a09] placeholder:text-[#a8a29e] focus-visible:border-[#292524] focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-medium text-[#4e4e4e] tracking-[0.02em]">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="h-11 rounded-lg border border-[#d6d3d1] bg-[#fafafa] text-[14px] text-[#0c0a09] px-3 focus:outline-none focus:border-[#292524] transition-colors"
                    >
                      <option value="">Select a service</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-[#4e4e4e] tracking-[0.02em]">
                    Tell us about your project *
                  </label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe what you need — type of website, goals, budget, timeline..."
                    rows={5}
                    className="rounded-lg border-[#d6d3d1] bg-[#fafafa] text-[14px] text-[#0c0a09] placeholder:text-[#a8a29e] focus-visible:border-[#292524] focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="rounded-full bg-[#292524] text-white text-[14px] font-medium h-11 px-6 hover:bg-[#0c0a09] transition-colors duration-200 shadow-none w-fit mt-1"
                >
                  Send Message <Send size={13} className="ml-2" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-5">
            {/* Orb card */}
            <div className="relative bg-[#0c0a09] rounded-2xl overflow-hidden p-8 flex-1">
              <div
                className="pointer-events-none absolute top-0 right-0 w-48 h-48 opacity-25"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #e8b8c4 0%, transparent 70%)",
                }}
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 w-40 h-40 opacity-20"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #a8c8e8 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10">
                <p
                  className="text-[22px] leading-[1.2] tracking-[-0.01em] text-white mb-2"
                  style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
                >
                  Response time under 24 hours.
                </p>
                <p className="text-[13px] text-[#a8a29e] leading-[1.6]">
                  We&apos;re a small team that moves fast. Expect a personalised
                  response — not a template.
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-white rounded-2xl border border-[#e7e5e4] p-6 flex flex-col gap-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#f0efed] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={14} className="text-[#4e4e4e]" strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#a8a29e]">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-[13px] text-[#292524] font-medium hover:text-[#0c0a09] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-[13px] text-[#4e4e4e]">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
