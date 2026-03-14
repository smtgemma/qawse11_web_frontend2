"use client";

import Container from "@/components/ui/Container";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { User, Calendar, MapPin, Check } from "lucide-react";
import Link from "next/link";
import { caseStudyData } from "../caseStudyData";

interface CaseStudyDetailContentProps {
  caseStudy: {
    title: string;
    image: string;
    description: string | string[];
    projectInfo?: {
      client: string;
      date: string;
      location: string;
    };
    overview?: string;
    features?: string[];
    content: {
      challenge: string | string[];
      solution: string;
      results: string[];
    };
  };
  slug: string;
}

export default function CaseStudyDetailContent({
  caseStudy,
  slug,
}: CaseStudyDetailContentProps) {
  // Get all case study slugs for navigation
  const allSlugs = Object.keys(caseStudyData);
  const currentIndex = allSlugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug =
    currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  // Get features section title based on slug
  const getFeaturesTitle = () => {
    switch (slug) {
      case "ai-workflow-automation":
        return "";
      case "ai-support-agent":
        return "";
      case "predictive-sales-engine":
        return "How It Works";
      case "ai-integration":
        return "Data Analytics Automation";
      case "enterprise-workflow-automation":
        return "Key Features";
      default:
        return "AI Capabilities Implemented";
    }
  };

  // Get outcome section title based on slug
  const getOutcomeTitle = () => {
    switch (slug) {
      case "ai-integration":
        return "Outcome Clear & Scannable";
      case "ai-agents":
        return "Outcome — Clear & Scannable";
      case "predictive-sales-engine":
        return "Outcome";
      default:
        return "Outcome — Clear & Scannable";
    }
  };

  // Improved animation variants with scroll-based triggers
  const fadeInUp: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInLeft: Variants = {
    hidden: { 
      opacity: 0, 
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: { 
      opacity: 0, 
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scaleIn: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <>
      {/* Content Section */}
      <div className="bg-black text-white lg:mt-[100px] md:mt-[80px] mt-[60px] overflow-hidden">
        <Container className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={scaleIn}
                className="relative w-full h-[250px] sm:h-[300px] md:h-[365px] rounded-[12px] md:rounded-[20px] overflow-hidden shadow-2xl">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                className="text-xl sm:text-2xl font-semibold text-white mt-6 mb-4 md:my-6">
                {caseStudy.title.replace(" Case Study", "")}
              </motion.h1>

              {/* Description Text */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className="space-y-4 md:space-y-6 mb-10 md:mb-14">
                {Array.isArray(caseStudy.description) ? (
                  caseStudy.description.map((paragraph, index) => (
                    <motion.p 
                      key={index}
                      variants={fadeInUp} 
                      className="text-sm md:text-base text-white/90 leading-relaxed">
                      {paragraph}
                    </motion.p>
                  ))
                ) : (
                  <motion.p variants={fadeInUp} className="text-sm md:text-base text-white/90 leading-relaxed">
                    {caseStudy.description}
                  </motion.p>
                )}
              </motion.div>

              {/* The Challenge Section */}
              {Array.isArray(caseStudy.content.challenge) && caseStudy.content.challenge.length > 0 && (
                <motion.section 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  className="space-y-3 md:space-y-4 mt-10 md:mt-14 mb-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    The Challenge
                  </h2>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {caseStudy.content.challenge.map((challenge, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-3 text-sm md:text-base text-white">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-[#1E72A1] to-[#3A9AD4] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                        <span className="leading-snug">{challenge}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.section>
              )}

              {/* The Solution Section */}
              {caseStudy.content.solution && Array.isArray(caseStudy.content.challenge) && (
                <motion.section 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  className="space-y-3 md:space-y-4 mt-10 md:mt-14 mb-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    The Solution
                  </h2>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {caseStudy.content.solution}
                  </p>
                </motion.section>
              )}

              {/* Features Grid */}
              {caseStudy.features && (
                <motion.section 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  className="space-y-3 md:space-y-4 mt-10 md:mt-14 mb-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    {getFeaturesTitle()}
                  </h2>
                  {slug === "enterprise-workflow-automation" ? (
                    <motion.ul 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={staggerContainer}
                      className="space-y-2 md:space-y-3">
                      {caseStudy.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          variants={fadeInUp}
                          className="flex items-start gap-3 text-sm md:text-base text-white/90 leading-relaxed">
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/60 mt-2 shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  ) : (
                    <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={staggerContainer}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                      {caseStudy.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          variants={fadeInUp}
                          className="flex items-center gap-3 text-sm md:text-base text-white">
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-[#1E72A1] to-[#3A9AD4] flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                          </div>
                          <span className="leading-snug">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.section>
              )}

              {/* Project Overview Section */}
              {caseStudy.overview && !Array.isArray(caseStudy.content.challenge) && slug !== "enterprise-workflow-automation" && (
                <motion.section 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  className="space-y-3 md:space-y-4 mt-10 md:mt-14 mb-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    Project Overview
                  </h2>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {caseStudy.overview}
                  </p>
                </motion.section>
              )}
              {!caseStudy.overview && typeof caseStudy.content.challenge === "string" && slug !== "enterprise-workflow-automation" && (
                <motion.section 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  className="space-y-3 md:space-y-4 mt-10 md:mt-14 mb-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    Project Overview
                  </h2>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {caseStudy.content.challenge}
                  </p>
                </motion.section>
              )}

              {/* Outcome Section */}
              {caseStudy.content.results && caseStudy.content.results.length > 0 && slug !== "enterprise-workflow-automation" && (
                <motion.section 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  className="space-y-3 md:space-y-4 mt-10 md:mt-14 mb-6">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">
                    {getOutcomeTitle()}
                  </h2>
                  <motion.ul 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="space-y-2 md:space-y-3">
                    {caseStudy.content.results.map((result, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3 text-sm md:text-base text-white/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/60 mt-2 shrink-0" />
                        <span>{result}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.section>
              )}

              {/* Two Images Side by Side */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-16 md:mb-[100px]">
                <motion.div 
                  variants={fadeInLeft}
                  className="relative w-full h-[180px] sm:h-[200px] md:h-[230px] rounded-[12px] md:rounded-[20px] overflow-hidden shadow-xl">
                  <Image
                    src="/images/predictive-sales-engine.png"
                    alt="Predictive Analytics"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
                <motion.div 
                  variants={fadeInRight}
                  className="relative w-full h-[180px] sm:h-[200px] md:h-[230px] rounded-[12px] md:rounded-[20px] overflow-hidden shadow-xl">
                  <Image
                    src="/images/ai-support-agent.png"
                    alt="AI Support"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-white/20" />

              {/* Navigation */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                className="flex items-center justify-between py-8 md:py-11 gap-4">
                {/* Previous */}
                <div className="flex items-center gap-2 md:gap-3 flex-1">
                  {prevSlug ? (
                    <Link
                      href={`/case-studies/${prevSlug}`}
                      className="flex items-center gap-2 md:gap-3 text-white hover:text-[#3A9AD4] transition-colors group">
                      <svg width="20" height="20" className="md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L11 18M5 12L11 6M5 12L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="hidden sm:block">
                        <p className="text-lg md:text-2xl font-bold text-white">Previous</p>
                        <p className="text-xs md:text-base font-medium line-clamp-1">
                          {caseStudyData[prevSlug]?.title.replace(" Case Study", "")}
                        </p>
                      </div>
                      <div className="sm:hidden">
                        <p className="text-sm font-bold">Prev</p>
                      </div>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-2 md:gap-3 text-white/40">
                      <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L11 18M5 12L11 6M5 12L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="hidden sm:block">
                        <p className="text-lg md:text-2xl font-bold">Previous</p>
                        <p className="text-xs md:text-base">-</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Grid Icon */}
                <div className="w-8 h-8 md:w-12 md:h-12 grid grid-cols-3 gap-[3px] md:gap-[5px] p-1 md:p-2 shrink-0">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-full h-full bg-white rounded-sm"
                    />
                  ))}
                </div>

                {/* Next */}
                <div className="flex items-center gap-2 md:gap-3 flex-1 justify-end">
                  {nextSlug ? (
                    <Link
                      href={`/case-studies/${nextSlug}`}
                      className="flex items-center gap-2 md:gap-3 text-white hover:text-[#3A9AD4] transition-colors text-right group">
                      <div className="hidden sm:block">
                        <p className="text-lg md:text-2xl font-bold text-white">Next</p>
                        <p className="text-xs md:text-base font-medium line-clamp-1">
                          {caseStudyData[nextSlug]?.title.replace(" Case Study", "")}
                        </p>
                      </div>
                      <div className="sm:hidden">
                        <p className="text-sm font-bold">Next</p>
                      </div>
                      <svg width="20" height="20" className="md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12L13 18M19 12L13 6M19 12L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-2 md:gap-3 text-white/40 text-right">
                      <div className="hidden sm:block">
                        <p className="text-lg md:text-2xl font-bold">Next</p>
                        <p className="text-xs md:text-base">-</p>
                      </div>
                      <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12L13 18M19 12L13 6M19 12L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
              <div className="h-px bg-white/20" />
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              {/* Project Info Card */}
              {caseStudy.projectInfo && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInRight}
                  className="">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 md:mb-8">
                    Project Info
                  </h3>
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                    className="space-y-5 md:space-y-6">
                    {/* Client */}
                    <motion.div variants={fadeInUp} className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#1E72A1] to-[#3A9AD4] flex items-center justify-center shrink-0">
                        <User className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-white/60 mb-1">Client:</p>
                        <p className="text-base md:text-lg text-white font-medium">
                          {caseStudy.projectInfo.client}
                        </p>
                      </div>
                    </motion.div>

                    {/* Date */}
                    <motion.div variants={fadeInUp} className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#1E72A1] to-[#3A9AD4] flex items-center justify-center shrink-0">
                        <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-white/60 mb-1">Date:</p>
                        <p className="text-base md:text-lg text-white font-medium">
                          {caseStudy.projectInfo.date}
                        </p>
                      </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div variants={fadeInUp} className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#1E72A1] to-[#3A9AD4] flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm text-white/60 mb-1">Location:</p>
                        <p className="text-base md:text-lg text-white font-medium">
                          {caseStudy.projectInfo.location}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}

              {/* Popular Project Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={scaleIn}
                className="bg-[#0a0a0a] border border-[#3A9AD4]/40 rounded-[16px] md:rounded-[20px] relative overflow-hidden group hover:border-[#3A9AD4]/60 transition-colors">
                <div className="absolute top-3 right-3 md:top-5 md:right-5 z-10">
                  <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/30 text-xs md:text-sm font-medium text-white bg-white/15 backdrop-blur-sm">
                    Popular Project
                  </span>
                </div>
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[590px] rounded-[12px] md:rounded-[16px] overflow-hidden mb-0">
                  <Image
                    src="/images/fire.jpg"
                    alt="Popular Project"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-lg absolute bottom-0 left-0 right-0 p-3 md:p-4 pb-5 md:pb-7">
                  <p className="text-sm md:text-lg font-semibold text-white mb-1">
                    Robotics, Program
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium">
                    Smart Data & AI Analysis
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}