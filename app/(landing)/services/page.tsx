"use client";

import PageBanner from "@/components/ui/PageBanner";
import GetInTouchSection from "@/components/ui/GetInTouchSection";
import ValuePropositionSection from "@/components/ui/ValuePropositionSection";
import FeaturesBlock from "@/components/ui/FeaturesBlock";
import {
    LightningIcon,
    TrendingUpIcon,
    ShieldIcon,
} from "@/components/ui/Cicon";
import CTASection from "@/components/ui/CTASection";

export default function ServicesPage() {
    const valuePropositions = [
        {
            icon: LightningIcon,
            heading: "Automate Support At Scale",
            description: "24/7 multilingual responses in any channel.",
        },
        {
            icon: TrendingUpIcon,
            heading: "Internal Productivity Boost",
            description: "Automate HR, IT, and workflow approvals.",
        },
        {
            icon: ShieldIcon,
            heading: "Enterprise-Grade Personalization",
            description: "AI tuned to your tone, rules, and security needs.",
        },
    ];

    const features = [
        {
            title: "Multi-Channel Support",
            description: "Deploy on web, mobile, SMS, WhatsApp, Slack, and more.",
        },
        {
            title: "Secure Retrieval (RAG)",
            description: "Agents provide accurate answers based on your private data.",
        },
        {
            title: "Custom Personality & Tone",
            description: "Tailored to your brand voice and compliance rules.",
        },
        {
            title: "Human-Like Conversations",
            description: "Natural language understanding with memory.",
        },
        {
            title: "Workflow Automation",
            description: "Automate tickets, approvals, IT support, and HR processes.",
        },
        {
            title: "Continuous Learning",
            description: "Agents improve automatically using real interaction data.",
        },
    ];

    return (
        <>
            {/* Page Banner */}
            <div className="max-w-[1150px] mx-auto lg:mt-[160px] mt-[80px] lg:my-[100px] my-[50px]">
                <PageBanner
                    buttonText="Our Services"
                    heading="Paid Advertising (PPC)"
                    subheading="Drive immediate traffic and measurable growth with data-driven PPC campaigns that target the right audience and maximize your return on ad spend."
                />
            </div>

            {/* Features Block Section */}

            {/* Get In Touch Section */}
            <div className="lg:mt-[180px] lg:mb-[64px] mb-[40px] mt-[100px] max-w-[1150px] w-[95%] mx-auto">
                <GetInTouchSection />
            </div>
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px]">
                <ValuePropositionSection items={valuePropositions} />
            </div>
            <div className="max-w-[1150px] w-[95%] mx-auto lg:mt-[64px] mt-[40px] lg:mb-[100px] mb-[50px]">
                <FeaturesBlock
                    title="Features Block"
                    leftImage="/images/img1.png"
                    rightImage="/images/img2.png"
                    leftImageAlt="AI Assistant analyzing market data"
                    rightImageAlt="Neural network workflow automation"
                    features={features}
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
                    secondaryButtonHref="/ai-roadmap"
                />
            </div>
        </>
    );
}

