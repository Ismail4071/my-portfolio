import { useState, useEffect } from "react";

import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaJava,
  FaPhp,
  FaTimes,
} from "react-icons/fa";

import {
  SiSpring,
  SiThymeleaf,
  SiHibernate,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

const projects = [
  {
    title: "Tourism Management System",
    image: "/projects/tourism-management.jpeg",

    desc:
      "Built a web application to manage travel packages, bookings, accommodation details and customer reservations efficiently.",

    tech: [
      () => <FaPhp color="#777BB4" />,
      () => <SiJavascript color="#F7DF1E" />,
      () => <SiHtml5 color="#E34F26" />,
      () => <SiMysql color="#4479A1" />,
    ],

    live: "#",
    github: "#",

    features: [
      "User Registration & Login",
      "Travel Package Management",
      "Online Booking",
      "Hotel Information",
      "Admin Dashboard",
      "Guest User Interface",
      "Responsive Interface",
    ],

    technologies: [
      "PHP",
      "JavaScript",
      "HTML5",
      "MySQL",
    ],

    challenges:
      "Designed an organized booking flow and managed relational database operations for travel packages.",

    learnings:
      "Improved backend development skills, database design, and CRUD operations using PHP and MySQL.",
  },

  {
    title: "EduCrudify System",

    image: "/projects/educrudify.png",

    desc:
      "Educational management system developed using Spring MVC architecture with complete CRUD functionality.",

    tech: [
      () => <SiSpring color="#6DB33F" />,
      () => <SiThymeleaf color="#005F0F" />,
      () => <SiHibernate color="#59666C" />,
    ],

    live: "#",
    github: "#",

    features: [
      "Student Management",
      "CRUD Operations",
      "Spring MVC Architecture",
      "Responsive Dashboard",
      "Form Validation",
      "Restriction Management"
    ],

    technologies: [
      "Spring MVC",
      "Hibernate",
      "Thymeleaf",
      "Spring Security",
      "Spring JPA",
      "H2 Database",
      "Java",
    ],

    challenges:
      "Implemented layered architecture and integrated Hibernate ORM with Spring MVC.",

    learnings:
      "Learned enterprise Java development, MVC architecture, Hibernate ORM, and Thymeleaf template engine.",
  },

  {
    title: "DigiCert Certificate System",

    image: "/projects/digicert.png",

    desc:
      "Secure digital certificate issuance and verification platform using QR codes, JWT authentication, AES encryption and SHA-256 hashing.",

    tech: [
      () => <FaReact color="#61DAFB" />,
      () => <SiNodedotjs color="#339933" />,
      () => <SiExpress color="#FFFFFF" />,
      () => <SiMongodb color="#47A248" />,
    ],

    live: "https://digicert-frontend.vercel.app",

    github: "https://github.com/ismail4071",

    features: [
      "JWT Authentication",
      "Certificate Request",
      "Admin Approval",
      "QR Verification",
      "AES Encryption",
      "SHA-256 Hashing",
      "PDF Certificate Download",
      "Audit Logs",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AES",
      "SHA-256",
      "Bycrypt",
      "QRCode",
    ],

    challenges:
      "Designed a secure certificate lifecycle with encrypted storage and QR-based verification.",

    learnings:
      "Gained practical experience building a complete MERN Stack application with authentication, security, APIs and deployment.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <>
      <section id="projects">
        <div className="section-label">
          What I've Built
        </div>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "1.75rem",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={index * 120}
              onClick={() =>
                setSelectedProject(project)
              }
            />
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
function ProjectCard({ project, delay, onClick }) {
  return (
    <div
      className="fade-in"
      onClick={onClick}
      style={{
        cursor: "pointer",
        transitionDelay: `${delay}ms`,
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "24px",
        overflow: "hidden",
        transition: "all 0.35s ease",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.borderColor =
          "rgba(79,142,247,0.35)";
        e.currentTarget.style.boxShadow =
          "0 25px 60px rgba(79,142,247,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor =
          "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        draggable="false"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          display: "block",
          userSelect: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "1.05rem",
            marginBottom: ".8rem",
            lineHeight: 1.5,
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            color: "#94a3b8",
            fontSize: ".9rem",
            lineHeight: 1.8,
            flex: 1,
          }}
        >
          {project.desc}
        </p>

        {/* Tech Icons */}
        <div
          style={{
            display: "flex",
            gap: ".75rem",
            flexWrap: "wrap",
            margin: "1.3rem 0",
          }}
        >
          {project.tech.map((Icon, i) => (
            <div
              key={i}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
              }}
            >
              <Icon />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: ".75rem",
          }}
        >
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: ".5rem",
              padding: ".85rem",
              borderRadius: "12px",
              textDecoration: "none",
              background:
                "linear-gradient(135deg,#4f8ef7,#a855f7)",
              color: "#fff",
              fontWeight: 600,
              fontSize: ".85rem",
            }}
          >
            <FaExternalLinkAlt size={12} />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: ".5rem",
              padding: ".85rem",
              borderRadius: "12px",
              textDecoration: "none",
              border: "1px solid var(--border)",
              background: "rgba(255,255,255,.03)",
              color: "#fff",
              fontWeight: 600,
              fontSize: ".85rem",
            }}
          >
            <FaGithub size={14} />
            GitHub
          </a>
        </div>

        {/* View Details Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          style={{
            marginTop: "1rem",
            padding: ".9rem",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            background: "#111827",
            color: "#fff",
            fontWeight: 600,
            fontSize: ".9rem",
            transition: ".3s",
          }}
        >
          View Project Details →
        </button>
      </div>
    </div>
  );
}
function ProjectModal({ project, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        zIndex: 9999,
        animation: "fadeIn .3s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "900px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#0f172a",
          border: "1px solid rgba(79,142,247,.25)",
          borderRadius: "24px",
          boxShadow: "0 30px 80px rgba(0,0,0,.55)",
          animation: "scaleUp .35s ease",
        }}
      >
        {/* Header Image */}
        <div style={{ position: "relative" }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              display: "block",
            }}
          />

          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "18px",
              right: "18px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background: "rgba(15,23,42,.9)",
              color: "#fff",
              fontSize: "1.1rem",
            }}
          >
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "2rem" }}>
          <h2
            style={{
              color: "#fff",
              marginBottom: "1rem",
              fontSize: "2rem",
            }}
          >
            {project.title}
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: 1.9,
              marginBottom: "2rem",
            }}
          >
            {project.desc}
          </p>

          {/* Technologies */}
          <h3
            style={{
              color: "#4f8ef7",
              marginBottom: ".8rem",
            }}
          >
            Technologies Used
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".7rem",
              marginBottom: "2rem",
            }}
          >
            {project.technologies.map((item) => (
              <span
                key={item}
                style={{
                  padding: ".6rem 1rem",
                  borderRadius: "999px",
                  background: "rgba(79,142,247,.1)",
                  border: "1px solid rgba(79,142,247,.25)",
                  color: "#e2e8f0",
                  fontSize: ".9rem",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Features */}
          <h3
            style={{
              color: "#4f8ef7",
              marginBottom: ".8rem",
            }}
          >
            Key Features
          </h3>

          <ul
            style={{
              color: "#cbd5e1",
              lineHeight: 2,
              marginBottom: "2rem",
              paddingLeft: "1.2rem",
            }}
          >
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          {/* Challenges */}
          <h3
            style={{
              color: "#4f8ef7",
              marginBottom: ".7rem",
            }}
          >
            Challenges
          </h3>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: 1.9,
              marginBottom: "2rem",
            }}
          >
            {project.challenges}
          </p>

          {/* Learnings */}
          <h3
            style={{
              color: "#4f8ef7",
              marginBottom: ".7rem",
            }}
          >
            What I Learned
          </h3>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: 1.9,
              marginBottom: "2rem",
            }}
          >
            {project.learnings}
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                minWidth: "180px",
                textDecoration: "none",
                background:
                  "linear-gradient(135deg,#4f8ef7,#8b5cf6)",
                color: "#fff",
                textAlign: "center",
                padding: "1rem",
                borderRadius: "14px",
                fontWeight: 600,
              }}
            >
              <FaExternalLinkAlt
                style={{ marginRight: 8 }}
              />
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                minWidth: "180px",
                textDecoration: "none",
                background: "#111827",
                border: "1px solid #334155",
                color: "#fff",
                textAlign: "center",
                padding: "1rem",
                borderRadius: "14px",
                fontWeight: 600,
              }}
            >
              <FaGithub
                style={{ marginRight: 8 }}
              />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn{
          from{
            opacity:0;
          }
          to{
            opacity:1;
          }
        }

        @keyframes scaleUp{
          from{
            transform:scale(.92);
            opacity:0;
          }
          to{
            transform:scale(1);
            opacity:1;
          }
        }

        @media(max-width:768px){

          h2{
            font-size:1.5rem !important;
          }

        }
      `}</style>
    </div>
  );
}