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
          <svg
            width="92"
            height="13"
            viewBox="0 0 92 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[70px] md:w-[80px] lg:w-[92px]">
            <path
              d="M63.6423 1.42943C75.8288 1.20471 83.8395 0.795807 87.8733 0.217955C90.1819 -0.116833 91.7212 -0.0603571 91.9212 0.348955C92.0352 0.590873 92.0212 0.739583 91.9071 0.888632C91.5651 1.33578 86.5191 2.15519 81.887 2.52781C77.3822 2.88324 75.7438 2.93997 63.0721 3.12571C56.0596 3.21973 48.5902 3.34902 46.4807 3.42354L42.6328 3.53551L43.131 4.07742C43.9011 4.93388 45.3554 6.03232 48.6472 8.23137C50.3435 9.35038 51.7829 10.4119 51.8548 10.5804C52.0828 11.0643 51.8548 11.8471 51.4557 11.9766C51.2557 12.0328 50.0014 11.9953 48.6472 11.8658C45.8255 11.6032 41.5207 11.715 15.9783 12.7022C12.0734 12.8512 6.87041 12.9817 4.43292 13H0L5.93015 11.9576C5.93015 11.9576 36.6457 9.85238 45.5405 9.81569L47.3219 9.79553L45.4694 8.54711C44.4572 7.85804 43.331 7.05711 42.9749 6.75901C41.7917 5.7707 40.1383 3.94364 39.9813 3.44146C39.6393 2.4176 40.1813 1.7097 41.1646 1.93327C41.4207 1.98831 44.4002 1.93255 47.7639 1.82019C51.1277 1.70783 58.2682 1.5223 63.6423 1.42943Z"
              fill="url(#paint0_linear_why_choose)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_why_choose"
                x1="0"
                y1="6.5"
                x2="92"
                y2="6.5"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#1E72A1" />
                <stop offset="1" stopColor="#3A9AD4" />
              </linearGradient>
            </defs>
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

