function ProjectCard({ number, title, text, tech }) {
  return (
    <article className="project-card">

      <div className="project-number">
        {number}
      </div>

      <div className="project-content">
        <h2>{title}</h2>

        <p>{text}</p>

        <div className="project-tech">
          {tech}
        </div>

        <button className="project-button">
          View Project →
        </button>
      </div>

    </article>
  );
}

export default ProjectCard;