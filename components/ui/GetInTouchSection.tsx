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
  heading = "Next-Gen AI Agents For Conversations That Convert",
  description = "From Automating Support To Powering Custom AI Workflows, Our Agents Drive Measurable Business Results Across Enterprise Operations.",
  imageSrc = "/images/service-get-in-touch.png",
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
    <div className={`w-full bg-black  ${className}`}>
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
                <svg
                  width="92"
                  height="13"
                  viewBox="0 0 92 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[70px] md:w-[80px] lg:w-[92px]">
                  <path
                    d="M63.6423 1.42943C75.8288 1.20471 83.8395 0.795807 87.8733 0.217955C90.1819 -0.116833 91.7212 -0.0603571 91.9212 0.348955C92.0352 0.590873 92.0212 0.739583 91.9071 0.888632C91.5651 1.33578 86.5191 2.15519 81.887 2.52781C77.3822 2.88324 75.7438 2.93997 63.0721 3.12571C56.0596 3.21973 48.5902 3.34902 46.4807 3.42354L42.6328 3.53551L43.131 4.07742C43.9011 4.93388 45.3554 6.03232 48.6472 8.23137C50.3435 9.35038 51.7829 10.4119 51.8548 10.5804C52.0828 11.0643 51.8548 11.8471 51.4557 11.9766C51.2557 12.0328 50.0014 11.9953 48.6472 11.8658C45.8255 11.6032 41.5207 11.715 15.9783 12.7022C12.0734 12.8512 6.87041 12.9817 4.43292 13H0L5.93015 11.9576C5.93015 11.9576 36.6457 9.85238 45.5405 9.81569L47.3219 9.79553L45.4694 8.54711C44.4572 7.85804 43.331 7.05711 42.9749 6.75901C41.7917 5.7707 40.1383 3.94364 39.9813 3.44146C39.6393 2.4176 40.1813 1.7097 41.1646 1.93327C41.4207 1.98831 44.4002 1.93255 47.7639 1.82019C51.1277 1.70783 58.2682 1.5223 63.6423 1.42943Z"
                    fill="url(#paint0_linear_contact)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_contact"
                      x1="0"
                      y1="6.5"
                      x2="92"
                      y2="6.5"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#1E72A1" />
                      <stop offset="1" stopColor="#3A9AD4" />
                    </linearGradient>
                  </defs>
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
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-transparent text-white border-[1.5px] border-white font-medium text-sm hover:bg-white/10 transition-all duration-200 mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                      <Send className="w-4 h-4" />
                      <span>
                        {isSubmitting || isLoading
                          ? "Sending..."
                          : "Send Message"}
                      </span>
                    </motion.button>
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
