export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2.5rem 1rem",
        borderTop: "1px solid var(--border)",
        color: "#94a3b8",
        fontSize: "0.9rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: "1.3rem",
          fontWeight: 700,
          background: "linear-gradient(135deg,#4f8ef7,#a855f7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Mohamed Ismail
      </h3>

      <p
        style={{
          margin: "0.6rem 0",
          color: "#94a3b8",
        }}
      >
        Full Stack Developer • MERN Stack Developer
      </p>

      <p
        style={{
          margin: 0,
          color: "#64748b",
          fontSize: "0.85rem",
        }}
      >
        © {year} Mohamed Ismail. All Rights Reserved.
      </p>
    </footer>
  );
}