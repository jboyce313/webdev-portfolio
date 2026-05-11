import boulevard from '../assets/boulevard.png'
import swimmingwithlyndsay from '../assets/swimmingwithlyndsay.png'
import cakePops from '../assets/cake-pops.png'

const projects = [
  {
    id: 1,
    name: 'Boulevard Lawncare',
    description: 'Lawncare service site with service details, pricing, and contact information.',
    url: 'https://boulevard-lawncare.vercel.app/',
    tags: ['Small Business', 'Home Services'],
    img: boulevard,
  },
  {
    id: 2,
    name: 'Swimming with Lyndsay',
    description: 'Independent swim instructor site with class info, scheduling, and contact information.',
    url: 'https://swimmingwithlyndsay.com',
    tags: ['Small Business', 'Health & Wellness'],
    img: swimmingwithlyndsay,
  },
  {
    id: 3,
    name: 'Sweet Pops Co.',
    description: 'E-commerce site for a fictional cake pops company, featuring product listings and order form.',
    url: 'https://cake-pops.vercel.app/',
    tags: ['E-commerce', 'Food & Beverage'],
    img: cakePops,
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
                <img className="project-img" src={project.img} alt={project.name} loading="lazy" />
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
