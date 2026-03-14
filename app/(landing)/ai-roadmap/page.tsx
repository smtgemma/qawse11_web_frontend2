"use client";

import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import { motion, Variants } from "framer-motion";

export default function AIRoadmapPage() {
  // Animation variants consistent with other sections
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
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <>
      {/* Page Banner */}
      <div className="lg:mt-[160px] mt-[100px]">
        <PageBanner
          heading="Download Your AI Transformation Roadmap"
          subheading="A Step-By-Step Strategic Roadmap To Plan, Build, And Scale AI Solutions For Your Business."
        />
      </div>

      {/* Content Section */}
      <div className="bg-black text-white lg:mt-[100px] mt-[50px]">
        <Container className="py-12 md:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-12 md:space-y-16">
            {/* Why you need an ai roadmap */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                Why you need an ai roadmap
              </h2>
              <div className="space-y-4">
                <p className="text-base font-normal leading-relaxed text-white/80">
                  Many businesses fail with AI because they start with tools instead of strategy.
                </p>
                <p className="text-base font-normal leading-relaxed text-white/80">
                  This roadmap helps you avoid costly mistakes and shows you exactly what to do, when to do it, and why it matters.
                </p>
              </div>
            </motion.section>

            {/* Key Benefits */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      Clear AI Strategy
                    </h3>
                    <li className="text-base font-normal text-white/80 list-disc list-inside">
                      Align AI initiatives with real business goals
                    </li>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      Reduced Risk
                    </h3>
                    <li className="text-base font-normal text-white/80 list-disc list-inside">
                      Avoid security, compliance, and scalability issues
                    </li>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      Faster ROI
                    </h3>
                    <li className="text-base font-normal text-white/80 list-disc list-inside">
                      Focus on high-impact, low-risk AI use cases
                    </li>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      Execution-Ready
                    </h3>
                    <li className="text-base font-normal text-white/80 list-disc list-inside">
                      Move from idea to deployment with clarity
                    </li>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* What's Inside The AI Roadmap */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                What&apos;s Inside The AI Roadmap
              </h2>
              <h3 className="text-xl font-semibold my-3 mt-7 text-white">
                Roadmap Breakdown
              </h3>
              <div className="space-y-6">
                {/* Step 01 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 01 - AI Readiness Assessment
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Evaluate your data, systems, and organizational readiness
                  </p>
                </div>

                {/* Step 02 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 02 - Use Case Identification
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Identify AI opportunities with the highest business impact
                  </p>
                </div>

                {/* Step 03 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 03 - Data & Infrastructure Planning
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Understand what data you need and how to structure it
                  </p>
                </div>

                {/* Step 04 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 04 - Model & Tool Selection
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Choose the right AI models, platforms, and vendors
                  </p>
                </div>

                {/* Step 05 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 05 - Implementation & Deployment
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Build, test, and launch AI solutions safely
                  </p>
                </div>

                {/* Step 06 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 06 - Security & Governance
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Ensure compliance, privacy, and responsible AI usage
                  </p>
                </div>

                {/* Step 07 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 07 - Scaling & Optimization
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Improve performance and expand AI across teams
                  </p>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </Container>
      </div>
    </>
  );
}
