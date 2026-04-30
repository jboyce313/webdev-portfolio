const projects = [
  {
    id: 1,
    name: 'Swimming with Lyndsay',
    description: 'Independent swim instructor site with class info, scheduling, and contact information.',
    url: 'https://swimmingwithlyndsay.com',
    tags: ['Small Business', 'Health & Wellness'],
    img: '/swimmingwithlyndsay.png',
  },
]

export default function Portfolio() {
  return (
    <section className="section section-alt" id="portfolio">
      <div className="section-inner">
        <h2 className="section-title">Portfolio</h2>
        <p className="section-sub">
          A sample of sites I've built for clients across a range of industries.
        </p>
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-thumb">
                <img className="project-img" src={project.img} alt={project.name} />
              </div>
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href={project.url}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Site &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
