import { PortfolioData } from '../types/portfolio';
import { FaPython, FaJava, FaJs, FaDatabase, FaTerminal, FaDocker, FaGitAlt, FaLinkedin, FaGithub, FaDiscord, FaEnvelope, FaAws, FaRProject, FaCode } from 'react-icons/fa';
import { SiFastapi, SiStreamlit, SiFlask, SiTensorflow, SiPytorch, SiPostgresql, SiMongodb, SiMysql, SiFirebase, SiX, SiScikitlearn, SiHuggingface, SiPandas, SiNumpy, SiMlflow, SiGnubash, SiGooglecloud, SiVercel, SiRailway, SiRender, SiRedis, SiSqlite } from 'react-icons/si';
import { BiNetworkChart, BiLogoCPlusPlus } from 'react-icons/bi';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Manav Kaushal",
    title: "Data Scientist | AI Engineer",
    email: "maybemnv@gmail.com",
    location: "Delhi, India",
    resumeUrl: "https://drive.google.com/file/d/1bkbVDHwq3ZYYU3J0oz3v4kBP3o4bPr90/view",
    githubUsername: "maybemnv",
    social: [
      { name: "Email", icon: <FaEnvelope />, link: "mailto:maybemnv@gmail.com" },
      { name: "GitHub", icon: <FaGithub />, link: "https://github.com/maybemnv" },
      { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/maybmnv/" },
      { name: "X", icon: <SiX />, link: "https://x.com/maybemnv" },
      { name: "Discord", icon: <FaDiscord />, link: "https://discord.com/users/751306489574195230" }
    ],
    about: [
      "I engineer intelligence from data. As a Data Scientist and AI practitioner, I don't just train models; I build scalable, deployable AI systems that solve real-world problems.",
      "My stack isn't just Python—it's the entire MLOps lifecycle. From raw data ingestion to model monitoring in production, I thrive in the chaos of high-dimensional vectors and complex neural architectures.",
      "Currently obsessed with LLMs, Agentic Workflows, and making computers 'see' better than humans."
    ]
  },
  projects: [
    {
      name: "Synthex",
      timeline: "05/2025",
      description: "Architected an AI-powered educational assistant using RAG (Retrieval-Augmented Generation). Implemented custom prompt chains to deconstruct complex codebases into digestible learning modules.",
      github: "https://github.com/maybemnv/Synthex",
      demo: "https://maybemnv-synthex-app-lupceq.streamlit.app/",
      tags: ["FastAPI", "LangChain", "RAG", "Streamlit"]
    },
    {
      name: "LegalDocs",
      timeline: "12/2024",
      description: "Designed and deployed a generative AI prototype integrating Gemini APIs with RAG (Cohere embeddings) to enable scalable document analysis using FastAPI, LangChain, and React.",
      github: "https://github.com/maybemnv/LegalDocs",
      demo: "https://legal-docs-livid.vercel.app/",
      tags: ["FastAPI", "Gemini API", "RAG", "React"]
    },
    {
      name: "State Budget Analysis",
      timeline: "11/2024",
      description: "Developed an automated ETL pipeline for state budget analysis, performing data cleaning, schema transformation, and reporting to improve accessibility and policy insights.",
      github: "https://github.com/maybemnv/State-Budget-Analysis",
      demo: "https://maybemnv-state-budget-analysis-app-26tzub.streamlit.app/",
      tags: ["ETL", "Data Engineering", "Streamlit", "Python"]
    },
    {
      name: "Cover Letter & Resume Gen",
      timeline: "10/2024",
      description: "An intelligent tool for generating tailored cover letters and resumes. Optimizes content for ATS systems using advanced language models to increase interview chances.",
      github: "https://github.com/maybemnv/Cover-Letter-Generator",
      demo: "https://cover-letter-and-tailored-resume.onrender.com/",
      tags: ["GenAI", "NLP", "Resume Builder", "Python"]
    },
    {
      name: "Epidemiology AI",
      timeline: "02/2025",
      description: "AI-powered disease outbreak early warning system that fuses health clinic reports, pharmacy sales spikes, social media trends, and climate data. Uses time-series anomaly detection to predict outbreak probability before traditional surveillance catches up.",
      github: "https://github.com/maybemnv/Epidemiology-AI",
      demo: null,
      tags: ["Time-Series", "Anomaly Detection", "Public Health", "Python"]
    },
    {
      name: "AI Patrolling & Bandobast System",
      timeline: "01/2025",
      description: "Computer vision and NLP surveillance intelligence platform for police operations. Combines YOLOv8n object detection (31ms inference), crowd density analysis, anomaly detection, and a RAG pipeline with FAISS vector store — all served via a FastAPI backend and a React command center dashboard.",
      github: "https://github.com/maybemnv/AI-Driven-Patrolling-and-Bandobast-Intelligence-System",
      demo: null,
      tags: ["YOLOv8", "RAG", "FastAPI", "Computer Vision"]
    },
    {
      name: "APS-Failure Prediction",
      timeline: "12/2024",
      description: "Developed a predictive maintenance system for heavy-duty vehicle air pressure systems. Achieved 98% recall using XGBoost and SMOTE for handling extreme class imbalance.",
      github: "https://github.com/maybemnv/predictive-maintenance-for-air-pressure-system-aps",
      demo: null,
      tags: ["XGBoost", "Scikit-learn", "Imbalanced Learning"]
    }
  ],
  skills: {
    "Languages": [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C/C++", icon: <BiLogoCPlusPlus /> },
      { name: "R", icon: <FaRProject /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Bash", icon: <SiGnubash /> }
    ],
    "Frameworks & Libraries": [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "LangChain", icon: <BiNetworkChart /> },
      { name: "Hugging Face", icon: <SiHuggingface /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
      { name: "LM Studio", icon: <FaCode /> },
      { name: "Auto-gen", icon: <FaTerminal /> }
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: <FaAws /> },
      { name: "GCP", icon: <SiGooglecloud /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Railway", icon: <SiRailway /> },
      { name: "MLflow", icon: <SiMlflow /> },
      { name: "Git", icon: <FaGitAlt /> }
    ],
    "Databases": [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Pinecone", icon: <FaDatabase /> },
      { name: "FAISS", icon: <FaDatabase /> }
    ]
  },
  featureImportance: [
    { label: "Python", value: 0.95 },
    { label: "Machine Learning", value: 0.90 },
    { label: "Data Analysis", value: 0.85 },
    { label: "React/Frontend", value: 0.75 },
    { label: "Backend/API", value: 0.80 }
  ],
  experience: [
    {
      role: "Research Intern",
      company: "GVF",
      timeline: "08/2024 – 11/2024",
      logo: "https://gvf.co.in/wp-content/uploads/2023/10/logo-2-1-1.png"
    }
  ],
  education: [
    {
      degree: "BCA in Data Science",
      school: "Jagannath Institute of Management and Science",
      timeline: "2022 – 2025"
    }
  ]
};
