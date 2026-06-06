function Hero() {
  return (<section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Rajitha</h1>

        <h2>Backend & Full Stack Developer</h2>

        <p>
          Computer Science undergraduate passionate about backend engineering,
          problem solving and building AI-integrated applications.
        </p>
<button
  onClick={() =>
    document
      .getElementById("projects")
      .scrollIntoView({
        behavior: "smooth",
      })
  }
>
  View Projects
</button>
      </div>
    </section>
  );
}

export default Hero;