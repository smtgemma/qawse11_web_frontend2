"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustedPartnersSection() {
  const logos = [
    { src: "/images/googlepartner.png", alt: "Shopify" },
    { src: "/images/Meta.png", alt: "Meta" },
    { src: "/images/Hubspot.png", alt: "Zapier" },
    { src: "/images/shopify.png", alt: "OpenAI" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
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

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="w-full">
      <div className="">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center">
          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-lg text-white/80 mb-4">
            Trusted By Growth-Focused Brands
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg lg:text-2xl text-white font-medium mb-8">
            Partnering with startups, scale-ups, and enterprises to deliver measurable marketing ROI.
          </motion.p>

          {/* Logos */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-[900px] mx-auto">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.alt}
                variants={logoVariants}
                custom={index}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className="w-24 h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 object-contain filter brightness-0 invert transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

