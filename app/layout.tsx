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
  metadataBase: new URL("https://www.dima360ai.com"),
  title: {
    template: "%s | DIMA360AI",
    default: "DIMA360AI – Enterprise AI Solutions, Agents & Automation",
  },
  description:
    "DIMA360AI delivers enterprise-grade AI solutions including AI agents, intelligent automation, RAG systems, data analytics, and custom AI engineering.",
  applicationName: "DIMA360AI",
  category: "Technology",
  keywords: [
    "enterprise AI solutions",
    "AI agents",
    "AI automation",
    "RAG systems",
    "custom AI development",
    "AI engineering services",
  ],
  authors: [{ name: "DIMA360AI Team" }],
  creator: "DIMA360AI",
  publisher: "DIMA360AI",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DIMA360AI – Enterprise AI Solutions Built for Scale",
    description:
      "Design, deploy, and scale enterprise-ready AI with DIMA360AI. AI agents, automation, and RAG systems.",
    url: "/",
    siteName: "DIMA360AI",
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
    title: "DIMA360AI – Enterprise AI Solutions & Automation",
    description:
      "Enterprise AI solutions including AI agents and scalable AI systems.",
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
