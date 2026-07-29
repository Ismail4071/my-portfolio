// Skills.jsx

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

const skillCategories = [
  {
    title: "Frontend",
    subtitle: "Core technologies I use daily",
    icon: "🎨",
    items: [
      { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "Material UI", icon: <SiMaterialdesign color="#007FFF" /> },
    ],
  },
  {
    title: "Backend",
    subtitle: "Server-side technologies",
    icon: "⚙️",
    items: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
      { name: "Java", icon: <FaJava color="#f89820" /> },
      { name: "C++", icon: <FaCuttlefish color="#00599C" /> },
      { name: "Spring MVC", icon: <SiSpring color="#6DB33F" /> },
    ],
  },
  {
    title: "Database",
    subtitle: "Data storage solutions",
    icon: "🗄️",
    items: [
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    ],
  },
  {
    title: "AI-Powered",
    subtitle: "Tools I use for productivity",
    icon: "🤖",
    items: [
  { name: "Claude Code", icon: <SiAnthropic color="#D97706" /> },
  { name: "Gemini Code Assist", icon: <SiGooglegemini color="#4285F4" /> },
  { name: "ChatGPT", icon: <SiOpenai color="#10A37F" /> },
  { name: "Blackbox AI", icon: "⬛" },
  ],
  },
  {
    title: "Dev Tools",
    subtitle: "Tools that power my workflow",
    icon: "🛠️",
    items: [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
      { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
      { name: "Render", icon: <SiRender color="#46E3B7" /> },
      { name: "VS Code", icon: <FaCode color="#007ACC" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea color="#ffffff" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">What I Use</div>

      <h2 className="section-title">
        Skills & <span>Technologies</span>
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
          maxWidth: "700px",
          margin: "0 auto 3rem",
          lineHeight: 1.8,
        }}
      >
        Technologies and tools I use to build fast, scalable, and modern web
        applications.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
        }}
      >
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}

function SkillCategory({ category }) {
  return (
    <div
      className="fade-up"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "24px",
        padding: "2rem",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.borderColor = "rgba(79, 142, 247, 0.35)";
        e.currentTarget.style.boxShadow =
          "0 20px 50px rgba(79, 142, 247, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Category Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.4rem",
            background: "rgba(250, 204, 21, 0.08)",
            border: "1px solid rgba(250, 204, 21, 0.15)",
          }}
        >
          {category.icon}
        </div>

        <div>
          <h3
            style={{
              margin: 0,
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            {category.title}
          </h3>

          <p
            style={{
              margin: "0.25rem 0 0",
              fontSize: "0.85rem",
              color: "#94a3b8",
            }}
          >
            {category.subtitle}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        {category.items.map((item) => (
          <div
            key={item.name}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.65rem 1rem",
              borderRadius: "999px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border)",
              color: "#e2e8f0",
              fontSize: "0.9rem",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1rem",
                flexShrink: 0,
              }}
            >
              {item.icon}
            </span>

            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}