"use client";

import PageBanner from "@/components/ui/PageBanner";
import IconCardSection from "@/components/ui/IconCardSection";
import ValuesSection from "@/components/ui/ValuesSection";
import WhyChooseUsSection from "@/components/ui/WhyChooseUsSection";
import CTASection from "@/components/ui/CTASection";
import {
  MissionIcon,
  VisionIcon,
  InnovationIcon,
  IntegrityIcon,
  ReliabilityIcon,
  ExcellenceIcon,
  BrainIcon,
  ClockIcon,
  WorkFlowIcon,
  RevenueIcon,
  ResultsGrowthIcon,
} from "@/components/ui/Cicon";

export default function AboutContent() {
  const missionVisionCards = [
    {
      icon: MissionIcon,
      title: "Our Mission",
      description:
        "To help businesses grow through data-driven digital marketing strategies that attract the right audience, generate quality leads, and deliver measurable results.",
    },
    {
      icon: VisionIcon,
      title: "Our Vision",
      description:
        "To become a trusted global partner for businesses seeking innovative, performance-focused marketing solutions that drive sustainable growth.",
    },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="max-w-[1150px]  lg:mt-[160px] mt-[80px] mx-auto lg:my-[100px] my-[50px]">
        <PageBanner
          buttonText="About Us"
          heading={`We Build Marketing Engines That\nDrive Sustainable Growth`}
          subheading="A results-obsessed agency helping ambitious brands scale through strategic digital marketing."
        />
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-[1150px]  mx-auto">
        <IconCardSection cards={missionVisionCards} />
      </div>

      {/* Our Values Section */}
      <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[100px] my-[50px]">
        <ValuesSection
          smallText="Our Approach"
          heading="How We're Different"
          values={[
            {
              icon: InnovationIcon,
              title: "Data-First Decisions",
              description:
                "Every strategy, campaign, and creative choice is backed by data not guesswork.",
            },
            {
              icon: IntegrityIcon,
              title: "Full Transparency",
              description:
                "Real-time dashboards. Weekly updates. No hidden fees or confusing reports.",
            },
            {
              icon: ReliabilityIcon,
              title: "Results Obsessed",
              description:
                "We’re not happy unless you’re hitting your goals. Your success is our success.",
            },
            {
              icon: ExcellenceIcon,
              title: "Long-Term Partners",
              description:
                "We don’t do quick wins that fade. We build sustainable growth engines.",
            },
          ]}
          imageSrc="/images/ourValues2.png"
          imageAlt="Our Approach"
        />
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-[1150px]  mx-auto lg:mt-[100px] mt-[50px]">
        <WhyChooseUsSection
          smallText="Why Choose Us"
          heading="Built for Measurable Growth"
          features={[
            {
              icon: BrainIcon,
              title: "Data-Driven Strategy",
              description:
                "Smarter marketing decisions powered by real data.",
            },
            {
              icon: ResultsGrowthIcon,
              title: "Proven Marketing Results",
              description:
                "Campaigns built around ROI and measurable revenue growth.",
            },
            {
              icon: WorkFlowIcon,
              title: "Full-Funnel Expertise",
              description:
                "From awareness to retention, we optimize every step of the funnel.",
            },
            {
              icon: IntegrityIcon,
              title: "Transparent Reporting",
              description:
                "Clear dashboards, honest insights, and full visibility into performance.",
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
