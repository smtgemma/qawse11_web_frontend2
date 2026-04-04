"use client";

import PageBanner from "@/components/ui/PageBanner";
import GetInTouchSection from "@/components/ui/GetInTouchSection";
import WhyItMattersSection from "@/components/ui/WhyItMattersSection";
import FeaturesBlock from "@/components/ui/FeaturesBlock";
import CTASection from "@/components/ui/CTASection";

export default function AIStrategyConsultingPage() {
    return (
        <>
            {/* Page Banner */}
            <div className="max-w-[1150px] mx-auto lg:mt-[160px] mt-[80px] lg:my-[100px] my-[50px]">
                <PageBanner
                    buttonText="Our Services"
                    heading="Analytics & Reporting"
                    subheading="We’re offering something special just for you. Don’t miss out on our latest updates and exclusive offer."
                />
            </div>

            {/* Get In Touch Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:mt-[180px] mt-[100px] overflow-hidden">
                <GetInTouchSection
                    projectType="Analytics & Reporting"
                    smallText=""
                    heading="Analytics & Reporting That Turns Data Into Decisions"
                    description="Track what matters, understand your performance, and make smarter marketing decisions with powerful analytics and transparent reporting."
                    imageSrc="/images/ai-content.png"
                    imageAlt="AI Strategy & Consulting - Turn AI Vision Into Measurable Business Impact"
                />
            </div>

            {/* What We Deliver Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px]">
                <WhyItMattersSection
                    title="What's Included"
                    items={[
                        {
                            heading: "Custom Marketing Dashboards",
                            description:
                                "",
                        },
                        {
                            heading: "Conversion Tracking Setup",
                            description:
                                "",
                        },
                        {
                            heading: "Cross-Channel Analytics",
                            description:
                                "",
                        },
                        {
                            heading: "User Behavior Analysis",
                            description:
                                "",
                        },
                        {
                            heading: "Performance Reports",
                            description:
                                "",
                        },
                        {
                            heading: "Data-Driven Insights",
                            description:
                                "",
                        },
                    ]}
                />
            </div>

            {/* High-Value Deliverable Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px] lg:mb-[100px] mb-[50px]">
                <FeaturesBlock
                    title="Results You Can Expect"
                    leftImage="/images/global-digital.png"
                    rightImage="/images/global-digital2.png"
                    leftImageAlt="AI Impact Infographic"
                    rightImageAlt="AI-Driven Business Conversion Blueprint"
                    features={[
                        {
                            title: "Clear Marketing Insights",
                            description:
                                "",
                        },
                        {
                            title: "Improved Campaign Performance",
                            description:
                                "",
                        },
                        {
                            title: "Higher ROI From Marketing",
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

