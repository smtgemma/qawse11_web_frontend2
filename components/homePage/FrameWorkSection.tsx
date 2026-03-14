import { frameWorkData } from "@/constants/mockData";
import Container from "../ui/Container";
import { motion, Variants } from "framer-motion";

export default function FrameWorkSection() {
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
    <Container className="py-12 md:py-20 lg:py-[100px] px-4 md:px-8 lg:px-12">
      <motion.div
        className="space-y-4 flex flex-col justify-center items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={titleVariants}>
        <h1 className="text-2xl md:text-3xl lg:text-[40px] font-semibold leading-[1.3] md:leading-[1.35] lg:leading-[50px] text-white">
          Transforming Industries Through AI
        </h1>
        <p className="text-sm md:text-base lg:text-lg leading-relaxed text-white/70">
          Deep domain expertise across multiple sectors enables us to deliver AI
          solutions that
          <br />
          address industry-specific challenges.
        </p>
      </motion.div>

      <div className="mt-8 md:mt-14 lg:mt-20">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}>
          {frameWorkData.map((solution) => (
            <motion.div
              key={solution.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="relative flex  items-center justify-between gap-2.5 rounded-[20px] p-8 transition-all duration-300 border hover:border-[#6C03FF] bg-[rgba(255,255,255,0.10)]  hover:shadow-[0_4px_40px_0_rgba(106,0,255,0.5)] w-full ">
              {/* Header with title and number */}
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-[22px] font-semibold text-white leading-tight">
                  {solution.title}
                </h3>
                {/* Description */}
                <p className="text-[15px] text-white/60 leading-normal max-w-[250px]">
                  {solution.description}
                </p>
              </div>

              <svg
                className="shrink-0"
                width="80"
                height="60"
                viewBox="0 0 60 40">
                <defs>
                  <linearGradient
                    id={`gradientStroke-${solution.id}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%">
                    <stop offset="0%" stopColor="#6C03FF" />
                    <stop offset="100%" stopColor="#9A3DFF" />
                  </linearGradient>
                </defs>
                <text
                  x="30"
                  y="24"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="38"
                  fontWeight="700"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fill="none"
                  stroke={`url(#gradientStroke-${solution.id})`}
                  strokeWidth="2"
                  strokeLinejoin="round">
                  {solution.id}
                </text>
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
}
