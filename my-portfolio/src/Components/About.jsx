function About() {
  return (
    <section className="page-section">

      <div className="section-heading">
        <span>01</span>
        <h1>About Me</h1>
        <p>Getting to know the person behind the code.</p>
      </div>

      <div className="about-grid">

        <div className="glass-card">
          <h2>Who I Am</h2>

          <p>
            I am an Information Technology student with an interest in
            programming, web development, databases, and information systems.
            I enjoy learning new technologies and creating practical
            applications that can help solve real-world problems.
          </p>

          <p>
            My goal is to continue improving my technical skills while
            developing professional experience in the field of Information
            Technology.
          </p>
        </div>

        <div className="glass-card">
          <h2>My Career Goal</h2>

          <p>
            To start a career where I can learn, improve, and contribute
            to the success of a workplace while continuing to develop
            my skills as an IT professional.
          </p>

          <div className="info-list">
            <div>
              <strong>Field</strong>
              <span>Information Technology</span>
            </div>

            <div>
              <strong>Interest</strong>
              <span>Web Development</span>
            </div>

            <div>
              <strong>Specialization</strong>
              <span>Hardware and Software & Information Technology</span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;