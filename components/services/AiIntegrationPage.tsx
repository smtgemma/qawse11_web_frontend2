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
          title="What's Included"
          items={[
            {
              heading: "Email Strategy & Planning",
              description:
                "",
            },
            {
              heading: "Campaign Design & Copywriting",
              description:
                "",
            },
            {
              heading:
                "Marketing Automation Setup",
              description:
                "",
            },
            {
              heading:
                "List Segmentation & Personalization",
              description:
                "",
            },
            {
              heading:
                "A/B Testing & Optimization",
              description:
                "",
            },
          ]}
        />
      </div>

      {/* Outcomes Section */}
      <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px] lg:mb-[100px] mb-[50px]">
        <FeaturesBlock
          title="Results You Can Expect"
          leftImage="/images/Ai-email.png"
          rightImage="/images/lead.png"
          leftImageAlt="AI Central Hub"
          rightImageAlt="Business Ecosystem AI Integration"
          features={[
            {
              title: "Increased brand authority and industry credibility",
              description:
                "",
            },
            {
              title: "Higher website traffic and audience engagement",
              description:
                "",
            },
            {
              title: "More qualified leads and consistent conversions",
              description:
                "",
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
          secondaryButtonHref="/download-marketing-audit-checklist"
        />
      </div>
    </>
  );
}
