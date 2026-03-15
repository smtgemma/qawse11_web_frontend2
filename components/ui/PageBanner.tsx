"use client";

import { motion, Variants } from "framer-motion";
import Container from "./Container";

interface PageBannerProps {
  buttonText?: string;
  heading: string | React.ReactNode;
  subheading?: string;
  onButtonClick?: () => void;
  buttonHref?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({
  buttonText,
  heading,
  subheading,
  onButtonClick,
  buttonHref,
}) => {
  // Animation variants consistent with home page components
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div className="relative">
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-[16px] p-10 lg:p-20 lg:py-[100px]"
          style={{
            background:
              "linear-gradient(90deg, #1E72A1 0%, #3A9AD4 100%)",
          }}>
          {/* Button - Top Center */}
          {buttonText && (
            <motion.div
              variants={buttonVariants}
              className="flex justify-center mb-8 relative">
              {buttonHref ? (
                <a
                  href={buttonHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm md:text-base text-white border border-white/90 hover:border-white transition-all duration-200 font-semibold">
                  {buttonText}
                  <svg 
                    width="62" 
                    height="17" 
                    viewBox="0 0 62 17" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-[50px] md:w-[56px] h-auto"
                  >
                    <path 
                      d="M0.500044 16.3728C0.938605 8.65403 13.6538 -4.87481 61.0059 2.76014C51.1744 2.78995 14.9711 -1.07547 12.547 11.7839" 
                      stroke="white" 
                      strokeOpacity="0.9" 
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onButtonClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm md:text-base text-white border border-white/90 hover:border-white transition-all duration-200 font-semibold relative">
                  {buttonText}
                  <svg 
                    width="62" 
                    height="17" 
                    viewBox="0 0 62 17" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-[50px] md:w-[56px] h-auto absolute right-0 bottom-0"
                  >
                    <path 
                      d="M0.500044 16.3728C0.938605 8.65403 13.6538 -4.87481 61.0059 2.76014C51.1744 2.78995 14.9711 -1.07547 12.547 11.7839" 
                      stroke="white" 
                      strokeOpacity="0.9" 
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </motion.div>
          )}

          {/* Main Content */}
          <div className="text-white text-center space-y-4 md:space-y-8">
            {/* Heading */}
            <motion.div variants={fadeInUp}>
              {typeof heading === "string" ? (
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-[1.2] md:leading-[1.3] whitespace-pre-line">
                  {heading}
                </h1>
              ) : (
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-[1.2] md:leading-[1.3]">
                  {heading}
                </div>
              )}
            </motion.div>

            {/* Subheading */}
            {subheading && (
              <motion.p
                variants={fadeInUp}
                className="text-sm md:text-base lg:text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
                {subheading}
              </motion.p>
            )}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default PageBanner;