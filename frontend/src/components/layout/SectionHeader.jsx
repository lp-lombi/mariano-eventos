function SectionHeader({ eyebrow, title, intro, className = "" }) {
  return (
    <div className={`section__header ${className}`.trim()}>
      {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
      <h2 className="section__title">{title}</h2>
      {intro ? <p className="section__intro">{intro}</p> : null}
    </div>
  );
}

export default SectionHeader;
