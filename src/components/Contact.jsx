function Contact() {
  return (
    <section
      id="contact"
      className="contact"
      data-aos="fade-up"
    >
      <h2>Contact Me</h2>

      <p className="contact-subtitle">
        Have a project or internship opportunity?
        Let's connect.
      </p>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;