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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="122"
            height="13"
            viewBox="0 0 122 13"
            fill="none"
            className="w-[100px] md:w-[110px] lg:w-[122px]">
            <path
              d="M84.3952 1.42943C100.556 1.20471 111.178 0.795807 116.528 0.217955C119.589 -0.116833 121.63 -0.0603571 121.895 0.348955C122.047 0.590873 122.028 0.739583 121.877 0.888632C121.423 1.33578 114.732 2.15519 108.589 2.52781C102.616 2.88324 100.443 2.93997 83.6391 3.12571C74.34 3.21973 64.4348 3.34902 61.6375 3.42354L56.5348 3.53551L57.1955 4.07742C58.2167 4.93388 60.1452 6.03232 64.5104 8.23137C66.7599 9.35038 68.6686 10.4119 68.7639 10.5804C69.0664 11.0643 68.7639 11.8471 68.2347 11.9766C67.9695 12.0328 66.3063 11.9953 64.5104 11.8658C60.7686 11.6032 55.06 11.715 21.1886 12.7022C16.0104 12.8512 9.11076 12.9817 5.87843 13H0L7.86389 11.9576C7.86389 11.9576 48.5954 9.85238 60.3906 9.81569L62.7529 9.79553L60.2964 8.54711C58.9541 7.85804 57.4607 7.05711 56.9885 6.75901C55.4194 5.7707 53.2269 3.94364 53.0187 3.44146C52.5651 2.4176 53.2839 1.7097 54.5878 1.93327C54.9274 1.98831 58.8785 1.93255 63.3391 1.82019C67.7997 1.70783 77.2687 1.5223 84.3952 1.42943Z"
              fill="#9A3DFF"
            />
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
              className="flex flex-col items-start gap-2.5 rounded-[20px] md:rounded-[20px] p-6 md:p-8 lg:p-12 transition-all duration-300 bg-[rgba(255,255,255,0.05)] hover:bg-[linear-gradient(90deg,#6C03FF_0%,#9A3DFF_100%)] hover:shadow-[0_4px_40px_rgba(106,0,255,0.6)]">
              <motion.div
                className="mb-4 md:mb-5 lg:mb-6 flex h-12 w-12 md:h-13 md:w-13 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-[linear-gradient(90deg,#6C03FF_0%,#9A3DFF_100%)]"
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
