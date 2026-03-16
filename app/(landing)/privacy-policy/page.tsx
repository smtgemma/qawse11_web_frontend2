"use client";

import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
          heading="Privacy Policy"
          subheading="Please read this Privacy Policy carefully to understand how we collect, use, and protect your information."
        />
      </div>

      {/* Content Section */}
      <div className=" text-white lg:mt-[100px] mt-[50px]">
        <Container className="py-12 md:py-16 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8 md:space-y-12">
            {/* Our Commitment To Privacy */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Our Commitment To Privacy
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                DIMA360MARKETING is committed to protecting your personal
                information and handling it responsibly.
              </p>
            </motion.section>

            {/* Information We Collect */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Information We Collect
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                We may collect personal information you provide directly,
                including your name, email address, phone number, company name,
                and any information submitted through contact forms,
                consultation requests, or other communications. We may also
                collect website usage data, analytics data, cookies, device
                information, and communication records.
              </p>
            </motion.section>

            {/* How We Use Your Information */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                How We Use Your Information
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                We use your information to respond to inquiries, provide and
                improve our digital marketing services, communicate with you,
                analyze website and campaign performance, manage business
                operations, and comply with legal obligations.
              </p>
            </motion.section>

            {/* Marketing Services And Third-Party Platforms */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Marketing Services And Third-Party Platforms
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                Our services may involve third-party tools and platforms such as
                analytics providers, CRM systems, email marketing platforms, ad
                platforms, scheduling tools, and hosting providers. Your
                information may be processed through these services as needed to
                deliver and support our marketing services.
              </p>
            </motion.section>

            {/* Data Security */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Data Security
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                We use reasonable administrative, technical, and organizational
                safeguards designed to protect your information from
                unauthorized access, disclosure, alteration, or destruction.
              </p>
            </motion.section>

            {/* Cookies & Tracking Technologies */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Cookies And Tracking Technologies
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                We use cookies and similar technologies to improve website
                functionality, analyze traffic, and support marketing
                performance measurement. You can manage cookie preferences
                through your browser settings or any available consent tools.
              </p>
            </motion.section>

            {/* Your Data Rights */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Your Data Rights
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                Depending on your location, you may have the right to request
                access to your personal information, request correction or
                deletion, or withdraw consent where applicable.
              </p>
            </motion.section>

            {/* Policy Updates */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Policy Updates
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page.
              </p>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Contact Information
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                For questions regarding this Privacy Policy, contact us at:{" "}
                <Link
                  href="mailto:hello@dima360marketing.com"
                  className="text-[#1E72A1] hover:underline font-medium">
                  hello@dima360marketing.com
                </Link>
              </p>
            </motion.section>
          </motion.div>
        </Container>
      </div>
    </>
  );
}
