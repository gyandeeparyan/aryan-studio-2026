import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";
import { I18nProvider } from "@/lib/I18nProvider";
import { companyInfo } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const garamond = EB_Garamond({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata = {
  title: companyInfo.seo.title,
  description: companyInfo.seo.description,
  keywords: companyInfo.seo.keywords,
  metadataBase: new URL("https://aryanstudio.in"),
  openGraph: {
    title: companyInfo.seo.title,
    description: companyInfo.seo.description,
    url: "https://aryanstudio.in",
    siteName: "Aryan Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: companyInfo.seo.title,
    description: companyInfo.seo.description,
  },
  robots: "index, follow",
  canonical: "https://aryanstudio.in",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${garamond.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f5f5f5" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0c0a09" media="(prefers-color-scheme: dark)" />
        <link rel="canonical" href="https://aryanstudio.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aryan Studio",
              url: "https://aryanstudio.in",
              description: companyInfo.seo.description,
              contactPoint: {
                "@type": "ContactPoint",
                telephone: companyInfo.contact.phone,
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full bg-white dark:bg-[#0c0a09] text-[#0c0a09] dark:text-white transition-colors">
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
