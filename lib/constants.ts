export const SITE = {
  name: "Sonu Prajapati",
  shortName: "SonuPrajapati",
  role: "Aspiring AI & ML Engineer",
  tagline:
    "Building AI-powered solutions using Python, Machine Learning, Data Analysis & Data Visualization.",
  description:
    "Portfolio of Sonu Prajapati, a final-year Computer Science Engineering student and aspiring AI & Machine Learning Engineer specializing in Python, data analysis, and applied machine learning.",
  url: "https://sonuprajapati.dev",
  email: "sonuprajapati83497@gmail.com",
  phone: "+91 8349737671",
  location: "Gwalior, Madhya Pradesh, India",
  resumeUrl: "/resume/Sonu_Prajapati_Resume.pdf",
  github: "https://github.com/Sonu83497",
  linkedin: "https://www.linkedin.com/in/sonu-prajapati-a75306301",
  keywords: [
    "Sonu Prajapati",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Analyst Portfolio",
    "Python Developer",
    "Data Science Portfolio",
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_STATS = [
  { label: "Projects", value: "5+" },
  { label: "Technologies", value: "15+" },
  { label: "Commits", value: "300+" },
  { label: "Contributions", value: "100+" },
] as const;

export const HERO_FOCUS_AREAS = [
  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "Generative AI",
] as const;

export const HERO_BADGES = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Pandas",
  "Scikit-learn",
] as const;

export type SkillItem = { name: string; level: "core" | "working" | "learning" };
export type SkillCategory = {
  id: string;
  title: string;
  icon: "code" | "database" | "brain" | "layout" | "server" | "wrench" | "chart";
  items: SkillItem[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: "code",
    items: [
      { name: "Python", level: "core" },
      { name: "SQL", level: "core" },
      { name: "JavaScript", level: "working" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    items: [
      { name: "HTML5", level: "working" },
      { name: "CSS3", level: "working" },
      { name: "React", level: "working" },
      { name: "Next.js", level: "working" },
      { name: "Tailwind CSS", level: "working" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    items: [
      { name: "Node.js", level: "working" },
      { name: "FastAPI", level: "working" },
      { name: "Django", level: "working" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    items: [
      { name: "MySQL", level: "core" },
      { name: "MongoDB", level: "working" },
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: "chart",
    items: [
      { name: "Pandas", level: "core" },
      { name: "NumPy", level: "core" },
      { name: "Seaborn", level: "core" },
      { name: "Matplotlib", level: "core" },
      { name: "Power BI", level: "working" },
    ],
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    icon: "brain",
    items: [
      { name: "Scikit-Learn", level: "core" },
      { name: "TensorFlow", level: "working" },
      { name: "PyTorch", level: "working" },
      { name: "OpenCV", level: "working" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "wrench",
    items: [
      { name: "Git", level: "core" },
      { name: "GitHub", level: "core" },
      { name: "VS Code", level: "core" },
      { name: "Jupyter Notebook", level: "core" },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: "Data Analysis" | "Web Development" | "AI / Deep Learning" | "Machine Learning";
  description: string;
  features: string[];
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  accent: "blue" | "violet" | "emerald" | "amber";
};

export const FEATURED_PROJECT: Project = {
  slug: "ipl-2022-data-analysis",
  title: "IPL 2022 Data Analysis",
  category: "Data Analysis",
  description:
    "An end-to-end exploratory data analysis on the IPL 2022 dataset, uncovering insights on team performance, player form, match trends, and toss-decision impact through clean, reproducible Python notebooks.",
  features: [
    "Data cleaning & preprocessing pipeline",
    "Exploratory data analysis across 70+ matches",
    "Visualization using Python (Matplotlib & Seaborn)",
    "Insights & conclusions on team and player performance",
  ],
  stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
  githubUrl: "https://github.com/Sonu83497/IPL-2022-EDA-Capstone-Project.git",
  liveUrl: "https://github.com/Sonu83497/IPL-2022-EDA-Capstone-Project.git",
  featured: true,
  accent: "blue",
};

export const PROJECTS: Project[] = [
  FEATURED_PROJECT,
  {
    slug: "sales-dashboard",
    title: "Sales Dashboard",
    category: "Data Analysis",
    description:
      "An interactive dashboard for visualizing sales performance across regions, products, and time periods, built to help stakeholders spot trends at a glance.",
    features: [
      "Dynamic filtering by region and product line",
      "Revenue & growth trend visualizations",
      "Exportable summary reports",
    ],
    stack: ["Python", "Pandas", "Plotly", "Dash"],
    githubUrl: "https://github.com/Sonu83497/Superstore-Data-Analytics-Business-Insights.git",
    liveUrl: "https://github.com/Sonu83497/Superstore-Data-Analytics-Business-Insights.git",
    accent: "violet",
  },
  {
    slug: "house-price-prediction",
    title: "House Price Prediction",
    category: "Machine Learning",
    description:
      "A regression-based machine learning project that predicts house prices from structural and location features, with a full feature-engineering and model-evaluation workflow.",
    features: [
      "Feature engineering & outlier handling",
      "Model comparison across regression algorithms",
      "Hyperparameter tuning for best-fit accuracy",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    githubUrl: "https://github.com/sonuprajapati/house-price-prediction",
    liveUrl: "https://github.com/sonuprajapati/house-price-prediction",
    accent: "emerald",
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    category: "AI / Deep Learning",
    description:
      "An NLP-based conversational assistant that understands user intent and answers questions intelligently, built with a transformer-based language pipeline.",
    features: [
      "Intent recognition & entity extraction",
      "Context-aware multi-turn conversation",
      "Deployed with a lightweight chat interface",
    ],
    stack: ["Python", "NLTK", "Transformers", "Gradio"],
    githubUrl: "https://github.com/sonuprajapati/ai-chatbot",
    liveUrl: "https://github.com/sonuprajapati/ai-chatbot",
    accent: "amber",
  },
  {
  slug: "library-management-system-with-ai-chatbot",
  title: "Library Management System with AI Chatbot",
  category: "Web Development",
  description:
    "A full-stack library management system with an integrated AI chatbot, designed to streamline book management, member management, issue and return operations, search, and user assistance.",
  features: [
    "Complete library management workflow",
    "Book and member management",
    "Issue and return book management",
    "Search and data management",
    "AI chatbot for user assistance",
  ],
  stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Python"],
  githubUrl:
    "https://github.com/Sonu83497/Library-Management-System-With-AI-Chatbot",
  liveUrl:
    "https://sonu83497.github.io/Library-Management-System-With-AI-Chatbot/",
  accent: "violet",
},
{
  slug: "mental-health-signal",
  title: "Mental Health Signal",
  category: "Machine Learning",
  description:
    "An AI-powered mental health prediction web application that analyzes user inputs using a trained Machine Learning model and delivers real-time mental health risk assessment through a FastAPI backend and responsive frontend.",
  features: [
    "AI-powered mental health risk prediction",
    "FastAPI REST API integration",
    "Machine Learning model deployment",
    "Real-time prediction results",
    "Responsive HTML, CSS & JavaScript interface",
    "Scikit-Learn model with Joblib serialization",
    "User-friendly and lightweight design",
  ],
  stack: [
    "Python",
    "FastAPI",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "Joblib",
    "HTML5",
    "CSS3",
    "JavaScript",
  ],
  githubUrl:
    "https://github.com/Sonu83497/Mental-Health-Signal",
  liveUrl:
    "https://mental-health-signal-2-0p0s.onrender.com/",
  accent: "emerald",
},
];

export const PROJECT_FILTERS = [
  "All Projects",
  "Data Analysis",
  "Machine Learning",
  "Web Development",
  "AI / Deep Learning",
] as const;

export const GITHUB_STATS = {
  username: "sonuprajapati",
  totalRepos: "20+",
  contributions: "10+",
  streak: "20 Days",
  topLanguage: "Python",
} as const;

export type TimelineStage = {
  title: string;
  status: "completed" | "in-progress" | "upcoming";
  description: string;
};

export const LEARNING_JOURNEY: TimelineStage[] = [
  {
  title: "Frontend Development",
  status: "completed",
  description:
    "Responsive and modern web interfaces using HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS, with a focus on clean UI, usability, and mobile responsiveness.",
  },
  {
    title: "Python Programming",
    status: "completed",
    description: "Core syntax, data structures, OOP, and scripting fundamentals.",
  },
  {
    title: "Data Analysis with Pandas",
    status: "completed",
    description: "Data wrangling, cleaning, and exploratory analysis workflows.",
  },
  {
    title: "Data Visualization",
    status: "completed",
    description: "Storytelling with Matplotlib, Seaborn, and Power BI dashboards.",
  },
  {
    title: "Machine Learning",
    status: "in-progress",
    description: "Supervised & unsupervised learning with Scikit-learn.",
  },
  {
    title: "Deep Learning",
    status: "upcoming",
    description: "Neural networks with TensorFlow and PyTorch.",
  },
  {
    title: "Generative AI",
    status: "upcoming",
    description: "LLMs, prompt engineering, and applied generative systems.",
  },
];

export type Certificate = {
  title: string;
  provider: string;
  date: string;
  url: string;
};

export const CERTIFICATES: Certificate[] = [
  {
  title: "MERN Stack Developer Intern",
  provider: "Codec Technologies Pvt. Ltd.",
  date: "2025",
  url: "/certificates/MERN_Stack.png",
  },
  {
  title: "INSPIRE Award – District Level Science Exhibition",
  provider: "Department of Science & Technology, Government of India",
  date: "2018–19",
  url: "/certificates/INSPIRE_Award.png",
  },
  {
  title: "Certificate of Completion – Swachh Bharat Mission",
  provider: "Tulip Infratech / Gwalior Municipal Corporation",
  date: "06/09/2023",
  url: "/certificates/TULIP_Certificate.png",
  },
  {
  title: "MP Tourism Quiz – 2019",
  provider: "Madhya Pradesh Tourism Department",
  date: "2019",
  url: "/certificates/MP_TOURISM_QUIZ_2019.png",
  },
];

export const QUICK_FACTS = [
  { label: "Degree", value: "B.Tech, Computer Science Engineering" },
  { label: "Focus", value: "Artificial Intelligence & Machine Learning" },
  { label: "Based in", value: "Gwalior, Madhya Pradesh, India" },
  { label: "Open to", value: "AI/ML internships & entry-level roles" },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: SITE.github, icon: "github" as const },
  { label: "LinkedIn", href: SITE.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${SITE.email}`, icon: "mail" as const },
] as const;
