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
          subheading="Learn how we collect, use, and protect your information."
        />
      </div>

      {/* Content Section */}
      <div className="bg-black text-white lg:mt-[100px] mt-[50px]">
        <Container className="py-12 md:py-16 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8 md:space-y-12">
            {/* Our Commitment to Privacy */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Our Commitment to Privacy
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                Dima360AI is committed to protecting your personal and business
                data and handling it responsibly.
              </p>
            </motion.section>

            {/* Information We Collect */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Information We Collect
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base font-normal text-white/80">
                <li>Name, email address, and company name</li>
                <li>Information submitted via contact or consultation forms</li>
                <li>Website usage and analytics data</li>
                <li>Communication records</li>
              </ul>
            </motion.section>

            {/* How We Use Your Information */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base font-normal text-white/80">
                <li>Respond to inquiries and consultation requests</li>
                <li>Deliver and improve our services</li>
                <li>Internal analytics and performance optimization</li>
                <li>Legal and regulatory compliance</li>
              </ul>
            </motion.section>

            {/* Data Sharing & Disclosure */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Data Sharing & Disclosure
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                We do not sell your data. Information may be shared only with
                trusted service partners (e.g., hosting, analytics) or when
                legally required.
              </p>
            </motion.section>

            {/* Data Security */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Data Security
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                We use industry-standard security measures to protect your
                information from unauthorized access or disclosure.
              </p>
            </motion.section>

            {/* Cookies & Tracking Technologies */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Cookies & Tracking Technologies
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                Cookies are used to enhance user experience and analyze website
                performance. You can manage cookies through your browser
                settings or available consent tools.
              </p>
            </motion.section>

            {/* Your Data Rights */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Your Data Rights
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base font-normal text-white/80">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent at any time</li>
                <li>
                  These rights may vary by jurisdiction (e.g., GDPR, CCPA).
                </li>
              </ul>
            </motion.section>

            {/* Policy Updates */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Policy Updates
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                This privacy policy may be updated periodically. any changes
                will be reflected on this page.
              </p>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Contact Information
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                For questions regarding this privacy policy, contact us at:{" "}
                <Link
                  href="mailto:hello@dima360ai.com"
                  className="text-[#9A3DFF] hover:underline font-medium">
                  hello@dima360ai.com
                </Link>
              </p>
            </motion.section>
          </motion.div>
        </Container>
      </div>
    </>
  );
}
