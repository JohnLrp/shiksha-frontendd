import { Link } from 'react-router-dom';
import '../css/AAbout.css';

const checkItems = [
  'Board-aligned academic programs for Class 8 through 12',
  'Structured competitive exam preparation across 8 major categories',
  'Dual delivery model — live interactive classes and recorded sessions',
  'Mobile-first design accessible on any device, anywhere',
  'Institutional credibility — academic discipline, not marketing hype',
];

const statBoxes = [
  { val: '17', suffix: '+', label: 'Academic Programs' },
  { val: '8',  suffix: '+', label: 'Exam Categories'   },
  { val: 'Live', suffix: '', label: 'Interactive Classes', small: true },
  { val: 'Free', suffix: '', label: 'Guest Preview Access', small: true, teal: true },
];

const badges = ['CBSE Aligned', 'NCERT Based', 'Mizoram Board', 'NTA Pattern', 'UPSC Framework'];

const About = () => {
  return (
    <section className="sa-section">
      <div className="sa-inner">

        {/* LEFT */}
        <div className="sa-left">
          <ul className="sa-list">
            {checkItems.map((item, i) => (
              <li key={i}>
                <div className="sa-check">
                  <i className="fa-solid fa-check"></i>
                </div>
                {item}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
            <Link to="/about" className="sa-btn">
              <i className="fa-solid fa-compass"></i> Learn More About Us
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="sa-right">
          <div className="sa-card">
            <div className="sa-card-title">Empowering Learners Across Northeast India</div>

            <div className="sa-stat-grid">
              {statBoxes.map((s, i) => (
                <div className="sa-stat-box" key={i}>
                  <div
                    className="sa-stat-val"
                    style={{
                      fontSize: s.small ? '22px' : undefined,
                      color: s.teal ? '#1DCAAB' : undefined,
                    }}
                  >
                    {s.val}<span>{s.suffix}</span>
                  </div>
                  <div className="sa-stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="sa-badges">
              {badges.map((b, i) => (
                <span className="sa-badge" key={i}>{b}</span>
              ))}
            </div>

            <div className="sa-live-row">
              <div className="sa-live-dot"></div>
              <span className="sa-live-text">
                Platform is <strong>live</strong> — explore programs and start learning today
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;