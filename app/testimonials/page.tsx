import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Devansh Mishra's Trailblazer recognition, community involvement, and learning journey.",
};

const highlights = [
  {
    icon: "✦",
    title: "Trailhead Ranger",
    subtitle: "Salesforce learning & development",
    description:
      "Building a steady foundation across Salesforce administration, development, and Agentic AI.",
    tone: "community-lime",
  },
  {
    icon: "⚡",
    title: "Agentforce Champion",
    subtitle: "AI & automation",
    description:
      "Exploring practical ways to combine CRM workflows with Agentforce and emerging integrations.",
    tone: "community-dark",
  },
  {
    icon: "☁",
    title: "Community Volunteer",
    subtitle: "Salesforce Architect Group · Noida",
    description:
      "Supporting meetups, workshops, speakers, member engagement, and knowledge sharing.",
    tone: "community-pink",
  },
  {
    icon: "✳",
    title: "Always learning",
    subtitle: "Cloud · Python · Machine learning",
    description:
      "Certificates and learning in cloud computing, Python, machine learning, computer security, and ethical hacking.",
    tone: "community-purple",
  },
];

export default function CommunityPage() {
  return (
    <main className="inner-page community-page">
      <header className="community-heading">
        <div className="page-watermark" aria-hidden="true">
          TRAILBLAZER
        </div>
        <div className="community-heading-inner">
          <span className="hero-label brutalist-border brutalist-shadow">
            community &amp; learning
          </span>
          <h1 className="section-title">
            Building with the
            <br />
            <span>community.</span>
          </h1>
          <p>
            Recognition, collaboration, and a commitment to keep learning
            across the Salesforce ecosystem.
          </p>
        </div>
        <div className="hero-sticker community-sticker-left" aria-hidden="true">
          ✨
        </div>
        <div className="hero-sticker community-sticker-right" aria-hidden="true">
          ☁
        </div>
      </header>

      <section className="community-grid-section">
        <div className="community-grid">
          {highlights.map((item) => (
            <article className={`community-card ${item.tone}`} key={item.title}>
              <div className="community-card-icon" aria-hidden="true">
                {item.icon}
              </div>
              <p className="community-card-subtitle">{item.subtitle}</p>
              <h2>{item.title}</h2>
              <p className="community-card-description">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="community-experience">
        <div className="section-pad community-experience-inner">
          <div>
            <p className="section-kicker">A little more about the journey</p>
            <h2 className="section-title">
              Learn, share,
              <br />
              <span>build together.</span>
            </h2>
          </div>
          <div className="community-experience-list">
            {profile.experience.map((item) => (
              <article className="community-experience-row" key={item.company}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.company}</p>
                  {item.description && (
                    <p className="community-role-description">
                      {item.description}
                    </p>
                  )}
                </div>
                <span>{item.dates}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education-strip">
        <p className="section-kicker">Learning never stops</p>
        <div className="education-grid">
          <div>
            <h2>Bachelor of Computer Application</h2>
            <p>IIMT University · 2022–2025</p>
          </div>
          <div>
            <h2>Master of Computer Applications</h2>
            <p>Currently pursuing</p>
          </div>
          <div>
            <h2>Trailhead by Salesforce</h2>
            <p>Administration · Development · Agentic AI · 2026</p>
          </div>
        </div>
      </section>

      <section className="community-cta">
        <h2 className="section-title">
          Want to
          <br />
          <span>collaborate?</span>
        </h2>
        <Link className="button button-black" href="/contact">
          get in touch <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
