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
          heading="Free Marketing Audit Checklist"
          subheading="Evaluate your current marketing strategy and uncover opportunities for growth."
        />
      </div>

      {/* Content Section */}
      <div className=" text-white lg:mt-[100px] mt-[50px]">
        <Container className="py-12 md:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-12 md:space-y-16">
            {/* Description */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                Description
              </h2>
              <div className="space-y-4">
                <p className="text-base font-normal leading-relaxed text-white/80">
                  Many businesses struggle with digital marketing because they
                  jump into tools and campaigns without a clear strategy. A
                  marketing roadmap helps you focus on the right channels,
                  optimize performance, and scale your growth with a clear plan.
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
                      Clear Marketing Strategy
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-base font-normal text-white/80">
                      <li>Align all marketing campaigns with real business goals</li>
                      <li>Focus on channels that generate measurable results</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      Reduced Marketing Waste
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-base font-normal text-white/80">
                      <li>Avoid spending budget on ineffective campaigns</li>
                      <li>Improve ROI with data-driven decisions</li>
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      Faster Growth
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-base font-normal text-white/80">
                      <li>Identify high-impact marketing opportunities</li>
                      <li>Prioritize strategies that bring qualified leads</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      Execution Ready
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-base font-normal text-white/80">
                      <li>Move from planning to launching campaigns with clarity</li>
                      <li>Implement marketing systems that scale with your business</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* What's Inside The Marketing Roadmap */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                What&apos;s Inside The Marketing Roadmap
              </h2>
              <h3 className="text-xl font-semibold my-3 mt-7 text-white">
                Marketing Strategy Breakdown
              </h3>
              <div className="space-y-6">
                {/* Step 01 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 01 – Marketing Performance Audit
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Analyze your current marketing channels, website
                    performance, and lead generation strategy.
                  </p>
                </div>

                {/* Step 02 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 02 – Audience &amp; Market Research
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Identify your target audience, customer needs, and
                    competitive positioning.
                  </p>
                </div>

                {/* Step 03 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 03 – Channel Strategy Planning
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Determine the most effective channels such as SEO, paid ads,
                    social media, and content marketing.
                  </p>
                </div>

                {/* Step 04 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 04 – Campaign &amp; Funnel Design
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Create optimized marketing funnels that attract visitors and
                    convert them into customers.
                  </p>
                </div>

                {/* Step 05 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 05 – Implementation &amp; Campaign Launch
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Launch campaigns across selected channels with clear KPIs
                    and tracking systems.
                  </p>
                </div>

                {/* Step 06 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 06 – Analytics &amp; Performance Tracking
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Monitor marketing performance through analytics dashboards
                    and data insights.
                  </p>
                </div>

                {/* Step 07 */}
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">
                    Step 07 – Optimization &amp; Scaling
                  </h4>
                  <p className="text-base font-normal text-white/80">
                    Continuously improve campaigns and scale the strategies that
                    drive the best results.
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
