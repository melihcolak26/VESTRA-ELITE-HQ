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
  Compass,
  CheckCircle2,
  Activity,
  Workflow
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const sections = [
    {
      title: "STRATEJİK VİZYON",
      subtitle: "Karar Vermenin Yeni Anayasası",
      description: "Vestra Elite, geleneksel 'asistan' mantığını çöpe atarak yerine 'Strategic Partner' disiplinini koyar. Hibrit MCDM (Çok Kriterli Karar Verme) mimarimiz, insan önyargılarını matematiksel kesinlikle eler.",
      points: ["Hata Payı Sıfır: Çapraz doğrulama motoru.", "Executive-Grade: Apple standartlarında veri dili.", "Zeka Entegrasyonu: Kimi & Gemini hibrit çekirdek."],
      icon: (
        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto mb-10 opacity-90">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="4" />
          <rect x="70" y="70" width="60" height="60" fill="none" stroke="#10b981" strokeWidth="3" rx="12" />
          <circle cx="100" cy="100" r="10" fill="#10b981" />
        </svg>
      )
    },
    {
      title: "AĞIRLIKLANDIRMA PROTOKOLLERİ",
      subtitle: "Kriterlere Hükmeden Zeka",
      description: "Karar verme sürecinin %70'i kriterlerin ne kadar önemli olduğunu belirlemektir. Vestra Elite, objektif ve subjektif iki farklı dünyayı birleştirir.",
      methods: [
        { name: "Shannon Entropy", desc: "Verideki belirsizliği ölçer. Gürültüyü temizleyerek saf sinyali ağırlıklandırır." },
        { name: "CRITIC Method", desc: "Kriterler arasındaki çatışmayı analiz eder. En adil ağırlık dengesini kurar." },
        { name: "AHP Protocol", desc: "İnsan tecrübesini AI muhakemesiyle (Kimi) birleştirerek ideal ağırlıkları bulur." }
      ],
      icon: (
        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto mb-10">
          <path d="M40 160 L100 40 L160 160 Z" fill="none" stroke="#6366f1" strokeWidth="2" />
          <circle cx="100" cy="100" r="30" fill="#6366f1" fillOpacity="0.1" stroke="#6366f1" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "SIRALAMA ALGORİTMALARI",
      subtitle: "Zirveyi Matematik Belirler",
      description: "Doğru seçeneği bulmak için TOPSIS, VIKOR, WASPAS ve EDAS gibi 12+ hibrit model eş zamanlı çalışır.",
      grid: [
        { label: "TOPSIS & CODAS", info: "İdeal mükemmelliğe olan mesafeyi milimetrik hesaplar." },
        { label: "VIKOR Protocol", info: "Maksimum grup faydası ve minimum pişmanlık noktasına odaklanır." },
        { label: "WASPAS Elite", info: "Akademik doğruluğun zirvesi. Toplamsal ve çarpımsal birleşim." }
      ],
      icon: (
        <svg viewBox="0 0 200 200" className="w-64 h-64 mx-auto mb-10">
          <rect x="50" y="50" width="100" height="100" fill="none" stroke="#10b981" strokeWidth="1" rx="20" />
          <circle cx="100" cy="80" r="8" fill="#10b981" />
        </svg>
      )
    }
  ];

  return (
    <div className="blueprint-master fade-in" style={{ 
      background: 'radial-gradient(circle at 50% -20%, #1e293b, #020617 90%)', 
      minHeight: '100vh', 
      color: '#fff',
      paddingBottom: '150px',
      fontFamily: "'Inter', sans-serif"
    }}>
      <nav style={{ padding: '30px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(2,6,23,0.3)', backdropFilter: 'blur(30px)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="flex items-center gap-4">
          <Zap size={32} fill="#10b981" color="#10b981" />
          <span style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-1px' }}>THE BLUEPRINT 📐</span>
        </div>
        <button onClick={onBack} className="btn-elite btn-elite-secondary">
          <ChevronLeft size={18} /> HUB'A DÖN
        </button>
      </nav>

      <div className="container">
        <header style={{ textAlign: 'center', paddingTop: '120px', marginBottom: '150px' }}>
          <div className="badge-v6" style={{ margin: '0 auto 40px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '100px', padding: '10px 30px' }}>
            STRATEJİK KARAR MİMARİSİ
          </div>
          <h1 style={{ fontSize: '8rem', fontWeight: 900, lineHeight: '0.8', letterSpacing: '-8px', marginBottom: '50px' }} className="shimmer-text">
            Mastering <br/> the Choice.
          </h1>
          <p style={{ fontSize: '2rem', color: '#94A3B8', maxWidth: '1000px', margin: '0 auto', lineHeight: '1.3' }}>
            Vestra Elite, Apple hassasiyetinde bir disiplinle, hibrit MCDM algoritmalarını <br/>
            tek bir "Süper Motor"da birleştirerek stratejik hatayı imkansız kılar.
          </p>
        </header>

        {sections.map((section, idx) => (
          <section key={idx} style={{ marginBottom: '250px' }}>
             <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                <div className={`${idx % 2 === 1 ? 'order-2' : ''}`}>
                   <div className="card-elite" style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
                      {section.icon}
                   </div>
                </div>
                <div>
                   <h2 style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: '0.9', marginBottom: '20px' }}>{section.title}</h2>
                   <h3 style={{ fontSize: '1.8rem', color: '#6366f1', fontWeight: 700, marginBottom: '30px' }}>{section.subtitle}</h3>
                   <p style={{ fontSize: '1.4rem', color: '#94A3B8', lineHeight: '1.6', marginBottom: '50px' }}>{section.description}</p>
                   
                   {section.points && section.points.map((p, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-3xl border border-white/5 mb-4">
                         <ShieldCheck size={24} className="text-emerald" />
                         <span className="text-lg font-bold">{p}</span>
                      </div>
                   ))}

                   {section.methods && section.methods.map((m, i) => (
                      <div key={i} className="p-6 bg-black/40 rounded-3xl border border-white/5 mb-4">
                         <span className="font-black text-xl text-emerald block mb-2">{m.name}</span>
                         <p className="text-secondary text-sm">{m.desc}</p>
                      </div>
                   ))}

                   {section.grid && (
                     <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        {section.grid.map((g, i) => (
                          <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5">
                             <p className="font-black text-emerald mb-2 text-sm">{g.label}</p>
                             <p className="text-secondary text-xs leading-snug">{g.info}</p>
                          </div>
                        ))}
                     </div>
                   )}
                </div>
             </div>
          </section>
        ))}

        <div style={{ textAlign: 'center', marginTop: '100px' }}>
           <button onClick={onBack} className="btn-elite btn-elite-primary" style={{ padding: '2rem 8rem', fontSize: '1.8rem' }}>
              ŞİMDİ BAŞLAT <ChevronRight size={32} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default Blueprint;
