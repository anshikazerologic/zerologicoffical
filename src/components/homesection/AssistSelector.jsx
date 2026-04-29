import { useEffect, useState } from "react";
import { assistMatrix } from "../../data/siteData";

export default function AssistSelector() {
  const [capability, setCapability] = useState("define");
  const [industry, setIndustry] = useState("saas");

  const capabilityData = assistMatrix[capability];
  const industryLabelMap = {
    saas: "SaaS",
    d2c: "D2C & Commerce",
    fintech: "Fintech",
    healthcare: "Healthcare",
    ai: "AI & Intelligent Systems",
    consumer: "Consumer Brands",
  };

  const industryLabel = industryLabelMap[industry];
  const industryMessage = capabilityData.sectors[industry];

  return (
    <div className="assist-shell assist-shell-merged">
      <div className="assist-copy">
        <p className="eyebrow">How Can We Assist You Today?</p>

        <h2 className="assist-banner-title">
          Strategic clarity. Structured execution. Growth that compounds.
        </h2>

        <p className="section-text">
          This guided selector helps leadership teams move from broad challenges
          to the most relevant capability area and engagement model.
        </p>

        <div className="hero-actions assist-actions">
          <a className="button button-primary" href="/contact">
            Request Consultation
          </a>
          <a className="button button-secondary" href="/services">
            Explore Software Development Services
          </a>
        </div>

        <div className="selector-grid">
          <label>
            Capability area
            <select
              value={capability}
              onChange={(e) => setCapability(e.target.value)}
            >
              <option value="define">Define</option>
              <option value="build">Build</option>
              <option value="drive">Drive</option>
              <option value="scale">Scale</option>
            </select>
          </label>

          <label>
            Industry context
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="saas">SaaS</option>
              <option value="d2c">D2C & Commerce</option>
              <option value="fintech">Fintech</option>
              <option value="healthcare">Healthcare</option>
              <option value="ai">AI & Intelligent Systems</option>
              <option value="consumer">Consumer Brands</option>
            </select>
          </label>
        </div>

        <article className="assist-output">
          <strong>{capabilityData.title}</strong>
          <p>{capabilityData.description}</p>
          <p>
            <strong>Industry application:</strong> {industryMessage}
          </p>
          <p>
            <strong>Recommended engagement:</strong>{" "}
            {capabilityData.engagement}
          </p>
        </article>
      </div>

      <div className="assist-visual">
        <div className="wave-art">
          <span className="wave wave-one"></span>
          <span className="wave wave-two"></span>
          <span className="wave wave-three"></span>
          <span className="wave wave-four"></span>
        </div>

        <div className="assist-visual-note">
          <strong>{industryLabel}</strong>
          <br />
          {capabilityData.title}
        </div>
      </div>
    </div>
  );
}