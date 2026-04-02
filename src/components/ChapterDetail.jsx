import { useNavigate } from 'react-router-dom';
import '../css/ChapterDetail.css';

const Breadcrumb = ({ items, onNavigate }) => {
  return (
    <div className="course-breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={item.key}>
            <button
              type="button"
              className={`course-breadcrumb__item ${isLast ? 'is-active' : ''}`}
              onClick={() => !isLast && onNavigate(item.key)}
              disabled={isLast}
            >
              {item.label}
            </button>
            {!isLast && <span className="course-breadcrumb__sep">&gt;</span>}
          </span>
        );
      })}
    </div>
  );
};

const ChapterDetail = ({
  topic,
  course,
  boardGroup,
  board,
  selectedClass,
  onBack,
}) => {
  const navigate = useNavigate();

  if (!topic) return null;

  const handleBreadcrumbNav = (key) => {
    onBack?.(key);
  };

  return (
    <div className="chapter-screen">
      <div className="chapter-screen__container">
        <Breadcrumb
          items={[
            { key: 'boards', label: 'Boards' },
            { key: 'boardGroup', label: boardGroup || 'Board Type' },
            { key: 'board', label: board || 'Board' },
            { key: 'class', label: selectedClass || course?.title || 'Class' },
            { key: 'detail', label: course?.title || 'Course Detail' },
            { key: 'subject', label: topic.title },
          ]}
          onNavigate={handleBreadcrumbNav}
        />

        <div className="chapter-layout">
          <div className="chapter-main">
            <div className="chapter-header">
              <h1 className="chapter-header__title">{course?.title}</h1>
              <p className="chapter-header__subtitle">{topic.title}</p>
              <p className="chapter-header__meta">
                Board: {board || 'CBSE'} / Curriculum aligned
              </p>
            </div>

            <div className="chapter-card">
              <div className="chapter-card__label">{topic.textbook}</div>

              <table className="chapter-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Lesson / Chapter Title</th>
                  </tr>
                </thead>
                <tbody>
                  {topic.chapters.map((chapter, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{chapter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="chapter-purchase-card">
            <h3 className="chapter-purchase-card__title">Purchase course</h3>

            <div className="chapter-purchase-card__plan">
              <div className="chapter-purchase-card__radio" />
              <div>
                <p className="chapter-purchase-card__label">Subscribe</p>
                <p className="chapter-purchase-card__price">
                  {course?.price || '₹1,500'} / month
                </p>
              </div>
            </div>

            <ul className="chapter-purchase-card__features">
              <li>Duration: 12 months</li>
              <li>Lifetime access after course completion</li>
              <li>Access to all subjects included in this course</li>
              <li>Recorded classes + revision support</li>
            </ul>

            <button
              className="chapter-purchase-card__btn"
              onClick={() =>
                navigate('/payment', {
                  state: {
                    className: selectedClass || course?.title,
                    subjectName: topic.title,
                    price: course?.price || '₹1,500',
                  },
                })
              }
            >
              Start Subscription
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetail;