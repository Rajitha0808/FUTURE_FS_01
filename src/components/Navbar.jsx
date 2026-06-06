function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-box">

        <h2 className="logo">Rajitha</h2>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>

        <a href="#contact" className="contact-btn">
          Contact
        </a>

      </div>
    </nav>
  );
}

export default Navbar;