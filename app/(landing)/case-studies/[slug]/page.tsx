import PageBanner from "@/components/ui/PageBanner";
import Container from "@/components/ui/Container";
import CaseStudyDetailContent from "./CaseStudyDetailContent";
import { caseStudyData } from "../caseStudyData";

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudyData[slug];

  if (!caseStudy) {
    return (
      <div className=" text-white min-h-screen flex items-center justify-center">
        <Container>
          <h1 className="text-2xl font-semibold">Case Study Not Found</h1>
        </Container>
      </div>
    );
  }

  return (
    <>
      {/* Page Banner */}
      <div className="lg:mt-[160px] mt-[100px]">
        <PageBanner
          buttonText="Case Study Details"
          heading={caseStudy.title}
          subheading="Book a consultation or get in touch with our team."
        />
      </div>
      <CaseStudyDetailContent caseStudy={caseStudy} slug={slug} />
    </>
  );
}

