import React, { useState } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Ruler, PenTool, Target, Layers, 
  Brain, Cpu, Compass, Gem, Star, ShieldCheck, Activity, 
  Clock, CheckCircle2, Workflow, Database, Briefcase, Car, Package, 
  Code, Users, DollarSign, Layout, Award
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const methods = [
    { code: 'ENT-01', name: 'ENTROPY', emoji: '🎲', type: 'Ağırlıklandırma Aracı', diff: 2, time: '5', what: 'Verideki belirsizliği ölçer.', how: 'Varyasyon yüksekse ağırlık artar.', note: 'Verileriniz konuşsun istiyorsanız bu araç tam size göre!' },
    { code: 'CRT-02', name: 'CRITIC', emoji: '⚖️', type: 'İlişkisel Ağırlık', diff: 3, time: '10', what: 'Kriter çatışmalarını ölçer.', how: 'Korelasyon dengesi kurar.', note: 'Kriterler birbiriyle kavga ediyorsa barışı bu sağlar.' },
    { code: 'AHP-03', name: 'AHP', emoji: '🧠', type: 'Subjektif Ağırlık', diff: 4, time: '15', what: 'Uzman aklını matrise döker.', how: 'İkili kıyaslama ve AI muhakemesi.', note: 'AI ile birleşince dünyanın en akıllı uzmanı olur.' },
    { code: 'TPS-04', name: 'TOPSIS', emoji: '🎯', type: 'Sıralama Aracı', diff: 2, time: '5', what: 'İdeal noktaya mesafeyi ölçer.', how: 'En iyiye yakınlığı bulur.', note: 'Karar biliminin en sağlam ve popüler aracıdır.' },
    { code: 'VIK-08', name: 'VIKOR', emoji: '🛡️', type: 'Uzlaşmacı Sıralama', diff: 4, time: '12', what: 'Minimum pişmanlığı hedefler.', how: 'Uzlaşma indeksi (Q) hesaplar.', note: 'Hata lüksünüz yoksa bu protokole güvenin.' },
    { code: 'WAS-09', name: 'WASPAS', emoji: '💎', type: 'Hibrit Sıralama', diff: 5, time: '15', what: 'Ultra hassas sıralama yapar.', how: 'Toplamsal ve çarpımsal birleşim.', note: 'Hata payını matematiksel olarak imkansız kılar.' }
  ];

  const projects = [
    { id: '001', name: 'ARAÇ ALIMI', icon: <Car size={20} />, client: 'Bireysel', criteria: 5, alts: 4, weight: 'Entropy', rank: 'TOPSIS', result: 'Model B (%87)' },
    { id: '002', name: 'TEDARİKÇİ SEÇİMİ', icon: <Package size={20} />, client: 'Kurumsal', criteria: 8, alts: 12, weight: 'CRITIC', rank: 'MOORA', result: 'Supplier 4 (%92)' },
    { id: '003', name: 'YATIRIM KARARI', icon: <Briefcase size={20} />, client: 'Yatırımcı', criteria: 6, alts: 5, weight: 'AHP + AI', rank: 'VIKOR', result: 'Estate A (%84)' },
    { id: '004', name: 'YAZILIM SEÇİMİ', icon: <Code size={20} />, client: 'Teknoloji', criteria: 10, alts: 6, weight: 'Entropy', rank: 'WASPAS', result: 'Cloud X (%98)' },
    { id: '005', name: 'PERSONEL DEĞ.', icon: <Users size={20} />, client: 'İK Birimi', criteria: 7, alts: 15, weight: 'AHP', rank: 'EDAS', result: 'Aday 3 (%89)' },
    { id: '006', name: 'PROJE ÖNCELİK.', icon: <Grid size={20} />, client: 'Ürün Yön.', criteria: 4, alts: 20, weight: 'CRITIC', rank: 'CODAS', result: 'Task Alpha (%95)' }
  ];

  return (
    <div className="blueprint-paper-v8 fade-in" style={{ paddingBottom: '150px' }}>
      {/* 1. EXECUTIVE NAV */}
      <nav style={{ padding: '30px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--bp-line)', background: 'rgba(2, 6, 23, 0.9)', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(30px)' }}>
        <div className="flex items-center gap-4">
          <Zap size={28} fill="var(--primary)" color="var(--primary)" />
          <div className="flex flex-col">
            <span className="mono" style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff', letterSpacing: '-1px' }}>THE BLUEPRINT 📐</span>
            <span style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.3em' }}>KARAR MİMARİNİZ v8.5 RESTORATION</span>
          </div>
        </div>
        <button onClick={onBack} className="btn-bp-v8" style={{ padding: '10px 30px', fontSize: '0.75rem', borderRadius: '4px' }}>
          <ChevronLeft size={16} /> HUB'A DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1250px', padding: '100px 20px' }}>
        
        {/* 2. HERO */}
        <header style={{ textAlign: 'center', marginBottom: '150px' }}>
           <div className="badge-bp" style={{ margin: '0 auto 30px' }}>
              PROTOCOL STATUS: ACTIVE
           </div>
           <h1 className="shimmer-text" style={{ fontSize: '7rem', fontWeight: 900, lineHeight: '0.85', letterSpacing: '-6px' }}>
              Kararın <br/> Mimarisini Çiz.
           </h1>
           <h2 className="technical" style={{ fontSize: '1.8rem', marginTop: '30px', color: '#94A3B8', fontWeight: 500 }}>
              Mavi-Yeşil Mimar Masası: The Masterpiece.
           </h2>
           <div className="measure-h"></div>
           <p className="mono" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 60px', color: '#cbd5e1', lineHeight: '1.6' }}>
             Senaryona en uygun yöntemi seç, temelini at ve stratejik yapını kur. 
             Vestra Elite, belirsizliği matematiksel bir taslağa dönüştürür.
           </p>
           <div className="flex justify-center gap-6">
              <button className="btn-bp-v8" onClick={onBack}>PLANIMI ÇİZ</button>
              <button className="btn-bp-outline-v8">DEMO İNCELE</button>
           </div>
        </header>

        {/* 3. QUICK START STEPS */}
        <section style={{ marginBottom: '150px' }}>
           <h3 className="mono" style={{ fontSize: '2.5rem', marginBottom: '60px', textAlign: 'center', color: 'var(--primary)' }}>Planınızı 3 Adımda Çizin ⚒️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {[
                { step: '01', title: 'TEMELİ ATIN', icon: <Ruler />, desc: 'Alternatifleri ve kriterleri tanımlayın. Planınızın taşıyıcı kolonları!' },
                { step: '02', title: 'MİMARİYİ SEÇİN', icon: <PenTool />, desc: 'Hangi araçlarla inşa edeceksiniz? Ağırlıklandırma + Sıralama seçimi.' },
                { step: '03', title: 'PLANI YORUMLAYIN', icon: <Target />, desc: 'Çizimler tamamlandı, karar net! Orti Elite Verdict ile sonucu inceleyin.' }
              ].map((s, i) => (
                <div key={i} className="blueprint-border" style={{ padding: '50px', borderRadius: '30px' }}>
                   <div style={{ fontSize: '0.7rem', fontWeight: 900, marginBottom: '20px', color: 'var(--primary)', opacity: 0.6 }}>ADIM {s.step} / {s.title}</div>
                   <div style={{ color: 'var(--primary)', marginBottom: '25px' }}>{React.cloneElement(s.icon, { size: 40 })}</div>
                   <h4 className="mono" style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{s.title}</h4>
                   <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.6' }}>{s.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 4. METHOD CATALOG CARDS */}
        <section style={{ marginBottom: '150px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Çizim Araçları Kataloğu 📐</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
              {methods.map((m, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden' }}>
                   <div style={{ padding: '25px', borderBottom: '1px solid var(--bp-line)', background: 'rgba(16, 185, 129, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono" style={{ fontWeight: 900, color: 'var(--primary)', fontSize: '0.8rem' }}>CODE: {m.code}</span>
                      <div className="flex gap-1">
                        {[...Array(m.diff)].map((_, j) => <Star key={j} size={14} fill="var(--primary)" color="var(--primary)" />)}
                      </div>
                   </div>
                   <div style={{ padding: '40px' }}>
                      <div style={{ color: 'var(--primary)', marginBottom: '25px' }}>{m.icon}</div>
                      <h4 className="mono" style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '15px' }}>{m.name} {m.emoji}</h4>
                      <p className="technical" style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.5, marginBottom: '25px' }}>TİP: {m.type.toUpperCase()} | SÜRE: ~{m.time} DK</p>
                      
                      <div style={{ marginBottom: '30px' }}>
                        <p className="technical" style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '10px' }}>📐 NE YAPAR?</p>
                        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6' }}>{m.what}</p>
                      </div>
                      
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', border: '1px dashed var(--bp-line)', borderRadius: '20px' }}>
                        <p className="technical" style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '10px' }}>🔍 NASIL ÇALIŞIR?</p>
                        <p style={{ fontSize: '0.9rem', color: '#94A3B8' }}>{m.how}</p>
                      </div>

                      <div style={{ marginTop: '30px', padding: '20px', borderLeft: '3px solid var(--primary)', background: 'rgba(16,185,129,0.05)' }}>
                         <p className="technical" style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.5, marginBottom: '5px' }}>💡 MİMARIN NOTU:</p>
                         <p style={{ fontSize: '0.9rem', italic: 'true', opacity: 0.9 }}>"{m.note}"</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 5. COMPARISON TABLE */}
        <section style={{ marginBottom: '150px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Mimar Masası: Karşılaştırma 📊</h3>
           <div className="blueprint-border" style={{ borderRadius: '30px', overflow: 'hidden' }}>
              <table className="blueprint-table">
                 <thead>
                    <tr>
                       <th>İHTİYACINIZ</th>
                       <th>AĞIRLIK</th>
                       <th>SIRALAMA</th>
                       <th>ZORLUK</th>
                       <th>HASSASİYET</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr><td>Tam Objektiflik</td><td className="mono">Entropy</td><td className="mono">TOPSIS</td><td>⭐️⭐️</td><td>████░░</td></tr>
                    <tr><td>Zıt Hedefler</td><td className="mono">CRITIC</td><td className="mono">CODAS</td><td>⭐️⭐️⭐️</td><td>█████░</td></tr>
                    <tr><td>Kişisel Vizyon</td><td className="mono">AHP</td><td className="mono">VIKOR</td><td>⭐️⭐️⭐️⭐️</td><td>████░░</td></tr>
                    <tr><td>Maks. Doğruluk</td><td className="mono">CRITIC</td><td className="mono">WASPAS</td><td>⭐️⭐️⭐️⭐️⭐️</td><td>██████</td></tr>
                 </tbody>
              </table>
           </div>
        </section>

        {/* 6. PROJECT FILES */}
        <section>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Tamamlanmış Projeler 🏗️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {projects.map((p, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden' }}>
                   <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid var(--bp-line)' }}>
                      <div className="text-primary">{p.icon}</div>
                      <span className="mono" style={{ fontWeight: 900, fontSize: '0.8rem' }}>PROJE #{p.id}: {p.name}</span>
                   </div>
                   <div style={{ padding: '35px' }}>
                      <p style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '20px' }}>MÜŞTERİ: {p.client}</p>
                      <div style={{ margin: '20px 0', padding: '15px', borderLeft: '2px solid var(--primary)', background: 'rgba(16,185,129,0.05)' }}>
                         <p className="mono" style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 900 }}>MİMARİ:</p>
                         <p style={{ fontSize: '0.9rem', fontWeight: 800 }}>├─ {p.weight}</p>
                         <p style={{ fontSize: '0.9rem', fontWeight: 800 }}>└─ {p.rank}</p>
                      </div>
                      <p style={{ fontWeight: 900, color: 'var(--primary)', fontSize: '1rem' }}>SONUÇ: {p.result}</p>
                      <button className="btn-bp-outline-v8" style={{ width: '100%', marginTop: '30px', padding: '10px', fontSize: '0.75rem', borderRadius: '10px' }}>PLANI İNCELE</button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Final CTA */}
        <section style={{ textAlign: 'center', marginTop: '150px', padding: '120px 60px', borderTop: '1px solid var(--bp-line)', background: 'linear-gradient(to bottom, rgba(16,185,129,0.05), transparent)' }}>
           <Award size={80} color="var(--primary)" style={{ margin: '0 auto 40px' }} />
           <h2 className="mono" style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '30px' }}>Geleceği Çizmeye Hazır Mısın?</h2>
           <button onClick={onBack} className="btn-bp-v8" style={{ padding: '25px 80px', fontSize: '1.5rem', borderRadius: '100px' }}>
              İLK PLANI BAŞLAT <ArrowRight size={32} />
           </button>
        </section>

      </div>

      <footer style={{ padding: '80px', textAlign: 'center', opacity: 0.3 }}>
         <p className="mono" style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.5em' }}>VESTRA ELITE - STRATEGIC ARCHITECTURE © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
