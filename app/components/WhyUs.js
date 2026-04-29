import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: "🔐",
    title: "RPEQ Certified",
    text: "All structural and civil designs are certified by Registered Professional Engineers of Queensland.",
  },
  {
    icon: "🛡️",
    title: "QUU Endorsed",
    text: "Approved for Queensland Urban Utilities design and construction works.",
  },
  {
    icon: "🤝",
    title: "Collaborative by nature",
    text: "We work alongside architects, builders, project managers, and clients to deliver integrated outcomes.",
  },
  {
    icon: "📍",
    title: "Queensland-based & focused",
    text: "A local team with deep knowledge of Queensland's environment, regulations, and procurement landscape.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="why-us" aria-label="Why Blackstorm">
      <div className="why-us__hero-image">
        <img
          src="split.jpg"
          alt="Engineering team collaboration on a Queensland infrastructure project"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        ></img>
      </div>

      <div className="why-us__content">
        <div className="container why-us__grid">
          <ScrollReveal direction="left">
            <div className="why-us__text">
              <h2>We go above &amp; beyond because the infrastructure we build matters</h2>
              <p>
                With RPEQ certification across civil, structural, and marine disciplines,
                Blackstorm Engineers brings technical rigour and real field experience to
                every engagement.
              </p>
              <p>
                From QUU endorsed water design to complex geotechnical investigations,
                we don&apos;t just draw plans — we take ownership of outcomes.
              </p>
              <Link href="/about" className="text-link" style={{ color: "var(--color-accent)" }}>
                More about us
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="why-us__values">
              {values.map((v) => (
                <div key={v.title} className="value-block">
                  <div className="value-block__title">
                    <span aria-hidden="true" style={{ marginRight: "0.5rem" }}>{v.icon}</span>
                    {v.title}
                  </div>
                  <p>{v.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
