import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Devansh Mishra on LinkedIn or by email.",
};

const contactLinks = [
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    display: "send an email",
    mark: "@",
    tone: "contact-lime",
  },
  {
    href: profile.linkedin,
    label: "LinkedIn",
    display: "connect on LinkedIn",
    mark: "in",
    tone: "contact-pink",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-watermark" aria-hidden="true">
          <span>HIHIHIHI</span>
          <span>BUILDTHEFUTURE</span>
        </div>
        <div className="hero-sticker contact-sticker-cloud" aria-hidden="true">
          ☁
        </div>
        <div className="hero-sticker contact-sticker-bolt" aria-hidden="true">
          ⚡
        </div>
        <div className="contact-content">
          <p className="section-kicker kicker-light">Available for opportunities</p>
          <h1>
            Let&apos;s build
            <br />
            the <span>future.</span>
          </h1>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <p className="contact-intro">
            I&apos;m exploring Salesforce Admin and Developer
            Intern/Trainee opportunities. Let&apos;s talk about what we can
            build together.
          </p>
          <Link className="button button-white" href="/#business-card">
            flip my LinkedIn card <span aria-hidden="true">↗</span>
          </Link>
          <div className="contact-grid">
            {contactLinks.map((item) => (
              <a
                className={`contact-card ${item.tone}`}
                href={item.href}
                key={item.label}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                target={item.href.startsWith("http") ? "_blank" : undefined}
              >
                <span className="contact-card-mark" aria-hidden="true">
                  {item.mark}
                </span>
                <span className="contact-card-label">{item.label}</span>
                <span className="contact-card-link">{item.display} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="contact-marquee" aria-label="Looking forward to connecting">
        <span>
          open for collaboration <b>✦</b> let&apos;s talk Salesforce <b>✦</b>{" "}
          curious by nature <b>✦</b> always building <b>✦</b>
        </span>
      </div>
    </main>
  );
}
