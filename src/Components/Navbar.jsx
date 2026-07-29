import { useState, useEffect } from "react";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Navbar background + active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Home section
      if (window.scrollY < 120) {
        setActiveSection("Home");
        return;
      }

      // Detect current visible section
      let currentSection = "Home";
      const offset = 140;

      for (const link of links.slice(1)) {
        const section = document.getElementById(link.toLowerCase());

        if (!section) continue;

        const top = section.offsetTop - offset;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          currentSection = link;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Smooth scroll to section
  const scrollTo = (sectionName) => {
    if (sectionName === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const section = document.getElementById(
        sectionName.toLowerCase()
      );

      if (section) {
        const navbarOffset = 95;

        const y =
          section.getBoundingClientRect().top +
          window.pageYOffset -
          navbarOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }

    // Immediately highlight clicked section
    setActiveSection(sectionName);

    // Close mobile menu
    setMenuOpen(false);
  };

  // Navigation button styles
  const getNavButtonStyle = (link) => ({
    background: "none",
    border: "none",
    color: activeSection === link ? "#ffffff" : "#94a3b8",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.88rem",
    fontWeight: activeSection === link ? 600 : 500,
    cursor: "pointer",
    letterSpacing: "0.4px",
    position: "relative",
    transition: "all 0.3s ease",

    // Active item background
    backgroundColor:
  activeSection === link
    ? "rgba(76, 29, 149, 0.45)"
    : "transparent",
    // Rounded box
    borderRadius: "8px",

    // Padding
    padding: "0.35rem 0.75rem",
  });

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: scrolled
            ? "rgba(10, 10, 15, 0.95)"
            : "rgba(10, 10, 15, 0.65)",
          borderBottom: `1px solid ${
            scrolled
              ? "rgba(79, 142, 247, 0.15)"
              : "rgba(255, 255, 255, 0.04)"
          }`,
          boxShadow: scrolled
            ? "0 10px 30px rgba(0,0,0,0.25)"
            : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => scrollTo("Home")}
          style={{
            fontSize: "1.3rem",
            fontWeight: 800,
            background:
              "linear-gradient(135deg, #4f8ef7, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            cursor: "pointer",
            userSelect: "none",
            letterSpacing: "0.5px",
          }}
        >
          MOHAMED ISMAIL
        </div>

        {/* Desktop Navigation */}
        <ul
          className="nav-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                style={getNavButtonStyle(link)}
                onMouseEnter={(e) => {
                  if (activeSection !== link) {
                    e.currentTarget.style.color = "#ffffff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link) {
                    e.currentTarget.style.color = "#94a3b8";
                  }
                }}
              >
                {link}

                {/* Animated underline */}
                <span
                  style={{
                    position: "absolute",
                    left: "0.75rem",
                    right: "0.75rem",
                    bottom: "-4px",
                    width:
                      activeSection === link ? "calc(100% - 1.5rem)" : "0%",
                    height: "2px",
                    borderRadius: "999px",
                    background:
                      "linear-gradient(135deg, #4f8ef7, #a855f7)",
                    transition: "width 0.35s ease-in-out",
                  }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          style={{
            display: "none",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--border)",
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            color: "#ffffff",
            fontSize: "1.25rem",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "76px",
            left: 0,
            right: 0,
            zIndex: 999,
            background: "rgba(10, 10, 15, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom:
              "1px solid rgba(79,142,247,0.15)",
            padding: "1.5rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background:
                  activeSection === link
                    ? "rgba(247, 79, 199, 0.08)"
                    : "transparent",
                border:
                  activeSection === link
                    ? "1px solid rgba(247, 79, 199, 0.2)"
                    : "1px solid transparent",
                color:
                  activeSection === link
                    ? "#ffffff"
                    : "#94a3b8",
                padding: "0.9rem 1rem",
                borderRadius: "12px",
                textAlign: "left",
                fontFamily: "Poppins, sans-serif",
                fontSize: "0.95rem",
                fontWeight:
                  activeSection === link ? 600 : 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop {
            display: none !important;
          }

          .nav-hamburger {
            display: flex !important;
          }
        }

        @media (max-width: 768px) {
          nav {
            padding: 1rem 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          nav {
            padding: 0.9rem 1rem !important;
          }
        }
      `}</style>
    </>
  );
}