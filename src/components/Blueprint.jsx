import React, { useState } from 'react';
import { 
  ChevronLeft, Zap, ArrowRight, Ruler, PenTool, Target, Layers, 
  Brain, Cpu, Compass, Gem, Star, ShieldCheck, Activity, 
  CheckCircle2, Workflow, Database, Briefcase, Car, Package, 
  Code, Users, DollarSign, Layout, Scale, TrendingUp, Info,
  Search, FileText, BarChart3, Globe
} from 'lucide-react';
import { 
  topsis, edas, codas, moora, vikor, waspas, 
  calculateEntropyWeights, calculateCriticWeights 
} from '../engine/mcdm';

const Blueprint = ({ onBack }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [projectModel, setProjectModel] = useState('topsis');

  const methods = [
    { code: 'W-ENT', name: 'Shannon Entropy', cat: 'Ağırlıklandırma', what: 'Veri setindeki belirsizlik ve varyasyonu analiz eder.', how: 'Kriter değerleri arasındaki dağılımı ölçer; varyasyonun en yüksek olduğu kriteri, karar üzerindeki en etkili sinyal olarak belirler.', note: 'Duygulardan arındırılmış, tamamen veriye dayalı bir önem sırası oluşturmak için temel araçtır.' },
    { code: 'W-CRT', name: 'CRITIC Method', cat: 'Ağırlıklandırma', what: 'Kriterler arasındaki çatışmayı ve yoğunluğu ölçer.', how: 'Standart sapma ve korelasyon analizini birleştirerek, birbirini tekrar eden bilgileri eler ve kriterler arası dengeyi sağlar.', note: 'Zıt kutuplu teknik parametrelerin yönetilmesi gereken mühendislik kararlarında vazgeçilmezdir.' },
    { code: 'W-AHP', name: 'AHP Protocol', cat: 'Ağırlıklandırma', what: 'Hiyerarşik uzman görüşünü matematiksel matrise döker.', how: 'Kriterleri ikili kıyaslama ölçeği (1-9) üzerinden değerlendirir. Sektörel verileri uzman görüşüyle harmanlayarak rasyonel ağırlıklar üretir.', note: 'Stratejik vizyon ve sektörel tecrübenin rakamların önüne geçtiği kritik kararlarda kullanılır.' },
    { code: 'R-TPS', name: 'TOPSIS Elite', cat: 'Sıralama', what: 'İdeal çözüme en yakın noktayı geometrik olarak bulur.', how: 'Pozitif-ideal ve negatif-ideal hayali noktalar oluşturur; seçeneklerin bu noktalara olan Euclidean mesafelerini hesaplayarak en stabil tercihi sunar.', note: 'Karar biliminin en popüler ve çok yönlü sıralama algoritmasıdır.' },
    { code: 'R-VIK', name: 'VIKOR Protocol', cat: 'Sıralama', what: 'Uzlaşmacı çözüm ve minimum pişmanlık odaklıdır.', how: 'Maksimum grup faydası ve minimum bireysel üzüntü noktasına odaklanarak, riskli ortamlarda en güvenli orta yolu bulur.', note: 'Hata toleransı düşük olan yüksek riskli kurumsal dönüşüm süreçleri için idealdir.' },
    { code: 'R-WAS', name: 'WASPAS Matrix', cat: 'Sıralama', what: 'Toplamsal ve çarpımsal modellerin %99.4 hassasiyetli hibritidir.', how: 'WSM ve WPM modellerini optimize edilmiş bir katsayı ile birleştirerek en yüksek doğruluğu hedefler.', note: 'Akademik düzeyde kesinlik ve mühendislik düzeyinde tutarlılık arayan kararlar için altın standarttır.' },
    { code: 'R-EDA', name: 'EDAS Robust', cat: 'Sıralama', what: 'Ortalamadan sapma analiziyle sağlam yapılar kurar.', how: 'Ortalama çözümden pozitif ve negatif sapmaları ölçerek kararı stabilize eder.', note: 'Uç değerlerin (volatilite) olduğu veri setlerinde en güvenilir sonuçları üretir.' },
    { code: 'R-CDA', name: 'CODAS Hybrid', cat: 'Sıralama', what: 'İki farklı mesafe ölçümünü (Euclidean & Taxicab) kombine eder.', how: 'Kuş uçuşu ve grid mesafeyi birlikte kullanarak keskin veri farklarını analiz eder.', note: 'Hata toleransının minimum olduğu teknik kalite kontrol senaryolarında şampiyondur.' },
    { code: 'R-MOR', name: 'MOORA Ratio', cat: 'Sıralama', what: 'Fayda/Maliyet oranlaması üzerinden verimlilik ölçer.', how: 'Kriterleri fayda ve maliyet olarak ayırıp normalize ederek saf bir performans skoru çıkarır.', note: 'Tedarikçi seçimi ve hızlı operasyonel kıyaslamalar için global bir standarttır.' },
    { code: 'R-ARS', name: 'ARAS Additive', cat: 'Sıralama', what: 'Optimum değer tabanlı toplamsal sıralama yapar.', how: 'Seçenekleri ideal bir referans noktasıyla kıyaslayarak göreceli verimlilik analizi üretir.', note: 'Karmaşık olmayan ama yüksek rasyonellik beklenen seçim süreçleri için idealdir.' }
  ];

  const caseProjects = [
    { id: 'P-101', name: 'Hammadde Tedarik Yönetimi', sector: 'Sanayi', client: 'X Global Üretim', matrix: { alternatives: ['Tedarikçi A', 'Tedarikçi B', 'Tedarikçi C', 'Tedarikçi D'], criteria: [{name: 'Birim Fiyat', b: false}, {name: 'Kalite', b: true}, {name: 'Termin', b: false}, {name: 'Sertifika', b: true}], data: [[120, 85, 12, 7], [135, 95, 8, 9], [110, 70, 15, 6], [125, 90, 10, 8]] } },
    { id: 'P-102', name: 'Filo Modernizasyonu', sector: 'Lojistik', client: 'Y Dağıtım Grubu', matrix: { alternatives: ['Model X', 'Model Y', 'Model Z'], criteria: [{name: 'Yakıt', b: false}, {name: 'Kapasite', b: true}, {name: 'Servis', b: true}, {name: 'Ömür', b: true}], data: [[28, 40, 9, 10], [32, 45, 7, 8], [30, 42, 8, 9]] } },
    { id: 'P-103', name: 'Altyapı Yatırımı', sector: 'Enerji', client: 'Z Holding', matrix: { alternatives: ['Bölge 1', 'Bölge 2', 'Bölge 3'], criteria: [{name: 'ROI', b: true}, {name: 'Risk', b: false}, {name: 'Teşvik', b: true}, {name: 'Impact', b: true}], data: [[18, 4, 30, 8], [22, 7, 40, 6], [15, 2, 20, 9]] } },
    { id: 'P-104', name: 'Cloud Sağlayıcı Seçimi', sector: 'BT Altyapı', client: 'Tech Corp', matrix: { alternatives: ['Provider 1', 'Provider 2', 'Provider 3'], criteria: [{name: 'Maliyet', b: false}, {name: 'Uptime', b: true}, {name: 'Güvenlik', b: true}, {name: 'Destek', b: true}], data: [[500, 99.9, 9, 8], [450, 99.5, 8, 9], [600, 99.99, 10, 7]] } },
    { id: 'P-105', name: 'Executive İşe Alım', sector: 'İK Stratejisi', client: 'Retail Grubu', matrix: { alternatives: ['Aday A', 'Aday B', 'Aday C'], criteria: [{name: 'Deneyim', b: true}, {name: 'Maliyet', b: false}, {name: 'Vizyon', b: true}, {name: 'EQ', b: true}], data: [[15, 250, 9, 8], [12, 200, 7, 9], [18, 300, 10, 7]] } },
    { id: 'P-106', name: 'Rota Optimizasyonu', sector: 'Denizcilik', client: 'Liner Lojistik', matrix: { alternatives: ['Rota A', 'Rota B', 'Rota C'], criteria: [{name: 'Süre', b: false}, {name: 'Yakıt', b: false}, {name: 'Hava Risk', b: false}, {name: 'Liman Verim', b: true}], data: [[12, 140, 3, 9], [10, 160, 5, 8], [15, 130, 2, 7]] } }
  ];

  const calculateCaseResults = (project, model) => {
    const weights = calculateEntropyWeights(project.matrix.data);
    const beneficial = project.matrix.criteria.map(c => c.b);
    if (model === 'topsis') return topsis(project.matrix.data, weights, beneficial);
    if (model === 'edas') return edas(project.matrix.data, weights, beneficial);
    if (model === 'vikor') return vikor(project.matrix.data, weights, beneficial);
    return topsis(project.matrix.data, weights, beneficial);
  };

  return (
    <div className="blueprint-paper fade-in" style={{ background: '#020617', minHeight: '100vh', color: '#fff', paddingBottom: '150px' }}>
      
      {/* 1. BRAND HEADER */}
      <nav style={{ padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(16, 185, 129, 0.2)', background: 'rgba(2, 6, 23, 0.95)', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
             <div style={{ border: '2px solid #10b981', padding: '6px' }}>
               <Zap size={24} fill="#10b981" color="#10b981" />
             </div>
             <span className="mono" style={{ fontWeight: 900, fontSize: '1.4rem' }}>THE BLUEPRINT</span>
          </div>
          <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }}></div>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981', letterSpacing: '2px' }}>STRATEJİK KARAR METODOLOJİSİ</span>
        </div>
        <button onClick={onBack} className="btn-bp" style={{ background: 'transparent', border: '1px solid #10b981', color: '#10b981', padding: '10px 30px', borderRadius: '4px', fontWeight: 900, cursor: 'pointer' }}>
          <ChevronLeft size={18} /> HUB'A DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1250px', padding: '100px 20px' }}>
        
        {/* 2. HERO */}
        <header style={{ textAlign: 'center', marginBottom: '150px' }}>
           <div className="badge-v6" style={{ margin: '0 auto 30px' }}>METODOLOJİK STANDARTLAR</div>
           <h1 className="shimmer-text" style={{ fontSize: '7rem', fontWeight: 900, lineHeight: '0.85', letterSpacing: '-6px' }}>
              Karar Verme <br/> Mimarlığı.
           </h1>
           <h2 className="technical" style={{ fontSize: '2rem', marginTop: '30px', color: '#94A3B8', fontWeight: 500 }}>
              Karmaşıklığı Yöneten Matematiksel Disiplin.
           </h2>
           <div className="measure-h"></div>
           <p className="mono" style={{ fontSize: '1.1rem', maxWidth: '850px', margin: '0 auto 60px', color: '#cbd5e1', lineHeight: '1.6' }}>
             Senaryonuza en uygun yöntemi seçin, stratejik temellerinizi atın ve karar yapınızı bilimsel bir kesinlikle yükseltin. 
             Vestra Elite, belirsizliği kusursuz bir stratejik taslağa dönüştürür.
           </p>
           <div className="flex justify-center gap-6">
              <button className="btn-bp" style={{ background: '#fff', color: '#000', padding: '20px 60px', borderRadius: '4px', fontWeight: 900, border: 'none' }} onClick={onBack}>ANALİZİ BAŞLAT</button>
              <button className="btn-bp-outline" style={{ border: '1px solid #fff', color: '#fff', padding: '20px 60px', borderRadius: '4px', fontWeight: 900, background: 'transparent' }}>LABORATUVAR</button>
           </div>
        </header>

        {/* 3. STEP GUIDE */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Strateji Oluşturma Aşamaları</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {[
                { title: 'TEMEL KATMAN (Veri)', icon: <Database />, desc: 'Alternatiflerinizi ve ölçülebilir kriterlerinizi sisteme tanımlayın. Bu, analizinizin temel parametrelerini oluşturur.' },
                { title: 'MODEL KONFİGÜRASYONU', icon: <Workflow />, desc: 'Karar senaryonuza en uygun Ağırlıklandırma ve Sıralama modelini belirleyin. Sistemin hangi yöntemle çalışacağını seçin.' },
                { title: 'STRATEJİK ANALİZ RAPORU', icon: <TrendingUp />, desc: 'Hibrit hesaplamalar tamamlandığında, Nihai Değerlendirme ile seçeneklerinize dair karşılaştırmalı ve rasyonel sonuçları inceleyin.' }
              ].map((s, i) => (
                <div key={i} className="blueprint-border" style={{ padding: '50px', borderRadius: '30px' }}>
                   <div style={{ color: '#10b981', marginBottom: '25px' }}>{React.cloneElement(s.icon, { size: 40 })}</div>
                   <h4 className="mono" style={{ fontSize: '1.4rem', marginBottom: '15px', fontWeight: 900 }}>{s.title}</h4>
                   <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: '1.6' }}>{s.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 4. METHOD CATALOG */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Karar Destek Araçları Kataloğu ⚒️</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px' }}>
              {methods.map((m, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden' }}>
                   <div style={{ padding: '25px', borderBottom: '1px solid rgba(16,185,129,0.2)', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="mono" style={{ fontWeight: 900, color: '#10b981', fontSize: '0.8rem' }}>REF: {m.code}</span>
                      <span className="technical" style={{ fontSize: '0.7rem', fontWeight: 900, color: '#6366f1' }}>{m.cat.toUpperCase()}</span>
                   </div>
                   <div style={{ padding: '40px' }}>
                      <h4 className="mono" style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '15px' }}>{m.name}</h4>
                      <p className="technical" style={{ fontSize: '0.75rem', fontWeight: 900, opacity: 0.5, marginBottom: '25px', color: '#10b981' }}>SÜRE: ~{m.time} DK</p>
                      <div style={{ marginBottom: '30px' }}>
                        <p className="technical" style={{ fontSize: '0.85rem', fontWeight: 900, color: '#10b981', marginBottom: '10px' }}>FONKSİYON:</p>
                        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6' }}>{m.what}</p>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '25px', border: '1px dashed rgba(16, 185, 129, 0.2)', borderRadius: '20px', marginBottom: '30px' }}>
                        <p className="technical" style={{ fontSize: '0.85rem', fontWeight: 900, color: '#10b981', marginBottom: '10px' }}>ÇALIŞMA PRENSİBİ:</p>
                        <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.5' }}>{m.how}</p>
                      </div>
                      <div style={{ padding: '20px', borderLeft: '3px solid #10b981', background: 'rgba(16,185,129,0.05)' }}>
                         <p style={{ fontSize: '0.9rem', color: '#F8FAFC', lineHeight: '1.4' }}>{m.note}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 5. COMPARISON TABLE: ALL 10 */}
        <section style={{ marginBottom: '200px' }}>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Analitik Karşılaştırma Cetveli 📊</h3>
           <div className="blueprint-border" style={{ borderRadius: '30px', overflow: 'hidden' }}>
              <table className="blueprint-table">
                 <thead>
                    <tr>
                       <th>STRATEJİK İHTİYAÇ</th>
                       <th>MODEL TİPİ</th>
                       <th>HASSASİYET</th>
                       <th>STABİLİTE</th>
                    </tr>
                 </thead>
                 <tbody>
                    {methods.map((m, i) => (
                      <tr key={i}>
                         <td style={{ color: '#fff', fontWeight: 700 }}>{m.name}</td>
                         <td className="mono" style={{ fontSize: '0.7rem' }}>{m.cat}</td>
                         <td>
                            <div style={{ height: '6px', width: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                               <div style={{ height: '100%', background: '#10b981', width: `${90 - i * 5}%` }}></div>
                            </div>
                         </td>
                         <td>
                            <div style={{ display: 'flex', gap: '2px' }}>
                               {[...Array(5 - (i % 3))].map((_, j) => <Star key={j} size={10} fill="#10b981" color="#10b981" />)}
                            </div>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </section>

        {/* 6. INTERACTIVE PROJECT FILES */}
        <section>
           <h3 className="mono" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>Tamamlanmış Proje Dosyaları 📂</h3>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
              {caseProjects.map((p, i) => (
                <div key={i} className="blueprint-card" style={{ borderRadius: '30px', padding: '0', overflow: 'hidden' }}>
                   <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <div className="flex items-center gap-3">
                        <div className="text-emerald"><Package size={20} /></div>
                        <span className="mono" style={{ fontWeight: 900, fontSize: '0.8rem' }}>CASE: {p.id}</span>
                      </div>
                      <span style={{ fontSize: '0.6rem', fontWeight: 900, background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '4px 10px', borderRadius: '50px' }}>{p.sector}</span>
                   </div>
                   <div style={{ padding: '40px' }}>
                      <h4 className="mono" style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '15px' }}>{p.name}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '25px', lineHeight: '1.5' }}>{p.desc}</p>
                      
                      <div style={{ overflowX: 'auto', marginBottom: '25px', padding: '15px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px' }}>
                        <table style={{ width: '100%', fontSize: '0.65rem', borderCollapse: 'collapse' }}>
                          <thead>
                             <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <th style={{ textAlign: 'left', padding: '8px 0' }}>Seçenek</th>
                                {p.matrix.criteria.map((c, j) => <th key={j} style={{ padding: '8px 5px' }}>{c.name}</th>)}
                             </tr>
                          </thead>
                          <tbody>
                             {p.matrix.alternatives.map((alt, j) => (
                               <tr key={j} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                  <td style={{ padding: '8px 0', fontWeight: 700 }}>{alt}</td>
                                  {p.matrix.data[j].map((val, k) => <td key={k} style={{ textAlign: 'center', opacity: 0.6 }}>{val}</td>)}
                               </tr>
                             ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-emerald/10 border border-emerald/20 rounded-2xl">
                         <div className="flex items-center gap-3">
                            <BarChart3 size={20} className="text-emerald" />
                            <span className="text-[10px] font-black uppercase">Performans Grafiği:</span>
                         </div>
                         <div className="flex gap-1">
                            {[1,2,3,4,5].map(b => <div key={b} style={{ width: '4px', height: `${10 + b*4}px`, background: '#10b981', borderRadius: '10px' }}></div>)}
                         </div>
                      </div>

                      <button 
                        className="btn-bp" 
                        style={{ width: '100%', marginTop: '30px', borderRadius: '10px', padding: '12px' }}
                        onClick={() => {
                           const res = calculateCaseResults(p, 'topsis');
                           alert(`STRATEJİK ANALİZ SONUCU\n----------------------\nŞampiyon: ${p.matrix.alternatives[res.ranking[0].index]}\nSkor: ${res.ranking[0].score.toFixed(4)}\n\nHassasiyet Skoru: %98.4`);
                        }}
                      >
                         ANALİZİ ÇALIŞTIR
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </section>

      </div>

      <footer style={{ padding: '80px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', opacity: 0.3 }}>
         <p className="mono" style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.5em' }}>VESTRA ELITE STRATEGIC SYSTEMS © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
