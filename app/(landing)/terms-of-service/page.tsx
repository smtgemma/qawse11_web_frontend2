"use client";

import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function TermsOfServicePage() {
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
          heading="Terms of Service"
          subheading="Please read these terms carefully before using our website or services."
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
            {/* Acceptance of Terms */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Acceptance of Terms
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                By accessing or using Dima360AI&apos;s website and services, you
                agree to be bound by these terms of service.
              </p>
            </motion.section>

            {/* Our Services */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Our Services
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                Dima360AI provides AI strategy, consulting, custom AI
                development, workflow automation, RAG systems, and AI
                integration services. Service scope may vary by engagement.
              </p>
            </motion.section>

            {/* User Responsibilities */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                User Responsibilities
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4 text-base font-normal text-white/80">
                <li>Provide accurate and lawful information</li>
                <li>Use services only for legal purposes</li>
                <li>
                  Do not misuse, copy, or reverse-engineer any part of the
                  service
                </li>
              </ul>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Intellectual Property
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                All website content, designs, code, and materials remain the
                intellectual property of Dima360AI unless otherwise agreed in
                writing.
              </p>
            </motion.section>

            {/* Confidentiality */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Confidentiality
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                Any Business Or Technical Information Shared During
                Consultations Or Projects Will Be Treated As Confidential.
              </p>
            </motion.section>

            {/* Limitation Of Liability */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Limitation Of Liability
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                Dima360AI shall not be liable for indirect, incidental, or
                consequential damages arising from the use of our services, to
                the maximum extent permitted by law.
              </p>
            </motion.section>

            {/* Termination */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Termination
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                We reserve the right to suspend or terminate access to our
                services if these terms are violated.
              </p>
            </motion.section>

            {/* Changes To Terms */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Changes To Terms
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                Continued use of our services constitutes acceptance of the
                updated terms.
              </p>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Contact Information
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                For questions regarding these terms, contact us at:{" "}
                <Link
                  href="mailto:hello@dima360ai.com"
                  className="text-[#1E72A1] hover:underline font-medium">
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
