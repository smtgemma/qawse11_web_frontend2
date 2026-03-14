import { industryData } from "@/constants/mockData";
import Container from "../ui/Container";
import { motion, Variants } from "framer-motion";

export default function IndustrySolutions() {
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
            Industry Solutions
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="154"
            height="13"
            viewBox="0 0 154 13"
            fill="none">
            <path
              d="M106.532 1.42943C126.931 1.20471 140.34 0.795807 147.092 0.217955C150.957 -0.116833 153.533 -0.0603571 153.868 0.348955C154.059 0.590873 154.035 0.739583 153.845 0.888632C153.272 1.33578 144.825 2.15519 137.072 2.52781C129.531 2.88324 126.788 2.93997 105.577 3.12571C93.839 3.21973 81.3357 3.34902 77.8047 3.42354L71.3637 3.53551L72.1976 4.07742C73.4867 4.93388 75.921 6.03232 81.4311 8.23137C84.2707 9.35038 86.68 10.4119 86.8004 10.5804C87.1821 11.0643 86.8004 11.8471 86.1324 11.9766C85.7976 12.0328 83.6981 11.9953 81.4311 11.8658C76.7079 11.6032 69.502 11.715 26.7463 12.7022C20.2099 12.8512 11.5005 12.9817 7.42032 13H0L9.92655 11.9576C9.92655 11.9576 61.3417 9.85238 76.2308 9.81569L79.2127 9.79553L76.1118 8.54711C74.4175 7.85804 72.5323 7.05711 71.9363 6.75901C69.9557 5.7707 67.1881 3.94364 66.9253 3.44146C66.3527 2.4176 67.26 1.7097 68.9059 1.93327C69.3346 1.98831 74.3221 1.93255 79.9527 1.82019C85.5832 1.70783 97.5359 1.5223 106.532 1.42943Z"
              fill="url(#paint0_linear_463_6042)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_463_6042"
                x1="0"
                y1="6.5"
                x2="154"
                y2="6.5"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#1E72A1" />
                <stop offset="1" stopColor="#3A9AD4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-[40px] font-semibold leading-[1.3] md:leading-[1.35] lg:leading-[50px]">
          Transforming Industries Through AI
        </h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          Deep domain expertise across multiple sectors enables us to deliver AI
          solutions that
          <br />
          address industry-specific challenges.
        </p>
      </motion.div>

      <div className="mt-8 md:mt-14 lg:mt-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}>
          {industryData.map((solution) => (
            <motion.div
              key={solution.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="flex flex-col items-center justify-center gap-2.5 rounded-[20px] px-8 py-16 transition-all duration-300 border hover:border-[#1E72A1] bg-[rgba(255,255,255,0.10)]  hover:shadow-[0_4px_40px_0_rgba(30,114,161,0.5)] w-full ">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(90deg,#1E72A1_0%,#3A9AD4_100%)]"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}>
                <solution.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-base md:text-lg font-semibold text-white text-center">
                {solution.title}
              </h3>

              <p className="text-xs md:text-sm text-white/80 text-center leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
