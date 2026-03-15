"use client";

import Container from "./Container";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  badgeText?: string;
  heading: string | React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryButtonOnClick?: () => void;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  badgeText,
  heading,
  description,
  primaryButtonText = "Book Consultation",
  primaryButtonHref = "/book-consultation",
  primaryButtonOnClick,
  secondaryButtonText = "Download AI Roadmap",
  secondaryButtonHref = "/ai-roadmap",
  secondaryButtonOnClick,
  className = "",
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

  return (
    <div
      className={`relative w-full py-12 md:py-16 lg:py-[100px] bg-gradient-to-b from-[#1E72A1]/70 via-[#3A9AD4]/70 to-[#1E72A1]/70 ${className}`}>
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Badge */}
          {badgeText && (
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/30">
                <p className="text-sm md:text-base font-medium text-white">
                  {badgeText}
                </p>
              </div>
            </motion.div>
          )}

          {/* Main Heading */}
          <motion.div variants={fadeInUp}>
            {typeof heading === "string" ? (
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] md:leading-[1.3] text-white whitespace-pre-line max-w-[715px]">
                {heading}
              </h1>
            ) : (
              <div className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.2] md:leading-[1.3] text-white max-w-[715px]">
                {heading}
              </div>
            )}
          </motion.div>

          {/* Description */}
          {description && (
            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base lg:text-lg leading-relaxed text-white/95 max-w-[700px] mx-auto">
              {description}
            </motion.p>
          )}

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center sm:items-center gap-4 md:gap-6 w-full px-4 sm:px-0">
            {/* Primary Button - White background, theme color text */}
            {primaryButtonText && (
              <motion.div className="">
                {primaryButtonHref ? (
                  <a
                    href={primaryButtonHref}
                    className="flex items-center justify-center gap-2 px-6 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold bg-white text-[#1E72A1] border border-[#1E72A1] hover:bg-white/95 transition-all duration-200 w-fit">
                    <motion.span
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center justify-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 2V6M8 2V6"
                        stroke="url(#paint0_linear_1107_654)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
                        stroke="url(#paint1_linear_1107_654)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 10H21"
                        stroke="url(#paint2_linear_1107_654)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 14H16M8 14H8.00898M13 18H8M16 18H15.991"
                        stroke="url(#paint3_linear_1107_654)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1107_654"
                          x1="8"
                          y1="4"
                          x2="16"
                          y2="4"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1E72A1" />
                          <stop offset="1" stopColor="#3A9AD4" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1107_654"
                          x1="3"
                          y1="13"
                          x2="21"
                          y2="13"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1E72A1" />
                          <stop offset="1" stopColor="#3A9AD4" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1107_654"
                          x1="3"
                          y1="10.5"
                          x2="21"
                          y2="10.5"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1E72A1" />
                          <stop offset="1" stopColor="#3A9AD4" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1107_654"
                          x1="8"
                          y1="16"
                          x2="16"
                          y2="16"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1E72A1" />
                          <stop offset="1" stopColor="#3A9AD4" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <span>{primaryButtonText}</span>
                    </motion.span>
                  </a>
                ) : (
                  <motion.button
                    onClick={primaryButtonOnClick}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold bg-white text-[#1E72A1] border border-[#1E72A1] hover:bg-white/95 transition-all duration-200 w-fit">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 2V6M8 2V6"
                        stroke="url(#paint0_linear_1107_654)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
                        stroke="url(#paint1_linear_1107_654)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 10H21"
                        stroke="url(#paint2_linear_1107_654)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 14H16M8 14H8.00898M13 18H8M16 18H15.991"
                        stroke="url(#paint3_linear_1107_654)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1107_654"
                          x1="8"
                          y1="4"
                          x2="16"
                          y2="4"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1E72A1" />
                          <stop offset="1" stopColor="#3A9AD4" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1107_654"
                          x1="3"
                          y1="13"
                          x2="21"
                          y2="13"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1E72A1" />
                          <stop offset="1" stopColor="#3A9AD4" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1107_654"
                          x1="3"
                          y1="10.5"
                          x2="21"
                          y2="10.5"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1E72A1" />
                          <stop offset="1" stopColor="#3A9AD4" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1107_654"
                          x1="8"
                          y1="16"
                          x2="16"
                          y2="16"
                          gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1E72A1" />
                          <stop offset="1" stopColor="#3A9AD4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span>{primaryButtonText}</span>
                  </motion.button>
                )}
              </motion.div>
            )}

            {/* Secondary Button - Purple background, white text */}
            {secondaryButtonText && (
              <motion.div className="">
                {secondaryButtonHref ? (
                  <a
                    href={secondaryButtonHref}
                    className="flex items-center justify-center gap-2 px-6 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold bg-transparent text-white border border-white hover:bg-[#3A9AD4] transition-all duration-200 w-fit">
                    <motion.span
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center justify-center gap-2">
                      <span>{secondaryButtonText}</span>
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </motion.span>
                  </a>
                ) : (
                  <motion.button
                    onClick={secondaryButtonOnClick}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold bg-transparent text-white border border-white hover:bg-[#3A9AD4] transition-all duration-200 w-fit">
                    <span>{secondaryButtonText}</span>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.button>
                )}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default CTASection;
