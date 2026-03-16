"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  title: string;
  sub_title: string;
}
export default function SuccessContent({ title, sub_title }: Props) {
  return (
    <div className="w-full lg:w-auto lg:max-w-[450px] shrink-0">
      <div className="flex items-center flex-col space-y-4 text-center capitalize px-4 sm:px-6 md:px-8 lg:px-0">
        <motion.div
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.6,
          }}>
          <Image
            src={"/images/successful vector.png"}
            alt="success-vector"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          className="space-y-2 text-white font-medium w-full max-w-[90%] sm:max-w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}>
          <motion.h1
            className="text-2xl sm:text-[28px] md:text-[32px] leading-tight"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}>
            {title}
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base leading-relaxed"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}>
            {sub_title}
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}>
          <Link
            href={"/signin"}
            className="w-full h-12 flex items-center justify-center rounded-xl bg-linear-to-r from-[#1E72A1] to-[#3A9AD4] text-white font-semibold text-sm sm:text-base hover:opacity-90 active:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#1E72A1] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed">
            Continue
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
