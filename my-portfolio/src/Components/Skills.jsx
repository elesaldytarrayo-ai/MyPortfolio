import SkillCard from "./SkillCard";

function Skills() {
  const skills = [
    ["HTML", "Creating structured and accessible web pages.", "50%"],
    ["CSS", "Designing responsive and attractive interfaces.", "50%"],
    ["JavaScript", "Building interactive web applications.", "50%"],
    ["React", "Developing component-based applications.", "50%"],
    ["PHP", "Creating dynamic server-side applications.", "50%"],
    ["MySQL", "Managing and organizing relational databases.", "50%"],
    ["C++", "Understanding programming and OOP concepts.", "50%"],
    ["Java", "Learning object-oriented programming.", "50%"],
  ];

  return (
    <section className="page-section">

      <div className="section-heading">
        <span>02</span>
        <h1>Technical Skills</h1>
        <p>Technologies and programming skills I am developing.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill[0]}
            description={skill[1]}
            level={skill[2]}
          />
        ))}
      </div>

    </section>
  );
}

export default Skills;