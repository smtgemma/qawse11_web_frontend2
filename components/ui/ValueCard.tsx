"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface ValueCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  className?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon: Icon,
  title,
  description,
  className = "",
}) => {
  // Animation variants consistent with home page components
  const cardVariants: Variants = {
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      className={`flex flex-col gap-4 lg:gap-6 ${className}`}>
      {/* Icon - Simple white icon, no background box */}
      <div className="flex items-center justify-start p-4 rounded-full w-fit bg-[#FFFFFF1A]">
        <Icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 md:gap-3">
        <h3 className="text-base md:text-lg lg:text-2xl font-semibold text-white/90">
          {title}
        </h3>
        <p className="text-sm md:text-lg leading-relaxed text-white/90 text-left">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ValueCard;

