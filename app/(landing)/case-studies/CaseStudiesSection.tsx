"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function CaseStudiesSection() {
  const [showMore, setShowMore] = useState(false);

  // Different scroll-based animation variants
  const fadeInLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -20,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: {
      opacity: 0,
      x: 20,
      rotate: 5,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        duration: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const scaleRotate: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.9,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const slideUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const caseStudies = [
    {
      id: 1,
      slug: "ai-workflow-automation",
      title: "AI Workflow Automation",
      image: "/images/ai-workflow-automation.png",
      hoverImage: "/images/ai-workflow-automation.png",
      description: "Global Supply Chain Optimization with automated logistics",
      iconBg: "bg-[#333333]",
    },
    {
      id: 2,
      slug: "ai-support-agent",
      title: "AI Support Agent",
      image: "/images/ai-support-agent.png",
      hoverImage: "/images/ai-support-agent.png",
      description: "24/7 customer support with intelligent AI agents",
      iconBg: "bg-[#333333]",
    },
    {
      id: 3,
      slug: "predictive-sales-engine",
      title: "Predictive Sales Engine",
      image: "/images/predictive-sales-engine.png",
      hoverImage: "/images/predictive-sales-engine.png",
      description: "AI-powered sales forecasting and inventory optimization",
      iconBg: "bg-[#333333]",
    },
    {
      id: 4,
      slug: "ai-integration",
      title: "AI Integration",
      image: "/images/ai-integration.png",
      hoverImage: "/images/ai-integration.png",
      description: "Seamless AI integration across enterprise systems",
      iconBg: "bg-[#333333]",
    },
    {
      id: 5,
      slug: "enterprise-workflow-automation",
      title: "Enterprise Workflow Automation",
      image: "/images/enterprise-workflow-automation.png",
      hoverImage: "/images/enterprise-workflow-automation.png",
      description: "End-to-end workflow automation for large enterprises",
      iconBg: "bg-[#333333]",
    },
    {
      id: 6,
      slug: "ai-agents",
      title: "AI Agents",
      image: "/images/ai-agents.png",
      hoverImage: "/images/ai-agents.png",
      description: "Autonomous AI agents for complex business processes",
      iconBg: "bg-[#333333]",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden mb-20">
      <Container className="">
        <div className="space-y-12">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={scaleRotate}
            className="text-center lg:mb-20 mb-8">
            <h2 className="md:text-lg text-base font-semibold text-white leading-relaxed max-w-4xl mx-auto">
              Explore real-world case studies showcasing how Dima360AI delivers
              automation, intelligence, and measurable business outcomes across
              industries.
            </h2>
          </motion.div>

          {/* Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <Link key={study.id} href={`/case-studies/${study.slug}`}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className="group relative border border-transparent rounded-[20px] overflow-hidden cursor-pointer hover:border-[#1E72A1] transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative w-full lg:h-[520px] h-[300px] overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover rounded-[20px]"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="py-8 px-3 flex items-center justify-between">
                    {/* Title */}
                    <h3 className="lg:text-2xl text-lg font-semibold text-white group-hover:text-[#3A9AD4] transition-colors duration-300">
                      {study.title}
                    </h3>

                    {/* Arrow Icon */}
                    <div
                      className={`lg:w-12 lg:h-12 w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${study.iconBg} group-hover:bg-linear-to-br group-hover:from-[#1E72A1] group-hover:to-[#3A9AD4]`}>
                      <ArrowRight className="lg:w-6 lg:h-6 w-5 h-5 text-white -rotate-45" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* View Case Studies Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={slideUp}
            className="flex justify-center mt-12 hidden">
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center justify-center gap-3 lg:px-8 lg:py-4 px-6 py-3 rounded-lg lg:text-base text-sm font-semibold text-white cursor-pointer relative overflow-hidden group">
              {/* Background Layer 1 - Initial */}
              <span
                className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                style={{
                  background:
                    "linear-gradient(90deg, #1E72A1 0%, #3A9AD4 100%)",
                  opacity: 1,
                }}
              />

              {/* Background Layer 2 - Hover */}
              <span
                className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, #3A9AD4 0%, #1E72A1 100%)",
                }}
              />

              {/* Text Content */}
              <span className="relative z-10 flex items-center gap-3">
                {showMore ? "Show Less" : "View Case Studies"}
                <ArrowRight
                  className={`w-5 h-5 transition-transform duration-300 ${
                    showMore ? "rotate-90" : ""
                  }`}
                />
              </span>
            </button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
