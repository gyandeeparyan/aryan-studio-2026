/**
 * Centralized configuration for Aryan Studio
 * Edit this file to update company info, contact details, and content across the entire site
 */

export const companyInfo = {
  name: "Aryan Studio",
  description:
    "Aryan Studio is Patna's premier web development agency. We craft modern, high-performance websites and AI-powered web apps that drive real results for your business.",
  tagline: "Web Development & AI Solutions, Reimagined",

  // Contact Information
  contact: {
    phone: "+91 9341714565",
    phoneLink: "tel:+919341714565",
    whatsapp: "919341714565", // Without + sign for WhatsApp API
    email: "hello@aryanstudio.in",
    emailLink: "mailto:hello@aryanstudio.in",
    address: "Patna, Bihar",
    fullAddress: "Boring Road, Patna, Bihar 800001",
    hours: "Mon–Sat, 10 AM – 7 PM IST",
  },

  // Lead Collection URL - Update with your actual URL
  leadCollectionUrl: "https://forms.aryanstudio.in/leads",

  // Social Links
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    github: "https://github.com",
  },

  // SEO & Metadata - Optimized for Google Discovery
  seo: {
    title: "Aryan Studio | Web Development & AI-Powered Apps in Patna",
    description:
      "Aryan Studio creates fast, modern websites and AI-powered web applications in Patna. Expert web developers building responsive design, e-commerce stores, and custom applications with AI models integrated. Get a free quote today.",
    keywords: "web development Patna, website design Bihar, AI web apps, web application development, freelance web developer, e-commerce website, responsive design, React developer Patna, Next.js development, custom web development",
    author: "Aryan Studio",
    ogImage: "https://aryanstudio.in/og-image.png",
  },

  // Service Types
  serviceTypes: [
    "Landing Page",
    "Business Website",
    "E-commerce Store",
    "Web Application",
    "AI-Powered Application",
    "SEO & Performance",
    "Other",
  ],

  // Statistics & Metrics (Hero Section)
  stats: [
    {
      value: "10+",
      label: "Projects Delivered",
    },
    {
      value: "3+",
      label: "Years of Excellence",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
    },
    {
      value: "₹8K+",
      label: "Starting Price",
    },
  ],

  // Statistics & Metrics (About Section)
  aboutStats: [
    {
      num: "50+",
      label: "Projects Completed",
    },
    {
      num: "3+",
      label: "Years in Business",
    },
    {
      num: "20+",
      label: "Happy Clients",
    },
    {
      num: "4.9★",
      label: "Average Rating",
    },
  ],

  // Call-to-Action Texts
  cta: {
    primary: "Get Started Today",
    secondary: "Book a Free Consultation",
    contactUs: "Contact Us",
    viewPortfolio: "View Our Work",
  },

  // Geolocation settings
  geolocation: {
    enabled: true,
    showDistance: true,
  },
};

export default companyInfo;
