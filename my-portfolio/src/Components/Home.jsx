import ProfileCard from "./ProfileCard";
import TechStack from "./TechStack";

function Home({ changePage }) {
  return (
    <section className="home-section">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-text">
          <p className="small-title">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hello, I'm
            <span> Elesaldy Tarrayo</span>
          </h1>

          <h2>
            Information Technology Student
          </h2>

          <p className="hero-description">
            I am an aspiring IT professional interested in web development,
            programming, information systems, and modern technology.
            This portfolio presents my skills, projects, education,
            experiences, and interests in the field of Information Technology.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => changePage("about")}
            >
              About Me
            </button>

            <button
              className="secondary-btn"
              onClick={() => changePage("projects")}
            >
              View Projects
            </button>

            <button
              className="secondary-btn"
              onClick={() => changePage("contact")}
            >
              Contact Me
            </button>
          </div>

          <div className="quick-info">
            <div>
              <strong>BSIT</strong>
              <span>Student</span>
            </div>

            <div>
              <strong>Web</strong>
              <span>Development</span>
            </div>

            <div>
              <strong>IT</strong>
              <span>Technology</span>
            </div>
          </div>
        </div>

        <ProfileCard />

      </div>

      <TechStack />

    </section>
  );
}

export default Home;