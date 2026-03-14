"use client";

import PageBanner from "@/components/ui/PageBanner";
import GetInTouchSection from "@/components/ui/GetInTouchSection";
import WhyItMattersSection from "@/components/ui/WhyItMattersSection";
import FeaturesBlock from "@/components/ui/FeaturesBlock";
import CTASection from "@/components/ui/CTASection";

export default function CustomAIApplicationsPage() {
    return (
        <>
            {/* Page Banner */}
            <div className="max-w-[1150px] mx-auto lg:mt-[160px] mt-[80px] lg:my-[100px] my-[50px]">
                <PageBanner
                    buttonText="Explore Details"
                    heading="Custom AI Applications"
                    subheading="Purpose-Built AI Solutions Tailored To Your Business Workflows"
                />
            </div>

            {/* Get In Touch Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:mt-[180px] mt-[100px] overflow-hidden">
                <GetInTouchSection
                    smallText=""
                    heading="Custom AI Apps Built For Your Competitive Edge"
                    description="Purpose-Built AI Products Tailored To Specific Workflows, Industries, And Innovative Digital Experiences."
                    imageSrc="/images/custom-ai-applications.png"
                    imageAlt="Custom AI Applications - Purpose-Built AI Solutions"
                />
            </div>

            {/* What We Build Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px]">
                <WhyItMattersSection
                    title="What We Build"
                    items={[
                        {
                            heading: "Predictive dashboards",
                            description:
                                "Turn raw data into real-time future insights that empower smarter and faster decisions.",
                        },
                        {
                            heading: "AI-powered insight systems",
                            description:
                                "Automatically detect patterns, trends, and opportunities that might otherwise go unnoticed.",
                        },
                        {
                            heading: "Domain-specific automation tools",
                            description:
                                "Build tools for your industry's workflows to eliminate manual effort and accelerate execution.",
                        },
                        {
                            heading: "End-to-end digital platforms",
                            description:
                                "Complete AI-enabled systems designed to support operations, customers, and business growth from one place.",
                        },
                    ]}
                />
            </div>

            {/* Why Choose Us Section with Images */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px] lg:mb-[100px] mb-[50px]">
                <FeaturesBlock
                    title="Why Choose Us"
                    leftImage="/images/img7.png"
                    rightImage="/images/img8.png"
                    leftImageAlt="AI System Architecture"
                    rightImageAlt="Custom AI App Architecture"
                    features={[
                        {
                            title: "100% customized to your business",
                            description:
                                "Every solution is built around your unique infrastructure, goals, and brand identity.",
                        },
                        {
                            title: "Cloud, on-prem, or hybrid deployment",
                            description:
                                "Flexible deployment options that meet your security, compliance, and infrastructure requirements.",
                        },
                        {
                            title: "Designed for scalability",
                            description:
                                "Grow without limitations — performance remains strong as users, data, and features expand.",
                        },
                        {
                            title: "Enterprise-grade security & compliance",
                            description:
                                "AI systems designed with strict governance, privacy controls, and secure infrastructure.",
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

