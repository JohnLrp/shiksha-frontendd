import React, { useState } from 'react';
import '../css/Feedback.css';

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    });
    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section className="fb-section">
      <div className="fb-bg-grid" />
      <div className="fb-glow-a" />
      <div className="fb-glow-b" />

      <div className="fb-inner">

        {/* Left */}
        <div className="fb-left">
          <div className="fb-badge">
            <div className="fb-badge-dot" />
            <span>Feedback</span>
          </div>
          <h1 className="fb-title">We'd love to hear from you</h1>
          <p className="fb-desc">
            Your feedback helps us improve and serve you better. Share your thoughts, suggestions, or any issues you've encountered.
          </p>

          <div className="fb-info-list">
            <div className="fb-info-item" style={{ '--acc': '#60a5fa' }}>
              <div className="fb-info-icon"><i className="fa-solid fa-clock" /></div>
              <div>
                <div className="fb-info-label">Response Time</div>
                <div className="fb-info-val">Within 2–3 business days</div>
              </div>
            </div>
            <div className="fb-info-item" style={{ '--acc': '#34d399' }}>
              <div className="fb-info-icon"><i className="fa-solid fa-envelope" /></div>
              <div>
                <div className="fb-info-label">Email Us</div>
                <div className="fb-info-val">info@shikshacom.com</div>
              </div>
            </div>
            <div className="fb-info-item" style={{ '--acc': '#fbbf24' }}>
              <div className="fb-info-icon"><i className="fa-solid fa-phone" /></div>
              <div>
                <div className="fb-info-label">Call Us</div>
                <div className="fb-info-val">0389-2300225</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="fb-form-wrap">
          {submitted ? (
            <div className="fb-success">
              <div className="fb-success-icon"><i className="fa-solid fa-circle-check" /></div>
              <h3 className="fb-success-title">Message Sent!</h3>
              <p className="fb-success-sub">Thank you for your feedback. We'll get back to you shortly.</p>
              <button className="fb-btn" onClick={() => setSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form className="fb-form" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="a0608d50-fde6-4fa4-84ef-088941c2ece7" />
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

              <div className="fb-row">
                <div className="fb-field">
                  <label className="fb-label">First Name</label>
                  <input type="text" name="first_name" placeholder="John" required />
                </div>
                <div className="fb-field">
                  <label className="fb-label">Last Name</label>
                  <input type="text" name="last_name" placeholder="Doe" required />
                </div>
              </div>

              <div className="fb-field">
                <label className="fb-label">Email Address</label>
                <input type="email" name="email" placeholder="john@example.com" required />
              </div>

              <div className="fb-field">
                <label className="fb-label">Message</label>
                <textarea name="message" placeholder="Tell us what you think..." required />
              </div>

              <button type="submit" className="fb-btn" disabled={loading}>
                {loading ? (
                  <><i className="fa-solid fa-spinner fa-spin" /> Sending…</>
                ) : (
                  <><i className="fa-solid fa-paper-plane" /> Send Feedback</>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Feedback;