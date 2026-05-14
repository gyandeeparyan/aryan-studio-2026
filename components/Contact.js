"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/lib/config";
import { useTheme } from "@/lib/ThemeProvider";
import { useI18n } from "@/lib/I18nProvider";
import { useGeolocation } from "@/lib/useGeolocation";

export default function Contact() {
  const { theme } = useTheme();
  const { t, mounted: i18nMounted } = useI18n();
  const { placeName, loading: geoLoading } = useGeolocation();
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !i18nMounted) {
    return null;
  }

  const contactInfo = [
    {
      icon: Phone,
      labelKey: "contact.phone",
      value: companyInfo.contact.phone,
      href: companyInfo.contact.phoneLink,
    },
    {
      icon: Mail,
      labelKey: "contact.email",
      value: companyInfo.contact.email,
      href: companyInfo.contact.emailLink,
    },
    {
      icon: MapPin,
      labelKey: "contact.address",
      value: placeName || companyInfo.contact.address,
      href: null,
    },
    {
      icon: Clock,
      labelKey: "footer.contact",
      value: companyInfo.contact.hours,
      href: null,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (companyInfo.leadCollectionUrl) {
      try {
        const response = await fetch(companyInfo.leadCollectionUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            submittedAt: new Date().toISOString(),
            location: placeName || companyInfo.contact.address,
          }),
        });
        if (!response.ok) {
          console.error("Failed to submit lead");
        }
      } catch (error) {
        console.error("Error submitting lead:", error);
      }
    }

    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
      setSubmitted(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className={`${theme === "dark" ? "bg-[#1a1815]" : "bg-[#fafafa]"} py-24 overflow-hidden transition-colors`}>
      <div className="max-w-300 mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span className={`text-[11px] font-semibold tracking-[0.12em] uppercase ${
            theme === "dark"
              ? "text-[#9a9a9a] bg-[#2a2a2a] border border-[#404040]"
              : "text-[#777169] bg-[#f0efed] border border-[#e7e5e4]"
          } px-3 py-1.5 rounded-full`}>
            {t("nav.contact", "Contact")}
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2
            suppressHydrationWarning
            className={`text-[clamp(28px,4.5vw,48px)] leading-[1.08] tracking-[-0.02em] ${
              theme === "dark" ? "text-white" : "text-[#0c0a09]"
            } max-w-[18ch]`}
            style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
          >
            {t("contact.title", "Let's Work Together")}
          </h2>
          <p suppressHydrationWarning className={`text-[15px] leading-[1.6] ${
            theme === "dark" ? "text-[#b0b0b0]" : "text-[#777169]"
          } max-w-[38ch] md:text-right`}>
            {t("contact.description", "Have a project in mind? We'd love to help bring it to life.")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* Form */}
        <div suppressHydrationWarning className={`${
            theme === "dark" ? "bg-[#2a2a2a] border-[#404040]" : "bg-white border-[#e7e5e4]"
          } rounded-2xl border p-8`}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-100 gap-4 text-center">
                <div className={`w-12 h-12 rounded-full ${
                  theme === "dark" ? "bg-[#1a3a2a]" : "bg-[#f0faf6]"
                } flex items-center justify-center`}>
                  <CheckCircle2 size={22} className="text-[#16a34a]" strokeWidth={1.8} />
                </div>
                <h3
                  className={`text-[24px] tracking-[-0.01em] ${
                    theme === "dark" ? "text-white" : "text-[#0c0a09]"
                  }`}
                  style={{ fontFamily: "var(--font-garamond)", fontWeight: 400 }}
                >
                  {t("contact.success", "Message received!")}
                </h3>
                <p className={`text-[14px] ${
                  theme === "dark" ? "text-[#9a9a9a]" : "text-[#777169]"
                } max-w-[30ch]`}>
                  {t("contact.successDesc", "Thanks for reaching out. We'll get back to you within 24 hours.")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={`text-[12px] font-medium ${
                      theme === "dark" ? "text-[#b0b0b0]" : "text-[#4e4e4e]"
                    } tracking-[0.02em]`}>
                      {t("contact.name", "Name")} *
                    </label>
                    <Input
                      suppressHydrationWarning
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className={`h-11 rounded-lg ${
                        theme === "dark"
                          ? "border-[#404040] bg-[#1a1a1a] text-white placeholder:text-[#707070]"
                          : "border-[#d6d3d1] bg-[#fafafa] text-[#0c0a09] placeholder:text-[#a8a29e]"
                      } text-[14px] focus-visible:border-[#292524] focus-visible:ring-0 focus-visible:ring-offset-0`}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={`text-[12px] font-medium ${
                      theme === "dark" ? "text-[#b0b0b0]" : "text-[#4e4e4e]"
                    } tracking-[0.02em]`}>
                      {t("contact.email", "Email")} *
                    </label>
                    <Input
                      suppressHydrationWarning
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={`h-11 rounded-lg ${
                        theme === "dark"
                          ? "border-[#404040] bg-[#1a1a1a] text-white placeholder:text-[#707070]"
                          : "border-[#d6d3d1] bg-[#fafafa] text-[#0c0a09] placeholder:text-[#a8a29e]"
                      } text-[14px] focus-visible:border-[#292524] focus-visible:ring-0 focus-visible:ring-offset-0`}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={`text-[12px] font-medium ${
                      theme === "dark" ? "text-[#b0b0b0]" : "text-[#4e4e4e]"
                    } tracking-[0.02em]`}>
                      {t("contact.phone", "Phone")}
                    </label>
                    <Input
                      suppressHydrationWarning
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`h-11 rounded-lg ${
                        theme === "dark"
                          ? "border-[#404040] bg-[#1a1a1a] text-white placeholder:text-[#707070]"
                          : "border-[#d6d3d1] bg-[#fafafa] text-[#0c0a09] placeholder:text-[#a8a29e]"
                      } text-[14px] focus-visible:border-[#292524] focus-visible:ring-0 focus-visible:ring-offset-0`}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className={`text-[12px] font-medium ${
                      theme === "dark" ? "text-[#b0b0b0]" : "text-[#4e4e4e]"
                    } tracking-[0.02em]`}>
                      {t("contact.projectType", "Project Type")}
                    </label>
                    <select
                      suppressHydrationWarning
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={`h-11 rounded-lg text-[14px] px-3 focus:outline-none focus:border-[#292524] transition-colors ${
                        theme === "dark"
                          ? "border-[#404040] bg-[#1a1a1a] text-white"
                          : "border border-[#d6d3d1] bg-[#fafafa] text-[#0c0a09]"
                      }`}
                    >
                      <option value="">{t("contact.selectService", "Select a service")}</option>
                      {companyInfo.serviceTypes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className={`text-[12px] font-medium ${
                    theme === "dark" ? "text-[#b0b0b0]" : "text-[#4e4e4e]"
                  } tracking-[0.02em]`}>
                    {t("contact.message", "Message")} *
                  </label>
                  <Textarea
                    suppressHydrationWarning
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.messagePlaceholder", "Tell us about your project...")}
                    rows={5}
                    className={`rounded-lg ${
                      theme === "dark"
                        ? "border-[#404040] bg-[#1a1a1a] text-white placeholder:text-[#707070]"
                        : "border-[#d6d3d1] bg-[#fafafa] text-[#0c0a09] placeholder:text-[#a8a29e]"
                    } text-[14px] focus-visible:border-[#292524] focus-visible:ring-0 focus-visible:ring-offset-0 resize-none`}
                  />
                </div>
                <Button
                  suppressHydrationWarning
                  type="submit"
                  className={`rounded-full text-white text-[14px] font-medium h-11 px-6 transition-colors duration-200 shadow-none w-fit mt-1 ${
                    theme === "dark"
                      ? "bg-[#4a9d6f] hover:bg-[#3a8d5f]"
                      : "bg-[#292524] hover:bg-[#0c0a09]"
                  }`}
                >
                  {t("contact.send", "Send Message")} <Send size={13} className="ml-2" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-5">
            {/* Orb card */}
            <div className={`relative ${
              theme === "dark" ? "bg-[#1a1815]" : "bg-[#0c0a09]"
            } rounded-2xl overflow-hidden p-8 flex-1`}>
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
                  {t("contact.responseTime", "Response time under 24 hours.")}
                </p>
                <p className="text-[13px] text-[#a8a29e] leading-[1.6]">
                  {t("contact.responseDesc", "We're a small team that moves fast. Expect a personalised response — not a template.")}
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className={`${
              theme === "dark" ? "bg-[#2a2a2a] border-[#404040]" : "bg-white border-[#e7e5e4]"
            } rounded-2xl border p-6 flex flex-col gap-5`}>
              {contactInfo.map(({ icon: Icon, labelKey, value, href }) => (
                <div key={labelKey} className="flex items-start gap-3.5">
                  <div className={`w-8 h-8 rounded-lg ${
                    theme === "dark" ? "bg-[#404040]" : "bg-[#f0efed]"
                  } flex items-center justify-center shrink-0 mt-0.5`}>
                    <Icon size={14} className={theme === "dark" ? "text-[#9a9a9a]" : "text-[#4e4e4e]"} strokeWidth={1.8} />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className={`text-[11px] font-semibold tracking-[0.08em] uppercase ${
                      theme === "dark" ? "text-[#707070]" : "text-[#a8a29e]"
                    }`}>
                      {t(labelKey)}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className={`text-[13px] font-medium transition-colors ${
                          theme === "dark"
                            ? "text-[#b0b0b0] hover:text-white"
                            : "text-[#292524] hover:text-[#0c0a09]"
                        }`}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className={`text-[13px] ${
                        theme === "dark" ? "text-[#9a9a9a]" : "text-[#4e4e4e]"
                      }`}>{value}</span>
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

