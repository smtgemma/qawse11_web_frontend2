"use client";

import Container from "@/components/ui/Container";
import { solutionData } from "@/constants/mockData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const OurSolutionSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <Container className="py-12 md:py-20 lg:py-[100px]">
      <motion.div
        className="space-y-4 md:space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}>
        <div className="flex flex-col">
          <p className="text-sm md:text-base lg:text-lg font-medium -mb-1">
           Our Services
          </p>
          <svg width="115" height="9" viewBox="0 0 115 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M114.319 2.65106C113.852 1.6684 109.842 1.25465 97.7914 0.909859C86.5471 0.582305 73.4569 -0.365883 50.5863 0.151308C33.1045 0.547821 11.3371 2.13387 11.3371 3.0131C11.3371 3.65097 12.1857 3.66821 20.2902 3.0993C27.7793 2.58211 31.6194 2.46143 36.3081 2.32351C17.5109 3.66821 13.5011 4.54744 3.48727 5.39218C-2.79261 5.92661 0.877726 7.46094 3.16903 7.30578C3.19025 7.30578 32.4044 5.37494 35.1624 5.47838C35.417 5.49562 32.6378 5.80593 28.9674 6.16797C18.7202 7.20235 20.6933 8.92615 28.3734 8.13312C54.2142 5.46097 78.5275 4.63346 97.2611 5.78852C103.18 6.15055 103.838 6.15055 103.838 5.70232C103.838 4.90929 102.226 4.30608 99.7009 4.1854C95.7547 3.97853 80.5642 3.3922 73.6903 3.2198C73.1599 3.20256 73.4145 2.87518 73.8812 2.8407C76.6817 2.61659 98.9159 2.78881 107.657 3.03017C114.085 3.20256 114.552 3.1855 114.319 2.65106Z" fill="#1E72A1"/>
</svg>

        </div>

        <h1 className="text-2xl md:text-3xl lg:text-[40px] font-semibold leading-[1.3] md:leading-[1.35] lg:leading-[50px]">
          Full-Stack Digital Marketing Built for Growth
        </h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
         From strategy to execution, we deliver campaigns that convert clicks into customers and data into decisions.
        </p>
      </motion.div>

      <div className="mt-8 md:mt-14 lg:mt-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}>
          {solutionData.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="flex flex-col items-start gap-2.5 rounded-[20px] md:rounded-[20px] p-6 md:p-8 lg:p-12 transition-all duration-300 bg-[rgba(255,255,255,0.05)] hover:bg-[linear-gradient(90deg,#1E72A1_0%,#3A9AD4_100%)] hover:shadow-[0_4px_40px_rgba(30,114,161,0.6)]">
              <motion.div
                className="mb-4 md:mb-5 lg:mb-6 flex h-12 w-12 md:h-13 md:w-13 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[linear-gradient(90deg,#1E72A1_0%,#3A9AD4_100%)]"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}>
                <solution.icon
                  className="w-6 h-6 md:w-6.5 md:h-6.5 lg:w-7 lg:h-7 text-white!"
                  fill="#ffffff!"
                />
              </motion.div>

              <h3 className="mb-3 md:mb-3.5 lg:mb-4 text-base md:text-lg font-semibold text-white">
                {solution.title}
              </h3>

              <ul className="mb-5 md:mb-6 lg:mb-8 space-y-1.5 md:space-y-2">
                {solution.features.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: i * 0.1, duration: 0.4 },
                    }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 md:gap-2.5 lg:gap-3 text-xs md:text-sm text-white/80">
                    <span className="mt-1 md:mt-1.5 h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href={solution.link}
                  className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default OurSolutionSection;
