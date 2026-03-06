export const experienceItems = [
  {
    role: "Service Desk Analyst",
    company: "University of Texas at Dallas - Office of Information Technology",
    period: "Aug 2025 – Present",
    bullets: [
      "Triage and resolve authentication failures, provisioning errors, and permission conflicts across a 30,000+ user identity management system. I write diagnostic Python scripts to find root causes rather than applying temporary fixes.",
      "Document recurring failure patterns so that institutional knowledge outlasts individual tickets and reduces repeat issue volume over time.",
      "Coordinate with engineering teams to escalate systemic issues that surface through high-frequency support patterns.",
    ],
  },
  {
    role: "Interconnection Intern",
    company: "EDP Renewables North America",
    period: "May 2024 – Aug 2024",
    bullets: [
      "Replaced manual reporting workflows with Python scripts and structured data pipelines. This reduced turnaround time by ~30% and removed recurring human error from the process.",
      "Built performance dashboards that ingested and transformed grid interconnection data, making bottlenecks across distributed energy assets visible for the first time.",
      "Restructured previously ad-hoc data flows into reliable pipelines, enabling faster identification of compliance risks and interconnection delays.",
    ],
  },
  {
    role: "Operations Manager / Analyst Intern",
    company: "Prime Communications (AT&T Authorized Retailer)",
    period: "May 2023 – Aug 2023",
    bullets: [
      "Managed day-to-day retail operations like inventory coordination, issue escalation, and staff oversight in a high-volume environment.",
      "Translated complex device configurations and service constraints into clear guidance for customers and staff.",
      "Consistently met performance targets while keeping operations running smoothly under time pressure.",
    ],
  },
];

export const projects = [
  {
    title: 'MetaCrawler',
    status: 'Active',
    problem: 'Online research produces too much noise. Relevant sources get buried under irrelevant results, and there\'s no easy way to structure what you find.',
    contribution: 'A tool that crawls websites, extracts useful information, and ranks results so research is easier to organize. It uses a microservice architecture so the crawling, parsing, and scoring parts all run independently.',
    architecture: 'Crawler → HTML parser → NLP scoring → structured storage',
    outcome: 'Replaces manual research browsing with a structured data pipeline. Makes large-scale information gathering a lot easier to handle.',
    link: 'https://github.com/lobo017/MetaCrawler',
    tags: ['Python', 'NLP', 'Microservices', 'Data Ingestion'],
  },
  {
    title: 'RoleRank',
    status: 'In Progress',
    problem: 'Qualified candidates get filtered out by keyword-matching ATS systems every day. Usually it\'s not because they lack skills, but because their resume doesn\'t mirror the right phrasing.',
    contribution: 'A document analysis tool that reads resumes and job descriptions, compares them using an LLM, and gives specific suggestions on how to improve the match. I designed the interface to be straightforward and easy to read.',
    architecture: 'Document parser → LLM comparison → gap scorer → feedback generator',
    outcome: 'Automates resume-to-JD checking so candidates can actually see what they are missing instead of guessing.',
    link: 'https://github.com/lobo017/RoleRank',
    tags: ['Python', 'LLM', 'Text Parsing', 'Automation'],
  },
  {
    title: 'Circadian Lens',
    status: 'In Progress',
    problem: 'Sleep quality data is hard to interpret. Most tools just show raw numbers without helping you understand how rest actually affects your output.',
    contribution: 'A personal dashboard that takes behavioral data, cleans it up, and visually maps rest patterns to next-day cognitive performance. I built it because I wanted to see what actually correlates with a productive day.',
    architecture: 'Data ingestion → cleaning/transform → statistical analysis → dashboard',
    outcome: 'Turns raw behavioral health data into a visual dashboard so it\'s easier to spot real patterns.',
    link: 'https://github.com/lobo017/CircadianLens',
    tags: ['Python', 'Data Transformation', 'Visualization', 'Statistical Analysis'],
  },
];

export const skillCategories = [
  {
    label: 'Interfaces & Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    label: 'Systems & Backend',
    skills: ['Python', 'Go', 'Java', 'Node.js', 'REST APIs', 'SQL'],
  },
  {
    label: 'Data & Analytics',
    skills: ['PostgreSQL', 'MongoDB', 'NLP (spaCy, NLTK)', 'ML Fundamentals'],
  },
  {
    label: 'Tools & Infrastructure',
    skills: ['Docker', 'Git', 'Linux'],
  },
];

// Flat list retained for backward compat / SEO meta
export const techStack = [
  'Python', 'JavaScript', 'TypeScript', 'Go', 'Java', 'Next.js', 'React',
  'Node.js', 'SQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Git',
  'Machine Learning', 'NLP', 'REST APIs', 'Tailwind CSS', 'Linux',
];
