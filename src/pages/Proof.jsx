import React from 'react'

export const Proof = () => {
  return (
     <>
      <section className="page-hero">
        <div className="container page-hero-grid ">
          <div>
            <p className="eyebrow">Proof</p>
            <h1>Evidence of structured thinking and practical execution.</h1>
            <p className="hero-text">
              Proof does not begin with polished case studies alone. It begins with clear problem definition,
              strong intervention logic, and outcomes that can be understood.
            </p>
          </div>
          <aside className="page-hero-card">
            <p className="panel-label">Flexible proof architecture</p>
            <p>This page is designed to hold case studies, capability-led proof, engagement examples, and transformation snapshots.</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container proof-grid ">
          <article className="proof-card">
            <p className="proof-label">Transformation Snapshot</p>
            <h3>Growth-stage SaaS business</h3>
            <p>Core challenge: rising demand, inconsistent delivery, weak alignment between product and commercial teams.</p>
            <ul>
              <li>Clarified priorities</li>
              <li>Redefined decision ownership</li>
              <li>Installed execution cadence</li>
            </ul>
          </article>
          <article className="proof-card">
            <p className="proof-label">Capability-Led Proof</p>
            <h3>New-market readiness</h3>
            <p>Core challenge: market ambition existed, but rollout sequencing and operating readiness were underdeveloped.</p>
            <ul>
              <li>Built rollout structure</li>
              <li>Clarified KPI visibility</li>
              <li>Strengthened governance</li>
            </ul>
          </article>
          <article className="proof-card">
            <p className="proof-label">Engagement Example</p>
            <h3>Foundation Sprint</h3>
            <p>Core challenge: traction existed, but the next strategic move lacked clarity and decision discipline.</p>
            <ul>
              <li>Strategic diagnosis</li>
              <li>Leadership alignment</li>
              <li>Priority framework</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container content-grid">
          <article className="content-card">
            <p className="panel-label">Case Study Template</p>
            <h2>Problem. Intervention. Outcome.</h2>
            <p>Each future case study can be structured around the business situation, Zerologic intervention, and what changed operationally.</p>
          </article>
          <article className="content-card">
            <p className="panel-label">Capability-Led Proof</p>
            <h2>Useful even before a large case library exists.</h2>
            <p>Structured proof blocks help demonstrate the quality of thinking, intervention design, and typical business impact.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container final-cta-card ">
          <div>
            <p className="eyebrow">Relevant Example</p>
            <h2>If you want a proof narrative closer to your situation, the first conversation can be tailored around that.</h2>
          </div>
          <a className="button button-primary" href="/contact">Request A Relevant Example</a>
        </div>
      </section>
    </>
  )
}
