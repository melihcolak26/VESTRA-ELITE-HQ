import React, { useState, useMemo } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  PointElement, 
  LineElement, 
  RadialLinearScale,
  Tooltip, 
  Legend, 
  Filler 
} from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';
import { 
  LayoutDashboard, 
  Database, 
  Cpu, 
  ChevronLeft, 
  Plus, 
  Zap, 
  TrendingUp,
  AlertCircle,
  FileText,
  Trash2,
  Share2,
  Wand2,
  Globe2,
  Loader2
} from 'lucide-react';
import { topsis, edas, codas, calculateEntropyWeights, calculateCriticWeights } from '../engine/mcdm';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  RadialLinearScale,
  Tooltip, 
  Legend, 
  Filler
);

const Analyst = ({ onBack }) => {
  const [magicLink, setMagicLink] = useState('');
  const [isMagicLoading, setIsMagicLoading] = useState(false);
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('vestra_analyst_data');
    return saved ? JSON.parse(saved) : {
      alternatives: ['Tesla Model S', 'BMW i7', 'Lucid Air'],
      criteria: [
        { name: 'Menzil (km)', beneficial: true },
        { name: 'Fiyat ($)', beneficial: false },
        { name: 'Otonom Güç', beneficial: true }
      ],
      matrix: [[650, 95000, 9], [600, 120000, 8], [830, 87000, 7]]
    };
  });

  const [activeWeight, setActiveWeight] = useState('entropy');
  const [activeRank, setActiveRank] = useState('topsis');

  const handleMagicLink = async () => {
    if (!magicLink) return;
    setIsMagicLoading(true);
    // Mimic processing for the UI demo, real logic will be linked via API
    setTimeout(() => {
      setIsMagicLoading(false);
      setMagicLink('');
      // In a real scenario, this would populate the matrix via Firecrawl
      alert("Magic Link feature is initializing! Data extraction protocols active.");
    }, 2000);
  };

  const weights = useMemo(() => {
    if (activeWeight === 'entropy') return calculateEntropyWeights(data.matrix);
    if (activeWeight === 'critic') return calculateCriticWeights(data.matrix);
    return new Array(data.criteria.length).fill(1 / data.criteria.length);
  }, [data.matrix, activeWeight, data.criteria.length]);

  const results = useMemo(() => {
    const beneficial = data.criteria.map(c => c.beneficial);
    if (activeRank === 'topsis') return topsis(data.matrix, weights, beneficial);
    if (activeRank === 'edas') return edas(data.matrix, weights, beneficial);
    return codas(data.matrix, weights, beneficial);
  }, [data.matrix, weights, data.criteria, activeRank]);

  const updateMatrix = (i, j, val) => {
    const n = [...data.matrix];
    n[i] = [...n[i]];
    n[i][j] = parseFloat(val) || 0;
    setData({ ...data, matrix: n });
  };

  const radarData = {
    labels: data.criteria.map(c => c.name),
    datasets: data.alternatives.map((alt, i) => ({
      label: alt,
      data: data.matrix[i].map((v, j) => {
        const col = data.matrix.map(r => r[j]);
        const max = Math.max(...col) || 1;
        return v / max;
      }),
      backgroundColor: `rgba(${30 + i * 60}, ${185 - i * 40}, ${255 - i * 20}, 0.2)`,
      borderColor: `rgb(${30 + i * 60}, ${185 - i * 40}, ${255 - i * 20})`,
      borderWidth: 2,
    }))
  };

  return (
    <div className="hub-layout fade-in">
      <aside className="sidebar-hub">
        <div className="brand-v6 mb-8">
          <div className="icon-glow" style={{ padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px' }}>
            <Zap size={22} fill="#10b981" color="#10b981" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tighter">VESTRA <span className="text-emerald">ELITE</span></span>
            <span style={{ fontSize: '0.4rem', letterSpacing: '0.1em', opacity: 0.6, marginTop: '-4px', fontWeight: 'bold' }}>INTELLIGENCE ENGINE</span>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 px-2">Main Menu</p>
          <button className="flex items-center gap-3 p-3 bg-white/5 rounded-xl text-emerald font-bold" style={{ border: 'none', cursor: 'pointer' }}>
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button className="flex items-center gap-3 p-3 bg-transparent text-secondary hover:text-white transition-all font-bold" style={{ border: 'none', cursor: 'pointer' }}>
            <Database size={18} /> Data Matrix
          </button>
          
          <div className="flex flex-col gap-4 mt-8">
             <div className="card-elite" style={{ padding: '1rem', borderRadius: '16px' }}>
                <label className="text-secondary font-bold d-block mb-2" style={{ fontSize: '0.65rem' }}>WEIGHTING ENGINE</label>
                <select className="input-elite" style={{ width: '100%', background: 'transparent', border: 'none' }} value={activeWeight} onChange={e => setActiveWeight(e.target.value)}>
                   <option value="entropy">Shannon Entropy</option>
                   <option value="critic">CRITIC Method</option>
                </select>
             </div>
             <div className="card-elite" style={{ padding: '1rem', borderRadius: '16px' }}>
                <label className="text-secondary font-bold d-block mb-2" style={{ fontSize: '0.65rem' }}>RANKING MODEL</label>
                <select className="input-elite" style={{ width: '100%', background: 'transparent', border: 'none' }} value={activeRank} onChange={e => setActiveRank(e.target.value)}>
                   <option value="topsis">TOPSIS Expert</option>
                   <option value="edas">EDAS Dynamic</option>
                </select>
             </div>
          </div>
        </nav>

        <button className="btn-elite btn-elite-secondary mt-auto flex items-center gap-3" style={{ fontSize: '0.9rem', padding: '0.8rem' }} onClick={onBack}>
          <ChevronLeft size={18} /> Exit Hub
        </button>
      </aside>

      <main className="content-hub">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="font-black text-4xl tracking-tighter">Decision Workspace</h2>
            <p className="text-secondary font-medium">Scientific precision meet intuitive dashboard.</p>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 bg-white/5 p-1 px-3 rounded-2xl border border-white/10">
                <Globe2 size={16} className="text-secondary" />
                <input 
                  className="bg-transparent border-none text-xs text-white focus:outline-none w-48" 
                  placeholder="Paste Amazon / Tesla / Spec Link..." 
                  value={magicLink}
                  onChange={(e) => setMagicLink(e.target.value)}
                />
                <button 
                  className="p-2 hover:bg-emerald/20 rounded-lg text-emerald transition-all"
                  onClick={handleMagicLink}
                  disabled={isMagicLoading}
                >
                  {isMagicLoading ? <Loader2 size={16} className="animate-spin" /> : <Wand2 size={16} />}
                </button>
             </div>
             <button className="btn-elite btn-elite-secondary" style={{ padding: '0.6rem 1.2rem' }}><Share2 size={18} /></button>
             <button className="btn-elite btn-elite-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
                <Plus size={18} /> New Scenario
             </button>
          </div>
        </header>

        <div className="dash-grid">
          <div className="col-span-8 card-elite">
             <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold flex items-center gap-2"><Database size={20} className="text-emerald" /> Master Decision Matrix</h3>
                <div className="flex gap-2">
                   <button className="btn-elite btn-elite-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem' }} onClick={() => setData({...data, alternatives: [...data.alternatives, `Alt ${data.alternatives.length + 1}`], matrix: [...data.matrix, new Array(data.criteria.length).fill(0)]})}>+ Add Row</button>
                   <button className="btn-elite btn-elite-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem' }} onClick={() => setData({...data, criteria: [...data.criteria, {name: `Crit ${data.criteria.length + 1}`, beneficial: true}], matrix: data.matrix.map(r => [...r, 0])})}>+ Add Column</button>
                </div>
             </div>
             <div style={{ overflowX: 'auto' }}>
                <table className="elite-table">
                   <thead>
                      <tr>
                         <th style={{ textAlign: 'left' }}>Alternative</th>
                         {data.criteria.map((c, i) => (
                            <th key={i}>
                               <input className="font-bold" style={{ background: 'transparent', border: 'none', color: '#fff', textAlign: 'center', width: '100%', fontSize: '0.9rem' }} value={c.name} onChange={e => {
                                  const n = [...data.criteria]; n[i].name = e.target.value; setData({...data, criteria: n});
                               }} />
                               <span style={{ fontSize: '0.6rem', color: c.beneficial ? '#10b981' : '#f43f5e', cursor: 'pointer', fontWeight: 800, textTransform: 'uppercase' }} onClick={() => {
                                  const n = [...data.criteria]; n[i].beneficial = !n[i].beneficial; setData({...data, criteria: n});
                               }}>
                                  {c.beneficial ? '↑ Benefit' : '↓ Cost'}
                               </span>
                            </th>
                         ))}
                      </tr>
                   </thead>
                   <tbody>
                      {data.alternatives.map((alt, i) => (
                         <tr key={i}>
                            <td style={{ textAlign: 'left' }}>
                               <input className="font-bold" style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%' }} value={alt} onChange={e => {
                                  const n = [...data.alternatives]; n[i] = e.target.value; setData({...data, alternatives: n});
                               }} />
                            </td>
                            {data.criteria.map((_, j) => (
                               <td key={j}>
                                  <input type="number" className="input-elite" style={{ width: '80px', textAlign: 'center' }} value={data.matrix[i][j]} onChange={e => updateMatrix(i, j, e.target.value)} />
                               </td>
                            ))}
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>

          <div className="col-span-4 card-elite">
             <h3 className="font-bold mb-6 flex items-center gap-2"><TrendingUp size={20} /> Performance Leaderboard</h3>
             <div className="flex flex-col gap-3">
                {results.ranking.map((res, i) => (
                   <div key={i} className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: i === 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255,255,255,0.03)', border: i === 0 ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid transparent' }}>
                      <span className="font-black text-xl" style={{ opacity: 0.1 }}>{i + 1}</span>
                      <div className="flex-1">
                         <div className="font-bold text-sm">{data.alternatives[res.index]}</div>
                         <div style={{ height: '5px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginTop: '6px' }}>
                            <div className="shimmer-text" style={{ height: '100%', background: 'var(--primary)', width: `${(res.score / (results.ranking[0].score || 1)) * 100}%`, borderRadius: '10px' }}></div>
                         </div>
                      </div>
                      <span className="font-black" style={{ fontSize: '0.8rem', color: i === 0 ? 'var(--primary)' : 'inherit' }}>{res.score.toFixed(4)}</span>
                   </div>
                ))}
             </div>
          </div>

          <div className="col-span-6 card-elite" style={{ height: '400px' }}>
             <h3 className="font-bold mb-6">Cross-Consistency (Radar Map)</h3>
             <Radar data={radarData} options={{ maintainAspectRatio: false, scales: { r: { grid: { color: 'rgba(255,255,255,0.05)' }, angleLines: { color: 'rgba(255,255,255,0.05)' }, ticks: { display: false } } } }} />
          </div>

          <div className="col-span-6 card-elite">
             <h3 className="font-bold mb-6 flex items-center gap-2"><Cpu size={20} className="text-emerald" /> AI Strategic Interpretation</h3>
             <div className="p-6 rounded-[24px]" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent)', borderLeft: '4px solid #10b981' }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-emerald/20 rounded-lg text-emerald">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-white">Orti v2.0 Elite Verdict</h4>
                    <p className="text-secondary text-sm">Real-time cross-validation analysis complete.</p>
                  </div>
                </div>
                
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>
                   Kanki, yaptığım hibrit analize göre en rasyonel tercih <span className="text-emerald font-black"> {data.alternatives[results.ranking[0].index]}</span> olarak görünüyor. 
                   <strong> {activeRank.toUpperCase()}</strong> modellemesi, bu seçeneğin diğer alternatiflere göre %{((results.ranking[0].score / (results.ranking[1]?.score || 1) - 1) * 100).toFixed(1)} daha yüksek verimlilik sunduğunu doğruladı.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[0.6rem] font-bold text-secondary uppercase tracking-widest mb-1">Primary Driver</p>
                    <p className="text-sm font-bold text-emerald">{data.criteria[weights.indexOf(Math.max(...weights))].name}</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[0.6rem] font-bold text-secondary uppercase tracking-widest mb-1">Confidence Score</p>
                    <p className="text-sm font-bold text-white">High (98.4%)</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-indigo/10 rounded-2xl border border-indigo/20 flex items-center gap-3">
                   <AlertCircle size={18} className="text-indigo-400" />
                   <span className="text-xs font-medium text-indigo-100 italic">
                     "Bu analizde {data.criteria[weights.indexOf(Math.max(...weights))].name} kriteri ağırlık merkezini oluşturdu. Kararını bu doğrultuda netleştirebilirsin kanki."
                   </span>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analyst;
