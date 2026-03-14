"use client";

import { motion, Variants } from "framer-motion";
import Container from "./Container";
import React from "react";

interface WhyItMattersItem {
  heading: string;
  description: string;
}

interface WhyItMattersSectionProps {
  title: string;
  items: WhyItMattersItem[];
  className?: string;
}

const WhyItMattersSection: React.FC<WhyItMattersSectionProps> = ({
  title,
  items,
  className = "",
}) => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div className={`w-full bg-black ${className}`}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-8">
          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-semibold text-white">
            {title}
          </motion.h2>

          {/* Items List */}
          <div className="space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 md:gap-5">
                {/* Purple Checkmark Circle */}
                <div className="shrink-0 mt-1">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill={`url(#paint0_linear_why_matters_${index})`}
                    />
                    <path
                      d="M17 8L10 15L7 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id={`paint0_linear_why_matters_${index}`}
                        x1="0"
                        y1="12"
                        x2="24"
                        y2="12"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1E72A1" />
                        <stop offset="1" stopColor="#3A9AD4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white/90">
                    {item.heading}
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default WhyItMattersSection;

