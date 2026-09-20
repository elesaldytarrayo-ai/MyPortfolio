import profile from "../assets/profile.jpg";

function ProfileCard() {
  return (
    <div className="profile-container">

      <div className="profile-glow"></div>

      <div className="profile-card">
        <div className="profile-image-wrapper">
          <img
            src={profile}
            alt="My Profile"
            className="profile-image"
          />
        </div>

        <div className="profile-status">
          <span></span>
          Available for opportunities
        </div>

        <h3>Information Technology</h3>

        <p>
          Aspiring IT Professional
        </p>

        <div className="profile-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>PHP</span>
          <span>MySQL</span>
        </div>
      </div>

    </div>
  );
}

export default ProfileCard;