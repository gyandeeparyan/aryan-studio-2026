import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

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
  title: "Aryan Studio | Web Development Services in Patna",
  description:
    "Aryan Studio is Patna's premier freelance web development agency. We craft modern, high-performance websites and web apps that drive real results for your business.",
  keywords: "web development Patna, website design Bihar, freelance agency Patna, Aryan Studio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${garamond.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
