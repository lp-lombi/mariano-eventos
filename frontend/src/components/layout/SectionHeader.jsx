import "./SectionHeader.css";

function SectionHeader({ eyebrow, title, className = "" }) {
  return (
    <div className={`section__header ${className}`.trim()}>
      {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
      <h2 className="section__title">{title}</h2>
    </div>
  );
}

export default SectionHeader;
