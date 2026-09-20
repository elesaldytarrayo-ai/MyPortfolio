function Experience() {
  return (
    <section className="page-section">

      <div className="section-heading">
        <span>04</span>
        <h1>Experience</h1>
        <p>Practical experiences and activities.</p>
      </div>

      <div className="experience-grid">

        <div className="experience-card">
          <span>ACADEMIC PROJECT</span>
          <h2>Web Development</h2>
          <p>
            Developed React-based websites and applications as part
            of Information Technology coursework.
          </p>
        </div>

        <div className="experience-card">
          <span>DATABASE</span>
          <h2>CRUD Applications</h2>
          <p>
            Created simple systems using PHP and MySQL for managing
            student and class information.
          </p>
        </div>

        <div className="experience-card">
          <span>HARDWARE & SOFTWARE</span>
          <h2>IoT Projects</h2>
          <p>
            Worked with ESP32, sensors, MQTT, relays, and software
            systems for monitoring and automation.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Experience;