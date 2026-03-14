"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Clock, MapPin, Phone, Linkedin } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function ContactInfoSection() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="bg-black text-white">
      <Container className="py-12 md:py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-6">
          {/* Top Row - 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#1a1a1a] border border-[#3a3a3a] bg-white/5 rounded-[20px] p-6 md:p-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6C03FF] to-[#9A3DFF] flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                Email
              </h3>
              <Link
                href={"mailto:hello@dima360ai.com"}
                className="text-base text-white/80 transition-all hover:text-white hover:underline">
                hello@dima360ai.com
              </Link>
            </motion.div>

            {/* Operating Hours Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#1a1a1a] border border-[#3a3a3a] bg-white/5 rounded-[20px] p-6 md:p-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6C03FF] to-[#9A3DFF] flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                Operating Hours
              </h3>
              <div className="flex flex-col md:flex-row md:justify-between gap-1">
                <p className="text-base text-white/80">Monday - Friday</p>
                <p className="text-base text-white/80">9:00 AM - 6:00 PM PST</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Office Address Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#1a1a1a] border border-[#3a3a3a] bg-white/5 rounded-[20px] p-6 md:p-8">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6C03FF] to-[#9A3DFF] flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                Office Address
              </h3>
              <p className="text-base text-white/80">
                San Francisco, CA United States, and Miami, FL United States
              </p>
              <p className="text-base text-white/80">States</p>
            </motion.div>

            {/* Follow Us Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#1a1a1a] border border-[#3a3a3a] bg-white/5 rounded-[20px] p-6 md:p-8 flex flex-col justify-center">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {/* LinkedIn */}
                  {/* <Link
                    href="http://linkedin.com/"
                    target="_blank"
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C03FF] to-[#9A3DFF] flex items-center justify-center transition-all hover:shadow-[0_4px_40px_rgba(108,3,255,0.6)]"
                    aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5 text-white" />
                  </Link> */}

                  {/* X (Twitter) */}
                  <Link
                    href="https://x.com/dima360ai/"
                    target="_blank"
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C03FF] to-[#9A3DFF] flex items-center justify-center transition-all hover:shadow-[0_4px_40px_rgba(108,3,255,0.6)]"
                    aria-label="X (Twitter)">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.451 1.875h1.692L7.185 6.061l4.494 5.939H8.266l-2.656-3.472-3.038 3.472H1.097l3.967-4.536L.937 1.875h3.492l2.4 3.175 2.622-3.175zm-.592 8.918h.937L4.18 2.797H3.173l5.686 7.996z"
                        fill="white"
                      />
                    </svg>
                  </Link>

                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/dima360ai/"
                    target="_blank"
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C03FF] to-[#9A3DFF] flex items-center justify-center transition-all hover:shadow-[0_4px_40px_rgba(108,3,255,0.6)]"
                    aria-label="X (Twitter)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
