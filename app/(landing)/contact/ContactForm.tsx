"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Container from "@/components/ui/Container";
import { Select } from "@/components/ui/Select";
import { useContactMutation } from "@/redux/api/formsApi";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

// Zod schema for validation
const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  company: z
    .string()
    .min(1, "Company name is required")
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  country: z.string().min(1, "Please select a country"),
  projectType: z.string().min(1, "Please select a project type"),
  budgetRange: z.string().min(1, "Please select a budget range"),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [contactAction, { isLoading }] = useContactMutation();

  // React Hook Form setup
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      country: "",
      projectType: "",
      budgetRange: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Call your existing mutation
      const res = await contactAction({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        country: data.country,
        budgetRange: data.budgetRange,
        projectType: data.projectType,
        message: data.message,
      }).unwrap();

      // Reset form on successful submission
      reset();

      // Optional: Show success message or handle response
      console.log("Form submitted successfully:", data);

      toast.success(res.message);
    } catch (error: any) {
      // Handle error (you can add error toast here if needed)
      console.error("Form submission error:", error);
      toast.error(
        error?.data?.message ||
          "Something went wrong while submitting the form. Please try again.",
      );
    }
  };

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "India",
    "Other",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000+",
  ];

  return (
    <div className=" text-white lg:mt-[100px] mt-[50px] overflow-hidden">
      <Container className="">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto">
          <div className="border border-[#3a3a3a] bg-white/5 rounded-[20px] p-8 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                    placeholder="Ex. John"
                    className="w-full bg-[#70809080] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    placeholder="Ex. Doe"
                    className="w-full bg-[#70809080] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="Ex. Hello@Email.co"
                  className="w-full bg-[#70809080] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {errors.email.message}
                  </p>
                )}
                <p className="text-sm text-white/60 mt-2">
                  We&apos;ll never share your email with anyone
                </p>
              </div>

              {/* Company & Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    {...register("company")}
                    placeholder="Your Company Name"
                    className="w-full bg-[#70809080] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
                  />
                  {errors.company && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {errors.company.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-white mb-2">
                    Country
                  </label>
                  <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                      <Select
                        id="country"
                        value={field.value}
                        onValueChange={field.onChange}
                        options={countries.map((c) => ({ value: c, label: c }))}
                        placeholder="Select Your Country"
                      />
                    )}
                  />
                  {errors.country && (
                    <p className="text-red-400 text-xs mt-1.5">
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-white mb-2">
                  Project Type
                </label>
                <Controller
                  name="projectType"
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="projectType"
                      value={field.value}
                      onValueChange={field.onChange}
                      options={[
                        { value: "ai-agents", label: "AI Agents" },
                        { value: "automations", label: "Automations" },
                        { value: "rag-systems", label: "RAG Systems" },
                        { value: "custom-ai-applications", label: "Custom AI Applications" },
                        { value: "ai-integration", label: "AI Integration" },
                        { value: "ai-strategy-consulting", label: "AI Strategy & Consulting" },
                        { value: "other", label: "Other" },
                      ]}
                      placeholder="Select Your Project Type..."
                    />
                  )}
                />
                {errors.projectType && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              {/* Budget Range */}
              <div>
                <label
                  htmlFor="budgetRange"
                  className="block text-sm font-medium text-white mb-2">
                  Budget Range
                </label>
                <Controller
                  name="budgetRange"
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="budgetRange"
                      value={field.value}
                      onValueChange={field.onChange}
                      options={budgetRanges.map((r) => ({ value: r, label: r }))}
                      placeholder="Select Your Budget Range"
                    />
                  )}
                />
                {errors.budgetRange && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {errors.budgetRange.message}
                  </p>
                )}
                <p className="text-sm text-white/60 mt-2">
                  This helps us tailor the right solution for you
                </p>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  placeholder="Describe your project, goals, or challenges..."
                  rows={5}
                  className="w-full bg-[#70809080] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isLoading}
                className="w-fit flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-base font-semibold text-white cursor-pointer relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed">
                {/* Background Layer 1 - Initial */}
                <span
                  className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                  style={{
                    background:
                      "linear-gradient(90deg, #1E72A1 0%, #3A9AD4 100%)",
                    opacity: 1,
                  }}
                />

                {/* Background Layer 2 - Hover */}
                <span
                  className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-disabled:opacity-0"
                  style={{
                    background:
                      "linear-gradient(90deg, #3A9AD4 0%, #1E72A1 100%)",
                  }}
                />

                {/* Text Content */}
                <span className="relative z-10 flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  <span>
                    {isSubmitting || isLoading
                      ? "Booking..."
                      : "Book a Call"}
                  </span>
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
