// src/Components/Education.jsx

const education = [
  {
    college: 'Sadakathullah Appa College',
    degree: 'B.Sc Computer Science',
    date: '2021 – 2024',
    cgpa: '8.17 / 10',
    result: 'First Class with Distinction',
    desc:
      'Studied core computer science subjects, participated in workshops events, and built a strong foundation in programming and software development.',
  },
  {
    college: 'Sadakathullah Appa College',
    degree: 'M.Sc Computer Science',
    date: '2024 – 2026',
    cgpa: 'n/a',
    result: 'completed',
    desc:
      'Focused on advanced computer science concepts, full stack development, participated in quizzes and coding events, and real-world project implementation.',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="section-label">Academic Background</div>

      <h2 className="section-title">
        My <span>Education</span>
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        {education.map((item, index) => (
          <EducationCard
            key={`${item.degree}-${index}`}
            item={item}
          />
        ))}
      </div>
    </section>
  )
}

function EducationCard({ item }) {
  return (
    <div
      className="fade-in"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        padding: '2rem',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = 'rgba(79,142,247,0.35)'
        e.currentTarget.style.boxShadow =
          '0 15px 40px rgba(79,142,247,0.10)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* College */}
      <div
        style={{
          fontSize: '0.85rem',
          color: '#4f8ef7',
          fontWeight: 600,
          marginBottom: '0.4rem',
        }}
      >
        🎓 {item.college}
      </div>

      {/* Degree */}
      <h3
        style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '0.4rem',
        }}
      >
        {item.degree}
      </h3>

      {/* Date */}
      <p
        style={{
          color: '#94a3b8',
          fontSize: '0.85rem',
          marginBottom: '1rem',
        }}
      >
        📅 {item.date}
      </p>

      {/* CGPA and Result */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '1rem',
        }}
      >
        <span
          style={{
            padding: '0.35rem 0.8rem',
            borderRadius: '999px',
            background: 'rgba(79,142,247,0.10)',
            color: '#60a5fa',
            border: '1px solid rgba(79,142,247,0.25)',
            fontSize: '0.78rem',
            fontWeight: 600,
          }}
        >
          CGPA: {item.cgpa}
        </span>

        <span
          style={{
            padding: '0.35rem 0.8rem',
            borderRadius: '999px',
            background: 'rgba(34,197,94,0.10)',
            color: '#22c55e',
            border: '1px solid rgba(34,197,94,0.25)',
            fontSize: '0.78rem',
            fontWeight: 600,
          }}
        >
          {item.result}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          color: '#94a3b8',
          lineHeight: 1.8,
          fontSize: '0.92rem',
          margin: 0,
        }}
      >
        {item.desc}
      </p>
    </div>
  )
}