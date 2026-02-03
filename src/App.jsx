import { useState, useEffect } from 'react'
import './App.css'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import Blueprint from './components/Blueprint'
import { Zap, Play, Shield, Cpu, Lock, ArrowRight, Maximize2, Activity, BarChart3 } from 'lucide-react'

function App() {
  const [view, setView] = useState(() => localStorage.getItem('vestra_view') || 'landing')
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  useEffect(() => {
    localStorage.setItem('vestra_view', view)
  }, [view])

  const startWizard = (template) => {
    setSelectedTemplate(template)
    setView('wizard')
  }

  return (
    <div className="platform-root" style={{ background: '#020617', minHeight: '100vh', color: '#fff' }}>
      {view === 'landing' && (
        <div className="landing-v6 fade-in">
          <nav className="nav-elite" style={{ background: 'rgba(2,6,23,0.9)', padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container flex justify-between items-center">
              <div className="brand-v6">
                <Zap size={28} fill="#10b981" color="#10b981" />
                <div className="flex flex-col">
                  <span style={{ fontWeight: 900, fontSize: '1.5rem' }}>VESTRA <span style={{ color: '#10b981' }}>ELITE</span></span>
                  <span style={{ fontSize: '0.5rem', letterSpacing: '0.1em', opacity: 0.6, marginTop: '-4px', fontWeight: 'bold' }}>POWERED BY INTELLIGENCE ENGINE</span>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <button 
                  style={{ background: 'none', border: 'none', color: '#94A3B8', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }} 
                  onClick={() => setView('blueprint')}
                >
                  THE BLUEPRINT
                </button>
                <button className="btn-elite btn-elite-primary" style={{ padding: '10px 25px', fontSize: '0.9rem' }} onClick={() => setView('analyst')}>
                  GİRİŞ YAP
                </button>
              </div>
            </div>
          </nav>

          <main className="container" style={{ textAlign: 'center', paddingTop: '150px' }}>
            <div className="badge-v6" style={{ margin: '0 auto 2rem', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '8px 20px', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
               <Activity size={14} color="#10b981" /> <span style={{ fontSize: '0.7rem', fontWeight: 900, color: '#10b981' }}>VESTRA ELITE: STRATEGIC SOLUTIONS</span>
            </div>
            
            <h1 className="shimmer-text" style={{ fontSize: '6rem', marginBottom: '30px', fontWeight: 900, letterSpacing: '-5px', lineHeight: '0.9' }}>
               The Science <br/> of Choice.
            </h1>
            
            <p style={{ fontSize: '1.5rem', color: '#94A3B8', maxWidth: '800px', margin: '0 auto 60px', lineHeight: '1.5' }}>
              Dünyanın en vizyoner liderleri için inşa edilen hibrit karar verme mimarisi. 
              Karmaşıklığı, matematiksel kesinliğe dönüştürüyoruz.
            </p>
            
            <div className="cta-group" style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <button className="btn-elite btn-elite-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.1rem' }} onClick={() => setView('analyst')}>
                 LANSMANI BAŞLAT <ArrowRight size={20} />
              </button>
              <button className="btn-elite btn-elite-secondary" style={{ padding: '1.5rem 4rem', fontSize: '1.1rem' }} onClick={() => setView('blueprint')}>
                 THE BLUEPRINT <Maximize2 size={20} />
              </button>
            </div>
            
            <div style={{ marginTop: '120px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
               <div className="card-elite" style={{ padding: '40px', textAlign: 'left' }}>
                  <Shield size={32} color="#10b981" />
                  <h3 style={{ marginTop: '20px', fontSize: '1.5rem', fontWeight: 900 }}>Hata Payı Sıfır</h3>
                  <p style={{ color: '#94A3B8', marginTop: '10px' }}>Hibrit modellerle çapraz doğrulama yapan tek motor.</p>
               </div>
               <div className="card-elite" style={{ padding: '40px', textAlign: 'left' }}>
                  <Cpu size={32} color="#6366f1" />
                  <h3 style={{ marginTop: '20px', fontSize: '1.5rem', fontWeight: 900 }}>AI Powered</h3>
                  <p style={{ color: '#94A3B8', marginTop: '10px' }}>Kimi ve Gemini entegrasyonuyla derin stratejik analiz.</p>
               </div>
            </div>
          </main>
        </div>
      )}

      {view === 'wizard' && selectedTemplate && (
        <div className="container py-20">
          <Wizard template={selectedTemplate} onBack={() => setView('landing')} />
        </div>
      )}

      {view === 'analyst' && (
        <Analyst onBack={() => setView('landing')} />
      )}

      {view === 'blueprint' && (
        <Blueprint onBack={() => setView('landing')} />
      )}
    </div>
  )
}

export default App
