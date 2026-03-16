import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./landing.css";
import ReduxProvider from "@/providers/ReduxProvider";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dima360marketing.com"),
  title: {
    template: "%s | DIMA360MARKETING",
    default: "DIMA360MARKETING – Performance Marketing & Growth Partner",
  },
  description:
    "DIMA360MARKETING helps brands scale with performance-driven digital marketing across paid ads, SEO, social, content, email, and analytics.",
  applicationName: "DIMA360MARKETING",
  category: "Marketing",
  keywords: [
    "performance marketing agency",
    "digital marketing",
    "paid advertising",
    "seo services",
    "social media marketing",
    "content marketing",
    "email marketing",
    "analytics and reporting",
  ],
  authors: [{ name: "DIMA360MARKETING Team" }],
  creator: "DIMA360MARKETING",
  publisher: "DIMA360MARKETING",
  icons: {
    icon: [{ url: "/images/logo.png", type: "image/png" }],
    shortcut: "/images/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DIMA360MARKETING – Performance Marketing Built To Scale",
    description:
      "DIMA360MARKETING drives measurable growth with paid advertising, SEO, social media, content, email marketing, and analytics.",
    url: "/",
    siteName: "DIMA360MARKETING",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DIMA360AI Enterprise AI Solutions Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DIMA360MARKETING – Performance Marketing & Growth Partner",
    description:
      "Performance-focused digital marketing across paid ads, SEO, social, content, email, and analytics.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ReduxProvider>{children}</ReduxProvider>
        <Toaster richColors={true} position="top-right" />
      </body>
    </html>
  );
}
