import { useEffect } from "react";
import "../css/VideoShowcase.css";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Introduction to the Course", tag: "Featured", duration: "18:42" },
  { id: "dQw4w9WgXcQ", title: "Core Concepts", tag: "Module 2", duration: "12:10" },
  { id: "dQw4w9WgXcQ", title: "Deep Dive", tag: "Module 3", duration: "09:55" },
  { id: "dQw4w9WgXcQ", title: "Practice", tag: "Module 4", duration: "07:30" },
  { id: "dQw4w9WgXcQ", title: "MCQ Revision", tag: "Module 5", duration: "11:20" },
  { id: "dQw4w9WgXcQ", title: "Mock Test", tag: "Bonus", duration: "05:45" }
];

const VideoShowcase = () => {

  useEffect(() => {
    const cells = document.querySelectorAll(".cell");

    cells.forEach((cell, index) => {
      const iframe = cell.querySelector("iframe");

      cell.addEventListener("click", () => {
        cell.classList.add("playing");
        iframe.src = `https://www.youtube.com/embed/${videos[index].id}?autoplay=1&rel=0`;
      });
    });
  }, []);

  return (
    <div className="showcase">

      {/* Header */}
      <div className="showcase-header">
        <div className="showcase-header-left">
          <span className="live-badge">
            <span className="live-dot"></span>
            Course Preview
          </span>
          <span className="showcase-title">Watch & Learn</span>
        </div>
        <span className="showcase-count">6 lectures</span>
      </div>

      {/* Grid */}
      <div className="bento">
        {videos.map((vid, i) => (
          <div key={i} className={`cell cell--${i + 1}`}>
            <div className="cell-thumb placeholder"></div>
            <div className="cell-overlay"></div>
            <div className="play-btn"></div>

            <div className="cell-info">
              <div className="cell-meta">
                <span className="cell-tag">{vid.tag}</span>
                <div className="cell-title">{vid.title}</div>
              </div>
              <span className="cell-duration">{vid.duration}</span>
            </div>

            <iframe className="cell-iframe" allowFullScreen></iframe>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="showcase-footer">
        <div className="footer-stats">
          <span className="stat">⏱ 1h 04m total</span>
          <span className="stat">👥 4.8k students</span>
        </div>

        <a href="#" className="footer-cta">
          View all lectures →
        </a>
      </div>

    </div>
  );
};

export default VideoShowcase;