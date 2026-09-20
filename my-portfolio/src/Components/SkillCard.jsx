function SkillCard({ name, description, level }) {
  return (
    <div className="skill-card">

      <div className="skill-top">
        <h3>{name}</h3>
        <span>{level}</span>
      </div>

      <p>{description}</p>

      <div className="progress-bar">
        <div
          className="progress-value"
          style={{ width: level }}
        ></div>
      </div>

    </div>
  );
}

export default SkillCard;