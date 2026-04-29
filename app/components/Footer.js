import Link from "next/link";

const cols = [
  {
    title: "Services",
    links: [
      { label: "Civil", href: "/services/civil" },
      { label: "Infrastructure", href: "/services/infrastructure" },
      { label: "Power & Transmission", href: "/services/power" },
      { label: "Marine Pontoons", href: "/services/marine" },
      { label: "Inspect & Investigate", href: "/services/inspect" },
      { label: "Water", href: "/services/water" },
      { label: "Waste Management", href: "/services/waste" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Affiliations", href: "/affiliations" },
      { label: "CSR", href: "/csr" },
      { label: "Our Policies", href: "/policies" },
      { label: "QUU Capability", href: "/quu" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "News", href: "/news" },
      { label: "Development Application Services", href: "/da-services" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Site Map", href: "/sitemap" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link href="/" className="navbar__logo" style={{ color: "var(--color-text-inverse)", fontSize: "1.1rem" }}>
              BLACKSTORM ENGINEERS
            </Link>
            <p>Civil. Structural. Marine.</p>
            <div className="footer__badge" aria-label="Engineers Australia member badge">
              EA MEMBER
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="footer__col">
              <div className="footer__col-title">{col.title}</div>
              {col.links.map((l) => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer__acknowledgement">
          Blackstorm Engineers acknowledges the Traditional Owners of Country
          throughout Queensland and recognises their continuing connection to
          lands, waters and communities. We pay our respects to Elders past,
          present and emerging.
        </div>

        <div className="footer__bottom">
          <span>© 2025 Blackstorm Engineers Pty Ltd. All Rights Reserved.</span>
          <span>RPEQ Certified &nbsp;·&nbsp; QUU Endorsed &nbsp;·&nbsp; Engineers Australia Member</span>
        </div>
      </div>
    </footer>
  );
}
