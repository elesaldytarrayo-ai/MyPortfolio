function Navbar({ page, changePage }) {
  const buttons = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["education", "Education"],
    ["projects", "Projects"],
    ["experience", "Experience"],
    ["services", "Services"],
    ["certifications", "Certificates"],
    ["achievements", "Achievements"],
    ["contact", "Contact"],
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">

        <button
          className="logo"
          onClick={() => changePage("home")}
        >
          <span>IT</span>
          <strong>Portfolio</strong>
        </button>

        <div className="nav-buttons">
          {buttons.map(([value, label]) => (
            <button
              key={value}
              className={page === value ? "nav-btn active" : "nav-btn"}
              onClick={() => changePage(value)}
            >
              {label}
            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;