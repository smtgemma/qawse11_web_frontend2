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
  PadlockIcon,
} from "@/components/ui/Cicon";

export default function AboutContent() {
  const missionVisionCards = [
    {
      icon: MissionIcon,
      title: "Our Mission",
      description:
        "Empowering Enterprises With Scalable AI Solutions That Deliver Reliable, Real-World Performance At Global Scale.",
    },
    {
      icon: VisionIcon,
      title: "Our Vision",
      description:
        "A Future Where Every Business Workflow Is Automated, Intelligent, And Fully Data-Driven.",
    },
  ];

  return (
    <>
      {/* Page Banner */}
      <div className="max-w-[1150px]  lg:mt-[160px] mt-[80px] mx-auto lg:my-[100px] my-[50px]">
        <PageBanner
          buttonText="About Us"
          heading={`We Build Enterprise-Grade\nAI Systems`}
          subheading="We Accelerate Enterprise Growth Through Intelligent, Scalable AI Automation."
        />
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-[1150px]  mx-auto">
        <IconCardSection cards={missionVisionCards} />
      </div>

      {/* Our Values Section */}
      <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[100px] my-[50px]">
        <ValuesSection
          smallText="Our Values"
          heading="The Principles That Guide Our Work And Define Our Commitment To Excellence."
          values={[
            {
              icon: InnovationIcon,
              title: "Innovation",
              description:
                "Advancing AI To Deliver Cutting-Edge Solutions That Create Measurable Business Impact.",
            },
            {
              icon: IntegrityIcon,
              title: "Integrity",
              description:
                "Transparency, Ethical AI Practices, And Unwavering Commitment To Client Trust.",
            },
            {
              icon: ReliabilityIcon,
              title: "Reliability",
              description:
                "Robust, Scalable Systems Engineered For Consistent Performance In Mission-Critical Environments.",
            },
            {
              icon: ExcellenceIcon,
              title: "Excellence",
              description:
                "Top-Tier Engineering, Design, And Execution Across Every Engagement.",
            },
          ]}
          imageSrc="/images/ourValues.jpg"
          imageAlt="Our Values"
        />
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-[1150px]  mx-auto lg:mt-[100px] mt-[50px]">
        <WhyChooseUsSection
          smallText="Why Choose Us"
          heading="We Deliver AI Solutions That Drive Real Business Value With Speed, Security, And Reliability."
          features={[
            {
              icon: BrainIcon,
              title: "Expertise In AI Agents",
              description:
                "Deep Specialization In Autonomous Systems And Enterprise-Grade AI Workflows.",
            },
            {
              icon: ReliabilityIcon,
              title: "Proven Enterprise Deployments",
              description:
                "Track Record Delivering High-Impact AI Implementations For Fortune-Level Organizations.",
            },
            {
              icon: ClockIcon,
              title: "Fast Delivery Cycles",
              description:
                "Agile Methodology That Accelerates Time-To-Value Without Sacrificing Quality.",
            },
            {
              icon: PadlockIcon,
              title: "Robust Security Standards",
              description:
                "Enterprise-Grade Compliance And Data Protection Built Into Every Solution.",
            },
          ]}
        />
      </div>

      <div>
        {/* CTA Section */}
        <CTASection
          badgeText="Trusted By Fortune 500 Teams"
          heading={`Transform Your Business With AI Book A Consultation`}
          description="Speak With Our Team To Explore How Workflow Can Improve Accuracy, Reduce Hallucinations, And Secure Your AI Systems."
          primaryButtonText="Book Consultation"
          secondaryButtonText="Download AI Roadmap"
          secondaryButtonHref="/ai-roadmap"
        />
      </div>
    </>
  );
}
