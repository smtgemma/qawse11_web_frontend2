"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
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

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };
  const router = useRouter();
  return (
    <div className="relative w-full min-h-screen h-screen overflow-hidden">
      {/* Background Video */}
      <motion.video
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover -z-10">
        <source src="/videos/hero-video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Optional Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/70 z-0"
      />

      {/* Hero Content */}
      <Container className="relative z-10 flex flex-col items-center justify-center h-full pt-36 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white text-center mb-8 sm:mb-10 md:mb-12 w-full">
          <motion.h1
            variants={fadeInUp}
            className="text-[28px] leading-[1.2] sm:text-[36px] sm:leading-[1.2] md:text-[44px] md:leading-[1.2] lg:text-[52px] lg:leading-[1.2] xl:text-[56px] font-semibold mb-4 sm:mb-5">
            We Drive Growth Through Data-Driven 
{" "}
            <br className="hidden md:block" />
            Digital Marketing
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-[15px] md:text-base leading-relaxed px-4 sm:px-6 md:px-0">
            Strategic campaigns, measurable results, and scalable growth for ambitious businesses.
          </motion.p>
        </motion.div>

        {/* action button  */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-14 md:mb-16 lg:mb-20 w-full max-w-md sm:max-w-none sm:w-auto px-4 sm:px-0">
          <motion.button
            onClick={() => router.push("/book-consultation")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center px-6 sm:px-4 md:px-6 rounded-lg text-sm md:text-[15px] xl:text-base font-semibold cursor-pointer transition-all duration-200 hover:opacity-90 w-full sm:w-auto min-w-[200px] sm:min-w-[180px] md:min-w-[220px]"
            style={{
              height: "50px",
              gap: "10px",
              background: "linear-gradient(90deg, #1E72A1 0%, #3A9AD4 100%)",
              color: "#FFFFFF",
              border: "none",
            }}>
            <motion.svg
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="sm:w-5 sm:h-5 md:w-6 md:h-6">
              <path
                d="M16 2V6M8 2V6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 14H16M8 14H8.00898M13 18H8M16 18H15.991"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
            <span className="whitespace-nowrap">Book Consultation</span>
          </motion.button>

          <motion.button
            onClick={() => router.push("/case-studies")}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2.5 justify-center px-6 sm:px-4 md:px-6 rounded-lg text-sm md:text-[15px] xl:text-base font-semibold cursor-pointer transition-all duration-200 hover:bg-white/10 w-full sm:w-auto min-w-[200px] sm:min-w-[180px] md:min-w-[220px]"
            style={{
              height: "50px",
              background: "transparent",
              color: "#FFFFFF",
              border: "1px solid #FFFFFF",
            }}>
            <span className="whitespace-nowrap">Explore Solutions</span>
            <motion.svg
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="sm:w-5 sm:h-5 md:w-6 md:h-6">
              <path
                d="M18.5 12H5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white text-center space-y-2.5 sm:space-y-3 md:space-y-4 px-4 sm:px-6 md:px-8 lg:px-0 max-w-4xl">
          <motion.p
            variants={fadeInUp}
            className="text-[15px] sm:text-base md:text-lg font-medium">
            Trusted By Growth-Focused Brands
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-base sm:text-xl md:text-xl font-medium leading-relaxed px-2 sm:px-4 md:px-8 lg:px-12 xl:px-0">
           Partnering with startups, scale-ups, and enterprises to deliver measurable marketing ROI.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base md:text-lg leading-relaxed">
            Driving revenue, engagement, and brand visibility across industries.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-4 items-center justify-items-center w-full mt-6 sm:mt-8 md:mt-10 gap-8 sm:gap-10 md:gap-8 lg:gap-12 max-w-[1000px] px-4 sm:px-6 md:px-8 lg:px-0">
          {[
            { src: "/images/googlepartner.png", alt: "googlepartner" },
            { src: "/images/meta.png", alt: "meta" },
            { src: "/images/Hubspot.png", alt: "hubspot" },
            { src: "/images/shopify.png", alt: "shopify" },
          ].map((logo, i) => (
            <motion.div
              key={logo.alt}
              custom={i}
              variants={logoVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-full">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={160}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
