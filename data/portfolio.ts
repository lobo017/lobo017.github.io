export const experienceItems = [
  {
    role: "Service Desk Analyst",
    company: "University of Texas at Dallas — Office of Information Technology",
    period: "Aug 2025 – Present",
    bullets: [
      "Diagnose authentication failures, account provisioning errors, and permission conflicts across a 30,000+ user identity management system",
      "Script diagnostic checks in Python to identify configuration drift — performing root-cause analysis instead of applying temporary fixes",
      "Document recurring failure patterns to build institutional knowledge and reduce repeat ticket volume over time",
    ],
  },
  {
    role: "Interconnection Intern",
    company: "EDP Renewables North America",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Automated manual reporting workflows with Python scripts and structured data pipelines, reducing report turnaround time by ~30% and eliminating recurring human error",
      "Ingested and transformed grid interconnection data to build performance dashboards surfacing bottlenecks across distributed energy assets",
      "Structured previously ad-hoc data flows, enabling faster identification of compliance risks and interconnection delays",
    ],
  },
  {
    role: "Operations Manager / Analyst Intern",
    company: "Prime Communications (AT&T Authorized Retailer)",
    period: "May 2023 – Aug 2023",
    bullets: [
      "Managed day-to-day retail operations — inventory coordination, issue escalation, and staff oversight — in a high-volume environment",
      "Translated complex device configurations and service plan constraints into clear, actionable customer guidance",
      "Consistently met sales performance targets while maintaining operational quality under time pressure",
    ],
  },
];

export const projects = [
  {
    title: 'MetaCrawler',
    status: 'Active',
    problem: 'Online research returns too much noise — relevant sources get buried under irrelevant results.',
    contribution: 'Designed a Python-based crawling engine that ingests web pages, transforms raw HTML into structured documents, and uses NLP to categorize and rank results by relevance.',
    architecture: 'Crawler → HTML parser → NLP scoring → structured storage',
    outcome: 'Automates research workflows by replacing manual browsing with structured data ingestion and relevance scoring.',
    link: 'https://github.com/lobo017/MetaCrawler',
    tags: ['Python', 'NLP', 'Data Ingestion', 'Microservices'],
  },
  {
    title: 'RoleRank',
    status: 'In Progress',
    problem: 'Qualified candidates get filtered out by keyword-matching ATS algorithms every day.',
    contribution: 'Built a Python pipeline that parses resumes and job descriptions, compares them via an LLM, and outputs structured gap analysis with actionable suggestions.',
    architecture: 'Document parser → LLM comparison → gap scorer → feedback generator',
    outcome: 'Automates resume-to-JD alignment analysis to help candidates improve ATS pass-through rates.',
    link: 'https://github.com/lobo017/RoleRank',
    tags: ['Python', 'LLM', 'Text Parsing', 'Automation'],
  },
  {
    title: 'Circadian Lens',
    status: 'In Progress',
    problem: 'No easy way to visualize how sleep quality correlates with cognitive performance across time.',
    contribution: 'Built a Python data pipeline that ingests behavioral data, cleans and transforms it, and renders interactive visualizations mapping rest patterns to next-day output.',
    architecture: 'Data ingestion → cleaning/transform → statistical analysis → dashboard',
    outcome: 'Transforms raw personal data into structured, explorable dashboards for identifying performance patterns.',
    link: 'https://github.com/lobo017/CircadianLens',
    tags: ['Python', 'Data Transformation', 'Visualization'],
  },
];

export const skillCategories = [
  {
    label: 'Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Go', 'Java'],
  },
  {
    label: 'Backend & Data',
    skills: ['PostgreSQL', 'MongoDB', 'Node.js', 'REST APIs'],
  },
  {
    label: 'Infra & Tools',
    skills: ['Docker', 'Git', 'Linux'],
  },
  {
    label: 'AI / ML',
    skills: ['NLP (spaCy, NLTK)', 'ML Fundamentals'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
  },
];

// Flat list retained for backward compat / SEO meta
export const techStack = [
  'Python', 'JavaScript', 'TypeScript', 'Go', 'Java', 'Next.js', 'React',
  'Node.js', 'SQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Git',
  'Machine Learning', 'NLP', 'REST APIs', 'Tailwind CSS', 'Linux',
];
