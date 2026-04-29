import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Civil",
    desc: "RPEQ certified civil engineering across site development, earthworks, drainage, and pavements. We manage projects from concept to construction for government and private clients.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 34h28"/><path d="M20 10l-8 12h16L20 10z"/><path d="M20 6v4"/><circle cx="20" cy="5" r="1.5" fill="currentColor" stroke="none"/>
        <path d="M12 22v12"/><path d="M28 22v12"/><path d="M8 28h24"/>
      </svg>
    ),
  },
  {
    title: "Infrastructure",
    desc: "Delivering critical infrastructure including roads, bridges, and public utilities across regional and metropolitan Queensland.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 32h36"/><path d="M6 32V20l14-10 14 10v12"/><path d="M6 20h28"/><path d="M14 20v12"/><path d="M20 10v22"/><path d="M26 20v12"/>
      </svg>
    ),
  },
  {
    title: "Power & Transmission",
    desc: "Design and project management for power distribution and transmission infrastructure, including high-voltage systems and substations.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L10 22h10l-2 16L30 18H20L22 2z"/>
      </svg>
    ),
  },
  {
    title: "Marine Pontoons",
    desc: "Design, certification, and construction of marine pontoons, jetties, boat ramps, and revetment walls. Experienced in tidal and coastal environments.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4v20"/><path d="M20 24l-6-4"/><path d="M20 24l6-4"/><path d="M14 16l-6 4"/><path d="M26 16l6 4"/>
        <path d="M4 30c4-3 8 0 12-3s8 0 12-3s4-1 8 0"/><path d="M4 35c4-3 8 0 12-3s8 0 12-3s4-1 8 0"/>
      </svg>
    ),
  },
  {
    title: "Inspect & Investigate",
    desc: "Structural inspections, condition assessments, and engineering investigations for existing infrastructure — with clear, actionable reporting.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="17" cy="17" r="10"/><path d="M24.5 24.5L36 36"/><path d="M13 14h8"/><path d="M13 20h5"/>
      </svg>
    ),
  },
  {
    title: "Water",
    desc: "Water supply, drainage, and stormwater engineering — including QUU endorsed design and hydraulic modelling.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4S8 18 8 25a12 12 0 0024 0C32 18 20 4 20 4z"/>
        <path d="M16 28a6 6 0 004 2"/>
      </svg>
    ),
  },
  {
    title: "Waste Management",
    desc: "Engineering design and advisory for waste management infrastructure, including transfer stations and landfill works.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 20h24"/><path d="M12 8l-4 12 8 12"/><path d="M28 8l4 12-8 12"/>
        <path d="M16 32l4-12-4-12"/><path d="M24 32l-4-12 4-12"/><path d="M8 20c4 4 8-4 12 0s8-4 12 0"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="services" aria-label="Our Services">
      <div className="container">
        <ScrollReveal>
          <div className="services__header">
            <h2>Specialist engineering services you can rely on</h2>
            <p>From concept through to construction and certification.</p>
          </div>
        </ScrollReveal>

        <div className="services__grid">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="service-card">
                <div className="service-card__icon" aria-hidden="true">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href={`/services/${s.title.toLowerCase().replace(/ & /g, "-")}`} className="text-link">
                  Learn more
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
