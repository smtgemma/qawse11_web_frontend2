"use client";

import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";
import Container from "./Container";
import { useGetInTouchMutation } from "@/redux/api/formsApi";
import { useAppSelector } from "@/redux/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Link from "next/link";

interface GetInTouchSectionProps {
  smallText?: string;
  heading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

// Zod schema for validation
const getInTouchSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type GetInTouchFormData = z.infer<typeof getInTouchSchema>;

const GetInTouchSection: React.FC<GetInTouchSectionProps> = ({
  smallText = "AI Agent Capabilities",
  heading = "Paid Advertising That Delivers ROI",
  description = "Stop wasting ad spend on campaigns that don’t convert. Our data-driven approach to paid media ensures every dollar works toward your business goals.",
  imageSrc = "/images/service-get-in-touch2.png",
  imageAlt = "AI Agent Capabilities",
  className = "",
}) => {
  const token = useAppSelector((state) => state.auth.token);
  const [getInTouchAction, { isLoading }] = useGetInTouchMutation();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<GetInTouchFormData>({
    resolver: zodResolver(getInTouchSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: GetInTouchFormData) => {
    if (!token) {
      toast.warning("Please sign up or log in to submit this form.");
      return;
    }

    try {
      // Call your existing mutation
      const res = await getInTouchAction(data).unwrap();

      // Reset form on successful submission
      reset();

      // Professional success log
      console.log("Get In Touch form submitted successfully.", data);

      // Professional success message
      toast.success(
        res.message || "Your request has been submitted successfully.",
      );
    } catch (error: any) {
      // Professional error log
      console.error("Failed to submit Get In Touch form.", error);

      // Professional error message
      toast.error(
        error?.data?.message ||
          "Something went wrong while submitting the form. Please try again later.",
      );
    }
  };

  // Animation variants
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

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div className={`w-full  ${className}`}>
      <Container className="relative z-10">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Section - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="space-y-6 md:space-y-8 md:col-span-2">
              {/* Small Text with Underline */}
              <motion.div
                variants={fadeInUp}
                className={`flex flex-col ${smallText ? "" : "hidden"}`}>
                <p className="text-sm md:text-base font-medium text-white mb-2">
                  {smallText}
                </p>
                <svg width="115" height="9" viewBox="0 0 115 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M114.319 2.65106C113.852 1.6684 109.842 1.25465 97.7914 0.909859C86.5471 0.582305 73.4569 -0.365883 50.5863 0.151308C33.1045 0.547821 11.3371 2.13387 11.3371 3.0131C11.3371 3.65097 12.1857 3.66821 20.2902 3.0993C27.7793 2.58211 31.6194 2.46143 36.3081 2.32351C17.5109 3.66821 13.5011 4.54744 3.48727 5.39218C-2.79261 5.92661 0.877726 7.46094 3.16903 7.30578C3.19025 7.30578 32.4044 5.37494 35.1624 5.47838C35.417 5.49562 32.6378 5.80593 28.9674 6.16797C18.7202 7.20235 20.6933 8.92615 28.3734 8.13312C54.2142 5.46097 78.5275 4.63346 97.2611 5.78852C103.18 6.15055 103.838 6.15055 103.838 5.70232C103.838 4.90929 102.226 4.30608 99.7009 4.1854C95.7547 3.97853 80.5642 3.3922 73.6903 3.2198C73.1599 3.20256 73.4145 2.87518 73.8812 2.8407C76.6817 2.61659 98.9159 2.78881 107.657 3.03017C114.085 3.20256 114.552 3.1855 114.319 2.65106Z" fill="#1E72A1"/>
</svg>

              </motion.div>

              {/* Main Heading */}
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-[42px] font-semibold leading-[1.2] md:leading-tight text-white mt-6 md:mt-8 lg:max-w-[80%]">
                {heading}
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-base md:text-lg leading-relaxed text-white/90 max-w-2xl mt-4 md:mt-8">
                {description}
              </motion.p>

              {/* AI Graphic/Illustration */}
              {imageSrc && (
                <motion.div
                  variants={fadeInUp}
                  className="relative w-full max-w-[750px] mx-auto h-[550px] mt-10 md:mt-12 lg:mt-[56px]">
                  <div className="relative w-full">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={750}
                      height={550}
                      className="object-cover w-[750px] h-[550px] rounded-[20px]"
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Right Section - Contact Form & Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              className="lg:sticky lg:top-8 lg:h-fit">
              <div
                className="rounded-[12px] p-8 md:p-5 lg:p-8"
                style={{
                  background:
                    "linear-gradient(90deg, #1E72A1 0%, #3A9AD4 100%)",
                }}>
                {/* Get In Touch Form */}
                <div className="mb-8">
                  <h3 className="text-2xl md:text-[28px] font-bold text-white mb-6">
                    Get In Touch
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white mb-2.5">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name")}
                        placeholder="Your Name"
                        className="w-full bg-transparent border-0 border-b-[1.5px] border-white/25 text-white placeholder-white/50 pb-2.5 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                      {errors.name && (
                        <p className="text-red-200 text-xs mt-1.5">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white mb-2.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email")}
                        placeholder="Your mail"
                        className="w-full bg-transparent border-0 border-b-[1.5px] border-white/25 text-white placeholder-white/50 pb-2.5 text-sm focus:outline-none focus:border-white transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-200 text-xs mt-1.5">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white mb-2.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        {...register("message")}
                        placeholder="Write your message"
                        rows={1}
                        className="w-full bg-transparent border-0 border-b-[1.5px] border-white/25 text-white placeholder-white/50 pb-2.5 text-sm focus:outline-none focus:border-white transition-colors resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-200 text-xs mt-1.5">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting || isLoading}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-transparent text-white border-[1.5px] border-white font-medium text-sm hover:bg-white/10 transition-all duration-200 mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                      <motion.span
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2.5">
                        <Send className="w-4 h-4" />
                        <span>
                          {isSubmitting || isLoading
                            ? "Sending..."
                            : "Send Message"}
                        </span>
                      </motion.span>
                    </button>
                  </form>
                </div>

                {/* OR Separator */}
                <div className="flex items-center gap-3 my-8">
                  <div className="flex-1 h-px bg-white/25"></div>
                  <span className="text-white font-medium text-sm">OR</span>
                  <div className="flex-1 h-px bg-white/25"></div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="text-2xl md:text-[28px] font-bold text-white mb-2">
                    Contact
                  </h3>
                  <p className="text-sm text-white/75 mb-6">
                    Need Any Help, Can Us 24/7 For Support
                  </p>
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center shrink-0">
                        <Mail className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-0.5">
                          Email Us
                        </p>
                        <Link
                          href={"mailto:hello@dima360ai.com"}
                          className="text-sm text-white/90 hover:underline hover:text-white transition-colors">
                          hello@dima360ai.com
                        </Link>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center shrink-0">
                        <MapPin className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-0.5">
                          Office Address
                        </p>
                        <p className="text-sm text-white/90">
                          San Francisco, CA United States, and Miami, FL United
                          States
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center shrink-0">
                        <Clock className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-0.5">
                          Support Hours
                        </p>
                        <p className="text-sm text-white/90">Monday - Friday</p>
                        <p className="text-sm text-white/90">
                          9:00 AM - 6:00 PM PST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GetInTouchSection;
