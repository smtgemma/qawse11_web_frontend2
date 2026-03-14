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
    overview: string;
    features: string[];
    content: {
      challenge: string | string[];
      solution: string;
      results: string[];
    };
    relatedImages?: string[];
  }
> = {
  "ai-workflow-automation": {
    title: "AI Workflow Automation Case Study",
    image: "/images/ai-workflow-automation.png",
    description: [
      "We are at the forefront of innovation, redefining how intelligence shapes the technology of tomorrow. Our focus is on building solutions that integrate artificial intelligence, machine learning, and next-generation technologies to transform industries and create smarter, more efficient systems.",
      "From predictive analytics and intelligent automation to adaptive algorithms and data-driven decision-making, our solutions empower businesses to stay ahead in a rapidly evolving world. With a commitment to pushing the boundaries of what's possible.",
      "With a commitment to pushing the boundaries of what's possible, we aim to create technology that doesn't just solve problems but anticipates needs, adapts to changes, and drives sustainable growth. Whether it's building smart applications, advancing IoT ecosystems, or leveraging AI for business insights, we deliver solutions that are intelligent, scalable, and future-ready. Join us in shaping the future.",
    ],
    projectInfo: {
      client: "Michel Miller",
      date: "17 Nov 2025",
      location: "42 Hangston, USA",
    },
    overview:
      "This project focused on implementing an end-to-end AI-driven workflow automation system to improve efficiency, scalability, and decision-making.",
    features: [
      "Analytics Explained",
      "Scalability and Adaptability",
      "Capacity Expansion",
      "AI-Driven Automation",
      "Key Deliverables",
      "Custom Technology Solutions",
    ],
    content: {
      challenge:
        "A global logistics company faced significant challenges in managing their complex supply chain operations. Manual processes led to delays, errors, and increased operational costs.",
      solution:
        "Dima360AI implemented an intelligent workflow automation system that integrated with existing ERP systems, enabling real-time tracking, automated decision-making, and predictive analytics for supply chain optimization.",
      results: [
        // "67% reduction in processing time",
        // "45% decrease in operational costs",
        // "99.2% accuracy in order fulfillment",
        // "Real-time visibility across all supply chain nodes",
      ],
    },
  },
  "ai-support-agent": {
    title: "AI Support Agent Case Study",
    image: "/images/ai-support-agent.png",
    description: [
      "At Dima360AI, we believe that AI-driven support solutions are the key to revolutionizing customer interactions. Our AI support agent offers businesses a smarter, more efficient way to handle customer queries and support requests.",
      "By integrating advanced AI technologies, we enable businesses to deliver faster, personalized, and more accurate responses, enhancing customer satisfaction and operational efficiency.",
      "The AI Support agent operates around the clock, ensuring that your customers can get help whenever they need it, without delays. Powered by natural language processing (NLP), the AI agent can instantly understand and respond to customer inquiries, reducing wait times and improving the overall experience.",
      "Through machine learning, the AI support agent learns from every interaction, providing personalized responses based on the customer’s history and preferences.",
      "Our AI support agent can communicate in multiple languages, making it ideal for global businesses with diverse customer bases. The AI system analyzes patterns and trends in customer interactions, offering valuable insights to improve business strategies and service offerings.",
    ],
    projectInfo: {
      client: "Michel Miller",
      date: "17 Nov 2025",
      location: "42 Hangston, USA",
    },
    overview:
      "This project focused on building an AI-powered, multilingual support agent to automate customer interactions while improving response accuracy and operational efficiency.",
    features: [
      "AI Integration",
      "AI Training",
      "Continuous Improvement",
    ],
    content: {
      challenge:
        "A leading e-commerce platform struggled with high customer support volume, leading to long wait times and decreased customer satisfaction.",
      solution:
        "We deployed an advanced AI support agent system capable of handling multiple customer queries simultaneously, understanding context, and providing accurate responses 24/7.",
      results: [
        // "80% of queries resolved automatically",
        // "90% customer satisfaction rate",
        // "24/7 availability without additional costs",
        // "50% reduction in support ticket volume",
      ],
    },
  },
  "predictive-sales-engine": {
    title: "Predictive Sales Engine Case Study",
    image: "/images/predictive-sales-engine.png",
    description: [
      "Dima360AI's Predictive Sales Engine uses AI-driven analytics to forecast demand, prioritize leads, and optimize sales performance. This AI-powered solution leverages advanced analytics and machine learning to help businesses forecast customer behavior, optimize sales strategies, and make smarter, data-driven decisions. By anticipating future sales trends and identifying high-value prospects, businesses can close deals faster and maximize revenue potential.",
      "The Predictive Sales Engine uses historical data, customer behavior, and market trends to predict future sales with high accuracy, allowing businesses to allocate resources efficiently and plan ahead. The AI system analyzes leads and assigns scores based on their likelihood to convert. This allows sales teams to focus their efforts on high-priority leads, increasing conversion rates and driving more revenue. The AI engine provides real-time insights into the sales pipeline, helping sales managers identify bottlenecks, optimize workflows, and ensure that leads are progressing smoothly through the sales cycle.",
    ],
    projectInfo: {
      client: "Michel Miller",
      date: "17 Nov 2025",
      location: "42 Hangston, USA",
    },
    overview:
      "This project delivers an AI-powered predictive sales engine designed to improve forecasting accuracy and sales efficiency. Our predictive sales engine combines the latest in machine learning, predictive analytics, and big data to empower your sales team with the tools they need to succeed.",
    features: [
      "Data Collection & Integration",
      "Machine Learning Algorithms",
      "Actionable Insights",
    ],
    content: {
      challenge:
        "A retail chain needed better sales forecasting to optimize inventory levels and reduce stockouts while minimizing overstock situations.",
      solution:
        "Dima360AI developed a predictive sales engine using machine learning algorithms that analyze historical data, market trends, and external factors to provide accurate sales forecasts.",
      results: [
        "Improved forecasting accuracy",
        "Increased sales efficiency",
        "Improved lead prioritization and conversion rates",
      ],
    },
  },
  "ai-integration": {
    title: "AI Integration Case Study",
    image: "/images/ai-integration.png",
    description: "The Organization Relied On Manual Workflows, Human-Driven Decision-Making, And Limited Scalability, Creating Operational Bottlenecks And Slower Growth.",
    projectInfo: {
      client: "Michel Miller",
      date: "17 Nov 2025",
      location: "42 Hangston, USA",
    },
    overview:
      "This Case Study Demonstrates How An Organization Successfully Integrated Artificial Intelligence (AI) Into Its Existing Business Operations To Improve Efficiency, Reduce Operational Costs, And Enhance Decision-Making. The Company Initiated The AI Integration",
    features: [
      "Key AI Capabilities",
      "Predictive Inventory Management",
      "AI-Powered Chatbot",
    ],
    content: {
      challenge:
        "A Fortune 500 company needed to integrate AI capabilities across multiple legacy systems without disrupting existing operations.",
      solution:
        "Our team designed and implemented a comprehensive AI integration strategy that seamlessly connected AI services with existing ERP, CRM, and data warehouse systems.",
      results: [
        "Boost operational efficiency",
        "Enhance customer experience through intelligent automation",
      ],
    },
  },
  "enterprise-workflow-automation": {
    title: "Enterprise Workflow Automation Case Study",
    image: "/images/enterprise-workflow-automation.png",
    description: "This case study highlights how enterprise workflow automation was implemented to replace manual and repetitive processes with automated, scalable workflows that improve efficiency, accuracy, and operational visibility.",
    projectInfo: {
      client: "Michel Miller",
      date: "17 Nov 2025",
      location: "42 Hangston, USA",
    },
    overview:
      "We designed an end-to-end workflow automation system that connects enterprise tools, automates repetitive tasks, and ensures consistent process execution across departments.",
    features: [
      "Rule-based workflow automation",
      "Cross-platform system integration",
      "Real-time monitoring dashboards",
      "Automated approvals and notifications",
    ],
    content: {
      challenge: [
        "Manual, time-consuming business processes",
        "Process delays and bottlenecks",
        "High operational cost",
        "Limited system connectivity",
        "Human-driven errors",
      ],
      solution:
        "We designed an end-to-end workflow automation system that connects enterprise tools, automates repetitive tasks, and ensures consistent process execution across departments.",
      results: [
        "60% faster approval processes",
        "70% reduction in manual tasks",
        "Improved compliance and audit trails",
        "Enhanced employee productivity",
      ],
    },
  },
  "ai-agents": {
    title: "AI Agents Case Study",
    image: "/images/ai-agents.png",
    description: "AI agents are intelligent systems designed to operate autonomously by analyzing data, making decisions, and executing tasks with minimal human intervention. In this project, AI agents were implemented to handle complex workflows, adapt to changing inputs, and collaborate across multiple systems. The solution enabled faster decision-making, improved accuracy, and scalable automation, allowing the organization to move from manual operations to intelligent, AI-driven processes.",
    projectInfo: {
      client: "Michel Miller",
      date: "17 Nov 2025",
      location: "42 Hangston, USA",
    },
    overview:
      "This Case Study Demonstrates How Intelligent AI Agents Were Deployed To Independently Analyze Data, Make Real-Time Decisions, And Execute Tasks Across Multiple Systems. The AI Agents Reduced Manual Intervention While Improving Accuracy And Operational Agility.",
    features: [
      "Autonomous Decision-Making Agents",
      "Natural Language Understanding",
      "Multi-Agent Collaboration",
      "Context-Aware Task Execution",
    ],
    content: {
      challenge:
        "A financial services company required intelligent agents to handle complex, multi-step processes that required decision-making and coordination across systems.",
      solution:
        "Dima360AI developed autonomous AI agents capable of understanding context, making decisions, and executing complex workflows independently while maintaining human oversight.",
      results: [
        "Reduced human dependency in workflows",
        "Faster and smarter decisions",
      ],
    },
  },
};

