"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useConsultationMutation } from "@/redux/api/formsApi";
import { useAppSelector } from "@/redux/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

// Zod schema for validation
const consultationSchema = z.object({
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
  timeline: z.string().min(1, "Please select a timeline"),
  country: z
    .string()
    .min(1, "Country is required")
    .min(2, "Country must be at least 2 characters")
    .max(100, "Country must be less than 100 characters"),
  projectType: z.string().min(1, "Please select a project type"),
  budgetRange: z.string().min(1, "Please select a budget range"),
  helpWith: z
    .array(z.string())
    .min(1, "Please select at least one area where we can help you"),
  projectDetails: z
    .string()
    .min(1, "Project details are required")
    .min(10, "Project details must be at least 10 characters")
    .max(1000, "Project details must be less than 1000 characters"),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const helpWithOptions = [
  "Data Annotation And Curation For Autonomy",
  "Enterprise AI Agents & Scalable GenAI Platforms",
  "Data Generation And RLHF For LLMs",
  "Model Test And Evaluation",
  "Robotics And Data Collection",
  "Others",
];

export default function ConsultationForm() {
  const token = useAppSelector((state) => state.auth.token);
  const [consultationAction, { isLoading }] = useConsultationMutation();

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      timeline: "",
      country: "",
      projectType: "",
      budgetRange: "",
      helpWith: [],
      projectDetails: "",
    },
  });

  const helpWith = watch("helpWith");

  const handleCheckboxChange = (value: string) => {
    const currentValues = helpWith || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];
    setValue("helpWith", newValues, { shouldValidate: true });
  };

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      if (!token) {
        toast.warning("Please sign up or log in to submit this form.");
        return;
      }
      // Call your existing mutation
      const res = await consultationAction({
        first_name: data.firstName,
        last_name: data.lastName,
        company_name: data.company,
        email: data.email,
        country: data.country,
        budget_range: data.budgetRange,
        project_type: data.projectType,
        project_details: data.projectDetails,
        helps: data.helpWith,
        timeline: data.timeline,
      }).unwrap();

      // Reset form on successful submission
      reset();

      // Optional: Show success message or handle response
      console.log("Form submitted successfully:", data);
      toast.success(res.message);
    } catch (error: any) {
      // Handle error (you can add error toast here if needed)
      console.error("Form submission error:", error);
      toast.error(error.data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="">
      <div className="bg-[#1a1a1a] rounded-[12px] p-8 md:p-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Schedule Your Free Strategy Call
          </h2>
          <p className="text-white/80 text-base leading-relaxed">
            Tell us about your business and goals. We’ll prepare a custom growth roadmap for your call.
          </p>
        </div>

        {/* Form */}
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
                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
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
                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
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
              placeholder="ex. hello@email.co"
              className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1.5">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company */}
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
                placeholder="Your company name"
                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
              />
              {errors.company && (
                <p className="text-red-400 text-xs mt-1.5">
                  {errors.company.message}
                </p>
              )}
            </div>

            {/* Timeline */}
            <div>
              <label
                htmlFor="timeline"
                className="block text-sm font-medium text-white mb-2">
                How soon do you want to start?
              </label>
              <div className="relative">
                <select
                  id="timeline"
                  {...register("timeline")}
                  className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1E72A1] transition-colors appearance-none cursor-pointer">
                  <option value="" disabled hidden>
                    Select Timeline...
                  </option>
                  <option value="immediately">Immediately</option>
                  <option value="1-2-months">Within 1—2 months</option>
                  <option value="3-6-months">Within 3—6 months</option>
                  <option value="just-researching">Just researching</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
              </div>
              {errors.timeline && (
                <p className="text-red-400 text-xs mt-1.5">
                  {errors.timeline.message}
                </p>
              )}
            </div>
          </div>

          {/* Country */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-white mb-2">
              Country
            </label>
            <input
              type="text"
              id="country"
              {...register("country")}
              placeholder="Type your country"
              className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
            />
            {errors.country && (
              <p className="text-red-400 text-xs mt-1.5">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* Project Type */}
          <div>
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-white mb-2">
              Project Type
            </label>
            <div className="relative">
              <select
                id="projectType"
                {...register("projectType")}
                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1E72A1] transition-colors appearance-none cursor-pointer">
                <option value="" disabled hidden>
                  Select Your Project Type...
                </option>
                <option value="ai-agents">AI Agents</option>
                <option value="automations">Automations</option>
                <option value="rag-systems">RAG Systems</option>
                <option value="custom-ai-applications">Custom AI Applications</option>
                <option value="ai-integration">AI Integration</option>
                <option value="ai-strategy-consulting">AI Strategy & Consulting</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
            </div>
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
              Select Your Budget Range
            </label>
            <div className="relative">
              <select
                id="budgetRange"
                {...register("budgetRange")}
                className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#1E72A1] transition-colors appearance-none cursor-pointer">
                <option value="" disabled hidden>
                  Select Your Budget Range
                </option>
                <option value="5k-15k">$5k-$15k</option>
                <option value="15k-50k">$15k-$50k</option>
                <option value="50k-150k">$50k-$150k</option>
                <option value="150k-plus">$150k+</option>
                <option value="not-sure-yet">Not sure yet</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none" />
            </div>
            {errors.budgetRange && (
              <p className="text-red-400 text-xs mt-1.5">
                {errors.budgetRange.message}
              </p>
            )}
          </div>

          {/* What Can We Help With? */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              What Can We Help With?
              <span className="text-white/60 font-normal ml-1">
                (Select All That Apply)
              </span>
            </label>
            <div className="space-y-3 mt-5">
              {helpWithOptions.map((option) => (
                <label
                  key={option}
                  className="relative flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={helpWith.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded border-2 border-[#3a3a3a] bg-[#2a2a2a] peer-checked:bg-gradient-to-br peer-checked:from-[#1E72A1] peer-checked:to-[#3A9AD4] peer-checked:border-[#1E72A1] transition-all duration-200 flex items-center justify-center">
                    {helpWith.includes(option) && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                  <span className="ml-3">{option}</span>
                </label>
              ))}
            </div>
            {errors.helpWith && (
              <p className="text-red-400 text-xs mt-1.5">
                {errors.helpWith.message}
              </p>
            )}
          </div>

          {/* Project Details */}
          <div>
            <label
              htmlFor="projectDetails"
              className="block text-sm font-medium text-white mb-2">
              Project Details
            </label>
            <textarea
              id="projectDetails"
              {...register("projectDetails")}
              placeholder="Briefly describe your goals, challenges, and desired outcomes."
              rows={5}
              className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors resize-none"
            />
            {errors.projectDetails && (
              <p className="text-red-400 text-xs mt-1.5">
                {errors.projectDetails.message}
              </p>
            )}
          </div>

          {/* Disclaimer */}
          <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-4">
            <div className="flex items-center mx-auto text-center justify-center gap-2">
              <Shield className="w-5 h-5 text-white shrink-0 mt-0.5" />
              <p className="text-white text-sm">
                We respond within{" "}
                <span className="text-[#3A9AD4] font-semibold">24 hours</span>.
                No obligation. 100% confidential.
              </p>
            </div>
          </div>

          {/* Privacy Policy */}
          <p className="text-white/60 text-sm">
            by submitting this form, your information will be processed in
            accordance with our{" "}
            <Link
              href="/privacy-policy"
              className="text-[#3A9AD4] hover:underline font-medium">
              Privacy Policy.
            </Link>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || isLoading}
            className="w-fit text-white font-semibold py-4 px-6 rounded-lg cursor-pointer relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed">
            {/* Background Layer 1 - Initial */}
            <span
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{
                background: "linear-gradient(90deg, #1E72A1 0%, #3A9AD4 100%)",
                opacity: 1,
              }}
            />

            {/* Background Layer 2 - Hover */}
            <span
              className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-disabled:opacity-0"
              style={{
                background: "linear-gradient(90deg, #3A9AD4 0%, #1E72A1 100%)",
              }}
            />

            {/* Text Content */}
            <span className="relative z-10">
              {isSubmitting || isLoading
                ? "Submitting..."
                : "Request Consultation"}
            </span>
          </button>
        </form>
      </div>
    </motion.div>
  );
}
