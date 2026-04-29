export default function PathwayChips({ pathways, activeId, onSelect }) {
  return (
    <div className="chip-row" id="pathway-buttons" aria-label="Business situation selector">
      {pathways.map((p) => (
        <button
          key={p.id}
          className={`chip ${p.id === activeId ? "is-active" : ""}`}
          onClick={() => onSelect(p.id)}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
}