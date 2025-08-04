import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const projects = [
    {
      name: "Synthex",
      timeline: "05/2025 - 05/2025",
      description: " Designed an AI assistant with prompt engineering logic to break down code for educational use cases. Focused on user-centric design, tested prompts using structured success metrics, and deployed using FastAPI and Streamlit.",
      github: "https://github.com/maybemnv/Synthex"
    },
    {
      name: "LinkedIn Post Generator",
      timeline: "04/2025 - 04/2025",
      description: "Multilingual LinkedIn post generator using Streamlit & Groq's LLaMA 3–70B",
      github: "https://github.com/maybemnv/LinkedIn-Post-Generator"
    },
    {
      name: "AI-Driven YouTube Summarizer",
      timeline: "02/2025 - 02/2025",
      description: "Developed a summarization tool leveraging Google Gemini AI, with use-case testing across diverse video categories. Prioritized user comprehension and output quality using data-driven evaluations.",
      github: "https://github.com/maybemnv/AI-Powered-YouTube-Video-Summarizer-Quiz-Generator"
    },
    {
      name:"APS-Failure Model",
      timeline:"11/2024 - 12/2024",
      description: "Built a predictive failure detection model for commercial vehicle air pressure systems, enabling early intervention and minimizing operational risk.Applied classification models using scikit-learn and Python, and interpreted outputs using statistical methods",
      github: "https://github.com/maybemnv/predictive-maintenance-for-air-pressure-system-aps"
       }
  ];

  const skills = {
    Languages: [
      { name: "Python", color: "bg-blue-900", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" className="w-6 h-6" /> },
      { name: "C", color: "bg-blue-900", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="C" className="w-6 h-6" /> },
      { name: "Java", color: "bg-blue-900", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" className="w-6 h-6" /> },
      { name: "HTML/CSS", color: "bg-blue-900", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML" className="w-6 h-6" /> },
      { name: "JavaScript", color: "bg-blue-900", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6" /> },
      { name: "SQL", color: "bg-blue-900", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="SQL" className="w-6 h-6" /> },
      { name: "Bash", color: "bg-blue-900", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg" alt="Bash" className="w-6 h-6" /> }
    ],
    Frameworks: [
      { name: "FastAPI", color: "bg-green-800", icon: <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI" className="w-6 h-6" /> },
      { name: "Streamlit", color: "bg-green-800", icon: <img src="https://streamlit.io/images/brand/streamlit-mark-color.svg" alt="Streamlit" className="w-6 h-6" /> },
      { name: "Flask", color: "bg-green-800", icon: <img src="https://www.svgrepo.com/show/508915/flask.svg" alt="Flask" className="w-6 h-6" /> },
      { name: "NLTK", color: "bg-green-800", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="NLP" className="w-6 h-6" /> },
      { name: "TensorFlow", color: "bg-green-800", icon: <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="TensorFlow" className="w-6 h-6" /> },
      { name: "PyTorch", color: "bg-green-800", icon: <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="PyTorch" className="w-6 h-6" /> },
      { name: "SQLAlchemy", color: "bg-green-800", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlalchemy/sqlalchemy-original.svg" alt="SQLAlchemy" className="w-6 h-6" /> },
      { name: "Docker", color: "bg-green-800", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" alt="Docker" className="w-6 h-6" /> },
      { name: "Git", color: "bg-green-800", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" /> },
    ],
    Databases: [
      { name: "MySQL", color: "bg-red-900", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" alt="MySQL" className="w-6 h-6" /> },
      { name: "MongoDB", color: "bg-red-900", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6" /> },
      { name: "PostgreSQL", color: "bg-red-900", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-6 h-6" /> },
      { name: "Firebase", color: "bg-red-900", icon: <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" className="w-6 h-6" /> }
    ],
    
    Tools: [
      { name: "VS Code", color: "bg-purple-900", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" className="w-6 h-6" /> },
      { name: "Jupyter Notebook", color: "bg-purple-900", icon: <img src="https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg" alt="Jupyter Notebook" className="w-6 h-6" /> },
      { name: "Google Colab", color: "bg-purple-900", icon: <img src="https://colab.research.google.com/img/colab_favicon_256px.png" alt="Google Colab" className="w-6 h-6" /> },
      { name: "Postman", color: "bg-purple-900", icon: <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" className="w-6 h-6" /> },
      { name: "Power BI", color: "bg-purple-900", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" alt="PowerBI" className="w-6 h-6" /> }
    ]
  };

  const LaunchSection = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen smooth-bg text-white font-inter">
      {/* Background with subtle overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10"
      />
      <div className="fixed inset-0 bg-overlay opacity-80" />
      
      <div className="relative z-10 flex min-h-screen">
        {/* Left Panel - About Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 lg:fixed lg:h-screen">
          <LaunchSection>
            <div className="max-w-md">
              {/* Name and Title */}
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-light mb-2 tracking-wide">
                  Manav Kaushal
                </h1>
                <p className="text-blue-400 mb-2 text-lg font-medium">Data Science | AI/ML Engineer</p>
                <p className="text-gray-400 mb-2 text-lg">manavkauahal99@gmail.com</p>
                
                {/* Location */}
                <div className="flex items-center text-gray-400 text-lg mb-6">
                  <span className="mr-2">📍</span>
                  <span>Delhi, India</span>
                </div>
                
                {/* Social Links + Resume */}
                <div className="flex space-x-4 items-center flex-wrap">
                  {/* Email */}
                  <a 
                    href="mailto:manavkauahal99@gmail.com" 
                    className="hover:opacity-80 transition-opacity duration-300"
                  >
                    <img 
                      src="https://www.svgrepo.com/show/349378/gmail.svg"
                      alt="Email" 
                      className="w-6 h-6" 
                    />
                  </a>
                  {/* GitHub */}
                  <a 
                    href="https://github.com/maybemnv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-300"
                  >
                    <img 
                      src="https://www.svgrepo.com/show/439171/github.svg"
                      alt="GitHub" 
                      className="w-6 h-6" 
                    />
                  </a>
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/maybmnv/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-300"
                  >
                    <img 
                      src="https://www.svgrepo.com/show/448234/linkedin.svg"
                      alt="LinkedIn" 
                      className="w-6 h-6" 
                    />
                  </a>
                  {/* Discord */}
                  <a 
                    href="https://discord.com/users/751306489574195230" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity duration-300"
                  >
                    <img 
                      src="https://www.svgrepo.com/show/353655/discord-icon.svg"
                      alt="Discord" 
                      className="w-6 h-6" 
                    />
                  </a>
                  {/* Resume Download Button */}
                  <a
                    href="/Resume.pdf"
                    download
                    className="ml-2 px-3 py-1 border border-blue-400 text-blue-400 rounded-full text-xs font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    <svg 
                      className="w-4 h-4 mr-1 inline-block align-text-bottom" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                    Resume
                  </a>
                </div>
              </div>

              {/* About Section - Side by Side */}
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-light mb-4 tracking-wide">About</h2>
                  <p className="text-gray-300 leading-relaxed text-base">
                    I'm an engineering student diving deep into Data Science, but my brain's wired for AI/ML, building stuff, and chasing wild ideas. I don't just code for the sake of it  I build things that make people go, "wait… that actually works?"
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base mt-4">
                    Whether I'm prototyping a GenAI tool, tweaking a model just to see what it does, or writing code that feels right  I'm in my zone when I'm creating. Most of what I know didn't come from lectures — it came from late-night builds, hackathons, self-taught chaos, and being endlessly curious.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-base mt-4">
                    I don't wait for the perfect moment. I ship. I break things. I learn. I repeat.
                  </p>
                </div>
              </div>
            </div>
          </LaunchSection>
        </div>

        {/* Right Panel - Scrollable Content */}
        <div className="w-full lg:w-1/2 lg:ml-auto p-8 lg:p-16 space-y-16">
          
          {/* Projects Section */}
          <LaunchSection delay={200}>
            <section>
              <h2 className="text-3xl font-light mb-8 tracking-wide">Projects</h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <LaunchSection key={index} delay={300 + index * 100}>
                    <div className="border-l-2 border-gray-800 pl-6 hover:border-gray-600 transition-colors duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-medium">{project.name}</h3>
                        <span className="text-gray-500 text-sm">{project.timeline}</span>
                      </div>
                      <p className="text-gray-300 mb-3 leading-relaxed">{project.description}</p>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </LaunchSection>
                ))}
              </div>
            </section>
          </LaunchSection>

          {/* Skills Section */}
          <LaunchSection delay={500}>
            <section>
              <h2 className="text-3xl font-light mb-8 tracking-wide">Skills</h2>
              
              <div className="space-y-8">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-xl font-medium mb-4 text-white">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <LaunchSection key={index} delay={600 + index * 30}>
                          <span 
                            className={`flex items-center px-4 py-2 rounded-full text-sm font-medium text-white ${skill.color} 
                            hover:opacity-80 transition-opacity duration-300 shadow-md`}
                          >
                            {skill.icon && <span className="mr-2">{skill.icon}</span>}
                            {skill.name}
                          </span>
                        </LaunchSection>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </LaunchSection>

          {/* Experience Section */}
          <LaunchSection delay={900}>
            <section>
              <h2 className="text-3xl font-light mb-8 tracking-wide">Experience</h2>
              <div className="border-l-2 border-gray-800 pl-6">
                <div className="flex items-center mb-4">
                  <div className="text-6xl mr-4">
  <a href="https://gvf.co.in/wp-content/uploads/2023/10/logo-2-1-1.png" target="_blank" rel="noopener noreferrer">
    <img
      src="https://gvf.co.in/wp-content/uploads/2023/10/logo-2-1-1.png"
      alt="GVF Logo"
      className="h-12 w-auto"
    />
  </a>
</div>

                  <div>
                    <h3 className="text-xl font-medium">Research Intern at GVF</h3>
                    <p className="text-gray-400 mb-2">08/2024 – 11/2024</p>
                  </div>
                </div>
              </div>
            </section>
          </LaunchSection>

          {/* Education Section */}
          <LaunchSection delay={1000}>
            <section className="pb-16">
              <h2 className="text-3xl font-light mb-8 tracking-wide">Education</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-gray-800 pl-6 flex items-center">
                  <div>
                    <h3 className="text-xl font-medium">Jagannath Institute of Management and Science</h3>
                    <p className="text-gray-400 mb-2">BCA in Data Science (2022 – 2025)</p>
                  </div>
                </div>
              </div>
            </section>
          </LaunchSection>

        </div>
      </div>
    </div>
  );
}

export default App;