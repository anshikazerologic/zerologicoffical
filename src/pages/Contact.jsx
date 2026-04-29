import React, { useState, useMemo } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    website: "",
    stage: "",
    engagement: "",
    challenge: "",
    success: "",
  });

  const [feedback, setFeedback] = useState("");

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const previewText = useMemo(() => {
    const company = form.company?.trim() || "Your business";
    const role = form.role?.trim() || "leadership";
    const stage = form.stage?.trim() || "its current stage";
    const engagement = form.engagement?.trim() || "the most suitable engagement";
    const challenge = form.challenge?.trim() || "the primary execution challenge";
    const success = form.success?.trim();

    return `${company} is seeking a Zerologic consultation from ${role} leadership, focused on ${stage.toLowerCase()}. The discussion will center on ${challenge.toLowerCase()} and whether ${engagement.toLowerCase()} is the right starting point.${
      success
        ? ` Success would be defined as: ${success.toLowerCase()}.`
        : ""
    }`;
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      setFeedback(
        "Please complete the required fields so the consultation request is properly framed."
      );
      return;
    }

    setFeedback(
      "Inquiry framed. This prototype does not send data yet, but the consultation summary is ready for backend integration."
    );
  };

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>A strategic conversation, not a transactional inquiry.</h1>
            <p className="hero-text">
              The first conversation is designed to clarify operating stage,
              execution friction, capability gaps, and the most effective starting point.
            </p>
          </div>

          <aside className="page-hero-card">
            <p className="panel-label">Most relevant for</p>
            <ul className="plain-list">
              <li>Growth-stage businesses</li>
              <li>Founders beyond early traction</li>
              <li>Teams entering new markets</li>
              <li>Organizations aligning product, brand, and growth</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="section-heading">
            <p className="eyebrow">What The Conversation Clarifies</p>
            <ul className="plain-list">
              <li>Your current operating stage</li>
              <li>Where execution is breaking down most visibly</li>
              <li>Which capability gaps matter most now</li>
              <li>The most credible engagement starting point</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">

              <label>
                Name
                <input
                  name="name"
                  required
                  placeholder="Your full name"
                  onChange={updateField}
                />
              </label>

              <label>
                Role
                <input
                  name="role"
                  required
                  placeholder="Founder, CEO, COO, Head of Growth"
                  onChange={updateField}
                />
              </label>

              <label>
                Company
                <input
                  name="company"
                  required
                  placeholder="Company or organization name"
                  onChange={updateField}
                />
              </label>

              <label>
                Website
                <input
                  name="website"
                  type="url"
                  placeholder="https://yourcompany.com"
                  onChange={updateField}
                />
              </label>

              <label>
                Business stage
                <select name="stage" required onChange={updateField}>
                  <option value="">Select your current operating stage</option>
                  <option>Moving beyond early traction</option>
                  <option>Scaling with complexity</option>
                  <option>Entering a new market</option>
                  <option>Resetting direction and execution</option>
                </select>
              </label>

              <label>
                Preferred engagement
                <select name="engagement" required onChange={updateField}>
                  <option value="">Select preferred engagement model</option>
                  <option>Foundation Sprint</option>
                  <option>Build and Activate</option>
                  <option>Scale and Expand</option>
                  <option>Need guidance on fit</option>
                </select>
              </label>

              <label className="full-span">
                Primary challenge
                <textarea
                  name="challenge"
                  rows="4"
                  required
                  placeholder="What is slowing execution, limiting scale, or creating friction in your system today?"
                  onChange={updateField}
                />
              </label>

              <label className="full-span">
                Success criteria
                <textarea
                  name="success"
                  rows="3"
                  placeholder="What would meaningfully change in 6–12 months if this engagement is successful?"
                  onChange={updateField}
                />
              </label>
            </div>

            <div className="form-actions">
              <button className="button button-primary" type="submit">
                Submit Inquiry
              </button>

              <p className="form-note" aria-live="polite">
                {feedback}
              </p>
            </div>

            <article className="form-preview">
              <p className="panel-label">Consultation framing</p>
              <p>{previewText}</p>
            </article>
          </form>
        </div>
      </section>
    </>
  );
};