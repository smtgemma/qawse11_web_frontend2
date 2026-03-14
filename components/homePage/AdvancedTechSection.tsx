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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="190"
              height="13"
              viewBox="0 0 190 13"
              fill="none"
              className="w-[120px] md:w-40 lg:w-[190px]">
              <path
                d="M131.435 1.42943C156.603 1.20471 173.147 0.795807 181.477 0.217955C186.245 -0.116833 189.424 -0.0603571 189.837 0.348955C190.073 0.590873 190.044 0.739583 189.808 0.888632C189.102 1.33578 178.681 2.15519 169.115 2.52781C159.811 2.88324 156.427 2.93997 130.258 3.12571C115.775 3.21973 100.349 3.34902 95.9928 3.42354L88.0461 3.53551L89.0749 4.07742C90.6654 4.93388 93.6687 6.03232 100.467 8.23137C103.97 9.35038 106.943 10.4119 107.091 10.5804C107.562 11.0643 107.091 11.8471 106.267 11.9766C105.854 12.0328 103.264 11.9953 100.467 11.8658C94.6396 11.6032 85.7492 11.715 32.9987 12.7022C24.9342 12.8512 14.1889 12.9817 9.15494 13H0L12.247 11.9576C12.247 11.9576 75.6813 9.85238 94.0509 9.81569L97.7299 9.79553L93.9042 8.54711C91.8138 7.85804 89.488 7.05711 88.7525 6.75901C86.3089 5.7707 82.8944 3.94364 82.5701 3.44146C81.8637 2.4176 82.9831 1.7097 85.0138 1.93327C85.5427 1.98831 91.6961 1.93255 98.6429 1.82019C105.59 1.70783 120.337 1.5223 131.435 1.42943Z"
                fill="url(#paint0_linear_463_6018)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_463_6018"
                  x1="0"
                  y1="6.5"
                  x2="190"
                  y2="6.5"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6C03FF" />
                  <stop offset="1" stopColor="#9A3DFF" />
                </linearGradient>
              </defs>
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
                  <span className="inline-flex items-center justify-center w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-linear-to-r from-[#6C03FF] to-[#9A3DFF] mt-1.5 md:mt-2 shrink-0" />
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
