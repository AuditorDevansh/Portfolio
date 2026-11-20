import Image from "next/image";
import Link from "next/link";
import LinkedInCard from "@/components/LinkedInCard";
import { profile } from "@/lib/profile";

const highlights = [
  { value: "Ranger", label: "Trailhead rank", color: "highlight-green" },
  {
    value: "Agentforce",
    label: "Champion",
    color: "highlight-pink",
  },
  { value: "Community", label: "Volunteer", color: "highlight-purple" },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero" id="home">
        <div className="hero-watermark" aria-hidden="true">
          <span>AGENTFORCE</span>
          <span>TRAILBLAZER</span>
        </div>
        <div className="hero-sticker hero-salesforce" aria-hidden="true">
          ☁
        </div>
        <div className="hero-sticker hero-available">
          <span className="available-dot" />
          available for opportunities
        </div>
        <div className="hero-sticker hero-photo-sticker">
          <Image
            alt="Portrait of Devansh Mishra"
            height={180}
            priority
            src="/images/devansh-portrait.png"
            width={180}
          />
          <span>trailblazer</span>
        </div>
        <div className="hero-sticker hero-lightning" aria-hidden="true">
          ⚡
        </div>

        <div className="hero-copy">
          <span className="hero-label brutalist-border brutalist-shadow">
            <span aria-hidden="true">✦</span>
            Agentforce Champion + Ranger
          </span>
          <h1 className="hero-name gradient-name">
            Devansh
            <br />
            Mishra
          </h1>
          <p className="hero-description">
            Salesforce Admin &amp; Developer building practical CRM automation,
            cloud solutions, and AI-powered experiences.
          </p>
          <div className="hero-actions">
            <Link className="button button-black" href="/work">
              view work <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-green" href="/#about">
              about me <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
        <a className="scroll-cue" href="#highlights" aria-label="Scroll to highlights">
          ↓
        </a>
      </section>

      <section
        aria-label="Career and community highlights"
        className="stats-section"
        id="highlights"
      >
        <div className="stats-grid">
          {highlights.map((highlight) => (
            <div className="stat-item" key={highlight.value}>
              <p className={`stat-value ${highlight.color}`}>
                {highlight.value}
              </p>
              <p className="stat-label">{highlight.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="marquee-band" aria-label="Areas of focus">
        <div className="marquee-track">
          {[0, 1].map((repeat) => (
            <span className="marquee-group" key={repeat}>
              <span>Salesforce administration</span>
              <b aria-hidden="true">✦</b>
              <span>CRM automation</span>
              <b aria-hidden="true">✦</b>
              <span>Agentforce</span>
              <b aria-hidden="true">✦</b>
              <span>Cloud solutions</span>
              <b aria-hidden="true">✦</b>
              <span>community building</span>
              <b aria-hidden="true">✦</b>
            </span>
          ))}
        </div>
      </div>

      <section className="card-feature" id="business-card">
        <div className="card-feature-inner">
          <div className="card-feature-copy">
            <p className="section-kicker kicker-green">A digital hello</p>
            <h2 className="section-title section-title-light">
              My business card,
              <br />
              <span>in 3D.</span>
            </h2>
            <p>
              Take a closer look, flip it over, and scan through to my LinkedIn
              profile.
            </p>
            <div className="card-feature-note">
              <span className="note-star">✳</span>
              <span>Designed from my Trailblazer card</span>
            </div>
          </div>
          <LinkedInCard />
        </div>
      </section>

      <section className="selected-work section-pad" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Selected projects</p>
            <h2 className="section-title">
              Building through
              <br />
              <span>hands-on work.</span>
            </h2>
          </div>
          <p className="section-intro">
            Salesforce projects exploring automation, business workflows, and
            integrations.
          </p>
        </div>

        <div className="home-project-grid">
          {profile.projects.map((project, index) => (
            <article
              className={`home-project-card project-${project.color} project-home-${index + 1}`}
              key={project.number}
            >
              <div className="project-icon" aria-hidden="true">
                {index === 0
                  ? "↗"
                  : index === 1
                    ? "▧"
                    : index === 2
                      ? "☁"
                      : "▤"}
              </div>
              <span className="project-number">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="section-action">
          <Link className="button button-outline" href="/work">
            explore all projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="about-bridge" id="about">
        <div className="about-bridge-inner">
          <p className="section-kicker">A little about me</p>
          <h2 className="section-title">
            Breaking the
            <br />
            <span>cloud barrier.</span>
          </h2>
          <p className="about-summary">{profile.summary}</p>
          <div className="about-facts">
            <div>
              <span className="fact-marker">01</span>
              <strong>Computer applications</strong>
              <p>
                BCA, IIMT University · 2022–2025. MCA, currently in progress.
              </p>
            </div>
            <div>
              <span className="fact-marker">02</span>
              <strong>Driven by automation</strong>
              <p>Exploring Salesforce, Agentforce, and MCP integrations.</p>
            </div>
            <div>
              <span className="fact-marker">03</span>
              <strong>Active in community</strong>
              <p>Volunteer with Salesforce Architect Group in Noida.</p>
            </div>
          </div>
          <Link className="button button-green" href="/testimonials">
            community highlights <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="home-experience section-pad" id="experience">
        <div className="section-heading">
          <div>
            <p className="section-kicker">The journey so far</p>
            <h2 className="section-title">
              Learning by
              <br />
              <span>doing.</span>
            </h2>
          </div>
          <Link className="text-link" href="/contact">
            get in touch <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="experience-list">
          {profile.experience.map((item, index) => (
            <article className="experience-row" key={item.company}>
              <span className="experience-number">0{index + 1}</span>
              <div className="experience-role">
                <h3>{item.title}</h3>
                <p>{item.company}</p>
              </div>
              <span className="experience-date">{item.dates}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <div className="cta-pattern" aria-hidden="true">
          ☁　⚡　✦
        </div>
        <p className="section-kicker kicker-light">Have a project in mind?</p>
        <h2>
          Let&apos;s build
          <br />
          the <span>future.</span>
        </h2>
        <Link className="button button-white" href="/contact">
          let&apos;s connect <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
