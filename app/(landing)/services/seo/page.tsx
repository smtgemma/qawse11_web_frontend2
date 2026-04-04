"use client";

import PageBanner from "@/components/ui/PageBanner";
import GetInTouchSection from "@/components/ui/GetInTouchSection";
import WhyItMattersSection from "@/components/ui/WhyItMattersSection";
import FeaturesBlock from "@/components/ui/FeaturesBlock";
import CTASection from "@/components/ui/CTASection";

export default function WorkflowAutomationPage() {
    const whyItMattersItems = [
        {
            heading: "Technical SEO Audit & Implementation",
            description:
                "",
        },
        {
            heading: "Keyword Research & Strategy",
            description:
                "",
        },
        {
            heading: "On-Page Optimization",
            description:
                "",
        },
        {
            heading: "Content Strategy & Creation",
            description:
                "",
        },
        {
            heading: "Link Building & Digital PR",
            description:
                "",
        },
        {
            heading: "Local SEO & Google Business Profile",
            description:
                "",
        },
    ];

    const whatWeDeliverFeatures = [
        {
            title: "Higher search rankings",
            description:
                "",
        },
        {
            title: "Increased organic traffic",
            description:
                "",
        },
        {
            title: "More qualified leads",
            description:
                "",
        },
    ];

    return (
        <>
            {/* Page Banner */}
            <div className="max-w-[1150px] mx-auto lg:mt-[160px] mt-[80px] lg:my-[100px] my-[50px]">
                <PageBanner
                    buttonText="Our Services"
                    heading="Search Engine Optimization (SEO)"
                    subheading="Drive sustainable growth with data-driven SEO strategies that improve search rankings, increase organic traffic, and connect your business with high-intent customers."
                />
            </div>

            {/* Get In Touch Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:mt-[180px] mt-[100px] overflow-hidden">
                <GetInTouchSection
                    projectType="Search Engine Optimization (SEO)"
                    smallText=""
                    heading="SEO That Drives Organic Growth"
                    description="Rank higher, get found, and build sustainable organic traffic that compounds over time.."
                    imageSrc="/images/workflow-automation2.png"
                    imageAlt="Workflow Automation"
                />
            </div>

            {/* Why It Matters Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px]">
                <WhyItMattersSection
                    title="What's Included"
                    items={whyItMattersItems}
                />
            </div>

            {/* What We Deliver Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px] lg:mb-[100px] mb-[50px]">
                <FeaturesBlock
                    title="Results You Can Expect"
                    leftImage="/images/seo1.png"
                    rightImage="/images/twopc.png"
                    leftImageAlt="3D Robot Automation Illustration"
                    rightImageAlt="Smart Workflow Automation Schematic"
                    features={whatWeDeliverFeatures}
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

