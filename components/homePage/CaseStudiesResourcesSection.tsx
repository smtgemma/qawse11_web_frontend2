import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import { motion, Variants } from "framer-motion";
import { caseData } from "@/constants/mockData";
import { useRouter } from "next/navigation";

export default function CaseStudiesResourcesSection() {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardHoverVariants: Variants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const imageVariants: Variants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const arrowVariants: Variants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
  const router = useRouter();
  return (
    <Container className="py-12 md:py-20 lg:py-[100px] px-4 md:px-8">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-16">
        {/* Title and Description */}
        <motion.div variants={headerVariants} className="space-y-4 max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-[40px] font-semibold leading-[1.3] md:leading-[1.35] lg:leading-[50px]">
           Case Studies & Success Stories
          </h1>
          <p className="text-sm md:text-base lg:text-md leading-relaxed">
           Real results from real campaigns. See how we’ve helped businesses like yours grow.
          </p>
        </motion.div>

        {/* Button */}
        <motion.button
          onClick={() => router.push("/case-studies")}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center gap-2.5 justify-center px-8 py-3 rounded-lg text-base font-medium cursor-pointer transition-all duration-300 hover:bg-white/5 w-full lg:w-auto min-w-[220px] shrink-0 border border-white"
          style={{
            background: "transparent",
            color: "#FFFFFF",
          }}>
          <span className="whitespace-nowrap">View All Case Studies</span>
          <motion.div variants={arrowVariants}>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseData.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="group bg-[rgba(255,255,255,0.10)] rounded-[20px]">
              <motion.div
                variants={cardHoverVariants}
                className="rounded-[20px] overflow-hidden border transition-all  duration-300 h-full hover:border-[#1E72A1] bg-[rgba(255,255,255,0.10)]  hover:shadow-[0_4px_40px_0_rgba(30,114,161,0.5)]"
                style={{
                  background: "rgba(20, 20, 30, 0.6)",
                  backdropFilter: "blur(10px)",
                }}>
                {/* Image with Background */}
                <motion.div
                  variants={imageVariants}
                  className="relative flex flex-col items-start gap-3 self-stretch rounded-[20px] overflow-hidden"
                  style={{
                    height: "244px",
                    padding: "32px 32px 40px 32px",
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#FFF",
                  }}
                />

                {/* Content Below Image */}
                <div className="p-8 space-y-3">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="text-xl font-semibold text-white group-hover:text-[#3A9AD4] transition-colors duration-300">
                    {card.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="text-white/60 text-base leading-relaxed">
                    {card.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
}
