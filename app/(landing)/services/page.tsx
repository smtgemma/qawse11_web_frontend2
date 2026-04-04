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
            heading: "Google Ads (Search, Shopping, Display, YouTube)",
            description: "",
        },
        {
            icon: LightningIcon,
            heading: "Meta Ads (Facebook & Instagram)",
            description: "",
        },
        {
            icon: LightningIcon,
            heading: "LinkedIn Advertising",
            description: "",
        },
        {
            icon: LightningIcon,
            heading: "TikTok & Emerging Platforms",
            description: "",
        },
        {
            icon: LightningIcon,
            heading: "Retargeting & Remarketing",
            description: "",
        },
        {
            icon: LightningIcon,
            heading: "Landing Page Optimization",
            description: "",
        },
    ];

    const features = [
        {
            title: "Lower cost per acquisition",
            description: "",
        },
        {
            title: "Higher conversion rates",
            description: "",
        },
        {
            title: "Scalable, profitable campaigns",
            description: "",
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
                <GetInTouchSection projectType="Paid Advertising (PPC)" />
            </div>
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px]">
                <ValuePropositionSection items={valuePropositions} />
            </div>
            <div className="max-w-[1150px] w-[95%] mx-auto lg:mt-[64px] mt-[40px] lg:mb-[100px] mb-[50px]">
                <FeaturesBlock
                    title="Results You Can Expect"
                    leftImage="/images/services1.png"
                    rightImage="/images/services2.png"
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
                    secondaryButtonHref="/download-marketing-audit-checklist"
                />
            </div>
        </>
    );
}

