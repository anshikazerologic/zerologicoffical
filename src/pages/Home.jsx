import React, { useState } from "react";
import AssistSelector from "../components/homesection/AssistSelector";
import InsightTopics from "../components/homesection/InsightTopics";
import InsightEditorial from "../components/homesection/InsightEditorial";
export default function Home() {
    const [activeIndex, setActiveIndex] = useState(2);
    return (

        <>

            <section className="hero-stage">
                <div className="container hero-stage-layout ">
                    <div className="hero-stage-copy">
                        <p className="eyebrow">Executive Perspectives</p>

                        <h1 className="">
                            Unlocking sharper direction for businesses ready to execute at a higher level.
                        </h1>

                        <p className="stage-text">
                            Zerologic is a strategic and execution-focused consulting firm that helps leadership teams turn direction into a disciplined operating model across strategy, product, growth systems, and execution architecture.
                        </p>


                        <div className="hero-actions">
                            <div className="chip-row hero-topic-row">
                                <InsightTopics
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="hero-stage-editorial">
                        <InsightEditorial
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    </div>

                    <div className="hero-stage-subscribe">
                        <p>
                            Subscribe to insights on operating performance, scale readiness, and execution systems.
                        </p>
                        <a className="text-link" href="/contact">
                            Request strategic updates
                        </a>
                    </div>

                    <div>
                        <AssistSelector />
                    </div>
                </div>
            </section>


            <section className="section">
                <div className="container  ">
                    <div className="section-heading">
                        <p className="eyebrow">Positioning</p>

                        <h2>
                            Built for the space between strategic ambition and scalable execution.
                        </h2>

                        <p className="section-text">
                            Zerologic combines strategic intelligence with operational execution. Learn more about our{" "}
                            <a href="/services">software development services</a>.
                        </p>
                    </div>

                    <div className="narrative-list">
                        <article className="narrative-card">
                            <h3>Beyond traditional consulting</h3>
                            <p>Advice translates into ownership and execution clarity.</p>
                        </article>

                        <article className="narrative-card">
                            <h3>Beyond agencies and vendors</h3>
                            <p>We begin with business structure, not surface activity.</p>
                        </article>

                        <article className="narrative-card">
                            <h3>Built for decision-makers</h3>
                            <p>Designed for founders and leadership teams.</p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section ">
                <div className="container">
                    <div className="section-heading ">
                        <p className="eyebrow">Core Model</p>
                        <h2>Define. Build. Drive. Scale.</h2>
                        <p className="section-text">
                            Zerologic's model provides a structured path from strategic clarity to execution capacity and long-term scale.
                        </p>
                    </div>
                    <div className="framework-grid ">
                        <article className="framework-card">
                            <span className="framework-step">Define</span>
                            <h3>Strategic and insight foundation</h3>
                            <p>Establish strategic clarity, market direction, and defensible priorities.</p>
                        </article>
                        <article className="framework-card">
                            <span className="framework-step">Build</span>
                            <h3>Execution architecture</h3>
                            <p>Translate strategy into operating structure, workflow logic, and ownership.</p>
                        </article>
                        <article className="framework-card">
                            <span className="framework-step">Drive</span>
                            <h3>Growth execution and activation</h3>
                            <p>Activate growth through disciplined delivery and stronger performance management.</p>
                        </article>
                        <article className="framework-card">
                            <span className="framework-step">Scale</span>
                            <h3>Optimization and expansion systems</h3>
                            <p>Strengthen performance drivers and expand capacity sustainably.</p>
                        </article>
                    </div>
                    <div className="section-actions ">
                        <a className="button button-secondary" href="/services">View Full Services Framework</a>
                    </div>
                </div>
            </section>


            <section className="section">
                <div className="container preview-grid ">
                    <article className="preview-card">
                        <p className="panel-label">Capability Model</p>
                        <h3>From reactive execution to scalable organization</h3>
                        <p>Use the maturity framework to identify the structural gap between current effort and future scale.</p>
                        <a className="text-link" href="/capability-model">Explore the capability model</a>
                    </article>
                    <article className="preview-card">
                        <p className="panel-label">Engagement Models</p>
                        <h3>Three ways to engage based on stage and urgency</h3>
                        <p>Foundation Sprint, Build and Activate, and Scale and Expand help teams self-select the right starting point.</p>
                        <a className="text-link" href="/engagement-models">Compare engagement models</a>
                    </article>
                    <article className="preview-card">
                        <p className="panel-label">Industries</p>
                        <h3>Adaptable across sectors without losing rigor</h3>
                        <p>See how Zerologic applies its model across SaaS, fintech, D2C, healthcare, AI, mobility, and more.</p>
                        <a className="text-link" href="/industries">View industries</a>
                    </article>
                </div>
            </section>

            <section className="section ">
                <div className="container">
                    <div className="section-heading ">
                        <p className="eyebrow">Proof</p>
                        <h2>Structured thinking and practical intervention logic.</h2>
                    </div>
                    <div className="proof-grid ">
                        <article className="proof-card">
                            <p className="proof-label">Transformation Snapshot</p>
                            <h3>Operating clarity for a growth-stage SaaS business</h3>
                            <p>Priorities, ownership, and review cadence were redesigned to support stronger execution.</p>
                        </article>
                        <article className="proof-card">
                            <p className="proof-label">Capability-Led Proof</p>
                            <h3>Execution architecture for new-market expansion</h3>
                            <p>Decision rights, rollout sequencing, KPI visibility, and operating readiness were clarified before activation.</p>
                        </article>
                        <article className="proof-card">
                            <p className="proof-label">Engagement Example</p>
                            <h3>Foundation Sprint for strategic reset</h3>
                            <p>A sharper path was built before broader execution work began.</p>
                        </article>
                    </div>
                    <div className="section-actions ">
                        <a className="button button-secondary" href="/proof">View Proof Framework</a>
                    </div>
                </div>
            </section>


            <section className="section">
                <div className="container">
                    <div className="game-spotlight ">
                        <div>
                            <p className="eyebrow">Interactive Prototype</p>
                            <h2>
                                Play a story-led snake and ladder experiment built around marketing wins and mistakes.
                            </h2>

                            <p className="section-text">
                                This standalone browser prototype turns classic board-game movement into a playful campaign journey.
                            </p>
                        </div>

                        <div className="game-spotlight-actions">
                            <a className="button button-primary" href="/snake-ladder">
                                Play the Prototype
                            </a>
                            <a className="button button-secondary" href="/snake-ladder#rules-section">
                                See the Rules
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section final-cta">
                <div className="container final-cta-card ">
                    <div>
                        <p className="eyebrow">Consultation</p>
                        <h2>
                            If the next phase of growth requires more structure, this is where it begins.
                        </h2>
                    </div>
                    <div className="section-actions">
                        <a className="button button-primary" href="/contact">
                            Request Strategic Consultation
                        </a>
                    </div>

                </div>
            </section>

        </>
    );
}