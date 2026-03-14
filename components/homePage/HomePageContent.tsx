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
        badgeText="Trusted By Fortune 500 Teams"
        heading={`Transform Your Business With AI Book A Consultation`}
        description="Speak With Our Team To Explore How Workflow Can Improve Accuracy, Reduce Hallucinations, And Secure Your AI Systems."
        primaryButtonText="Book Consultation"
        secondaryButtonText="Download AI Roadmap"
        secondaryButtonHref="/ai-roadmap"
      />
    </>
  );
}
