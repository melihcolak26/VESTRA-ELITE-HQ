import { useState, useEffect } from 'react'
import './App.css'
import Wizard from './components/Wizard'
import Analyst from './components/Analyst'
import Blueprint from './components/Blueprint'
import { Zap, Play, Layout, Shield, Cpu, Lock, HelpCircle, Monitor, ArrowRight, Maximize2, Activity } from 'lucide-react'

function App() {
  const [view, setView] = useState('landing')

  return (
    <div className="platform-root">
      {view === 'landing' && (
        <div className="landing-page fade-in">
          <nav className="nav-elite">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="brand-v6">
                <Zap color="#10b981" />
                <span>VESTRA ELITE</span>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <button className="btn-elite btn-elite-secondary" onClick={() => setView('blueprint')}>THE BLUEPRINT</button>
                <button className="btn-elite btn-elite-primary" onClick={() => setView('analyst')}>GİRİŞ YAP</button>
              </div>
            </div>
          </nav>

          <main className="container" style={{ textAlign: 'center', paddingTop: '100px' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '20px' }}>Mastering the Choice.</h1>
            <p style={{ fontSize: '1.2rem', color: '#94A3B8', marginBottom: '40px' }}>Bilimsel karar alma motoru başarıyla güncellendi.</p>
            <button className="btn-elite btn-elite-primary" style={{ padding: '20px 40px', fontSize: '1.2rem' }} onClick={() => setView('analyst')}>
              BAŞLAT
            </button>
          </main>
        </div>
      )}

      {view === 'blueprint' && <Blueprint onBack={() => setView('landing')} />}
      {view === 'analyst' && <Analyst onBack={() => setView('landing')} />}
    </div>
  )
}

export default App
