"use client";

import PageBanner from "@/components/ui/PageBanner";
import ConsultationForm from "./ConsultationForm";
import TrustedPartnersSection from "./TrustedPartnersSection";

export default function BookConsultationPage() {
  return (
    <>
      {/* Page Banner */}
      <div className="max-w-[1150px] mx-auto lg:mt-[160px] mt-[80px] lg:my-[100px] my-[50px]">
        <PageBanner
          buttonText="Book Consultation"
          heading="Let's Build Your Growth Strategy"
          subheading="Book a free consultation to explore how we can help you achieve your marketing goals."
        />
      </div>

      {/* Consultation Form */}
      <div className="max-w-[1100px] w-[95%] mx-auto lg:mb-[100px] mb-[50px]">
        <ConsultationForm />
      </div>

      {/* Trusted Partners Section */}
      <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[180px] my-[100px]">
      <TrustedPartnersSection />
      </div>
    </>
  );
}

