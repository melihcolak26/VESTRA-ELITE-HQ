import React, { useState } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Ruler, PenTool, Target, Layers, 
  Brain, Cpu, Compass, Gem, Star, ShieldCheck, Activity, Search, 
  Clock, CheckCircle2, Info, InfoIcon, Workflow, Database, Maximize2, MousePointer2
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [scannerStep, setScannerStep] = useState(0);
  const [scannerData, setScannerData] = useState({ source: '', type: '', time: '' });

  const methods = [
    { code: 'ENT-01', name: 'Shannon Entropy', type: 'Foundation Layer', desc: 'Verideki belirsizliği ölçerek objektif ağırlık temelleri atarsın.', emoji: '🎲', when: 'Veriler konuşsun istendiğinde.', icon: <Layers size={40} /> },
    { code: 'CRT-02', name: 'CRITIC Method', type: 'Foundation Layer', desc: 'Kriterler arası gizli ilişkileri bularak bilgi tekrarını önlersin.', emoji: '⚖️', when: 'Çelişkili hedefler varsa.', icon: <Activity size={40} /> },
    { code: 'AHP-03', name: 'AHP Protocol', type: 'Foundation Layer', desc: 'Uzman görüşlerini matematiksel tutarlılıkla temele dökersin.', emoji: '🧠', when: 'Vizyon ve tecrübe odaklı kararlarda.', icon: <Brain size={40} /> },
    { code: 'TPS-04', name: 'TOPSIS Elite', type: 'Structure Layer', desc: 'İdeal çözüme en yakın noktayı geometrik olarak konumlandırırsın.', emoji: '🎯', when: 'Genel seçim ve yatırım analizlerinde.', icon: <Target size={40} /> },
    { code: 'EDA-05', name: 'EDAS Robust', type: 'Structure Layer', desc: 'Ortalama performanstan sapma analiziyle sağlam yapılar kurarsın.', emoji: '📈', when: 'Volatilite ve uç değerler varsa.', icon: <Compass size={40} /> },
    { code: 'WAS-09', name: 'WASPAS Matrix', type: 'Structure Layer', desc: 'Hibrit modellerle %99.4 akademik hassasiyete ulaşırsın.', emoji: '💎', when: 'Maksimum teknik doğruluk gerektiğinde.', icon: <Gem size={40} /> }
  ];

  const scannerQuestions = [
    { 
      key: 'source', 
      q: 'Temel malzemeniz nedir?', 
      opts: [
        { l: 'Sadece rakamsal veri', v: 'Entropy' },
        { l: 'İlişkili kriterler', v: 'CRITIC' },
        { l: 'Uzman görüşü/tecrübe', v: 'AHP' }
      ] 
    },
    { 
      key: 'type', 
      q: 'Yapı türünüz ne olacak?', 
      opts: [
        { l: 'En iyiyi bulmalıyım', v: 'TOPSIS' },
        { l: 'Ekip memnuniyeti', v: 'VIKOR' },
        { l: 'Güvenli adımlar', v: 'EDAS' }
      ] 
    }
  ];

  return (
    <div className="blueprint-paper fade-in">
      {/* 1. TECHNICAL NAV */}
      <nav style={{ padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--bp-primary)', background: 'white' }}>
        <div className="flex items-center gap-4">
          <div style={{ padding: '8px', border: '2px solid var(--bp-primary)' }}>
            <Zap size={28} fill="var(--bp-primary)" color="var(--bp-primary)" />
          </div>
          <div className="flex flex-col">
            <span className="mono" style={{ fontWeight: 900, fontSize: '1.4rem', color: 'var(--bp-primary)' }}>THE BLUEPRINT 📐</span>
            <span style={{ fontSize: '0.6rem', fontWeight: 800, opacity: 0.6, letterSpacing: '0.4em' }}>STRATEJİK KARAR MİMARİSİ</span>
          </div>
        </div>
        <button onClick={onBack} className="btn-bp">
          <ChevronLeft size={18} /> KOMUTA MERKEZİ
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1300px', padding: '100px 20px' }}>
        
        {/* 2. HERO SECTION */}
        <header style={{ textAlign: 'center', marginBottom: '150px' }}>
           <div className="mono" style={{ padding: '8px 25px', border: '1px solid var(--bp-primary)', display: 'inline-block', marginBottom: '40px', background: 'rgba(30,64,175,0.05)' }}>
              SPEC NO: 2026-V6-ELITE
           </div>
           <h1 className="mono" style={{ fontSize: '6rem', fontWeight: 900, color: 'var(--bp-primary)', lineHeight: '0.85', letterSpacing: '-5px' }}>
              The Blueprint.
           </h1>
           <h2 className="technical" style={{ fontSize: '1.8rem', marginTop: '30px', color: 'var(--bp-dark)', fontWeight: 700 }}>
              Karar Verme Mimarlığının Ana Planı.
           </h2>
           <div className="measure-h"></div>
           <p className="mono" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 60px', opacity: 0.8, lineHeight: '1.6' }}>
             Senaryona en uygun yöntemi seç, temelini at ve stratejik yapını kur. 
             Vestra Elite ile her seçim artık matematiksel bir taslaktır.
           </p>
           <div className="flex justify-center gap-6">
              <button className="btn-bp" style={{ padding: '20px 60px', fontSize: '1.1rem' }}>PROJENİ PLANLA</button>
              <button className="btn-bp-outline" style={{ padding: '20px 60px', fontSize: '1.1rem' }}>DEMO İNCELE</button>
           </div>
        </header>

        {/* 3. PROJECT SCANNER (Interactive) */}
        <section style={{ marginBottom: '150px' }}>
           <div className="blueprint-border" style={{ background: 'white', padding: '80px', textAlign: 'center' }}>
              <h3 className="mono" style={{ fontSize: '2.5rem', marginBottom: '60px' }}>PROJE TANIMLAMA MODÜLÜ 🔬</h3>
              
              {scannerStep < scannerQuestions.length ? (
                <div className="fade-in">
                   <p className="technical" style={{ fontSize: '1.2rem', marginBottom: '40px', fontWeight: 900 }}>ADIM 0{scannerStep + 1}: {scannerQuestions[scannerStep].q}</p>
                   <div className="flex justify-center gap-4 flex-wrap">
                      {scannerQuestions[scannerStep].opts.map((o, i) => (
                        <button 
                          key={i} 
                          className="btn-bp-outline hover:bg-blue-50 transition-all"
                          onClick={() => {
                            setScannerData({ ...scannerData, [scannerQuestions[scannerStep].key]: o.v });
                            setScannerStep(scannerStep + 1);
                          }}
                        >
                           {o.l}
                        </button>
                      ))}
                   </div>
                </div>
              ) : (
                <div className="fade-in">
                   <div style={{ maxWidth: '500px', margin: '0 auto', border: '3px solid var(--bp-primary)', padding: '40px' }}>
                      <div style={{ textAlign: 'left', marginBottom: '30px' }}>
                        <p className="mono" style={{ fontWeight: 900, color: 'var(--bp-primary)' }}>🗂 SİZİN PROJE PLANINIZ:</p>
                        <div className="measure-h" style={{ margin: '10px 0' }}></div>
                      </div>
                      <div className="technical" style={{ textAlign: 'left', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p><strong>TEMEL:</strong> {scannerData.source}</p>
                        <p><strong>YAPI:</strong> {scannerData.type}</p>
                        <p style={{ color: 'var(--bp-green)', fontWeight: 900 }}>KOMBİNASYON: {scannerData.source}-{scannerData.type}</p>
                      </div>
                      <button className="btn-bp" style={{ width: '100%', marginTop: '40px' }} onClick={() => setScannerStep(0)}>YENİDEN ÇİZ</button>
                   </div>
                </div>
              )}
           </div>
        </section>

        {/* 4. METHOD CARDS */}
        <section style={{ marginBottom: '150px' }}>
           <h3 className="mono" style={{ fontSize: '2.5rem', marginBottom: '60px', textAlign: 'center' }}>ARAÇ KATALOĞU ⚒️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px' }}>
              {methods.map((m, i) => (
                <div key={i} className="blueprint-card">
                   <div style={{ padding: '20px', borderBottom: '1px solid var(--bp-grid)', display: 'flex', justifyContent: 'space-between', background: 'rgba(30,64,175,0.02)' }}>
                      <span className="mono" style={{ fontWeight: 900, opacity: 0.4 }}>CODE: {m.code}</span>
                      <span className="technical" style={{ fontWeight: 900, fontSize: '0.7rem', color: 'var(--bp-primary)' }}>{m.type}</span>
                   </div>
                   <div style={{ padding: '40px' }}>
                      <div style={{ color: 'var(--bp-primary)', marginBottom: '20px' }}>{m.icon}</div>
                      <h4 className="mono" style={{ fontSize: '1.6rem', marginBottom: '15px' }}>{m.name}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--bp-dark)', marginBottom: '30px', fontWeight: 600 }}>{m.desc}</p>
                      
                      <div style={{ background: 'var(--bp-bg)', padding: '20px', border: '1px dashed var(--bp-primary)', marginBottom: '30px' }}>
                        <p className="technical" style={{ fontSize: '0.8rem', fontWeight: 900, marginBottom: '10px' }}>KULLANIM:</p>
                        <p className="technical" style={{ fontSize: '0.8rem' }}>• {m.when}</p>
                      </div>

                      <button className="btn-bp-outline" style={{ width: '100%', fontSize: '0.7rem' }}>PLANI İNCELE</button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 5. COMPARISON TABLE */}
        <section style={{ marginBottom: '150px' }}>
           <h3 className="mono" style={{ fontSize: '2.5rem', marginBottom: '60px', textAlign: 'center' }}>TEKNİK KARŞILAŞTIRMA CETVELİ 📊</h3>
           <div className="blueprint-border" style={{ background: 'white', overflowX: 'auto' }}>
              <table className="blueprint-table" style={{ border: 'none' }}>
                 <thead>
                    <tr>
                       <th>PROJE TİPİ</th>
                       <th>TEMEL (WEIGHT)</th>
                       <th>YAPI (RANK)</th>
                       <th>MİMARİ NOT</th>
                    </tr>
                 </thead>
                 <tbody className="technical">
                    <tr><td>Tedarikçi Seçimi</td><td>Entropy</td><td>MOORA</td><td>Hızlı ve pratik</td></tr>
                    <tr><td>İK Kararı</td><td>AHP</td><td>VIKOR</td><td>Grup uzlaşması</td></tr>
                    <tr><td>Ar-Ge Projesi</td><td>CRITIC</td><td>CODAS</td><td>Hassas ilişki</td></tr>
                    <tr><td>Finansal Portföy</td><td>Entropy</td><td>EDAS</td><td>Volatilite yönetimi</td></tr>
                 </tbody>
              </table>
           </div>
        </section>

        {/* 6. CONSTRUCTION FLOW */}
        <section style={{ textAlign: 'center', padding: '100px 0', borderTop: '2px solid var(--bp-primary)' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {[
                { l: 'Site Survey', d: 'Veri Toplama' },
                { l: 'Foundation', d: 'Ağırlıklandırma' },
                { l: 'Structural Build', d: 'Sıralama' },
                { l: 'Final Inspection', d: 'Raporlama' }
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                   <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--bp-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, marginBottom: '20px' }}>{i+1}</div>
                   <p className="mono" style={{ fontWeight: 900, fontSize: '0.8rem' }}>{f.l}</p>
                   <p className="technical" style={{ fontSize: '0.7rem', opacity: 0.6 }}>{f.d}</p>
                </div>
              ))}
           </div>
        </section>

      </div>

      <footer style={{ padding: '80px', textAlign: 'center', borderTop: '1px solid var(--bp-grid)' }}>
         <p className="mono" style={{ fontSize: '0.8rem', fontWeight: 900 }}>VESTRA ELITE - ARCHITECTURAL DECISION SCIENCE © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
