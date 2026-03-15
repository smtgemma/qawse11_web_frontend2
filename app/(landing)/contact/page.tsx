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
          heading="Let's Talk Growth"
          subheading="Ready to scale your digital marketing? Get in touch and let's discuss your goals."
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
