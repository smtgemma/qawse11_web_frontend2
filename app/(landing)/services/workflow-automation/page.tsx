"use client";

import PageBanner from "@/components/ui/PageBanner";
import GetInTouchSection from "@/components/ui/GetInTouchSection";
import WhyItMattersSection from "@/components/ui/WhyItMattersSection";
import FeaturesBlock from "@/components/ui/FeaturesBlock";
import CTASection from "@/components/ui/CTASection";

export default function WorkflowAutomationPage() {
    const whyItMattersItems = [
        {
            heading: "Reduce operational costs",
            description:
                "Automate repetitive manual work to significantly lower labor expenses and optimize resource allocation.",
        },
        {
            heading: "Reduce errors while accelerating task execution for consistent operations.",
            description:
                "AI reduces human error while accelerating task completion for more reliable and consistent operations.",
        },
        {
            heading: "Improve employee productivity",
            description:
                "Free teams from routine tasks so they can focus on strategic, high-impact work that drives business growth.",
        },
    ];

    const whatWeDeliverFeatures = [
        {
            title: "AI-driven approval workflows",
            description:
                "Smart workflows automatically review, approve, and escalate requests with rule-based decision-making.",
        },
        {
            title: "Intelligent task routing",
            description:
                "Assign tasks to the right person or department automatically based on skill, priority, and workload.",
        },
        {
            title: "Real-time data syncing across CRM, ERP, and internal systems",
            description:
                "Deliver fast, accurate responses 24/7 in any language.",
        },
        {
            title: "Compliance & security built-in",
            description:
                "Enterprise-grade governance ensures data privacy, regulatory compliance, and secure operations at every step.",
        },
    ];

    return (
        <>
            {/* Page Banner */}
            <div className="max-w-[1150px] mx-auto lg:mt-[160px] mt-[80px] lg:my-[100px] my-[50px]">
                <PageBanner
                    buttonText="Explore Details"
                    heading="Workflow Automation"
                    subheading="Rule-Driven AI Workflows That Scale Securely Across Teams."
                />
            </div>

            {/* Get In Touch Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:mt-[180px] mt-[100px] overflow-hidden">
                <GetInTouchSection
                    smallText=""
                    heading="Remove Manual Work. Unlock Smart Automation."
                    description="Unify Systems, Eliminate Bottlenecks, And Deploy Rule-Driven AI Workflows That Scale With Your Business."
                    imageSrc="/images/workflow-automation.png"
                    imageAlt="Workflow Automation"
                />
            </div>

            {/* Why It Matters Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px]">
                <WhyItMattersSection
                    title="Why It Matters"
                    items={whyItMattersItems}
                />
            </div>

            {/* What We Deliver Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px] lg:mb-[100px] mb-[50px]">
                <FeaturesBlock
                    title="What We Deliver"
                    leftImage="/images/img3.png"
                    rightImage="/images/img4.png"
                    leftImageAlt="3D Robot Automation Illustration"
                    rightImageAlt="Smart Workflow Automation Schematic"
                    features={whatWeDeliverFeatures}
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

