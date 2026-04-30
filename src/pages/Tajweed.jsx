import { useState } from 'react';
import { tajweedRules } from '../data/tajweedData';
import './Tajweed.css';

export default function Tajweed() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="tajweed-page page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <span className="arabic page-header-arabic">أحكام التجويد</span>
          <h1 className="section-title">Tajweed — Rules of Recitation</h1>
          <p className="section-subtitle">
            Tajweed ensures the correct pronunciation of every letter and word in the Quran.
            Select a rule below to learn its details and see a color-coded Quranic example.
          </p>
          <div className="divider"><span className="divider-symbol">✦</span></div>
        </div>

        {/* Color Legend */}
        <div className="color-legend">
          <span className="legend-title">Color Guide:</span>
          {tajweedRules.map((rule) => (
            <span
              key={rule.id}
              className="legend-item"
              style={{ borderColor: rule.color, color: rule.color }}
            >
              <span className="legend-dot" style={{ background: rule.color }}></span>
              {rule.name}
            </span>
          ))}
        </div>

        {/* Rule Cards Grid */}
        <div className="rules-grid">
          {tajweedRules.map((rule) => (
            <div
              key={rule.id}
              className={`rule-card card ${selected === rule.id ? 'rule-selected' : ''}`}
              style={{ '--rule-color': rule.color }}
              onClick={() => setSelected(selected === rule.id ? null : rule.id)}
            >
              <div className="rule-card-top">
                <div className="rule-color-bar" style={{ background: rule.color }}></div>
                <div className="rule-card-content">
                  <div className="rule-arabic arabic-small" style={{ color: rule.color }}>
                    {rule.arabic}
                  </div>
                  <div className="rule-name">{rule.name}</div>
                  <div className="rule-duration">{rule.duration}</div>
                </div>
              </div>

              {selected === rule.id && (
                <div className="rule-detail" onClick={(e) => e.stopPropagation()}>
                  <div className="rule-divider" style={{ background: rule.color }}></div>

                  <p className="rule-desc">{rule.description}</p>

                  <div className="rule-letters">
                    <span className="rule-letters-label">Applied letters:</span>
                    <div className="letters-list">
                      {rule.letters.map((letter, i) => (
                        <span
                          key={i}
                          className="letter-badge arabic-small"
                          style={{ color: rule.color, borderColor: rule.color }}
                        >
                          {letter}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rule-example" style={{ borderColor: rule.color }}>
                    <div className="example-label" style={{ color: rule.color }}>
                      Quranic Example
                    </div>
                    <div className="example-arabic-colored arabic">
                      {rule.example.arabic.split('').map((char, i) => (
                        <span
                          key={i}
                          style={
                            rule.example.highlight.includes(char)
                              ? { color: rule.color, fontWeight: 700 }
                              : {}
                          }
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                    <div className="example-row">
                      <em className="example-translit">{rule.example.transliteration}</em>
                      <span className="example-translation">"{rule.example.translation}"</span>
                    </div>
                    <div className="example-source">{rule.example.source}</div>
                    <div className="highlight-note" style={{ color: rule.color }}>
                      ★ Highlighted letters show where <strong>{rule.name}</strong> applies
                    </div>
                  </div>
                </div>
              )}

              {selected !== rule.id && (
                <p className="rule-teaser">{rule.description.split('.')[0]}.</p>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="tajweed-footer">
          <p>
            💡 <strong>Tip:</strong> When reciting, go slowly at first and focus on one rule at a time. 
            Listen to a qualified reciter and compare your pronunciation to theirs.
          </p>
        </div>
      </div>
    </div>
  );
}
