import { useEffect, useState } from 'react'
import developerImg from "../assets/developer.png";

const roles = [
  'Full Stack Developer',
  'React Developer',
  'Software Developer',
  'MERN Stack Developer',
]
export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => setCharIndex((c) => c + 1), 90)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex((c) => c - 1), 55)
      } else {
        setDeleting(false)
        setRoleIndex((r) => (r + 1) % roles.length)
      }
    }
    setDisplayed(current.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3rem',
        paddingTop: '6rem',
      }}
    >
      {/* ── LEFT TEXT ── */}
      <div className="fade-left" style={{ flex: 1 }}>
        <div style={{
          display: 'inline-block',
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#4f8ef7',
          marginBottom: '1rem',
          padding: '0.4rem 1rem',
          border: '1px solid rgba(79,142,247,0.2)',
          borderRadius: '50px',
          background: 'rgba(79,142,247,0.06)',
        }}>
           Available for work
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '0.5rem',
        }}>
          Hi, I'm{' '}
          <span style={{
            background: 'linear-gradient(135deg,#4f8ef7,#a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Ismail</span>
        </h1>

        <p style={{
          fontSize: '1.35rem',
          color: '#8888aa',
          fontWeight: 400,
          marginBottom: '1.5rem',
          minHeight: '2.2rem',
        }}>
          {displayed}
          <span style={{
            borderRight: '2px solid #4f8ef7',
            marginLeft: '2px',
            animation: 'blink 0.7s infinite',
          }} />
        </p>

        <p style={{
          color: '#8888aa',
          lineHeight: 1.85,
          maxWidth: 500,
          marginBottom: '2.5rem',
          fontSize: '0.95rem',
        }}>
          I build modern, scalable web applications with clean code and great
          user experiences. Passionate about turning ideas into reality through
          technology.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => scrollTo('projects')}
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '50px',
              background: 'linear-gradient(135deg,#4f8ef7,#a855f7)',
              color: '#fff',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 0 30px rgba(79,142,247,0.35)',
              transition: 'transform 0.2s, box-shadow 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 0 50px rgba(79,142,247,0.55)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(79,142,247,0.35)'
            }}
          >
            View Projects ↓
          </button>

          <a
            href="/Mohamed_Ismail_Resume.pdf"
            download
            style={{
              padding: '0.85rem 2rem',
              borderRadius: '50px',
              background: 'linear-gradient(135deg,#4f8ef7,#a855f7)',
              color: '#fff',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              border: '1.5px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 0 30px rgba(79,142,247,0.35)',
              transition: 'transform 0.2s, border-color 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.borderColor = '#4f8ef7'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
            }}
          >
            Download Resume <span style={{ fontSize: '1rem' }}>↑</span> 
          </a>
        </div>
      </div>

      {/* ── RIGHT — PORTRAIT CARD ── */}
      <div className="fade-right" style={{
        flex: '0 0 300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>

        {/* Background glow */}
        <div style={{
          position: 'absolute',
          width: 280,
          height: 380,
          borderRadius: 32,
          background: 'radial-gradient(ellipse,rgba(79,142,247,0.18) 0%,rgba(168,85,247,0.1) 50%,transparent 80%)',
          filter: 'blur(30px)',
          animation: 'pulse 4s ease-in-out infinite',
          zIndex: 0,
        }} />

        {/* Shadow card behind (decorative) */}
        <div style={{
          position: 'absolute',
          width: 240,
          height: 320,
          borderRadius: 24,
          background: 'linear-gradient(135deg,#4f8ef720,#a855f720)',
          border: '1px solid rgba(168,85,247,0.2)',
          transform: 'rotate(6deg) translateY(8px)',
          zIndex: 1,
        }} />
        <div style={{
          position: 'absolute',
          width: 240,
          height: 320,
          borderRadius: 24,
          background: 'linear-gradient(135deg,#a855f715,#4f8ef715)',
          border: '1px solid rgba(79,142,247,0.15)',
          transform: 'rotate(-4deg) translateY(4px)',
          zIndex: 1,
        }} />

        {/* Main portrait card */}
        <div style={{
          position: 'relative',
          width: 240,
          height: 320,
          borderRadius: 24,
          overflow: 'hidden',
          border: '2px solid transparent',
          background: 'linear-gradient(#161625,#161625) padding-box, linear-gradient(135deg,#4f8ef7,#a855f7) border-box',
          animation: 'floatCard 4.5s ease-in-out infinite',
          zIndex: 2,
          boxShadow: '0 20px 60px rgba(79,142,247,0.2), 0 0 0 1px rgba(168,85,247,0.1)',
        }}>
          <img
  src={developerImg}
  alt="Mohamed Ismail"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
  }}
