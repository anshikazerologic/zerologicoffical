import React , {useState} from 'react'
import { maturityStages } from "../data/siteData";

export const CapabilityModel = () => {
     const [activeId, setActiveId] = useState(maturityStages[0].id);

  const activeStage = maturityStages.find(s => s.id === activeId);
  return (
   <>
      <section class="page-hero">
        <div class="container page-hero-grid">
          <div>
            <p class="eyebrow">Capability Model</p>
            <h1>A maturity model for businesses moving from reactive execution to scalable performance.</h1>
            <p class="hero-text">
              Scale is not created by doing more. It is created by building better operating capability.
            </p>
          </div>
          <aside class="page-hero-card">
            <p class="panel-label">Use this page to</p>
            <ul class="plain-list">
              <li>Identify your current maturity stage</li>
              <li>Recognize structural gaps</li>
              <li>See which Zerologic intervention is relevant now</li>
            </ul>
          </aside>
        </div>
      </section>

      
       <section className="section">
      <div className="container">
        <div className="capability-layout">

          <div className="maturity-rail" aria-label="Capability maturity stages">
            {maturityStages.map(stage => (
              <button
                key={stage.id}
                type="button"
                className={`maturity-button ${stage.id === activeId ? "is-active" : ""}`}
                onClick={() => setActiveId(stage.id)}
              >
                {stage.name}
                <span>{stage.subtitle}</span>
              </button>
            ))}
          </div>

       
          <div className="detail-panel capability-panel">
            <p className="panel-label">{activeStage.name}</p>
            <h3>{activeStage.subtitle}</h3>
            <p>{activeStage.description}</p>

            <div className="detail-grid">

              <div className="detail-block">
                <h4>Typical signs</h4>
                <ul>
                  {activeStage.symptoms.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-block">
                <h4>Zerologic intervention</h4>
                <ul>
                  {activeStage.intervention.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

            </div>

            <p className="section-text">
              <strong>Most relevant engagement:</strong>{" "}
              {activeStage.engagement}
            </p>
          </div>

        </div>
      </div>
    </section>

      <section class="section muted-section">
        <div class="container preview-grid ">
          <article class="preview-card">
            <p class="panel-label">Stage Signals</p>
            <h3>Reactive to emerging</h3>
            <p>Leadership intervention remains high, prioritization is unstable, and systems are not yet carrying complexity.</p>
          </article>
          <article class="preview-card">
            <p class="panel-label">Stage Signals</p>
            <h3>Structured to integrated</h3>
            <p>Core rhythms exist, but strategy, product, operations, and growth are not yet fully coordinated.</p>
          </article>
          <article class="preview-card">
            <p class="panel-label">Stage Signals</p>
            <h3>Scalable</h3>
            <p>The organization can expand with stronger visibility, repeatability, and less dependency on improvisation.</p>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="container final-cta-card ">
          <div>
            <p class="eyebrow">Next Step</p>
            <h2>Once the maturity gap is clear, the right intervention becomes much easier to define.</h2>
          </div>
          <a class="button button-primary" href="contact.html">Assess Your Current Stage</a>
        </div>
      </section>
    </>
  )
}
