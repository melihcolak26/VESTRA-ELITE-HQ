import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Ruler, PenTool, Target, Layers, 
  Brain, Cpu, Compass, Gem, Star, ShieldCheck, Activity, Search, 
  Clock, CheckCircle2, Workflow, Database, Maximize2, MousePointer2,
  Box, Layout, Briefcase, Car, Package, Code, Users, DollarSign, Award,
  Monitor, Info, BarChart3, TrendingUp, AlertTriangle, Scale
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [scannerStep, setScannerStep] = useState(0);
  const [scannerData, setScannerData] = useState({ source: '', type: '' });

  const methods = [
    { code: 'ENT-01', name: 'Entropy', type: 'Ağırlıklandırma', diff: 2, time: '5', what: 'Verideki belirsizliği ölçer.', how: 'Varyasyon yüksekse ağırlık artar.', note: 'Verileriniz konuşsun istiyorsanız bu araç tam size göre!', emoji: '🎲' },
    { code: 'CRT-02', name: 'CRITIC', type: 'İlişkisel Ağırlık', diff: 3, time: '10', what: 'Kriter çatışmalarını ölçer.', how: 'Korelasyon ve sapmayı dengeler.', note: 'Kriterler arası barışı bu metod sağlar.', emoji: '⚖️' },
    { code: 'AHP-03', name: 'AHP', type: 'Subjektif Ağırlık', diff: 4, time: '15', what: 'Uzman aklını matrise döker.', how: 'AI (Kimi) destekli ikili kıyaslama.', note: 'Sektörel uzman AI ile stratejik derinlik katar.', emoji: '🧠' },
    { code: 'TPS-04', name: 'TOPSIS', type: 'Sıralama Aracı', diff: 2, time: '5', what: 'İdeal noktaya mesafeyi ölçer.', how: 'En iyiye yakınlığı hesaplar.', note: 'Karar biliminin en sağlam ve popüler aracıdır.', emoji: '🎯' },
    { code: 'VIK-08', name: 'VIKOR', type: 'Uzlaşmacı Sıralama', diff: 4, time: '12', what: 'Minimum pişmanlığı hedefler.', how: 'Grup faydası optimizasyonu yapar.', note: 'Hata lüksünüz yoksa bu protokole güvenin.', emoji: '🛡️' },
    { code: 'WAS-09', name: 'WASPAS', type: 'Ultra Sıralama', diff: 5, time: '15', what: 'Toplamsal ve çarpımsal birleşim.', how: 'Hassasiyeti %99.4\'e çıkarır.', note: 'Akademik doğruluğun ulaştığı son noktadır.', emoji: '💎' },
    { code: 'EDA-05', name: 'EDAS', type: 'Sıralama Aracı', diff: 3, time: '8', what: 'Ortalamadan sapma analizi.', how: 'Pozitif ve negatif farkları ölçer.', note: 'Belirsizlik altında en stabil sonuç budur.', emoji: '📈' },
    { code: 'CDA-06', name: 'CODAS', type: 'Hibrit Mesafe', diff: 3, time: '10', what: 'İki farklı mesafeyi birleştirir.', how: 'Euclidean + Taxicab algoritmaları.', note: 'Keskin farkların olduğu kritik kararlar için.', emoji: '📏' },
    { code: 'MOR-07', name: 'MOORA', type: 'Oran Analizi', diff: 2, time: '5', what: 'Fayda/maliyet oranlaması yapar.', how: 'Basit ve net verimlilik skorlaması.', note: 'Tedarikçi seçiminde dünya standardıdır.', emoji: '⚖️' },
    { code: 'ARS-10', name: 'ARAS', type: 'Toplamsal Sıralama', diff: 2, time: '6', what: 'Karmaşık olmayan fayda analizi.', how: 'Doğrusal normalizasyon kullanır.', note: 'Hızlı operasyonel seçimler için idealdir.', emoji: '🚀' }
  ];

  const projects = [
    { id: '001', name: 'ARAÇ ALIMI', icon: <Car size={20} />, weight: 'Entropy', rank: 'TOPSIS', result: 'Model B (%87)' },
    { id: '002', name: 'TEDARİKÇİ SEÇİMİ', icon: <Package size={20} />, weight: 'CRITIC', rank: 'MOORA', result: 'Supplier 4 (%92)' },
    { id: '003', name: 'YATIRIM KARARI', icon: <Briefcase size={20} />, weight: 'AHP + AI', rank: 'VIKOR', result: 'Gayrimenkul A (%84)' },
    { id: '004', name: 'YAZILIM SEÇİMİ', icon: <Code size={20} />, weight: 'Entropy', rank: 'WASPAS', result: 'Cloud X (%98)' },
    { id: '005', name: 'PERSONEL DEĞ.', icon: <Users size={20} />, weight: 'AHP', rank: 'EDAS', result: 'Aday 3 (%89)' },
    { id: '006', name: 'PROJE ÖNCELİK.', icon: <Layout size={20} />, weight: 'CRITIC', rank: 'CODAS', result: 'Alpha (%95)' }
  ];

  const scannerQuestions = [
    { key: 'source', q: 'Temel malzemeniz nedir? (Data Source)', opts: [{ l: 'Sadece rakamsal veri', v: 'Entropy' }, { l: 'İlişkili kriterler', v: 'CRITIC' }, { l: 'Uzman görüşü/tecrübe', v: 'AHP' }] },
    { key: 'type', q: 'Yapı türünüz ne olacak? (Decision Type)', opts: [{ l: 'En iyiyi bulmalıyım', v: 'TOPSIS' }, { l: 'Ekip memnuniyeti', v: 'VIKOR' }, { l: 'Güvenli adımlar', v: 'EDAS' }] }
  ];

  return (
    <div className="blueprint-paper fade-in" style={{ background: '#020617', minHeight: '100vh', color: '#fff', paddingBottom: '150px' }}>
      
      {/* 1. TECHNICAL NAV */}
      <nav style={{ padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--bp-line)', background: 'rgba(2, 6, 23, 0.9)', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center gap-4">
          <Zap size={32} fill="#10b981" color="#10b981" />
          <div className="flex flex-col">
            <span className="mono" style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', letterSpacing: '-1px' }}>THE BLUEPRINT 📐</span>
            <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#10b981', letterSpacing: '0.3em' }}>STRATEJİK KARAR MİMARİSİ v8.5</span>
          </div>
        </div>
        <button onClick={onBack} className="btn-bp" style={{ background: '#fff', color: '#000', padding: '10px 30px', fontWeight: 900, border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          <ChevronLeft size={16} /> HUB'A DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1250px', margin: '0 auto', padding: '100px 20px' }}>
        
        {/* 2. HERO: DARK MİMAR MASASI */}
        <header style={{ textAlign: 'center', marginBottom: '150px' }}>
           <div className="badge-v6" style={{ margin: '0 auto 30px', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#10b981', padding: '8px 25px', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={14} /> <span style={{ fontSize: '0.7rem', fontWeight: 900 }}>SPEC NO: 2026-V8-ELITE</span>
           </div>
           <h1 className="shimmer-text" style={{ fontSize: '7rem', fontWeight: 900, lineHeight: '0.85', letterSpacing: '-6px' }}>
              The Blueprint.
           </h1>
           <h2 className="technical" style={{ fontSize: '2rem', marginTop: '30px', color: '#94A3B8', fontWeight: 500 }}>
              Her Büyük Karar Bir Plan ile Başlar.
           </h2>
           <div className="measure-h" style={{ background: 'rgba(16, 185, 129, 0.2)' }}></div>
           <p className="mono" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 60px', color: '#cbd5e1', lineHeight: '1.6' }}>
             Senaryona en uygun yöntemi seç, temelini at ve stratejik yapını kur. 
             Vestra Elite ile belirsizlik, milimetrik bir taslağa dönüşür kanki. 📐✨
           </p>
           <div className="flex justify-center gap-6">
              <button className="btn-bp" style={{ background: '#10b981', color: '#000', padding: '15px 40px', fontWeight: 900, border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={onBack}>PLANIMI ÇİZ</button>
              <button className="btn-bp-outline" style={{ border: '1px solid #10b981', color: '#10b981', padding: '15px 40px', fontWeight: 900, background: 'transparent', borderRadius: '4px', cursor: 'pointer' }}>DEMO İNCELE</button>
           </div>
        </header>

        {/* 3. QUICK START */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '2.5rem', marginBottom: '60px', textAlign: 'center', color: '#10b981' }}>Planınızı 3 Adımda Çizin</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {[
                { title: 'TEMELİ ATIN', icon: <Ruler size={40} />, desc: 'Alternatifleri ve kriterleri tanımlayın. Planınızın taşıyıcı kolonları!' },
                { title: 'MİMARİYİ SEÇİN', icon: <PenTool size={40} />, desc: 'Hangi araçlarla inşa edeceksiniz? Ağırlıklandırma + Sıralama.' },
                { title: 'PLANI YORUMLAYIN', icon: <Target size={40} />, desc: 'Çizimler tamamlandı. Orti Elite Verdict ile sonucu inceleyin.' }
              ].map((s, i) => (
                <div key={i} className="blueprint-border" style={{ padding: '50px', borderRadius: '30px', background: 'rgba(16, 185, 129, 0.03)' }}>
                   <div style={{ color: '#10b981', marginBottom: '25px' }}>{s.icon}</div>
                   <h4 className="mono" style={{ fontSize: '1.3rem', marginBottom: '15px' }}>0{i+1}. {s.title}</h4>
                   <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: '1.5' }}>{s.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 4. METHOD CATALOG: THE 10 TOOLS */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Çizim Araçları Kataloğu 📐⚒️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px' }}>
              {methods.map((m, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                   <div style={{ padding: '25px', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', background: 'rgba(16, 185, 129, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono" style={{ fontWeight: 900, color: '#10b981', fontSize: '0.8rem' }}>CODE: {m.code}</span>
                      <div className="flex gap-1">
                        {[...Array(m.diff)].map((_, j) => <Star key={j} size={14} fill="#10b981" color="#10b981" />)}
                      </div>
                   </div>
                   <div style={{ padding: '40px' }}>
                      <h4 className="mono" style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '15px' }}>{m.name} {m.emoji}</h4>
                      <p className="technical" style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.5, marginBottom: '25px', color: '#10b981' }}>TİP: {m.type.toUpperCase()} | SÜRE: ~{m.time} DK</p>
                      
                      <div style={{ marginBottom: '30px' }}>
                        <p className="technical" style={{ fontSize: '0.85rem', fontWeight: 900, color: '#10b981', marginBottom: '10px' }}>📐 NE YAPAR?</p>
                        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6' }}>{m.what}</p>
                      </div>
                      
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', border: '1px dashed rgba(16, 185, 129, 0.2)', borderRadius: '20px', marginBottom: '30px' }}>
                        <p className="technical" style={{ fontSize: '0.85rem', fontWeight: 900, color: '#10b981', marginBottom: '10px' }}>NASIL ÇALIŞIR?</p>
                        <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>{m.how}</p>
                      </div>

                      <div style={{ padding: '20px', borderLeft: '3px solid #10b981', background: 'rgba(16, 185, 129, 0.05)' }}>
                         <p style={{ fontSize: '0.9rem', italic: 'true', opacity: 0.8 }}>"Kanki, {m.note}"</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 5. PROJECTS */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Tamamlanmış Projeler 🏗️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {projects.map((p, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                   <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <div className="text-emerald">{p.icon}</div>
                      <span className="mono" style={{ fontWeight: 900, fontSize: '0.8rem' }}>PROJE #{p.id}: {p.name}</span>
                   </div>
                   <div style={{ padding: '35px' }}>
                      <div style={{ margin: '20px 0', padding: '15px', borderLeft: '2px solid #10b981', background: 'rgba(16,185,129,0.03)' }}>
                         <p className="mono" style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 900 }}>SEÇİLEN MİMARİ:</p>
                         <p style={{ fontSize: '0.9rem', fontWeight: 800 }}>├─ {p.weight}</p>
                         <p style={{ fontSize: '0.9rem', fontWeight: 800 }}>└─ {p.rank}</p>
                      </div>
                      <p style={{ fontWeight: 900, color: '#10b981', fontSize: '1rem' }}>SONUÇ: {p.result}</p>
                      <button className="btn-bp-outline" style={{ width: '100%', marginTop: '30px', padding: '12px', fontSize: '0.75rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}>PLANI İNCELE</button>
                   </div>
                </div>
              ))}
           </div>
        </section>

      </div>

      <footer style={{ padding: '80px', textAlign: 'center', opacity: 0.3 }}>
         <p className="mono" style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.5em' }}>VESTRA ELITE - STRATEGIC ARCHITECTURE © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
