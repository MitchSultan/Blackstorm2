import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CtaBanner() {
  return (
    <section id="cta" className="cta-banner" aria-label="Get in touch">
      <div className="cta-banner__pattern" aria-hidden="true" />
      <ScrollReveal direction="scale">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="label-tag">Ready to Build?</span>
          <div className="cta-banner__rule" aria-hidden="true" />
          <h2>Solve complex. Build smart.</h2>
          <p className="cta-banner__sub">
            Reach out to our team for a no-obligation consultation on your next project.
          </p>
          <Link href="/contact" className="btn-primary">Get in Touch →</Link>
          <a href="tel:+61700000000" className="cta-banner__phone">
            Or call us: (07) XXXX XXXX
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
