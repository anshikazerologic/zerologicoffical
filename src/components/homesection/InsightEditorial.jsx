import { insights } from "../../data/siteData";

export default function InsightEditorial({ activeIndex, setActiveIndex }) {
  const current = insights[activeIndex];

  return (
    <>
      <article className="featured-insight">
        {/* <div
          className=""
          style={{ "--feature-visual": current.visual }}
        > */}
          <div className="featured-insight-content">
            <span className="featured-insight-kicker">
              {current.topic}
            </span>

            <h2>{current.title}</h2>
            <p>{current.summary}</p>

            <a className="text-link" href="/capability-model">
              Explore related capability
            </a>
          </div>
        {/* </div> */}
      </article>

      <aside className="editorial-list">
        {insights.map((item, index) => (
          <article
            key={item.id}
            className={`editorial-item ${
              index === activeIndex ? "is-active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="editorial-item-type">
              {item.topic}
            </span>

            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </aside>
    </>
  );
}