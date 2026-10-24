export interface Certification {
  id: string;
  name: string;
  code: string;
  issuer: string;
  badgeUrl: string;
  verifyUrl: string;
  skills: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  domain: string;
  category: 'pharma' | 'automobile' | 'insurance' | 'material-handling' | 'ga-products';
  description: string;
  impactMetrics: string[];
  techStack: string[];
  highlights: string[];
  architectureTag?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  rating?: string;
  areas: {
    title: string;
    points: string[];
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  highlight: string;
  medal: string;
  medalType: 'bronze' | 'chancellor';
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Shivani Gupta",
    role: "Data Engineer and Analyst",
    currentCompany: "Kanerika Inc.",
    experienceYears: "2+",
    email: "shivani282gupta@gmail.com",
    phone: "+91-6388574069",
    linkedin: "https://www.linkedin.com/in/shivani-gupta2000/",
    github: "https://github.com/Shivu-2000",
    location: "India",
    headline: "Data Engineer and Analyst specializing in Databricks, Fabric, Snowflake & Power BI",
    summary:
      "Data Engineer and Analyst with 2+ years delivering enterprise-scale data platforms, ETL/ELT pipelines, and advanced analytics solutions across Pharma, Automobile, Group Captive Insurance, Material Handling, and Products in GA. Core tech stack in Databricks, Microsoft Fabric, Snowflake, and Power BI. Solution designer for two GA data products on Microsoft Fabric. Recognized Microsoft Power BI Community Super User, external Microsoft XIAD trainer, and mentor to ~20 engineers. Holds 7 industry certifications.",
    domains: [
      { name: "Pharma", desc: "300B+ clinical & prescription records on Fabric & Databricks" },
      { name: "Automobile", desc: "Enterprise telemetry & manufacturing supply chain analytics" },
      { name: "Group Captive Insurance", desc: "Shared services analytics, risk models & policy reconciliation" },
      { name: "Material Handling", desc: "20M+ records Medallion TDW & ML Work Order Classification" },
      { name: "Products in GA", desc: "Solution designer for 2 GA software products on Microsoft Fabric" },
    ],
    highlightedStack: [
      {
        name: "Databricks",
        tag: "Certified Professional",
        color: "from-orange-500 to-red-600",
        borderColor: "border-orange-500/40",
        bgLight: "bg-orange-50",
        textLight: "text-orange-700",
        description: "PySpark, Spark SQL, Unity Catalog, Delta Lake, Delta Live Tables & distributed cluster tuning",
      },
      {
        name: "Microsoft Fabric",
        tag: "DP-700 & DP-600 Certified",
        color: "from-blue-600 to-cyan-500",
        borderColor: "border-blue-500/40",
        bgLight: "bg-blue-50",
        textLight: "text-blue-700",
        description: "Fabric Lakehouse, Dataflows Gen2, DirectLake, Fabric Pipelines, Semantic Models, 2 GA Products",
      },
      {
        name: "Snowflake",
        tag: "SnowPro Advanced DE",
        color: "from-cyan-500 to-sky-600",
        borderColor: "border-cyan-500/40",
        bgLight: "bg-cyan-50",
        textLight: "text-cyan-700",
        description: "Snowflake Data Cloud, SnowSQL, Virtual Warehouses, Zero-Copy Clone, Streams & Tasks, Data Sharing",
      },
      {
        name: "Power BI",
        tag: "Community Super User",
        color: "from-amber-500 to-yellow-600",
        borderColor: "border-amber-500/40",
        bgLight: "bg-amber-50",
        textLight: "text-amber-700",
        description: "Advanced DAX, 100+ Semantic Models, Paginated Reports, DirectLake sub-second query, automated RLS",
      },
    ],
  },

  stats: [
    { label: "Records Processed", value: "300B+", detail: "Incremental enterprise ingestion in Pharma & Healthcare" },
    { label: "Industry Certifications", value: "7", detail: "Microsoft, Databricks & Snowflake Certified" },
    { label: "Products in GA", value: "2", detail: "Designed & launched on Microsoft Fabric Marketplace" },
    { label: "Power BI & Paginated Reports", value: "100+", detail: "With automated writeback & RLS governance" },
    { label: "Engineers Mentored", value: "20+", detail: "Databricks, Snowflake & Fabric trainees" },
    { label: "Performance Rating", value: "9/10", detail: "Consistently recognized for technical leadership" },
  ],

  certifications: [
    {
      id: "dp-700",
      name: "Fabric Data Engineer Associate",
      code: "DP-700",
      issuer: "Microsoft",
      verifyUrl: "https://learn.microsoft.com/en-us/users/01001464/credentials/certification/fabric-data-engineer-associate?tab=credentials-tab",
      skills: ["Fabric Lakehouse", "Dataflows Gen2", "Notebooks", "Pipelines", "Delta Lake"],
      color: "from-blue-600 to-cyan-500",
      badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    },
    {
      id: "dp-600",
      name: "Fabric Analytics Engineer Associate",
      code: "DP-600",
      issuer: "Microsoft",
      verifyUrl: "https://learn.microsoft.com/en-us/users/01001464/credentials/certification/fabric-analytics-engineer-associate?tab=credentials-tab",
      skills: ["DirectLake", "DAX", "Semantic Models", "Power BI", "Data Warehousing"],
      color: "from-cyan-600 to-teal-400",
      badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    },
    {
      id: "pl-300",
      name: "Power BI Data Analyst Associate",
      code: "PL-300",
      issuer: "Microsoft",
      verifyUrl: "https://learn.microsoft.com/en-us/users/01001464/credentials/certification/data-analyst-associate?tab=credentials-tab",
      skills: ["Power BI", "Advanced DAX", "Time Intelligence", "RLS", "Paginated Reports"],
      color: "from-amber-600 to-yellow-400",
      badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    },
    {
      id: "az-204",
      name: "Azure Developer Associate",
      code: "AZ-204",
      issuer: "Microsoft",
      verifyUrl: "https://learn.microsoft.com/en-us/users/01001464/credentials/certification/azure-developer?tab=credentials-tab",
      skills: ["Azure AD", "Azure DevOps CI/CD", "REST APIs", "Microsoft Graph API", "Azure SQL"],
      color: "from-sky-600 to-indigo-500",
      badgeUrl: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    },
    {
      id: "databricks-pro",
      name: "Databricks Certified Data Engineer Professional",
      code: "DE-PRO",
      issuer: "Databricks",
      verifyUrl: "https://credentials.databricks.com/d43a3f8e-a606-4641-8c64-e98695820a11#acc.6fRr5b3P",
      skills: ["PySpark", "Unity Catalog", "Delta Live Tables", "Medallion Arch", "Structured Streaming"],
      color: "from-orange-600 to-red-500",
      badgeUrl: "https://images.credly.com/size/340x340/images/e6f21226-eb52-4745-93df-c148c34ea8ea/Databricks_Certified_Data_Engineer_Professional.png",
    },
    {
      id: "snowpro-core",
      name: "SnowPro Core Certification",
      code: "COF-C02",
      issuer: "Snowflake",
      verifyUrl: "https://achieve.snowflake.com/3655bd1e-2444-4f57-8946-7801aab2c09a#acc.jpvyMCNI",
      skills: ["Snowflake Data Cloud", "SnowSQL", "Virtual Warehouses", "Time Travel", "Zero-Copy Clone"],
      color: "from-cyan-500 to-blue-600",
      badgeUrl: "https://images.credly.com/size/340x340/images/229ef58b-3bbd-4e00-8456-e918c5ba9db8/SnowPro-Core-Certification.png",
    },
    {
      id: "snowpro-adv",
      name: "SnowPro Advanced: Data Engineer",
      code: "DEA-C01",
      issuer: "Snowflake",
      verifyUrl: "https://achieve.snowflake.com/3f93e55e-c8c2-42ee-bce5-a81b8a697441#acc.q4mMTjVf",
      skills: ["Streams & Tasks", "Snowpipe", "Advanced SQL", "Data Modeling", "Performance Tuning"],
      color: "from-violet-600 to-purple-500",
      badgeUrl: "https://images.credly.com/size/340x340/images/56910793-6b94-432a-bc97-2a5b6c23a636/SnowPro-Advanced-Data-Engineer-Certification.png",
    },
  ],

  projects: [
    {
      id: "pharma-lakehouse",
      title: "Enterprise Fabric & Databricks Analytics Platform",
      client: "US Pharma & Healthcare Enterprise",
      domain: "Pharma",
      category: "pharma",
      description:
        "Engineered an enterprise Lakehouse on Microsoft Fabric and Azure Databricks processing 300 Billion+ records incrementally across 6+ disparate clinical, pharmaceutical, and prescription sources.",
      impactMetrics: [
        "300B+ Records processed incrementally",
        "Galaxy Schema with 100+ tables",
        "100+ Power BI reports with writeback",
      ],
      techStack: ["Databricks", "Microsoft Fabric", "PySpark", "Power BI", "SAP", "DAX", "SCD Type 2/3"],
      highlights: [
        "Architected SCD Type 2/3 automated pipelines preserving historical audit compliance for pharma regulations.",
        "Engineered Galaxy Schema supporting cross-department analytics across Commercial, Finance, and Supply Chain.",
        "Consolidated 8-9 normalized SAP BID/Proforma tables into a single high-performance model.",
      ],
      architectureTag: "Pharma Medallion Lakehouse",
    },
    {
      id: "automobile-telemetry",
      title: "Automotive Connected Fleet & Telemetry Analytics",
      client: "Global Automobile & Manufacturing Org",
      domain: "Automobile",
      category: "automobile",
      description:
        "Architected end-to-end streaming data ingestion and analytics on Databricks and Microsoft Fabric for automotive telemetry, vehicle diagnostics, and assembly-line metrics.",
      impactMetrics: [
        "Sub-minute vehicle telemetry stream processing",
        "Predictive maintenance & parts tracking",
        "Power BI executive operational cockpits",
      ],
      techStack: ["Databricks", "Microsoft Fabric", "PySpark", "Delta Lake", "Power BI", "SQL"],
      highlights: [
        "Engineered scalable PySpark and Spark SQL pipelines ingesting sensor events and vehicle diagnostic trouble codes (DTC).",
        "Built Medallion Architecture data assets enabling automotive reliability engineering and supply-chain visibility.",
        "Implemented automated data governance with Unity Catalog and fine-grained RLS access control.",
      ],
      architectureTag: "Automobile Telemetry & Lakehouse",
    },
    {
      id: "group-captive-insurance",
      title: "Group Captive Insurance Shared Services Analytics",
      client: "Group Captive Insurance & Risk Provider",
      domain: "Group Captive Insurance",
      category: "insurance",
      description:
        "Engineered Silver and Gold layer data assets across four heterogeneous sources, designing Fact and Dimension structures as the lead technical decision-maker for group captive insurance.",
      impactMetrics: [
        "4 Heterogeneous core insurance sources unified",
        "Single source of truth via Shortcut Lakehouses",
        "Fuzzy logic policyholder reconciliation",
      ],
      techStack: ["Microsoft Fabric", "Snowflake", "SQL", "Power BI", "Delta Lake", "DAX"],
      highlights: [
        "Acted as primary technical decision-maker for insurance actuarial modeling and dimensional schema design.",
        "Built fuzzy logic address-matching algorithms to reconcile group captive policyholder records across disparate datasets.",
        "Designed executive loss-run and claims dashboards in Power BI with dynamic DAX time intelligence.",
      ],
      architectureTag: "Group Captive Gold Assets",
    },
    {
      id: "material-handling-tdw",
      title: "Analytics Modernization & Material TDW",
      client: "US Material Handling Organization",
      domain: "Material Handling",
      category: "material-handling",
      description:
        "Modernized traditional DW into a dynamic Medallion Architecture Lakehouse on Microsoft Fabric and Databricks with 20M+ records and automated ML classification.",
      impactMetrics: [
        "20M+ records processed daily",
        "20+ Power BI reports with writeback",
        "Automated ML Work Order Classification",
      ],
      techStack: ["Databricks", "Microsoft Fabric", "PySpark", "Power BI", "DAX", "Power Automate", "Python ML"],
      highlights: [
        "Implemented metadata-driven ingestion that eliminated manual pipeline modifications.",
        "Trained and deployed a Python ML model for Work Order Classification reducing operational triage time.",
        "Migrated legacy Crystal Reports to interactive Power BI dashboards with automated executive PDF distribution.",
      ],
      architectureTag: "Metadata Ingestion & ML",
    },
    {
      id: "azure-fabric-migration-tool",
      title: "Azure-to-Fabric Pipeline Migration Tool",
      client: "Product Engineering (GA on Fabric Marketplace)",
      domain: "Products in GA",
      category: "ga-products",
      description:
        "Solution designer for a Generally Available (GA) product on Microsoft Fabric Marketplace that migrates ADF, Synapse, and Databricks pipelines to Fabric-native constructs.",
      impactMetrics: [
        "GA Listed on Microsoft Fabric Marketplace",
        "Zero-loss data lineage preservation",
        "Automates weeks of manual migration effort",
      ],
      techStack: ["Microsoft Fabric", "Databricks", "ADF", "Python", "Azure DevOps CI/CD", "REST APIs"],
      highlights: [
        "Collaborated with Microsoft product engineers to define Fabric workload migration standards.",
        "Built automated translation engine converting legacy ADF & Synapse JSON pipelines to Dataflows Gen2 and Fabric Notebooks.",
        "Preserved full governance lineage and security mapping during transit.",
      ],
      architectureTag: "Marketplace GA Product",
    },
    {
      id: "karl-insight-agent",
      title: "KARL - AI Insight Agent",
      client: "Enterprise Product Innovation (GA)",
      domain: "Products in GA",
      category: "ga-products",
      description:
        "Designed and implemented KARL, an AI-powered conversational insight agent deployed directly on Microsoft Fabric for natural language querying over enterprise lakehouses.",
      impactMetrics: [
        "Natural language to SQL & DAX conversion",
        "Sub-second semantic layer response",
        "Direct integration with Microsoft Fabric endpoints",
      ],
      techStack: ["Microsoft Fabric", "Power BI", "Azure AI", "Python", "Prompt Engineering"],
      highlights: [
        "Architected context-aware semantic query generation translating executive natural language into validated Lakehouse queries.",
        "Implemented strict RLS and governance filters so AI responses adhere to user access boundaries.",
      ],
      architectureTag: "Fabric AI Agent [GA]",
    },
  ] as Project[],

  experience: [
    {
      company: "Kanerika Inc.",
      role: "Data Engineer and Analyst",
      period: "Jan 2024 - Present",
      location: "India",
      rating: "9/10 Annual Performance Rating",
      areas: [
        {
          title: "Data Platform & Lakehouse Engineering",
          points: [
            "Architected Lakehouse solutions on Databricks, Snowflake, and Microsoft Fabric across Pharma, Automobile, Group Captive Insurance, and Material Handling domains.",
            "Processed 300B+ records incrementally in Pharma & Healthcare and 20M+ in Material Handling across 6+ enterprise sources.",
            "Built metadata-driven orchestration frameworks using Fabric Pipelines and Notebook activities enabling fully automated zero-touch ingestion.",
            "Engineered PySpark, Spark SQL, and Scala ETL pipelines with SCD Type 2/3, Galaxy Schema (100+ tables), and Medallion Architecture (Bronze -> Silver -> Gold).",
            "Consolidated 8-9 normalized SAP BID/Proforma tables into a single optimized model; implemented fuzzy logic address matching to reconcile records.",
          ],
        },
        {
          title: "BI, Analytics & Enterprise Governance",
          points: [
            "Developed enterprise Power BI semantic models with advanced DAX, time intelligence, and dynamic calculations; maintained 100+ reports.",
            "Implemented scalable automated Row-Level Security (RLS) via Azure AD and Power Automate.",
            "Designed silver and gold layer views with consistent transformation logic and Medallion Architecture standards.",
            "Built a Python ML model for Work Order Classification reducing manual operations triage effort.",
          ],
        },
        {
          title: "Product Design, Community & Mentorship",
          points: [
            "Solution designer for two GA data products: Azure-to-Fabric Pipeline Migration Tool (Microsoft Fabric marketplace) and KARL Insight Agent.",
            "Collaborated directly with Microsoft engineers to establish Fabric workload development standards.",
            "Mentored ~20 engineers across Databricks, Snowflake, and Fabric ecosystems.",
            "Recognized Microsoft Power BI Community Super User and external Microsoft XIAD trainer (DIAD, FAIAD, RTIAD).",
          ],
        },
      ],
    },
  ],

  skills: {
    core: [
      { name: "Databricks", level: 98, icon: "Cpu", highlight: "Certified Pro, PySpark, Unity Catalog, Delta Lake" },
      { name: "Microsoft Fabric", level: 98, icon: "Database", highlight: "DP-700 & DP-600 Certified, 2 GA Products, DirectLake" },
      { name: "Snowflake", level: 96, icon: "Snowflake", highlight: "SnowPro Advanced Data Engineer, SnowSQL, Warehouses" },
      { name: "Power BI", level: 98, icon: "BarChart3", highlight: "Community Super User, Advanced DAX, 100+ Reports" },
      { name: "Apache Spark & PySpark", level: 96, icon: "Flame", highlight: "300B+ records processing" },
      { name: "SQL & Spark SQL", level: 98, icon: "Code", highlight: "Complex SCD 2/3 & Galaxy Schemas" },
      { name: "Python & Scala", level: 92, icon: "Terminal", highlight: "ETL, ML Classification & Automation" },
      { name: "Azure Data Factory (ADF)", level: 95, icon: "Layers", highlight: "Metadata orchestration pipelines" },
    ],
    platforms: [
      "Databricks Lakehouse",
      "Microsoft Fabric Lakehouse",
      "Snowflake Data Cloud",
      "Delta Lake",
      "Unity Catalog",
      "SCD Type 2/3",
      "Medallion Architecture",
      "Azure Synapse Analytics",
      "ADLS Gen2",
      "Kafka",
      "Airflow",
      "dbt",
    ],
    governance: [
      "Row-Level Security (RLS)",
      "Azure Active Directory / Entra",
      "Databricks Unity Catalog",
      "Microsoft Purview",
      "Data Lineage Preservation",
      "Metadata Management",
      "Galaxy & Star Schema",
      "Data Quality Auditing",
    ],
    bi: [
      "Power BI Semantic Models",
      "Advanced DAX & Time Intelligence",
      "DirectLake Querying",
      "Paginated Reports",
      "Power Automate",
      "Tableau",
      "PostgreSQL",
      "Azure SQL",
    ],
    aiDevOps: [
      "Prompt Engineering",
      "KARL Insight Agent",
      "GitHub Copilot",
      "Claude AI & Gemini",
      "Azure DevOps CI/CD",
      "REST APIs & Microsoft Graph API",
      "Git & Gitflow",
    ],
  },

  education: [
    {
      institution: "National Institute of Technology, Raipur",
      degree: "Master of Computer Applications (MCA)",
      period: "2021 - 2024",
      location: "Chhattisgarh, India",
      highlight: "Awarded Bronze Medal for outstanding academic rank across the Master of Computer Applications (MCA) cohort at National Institute of Technology (NIT Raipur) — an Institute of National Importance.",
      medal: "Bronze Medalist (MCA)",
      medalType: "bronze",
    },
    {
      institution: "Bundelkhand University",
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2018 - 2021",
      location: "Jhansi, India",
      highlight: "Conferred the prestigious Chancellor's Medal (Top University Rank 1) for highest academic distinction across the Bachelor of Computer Applications (BCA) program.",
      medal: "Chancellor's Medal Holder (Rank 1)",
      medalType: "chancellor",
    },
  ] as EducationItem[],

  medallionSteps: [
    {
      layer: "Bronze",
      name: "Raw Ingestion",
      color: "from-amber-600/30 to-amber-900/10 border-amber-500/30",
      accent: "text-amber-500 dark:text-amber-400",
      description: "Append-only raw landing zone from 6+ enterprise sources across Pharma, Automobile, and Manufacturing.",
      features: ["Schema on Read", "Immutable History", "High-throughput Streaming", "Metadata Ingestion"],
    },
    {
      layer: "Silver",
      name: "Enriched & Cleansed",
      color: "from-slate-400/30 to-slate-800/10 border-cyan-500/30",
      accent: "text-cyan-600 dark:text-cyan-400",
      description: "Validated, deduplicated, and conformed data with SCD Type 2/3 dimensions and fuzzy logic matching for insurance & pharma.",
      features: ["Delta Parquet", "Data Quality Rules", "Fuzzy Reconciliation", "SCD Type 2/3 Tracking"],
    },
    {
      layer: "Gold",
      name: "Curated & Aggregated",
      color: "from-yellow-500/30 to-amber-600/10 border-yellow-500/30",
      accent: "text-yellow-600 dark:text-yellow-400",
      description: "Business-ready Galaxy & Star schema supporting 100+ enterprise Power BI semantic models and ML classification.",
      features: ["Galaxy Schema (100+ tables)", "DirectLake Connectivity", "Strict RLS Governance", "Sub-second Analytics"],
    },
  ],
};
