function Skills() {
  const skills = [
    "Java",
    "Python",
    "DSA",
    "DBMS",
    "REST APIs",
    "Git",
    "GitHub",
    "Firebase",
    "OpenCV",
    "Vercel"
  ];

  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;