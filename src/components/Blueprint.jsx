import React from 'react';
import { 
  ChevronLeft, 
  Zap, 
  ArrowRight, 
  Target, 
  Brain, 
  Cpu, 
  Layers,
  ShieldCheck,
  Compass,
  ZapOff,
  Lightbulb,
  Gem,
  CheckCircle2,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Dna,
  Workflow
} from 'lucide-react';

const Blueprint = ({ onBack }) => {
  return (
    <div className="blueprint-executive fade-in" style={{ background: '#020617', minHeight: '100vh', color: '#fff', paddingBottom: '150px', fontFamily: "'Outfit', sans-serif" }}>
      {/* Executive Nav */}
      <nav style={{ padding: '30px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(2,6,23,0.8)', borderBottom: '1px solid rgba(255,255,255,0.05)', position: 'sticky', top: 0, zIndex: 1000, backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center gap-4">
          <Zap size={32} fill="#10b981" color="#10b981" />
          <div className="flex flex-col">
            <span style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-1px' }}>VESTRA <span style={{ color: '#10b981' }}>ELITE</span></span>
            <span style={{ fontSize: '0.6rem', fontWeight: 700, opacity: 0.5, letterSpacing: '0.2em' }}>THE BLUEPRINT PROTOCOL</span>
          </div>
        </div>
        <button onClick={onBack} className="btn-elite btn-elite-secondary" style={{ padding: '12px 30px', borderRadius: '100px', fontSize: '0.8rem' }}>
          <ChevronLeft size={18} /> HUB'A DÖN
        </button>
      </nav>

      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 20px' }}>
        
        {/* Cinematic Header */}
        <header style={{ textAlign: 'center', marginBottom: '150px' }}>
          <div className="badge-v6" style={{ margin: '0 auto 30px', border: '1px solid #10b981', color: '#10b981', background: 'rgba(16,185,129,0.05)', padding: '8px 25px', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={14} /> <span style={{ fontSize: '0.7rem', fontWeight: 900 }}>SCIENTIFIC METHODOLOGY v7.5</span>
          </div>
          <h1 style={{ fontSize: '6rem', fontWeight: 900, lineHeight: '0.9', letterSpacing: '-5px', marginBottom: '40px' }} className="shimmer-text">
            Karar Verme <br/> Teknolojisi.
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#94A3B8', maxWidth: '800px', margin: '0 auto', lineHeight: '1.4' }}>
            Vestra Elite, Apple standartlarında bir duruşla, karmaşık verileri akademik kesinlikle işleyen dünyanın en gelişmiş hibrit MCDM motorudur.
          </p>
        </header>

        {/* Part 1: Weighting Engine */}
        <section style={{ marginBottom: '200px' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '60px' }}>
              <div style={{ p: '15px', background: 'rgba(99,102,241,0.1)', borderRadius: '20px', color: '#6366f1' }}>
                 <Brain size={40} />
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>Bölüm I: Ağırlıklandırma</h2>
           </div>

           <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              
              {/* Entropy */}
              <div className="card-elite" style={{ padding: '40px' }}>
                 <div className="flex justify-between items-start mb-8">
                    <Layers size={32} color="#10b981" />
                    <span style={{ fontSize: '0.6rem', fontWeight: 900, background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '5px 12px', borderRadius: '50px' }}>OBJEKTİF ANALİZ</span>
                 </div>
                 <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '20px' }}>Shannon Entropy</h3>
                 <p style={{ color: '#94A3B8', lineHeight: '1.6', marginBottom: '25px' }}>
                    Verideki belirsizliği ve kaos derecesini ölçer. Eğer alternatifler bir kriterde (örn: Fiyat) birbirine çok yakın değerlere sahipse, Entropy bu kriterin karar verici gücünü otomatik olarak düşürür. 
                 </p>
                 <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#10b981' }}>ORTE VERDICT:</p>
                    <p style={{ fontSize: '0.85rem', italic: 'true', opacity: 0.8 }}>"Kanki, Entropy duygularla değil, verideki saf sinyalle ilgilenir. Gürültüyü temizler."</p>
                 </div>
              </div>

              {/* CRITIC */}
              <div className="card-elite" style={{ padding: '40px' }}>
                 <div className="flex justify-between items-start mb-8">
                    <ZapOff size={32} color="#6366f1" />
                    <span style={{ fontSize: '0.6rem', fontWeight: 900, background: 'rgba(99,102,241,0.1)', color: '#6366f1', padding: '5px 12px', borderRadius: '50px' }}>İLİŞKİSEL ANALİZ</span>
                 </div>
                 <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '20px' }}>CRITIC Method</h3>
                 <p style={{ color: '#94A3B8', lineHeight: '1.6', marginBottom: '25px' }}>
                    Kriterler arasındaki çatışmayı (conflict) ve korelasyonu baz alır. Birbiriyle zıt çalışan parametreler (Hız vs Yakıt) arasındaki en adil dengeyi kurarak çelişkileri avantaja çevirir.
                 </p>
                 <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#6366f1' }}>ORTE VERDICT:</p>
                    <p style={{ fontSize: '0.85rem', italic: 'true', opacity: 0.8 }}>"Kriterlerin birbirini ezmesini engeller, aralarındaki gizli dengeyi matematiksel olarak korur."</p>
                 </div>
              </div>

              {/* AHP */}
              <div className="card-elite" style={{ padding: '40px' }}>
                 <div className="flex justify-between items-start mb-8">
                    <Workflow size={32} color="#f59e0b" />
                    <span style={{ fontSize: '0.6rem', fontWeight: 900, background: 'rgba(245,158,11,0.1)', color: '#f59e0b', padding: '5px 12px', borderRadius: '50px' }}>KIMI AI POWERED</span>
                 </div>
                 <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '20px' }}>AHP (Expert Mind)</h3>
                 <p style={{ color: '#94A3B8', lineHeight: '1.6', marginBottom: '25px' }}>
                    İnsan deneyimini ikili kıyaslama matrisine döker. Kimi AI entegrasyonumuz sayesinde, sistem binlerce akademik yayını süzerek sizin yerinize "Uzman Görüşü" üretebilir.
                 </p>
                 <div style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f59e0b' }}>ORTE VERDICT:</p>
                    <p style={{ fontSize: '0.85rem', italic: 'true', opacity: 0.8 }}>"İnsan aklının en rafine halini Kimi'nin hızıyla birleştiriyoruz. Sektörel deha budur."</p>
                 </div>
              </div>

           </div>
        </section>

        {/* Part 2: Ranking Engine */}
        <section>
           <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '60px' }}>
              <div style={{ p: '15px', background: 'rgba(16,185,129,0.1)', borderRadius: '20px', color: '#10b981' }}>
                 <Cpu size={40} />
              </div>
              <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>Bölüm II: Sıralama Modelleri</h2>
           </div>

           <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              
              <div className="card-elite" style={{ padding: '30px' }}>
                 <Target size={24} color="#10b981" style={{ marginBottom: '20px' }} />
                 <h4 style={{ fontWeight: 900, marginBottom: '10px' }}>TOPSIS & CODAS</h4>
                 <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.5' }}>
                    Geometrik mesafe bazlıdır. İdeal olanla gerçek arasındaki farkı milimetrik hesaplayarak sizi en iyiye ulaştırır.
                 </p>
              </div>

              <div className="card-elite" style={{ padding: '30px' }}>
                 <Compass size={24} color="#f43f5e" style={{ marginBottom: '20px' }} />
                 <h4 style={{ fontWeight: 900, marginBottom: '10px' }}>VIKOR Protocol</h4>
                 <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.5' }}>
                    Uzlaşmacı çözümdür. "Minimum Pişmanlık" noktasına odaklanır. Riskli ve kritik dönüşüm kararları için idealdir.
                 </p>
              </div>

              <div className="card-elite" style={{ padding: '30px' }}>
                 <Gem size={24} color="#6366f1" style={{ marginBottom: '20px' }} />
                 <h4 style={{ fontWeight: 900, marginBottom: '10px' }}>WASPAS Matrix</h4>
                 <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.5' }}>
                    Akademik hassasiyeti en yüksek modeldir. İki farklı matematiksel dünyayı birleştirerek %99.4 tutarlılık sağlar.
                 </p>
              </div>

              <div className="card-elite" style={{ padding: '30px' }}>
                 <Activity size={24} color="#0ea5e9" style={{ marginBottom: '20px' }} />
                 <h4 style={{ fontWeight: 900, marginBottom: '10px' }}>EDAS & MOORA</h4>
                 <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: '1.5' }}>
                    Ortalama çözümden sapmaları ve verimlilik oranlarını baz alır. Lojistik ve tedarik süreçlerinin global standardıdır.
                 </p>
              </div>

           </div>
        </section>

        {/* Final CTA */}
        <section style={{ textAlign: 'center', marginTop: '150px' }}>
           <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '30px' }}>Gelecek, Veriyle Değil <br/> Kararla İnşa Edilir.</h2>
           <button onClick={onBack} className="btn-elite btn-elite-primary" style={{ padding: '20px 60px', fontSize: '1.2rem', borderRadius: '100px' }}>
              ANALYST HUB'A GİRİŞ YAP <ArrowRight size={24} />
           </button>
        </section>

      </div>

      <footer style={{ padding: '100px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', opacity: 0.3 }}>
         <p style={{ fontSize: '0.8rem', fontWeight: 900, letterSpacing: '0.5em' }}>VESTRA ELITE SOLUTIONS © 2026</p>
      </footer>
    </div>
  );
};

export default Blueprint;
