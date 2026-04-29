"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const aboutLinks = [
  { label: "Who We Are", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Affiliations", href: "/affiliations" },
  { label: "Corporate Social Responsibility", href: "/csr" },
  { label: "Our Policies", href: "/policies" },
];

const serviceLinks = [
  { label: "Civil", href: "/services/civil" },
  { label: "Infrastructure", href: "/services/infrastructure" },
  { label: "Power & Transmission", href: "/services/power" },
  { label: "Marine Pontoons", href: "/services/marine" },
  { label: "Inspect & Investigate", href: "/services/inspect" },
  { label: "Water", href: "/services/water" },
  { label: "Waste Management", href: "/services/waste" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleMobileDropdown = (name) =>
    setMobileDropdown((prev) => (prev === name ? null : name));

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} role="banner">
        <div className="container navbar__inner">
          <Link href="/" className="navbar__logo" aria-label="Blackstorm Engineers Home">
            BLACKSTORM ENGINEERS
          </Link>

          <nav className="navbar__links" aria-label="Main navigation">
            <div className="navbar__dropdown">
              <button className="navbar__link" aria-haspopup="true" aria-expanded="false">
                About Us
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 4, verticalAlign: "middle" }}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="navbar__dropdown-menu" role="menu">
                {aboutLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="navbar__dropdown-link" role="menuitem">{l.label}</Link>
                ))}
              </div>
            </div>

            <div className="navbar__dropdown">
              <button className="navbar__link" aria-haspopup="true" aria-expanded="false">
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 4, verticalAlign: "middle" }}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="navbar__dropdown-menu" role="menu">
                {serviceLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="navbar__dropdown-link" role="menuitem">{l.label}</Link>
                ))}
              </div>
            </div>

            <Link href="/projects" className="navbar__link">Our Projects</Link>
            <Link href="/news" className="navbar__link">News</Link>
            <Link href="/contact" className="btn-primary" style={{ marginLeft: "0.5rem" }}>Contact Us</Link>
          </nav>

          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-nav ${mobileOpen ? "mobile-nav--open" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <button className="mobile-nav__close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <button className="mobile-nav__link" onClick={() => toggleMobileDropdown("about")}>About Us</button>
        {mobileDropdown === "about" && (
          <div className="mobile-nav__sub">
            {aboutLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</Link>
            ))}
          </div>
        )}

        <button className="mobile-nav__link" onClick={() => toggleMobileDropdown("services")}>Services</button>
        {mobileDropdown === "services" && (
          <div className="mobile-nav__sub">
            {serviceLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</Link>
            ))}
          </div>
        )}

        <Link href="/projects" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>Our Projects</Link>
        <Link href="/news" className="mobile-nav__link" onClick={() => setMobileOpen(false)}>News</Link>
        <Link href="/contact" className="btn-primary" onClick={() => setMobileOpen(false)} style={{ marginTop: "1rem" }}>Contact Us</Link>
      </div>
    </>
  );
}
