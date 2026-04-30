export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-photo">
        <img src="/selfie.jpg" alt="Jacob Boyce" className="hero-photo" />
      </div>
      <div className="hero-text">
        <h1>Jacob Boyce</h1>
        <p className="hero-tagline">Independent Web Developer</p>
        <p className="hero-sub">
          I build clean, lightweight websites for small businesses and
          individuals who want a professional online presence without the overhead.
        </p>
        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary">See My Work</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
