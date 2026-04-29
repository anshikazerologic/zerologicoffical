import React , {useState} from 'react'
import { industries } from "../data/siteData";

export const Industries = () => {
        const [activeId, setActiveId] = useState(industries[0].id);
    
      const active = industries.find(e => e.id === activeId);
    return (
        <>
            <section className="page-hero">
                <div className="container page-hero-grid ">
                    <div>
                        <p className="eyebrow">Industries</p>
                        <h1>Adaptable across sectors without becoming scattered.</h1>
                        <p className="hero-text">
                            Zerologic applies the same strategic and operating discipline across different market environments.
                        </p>
                    </div>
                    <aside className="page-hero-card">
                        <p className="panel-label">Industry lens</p>
                        <p>The operating logic remains consistent. The business context, customer dynamic, and growth constraints do not.</p>
                    </aside>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="interactive-panel ">
                        <div className="chip-row" id="industry-buttons" aria-label="Industry selector">
                            {industries.map(entry => (
                                <button
                                    key={entry.id}
                                    type='button'
                                    aria-selected={entry.id === activeId}
                                    className={`chip ${entry.id === activeId ? "is-active" : ""}`}
                                    onClick={() => setActiveId(entry.id)}
                                >{entry.name}</button>
                            ))}
                        </div>
                        <div className="detail-panel" id="industry-panel">
                            <p className='panel-label'>{active.name}</p>
                            <h3>How the Zerologic model applies</h3>
                            <p>{active.summary}</p>
                            <div className='detail-grid'>
                                <div className='detail-block'>
                                    <h4>Typical business problems</h4>
                                    <ul>{active.problems.map((item) => (<li key={item}>{item}</li>))}</ul>
                                    

                                </div>
                                <div className="detail-block">
                                    <h4>Model relevance</h4>
                                    <ul>
                                        <li><strong>Define:</strong> clarify market and growth priorities</li>
                                        <li><strong>Build:</strong> strengthen execution architecture</li>
                                        <li><strong>Drive:</strong> activate coordinated growth</li>
                                        <li><strong>Scale:</strong> improve resilience and expansion capacity</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section muted-section">
                <div className="container preview-grid ">
                    <article className="preview-card">
                        <p className="panel-label">Cross-industry need</p>
                        <h3>Strategic prioritization</h3>
                        <p>Clarify where to focus, what to stop, and which growth path deserves resources now.</p>
                    </article>
                    <article className="preview-card">
                        <p className="panel-label">Cross-industry need</p>
                        <h3>Execution architecture</h3>
                        <p>Build ownership, governance, and workflow logic that supports better coordination.</p>
                    </article>
                    <article className="preview-card">
                        <p className="panel-label">Cross-industry need</p>
                        <h3>Scale readiness</h3>
                        <p>Strengthen systems before expansion exposes more operational strain.</p>
                    </article>
                </div>
            </section>

            <section className="section">
                <div className="container final-cta-card ">
                    <div>
                        <p className="eyebrow">Market Context</p>
                        <h2>The model adapts to your sector. The standard of strategic discipline does not.</h2>
                    </div>
                    <a className="button button-primary" href="/contact">Discuss Your Market</a>
                </div>
            </section>
        </>
    )
}
