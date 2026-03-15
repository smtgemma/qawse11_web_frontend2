export const caseStudyData: Record<
  string,
  {
    title: string;
    image: string;
    description: string | string[];
    projectInfo: {
      client: string;
      date: string;
      location: string;
    };
    overview: string | string[];
    features: string[];
    relatedImages?: string[];
  }
> = {
  "e-commerce-revenue-surge": {
    title: "E-commerce Revenue Surge Case Study",
    image: "/images/E-commerce Revenue Surge.png",
    description: [
      "In today’s digital marketplace, e-commerce businesses are experiencing an unprecedented surge in revenue as more consumers turn to online shopping for convenience and variety.",
      "Leveraging data-driven marketing, personalized experiences, and streamlined checkout processes, companies are not only attracting new customers but also increasing repeat purchases.",
      "From targeted promotions to optimized product recommendations, every touchpoint contributes to higher conversion rates and sustained growth, positioning e-commerce as a dominant force in the global retail landscape.",
    ],
    projectInfo: {
      client: "Michel Miller",
      date: "17 Nov 2025",
      location: "42 Hangston, USA",
    },
    overview: [
      "The initiative focuses on boosting online sales through optimized marketing strategies, user experience enhancements, and data-driven decision-making.",
      "The project leverages advanced analytics, targeted campaigns, and streamlined checkout processes to increase conversion rates and overall revenue for e-commerce businesses.",
    ],
    features: [
      "Optimized Conversion Funnels",
      "Data-Driven Marketing",
      "Dynamic Pricing Strategies",
      "Enhanced User Experience",
      "Upselling & Cross-Selling Techniques",
      "Performance Tracking & Reporting",
    ],
    relatedImages: [
      "/images/E-commerce Revenue Surge1.png",
      "/images/E-commerce Revenue Surge2.png",
    ],
  },

  "saas-lead-generation": {
    title: "SaaS Lead Generation Case Study",
    image: "/images/SaaS Lead Generation.png",
    description: [
      "Generating qualified leads is one of the biggest challenges for SaaS companies operating in competitive markets. This case study highlights how a targeted lead generation strategy helped a SaaS brand attract high-quality prospects and increase product demo bookings.",
      "Through strategic paid advertising, conversion-optimized landing pages, and marketing automation, the company successfully built a scalable lead acquisition system.",
    ],
    projectInfo: {
      client: "Michel Miller",
      date: "17 Nov 2025",
      location: "42 Hangston, USA",
    },
    overview: [
      "The campaign focused on attracting decision-makers through targeted messaging and high-intent keywords. Landing pages were optimized for demo bookings, while marketing automation workflows nurtured leads through the sales funnel.",
      "As a result, the SaaS company experienced a significant increase in qualified leads, demo requests, and overall sales pipeline growth.",
    ],
    features: [
      "High-Intent Keyword Targeting",
      "Conversion-Focused Landing Pages",
      "Marketing Automation & CRM Integration",
      "Paid Search & LinkedIn Advertising",
      "Lead Qualification Funnels",
      "Analytics & Performance Optimization",
    ],
    relatedImages: [
      "/images/SaaS Lead Generation1.png",
      "/images/SaaS Lead Generation2.png",
    ],
  },
  "local-business-domination": {
    title: "Local Business Domination",
    image: "/images/Local Business Domination.png",
    description: [
      "Local businesses need strong digital visibility to compete effectively within their communities. This project focused on helping a regional business dominate local search results and attract more customers through location-focused marketing strategies.",
      "The strategy combined local SEO, reputation management, and targeted advertising to increase both online visibility and in-store visits.",
    ],
    projectInfo: {
      client: "Michel Miller",
      date: "17 Nov 2025",
      location: "42 Hangston, USA",
    },
    overview: [
      "The campaign improved the business’s online presence across search engines and local directories. By optimizing local keywords, improving Google Business listings, and encouraging positive customer reviews, the brand achieved higher rankings in local search results.",
      "These improvements led to increased phone inquiries, website visits, and foot traffic from nearby customers.",
    ],
    features: [
      "Local SEO Optimization",
      "Google Business Profile Management",
      "Customer Review Growth Strategy",
      "Geo-Targeted Advertising",
      "Local Content Marketing",
      "Performance Monitoring",
    ],
    relatedImages: [
      "/images/Local Business Domination1.png",
      "/images/Local Business Domination2.png",
    ],
  },
  "social-media-brand-growth": {
    title: "Social Media Brand Growth",
    image: "/images/Social Media Brand Growth.png",
    description: [
      "Building a strong brand presence on social media requires more than just posting content. This project focused on developing a strategic content ecosystem designed to increase engagement, grow followers, and strengthen brand authority.",
      "Through creative storytelling and targeted campaigns, the brand successfully expanded its digital audience and improved engagement across multiple social platforms.",
    ],
    projectInfo: {
      client: "Michel Miller",
      date: "17 Nov 2025",
      location: "42 Hangston, USA",
    },
    overview: [
      "The campaign combined organic content strategies with paid social campaigns to maximize reach and engagement. High-quality visual content, storytelling posts, and audience interaction strategies helped the brand build a loyal online community.",
      "As a result, the company experienced increased follower growth, stronger engagement rates, and improved brand recognition.",
    ],
    features: [
      "Strategic Content Planning",
      "Influencer Collaboration Campaigns",
      "Social Media Advertising",
      "Audience Engagement Strategies",
      "Performance Analytics & Optimization",
      "Community Building Initiatives",
    ],
    relatedImages: [
      "/images/Social Media Brand Growth1.png",
      "/images/Social Media Brand Growth2.png",
    ],
  },
  "data-driven-marketing-optimization": {
    title: "Data-Driven Marketing Optimization",
    image: "/images/Data-Driven Marketing Optimization.png",
    description: [
      "Modern marketing success depends on the ability to analyze data and continuously optimize campaigns. This project focused on building a powerful analytics framework to track performance across multiple channels and uncover actionable insights.",
      "By integrating advanced analytics tools and real-time dashboards, the marketing team was able to make faster, smarter decisions.",
    ],
    projectInfo: {
      client: "Michel Miller",
      date: "17 Nov 2025",
      location: "42 Hangston, USA",
    },
    overview: [
      "The project implemented a centralized analytics system that tracked marketing performance across paid ads, SEO, social media, and email campaigns. Real-time dashboards provided clear insights into campaign effectiveness and customer behavior.",
      "With these insights, the company continuously optimized its marketing strategies, resulting in improved ROI and stronger overall campaign performance.",
    ],
    features: [
      "Multi-Channel Performance Tracking",
      "Advanced Marketing Analytics",
      "Real-Time Reporting Dashboards",
      "Conversion Rate Optimization",
      "Campaign Performance Testing",
      "AI-Powered Marketing Insights",
    ],
    relatedImages: [
      "/images/Data-Driven Marketing Optimization1.png",
      "/images/Data-Driven Marketing Optimization2.png",
    ],
  },
  "email-marketing-revenue-boost": {
    title: "Email Marketing Revenue Boost",
    image: "/images/Email Marketing Revenue Boost.png",
    description: [
      "Email marketing remains one of the highest-ROI channels when implemented effectively. This project focused on creating automated email sequences designed to nurture leads, increase repeat purchases, and maximize customer lifetime value.",
      "Through segmentation and personalization, the brand was able to deliver highly relevant messages to the right audience at the right time.",
    ],
    projectInfo: {
      client: "Michel Miller",
      date: "17 Nov 2025",
      location: "42 Hangston, USA",
    },
    overview: [
      "The project implemented a full email marketing automation system, including welcome sequences, promotional campaigns, and re-engagement flows. By segmenting customers based on behavior and purchase history, the brand delivered more relevant messaging that drove higher engagement.",
      "This approach resulted in improved open rates, increased click-through rates, and significant revenue growth from email campaigns.",
    ],
    features: [
      "Automated Email Workflows",
      "Audience Segmentation",
      "Personalized Campaign Messaging",
      "Abandoned Cart Recovery",
      "A/B Testing & Optimization",
      "Detailed Performance Analytics",
    ],
    relatedImages: [
      "/images/Email Marketing Revenue Boost1.png",
      "/images/Email Marketing Revenue Boost2.png",
    ],
  },
};

