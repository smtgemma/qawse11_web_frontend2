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
                    buttonText="Explore Details"
                    heading="RAG Systems"
                    subheading="Retrieval-Augmented Generation Systems For Accurate, Secure Enterprise AI"
                />
            </div>

            {/* Get In Touch Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:mt-[180px] mt-[100px] overflow-hidden">
                <GetInTouchSection
                    smallText=""
                    heading="Reliable AI Powered By Source-Backed Knowledge"
                    description="RAG Systems Ensure AI Responses Are Grounded In Verified Data — Not Hallucinations."
                    imageSrc="/images/rag-systems.png"
                    imageAlt="RAG Systems - Source-Backed AI Knowledge"
                />
            </div>

            {/* Key Advantages Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px]">
                <WhyItMattersSection
                    title="Key Advantages"
                    items={[
                        {
                            heading: "Accurate answers with citations",
                            description:
                                "Every response is backed by real source documents, ensuring factual accuracy and full transparency.",
                        },
                        {
                            heading: "Secure internal document retrieval",
                            description:
                                "Access only approved files and knowledge, protected by enterprise-grade security and encryption.",
                        },
                        {
                            heading: "Reduced risks of misinformation",
                            description:
                                "RAG architecture minimizes hallucinations, delivering trustworthy information every time.",
                        },
                    ]}
                />
            </div>

            {/* Core Capabilities Section */}
            <div className="max-w-[1150px] w-[95%] mx-auto lg:my-[64px] my-[40px] lg:mb-[100px] mb-[50px]">
                <FeaturesBlock
                    title="Core Capabilities"
                    leftImage="/images/img5.png"
                    rightImage="/images/img6.png"
                    leftImageAlt="Knowledge Graph and AI Processing"
                    rightImageAlt="AI Knowledge Engine Architecture"
                    features={[
                        {
                            title: "Integration with SharePoint/Drive/Databases",
                            description:
                                "Seamlessly connect to your existing knowledge repositories for unified, searchable access to accurate organizational data.",
                        },
                        {
                            title: "Continuous knowledge updates",
                            description:
                                "Your AI stays up-to-date with automated content refreshes and real-time ingestion from approved knowledge sources.",
                        },
                        {
                            title: "Role-based access control",
                            description:
                                "Ensure strict governance by allowing users to access only the content they're authorized for, maintaining full compliance and security.",
                        },
                        {
                            title: "Auditability & Traceability",
                            description:
                                "Every retrieval and AI response is logged with source citations, enabling transparent auditing for compliance and regulatory requirements.",
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

