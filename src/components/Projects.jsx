function Projects() {
  const projects = [
    {
      title: "InfoPilot Multi-AI System",
      desc: "AI evaluation system integrating LLM APIs with full-stack implementation.",
      github: "https://github.com/Rajitha0808/INFOPILOT"
    },
    {
      title: "Night Vehicle Detection",
      desc: "Computer vision system using OpenCV and ML for low-light vehicle detection.",
      github: "https://github.com/Rajitha0808/Night-Vehicle-Detection"
    },
    {
  title: "LRU Cache System",
  desc: "Java implementation using HashMap and Doubly Linked List with O(1) operations.",
  github: "https://github.com/Rajitha0808/DSA-Java-Cache"
}
  ];

  return (
    <section
      id="projects"
      className="projects"
      data-aos="fade-up"
    >
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;