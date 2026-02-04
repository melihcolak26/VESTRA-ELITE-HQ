import React, { useState } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Ruler, PenTool, Target, Layers, 
  Brain, Cpu, Compass, Gem, Star, ShieldCheck, Activity, Search, 
  Clock, CheckCircle2, Info, Workflow, Database, Maximize2, MousePointer2,
  Box, Terminal, Layout, Briefcase, Car, Package, Code, Users, DollarSign
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [scannerStep, setScannerStep] = useState(0);
  const [scannerData, setScannerData] = useState({ source: '', type: '' });

  const methods = [
    { code: 'ENT-01', name: 'Shannon Entropy', type: 'Foundation Layer', emoji: '🎲', diff: 2, time: '5', what: 'Verideki çeşitliliği ölçer.', how: 'Kriterdeki varyasyon yüksekse o kritere yüksek ağırlık verir.', example: 'Fiyatlar çok yakınsa %5, farklıysa %40 ağırlık.', when: ['Tamamen objektif analiz', 'Hızlı ağırlıklandırma'], note: 'Verileriniz konuşsun istiyorsanız bu araç tam size göre!' },
    { code: 'CRT-02', name: 'CRITIC Method', type: 'Foundation Layer', emoji: '⚖️', diff: 3, time: '10', what: 'Kriter çatışmalarını ölçer.', how: 'Korelasyon ve standart sapma dengesini kurar.', example: 'Hız ve yakıt arasındaki çelişkiyi dengeleyerek ağırlık atar.', when: ['Çatışan kriterler varlığı', 'Kriterler arası yoğunluk'], note: 'Kriterler birbiriyle kavga ediyorsa barışı bu sağlar.' },
    { code: 'AHP-03', name: 'AHP Protocol', type: 'Foundation Layer', emoji: '🧠', diff: 4, time: '15', what: 'Uzman aklını matrise döker.', how: 'İkili kıyaslama ve AI muhakemesi.', example: 'Kalite fiyattan 3 kat daha önemli gibi uzman kararları.', when: ['Kişisel öncelikler kritikse', 'Vizyon odaklı seçimler'], note: 'Kimi AI ile birleşince dünyanın en akıllı uzmanı olur.' },
    { code: 'TPS-04', name: 'TOPSIS Elite', type: 'Structure Layer', emoji: '🎯', diff: 2, time: '5', what: 'İdeal noktaya mesafeyi ölçer.', how: 'Euclidean mesafe algoritmasıyla en iyiyi bulur.', example: 'Mükemmel gemiye en yakın olanı şampiyon yapar.', when: ['Genel seçim senaryoları', 'Yatırım kıyaslama'], note: 'Karar biliminin en sağlam ve popüler aracıdır.' },
    { code: 'VIK-08', name: 'VIKOR', type: 'Structure Layer', emoji: '🛡️', diff: 4, time: '12', what: 'Minimum pişmanlığı hedefler.', how: 'Maksimum grup faydası optimizasyonu yapar.', example: 'Tüm paydaşları orta noktada en mutlu eden seçimi bulur.', when: ['Grup kararları', 'Yüksek riskli dönüşümler'], note: 'Hata lüksünüz yoksa bu protokole güvenin.' },
    { code: 'WAS-09', name: 'WASPAS Matrix', type: 'Structure Layer', emoji: '💎', diff: 5, time: '15', what: 'Ultra hassas sıralama yapar.', how: 'Toplamsal ve çarpımsal modellerin %99.4 birleşimidir.', example: 'En teknik ve akademik tutarlılık gerektiren seçimler.', when: ['Maksimum doğruluk ihtiyacı', 'Teknik satın almalar'], note: 'Hata payını matematiksel olarak imkansız kılar.' }
  ];

  const projects = [
    { id: '001', name: 'ARAÇ ALIMI', icon: <Car size={20} />, client: 'Bireysel', criteria: 5, alts: 4, arch: 'Entropy + TOPSIS', result: 'Model B (%87)' },
    { id: '002', name: 'TEDARİKÇİ SEÇİMİ', icon: <Package size={20} />, client: 'Kurumsal', criteria: 8, alts: 12, arch: 'CRITIC + MOORA', result: 'Supplier 4 (%92)' },
    { id: '003', name: 'YATIRIM KARARI', icon: <Briefcase size={20} />, client: 'Yatırımcı', criteria: 6, alts: 5, arch: 'AHP + AI', result: 'Gayrimenkul A (%84)' }
  ];

  const scannerQuestions = [
    { 
      key: 'source', 
      q: 'Temel malzemeniz nedir? (Data Source)', 
      opts: [
        { l: 'Sadece rakamsal veri', v: 'Entropy' },
        { l: 'İlişkili kriterler', v: 'CRITIC' },
        { l: 'Uzman görüşü/tecrübe', v: 'AHP' }
      ] 
    },
    { 
      key: 'type', 
      q: 'Yapı türünüz ne olacak? (Decision Type)', 
      opts: [
        { l: 'En iyiyi bulmalıyım', v: 'TOPSIS' },
        { l: 'Ekip memnuniyeti', v: 'VIKOR' },
        { l: 'Güvenli adımlar', v: 'EDAS' }
      ] 
    }
  ];

  return (
    <div className="blueprint-paper fade-in">
      {/* 1. EXECUTIVE NAV */}
      <nav style={{ padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--bp-line)', background: 'rgba(2, 6, 23, 0.9)', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center gap-4">
          <Zap size={28} fill="var(--bp-primary)" color="var(--bp-primary)" />
          <div className="flex flex-col">
            <span className="mono" style={{ fontWeight: 900, fontSize: '1.4rem', color: '#fff' }}>THE BLUEPRINT 📐</span>
            <span style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--bp-primary)', letterSpacing: '0.3em' }}>KARAR MİMARİNİZ v10.5</span>
          </div>
        </div>
        <button onClick={onBack} className="btn-bp" style={{ padding: '10px 25px', fontSize: '0.75rem', borderRadius: '4px' }}>
          <ChevronLeft size={16} /> KOMUTA MERKEZİ
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1250px', padding: '100px 20px' }}>
        
        {/* 2. HERO: DARK ARCHITECT */}
        <header style={{ textAlign: 'center', marginBottom: '150px' }}>
           <div className="badge-v6" style={{ margin: '0 auto 30px' }}>
              PROTOCOL STATUS: ACTIVE
           </div>
           <h1 className="shimmer-text" style={{ fontSize: '7rem', fontWeight: 900, lineHeight: '0.85', letterSpacing: '-6px' }}>
              Kararın <br/> Mimarisini Çiz.
           </h1>
           <h2 className="technical" style={{ fontSize: '1.8rem', marginTop: '30px', color: '#94A3B8', fontWeight: 500 }}>
              MCDM Mimarlığının Ana Planı.
           </h2>
           <div className="measure-h"></div>
           <p className="mono" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 60px', color: '#cbd5e1', lineHeight: '1.6' }}>
             Senaryona en uygun yöntemi seç, temelini at ve stratejik yapını kur. 
             Vestra Elite ile belirsizlik, milimetrik bir taslağa dönüşür.
           </p>
           <div className="flex justify-center gap-6">
              <button className="btn-bp" onClick={onBack}>PLANIMI ÇİZ</button>
              <button className="btn-bp-outline">DEMO İNCELE</button>
           </div>
        </header>

        {/* 3. INTERACTIVE SCANNER */}
        <section style={{ marginBottom: '200px' }}>
           <div className="blueprint-border" style={{ padding: '80px', textAlign: 'center', borderRadius: '40px' }}>
              <h3 className="mono" style={{ fontSize: '2.5rem', marginBottom: '60px', color: 'var(--bp-primary)' }}>PROJE TARAYICI 🔬</h3>
              
              {scannerStep < scannerQuestions.length ? (
                <div className="fade-in">
                   <p className="technical" style={{ fontSize: '1.3rem', marginBottom: '50px', color: '#fff' }}>[{scannerStep + 1}/2] {scannerQuestions[scannerStep].q}</p>
                   <div className="flex justify-center gap-4 flex-wrap">
                      {scannerQuestions[scannerStep].opts.map((o, i) => (
                        <button 
                          key={i} 
                          className="btn-bp-outline hover:bg-emerald/10 transition-all"
                          style={{ borderRadius: '100px' }}
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
                   <div style={{ maxWidth: '550px', margin: '0 auto', border: '2px solid var(--bp-primary)', padding: '50px', background: 'rgba(16,185,129,0.05)', borderRadius: '30px' }}>
                      <div style={{ textAlign: 'left', marginBottom: '30px' }}>
                        <p className="mono" style={{ fontWeight: 900, color: 'var(--bp-primary)', fontSize: '1.2rem' }}>🗂 SİZİN BLUEPRINT PLANINIZ:</p>
                        <div className="measure-h" style={{ margin: '15px 0' }}></div>
                      </div>
                      <div className="technical" style={{ textAlign: 'left', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p><strong>FOUNDATION (Temel):</strong> <span className="text-emerald">{scannerData.source}</span></p>
                        <p><strong>STRUCTURE (Yapı):</strong> <span className="text-emerald">{scannerData.type}</span></p>
                        <p style={{ marginTop: '20px', fontWeight: 900, background: 'var(--bp-primary)', color: '#000', padding: '10px', textAlign: 'center' }}>
                           ÖNERİLEN MİMARİ: {scannerData.source}-{scannerData.type}
                        </p>
                      </div>
                      <button className="btn-bp" style={{ width: '100%', marginTop: '40px', borderRadius: '10px' }} onClick={() => setScannerStep(0)}>YENİDEN PLANLA</button>
                   </div>
                </div>
              )}
           </div>
        </section>

        {/* 4. METHOD CATALOG */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Çizim Araçları Kataloğu ⚒️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
              {methods.map((m, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden' }}>
                   <div style={{ padding: '25px', borderBottom: '1px solid var(--bp-line)', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono" style={{ fontWeight: 900, color: 'var(--bp-primary)', fontSize: '0.8rem' }}>CODE: {m.code}</span>
                      <div className="flex gap-1">
                        {[...Array(m.diff)].map((_, j) => <Star key={j} size={14} fill="var(--bp-primary)" color="var(--bp-primary)" />)}
                      </div>
                   </div>
                   <div style={{ padding: '40px' }}>
                      <div style={{ color: 'var(--bp-primary)', marginBottom: '25px' }}>{m.icon}</div>
                      <h4 className="mono" style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '15px' }}>{m.name} {m.emoji}</h4>
                      <p className="technical" style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.5, marginBottom: '20px' }}>TİP: {m.type.toUpperCase()} | SÜRE: ~{m.time} DK</p>
                      <div style={{ marginBottom: '30px' }}>
                        <p className="technical" style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--bp-primary)', marginBottom: '10px' }}>📐 NE YAPAR?</p>
                        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6' }}>{m.what}</p>
                      </div>
                      
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', border: '1px dashed var(--bp-line)', borderRadius: '20px', marginBottom: '30px' }}>
                        <p className="technical" style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--bp-primary)', marginBottom: '10px' }}>NASIL ÇALIŞIR?</p>
                        <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{m.how}</p>
                        <div className="measure-h" style={{ margin: '15px 0', opacity: 0.2 }}></div>
                        <p className="technical" style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--bp-primary)', marginBottom: '5px' }}>ÖRNEK UYGULAMA:</p>
                        <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{m.example}</p>
                      </div>

                      <div style={{ padding: '20px', borderLeft: '3px solid var(--bp-primary)', background: 'rgba(16,185,129,0.03)' }}>
                         <p className="technical" style={{ fontSize: '0.7rem', fontWeight: 900, opacity: 0.5 }}>💡 MİMARIN NOTU:</p>
                         <p style={{ fontSize: '0.9rem', italic: 'true', opacity: 0.8 }}>"{m.note}"</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 5. COMPARISON TABLE */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Mimar Masası: Karşılaştırma 📊</h3>
           <div className="blueprint-border" style={{ borderRadius: '30px', overflow: 'hidden', border: '2px solid var(--bp-line)' }}>
              <table className="blueprint-table">
                 <thead>
                    <tr>
                       <th>İHTİYACINIZ</th>
                       <th>TEMEL (WEIGHT)</th>
                       <th>YAPI (RANK)</th>
                       <th>MİMARİ NOT</th>
                       <th>HASSASİYET</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr><td>Tam Objektiflik</td><td className="mono">Entropy</td><td className="mono">TOPSIS</td><td className="technical">Duygusuz analiz</td><td>████░░</td></tr>
                    <tr><td>Zıt Hedefler</td><td className="mono">CRITIC</td><td className="mono">CODAS</td><td className="technical">Denge odaklı</td><td>█████░</td></tr>
                    <tr><td>Kişisel Vizyon</td><td className="mono">AHP</td><td className="mono">VIKOR</td><td className="technical">En az pişmanlık</td><td>████░░</td></tr>
                    <tr><td>Maks. Doğruluk</td><td className="mono">CRITIC</td><td className="mono">WASPAS</td><td className="technical">Akademik zirve</td><td>██████</td></tr>
                 </tbody>
              </table>
           </div>
        </section>

        {/* 6. PROJECTS */}
        <section style={{ marginBottom: '150px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Tamamlanmış Projeler 🏗️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
              {projects.map((p, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden' }}>
                   <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                      {p.icon}
                      <span className="mono" style={{ fontWeight: 900 }}>PROJE #{p.id}: {p.name}</span>
                   </div>
                   <div style={{ padding: '30px' }}>
                      <p style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '20px' }}>MÜŞTERİ: {p.client}</p>
                      <div style={{ margin: '20px 0', padding: '15px', borderLeft: '2px solid var(--bp-primary)', background: 'rgba(16,185,129,0.05)' }}>
                         <p className="mono" style={{ fontSize: '0.7rem', color: 'var(--bp-primary)', fontWeight: 900 }}>MİMARİ:</p>
                         <p style={{ fontSize: '0.9rem', fontWeight: 800 }}>{p.arch}</p>
                      </div>
                      <p style={{ fontWeight: 900, color: 'var(--bp-primary)' }}>SONUÇ: {p.result}</p>
                      <button className="btn-bp-outline" style={{ width: '100%', marginTop: '25px', padding: '12px', fontSize: '0.8rem', borderRadius: '10px' }}>PLANI İNCELE</button>
                   </div>
                </div>
              ))}
           </div>
        </section>

      </div>

      <footer style={{ padding: '80px', textAlign: 'center', opacity: 0.3 }}>
         <p className="mono" style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.5em' }}>VESTRA ELITE - ARCHITECTURAL DECISION SCIENCE © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
