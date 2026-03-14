"use client";

import Container from "./Container";
import IconCard from "./IconCard";
import { motion, Variants } from "framer-motion";
import React from "react";

interface FeatureData {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

interface WhyChooseUsSectionProps {
  smallText: string;
  heading: string;
  features: FeatureData[];
  className?: string;
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  smallText,
  heading,
  features,
  className = "",
}) => {
  // Animation variants consistent with home page components
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
    <Container className={`lg:py-[50px] py-[30px] ${className}`}>
      <motion.div
        className="space-y-5 md:space-y-7 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}>
        {/* Section heading with SVG underline - Centered */}
        <motion.div variants={fadeInUp} className="flex flex-col items-center text-center">
          <p className="text-sm md:text-base lg:text-lg font-medium mb-1">
            {smallText}
          </p>
          <svg width="115" height="9" viewBox="0 0 115 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M114.319 2.65106C113.852 1.6684 109.842 1.25465 97.7914 0.909859C86.5471 0.582305 73.4569 -0.365883 50.5863 0.151308C33.1045 0.547821 11.3371 2.13387 11.3371 3.0131C11.3371 3.65097 12.1857 3.66821 20.2902 3.0993C27.7793 2.58211 31.6194 2.46143 36.3081 2.32351C17.5109 3.66821 13.5011 4.54744 3.48727 5.39218C-2.79261 5.92661 0.877726 7.46094 3.16903 7.30578C3.19025 7.30578 32.4044 5.37494 35.1624 5.47838C35.417 5.49562 32.6378 5.80593 28.9674 6.16797C18.7202 7.20235 20.6933 8.92615 28.3734 8.13312C54.2142 5.46097 78.5275 4.63346 97.2611 5.78852C103.18 6.15055 103.838 6.15055 103.838 5.70232C103.838 4.90929 102.226 4.30608 99.7009 4.1854C95.7547 3.97853 80.5642 3.3922 73.6903 3.2198C73.1599 3.20256 73.4145 2.87518 73.8812 2.8407C76.6817 2.61659 98.9159 2.78881 107.657 3.03017C114.085 3.20256 114.552 3.1855 114.319 2.65106Z" fill="#1E72A1"/>
</svg>

        </motion.div>

        {/* Main heading - Centered */}
        <motion.h2
          variants={fadeInUp}
          className="text-2xl md:text-[28px] font-semibold leading-[1.3] md:leading-[1.35] lg:leading-[150%] text-center max-w-4xl mx-auto">
          {heading}
        </motion.h2>

        {/* Features Grid */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 w-full mt-8 md:mt-12">
          {features.map((feature, index) => (
            <IconCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default WhyChooseUsSection;

