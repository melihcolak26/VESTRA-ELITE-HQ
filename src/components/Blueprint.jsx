import React, { useState } from 'react';
import { 
  ChevronLeft, 
  Zap, 
  Target, 
  ArrowUpRight, 
  ArrowDownRight, 
  Brain, 
  Scale, 
  ShieldCheck,
  Cpu,
  Layers,
  ChevronRight,
  Monitor,
  Globe,
  Database
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      id: 'vision',
      badge: 'BÖLÜM 01: VİZYON',
      title: 'VESTRA ELITE: Karar Biliminin Zirvesi',
      subtitle: 'Apple gibi vizyoner liderler için verinin sadece "toplanması" değil, "kusursuz yorumlanması" gerekir.',
      content: 'Geleneksel karar verme süreçleri, insan hataları ve bilişsel önyargılarla doludur. Vestra Elite, bu kaosu saf matematiğin disipliniyle birleştirerek "Hata Payı Sıfır" olan bir stratejik kalkan inşa eder.',
      image: '/blueprint-hero.png',
      stats: ['%100 Objektif', 'Executive Grade', 'Ultra Hızlı']
    },
    {
      id: 'engine',
      badge: 'BÖLÜM 02: MOTOR',
      title: '12+ Hibrit Algoritma ile Rakipsiz Güç',
      subtitle: 'İnsan aklının (AHP) ve verinin (Entropy) mükemmel evliliği.',
      content: 'Vestra Intelligence Engine, tek bir modelle yetinmez. Shannon Entropy ile verideki belirsizliği ölçerken, CRITIC ile kriterler arasındaki çatışmayı analiz eder. TOPSIS, VIKOR ve WASPAS modellerini aynı anda koşturarak size en ideal "Uzlaşmacı Çözümü" sunar.',
      image: '/blueprint-engine.png',
      protocols: [
        { name: 'ENTROPY', desc: 'Verideki çeşitliliği cımbızla çeker.' },
        { name: 'WASPAS', desc: 'Akademik doğruluğu en yüksek hibrit model.' },
        { name: 'VIKOR', desc: 'En az pişmanlık duyacağınız yolu bulur.' }
      ]
    },
    {
      id: 'execution',
      badge: 'BÖLÜM 03: UYGULAMA',
      title: 'Stratejik Sektörlerde Kusursuz İşleyiş',
      subtitle: 'Denizcilikten teknolojiye, en karmaşık parametreleri saniyeler içinde yönetin.',
      content: 'Örneğin bir gemi seçimindeki 40+ teknik parametreyi (Hız, Yakıt, Bakım, Risk vb.) Vestra\'ya bırakın. Sistem, Magic Link ile verileri toplar ve Orti Elite Verdict ile size sadece kararı uygulamak kalır.',
      image: '/blueprint-maritime.png',
      caseStudy: 'Maritime Logistics 2026 Integration Case'
    }
  ];

  const nextSlide = () => {
    if (slide < slides.length - 1) setSlide(slide + 1);
    else onBack();
  };

  return (
    <div className="blueprint-presentation fade-in" style={{ 
      background: '#020617', 
      minHeight: '100vh', 
      color: '#fff',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Navigation */}
      <nav className="nav-elite" style={{ padding: '20px 40px', background: 'rgba(2,6,23,0.8)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="flex justify-between items-center w-100">
          <div className="brand-v6">
            <Zap size={24} fill="#10b981" color="#10b981" />
            <span className="font-black text-xl">VESTRA <span className="text-emerald">ELITE</span></span>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
               <span className="text-[10px] font-black text-secondary uppercase tracking-widest">Sunum Modu</span>
               <div className="flex gap-1">
                  {slides.map((_, i) => (
                    <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: i === slide ? '#10b981' : 'rgba(255,255,255,0.1)' }}></div>
                  ))}
               </div>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full transition-all" onClick={onBack}>
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Slide Content */}
      <div className="container flex-1" style={{ display: 'flex', alignItems: 'center', padding: '60px 0' }}>
        <div className="grid grid-cols-12 gap-12 items-center">
          
          {/* Text Side */}
          <div className="col-span-6">
            <div className="badge-v6" style={{ marginBottom: '1.5rem', width: 'fit-content' }}>
              <Monitor size={12} /> {slides[slide].badge}
            </div>
            <h2 style={{ fontSize: '4.5rem', lineHeight: '1', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-3px' }} className="shimmer-text">
               {slides[slide].title}
            </h2>
            <h3 style={{ fontSize: '1.5rem', color: '#10b981', fontWeight: 700, marginBottom: '2rem', lineHeight: '1.4' }}>
               {slides[slide].subtitle}
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: '1.8', marginBottom: '3rem', maxWidth: '90%' }}>
               {slides[slide].content}
            </p>

            {/* Dynamic Elements Per Slide */}
            {slides[slide].stats && (
               <div className="flex gap-6">
                  {slides[slide].stats.map((s, i) => (
                    <div key={i} className="px-6 py-3 bg-emerald/10 border border-emerald/20 rounded-2xl">
                      <span className="text-xs font-black text-emerald uppercase tracking-tighter">{s}</span>
                    </div>
                  ))}
               </div>
            )}

            {slides[slide].protocols && (
              <div className="grid grid-cols-1 gap-4">
                 {slides[slide].protocols.map((p, i) => (
                   <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <div className="p-2 bg-indigo/20 rounded-lg text-indigo-400"><Cpu size={16} /></div>
                      <div>
                        <p className="text-xs font-black text-white">{p.name}</p>
                        <p className="text-[10px] text-secondary">{p.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            )}

            <button className="btn-elite btn-elite-primary mt-12" style={{ padding: '1.2rem 3rem' }} onClick={nextSlide}>
               {slide === slides.length - 1 ? 'ANALİZ MERKEZİNE GİT' : 'SONRAKİ ADIM'} <ChevronRight size={20} />
            </button>
          </div>

          {/* Image Side */}
          <div className="col-span-6" style={{ position: 'relative' }}>
             <div style={{ 
               position: 'absolute', 
               top: '-20px', 
               right: '-20px', 
               width: '100%', 
               height: '100%', 
               border: '1px solid rgba(16, 185, 129, 0.2)', 
               borderRadius: '40px',
               zIndex: -1 
             }}></div>
             <img 
               src={slides[slide].image} 
               alt="Presentation Visual" 
               style={{ 
                 width: '100%', 
                 height: '600px', 
                 objectFit: 'cover', 
                 borderRadius: '40px',
                 boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
                 border: '1px solid rgba(255,255,255,0.05)'
               }} 
             />
             <div style={{ position: 'absolute', bottom: '30px', left: '30px', padding: '15px 25px', background: 'rgba(2,6,23,0.8)', backdropFilter: 'blur(20px)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-3">
                   <ShieldCheck size={18} className="text-emerald" />
                   <span className="text-[10px] font-black uppercase tracking-widest">VESTRA ELITE PROTOCOL VERIFIED</span>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Footer Branding */}
      <footer style={{ padding: '40px', textAlign: 'center', opacity: 0.3 }}>
         <p className="text-[10px] font-bold uppercase tracking-[0.5em]">Mastering the Science of Choice © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
