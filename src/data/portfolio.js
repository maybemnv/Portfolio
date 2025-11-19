import React from 'react';
import { FaPython, FaJava, FaHtml5, FaJs, FaDatabase, FaTerminal, FaDocker, FaGitAlt, FaLinkedin, FaGithub, FaDiscord, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiFastapi, SiStreamlit, SiFlask, SiTensorflow, SiPytorch, SiPostgresql, SiMongodb, SiMysql, SiFirebase, SiJupyter, SiPostman, SiX } from 'react-icons/si';

export const portfolioData = {
  personalInfo: {
    name: "Manav Kaushal",
    title: "Data Science | AI/ML Engineer",
    email: "maaybemnv@gmail.com",
    location: "Delhi, India",
    social: [
      { name: "Email", icon: <FaEnvelope />, link: "mailto:maaybemnv@gmail.com" },
      { name: "GitHub", icon: <FaGithub />, link: "https://github.com/maybemnv" },
      { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/maybmnv/" },
      { name: "X", icon: <SiX />, link: "https://x.com/maybemnv" },
      { name: "Discord", icon: <FaDiscord />, link: "https://discord.com/users/751306489574195230" }
    ],
    about: [
      "I'm an engineering student diving deep into Data Science, but my brain's wired for AI/ML, building stuff, and chasing wild ideas. I don't just code for the sake of it — I build things that make people go, 'wait… that actually works?'",
      "Whether I'm prototyping a GenAI tool, tweaking a model just to see what it does, or writing code that feels right — I'm in my zone when I'm creating. Most of what I know didn't come from lectures — it came from late-night builds, hackathons, self-taught chaos, and being endlessly curious.",
      "I don't wait for the perfect moment. I ship. I break things. I learn. I repeat."
    ]
  },
  projects: [
    {
      name: "Synthex",
      timeline: "05/2025 - 05/2025",
      description: "Designed an AI assistant with prompt engineering logic to break down code for educational use cases. Focused on user-centric design, tested prompts using structured success metrics, and deployed using FastAPI and Streamlit.",
      github: "https://github.com/maybemnv/Synthex",
      tags: ["FastAPI", "Streamlit", "Prompt Engineering"]
    },
    {
      name: "LinkedIn Post Generator",
      timeline: "04/2025 - 04/2025",
      description: "Multilingual LinkedIn post generator using Streamlit & Groq's LLaMA 3–70B.",
      github: "https://github.com/maybemnv/LinkedIn-Post-Generator",
      tags: ["LLaMA 3", "Streamlit", "GenAI"]
    },
    {
      name: "AI-Driven YouTube Summarizer",
      timeline: "02/2025 - 02/2025",
      description: "Developed a summarization tool leveraging Google Gemini AI, with use-case testing across diverse video categories. Prioritized user comprehension and output quality using data-driven evaluations.",
      github: "https://github.com/maybemnv/AI-Powered-YouTube-Video-Summarizer-Quiz-Generator",
      tags: ["Gemini AI", "NLP", "Analytics"]
    },
    {
      name: "APS-Failure Model",
      timeline: "11/2024 - 12/2024",
      description: "Built a predictive failure detection model for commercial vehicle air pressure systems, enabling early intervention and minimizing operational risk. Applied classification models using scikit-learn and Python, and interpreted outputs using statistical methods.",
      github: "https://github.com/maybemnv/predictive-maintenance-for-air-pressure-system-aps",
      tags: ["Scikit-learn", "Predictive Modeling", "Python"]
    }
  ],
  skills: {
    Languages: [
      { name: "Python", icon: <FaPython /> },
      { name: "C", icon: null },
      { name: "Java", icon: <FaJava /> },
      { name: "HTML/CSS", icon: <FaHtml5 /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Bash", icon: <FaTerminal /> }
    ],
    Frameworks: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "NLTK", icon: null },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "SQLAlchemy", icon: <FaDatabase /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Git", icon: <FaGitAlt /> }
    ],
    Databases: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Firebase", icon: <SiFirebase /> }
    ],
    Tools: [
      { name: "VS Code", icon: null },
      { name: "Jupyter", icon: <SiJupyter /> },
      { name: "Colab", icon: null },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Power BI", icon: null }
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
