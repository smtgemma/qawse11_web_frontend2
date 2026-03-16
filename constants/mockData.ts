import {
  AiIcon,
  ArrowBoardIcon,
  CareIcon,
  ChatBotIcon,
  CheckRoundIcon,
  CodeIcon,
  ConsultIcon,
  DataBaseIcon,
  DollarIcon,
  FinanceIcon,
  MarketIcon,
  OfficeIcon,
  PowerIcon,
  RevenueIcon,
  SaasIcon,
  ShippingIcon,
  ShoppingIcon,
  StateIcon,
  WorkFlowIcon,
  ZicZacArrowIcon,
} from "@/components/ui/Cicon";

export const solutionData = [
  {
    id: "paid-advertising",
    title: "Paid Advertising (PPC",
    icon: ChatBotIcon,
    link: "/services",
    features: [
      "Google Ads & Microsoft Ads management",
      "Social media advertising (Meta, TikTok, LinkedIn)",
      "Retargeting & conversion optimization",
    ],
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    icon: WorkFlowIcon,
    link: "/services/seo",
    features: [
      "Technical SEO audits & fixes",
      "Content strategy & link building",
      "Local SEO & Google Business optimization",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    icon: DataBaseIcon,
    link: "/services/social-media",
    features: [
      "Content creation & scheduling",
      "Community management",
      "Influencer partnerships",
    ],
  },
  {
    id: "Content Marketing",
    title: "Content Marketing",
    icon: CodeIcon,
    link: "/services/content-marketing",
    features: [
      "Blog posts & articles",
      "Video production & podcasts",
      "Lead magnets & email sequences",
    ],
  },
  {
    id: "Email Marketing",
    title: "Email Marketing",
    icon: AiIcon,
    link: "/services/email-marketing",
    features: [
      "Campaign strategy & design",
      "Marketing automation flows",
      "List segmentation & personalization",
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    icon: ConsultIcon,
    link: "/services/analytics",
    features: [
      "Custom dashboard setup",
      "Conversion tracking & attribution",
      "Monthly performance reviews",
    ],
  },
];

export const industryData = [
  {
    id: 1,
    title: "E-commerce",
    description: "Drive sales with targeted ads and conversion optimization",
    icon: ShoppingIcon,
  },
  {
    id: 2,
    title: "SaaS & Tech",
    description: "Generate qualified leads and reduce customer acquisition costs",
    icon: OfficeIcon,
  },
  {
    id: 3,
    title: "Professional Services",
    description: "Build authority and attract high-value clients",
    icon: MarketIcon,
  },
  {
    id: 4,
    title: "Healthcare",
    description: "HIPAA-compliant marketing that builds patient trust",
    icon: SaasIcon,
  },
  {
    id: 5,
    title: "Real Estate",
    description: "Generate buyer and seller leads at scale",
    icon: StateIcon,
  },
  {
    id: 6,
    title: "Local Businesses",
    description: "Dominate local search and drive foot traffic",
    icon: CareIcon,
  },
  {
    id: 7,
    title: "Finance",
    description: "Compliant campaigns that build trust and drive conversions",
    icon: ShippingIcon,
  },
  {
    id: 8,
    title: "Education",
    description: "Enrollment marketing and student acquisition strategies",
    icon: FinanceIcon,
  },
];

export const frameWorkData = [
  {
    id: "01",
    title: "Discovery",
    description: "Deep dive into your business, goals, audience, and competitive landscape.",
  },
  {
    id: "02",
    title: "Strategy",
    description:
      "Custom marketing roadmap with channel mix, messaging, and KPIs.",
  },
  {
    id: "03",
    title: "Creative",
    description:
      "Compelling ads, content, and landing pages that convert.",
  },
  {
    id: "04",
    title: "Launch",
    description: "Campaign deployment with precise targeting and tracking.",
  },
  {
    id: "05",
    title: "Optimize",
    description: "Continuous testing, learning, and improvement.",
  },
  {
    id: "06",
    title: "Scale",
    description: "Double down on winners and expand to new channels.",
  },
];

export const caseData = [
  {
    id: 1,
    slug: "e-commerce-revenue-surge",
    title: "E-commerce Revenue Surge",
    description: "Scaled ad spend 5x while maintaining a 4.2x ROAS for a DTC brand.",
    image: "/images/e-commerce.png",
  },
  {
    id: 2,
    slug: "saas-lead-generation",
    title: "SaaS Lead Generation",
    description:
      "Reduced cost per lead by 62% through funnel optimization",
    image: "/images/saas.png",
  },
  {
    id: 3,
    slug: "local-business-domination",
    title: "Local Business Domination",
    description: "Achieved #1 Google rankings for 47 target keywords.",
    image: "/images/business.png",
  },
];

export const impactData = [
  {
    id: 1,
    title: "Revenue Generated",
    value: "$47M+",
    description:
      "Total revenue driven for clients through digital campaigns",
    icon: RevenueIcon,
  },
  {
    id: 2,
    title: "Average ROAS",
    value: "312%",
    description: "Return on ad spend across paid media campaigns",
    icon: PowerIcon,
  },
  {
    id: 3,
    title: "Leads Generated",
    value: "2.4M+",
    description: "Qualified leads delivered through multi-channel campaigns",
    icon: DollarIcon,
  },
  {
    id: 4,
    title: "Client Retention",
    value: "89%",
    description: "Long-term partnerships built on consistent results",
    icon: ArrowBoardIcon,
  },
  {
    id: 5,
    title: "Campaigns Managed",
    value: "150+",
    description: "Active campaigns across all major platforms",
    icon: ZicZacArrowIcon,
  },
  {
    id: 6,
    title: "Uptime & Delivery",
    value: "99.2%",
    description: "Reliable campaign management and reporting",
    icon: CheckRoundIcon,
  },
];
