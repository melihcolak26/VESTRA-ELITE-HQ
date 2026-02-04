import { useState, useEffect } from 'react'
import './App.css'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import Blueprint from './components/Blueprint'
import { Zap, Activity, ArrowRight, Maximize2, Shield, Cpu, Lock } from 'lucide-react'

function App() {
  const [view, setView] = useState('landing');

  // Hard reset logic to clear possible bad state
  useEffect(() => {
    try {
      const saved = localStorage.getItem('vestra_view');
      if (saved) setView(saved);
    } catch (e) {
      console.error("State recovery failed", e);
      localStorage.clear();
    }
  }, []);

  const handleViewChange = (newView) => {
    setView(newView);
    localStorage.setItem('vestra_view', newView);
  };

  return (
    <div className="platform-root" style={{ background: '#020617', minHeight: '100vh', color: '#fff' }}>
      {view === 'landing' && (
        <div className="landing-page fade-in" style={{ padding: '20px' }}>
          <nav className="nav-elite" style={{ background: 'rgba(2,6,23,0.9)', padding: '25px', borderBottom: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="brand-v6" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Zap color="#10b981" fill="#10b981" size={28} />
              <span style={{ fontWeight: 900, fontSize: '1.5rem' }}>VESTRA ELITE</span>
            </div>
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
              <button 
                style={{ background: 'none', border: 'none', color: '#94A3B8', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', textTransform: 'uppercase' }} 
                onClick={() => handleViewChange('blueprint')}
              >
                The Blueprint
              </button>
              <button 
                style={{ background: '#fff', color: '#000', padding: '10px 25px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', border: 'none' }} 
                onClick={() => handleViewChange('analyst')}
              >
                GİRİŞ YAP
              </button>
            </div>
          </nav>

          <main className="container" style={{ textAlign: 'center', paddingTop: '150px' }}>
            <h1 style={{ fontSize: '5rem', fontWeight: 900, letterSpacing: '-4px', lineHeight: '1', marginBottom: '30px' }}>
               Mastering <br/> the Choice.
            </h1>
            <p style={{ fontSize: '1.4rem', color: '#94A3B8', maxWidth: '800px', margin: '0 auto 60px' }}>
              Karar Mimarlığı Ofisine Hoş Geldiniz kanki. 📐🛡️
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
               <button 
                 style={{ background: '#fff', color: '#000', padding: '20px 50px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', border: 'none', fontSize: '1.2rem' }} 
                 onClick={() => handleViewChange('analyst')}
               >
                 BAŞLAT
               </button>
               <button 
                 style={{ background: 'transparent', color: '#10b981', border: '2px solid #10b981', padding: '20px 50px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.2rem' }} 
                 onClick={() => handleViewChange('blueprint')}
               >
                 THE BLUEPRINT
               </button>
            </div>
          </main>
        </div>
      )}

      {view === 'blueprint' && <Blueprint onBack={() => handleViewChange('landing')} />}
      {view === 'analyst' && <Analyst onBack={() => handleViewChange('landing')} />}
    </div>
  )
}

export default App
