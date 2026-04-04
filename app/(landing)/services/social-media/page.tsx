"use client";

import PageBanner from "@/components/ui/PageBanner";
import GetInTouchSection from "@/components/ui/GetInTouchSection";
import WhyItMattersSection from "@/components/ui/WhyItMattersSection";
import FeaturesBlock from "@/components/ui/FeaturesBlock";
import CTASection from "@/components/ui/CTASection";

export default function RAGSystemsPage() {
    return (
        <>
            {/* Page Banner */}
            <div className="max-w-[1150px] mx-auto lg:mt-[160px] mt-[80px] lg:my-[100px] my-[50px]">
                <PageBanner
                    buttonText="Our Services"
                    heading="Social Media Marketing"
                    subheading="Build brand awareness and drive engagement with strategic social media marketing that turns followers into loyal customers."
                />
            </div>

            {/* Get In Touch Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:mt-[180px] mt-[100px] overflow-hidden">
                <GetInTouchSection
                    projectType="Social Media Marketing"
                    smallText=""
                    heading="Social Media That Builds Brands"
                    description="Connect with your audience where they spend their time. Build community, drive engagement, and turn followers into customers.."
                    imageSrc="/images/rag-systems2.png"
                    imageAlt="RAG Systems - Source-Backed AI Knowledge"
                />
            </div>

            {/* Key Advantages Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px]">
                <WhyItMattersSection
                    title="What's Included"
                    items={[
                        {
                            heading: "Content Strategy & Calendar",
                            description:
                                "",
                        },
                        {
                            heading: "Post Creation & Scheduling",
                            description:
                                "",
                        },
                        {
                            heading: "Community Management",
                            description:
                                "",
                        },
                        {
                            heading: "Influencer Partnerships",
                            description:
                                "",
                        },
                        {
                            heading: "Social Listening & Reporting",
                            description:
                                "",
                        },
                    ]}
                />
            </div>

            {/* Core Capabilities Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px] lg:mb-[100px] mb-[50px]">
                <FeaturesBlock
                    title="Results You Can Expect"
                    leftImage="/images/facebook.png"
                    rightImage="/images/social-media.png"
                    leftImageAlt="Knowledge Graph and AI Processing"
                    rightImageAlt="AI Knowledge Engine Architecture"
                    features={[
                        {
                            title: "Increased brand awareness and visibility",
                            description:
                                "",
                        },
                        {
                            title: "Higher engagement rates across platforms",
                            description:
                                "",
                        },
                        {
                            title: "More followers converting into loyal customers",
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

