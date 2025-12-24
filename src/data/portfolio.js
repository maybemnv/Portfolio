import React from 'react';
import { FaPython, FaJava, FaHtml5, FaJs, FaDatabase, FaTerminal, FaDocker, FaGitAlt, FaLinkedin, FaGithub, FaDiscord, FaEnvelope, FaAws } from 'react-icons/fa';
import { SiFastapi, SiStreamlit, SiFlask, SiTensorflow, SiPytorch, SiPostgresql, SiMongodb, SiMysql, SiFirebase, SiJupyter, SiPostman, SiX, SiScikitlearn, SiKeras, SiOpencv, SiHuggingface, SiPandas, SiNumpy, SiPlotly, SiMlflow, SiGnubash, SiReact, SiTailwindcss } from 'react-icons/si';

export const portfolioData = {
  personalInfo: {
    name: "Manav Kaushal",
    title: "Data Scientist | AI Engineer",
    email: "maybemnv@gmail.com",
    location: "Delhi, India",
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
      name: "LinkedIn Post Generator",
      timeline: "04/2025",
      description: "Deployed a multilingual content generation engine using LLaMA 3-70B via Groq API. Optimized inference latency and implemented few-shot prompting for tone consistency.",
      github: "https://github.com/maybemnv/LinkedIn-Post-Generator",
      demo: null,
      tags: ["LLaMA 3", "Groq API", "Prompt Engineering"]
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
      { name: "C", icon: null },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Bash", icon: <SiGnubash /> }
    ],
    "AI & Machine Learning": [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Scikit-learn", icon: <SiScikitlearn /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "Hugging Face", icon: <SiHuggingface /> },
      { name: "LangChain", icon: null }
    ],
    "Data Engineering": [
      { name: "Pandas", icon: <SiPandas /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Plotly", icon: <SiPlotly /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> }
    ],
    "Web & MLOps": [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
      { name: "React", icon: <SiReact /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "MLflow", icon: <SiMlflow /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "AWS", icon: <FaAws /> }
    ],
    "Tools": [
      { name: "VS Code", icon: null },
      { name: "Jupyter", icon: <SiJupyter /> },
      { name: "Postman", icon: <SiPostman /> }
    ]
  },
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
