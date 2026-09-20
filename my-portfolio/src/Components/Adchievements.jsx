function Achievements() {
  return (
    <section className="page-section">

      <div className="section-heading">
        <span>08</span>
        <h1>Achievements</h1>
        <p>Milestones from my IT journey.</p>
      </div>

      <div className="achievement-list">

        <div className="achievement">
          <strong>01</strong>
          <div>
            <h2>Completed IT Projects</h2>
            <p>
              Successfully developed different academic projects
              involving web development, databases, and programming.
            </p>
          </div>
        </div>

        <div className="achievement">
          <strong>02</strong>
          <div>
            <h2>React Application Development</h2>
            <p>
              Created multiple React applications using components,
              state management, routing, and APIs.
            </p>
          </div>
        </div>

        <div className="achievement">
          <strong>03</strong>
          <div>
            <h2>IoT System Development</h2>
            <p>
              Participated in developing an ESP32-based monitoring
              and automation project.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Achievements;