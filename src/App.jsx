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
    <div className="platform-root fade-in">
      <div className="glow-orb" style={{ top: '5%', left: '10%', width: '600px', height: '600px', background: 'rgba(16, 185, 129, 0.08)', animation: 'pulse-slow 10s infinite' }}></div>
      <div className="glow-orb" style={{ top: '40%', right: '-5%', width: '500px', height: '500px', background: 'rgba(99, 102, 241, 0.05)', animation: 'pulse-slow 15s infinite reverse' }}></div>

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
                <li><a href="#features">Science</a></li>
                <li><a href="#templates">Solutions</a></li>
                <li><a href="#">Intelligence</a></li>
              </ul>
              <button className="btn-elite btn-elite-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }} onClick={() => setView('analyst')}>
                Launch Platform
              </button>
            </div>
          </nav>

          <main className="container">
            <header className="hero-v6">
              <div className="badge-v6">
                <Command size={14} /> V6.0 ELITE TRANSFORMATION
              </div>
              <h1 className="shimmer-text">Mastering the Science of Choice.</h1>
              <p>
                VESTRA ELITE, powered by the core <strong>Intelligence Engine</strong>, empowers global leaders with 
                mathematical precision through 12+ hybrid MCDM algorithms and real-time strategic insights.
              </p>
              
              <div className="cta-group">
                <button className="btn-elite btn-elite-primary" onClick={() => setView('analyst')}>
                   Hemen Başlat <Play size={18} fill="currentColor" />
                </button>
                <button className="btn-elite btn-elite-secondary" onClick={() => setView('analyst')}>
                  Analist Hub <BarChart3 size={18} />
                </button>
              </div>
            </header>

            <section id="features" className="feature-bento">
              <div className="bento-card bento-1">
                <div className="bento-glow" style={{ background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.15), transparent 70%)' }}></div>
                <Shield size={40} color="#10b981" className="mb-4" />
                <h3 className="font-black text-2xl mb-2">Hybrid Multi-Criteria Modeling</h3>
                <p className="text-secondary max-w-md">Simultaneous execution of TOPSIS, EDAS, and CODAS for unprecedented cross-validation accuracy.</p>
                <div className="mt-auto pt-8 flex gap-4 opacity-50">
                   <div className="text-xs font-bold border border-white/10 px-2 py-1 rounded">TOPSIS</div>
                   <div className="text-xs font-bold border border-white/10 px-2 py-1 rounded">EDAS</div>
                   <div className="text-xs font-bold border border-white/10 px-2 py-1 rounded">CODAS</div>
                </div>
              </div>
              
              <div className="bento-card bento-2">
                <div className="bento-glow" style={{ background: 'radial-gradient(circle at bottom left, rgba(99, 102, 241, 0.15), transparent 70%)' }}></div>
                <Cpu size={40} color="#6366f1" className="mb-4" />
                <h3 className="font-black text-xl mb-2">Intelligent Weighting</h3>
                <p className="text-secondary">Shannon Entropy & CRITIC algorithms eliminate cognitive bias.</p>
              </div>

              <div className="bento-card bento-3">
                <div className="bento-glow" style={{ background: 'radial-gradient(circle at top left, rgba(16, 185, 129, 0.1), transparent 70%)' }}></div>
                <Globe size={40} color="#10b981" className="mb-4" />
                <h3 className="font-black text-xl mb-2">Global Sync</h3>
                <p className="text-secondary">Real-time logistics and market data integration.</p>
              </div>

              <div className="bento-card bento-4">
                <div className="bento-glow" style={{ background: 'radial-gradient(circle at bottom right, rgba(99, 102, 241, 0.1), transparent 70%)' }}></div>
                <Lock size={40} color="#6366f1" className="mb-4" />
                <h3 className="font-black text-2xl mb-2">Obsidian-Grade Security</h3>
                <p className="text-secondary max-w-md">Zero-knowledge local processing. Your strategic data never touches our servers, protected by end-to-end encryption.</p>
                <div className="mt-8 text-emerald font-bold flex items-center gap-2 cursor-pointer hover:underline">
                  View Elite Protocols <ArrowRight size={16} />
                </div>
              </div>
            </section>

            <section id="templates" className="py-20 text-center">
               <h2 className="font-black text-4xl mb-4 tracking-tighter uppercase">Elite Scenarios</h2>
               <p className="text-secondary mb-12">Industry-specific templates optimized for the Science of Choice.</p>
               <div className="flex flex-wrap justify-center gap-6">
                  {Object.values(DECISION_TEMPLATES).map(t => (
                    <div key={t.id} className="card-elite p-8 cursor-pointer transition-all hover:-translate-y-2 hover:border-emerald/30 group" style={{ width: '300px' }} onClick={() => startWizard(t)}>
                      <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{t.icon}</div>
                      <h4 className="font-black text-lg mb-2">{t.name}</h4>
                      <p className="text-xs text-secondary mb-6 leading-relaxed">{t.description}</p>
                      <div className="text-emerald font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">Execute Analysis →</div>
                    </div>
                  ))}
               </div>
            </section>
            <section id="logos" className="py-20">
               <h2 className="font-black text-2xl mb-12 text-center opacity-30 uppercase tracking-[0.5em]">Identity Variations</h2>
               <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center opacity-40 hover:opacity-100 transition-opacity">
                  {[1,2,3,4,5,6,7,8].map(i => (
                    <img key={i} src={`/logos/logo${i}.svg`} alt={`Logo ${i}`} className="w-12 h-12 hover:scale-125 transition-transform cursor-pointer" />
                  ))}
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
              <div className="flex gap-4 opacity-50">
                <Globe size={18} />
                <Lock size={18} />
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
