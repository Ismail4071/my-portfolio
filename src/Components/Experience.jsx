const experiences = [
  {
    company: 'Iconix Software Solution',
    role: 'Java Developer Intern',
    date: 'Apr 2023 – May 2023',
    desc:
      'Developed a Currency Converter application using Java and gained hands-on experience in core Java programming, object-oriented concepts, and application development.',
  },
  {
    company: 'Asta Systech',
    role: 'Full Stack Web Development Intern',
    date: 'May 2025',
    desc:
      'Built the EduCrudify System using Spring MVC, Hibernate, Thymeleaf, and H2 database, implementing CRUD operations for efficient educational data management.',
  },
];
export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">Professional Journey</div>
      <h2 className="section-title">
        My <span>Experience</span>
      </h2>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Timeline Line */}
        <div
          style={{
            position: 'absolute',
            left: 6,
            top: 0,
            bottom: 0,
            width: 2,
            background:
              'linear-gradient(to bottom, #4f8ef7, #a855f7, transparent)',
          }}
        />

        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className="fade-in"
            style={{
              position: 'relative',
              marginBottom: '2.5rem',
              paddingLeft: '2rem',
              transitionDelay: `${index * 150}ms`,
            }}
          >
            {/* Timeline Dot */}
            <div
              style={{
                position: 'absolute',
                left: '-2.38rem',
                top: '0.7rem',
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4f8ef7, #a855f7)',
                boxShadow: '0 0 20px rgba(79, 142, 247, 0.45)',
              }}
            />

            <ExperienceCard exp={exp} />
          </div>
        ))}
      </div>
    </section>
  )
}

function ExperienceCard({ exp }) {
  return (
    <div
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '18px',
        padding: '1.75rem',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = 'rgba(79,142,247,0.35)'
        e.currentTarget.style.boxShadow =
          '0 15px 40px rgba(79,142,247,0.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Company */}
      <div
        style={{
          color: '#60a5fa',
          fontSize: '0.82rem',
          fontWeight: 600,
          marginBottom: '0.35rem',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        {exp.company}
      </div>

      {/* Role */}
      <h3
        style={{
          fontSize: '1.08rem',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: '0.35rem',
        }}
      >
        {exp.role}
      </h3>

      {/* Date */}
      <div
        style={{
          fontSize: '0.78rem',
          color: '#94a3b8',
          marginBottom: '0.9rem',
        }}
      >
        📅 {exp.date}
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: '0.9rem',
          color: '#94a3b8',
          lineHeight: 1.8,
          margin: 0,
        }}
      >
        {exp.desc}
      </p>
    </div>
  )
}