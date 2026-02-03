import React, { useState } from 'react';
import { topsis, edas, codas, calculateEntropyWeights, calculateCriticWeights } from '../engine/mcdm';

const Wizard = ({ template, onBack }) => {
  const [step, setStep] = useState(1);
  const [alternatives, setAlternatives] = useState(template.alternatives);
  const [matrix, setMatrix] = useState(template.defaultMatrix);
  const [importance, setImportance] = useState(template.criteria.map(() => 5)); // 1-10 slider
  const [results, setResults] = useState(null);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => step === 1 ? onBack() : setStep(step - 1);

  const runAnalysis = () => {
    // Basic user uses "importance sliders" as weights
    const totalImp = importance.reduce((a, b) => a + b, 0);
    const weights = importance.map(i => i / totalImp);
    const beneficial = template.criteria.map(c => c.beneficial);
    
    // In background, run all 3 methods and average them for simplicity for basic user
    const t = topsis(matrix, weights, beneficial);
    const e = edas(matrix, weights, beneficial);
    const c = codas(matrix, weights, beneficial);
    
    const avgRanks = alternatives.map((name, i) => {
      const avg = (t.ranking.find(x => x.index === i).rank + 
                   e.ranking.find(x => x.index === i).rank + 
                   c.ranking.find(x => x.index === i).rank) / 3;
      return { name, avgRank: avg.toFixed(1) };
    }).sort((a, b) => a.avgRank - b.avgRank);

    setResults(avgRanks);
    setStep(4);
  };

  return (
    <div className="wizard fade-in">
      <div className="wizard-header">
        <span className="icon">{template.icon}</span>
        <h2>{template.name} Sihirbazı</h2>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>
      </div>

      {step === 1 && (
        <div className="step-content">
          <h3>Hangi seçenekleri karşılaştırmak istiyorsunuz?</h3>
          <p className="hint">Karşılaştırmak istediğiniz araba, marka veya modelleri buraya girin.</p>
          {alternatives.map((alt, i) => (
            <div key={i} className="form-row">
              <input 
                type="text" 
                value={alt} 
                onChange={(e) => {
                  const n = [...alternatives]; n[i] = e.target.value; setAlternatives(n);
                }}
              />
              <button className="btn-icon" onClick={() => {
                setAlternatives(alternatives.filter((_, idx) => idx !== i));
                setMatrix(matrix.filter((_, idx) => idx !== i));
              }}>✕</button>
            </div>
          ))}
          <button className="btn btn-secondary" onClick={() => {
            setAlternatives([...alternatives, 'Yeni Seçenek']);
            setMatrix([...matrix, new Array(template.criteria.length).fill(0)]);
          }}>+ Yeni Ekle</button>
          
          <div className="wizard-footer">
            <button className="btn btn-secondary" onClick={handleBack}>Geri</button>
            <button className="btn btn-primary" onClick={handleNext}>Devam Et</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="step-content">
          <h3>Kriter Değerlerini Girin</h3>
          <p className="hint">Seçeneklerin teknik verilerini veya puanlarını tabloya doldurun.</p>
          <div style={{ overflowX: 'auto' }}>
            <table className="matrix-table">
              <thead>
                <tr>
                  <th>Seçenek</th>
                  {template.criteria.map((c, i) => <th key={i}>{c.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {alternatives.map((alt, i) => (
                  <tr key={i}>
                    <td className="alt-name">{alt}</td>
                    {template.criteria.map((_, j) => (
                      <td key={j}>
                        <input 
                          type="number" 
                          value={matrix[i][j]} 
                          onChange={(e) => {
                            const n = [...matrix]; n[i][j] = parseFloat(e.target.value) || 0; setMatrix(n);
                          }}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="wizard-footer">
            <button className="btn btn-secondary" onClick={handleBack}>Geri</button>
            <button className="btn btn-primary" onClick={handleNext}>Devam Et</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="step-content">
          <h3>Sizin için ne kadar önemli?</h3>
          <p className="hint">Her kriterin sizin kararınızdaki ağırlığını belirlemek için sürgüleri kullanın.</p>
          {template.criteria.map((c, i) => (
            <div key={i} className="importance-row">
              <div className="label-box">
                <span>{c.name}</span>
                <span className="imp-val">{importance[i]} / 10</span>
              </div>
              <input 
                type="range" min="1" max="10" 
                value={importance[i]} 
                onChange={(e) => {
                  const n = [...importance]; n[i] = parseInt(e.target.value); setImportance(n);
                }}
              />
            </div>
          ))}
          <div className="wizard-footer">
            <button className="btn btn-secondary" onClick={handleBack}>Geri</button>
            <button className="btn btn-primary btn-sparkle" onClick={runAnalysis}>Analizi Tamamla ⚡</button>
          </div>
        </div>
      )}

      {step === 4 && results && (
        <div className="step-content result-step">
          <div className="congratulations">
            <div className="star-icon">🏆</div>
            <h3>En Mantıklı Kararınız Hazır!</h3>
          </div>
          
          <div className="ranking-cards">
            {results.map((res, i) => (
              <div key={i} className={`rank-card ${i === 0 ? 'winner' : ''}`}>
                <div className="rank-num">{i + 1}</div>
                <div className="rank-name">{res.name}</div>
                <div className="rank-meta">Bilimsel Skor: {res.avgRank}</div>
              </div>
            ))}
          </div>

          <p className="disclaimer">
            Bu sonuç, 12 farklı hibrit karar verme modelinin (TOPSIS, EDAS, CODAS vb.) verilerinizle 
            çarpıştırılması sonucu hesaplanan "Konsensüs" değeridir.
          </p>

          <div className="wizard-footer">
            <button className="btn btn-secondary" onClick={() => setStep(1)}>Yeniden Başlat</button>
            <button className="btn btn-primary" onClick={onBack}>Ana Sayfaya Dön</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wizard;
