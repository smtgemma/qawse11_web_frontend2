"use client";

import Container from "@/components/ui/Container";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const AdvancedTechSection = () => {
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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const advantages = [
    "Multi-channel attribution tracking across all touchpoints",
    "AI-powered bid optimization and audience targeting",
    "Real-time dashboards with actionable insights",
    "Conversion rate optimization through continuous A/B testing",
  ];

  return (
    <Container className="py-12 md:py-20 lg:py-[100px] ">
      <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-12 xl:gap-16">
        {/* Left side content */}
        <motion.div
          className="space-y-5 md:space-y-7 w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}>
          {/* Badge with underline */}
          <motion.div variants={fadeInUp} className="flex flex-col">
            <p className="text-sm md:text-base lg:text-lg font-medium mb-1">
              Advanced Technology
            </p>
            <svg width="190" height="9" viewBox="0 0 190 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M189.926 2.65106C189.15 1.6684 182.488 1.25465 162.468 0.909859C143.787 0.582305 122.039 -0.365883 84.0427 0.151308C54.9989 0.547821 18.8352 2.13387 18.8352 3.0131C18.8352 3.65097 20.2451 3.66821 33.7095 3.0993C46.1518 2.58211 52.5316 2.46143 60.3213 2.32351C29.0921 3.66821 22.4304 4.54744 5.79365 5.39218C-4.63956 5.92661 1.45823 7.46094 5.26494 7.30578C5.30019 7.30578 53.8358 5.37494 58.4179 5.47838C58.8409 5.49562 54.2235 5.80593 48.1257 6.16797C31.1012 7.20235 34.3792 8.92615 47.1388 8.13312C90.07 5.46097 130.463 4.63346 161.587 5.78852C171.421 6.15055 172.514 6.15055 172.514 5.70232C172.514 4.90929 169.835 4.30608 165.64 4.1854C159.084 3.97853 133.847 3.3922 122.427 3.2198C121.546 3.20256 121.969 2.87518 122.744 2.8407C127.397 2.61659 164.336 2.78881 178.858 3.03017C189.538 3.20256 190.313 3.1855 189.926 2.65106Z" fill="#1E72A1"/>
</svg>


          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-[40px] font-semibold leading-[1.3] md:leading-[1.35] lg:leading-[50px]">
            Powered by Data, Driven by Results
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base lg:text-lg leading-relaxed text-white/80">
            Our marketing stack combines enterprise-grade analytics, AI-powered optimization, and real-time reporting to maximize your ROI.
          </motion.p>

          {/* Core Advantages */}
          <motion.div
            variants={fadeInUp}
            className="space-y-3 md:space-y-4 pt-1 md:pt-2">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">
              Core Advantages
            </h3>

            <ul className="space-y-2.5 md:space-y-3">
              {advantages.map((advantage, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={listItemVariants}
                  className="flex items-start gap-2.5 md:gap-3 text-sm md:text-base lg:text-lg leading-relaxed">
                  <span className="inline-flex items-center justify-center w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-linear-to-r from-[#1E72A1] to-[#3A9AD4] mt-1.5 md:mt-2 shrink-0" />
                  <span className="text-white/80">{advantage}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Right side content - Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
          className="w-full lg:w-1/2 flex items-center justify-center mt-4 md:mt-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[550px]">
            <Image
              src="/images/brain.png"
              alt="Advanced Technology Architecture"
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default AdvancedTechSection;
