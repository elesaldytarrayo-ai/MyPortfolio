import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Student Management System",
      text: "A web-based CRUD application for managing student information.",
      tech: "PHP • MySQL • HTML • CSS",
    },
    {
      title: "React Portfolio",
      text: "A responsive personal portfolio developed using React and Vite.",
      tech: "React • JavaScript • CSS",
    },
    {
      title: "Smart Fish Pond",
      text: "An ESP32-based monitoring and pump control system.",
      tech: "ESP32 • MQTT • IoT",
    },
    {
      title: "Waste Sorting Challenge",
      text: "A simple educational game developed using Pygame and OOP concepts.",
      tech: "Python • Pygame • OOP",
    },
    {
      title: "Gender Roles PH",
      text: "An educational website exploring gender roles in the Philippine context.",
      tech: "React • CSS • JavaScript",
    },
    {
      title: "API Character App",
      text: "A React application that retrieves character information from an API.",
      tech: "React • API • JavaScript",
    },
  ];

  return (
    <section className="page-section">

      <div className="section-heading">
        <span>05</span>
        <h1>My Projects</h1>
        <p>Selected academic and personal technology projects.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            number={String(index + 1).padStart(2, "0")}
            title={project.title}
            text={project.text}
            tech={project.tech}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;