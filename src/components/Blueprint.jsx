import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Zap, 
  ArrowRight, 
  Target, 
  Brain, 
  Cpu, 
  Layers,
  ChevronRight,
  ShieldCheck,
  Award,
  Compass,
  ZapOff,
  Lightbulb,
  Gem,
  CheckCircle2,
  Activity
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [activeStage, setActiveStage] = useState(0);

  const sections = [
    {
      title: "STRATEJİK VİZYON",
      subtitle: "Karar Vermenin Yeni Anayasası",
      description: "Vestra Elite, geleneksel 'asistan' mantığını çöpe atarak yerine 'Strategic Partner' disiplinini koyar.",
      points: ["Hata Payı Sıfır: Çapraz doğrulama motoru.", "Executive-Grade: Apple standartlarında veri dili."],
      icon: <Activity size={80} color="#10b981" />
    },
    {
      title: "AĞIRLIKLANDIRMA",
      subtitle: "Kriterlere Hükmeden Zeka",
      description: "Karar verme sürecinin %70'i kriterlerin ne kadar önemli olduğunu belirlemektir.",
      methods: [
        { name: "Shannon Entropy", desc: "Verideki belirsizliği ve kaos derecesini ölçer." },
        { name: "CRITIC Method", desc: "Kriterler arasındaki çatışmayı analiz eder." },
        { name: "AHP (Kimi AI)", desc: "AI muhakemesiyle ideal kıyaslama sunar." }
      ],
      icon: <Brain size={80} color="#6366f1" />
    },
    {
      title: "ALGORİTMALAR",
      subtitle: "Zirveyi Matematik Belirler",
      description: "Doğru seçeneği bulmak için 12+ hibrit model eş zamanlı çalışır.",
      grid: [
        { label: "TOPSIS & CODAS", meta: "GEOMETRİK" },
        { label: "VIKOR Protocol", meta: "UZLAŞMACI" },
        { label: "WASPAS Elite", meta: "HİBRİT KRAL" }
      ],
      icon: <Cpu size={80} color="#10b981" />
    }
  ];

  return (
    <div className="blueprint-v7 fade-in" style={{ background: '#020617', minHeight: '100vh', color: '#fff', paddingBottom: '100px' }}>
      <nav style={{ padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(2,6,23,0.9)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="flex items-center gap-3">
          <Zap size={28} fill="#10b981" color="#10b981" />
          <span className="font-black text-xl tracking-tighter uppercase">THE BLUEPRINT</span>
        </div>
        <button onClick={onBack} className="btn-elite btn-elite-secondary" style={{ padding: '8px 20px', fontSize: '0.8rem' }}>
          <ChevronLeft size={16} /> GERİ DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px' }}>
        <header style={{ textAlign: 'center', marginBottom: '100px' }}>
          <h1 className="shimmer-text" style={{ fontSize: '5rem', fontWeight: 900, letterSpacing: '-5px', lineHeight: '1' }}>The Science <br/> of Choice.</h1>
          <p style={{ fontSize: '1.5rem', color: '#94A3B8', marginTop: '30px' }}>Stratejik karar alma metodolojimizin temelleri.</p>
        </header>

        {sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '150px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div className="card-elite" style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
               {section.icon}
            </div>
            <div>
              <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '20px' }}>{section.title}</h2>
              <h3 style={{ fontSize: '1.5rem', color: '#10b981', marginBottom: '20px' }}>{section.subtitle}</h3>
              <p style={{ color: '#94A3B8', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px' }}>{section.description}</p>
              
              {section.points && section.points.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                  <CheckCircle2 size={20} color="#10b981" />
                  <span style={{ fontWeight: 700 }}>{p}</span>
                </div>
              ))}

              {section.methods && section.methods.map((m, i) => (
                <div key={i} style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', marginBottom: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <p style={{ fontWeight: 900, color: '#10b981' }}>{m.name}</p>
                  <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <button onClick={onBack} className="btn-elite btn-elite-primary" style={{ padding: '20px 60px', fontSize: '1.2rem' }}>
            ŞİMDİ BAŞLAYALIM <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blueprint;
