import React, { useState, useEffect } from 'react'
 
const App = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
 
  useEffect(() => {
    const target = new Date()
    // Set target to March 15 of current year
    target.setMonth(2) // March is month 2 (0-indexed)
    target.setDate(15)
    target.setHours(0, 0, 0, 0) // Set to midnight
    
    // If March 15 has passed this year, set to next year
    if (target < new Date()) {
      target.setFullYear(target.getFullYear() + 1)
    }
    
    const interval = setInterval(() => {
      const diff = target - new Date()
      if (diff <= 0) {
        clearInterval(interval)
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])
 
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0d0b08',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      color: '#f0e6d0',
      padding: '16px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Outfit:wght@300;400&display=swap%27);
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .f1 { animation: fadeUp 0.8s ease 0.1s both; }
        .f2 { animation: fadeUp 0.8s ease 0.35s both; }
        .f3 { animation: fadeUp 0.8s ease 0.6s both; }
        .f4 { animation: fadeUp 0.8s ease 0.85s both; }
        
        /* Mobile-specific styles */
        @media (max-width: 480px) {
          .timer-container {
            gap: 0px !important;
            margin-bottom: 40px !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          .timer-item {
            padding: 12px 12px !important;
            min-width: 60px !important;
          }
        }
      `}</style>
 
      <div style={{
        textAlign: 'center',
        padding: '20px 16px',
        maxWidth: '600px',
        width: '100%'
      }}>
 
        <div className="f1" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(9px, 3vw, 11px)',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(200,151,62,0.7)',
          marginBottom: 'clamp(16px, 5vw, 24px)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          padding: '0 8px'
        }}>
          Nellore · Andhra Pradesh · India
        </div>
 
        <h1 className="f2" style={{
          fontSize: 'clamp(42px, 15vw, 96px)',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          marginBottom: '4px',
          wordBreak: 'break-word'
        }}>
          TMR <span style={{ fontStyle: 'italic', color: '#c8973e' }}>Agro</span>
        </h1>
 
        <p className="f2" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(11px, 3.5vw, 13px)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(240,230,208,0.35)',
          marginBottom: 'clamp(32px, 8vw, 52px)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          padding: '0 8px'
        }}>
          Premium Rice Exports · Worldwide
        </p>
 
        <div className="f3 timer-container" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(0px, 2vw, 2px)',
          marginBottom: 'clamp(32px, 8vw, 52px)',
          flexWrap: 'wrap'
        }}>
          {Object.entries(time).map(([unit, val]) => (
            <div key={unit} className="timer-item" style={{
              padding: 'clamp(12px, 3vw, 18px) clamp(12px, 4vw, 20px)',
              minWidth: 'clamp(60px, 18vw, 72px)',
              borderTop: '1px solid rgba(200,151,62,0.3)',
              flex: '0 1 auto'
            }}>
              <div style={{
                fontSize: 'clamp(24px, 8vw, 44px)',
                fontWeight: 300,
                color: '#c8973e',
                lineHeight: 1
              }}>
                {String(val).padStart(2, '0')}
              </div>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(8px, 2.5vw, 10px)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(240,230,208,0.3)',
                marginTop: '4px'
              }}>
                {unit}
              </div>
            </div>
          ))}
        </div>
 
        <p className="f4" style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(11px, 3.5vw, 13px)',
          letterSpacing: '0.12em',
          color: 'rgba(240,230,208,0.4)',
          fontWeight: 300,
          padding: '0 8px'
        }}>
          Launching Soon
        </p>
 
      </div>
    </div>
  )
}
 
export default App
