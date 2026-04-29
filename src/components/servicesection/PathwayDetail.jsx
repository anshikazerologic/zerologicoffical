export default function PathwayDetail({ pathway }) {
    if (!pathway) return null;

    return (
        <div className="detail-panel" id="pathway-panel">
            <span className="panel-label">{pathway.stage} stage</span>
            <h3>{pathway.title}</h3>
            <p>{pathway.summary}</p>

            <div className="detail-grid">
                <div className="detail-block">
                    <h4>Likely outcomes</h4>
                    <ul>
                        {pathway.outcomes.map((o, i) => (
                            <li key={i}>{o}</li>
                        ))}
                    </ul>
                </div>

                <div className="detail-block">
                    <h4>Typical workstreams</h4>
                    <ul>
                        {pathway.workstreams.map((w, i) => (
                            <li key={i}>{w}</li>
                        ))}
                    </ul>
                </div>
            </div>



            <p className="section-text">
                <strong>{pathway.cta}</strong>
            </p>
        </div>
    );
}