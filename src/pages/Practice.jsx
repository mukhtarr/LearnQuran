import { useState } from 'react';
import { quizQuestions } from '../data/quizData';
import './Practice.css';

export default function Practice() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState([]);

  const question = quizQuestions[current];
  const total = quizQuestions.length;

  const handleSelect = (idx) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const isCorrect = idx === question.correct;
    if (isCorrect) setScore((s) => s + 1);
    setResults((r) => [...r, { id: question.id, correct: isCorrect }]);
  };

  const handleNext = () => {
    if (current + 1 >= total) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
    setResults([]);
  };

  const getOptionClass = (idx) => {
    if (!answered) return 'option';
    if (idx === question.correct) return 'option correct';
    if (idx === selected && idx !== question.correct) return 'option wrong';
    return 'option';
  };

  const getScoreMessage = () => {
    const pct = (score / total) * 100;
    if (pct === 100) return { msg: "Excellent! Masha'Allah! 🌟", color: '#22c55e' };
    if (pct >= 70) return { msg: 'Well done! Keep learning. 📖', color: '#3b82f6' };
    if (pct >= 40) return { msg: 'Good effort! Review the lessons. 💪', color: '#f97316' };
    return { msg: "Keep studying — you'll get there! 🌱", color: '#ef4444' };
  };

  if (finished) {
    const { msg, color } = getScoreMessage();
    return (
      <div className="practice-page page">
        <div className="container">
          <div className="results-container card">
            <div className="results-arabic arabic">الحمد لله</div>
            <h2 className="results-title">Quiz Complete!</h2>
            <div className="score-display" style={{ color }}>
              {score} / {total}
            </div>
            <p className="score-msg" style={{ color }}>{msg}</p>

            <div className="results-breakdown">
              {quizQuestions.map((q, i) => (
                <div key={q.id} className={`result-item ${results[i]?.correct ? 'res-correct' : 'res-wrong'}`}>
                  <span className="res-icon">{results[i]?.correct ? '✓' : '✗'}</span>
                  <span className="res-q">Q{i + 1}: {q.question.substring(0, 55)}…</span>
                  <span className={`badge ${q.type === 'grammar' ? 'badge-grammar' : 'badge-tajweed'}`}>
                    {q.type}
                  </span>
                </div>
              ))}
            </div>

            <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={handleRestart}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="practice-page page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <span className="arabic page-header-arabic">التدريب</span>
          <h1 className="section-title">Practice Quiz</h1>
          <p className="section-subtitle">
            Test your knowledge of Quranic grammar and Tajweed rules.
          </p>
          <div className="divider"><span className="divider-symbol">✦</span></div>
        </div>

        {/* Progress */}
        <div className="quiz-progress">
          <div className="progress-info">
            <span>Question {current + 1} of {total}</span>
            <span>Score: {score}</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((current + (answered ? 1 : 0)) / total) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="question-card card">
          <div className="question-meta">
            <span className={`badge ${question.type === 'grammar' ? 'badge-grammar' : 'badge-tajweed'}`}>
              {question.type}
            </span>
            <span className="question-num">Q{current + 1}</span>
          </div>

          <h2 className="question-text">{question.question}</h2>

          <div className="options-list">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                className={getOptionClass(idx)}
                onClick={() => handleSelect(idx)}
                disabled={answered}
              >
                <span className="option-letter">{['A', 'B', 'C', 'D'][idx]}</span>
                <span className="option-text">{opt}</span>
                {answered && idx === question.correct && <span className="opt-icon">✓</span>}
                {answered && idx === selected && idx !== question.correct && <span className="opt-icon">✗</span>}
              </button>
            ))}
          </div>

          {answered && (
            <div className="explanation-box">
              <span className="explanation-icon">💡</span>
              <p>{question.explanation}</p>
            </div>
          )}

          {answered && (
            <div className="quiz-actions">
              <button className="btn btn-primary" onClick={handleNext}>
                {current + 1 >= total ? 'See Results' : 'Next Question →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
