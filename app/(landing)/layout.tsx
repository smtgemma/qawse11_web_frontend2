import type React from "react";
import LandingNavbar from "@/components/ui/Navbar";
import LandingFooter from "@/components/ui/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScrollProvider>
      <ScrollToTop />
      <LandingNavbar />
      <main className="overflow-x-hidden min-h-screen">
        {children}
      </main>
      <LandingFooter />
    </SmoothScrollProvider>
  );
}
