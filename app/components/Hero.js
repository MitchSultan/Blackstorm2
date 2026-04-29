import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section id="hero" className="hero" aria-label="Hero">
        <div className="hero__bg">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Large-scale civil engineering construction site in Queensland"
            fill
            style={{ objectFit: "cover" }}
            priority
            sizes="100vw"
          />
          <div className="hero__overlay" />
        </div>

        <div className="container hero__content">
          <div className="hero__accent-line" aria-hidden="true" />

          <h1 className="hero__title">
            Engineering solutions built for the real world.
          </h1>

          <p className="hero__subtitle">
            Civil. Structural. Marine. Power. Water.
          </p>

          <p className="hero__body">
            RPEQ certified engineers delivering projects across Queensland — from
            $50M civil works to marine pontoon design.
          </p>

          <div className="hero__buttons">
            <Link href="/projects" className="btn-primary">
              Our Projects →
            </Link>
            <Link href="/contact" className="btn-secondary btn-secondary--light">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <div className="hero__trust-bar">
        <div className="container">
          Trusted by Queensland Government, local councils, and private sector clients.
        </div>
      </div>
    </>
  );
}
