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
          <svg width="167" height="9" viewBox="0 0 167 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M166.194 2.65106C165.516 1.6684 159.686 1.25465 142.167 0.909859C125.82 0.582305 106.79 -0.365883 73.5414 0.151308C48.1267 0.547821 16.4817 2.13387 16.4817 3.0131C16.4817 3.65097 17.7154 3.66821 29.4975 3.0993C40.3851 2.58211 45.9677 2.46143 52.784 2.32351C25.457 3.66821 19.6277 4.54744 5.06972 5.39218C-4.05984 5.92661 1.27602 7.46094 4.60707 7.30578C4.63792 7.30578 47.1089 5.37494 51.1185 5.47838C51.4886 5.49562 47.4481 5.80593 42.1123 6.16797C27.2151 7.20235 30.0835 8.92615 41.2487 8.13312C78.8156 5.46097 114.162 4.63346 141.396 5.78852C150.001 6.15055 150.958 6.15055 150.958 5.70232C150.958 4.90929 148.613 4.30608 144.943 4.1854C139.206 3.97853 117.123 3.3922 107.13 3.2198C106.358 3.20256 106.729 2.87518 107.407 2.8407C111.478 2.61659 143.802 2.78881 156.509 3.03017C165.855 3.20256 166.533 3.1855 166.194 2.65106Z" fill="#1E72A1"/>
</svg>

        </div>

        <h1 className="text-2xl md:text-3xl lg:text-[40px] font-semibold leading-[1.3] md:leading-[1.35] lg:leading-[50px]">
          Measurable Business Outcomes
        </h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
          Data-driven results that demonstrate the power of strategic digital marketing.
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
