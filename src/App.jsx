// V6.0 Elite Transformation - Build Version: 1770133440
import { useState, useEffect } from 'react'
import './App.css'
import { DECISION_TEMPLATES } from './templates/data'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import { Zap, Play, BarChart3, Shield, Cpu, Lock, Globe, Command, ArrowRight } from 'lucide-react'

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
    <div className="platform-root">
      {view === 'landing' && (
        <div className="landing-v6">
          <nav className="nav-elite">
            <div className="container flex justify-between">
              <div className="brand-v6">
                <Zap size={28} fill="#10b981" color="#10b981" />
                <div className="flex flex-col">
                  <span>VESTRA <span style={{ color: '#10b981', fontWeight: 900 }}>ELITE</span></span>
                  <span style={{ fontSize: '0.5rem', letterSpacing: '0.1em', opacity: 0.6, marginTop: '-4px', fontWeight: 'bold' }}>POWERED BY INTELLIGENCE ENGINE</span>
                </div>
              </div>
              <ul className="nav-links">
                <li><a href="#features">Bilim</a></li>
                <li><a href="#templates">Çözümler</a></li>
              </ul>
              <button className="btn-elite btn-elite-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }} onClick={() => setView('analyst')}>
                Platformu Başlat
              </button>
            </div>
          </nav>

          <main className="container">
            <header className="hero-v6" style={{ padding: '100px 0' }}>
              <h1 className="shimmer-text" style={{ fontSize: '4.5rem', marginBottom: '20px' }}>Elite Kararlar için Bilimsel Analitik.</h1>
              <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto 40px' }}>
                VESTRA ELITE, 12+ hibrit algoritma ve gerçek zamanlı zeka motoru ile 
                en karmaşık seçimlerinizi kusursuz bir kesinliğe kavuşturur.
              </p>
              
              <div className="cta-group">
                <button className="btn-elite btn-elite-primary" onClick={() => setView('analyst')}>
                   Hemen Başlat <Play size={18} fill="currentColor" />
                </button>
                <button className="btn-elite btn-elite-secondary" onClick={() => setView('analyst')}>
                  Profesyonel Panel <BarChart3 size={18} />
                </button>
              </div>
            </header>

            <section id="features" className="feature-bento" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <div className="bento-card">
                <Shield size={40} color="#10b981" className="mb-4" />
                <h3 className="font-black text-2xl mb-2">Hibrit Modelleme</h3>
                <p className="text-secondary">TOPSIS, EDAS ve CODAS modellerinin konsensüsü ile raporlanır.</p>
              </div>
              
              <div className="bento-card">
                <Cpu size={40} color="#6366f1" className="mb-4" />
                <h3 className="font-black text-xl mb-2">Akıllı Ağırlıklandırma</h3>
                <p className="text-secondary">Shannon Entropy ve CRITIC algoritmaları objektif kriter belirler.</p>
              </div>

              <div className="bento-card">
                <Lock size={40} color="#6366f1" className="mb-4" />
                <h3 className="font-black text-2xl mb-2">Maksimum Güvenlik</h3>
                <p className="text-secondary">Tüm analizleriniz yerel olarak saklanır, hiçbir zaman dışarı sızmaz.</p>
              </div>
            </section>
          </main>

          <footer className="py-20 border-t border-white/5 bg-black/40">
            <div className="container flex justify-between items-center">
              <div className="brand-v6 opacity-50">
                <Zap size={20} fill="#10b981" color="#10b981" /> 
                <div className="flex flex-col">
                  <span>VESTRA <span className="font-black">ELITE</span></span>
                  <span style={{ fontSize: '0.4rem', letterSpacing: '0.1em', fontWeight: 'bold' }}>POWERED BY VESTRA INTELLIGENCE ENGINE</span>
                </div>
              </div>
              <div className="text-xs text-secondary font-bold tracking-widest uppercase">
                © 2026 VESTRA ELITE. Mastering the Science of Choice.
              </div>
            </div>
          </footer>
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
    </div>
  )
}

export default App
