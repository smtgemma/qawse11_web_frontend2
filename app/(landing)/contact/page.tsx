"use client";

import PageBanner from "@/components/ui/PageBanner";
import ContactForm from "./ContactForm";
import ContactInfoSection from "./ContactInfoSection";
import TrustedPartnersSection from "../book-consultation/TrustedPartnersSection";

export default function ContactPage() {
  return (
    <>
      <div className="lg:mt-[160px] mt-[100px]">
        <PageBanner
          buttonText="CONTACT US"
          heading="Let's Build Your AI Roadmap"
          subheading="Connect With Our AI Specialists To Discuss Your Project, Explore Solutions, Or Build Your Custom AI Roadmap"
        />
      </div>
      <ContactForm />
      <ContactInfoSection />
      <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[180px] my-[100px]">
        <TrustedPartnersSection />
      </div>
    </>
  );
}
