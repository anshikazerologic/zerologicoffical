import { insights } from "../../data/siteData";

export default function InsightTopics({ activeIndex, setActiveIndex }) {
  return (
    <>
      {insights.map((item, index) => (
        <button
          key={item.id}
          className={`chip ${index === activeIndex ? "is-active" : ""}`}
          onClick={() => setActiveIndex(index)}
        >
          {item.topic}
        </button>
      ))}
    </>
  );
}