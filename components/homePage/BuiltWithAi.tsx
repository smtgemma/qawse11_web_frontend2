import Container from "@/components/ui/Container";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function BuiltWithAi() {
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

  return (
    <Container className="py-12 md:py-20 lg:py-[100px] ">
      <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-12 xl:gap-16">
        {/* Left side content */}
        <motion.div
          className="space-y-5  w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}>
          {/* Main heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl lg:text-[40px] font-semibold leading-[1.3] md:leading-[1.35] lg:leading-[50px]">
            Built with Advanced AI
            <br />
            Engineering
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base lg:text-lg leading-relaxed text-white/80">
            Our solutions combine cutting-edge AI models, secure architectures,
            and scalable cloud infrastructure.
          </motion.p>
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
            className="relative w-full max-w-[400px] md:max-w-[500px] ">
            <Image
              src="/images/built-with-ai.svg"
              alt="Advanced Technology Architecture"
              width={550}
              height={550}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
}
