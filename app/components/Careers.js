import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Careers() {
  return (
    <section id="careers" className="careers" aria-label="Careers at Blackstorm">
      <div className="container careers__grid">
        <ScrollReveal direction="left">
          <div className="careers__image">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Engineering team working together in a collaborative office environment"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.15}>
          <div className="careers__text">
            <div className="careers__quote" aria-hidden="true">&ldquo;</div>
            <span className="label-tag">Careers</span>
            <h2>Join a team building Queensland&apos;s future</h2>
            <p>
              Whether you&apos;re a graduate engineer or a seasoned RPEQ professional,
              Blackstorm Engineers is always keen to hear from driven individuals with
              a passion for civil, structural, or marine engineering.
            </p>
            <p>
              We value hands-on problem solvers who take ownership. If that sounds like
              you, we&apos;d like to talk.
            </p>
            <div className="careers__buttons">
              <Link href="/careers" className="btn-primary">View Open Roles →</Link>
              <Link href="/about" className="text-link">Learn about our culture</Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
