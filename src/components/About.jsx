export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-bio">
            <p>
              I'm a web developer with two years of professional experience
              building and maintaining web applications for a large corporation.
              That experience gave me a strong foundation in writing reliable,
              performant code — and a clear sense of what actually matters when
              shipping a site that people depend on.
            </p>
            <p>
              Now I focus on helping small businesses and independent clients
              get online with fast, straightforward websites. No bloated
              templates, no unnecessary complexity — just well-built sites that
              represent you well and are easy to maintain.
            </p>
          </div>
          <div className="about-skills">
            <h3>What I Offer</h3>
            <ul className="skills-list">
              <li>Custom website design &amp; development</li>
              <li>Landing pages &amp; business brochure sites</li>
              <li>Portfolio &amp; personal sites</li>
              <li>Contact forms &amp; lead capture</li>
              <li>Mobile-responsive, accessible layouts</li>
              <li>Ongoing maintenance &amp; updates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
