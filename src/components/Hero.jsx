import { useEffect, useState, useRef } from 'react';
import '../css/Hero.css';

const subjectCards = [
  {
    id: 1,
    name: 'Physics',
    tag: 'Live Now',
    tagClass: 'tag-live',
    icon: 'fa-atom',
    img: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&q=80',
    accent: '#60a5fa',
  },
  {
    id: 2,
    name: 'Chemistry',
    tag: 'Recorded',
    tagClass: 'tag-rec',
    icon: 'fa-flask',
    img: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&q=80',
    accent: '#34d399',
  },
  {
    id: 3,
    name: 'Biology',
    tag: 'Recorded',
    tagClass: 'tag-rec',
    icon: 'fa-dna',
    img: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400&q=80',
    accent: '#fbbf24',
  },
  {
    id: 4,
    name: 'Mathematics',
    tag: 'Starting Soon',
    tagClass: 'tag-soon',
    icon: 'fa-square-root-variable',
    img: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80',
    accent: '#a78bfa',
  },
  {
    id: 5,
    name: 'History',
    tag: 'Recorded',
    tagClass: 'tag-rec',
    icon: 'fa-landmark',
    img: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&q=80',
    accent: '#f87171',
  },
  {
    id: 6,
    name: 'English',
    tag: 'Live Now',
    tagClass: 'tag-live',
    icon: 'fa-book-open',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80',
    accent: '#fb923c',
  },
];

const updates = [
  { id: 1, title: 'April Session Starting soon', accent: '#ff8f01' },
  { id: 2, title: 'CBSE / NCERT Course from Class 8 to Class 12', accent: '#f87171' },
  { id: 3, title: 'MBSC Course from Class 8 to Class 12', accent: '#1dcaab' },
  { id: 4, title: 'Higher education for all stream', accent: '#a78bfa' },
  { id: 5, title: 'Free guest access — no registration needed', accent: '#34d399' },
  { id: 6, title: 'New Live Session features just added', accent: '#fbbf24' },
  { id: 7, title: 'Enrollment open now', accent: '#60a5fa' },
  { id: 8, title: 'New and Profound Instructor joining us', accent: '#fb923c' },
];

const CARD_HEIGHT = 72;
const GAP = 10;

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const [paused, setPaused] = useState(false);
  const items = [...updates, ...updates];
  const currentRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const step = CARD_HEIGHT + GAP;

  const advance = () => {
    currentRef.current += 1;
    setTransitioning(true);
    setOffset(currentRef.current * step);

    if (currentRef.current >= updates.length) {
      setTimeout(() => {
        setTransitioning(false);
        currentRef.current = 0;
        setOffset(0);
      }, 520);
    }
  };

  useEffect(() => {
    if (paused) { clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(advance, 4000);
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <section className="shiksha-hero">
      <div className="hero-bg-grid"></div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-glow-3"></div>

      <div className="hero-inner">

        {/* LEFT — 3 × 2 subject grid */}
        <div className="hero-left">
          <div className="subject-grid">
            {subjectCards.map((card, i) => (
              <div
                key={card.id}
                className={`scard ${visible ? 'scard-visible' : ''}`}
                style={{ '--delay': `${i * 80}ms`, '--accent': card.accent }}
              >
                <div className="scard-img-wrap">
                  <img src={card.img} alt={card.name} className="scard-img" loading="lazy" />
                  <div className="scard-img-overlay"></div>
                </div>
                <div className="scard-body">
                  <div className="scard-icon-wrap">
                    <i className={`fa-solid ${card.icon}`}></i>
                  </div>
                  <div className="scard-info">
                    <span className="scard-name">{card.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — vertical scrolling update cards */}
        <div className="hero-right">
          <div className="updates-panel">

            <div className="up-header">
              <div className="up-header-left">
                <span className="up-title">Latest Updates</span>
              </div>
            </div>

            <div
              className="up-viewport"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="up-fade up-fade-top"></div>

              <div
                className="up-track"
                style={{
                  transform: `translateY(-${offset}px)`,
                  transition: transitioning
                    ? 'transform 0.52s cubic-bezier(0.4,0,0.2,1)'
                    : 'none',
                }}
              >
                {items.map((u, i) => (
                  <div
                    key={`${u.id}-${i}`}
                    className="up-card"
                    style={{ '--uaccent': u.accent }}
                  >
                    <div className="up-card-dot"></div>
                    <span className="up-card-title">{u.title}</span>
                  </div>
                ))}
              </div>

              <div className="up-fade up-fade-bottom"></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;