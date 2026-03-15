"use client";

import { motion, Variants } from "framer-motion";
import Container from "./Container";
import React from "react";

interface ValuePropositionItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  heading: string;
  description: string;
}

interface ValuePropositionSectionProps {
  smallText?: string;
  items: ValuePropositionItem[];
  className?: string;
}

const ValuePropositionSection: React.FC<ValuePropositionSectionProps> = ({
  smallText = "Value Proposition Sections",
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
    <div className={`w-full ${className}`}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-8">
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="">
            <p className="text-2xl font-semibold text-white">
              {smallText}
            </p>

          </motion.div>

          {/* Value Proposition Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex flex-col items-start text-left">
              {/* Icon Circle */}
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#8B3DFF] to-[#7D2FFF] flex items-center justify-center mb-4 md:mb-5">
                <item.icon className="w-4 h-4 text-white" />
              </div>

              {/* Heading */}
              <h3 className="text-lg font-semibold text-white mb-2 md:mb-3">
                {item.heading}
              </h3>

              {/* Description */}
              <p className="text-lg text-white/90 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ValuePropositionSection;