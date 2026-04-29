import React from "react";

export default function Home() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-grid ">
          <div>
            <p className="eyebrow">About Zerologic</p>
            <h1>Built for the stage where strategy is no longer enough.</h1>
            <p className="hero-text">
              Zerologic exists to close the gap between business direction and business execution,
              especially for growth-stage organizations entering a more complex phase of scale.
            </p>
          </div>
          <aside className="page-hero-card">
            <p className="panel-label">What kind of partner Zerologic is</p>
            <ul className="plain-list">
              <li>Structured, not performative</li>
              <li>Strategic, but close to implementation</li>
              <li>Executive-facing and outcome-led</li>
              <li>Built for serious operating decisions</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid ">
          <article className="content-card">
            <p className="panel-label">Why Zerologic Exists</p>
            <h2>Most businesses do not break because they lack ideas.</h2>
            <p>
              They break because growth exposes coordination problems, diffuse priorities, weak operating logic,
              and execution systems that were never built for the next level of complexity.
            </p>
            <p>
              Zerologic was created for this stage: when leadership needs a partner that can think clearly,
              build correctly, and structure execution in a way that can actually scale.
            </p>
          </article>
          <article className="content-card">
            <p className="panel-label">Philosophy</p>
            <h2>Execution is where most strategies fail.</h2>
            <p>
              Not because the strategy is inherently weak, but because the business lacks the architecture
              required to carry it across teams, processes, products, and markets.
            </p>
            <p>
              Zerologic brings both strategic intelligence and operational execution logic to that problem.
            </p>
          </article>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-heading ">
            <p className="eyebrow">How Zerologic Works</p>
            <h2>Directly with founders and leadership teams.</h2>
          </div>
          <div className="principles-grid ">
            <article>
              <h3>Clarify priorities</h3>
              <p>Create sharper strategic decisions and stronger leadership alignment.</p>
            </article>
            <article>
              <h3>Design operating logic</h3>
              <p>Build the structure required to carry strategy into execution.</p>
            </article>
            <article>
              <h3>Strengthen discipline</h3>
              <p>Improve ownership, cadence, visibility, and execution rhythm.</p>
            </article>
            <article>
              <h3>Expand sustainably</h3>
              <p>Prepare the business for growth without weakening quality or control.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container final-cta-card ">
          <div>
            <p className="eyebrow">Next Step</p>
            <h2>If the issue is no longer effort, but structure, Zerologic is designed for that moment.</h2>
          </div>
          <a className="button button-primary" href="/contact">Start A Conversation</a>
        </div>
      </section>
    </>
  )}