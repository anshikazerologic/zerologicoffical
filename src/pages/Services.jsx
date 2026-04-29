import React ,{useState} from 'react'
import { pathways } from "../data/siteData";
import PathwayChips from '../components/servicesection/PathwayChips'
import PathwayDetail from '../components/servicesection/PathwayDetail'

export const Services = () => {
    const [activeId, setActiveId] = useState(pathways[0].id);

  const activePathway = pathways.find(p => p.id === activeId);
    return (
        <>
            <section className="page-hero">
                <div className="container page-hero-grid ">
                    <div>
                        <p className="eyebrow">Services</p>
                        <h1>A consulting model built around execution, not just recommendation.</h1>
                        <p className="hero-text">
                            Zerologic's services are structured as a connected framework rather than a menu of disconnected offers.
                        </p>
                    </div>
                    <aside className="page-hero-card">
                        <p className="panel-label">Framework</p>
                        <p>Define strategic clarity. Build execution architecture. Drive growth execution. Scale sustainably.</p>
                    </aside>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="section-heading ">
                        <p className="eyebrow">Service Pathway Explorer</p>
                        <h2>Start from the business friction.</h2>
                    </div>
                    <div className="interactive-panel">
                        <PathwayChips
                            pathways={pathways}
                            activeId={activeId}
                            onSelect={setActiveId}
                        />

                        <PathwayDetail pathway={activePathway} />
                    </div>
                </div>
            </section>

            <section className="section muted-section">
                <div className="container">
                    <div className="framework-grid ">
                        <article className="framework-card framework-card-full">
                            <span className="framework-step">Define</span>
                            <h3>Strategic and insight foundation</h3>
                            <p>Purpose: establish strategic clarity, market direction, and a defensible path to growth.</p>
                            <ul>
                                <li>Solves unclear priorities, weak market focus, and strategic diffusion</li>
                                <li>Creates sharper focus, decision criteria, and aligned leadership direction</li>
                                <li>Includes strategic diagnosis, market framing, proposition clarity, and prioritization</li>
                                <li>Sample outputs: strategic priorities map, decision framework, proposition architecture</li>
                            </ul>
                        </article>
                        <article className="framework-card framework-card-full">
                            <span className="framework-step">Build</span>
                            <h3>Execution architecture</h3>
                            <p>Purpose: translate strategy into structured execution across teams, processes, products, and platforms.</p>
                            <ul>
                                <li>Solves poor coordination, unclear ownership, and weak operating logic</li>
                                <li>Creates better delivery discipline and stronger cross-functional alignment</li>
                                <li>Includes operating model design, governance, workflow definition, and product-growth alignment</li>
                                <li>Sample outputs: execution blueprint, governance cadence, decision rights map</li>
                            </ul>
                        </article>
                        <article className="framework-card framework-card-full">
                            <span className="framework-step">Drive</span>
                            <h3>Growth execution and market activation</h3>
                            <p>Purpose: activate growth through disciplined execution and performance management.</p>
                            <ul>
                                <li>Solves stalled momentum, inconsistent go-to-market execution, and weak KPI discipline</li>
                                <li>Creates stronger market motion, accountability, and performance visibility</li>
                                <li>Includes activation planning, initiative management, reporting structure, and execution rhythm</li>
                                <li>Sample outputs: activation roadmap, KPI framework, performance review cadence</li>
                            </ul>
                        </article>
                        <article className="framework-card framework-card-full">
                            <span className="framework-step">Scale</span>
                            <h3>Optimization and expansion systems</h3>
                            <p>Purpose: strengthen performance drivers and expand growth capacity sustainably.</p>
                            <ul>
                                <li>Solves scale strain, inconsistent quality, and overreliance on individual effort</li>
                                <li>Creates more resilient systems, stronger control, and better expansion readiness</li>
                                <li>Includes optimization, capability strengthening, scale-readiness planning, and expansion logic</li>
                                <li>Sample outputs: optimization roadmap, capability maturity plan, scale-readiness assessment</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container final-cta-card ">
                    <div>
                        <p className="eyebrow">Consultation</p>
                        <h2>The right service path depends on whether the immediate need is clarity, execution architecture, activation, or scale readiness.</h2>
                    </div>
                    <a className="button button-primary" href="/contact">Discuss Your Current Stage</a>
                </div>
            </section>
        </>
    )
}
