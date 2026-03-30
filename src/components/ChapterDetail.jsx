import '../css/ChapterDetail.css';

const ChapterDetail = ({ topic, course, onBack }) => {
  if (!topic) return null;

  return (
    <div className="courses-page">
      <div className="courses-full-header" style={{ position: 'relative' }}>
        <button className="board-back-btn" onClick={onBack}>← Back</button>
        <h1 className="courses-full-title">{course.title}</h1>
        <p className="courses-full-subtitle">{topic.title}</p>
      </div>

      <div className="chapter-detail-wrap">
        <div className="chapter-detail-box">

          <div className="chapter-textbook-label">
            {topic.textbook}
          </div>

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
    </div>
  );
};

export default ChapterDetail;