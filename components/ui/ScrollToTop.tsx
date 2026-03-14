"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "./SmoothScrollProvider";

export default function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: false });
    } else if (typeof window !== "undefined") {
      // Fallback if Lenis is not available
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, lenis]);

  return null;
}


