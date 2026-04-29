import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    image: "fullbleed.jpg",
    tags: ["Civil", "Marine"],
    title: "Great Keppel Island Revetment Wall",
    excerpt: "Revetment wall construction in a tidal coastal environment, requiring marine certification and coordinated barge logistics.",
    alt: "Coastal revetment wall construction at Great Keppel Island",
  },
  {
    image: "mission-2.jpg",
    tags: ["Infrastructure"],
    title: "Hale Street Noise Barrier — Paddington",
    excerpt: "Structural design and project management of noise barrier construction along a high-traffic urban corridor.",
    alt: "Noise barrier structure along Hale Street Paddington",
  },
  {
    image: "split.jpg",
    tags: ["Water", "Civil"],
    title: "QUU Water Infrastructure Works",
    excerpt: "QUU endorsed hydraulic and civil design for a water supply upgrade in South East Queensland.",
    alt: "Water infrastructure pipeline installation in South East Queensland",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects" aria-label="Featured Projects">
      <div className="container">
        <div className="projects__header">
          <h2>Delivering outcomes across Queensland</h2>
          <Link href="/projects" className="text-link">All Projects</Link>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <article className="project-card">
                <div className="project-card__image">
                  <img
                    src={p.image}
                    alt={p.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 768px) 33vw, 100vw"
                  ></img>
                </div>
                <div className="project-card__body">
                  <div className="project-card__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="project-card__tag">{t}</span>
                    ))}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <Link href="/projects" className="text-link" style={{ color: "var(--color-accent)" }}>
                    View project
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="projects__footer">
          <Link href="/projects" className="text-link">All Projects</Link>
        </div>
      </div>
    </section>
  );
}
