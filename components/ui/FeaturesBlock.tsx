"use client";

import { motion, Variants } from "framer-motion";
import Container from "./Container";
import Image from "next/image";
import React from "react";

interface FeatureItem {
  title: string;
  description: string;
}

interface FeaturesBlockProps {
  title: string;
  leftImage: string;
  rightImage: string;
  leftImageAlt: string;
  rightImageAlt: string;
  features: FeatureItem[];
  className?: string;
}

const FeaturesBlock: React.FC<FeaturesBlockProps> = ({
  title,
  leftImage,
  rightImage,
  leftImageAlt,
  rightImageAlt,
  features,
  className = "",
}) => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
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
          className="">
          {/* Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Image */}
            <motion.div
              variants={fadeInLeft}
              className="relative w-full aspect-square max-w-full max-h-[310px]">
              <Image
                src={leftImage}
                alt={leftImageAlt}
                fill
                className="object-cover border rounded-[20px] max-h-[310px]"
                priority
              />
            </motion.div>

            {/* Right Image */}
            <motion.div
              variants={fadeInRight}
              className="relative w-full aspect-square max-w-full max-h-[310px]">
              <Image
                src={rightImage}
                alt={rightImageAlt}
                fill
                className="object-cover border rounded-[20px] max-h-[310px]"
                priority
              />
            </motion.div>
          </div>
          {/* Title */}
          <motion.div variants={fadeInUp} className="w-full">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-2xl font-semibold text-white mt-[48px] mb-[24px]">
              {title}
            </motion.h2>
          </motion.div>

          {/* Features List */}
          <motion.div variants={fadeInUp} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-3 md:gap-4">
                  {/* Purple Checkmark */}
                  <div className="shrink-0 mt-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        width="20"
                        height="20"
                        rx="10"
                        fill="url(#paint0_linear_893_890)"
                      />
                      <path
                        d="M15.3004 6.25825C14.9564 5.91381 14.3978 5.91402 14.0534 6.25825L8.44095 11.8709L5.94648 9.37643C5.60203 9.03198 5.0437 9.03198 4.69925 9.37643C4.35481 9.72087 4.35481 10.2792 4.69925 10.6237L7.81721 13.7416C7.98932 13.9137 8.21501 14 8.44071 14C8.66642 14 8.89232 13.9139 9.06444 13.7416L15.3004 7.50546C15.6448 7.16125 15.6448 6.60267 15.3004 6.25825Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_893_890"
                          x1="0"
                          y1="10"
                          x2="20"
                          y2="10"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1E72A1" />
                          <stop offset="1" stopColor="#3A9AD4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Feature Content */}
                  <div className="flex-1">
                    <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
                      <span className="font-semibold text-white/90">
                        {feature.title}
                      </span>
                      <br />
                      <span className="text-white/90">
                        {feature.description}
                      </span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default FeaturesBlock;