/>
          

          {/* Bottom glass overlay with name */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1rem',
            background: 'linear-gradient(to top, rgba(10,10,15,0.95) 0%, rgba(10,10,15,0.6) 60%, transparent 100%)',
            backdropFilter: 'blur(4px)',
          }}>
            <div style={{
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#f0f0ff',
              fontFamily: 'Poppins, sans-serif',
            }}></div>
            <div style={{
              fontSize: '0.72rem',
              color: '#4f8ef7',
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              marginTop: '0.15rem',
            }}></div>
          </div>
        </div>

        {/* Floating tech badges
        <div style={{
          position: 'absolute',
          top: 20,
          right: -10,
          background: 'rgba(22,22,37,0.92)',
          border: '1px solid rgba(97,218,251,0.3)',
          borderRadius: 10,
          padding: '0.38rem 0.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          backdropFilter: 'blur(10px)',
          zIndex: 5,
          animation: 'floatBadge1 4s ease-in-out infinite',
        }}>
          <span style={{ fontSize: '1rem' }}>⚛️</span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#61dafb', fontFamily: 'Poppins,sans-serif' }}>React</span>
        </div>

        <div style={{
          position: 'absolute',
          bottom: 60,
          left: -18,
          background: 'rgba(22,22,37,0.92)',
          border: '1px solid rgba(104,211,145,0.3)',
          borderRadius: 10,
          padding: '0.38rem 0.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          backdropFilter: 'blur(10px)',
          zIndex: 5,
          animation: 'floatBadge2 5s ease-in-out infinite',
        }}>
          <span style={{ fontSize: '1rem' }}>🟩</span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#68d391', fontFamily: 'Poppins,sans-serif' }}>Node.js</span>
        </div>

        <div style={{
          position: 'absolute',
          top: 100,
          right: -18,
          background: 'rgba(22,22,37,0.92)',
          border: '1px solid rgba(77,179,61,0.3)',
          borderRadius: 10,
          padding: '0.38rem 0.75rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          backdropFilter: 'blur(10px)',
          zIndex: 5,
          animation: 'floatBadge3 4.5s ease-in-out infinite',
        }}>
          <span style={{ fontSize: '1rem' }}>🍃</span>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4db33d', fontFamily: 'Poppins,sans-serif' }}>MongoDB</span>
        </div> */}

        {/* Glowing dots */}
        <div style={{
          position: 'absolute', top: 10, left: 10,
          width: 8, height: 8, borderRadius: '50%',
          background: '#a855f7', boxShadow: '0 0 14px #a855f7',
          animation: 'floatBadge1 3.5s ease-in-out infinite', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', bottom: 20, right: 5,
          width: 6, height: 6, borderRadius: '50%',
          background: '#4f8ef7', boxShadow: '0 0 12px #4f8ef7',
          animation: 'floatBadge2 4s ease-in-out 1s infinite', zIndex: 0,
        }} />
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        @keyframes floatCard {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          30%      { transform: translateY(-12px) rotate(0.5deg); }
          60%      { transform: translateY(-8px) rotate(-0.5deg); }
        }

        @keyframes pulse {
          0%,100% { opacity:0.7; transform:scale(1); }
          50%      { opacity:1;   transform:scale(1.06); }
        }

        @keyframes floatBadge1 {
          0%,100% { transform: translateY(0px) rotate(-1deg); }
          50%      { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes floatBadge2 {
          0%,100% { transform: translateY(0px) rotate(1deg); }
          50%      { transform: translateY(-10px) rotate(-1deg); }
        }
        @keyframes floatBadge3 {
          0%,100% { transform: translateY(0px) rotate(-2deg); }
          50%      { transform: translateY(-7px) rotate(2deg); }
        }

        .fade-left {
          opacity:0; transform:translateX(-30px);
          transition:opacity 0.8s ease,transform 0.8s ease;
        }
        .fade-right {
          opacity:0; transform:translateX(30px);
          transition:opacity 0.8s ease,transform 0.8s ease;
        }
        .fade-left.visible, .fade-right.visible {
          opacity:1; transform:translateX(0);
        }
        .fade-in {
          opacity:0; transform:translateY(28px);
          transition:opacity 0.7s ease,transform 0.7s ease;
        }
        .fade-in.visible { opacity:1; transform:translateY(0); }

        @media (max-width:768px) {
          #hero {
            flex-direction: column-reverse !important;
            text-align: center;
            padding-top: 7rem;
          }
          #hero > div:first-child > div:last-child {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}