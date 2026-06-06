function Resume() {
  return (
   <section   id="resume" className="resume" data-aos="fade-up">
      <h2>Resume</h2>

      <p>
        Download my resume to know more about my education, skills and projects.
      </p>

      <a
        href="/resume.pdf"
        download
        className="resume-btn"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;