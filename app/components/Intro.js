import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Intro() {
  return (
    <section id="intro" className="intro" aria-label="About Blackstorm">
      <div className="container intro__grid">
        <ScrollReveal direction="left">
          <div className="intro__text">
            <span className="label-tag">About Blackstorm</span>
            <div className="intro__accent" aria-hidden="true" />
            <h2>Our mission is to engineer infrastructure that stands the test of time</h2>
            <p>
              Queensland Government agencies, local councils, and private sector
              developers rely on Blackstorm Engineers for technically rigorous,
              RPEQ-certified outcomes — from marine pontoon design to civil
              construction works up to $50 million in value.
            </p>
            <p>
              We combine hands-on field expertise with leading engineering practice
              to deliver projects that perform — on budget, on time, and built to
              last.
            </p>
            <Link href="/about" className="text-link">More about us</Link>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.15}>
          <div className="intro__image">
            <img
              src="mission-1.jpg"
              alt="Blackstorm Engineers team reviewing structural plans on site"
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 768px) 40vw, 100vw"
          ></img>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
