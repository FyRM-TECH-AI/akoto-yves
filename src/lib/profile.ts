import c1 from "@/assets/certs/cert1.jpg.asset.json";
import c2 from "@/assets/certs/cert2.jpg.asset.json";
import c3 from "@/assets/certs/cert3.jpg.asset.json";
import c4 from "@/assets/certs/cert4.jpg.asset.json";
import c5 from "@/assets/certs/cert5.jpg.asset.json";
import c6 from "@/assets/certs/cert6.jpg.asset.json";

export const profile = {
  name: "Yves Akoto",
  fullName: "Akotchayé Freedom Y. Godson AKOTO",
  role: "AI Engineer & Developer",
  email: "akotchaye07@gmail.com",
  phone: "+229 01 96 70 59 54",
  location: "Abomey-Calavi, Benin",
  github: "https://github.com/yvesgodson",
  linkedin: "https://www.linkedin.com/in/yves-akoto",
};

export const education = [
  {
    school: "University of Abomey-Calavi",
    place: "Abomey-Calavi, Benin",
    degree: "Computer Science — 3rd year, AI specialization",
    period: "Sep 2023 — Present",
    notes: [],
  },
  {
    school: "Mariama College",
    place: "Niamey, Niger",
    degree: "High School Diploma in Science & Mathematics",
    period: "Sep 2022 — Jun 2023",
    notes: ["Valedictorian", "Graduated with Honors"],
  },
];

export const certificates = [
  { title: "Fundamentals of LLMs", issuer: "Hugging Face", date: "Sep 2026", img: c1.url },
  { title: "Aspire Leaders Program", issuer: "Aspire Institute", date: "Sep 2026", img: c2.url },
  { title: "Intro to HTML, CSS & JavaScript", issuer: "IBM · Coursera", date: "Jun 2026", img: c3.url },
  { title: "Intro to Project Management", issuer: "IBM · Coursera", date: "Jun 2026", img: c4.url },
  { title: "Intro to Software Engineering", issuer: "IBM · Coursera", date: "Jun 2026", img: c5.url },
  { title: "Excel Fundamentals for Data Analysis", issuer: "Macquarie · Coursera", date: "Jun 2026", img: c6.url },
];

export const experiences = [
  {
    role: "Artificial Intelligence Intern",
    company: "WAOUH MONDE",
    place: "Cotonou, Benin",
    period: "May 2026 — Present",
    color: "bg-foreground text-background",
    points: [
      "Develop and deploy autonomous AI agents and customer-service automation workflows with n8n and WhatsApp webhooks.",
      "Built an automated OSINT AI agent with n8n and LLMs that scrapes and analyzes public Requests for Proposals, delivering real-time commercial opportunities.",
      "Built a telephone-advisor rating web application for an enterprise client using Next.js.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "HOMINTEC Engineering Services",
    place: "Cotonou, Benin",
    period: "Jun 2025 — Jul 2025",
    color: "bg-blue text-on-color",
    points: [
      "Leveraged generative AI APIs to build a text summarization app with robust error handling and secure API key management.",
      "Designed an end-to-end multimodal system converting audio into AI-generated images, bridging audio processing and computer vision.",
    ],
  },
];

export const projects = [
  {
    name: "VRP Optimization System",
    stack: ["Python", "PostgreSQL"],
    period: "Feb — Mar 2026",
    color: "bg-subtle text-foreground",
    desc: "An optimization engine for complex vehicle routing and logistics, using metaheuristics and search algorithms to maximize fleet efficiency under operational constraints.",
  },
  {
    name: "MINI-ML-LIB",
    stack: ["Python", "Git"],
    period: "Mar — Apr 2026",
    color: "bg-foreground text-background",
    desc: "A lightweight machine-learning library built from scratch, with clean object-oriented architecture mirroring standard frameworks to master the maths behind AI.",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "R"] },
  { group: "Frameworks", items: ["React", "Next.js", "Flask", "FastAPI"] },
  { group: "Libraries", items: ["Pandas", "NumPy", "Matplotlib", "LangChain", "TensorFlow", "PyTorch", "Streamlit"] },
  { group: "Tools", items: ["Git", "GitHub", "GitLab", "Docker", "n8n", "VS Code", "Zed", "PyCharm"] },
];
