
import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "mohamedismail4071@email.com",
    link: "mailto:mohamedismail4071@email.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Tirunelveli, Tamil Nadu, India",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/mohamed-ismail-i",
    link: "https://www.linkedin.com/in/mohamed-ismail-i",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/ismail4071",
    link: "https://github.com/ismail4071",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_15llwvc",
        "template_b45s7y4",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Mohamed Ismail",
        },
        "HY4Pm7HgawpS2Jzdm"
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact">
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title">
        Contact <span>Me</span>
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
        Interested in working together? Have a project idea or opportunity?
        Send me a message and I will get back to you soon.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        <div className="fade-left">
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Let&apos;s Build Something Great
          </h3>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.9,
              marginBottom: "2rem",
            }}
          >
            I am currently open to internships, freelance projects, and full-time
            opportunities in Full Stack Development.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1rem",
              borderRadius: "999px",
              background: "rgba(34, 197, 94, 0.08)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
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
                boxShadow: "0 0 12px #22c55e",
              }}
            />
            Available for Opportunities
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {contactInfo.map((item) => {
              const content = (
                <>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      color: "#60a5fa",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid var(--border)",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <small
                      style={{
                        display: "block",
                        color: "#94a3b8",
                        fontSize: "0.72rem",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.label}
                    </small>

                    <span
                      style={{
                        color: "#ffffff",
                        fontSize: "0.92rem",
                        wordBreak: "break-word",
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                </>
              );

              const commonStyle = {
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                borderRadius: "18px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid var(--border)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              };

              if (item.link) {
                return (
                  <a
                    key={item.label}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                    style={commonStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.borderColor =
                        "rgba(96, 165, 250, 0.35)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 35px rgba(96, 165, 250, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={item.label} style={commonStyle}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="fade-right"
          style={{
            background: "rgba(15, 23, 42, 0.65)",
            border: "1px solid var(--border)",
            borderRadius: "28px",
            padding: "2rem",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <InputField
              label="Your Name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
            />

            <TextAreaField
              label="Message"
              name="message"
              placeholder="Tell me about your project or opportunity..."
              value={form.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                padding: "1rem 1.5rem",
                border: "none",
                borderRadius: "999px",
                background:
                  status === "sent"
                    ? "linear-gradient(135deg, #22c55e, #16a34a)"
                    : "linear-gradient(135deg, #4f8ef7, #a855f7)",
                color: "#ffffff",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                opacity: status === "sending" ? 0.75 : 1,
                transition: "all 0.3s ease",
                boxShadow: "0 0 35px rgba(79, 142, 247, 0.28)",
              }}
            >
              <FaPaperPlane />
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent Successfully!"
                : "Send Message"}
            </button>

            {status === "error" && (
              <p
                style={{
                  color: "#f87171",
                  textAlign: "center",
                  marginTop: "1rem",
                  fontSize: "0.88rem",
                }}
              >
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <label
        style={{
          display: "block",
          marginBottom: "0.5rem",
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "#94a3b8",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        style={inputStyle}
      />
    </div>
  );
}

function TextAreaField({ label, name, placeholder, value, onChange }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <label
        style={{
          display: "block",
          marginBottom: "0.5rem",
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "#94a3b8",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {label}
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
        required
        style={{
          ...inputStyle,
          resize: "vertical",
          minHeight: "140px",
        }}
      />
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.9rem 1rem",
  borderRadius: "12px",
  border: "1px solid var(--border)",
  background: "rgba(255, 255, 255, 0.04)",
  color: "#ffffff",
  fontFamily: "Poppins, sans-serif",
  fontSize: "0.95rem",
  outline: "none",
  transition: "all 0.3s ease",
  boxSizing: "border-box",
};