"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Select } from "@/components/ui/Select";
import Link from "next/link";
import { useConsultationMutation } from "@/redux/api/formsApi";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

// Zod schema – fields match Figma; optional ones used for API or project_details
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
  phone: z.string().max(30).optional(),
  company: z
    .string()
    .min(1, "Company name is required")
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters"),
  websiteUrl: z.string().max(500).optional(),
  industry: z.string().max(100).optional(),
  budgetRange: z.string().min(1, "Please select a budget range"),
  primaryGoal: z.string().min(1, "Please select your goal"),
  helpWith: z
    .array(z.string())
    .min(1, "Please select at least one area where we can help you"),
  projectDetails: z.string().max(1000).optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const helpWithOptions = [
  "Increase Revenue",
  "Generate More Leads",
  "Build Brand Awareness",
  "Reduce Customer Acquisition Cost",
  "Enter New Markets",
  "Additional Details",
];

const industryOptions = [
  "E-commerce",
  "SaaS & Tech",
  "Professional Services",
  "Healthcare",
  "Real Estate",
  "Finance",
  "Education",
  "Other",
];

const primaryGoalOptions = [
  { value: "ai-agents", label: "AI Agents" },
  { value: "automations", label: "Automations" },
  { value: "rag-systems", label: "RAG Systems" },
  { value: "custom-ai-applications", label: "Custom AI Applications" },
  { value: "ai-integration", label: "AI Integration" },
  { value: "ai-strategy-consulting", label: "AI Strategy & Consulting" },
  { value: "other", label: "Other" },
];

export default function ConsultationForm() {
  const [consultationAction, { isLoading }] = useConsultationMutation();

  // React Hook Form setup
  const {
    register,
    control,
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
      phone: "",
      company: "",
      websiteUrl: "",
      industry: "",
      budgetRange: "",
      primaryGoal: "",
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
      const details = [
        data.projectDetails,
        data.phone && `Phone: ${data.phone}`,
        data.websiteUrl && `Website: ${data.websiteUrl}`,
        data.industry && `Industry: ${data.industry}`,
      ]
        .filter(Boolean)
        .join(" | ");

      const res = await consultationAction({
        firstName: data.firstName,
        lastName: data.lastName,
        companyName: data.company,
        email: data.email,
        phoneNumber: data.phone || "",
        websiteUrl: data.websiteUrl || "",
        industry: data.industry || "",
        monthlyMarketingBudget: data.budgetRange,
        primaryGoal: data.primaryGoal,
        currentMarketingChannels: data.helpWith,
        additionalDetails: details || "No additional details",
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="">
      <div className="bg-[#0B1722] rounded-[12px] p-8 md:p-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Schedule Your Free Strategy Call
          </h2>
          <p className="text-white/80 text-base leading-relaxed">
          Tell us about your business and goals. We’ll prepare a custom growth roadmap for your call.
          </p>
        </div>

        {/* Form – layout matches Figma: 2-col rows then full-width Primary Goal, then checkboxes */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Row 1: First Name | Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
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
                <p className="text-red-400 text-xs mt-1.5">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
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
                <p className="text-red-400 text-xs mt-1.5">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Row 2: Email Address | Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="ex. hello@email.co"
                className="w-full bg-[#70809080] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                placeholder="Type Phone Number"
                className="w-full bg-[#70809080] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
              />
            </div>
          </div>

          {/* Row 3: Company Name | Website URL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                {...register("company")}
                placeholder="Your company name"
                className="w-full bg-[#70809080] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
              />
              {errors.company && (
                <p className="text-red-400 text-xs mt-1.5">{errors.company.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="websiteUrl" className="block text-sm font-medium text-white mb-2">
                Website URL
              </label>
              <input
                type="url"
                id="websiteUrl"
                {...register("websiteUrl")}
                placeholder="Website Url..."
                className="w-full bg-[#70809080] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors"
              />
            </div>
          </div>

          {/* Row 4: Industry | Monthly Marketing Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-white mb-2">
                Industry
              </label>
              <Controller
                name="industry"
                control={control}
                render={({ field }) => (
                  <Select
                    id="industry"
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                    options={industryOptions.map((opt) => ({ value: opt, label: opt }))}
                    placeholder="Your Industry"
                    allowEmpty
                  />
                )}
              />
            </div>
            <div>
              <label htmlFor="budgetRange" className="block text-sm font-medium text-white mb-2">
                Monthly Marketing Budget
              </label>
              <Controller
                name="budgetRange"
                control={control}
                render={({ field }) => (
                  <Select
                    id="budgetRange"
                    value={field.value}
                    onValueChange={field.onChange}
                    options={[
                      { value: "5k-15k", label: "Under $5,000" },
                      { value: "15k-50k", label: "$5,000 - $15,000" },
                      { value: "50k-150k", label: "$15,000 - $50,000" },
                      { value: "150k-plus", label: "$50,000+" },
                    ]}
                    placeholder="Select Your Budget Range"
                  />
                )}
              />
              {errors.budgetRange && (
                <p className="text-red-400 text-xs mt-1.5">{errors.budgetRange.message}</p>
              )}
            </div>
          </div>

          {/* Row 5: Primary Goal (full width) */}
          <div>
            <label htmlFor="primaryGoal" className="block text-sm font-medium text-white mb-2">
              Primary Goal
            </label>
            <Controller
              name="primaryGoal"
              control={control}
              render={({ field }) => (
                <Select
                  id="primaryGoal"
                  value={field.value}
                  onValueChange={field.onChange}
                  options={primaryGoalOptions}
                  placeholder="Your goal"
                />
              )}
            />
            {errors.primaryGoal && (
              <p className="text-red-400 text-xs mt-1.5">{errors.primaryGoal.message}</p>
            )}
          </div>

          {/* Current Marketing Channels */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Current Marketing Channels
            </label>
            <div className="space-y-3 mt-3">
              {helpWithOptions.map((option) => (
                <label key={option} className="relative flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={helpWith.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded border-2 border-[#3a3a3a] bg-[#70809080] peer-checked:bg-linear-to-br peer-checked:from-[#1E72A1] peer-checked:to-[#3A9AD4] peer-checked:border-[#1E72A1] transition-all duration-200 flex items-center justify-center">
                    {helpWith.includes(option) && (
                      <svg className="w-3 h-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="ml-3 text-white">{option}</span>
                </label>
              ))}
            </div>
            {errors.helpWith && (
              <p className="text-red-400 text-xs mt-1.5">{errors.helpWith.message}</p>
            )}
          </div>

          {/* Optional: Project Details (for API project_details) */}
          <div>
            <label htmlFor="projectDetails" className="block text-sm font-medium text-white mb-2">
              Additional Details
            </label>
            <textarea
              id="projectDetails"
              {...register("projectDetails")}
              placeholder="Briefly describe your goals, challenges, and desired outcomes."
              rows={4}
              className="w-full bg-[#70809080] border border-[#3a3a3a] rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#1E72A1] transition-colors resize-none"
            />
          </div>

          {/* Disclaimer */}
          <div className="bg-[#70809080] border border-[#3a3a3a] rounded-lg p-4">
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
