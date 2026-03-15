"use client";

import PageBanner from "@/components/ui/PageBanner";
import GetInTouchSection from "@/components/ui/GetInTouchSection";
import WhyItMattersSection from "@/components/ui/WhyItMattersSection";
import FeaturesBlock from "@/components/ui/FeaturesBlock";
import CTASection from "@/components/ui/CTASection";

export default function AIIntegrationPage() {
  return (
    <>
      {/* Page Banner */}
      <div className="max-w-[1150px] mx-auto lg:mt-[160px] mt-[80px] lg:my-[100px] my-[50px]">
        <PageBanner
          buttonText="Our Services"
          heading="Email Marketing"
          subheading="Drive engagement and conversions with targeted email campaigns that nurture leads and keep your brand top of mind."
        />
      </div>

      {/* Get In Touch Section */}
      <div className="max-w-[1150px] w-[95%] mx-auto lg:mt-[180px] mt-[100px] overflow-hidden">
        <GetInTouchSection
          smallText=""
          heading="Email Marketing That Nurtures & Converts"
          description="Turn subscribers into customers with automated sequences that deliver the right message at the right time."
          imageSrc="/images/Email.png"
          imageAlt="AI Integration - Connect AI Across Your Business Ecosystem"
        />
      </div>

      {/* Capabilities Section */}
      <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px]">
        <WhyItMattersSection
          title="Capabilities"
          items={[
            {
              heading: "Real-time data syncing",
              description:
                "Keep every system updated automatically with live data across platforms and teams.",
            },
            {
              heading: "Secure cross-platform automation",
              description:
                "Eliminate manual tasks and connect all tools safely using enterprise-grade security.",
            },
            {
              heading:
                "Prebuilt integrations for Salesforce, HubSpot, SAP, and more",
              description:
                "Integrate AI seamlessly into your current tech stack without replacing existing systems.",
            },
          ]}
        />
      </div>

      {/* Outcomes Section */}
      <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px] lg:mb-[100px] mb-[50px]">
        <FeaturesBlock
          title="Outcomes"
          leftImage="/images/Ai-email.png"
          rightImage="/images/lead.png"
          leftImageAlt="AI Central Hub"
          rightImageAlt="Business Ecosystem AI Integration"
          features={[
            {
              title: "Faster, data-driven decisions",
              description:
                "Gain immediate access to unified insights so teams can respond quicker and smarter.",
            },
            {
              title: "A single source of truth",
              description:
                "All information comes together in one place — enabling clarity, transparency, and better strategic planning.",
            },
            {
              title: "Less manual work, fewer errors across operations",
              description:
                "Automation removes repetitive tasks, saving time and minimizing human errors across processes.",
            },
            {
              title: "Improved operational reliability",
              description:
                "AI ensures consistent performance across systems, reducing downtime and workflow disruptions.",
            },
          ]}
        />
      </div>
      <div>
        {/* CTA Section */}
        <CTASection
          badgeText="Ready to grow?"
          heading={`Let's Build Your Growth Engine
`}
          description="Book a free strategy call to discover how we can accelerate your digital marketing results."
          primaryButtonText="Book Consultation"
          secondaryButtonText="Download Marketing Audit Checklist"
          secondaryButtonHref="/ai-roadmap"
        />
      </div>
    </>
  );
}
