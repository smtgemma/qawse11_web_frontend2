"use client";

import PageBanner from "@/components/ui/PageBanner";
import CaseStudiesSection from "./CaseStudiesSection";

export default function CaseStudiesPage() {
  return (
    <>
      <div className="lg:mt-[160px] mt-[100px]">
        <PageBanner
          buttonText="Case Studies"
          heading={`Let's Build The Future With \nDima360Marketing`}
          subheading="Book a consultation or get in touch with our team."
        />
      </div>
      <div className="lg:mt-[100px] mt-[50px]">
        <CaseStudiesSection />
      </div>
    </>
  );
}

