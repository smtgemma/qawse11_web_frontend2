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
                    buttonText="Our Services"
                    heading="Content Marketing"
                    subheading="Create valuable, engaging content that attracts your target audience, builds trust, and drives consistent traffic and conversions for your business."
                />
            </div>

            {/* Get In Touch Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:mt-[180px] mt-[100px] overflow-hidden">
                <GetInTouchSection
                    projectType="Content Marketing"
                    smallText=""
                    heading="Content That Converts"
                    description="Attract and engage your ideal customers with valuable content that builds trust and drives action."
                    imageSrc="/images/custom-ai-applications2.png"
                    imageAlt="Custom AI Applications - Purpose-Built AI Solutions"
                />
            </div>

            {/* What We Build Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px]">
                <WhyItMattersSection
                    title="What's Included"
                    items={[
                        {
                            heading: "Blog Posts & Articles",
                            description:
                                "",
                        },
                        {
                            heading: "Video Production",
                            description:
                                "",
                        },
                        {
                            heading: "Podcasts & Webinars",
                            description:
                                "",
                        },
                        {
                            heading: "Lead Magnets & Ebooks",
                            description:
                                "",
                        },
                        {
                            heading: "Case Studies & Testimonials",
                            description:
                                "",
                        },
                    ]}
                />
            </div>

            {/* Why Choose Us Section with Images */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px] lg:mb-[100px] mb-[50px]">
                <FeaturesBlock
                    title="Results You Can Expect"
                    leftImage="/images/AI.png"
                    rightImage="/images/global-content.png"
                    leftImageAlt="AI System Architecture"
                    rightImageAlt="Custom AI App Architecture"
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

