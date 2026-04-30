import { Link } from 'react-router-dom';
import './Home.css';

const features = [
  {
    to: '/grammar',
    icon: '📖',
    title: 'Grammar',
    arabicTitle: 'النحو',
    description: 'Learn Quranic Arabic grammar — nouns, verbs, particles, and grammatical cases with Quranic examples.',
    color: '#1a5c38',
  },
  {
    to: '/tajweed',
    icon: '🎵',
    title: 'Tajweed',
    arabicTitle: 'التجويد',
    description: 'Master the rules of Quran recitation with color-coded explanations of Ghunna, Ikhfa, Idgham, and more.',
    color: '#c9a227',
  },
  {
    to: '/practice',
    icon: '✏️',
    title: 'Practice',
    arabicTitle: 'التدريب',
    description: 'Test your understanding with interactive quizzes on both grammar and Tajweed concepts.',
    color: '#7c3aed',
  },
];

export default function Home() {
  return (
    <div className="home page pattern-bg">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-badge">بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
          <h1 className="hero-title">
            Learn the Language of the Quran
          </h1>
          <p className="hero-subtitle">
            A structured, beautiful guide to Quranic Arabic grammar and Tajweed recitation rules —
            grounded in authentic Quranic verses.
          </p>
          <div className="hero-actions">
            <Link to="/grammar" className="btn btn-primary">Start with Grammar</Link>
            <Link to="/tajweed" className="btn btn-secondary">Explore Tajweed</Link>
          </div>
          <div className="hero-verse">
            <p className="arabic">وَرَتِّلِ الْقُرْآنَ تَرْتِيلاً</p>
            <p className="verse-trans">"And recite the Quran with measured recitation." — Surah Al-Muzzammil 73:4</p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="features-section">
        <div className="container">
          <div className="divider"><span className="divider-symbol">✦</span></div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Where Would You Like to Begin?</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Choose a topic to start your journey in understanding the Quran
          </p>
          <div className="features-grid">
            {features.map(({ to, icon, title, arabicTitle, description, color }) => (
              <Link to={to} key={to} className="feature-card card">
                <div className="feature-icon" style={{ color }}>{icon}</div>
                <div className="feature-arabic" style={{ color }}>{arabicTitle}</div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{description}</p>
                <span className="feature-link" style={{ color }}>Begin →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="about-section">
        <div className="container about-inner">
          <div className="about-text">
            <h2 className="section-title">Why Learn Quranic Arabic?</h2>
            <div className="divider"><span className="divider-symbol">✦</span></div>
            <p>
              Understanding the Arabic of the Quran transforms your relationship with the text. 
              When you recognize grammatical structures and recitation rules, the words come alive 
              with meaning and beauty.
            </p>
            <p style={{ marginTop: '1rem' }}>
              This app covers the foundational grammar categories — Ism, Fi'l, and Harf — as well 
              as case endings, definiteness, and the six core Tajweed rules essential for 
              correct recitation.
            </p>
            <Link to="/practice" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Test Your Knowledge
            </Link>
          </div>
          <div className="about-decoration">
            <div className="geo-pattern">
              <div className="geo-inner">
                <span className="geo-text arabic-small">اقْرَأْ</span>
                <span className="geo-label">Iqra — Read!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
