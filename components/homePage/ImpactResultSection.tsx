import { impactData } from "@/constants/mockData";
import Container from "../ui/Container";
import { motion, Variants } from "framer-motion";

export default function ImpactResultSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Container className="py-12 md:py-20 lg:py-[100px]">
      <motion.div
        className="space-y-4 md:space-y-6 flex flex-col justify-center items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}>
        <div className="flex flex-col">
          <p className="text-sm md:text-base lg:text-lg font-medium -mb-1">
            Impact & Results
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="142"
            height="13"
            viewBox="0 0 142 13"
            fill="none">
            <path
              d="M98.2304 1.42943C117.04 1.20471 129.404 0.795807 135.631 0.217955C139.194 -0.116833 141.57 -0.0603571 141.878 0.348955C142.054 0.590873 142.033 0.739583 141.857 0.888632C141.329 1.33578 133.54 2.15519 126.391 2.52781C119.438 2.88324 116.909 2.93997 97.3505 3.12571C86.5268 3.21973 74.9979 3.34902 71.742 3.42354L65.8028 3.53551L66.5718 4.07742C67.7604 4.93388 70.005 6.03232 75.0859 8.23137C77.7041 9.35038 79.9257 10.4119 80.0367 10.5804C80.3887 11.0643 80.0367 11.8471 79.4207 11.9766C79.1121 12.0328 77.1761 11.9953 75.0859 11.8658C70.7307 11.6032 64.0862 11.715 24.6622 12.7022C18.6351 12.8512 10.6043 12.9817 6.84211 13H0L9.15305 11.9576C9.15305 11.9576 56.5618 9.85238 70.2907 9.81569L73.0403 9.79553L70.181 8.54711C68.6188 7.85804 66.8805 7.05711 66.3308 6.75901C64.5046 5.7707 61.9526 3.94364 61.7103 3.44146C61.1823 2.4176 62.019 1.7097 63.5366 1.93327C63.9319 1.98831 68.5308 1.93255 73.7226 1.82019C78.9144 1.70783 89.9357 1.5223 98.2304 1.42943Z"
              fill="url(#paint0_linear_463_6231)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_463_6231"
                x1="0"
                y1="6.5"
                x2="142"
                y2="6.5"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#1E72A1" />
                <stop offset="1" stopColor="#3A9AD4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-[40px] font-semibold leading-[1.3] md:leading-[1.35] lg:leading-[50px]">
          Measurable Business Outcomes
        </h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          Data-driven results that demonstrate the transformative power of
          enterprise AI implementation.
        </p>
      </motion.div>

      <div className="mt-8 md:mt-14 lg:mt-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}>
          {impactData.map((solution) => (
            <motion.div
              key={solution.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="flex flex-col items-start text-left justify-center gap-2.5 rounded-[20px] px-8 py-16 transition-all duration-300 border hover:border-[#1E72A1] bg-[rgba(255,255,255,0.10)]  hover:shadow-[0_4px_40px_0_rgba(30,114,161,0.5)] w-full">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}>
                <solution.icon className="w-12 h-12 text-white" />
              </motion.div>
              <div className="">
                <h3 className="text-lg md:text-2xl font-bold text-white ">
                  {solution.value}
                </h3>
                <h3 className="text-base md:text-lg font-semibold text-white ">
                  {solution.title}
                </h3>
              </div>

              <p className="text-xs md:text-sm text-white/80 leading-relaxed max-w-[300px]">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
