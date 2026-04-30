import { useState } from 'react';
import { grammarConcepts } from '../data/grammarData';
import './Grammar.css';

export default function Grammar() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <div className="grammar-page page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <span className="arabic page-header-arabic">النحو القرآني</span>
          <h1 className="section-title">Quranic Arabic Grammar</h1>
          <p className="section-subtitle">
            Explore the foundational grammar concepts of Arabic as used in the Quran.
            Click any concept to expand its details and see a Quranic example.
          </p>
          <div className="divider"><span className="divider-symbol">✦</span></div>
        </div>

        {/* Category labels */}
        <div className="grammar-categories">
          <div className="cat-group">
            <h3 className="cat-title">Word Types</h3>
            <p className="cat-desc">Ism · Fi'l · Harf</p>
          </div>
          <div className="cat-group">
            <h3 className="cat-title">Grammatical Cases</h3>
            <p className="cat-desc">Marfu' · Mansub · Majrur</p>
          </div>
          <div className="cat-group">
            <h3 className="cat-title">Definiteness</h3>
            <p className="cat-desc">Ma'rifa · Nakira</p>
          </div>
        </div>

        {/* Concept Cards */}
        <div className="concepts-list">
          {grammarConcepts.map((concept) => (
            <div
              key={concept.id}
              className={`concept-card card ${expanded === concept.id ? 'expanded' : ''}`}
            >
              <button
                className="concept-header"
                onClick={() => toggle(concept.id)}
                aria-expanded={expanded === concept.id}
              >
                <div className="concept-header-left">
                  <span className="concept-num">#{concept.id}</span>
                  <div>
                    <div className="concept-arabic arabic-small">{concept.arabic}</div>
                    <div className="concept-title">{concept.title}</div>
                  </div>
                </div>
                <span className="expand-icon">{expanded === concept.id ? '▲' : '▼'}</span>
              </button>

              {expanded === concept.id && (
                <div className="concept-body">
                  <div className="divider"><span className="divider-symbol">—</span></div>
                  <p className="concept-desc">{concept.description}</p>

                  <div className="concept-example">
                    <div className="example-label">Quranic Example</div>
                    <div className="example-arabic arabic">{concept.example.arabic}</div>
                    <div className="example-row">
                      <span className="example-translit"><em>{concept.example.transliteration}</em></span>
                      <span className="example-translation">"{concept.example.translation}"</span>
                    </div>
                    <div className="example-source">{concept.example.source}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="grammar-footer">
          <p>
            💡 <strong>Tip:</strong> Focus on recognizing word types and case endings as you read 
            the Quran. Even identifying a few Isms and Harfs will deepen your understanding 
            significantly.
          </p>
        </div>
      </div>
    </div>
  );
}
