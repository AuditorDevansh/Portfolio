import Link from "next/link";
import { profile } from "@/lib/profile";

const socials = [
  { href: `mailto:${profile.email}`, label: "Email", mark: "@", tone: "lime" },
  { href: profile.linkedin, label: "LinkedIn", mark: "in", tone: "pink" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-watermark" aria-hidden="true">
        CLOUD
      </div>
      <div className="footer-content">
        <div className="footer-brand">
          <Link className="footer-name gradient-name" href="/">
            {profile.name}.
          </Link>
          <p>building useful things with Salesforce.</p>
          <div className="footer-socials" aria-label="Social links">
            {socials.map((social) => (
              <a
                aria-label={social.label}
                className={`footer-social footer-social-${social.tone}`}
                href={social.href}
                key={social.label}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                target={social.href.startsWith("http") ? "_blank" : undefined}
              >
                {social.mark}
              </a>
            ))}
          </div>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/work">work</Link>
          <Link href="/testimonials">community</Link>
          <Link href="/#about">me</Link>
          <Link href="/contact">hi</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
