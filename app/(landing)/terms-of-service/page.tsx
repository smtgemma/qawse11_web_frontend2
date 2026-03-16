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
          subheading="Please read these Terms carefully before using our website or services."
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
            {/* Acceptance of Terms */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Acceptance of Terms
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                By accessing or using DIMA360MARKETING&apos;S website or
                services, you agree to be bound by these Terms of Service.
              </p>
            </motion.section>

            {/* Our Services */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Our Services
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                DIMA360MARKETING provides digital marketing services, including
                strategy, paid advertising, SEO, social media marketing, content
                marketing, email marketing, analytics, consulting, and related
                marketing support. Service scope may vary by engagement.
              </p>
            </motion.section>

            {/* Client Responsibilities */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Client Responsibilities
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                You agree to provide accurate information, timely feedback,
                approvals, and any access reasonably needed to perform the
                services. You are responsible for ensuring that materials,
                claims, and instructions you provide are lawful and accurate.
              </p>
            </motion.section>

            {/* Fees and Payment */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Fees and Payment
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                Fees, billing terms, and any ad spend will be set out in a
                proposal, invoice, or separate agreement. Late or unpaid
                balances may result in paused or terminated services.
              </p>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Intellectual Property
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                All website content, branding, designs, code, strategies,
                reports, and materials created by DIMA360MARKETING remain our
                property unless otherwise agreed in writing. Client-owned
                materials remain the client&apos;s property. Any transfer of
                ownership in deliverables must be stated in writing.
              </p>
            </motion.section>

            {/* Confidentiality */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Confidentiality
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                We will treat non-public business, marketing, and technical
                information shared during an engagement as confidential, except
                where disclosure is required by law.
              </p>
            </motion.section>

            {/* Third-Party Platforms */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Third-Party Platforms
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                Our services may involve third-party platforms such as Google,
                Meta, HubSpot, Shopify, analytics tools, or email platforms. We
                are not responsible for outages, policy changes, suspensions, or
                actions taken by third-party platforms.
              </p>
            </motion.section>

            {/* Limitation Of Liability */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Disclaimer of Warranties
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                Our website and services are provided on an &quot;as is&quot;
                and &quot;as available&quot; basis to the maximum extent
                permitted by law.
              </p>
            </motion.section>

            {/* Limitation of Liability */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Limitation of Liability
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                To the maximum extent permitted by law, DIMA360MARKETING will
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or related to
                the use of our website or services.
              </p>
            </motion.section>

            {/* Termination */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Termination
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                We may suspend or terminate access to our website or services if
                these Terms are violated, if payments are overdue, or if we
                reasonably believe continued service creates legal, financial,
                or reputational risk.
              </p>
            </motion.section>

            {/* Changes To Terms */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Changes to Terms
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                We may update these Terms from time to time. Continued use of
                our website or services after updates are posted means you
                accept the revised Terms.
              </p>
            </motion.section>

            {/* Governing Law */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Governing Law
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                These Terms are governed by the laws of Florida US, without
                regard to conflict-of-law principles.
              </p>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Contact Information
              </h2>
              <p className="text-base font-normal leading-relaxed text-white/80">
                For questions regarding these Terms, contact us at:{" "}
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
