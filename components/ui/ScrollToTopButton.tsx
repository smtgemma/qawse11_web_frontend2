"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "./SmoothScrollProvider";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      setIsVisible(window.scrollY > 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (lenis) {
      // Simple scroll to top without extra options
      lenis.scrollTo(0, { immediate: false });
    } else if (typeof window !== "undefined") {
      // Fallback if Lenis is not available
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 40 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
            transition: { duration: 0.25 },
          }}
          whileHover={{
            scale: 1.08,
            y: -3,
            boxShadow: "0 12px 30px rgba(0,0,0,0.55)",
          }}
          whileTap={{ scale: 0.95, y: 0 }}
          className="fixed bottom-6 right-6 z-50">
          <button
            type="button"
            onClick={handleClick}
            aria-label="Scroll to top"
            className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-linear-to-r from-[#1E72A1] via-[#3A9AD4] to-[#1E72A1] text-white shadow-[0_6px_18px_rgba(0,0,0,0.35)] backdrop-blur-sm overflow-hidden group">
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}>
              <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
            </motion.span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


