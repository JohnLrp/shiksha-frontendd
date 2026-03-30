import { useEffect, useRef } from "react";
import "../css/Stats.css";

const Stats = () => {
  const numsRef = useRef([]);

  useEffect(() => {
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.target);
      if (!target) return;

      let count = 0;
      const step = Math.ceil(target / 50);

      const timer = setInterval(() => {
        count = Math.min(count + step, target);
        el.innerHTML = count + el.dataset.suffix;
        if (count >= target) clearInterval(timer);
      }, 30);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animateCounter(e.target);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    numsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ss-strip">
      <div className="ss-inner">

        <div className="ss-item">
          <div
            className="ss-num"
            data-target="17"
            data-suffix="+"
            ref={(el) => (numsRef.current[0] = el)}
          >
            0+
          </div>
          <div className="ss-label">Academic Programs</div>
        </div>

        <div className="ss-item">
          <div
            className="ss-num"
            data-target="9"
            data-suffix="+"
            ref={(el) => (numsRef.current[1] = el)}
          >
            0+
          </div>
          <div className="ss-label">Exam Categories</div>
        </div>

        <div className="ss-item">
          <div
            className="ss-num"
            data-target="2"
            data-suffix=" Modes"
            ref={(el) => (numsRef.current[2] = el)}
          >
            0 Modes
          </div>
          <div className="ss-label">Live + Recorded Learning</div>
        </div>

        <div className="ss-item">
          <div className="ss-num">Free</div>
          <div className="ss-label">Guest Preview Access</div>
        </div>

      </div>
    </div>
  );
};

export default Stats;