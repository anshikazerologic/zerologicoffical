import React , {useState} from 'react'
import { engagements } from "../data/siteData";


export const EngagementModel = () => {
     const [activeId, setActiveId] = useState(engagements[0].id);

  const active = engagements.find(e => e.id === activeId);
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid ">
          <div>
            <p className="eyebrow">Engagement Models</p>
            <h1>Three ways to engage, depending on stage, urgency, and scope.</h1>
            <p className="hero-text">
              The right engagement model depends on whether the immediate need is clarity, execution architecture, or scale readiness.
            </p>
          </div>
          <aside className="page-hero-card">
            <p className="panel-label">Purpose</p>
            <p>Help founders and leadership teams self-select the most credible starting point.</p>
          </aside>
        </div>
      </section>

       <section className="section">
      <div className="container">

        <div className="interactive-panel">

          
          <div
            className="tab-row"
            role="tablist"
            aria-label="Engagement models"
          >
            {engagements.map(entry => (
              <button
                key={entry.id}
                type="button"
                role="tab"
                aria-selected={entry.id === activeId}
                className={`tab-button ${
                  entry.id === activeId ? "is-active" : ""
                }`}
                onClick={() => setActiveId(entry.id)}
              >
                {entry.name}
              </button>
            ))}
          </div>

        
          <div className="engagement-grid">

           
            <div className="detail-panel">
              <p className="panel-label">{active.name}</p>

              <h3>{active.who}</h3>

              <p>{active.situation}</p>

              <div className="detail-grid">

                <div className="detail-block">
                  <h4>Key outcomes</h4>
                  <ul>
                    {active.outcomes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-block">
                  <h4>What gets delivered</h4>
                  <ul>
                    {active.deliverables.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

              </div>

              <p className="section-text">
                <strong>Operating cadence:</strong> {active.cadence}
              </p>

              <p className="section-text">
                <strong>Why it matters:</strong> {active.why}
              </p>
            </div>

         
            <aside className="comparator-card">
              <p className="panel-label">At a glance</p>

              <div className="comparison-list">

                <div className="comparison-row">
                  <span className="comparison-label">Best for</span>
                  <strong>{active.name}</strong>
                </div>

                <div className="comparison-row">
                  <span className="comparison-label">Situation</span>
                  <p>{active.situation}</p>
                </div>

                <div className="comparison-row">
                  <span className="comparison-label">Cadence</span>
                  <p>{active.cadence}</p>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </div>
    </section>

      <section className="section muted-section">
        <div className="container preview-grid ">
          <article className="preview-card">
            <p className="panel-label">Foundation Sprint</p>
            <p>Best for businesses that need sharper clarity before larger execution work begins.</p>
          </article>
          <article className="preview-card">
            <p className="panel-label">Build and Activate</p>
            <p>Best for teams ready to translate strategy into structure, ownership, and coordinated market action.</p>
          </article>
          <article className="preview-card">
            <p className="panel-label">Scale and Expand</p>
            <p>Best for organizations improving resilience, capability maturity, and expansion readiness.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container final-cta-card ">
          <div>
            <p className="eyebrow">Consultation</p>
            <h2>Not every business needs the same entry point. The first conversation helps determine the right one.</h2>
          </div>
          <a className="button button-primary" href="contact.html">Identify The Right Model</a>
        </div>
      </section>
    </>
  )
}
