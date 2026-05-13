import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeProvider";
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${garamond.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-white dark:bg-[#0c0a09] text-[#0c0a09] dark:text-white transition-colors">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
