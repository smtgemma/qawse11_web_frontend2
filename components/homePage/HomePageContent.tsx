"use client";

import CTASection from "../ui/CTASection";
import AdvancedTechSection from "./AdvancedTechSection";
import BuiltWithAi from "./BuiltWithAi";
import CaseStudiesResourcesSection from "./CaseStudiesResourcesSection";
import FrameWorkSection from "./FrameWorkSection";
import HeroSection from "./HeroSection";
import ImpactResultSection from "./ImpactResultSection";
import IndustrySolutions from "./IndustrySolutions";
import OurSolutionSection from "./OurSolutionSection";

export default function HomePageContent() {
  return (
    <>
      <HeroSection />

      <OurSolutionSection />

      <AdvancedTechSection />

      <IndustrySolutions />

      <BuiltWithAi />

      <FrameWorkSection />

      <CaseStudiesResourcesSection />

      <ImpactResultSection />

      {/* CTA Section */}
      <CTASection
        primaryButtonHref="/book-consultation"
        badgeText="Ready to grow?"
        heading={`Let's Build Your Growth Engine`}
        description="Book a free strategy call to discover how we can accelerate your digital marketing results."
        primaryButtonText="Book Consultation"
        secondaryButtonText="Download Marketing Audit Checklist"
        secondaryButtonHref="/ai-roadmap"
      />
    </>
  );
}
