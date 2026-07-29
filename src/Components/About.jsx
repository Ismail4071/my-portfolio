import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCode,
  FaCuttlefish,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiMaterialdesign,
  SiVercel,
  SiGooglegemini,
  SiPostman,
  SiIntellijidea,
  SiAnthropic,
  SiOpenai,
  SiSpring,
  SiRender,
} from "react-icons/si";


const techStack = [
      { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Material UI", icon: <SiMaterialdesign color="#007FFF" /> },
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
      { name: "Java", icon: <FaJava color="#f89820" /> },
      { name: "C++", icon: <FaCuttlefish color="#00599C" /> },
      { name: "Spring MVC", icon: <SiSpring color="#6DB33F" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "Claude Code", icon: <SiAnthropic color="#D97706" /> },
      { name: "Gemini Code Assist", icon: <SiGooglegemini color="#4285F4" /> },
      { name: "ChatGPT", icon: <SiOpenai color="#10A37F" /> },
      { name: "Blackbox AI", icon: "⬛" },
];

export default function About() {
  const aboutTexts = [
  "I'm a passionate Full Stack Developer based in Chennai, India, with a Master's degree in Computer Science. I enjoy building modern, scalable, and user-friendly web applications that solve real-world problems.",

  "I specialize in the MERN Stack and have hands-on experience developing full-stack applications using React, Node.js, Express.js, and MongoDB, along with Java and Spring MVC.",

  "I focus on writing clean, maintainable code while creating responsive interfaces, secure backend systems, and efficient database solutions. I'm always eager to learn new technologies and improve my development skills.",

  "I'm currently seeking an entry-level Software Developer or Full Stack Developer role where I can contribute to impactful projects, collaborate with experienced teams, and continue growing as a professional developer.",
  ];

  return (
    <section id="about">
      {/* Section Label */}
      <div className="section-label">About Me</div>

      {/* Section Title */}
      <h2 className="section-title">
        Who <span>I Am</span>
      </h2>

      {/* Availability Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.55rem 1rem",
          borderRadius: "999px",
          border: "1px solid var(--border)",
          background: "rgba(16, 185, 129, 0.08)",
          color: "#86efac",
          fontSize: "0.85rem",
          marginBottom: "2rem",
        }}
      >
        <span
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#22c55e",
            boxShadow: "0 0 10px #22c55e",
          }}
        />
        Open to Opportunities
      </div>

      {/* About Text */}
      <div
        className="fade-up"
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {aboutTexts.map((text, index) => (
          <p
            key={index}
            style={{
              color: "#8888aa",
              lineHeight: 1.9,
              fontSize: "0.98rem",
              marginBottom: "1.2rem",
            }}
          >
            {text}
          </p>
        ))}
      </div>

      {/* Tech Marquee */}
      <div
        style={{
          overflow: "hidden",
          marginTop: "3rem",
          padding: "1rem 0",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
            width: "max-content",
            animation: "scrollTech 20s linear infinite",
          }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#cbd5e1",
                fontSize: "0.95rem",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                {tech.icon}
              </span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <p
        style={{
          marginTop: "2rem",
          fontStyle: "italic",
          color: "#94a3b8",
          textAlign: "center",
          maxWidth: "700px",
          marginInline: "auto",
          lineHeight: 1.8,
        }}
      >
        “I enjoy turning ideas into scalable and user-friendly web applications.”
      </p>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes scrollTech {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}