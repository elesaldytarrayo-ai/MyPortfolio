function Services() {
  const services = [
    ["01", "Web Development", "Creating modern and responsive websites."],
    ["02", "UI Design", "Designing simple and user-friendly interfaces."],
    ["03", "Database Systems", "Creating and managing database applications."],
    ["04", "React Development", "Building component-based web applications."],
    ["05", "System Development", "Developing simple information systems."],
    ["06", "Technical Support", "Basic troubleshooting and computer assistance."],
  ];

  return (
    <section className="page-section">

      <div className="section-heading">
        <span>06</span>
        <h1>Services</h1>
        <p>Technology-related areas I can work with.</p>
      </div>

      <div className="services-grid">

        {services.map((service) => (
          <div className="service-card" key={service[0]}>
            <span>{service[0]}</span>
            <h2>{service[1]}</h2>
            <p>{service[2]}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;