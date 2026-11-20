import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Salesforce projects by Devansh Mishra, including recruitment management, project management, Salesforce + Slack integration, and an ongoing Content Cloud project.",
};

const symbols = ["✦", "▧", "☁", "▤"];

export default function WorkPage() {
  return (
    <main className="inner-page">
      <header className="page-heading">
        <div className="page-watermark" aria-hidden="true">
          BUILDER
        </div>
        <div className="page-heading-inner">
          <div>
            <p className="section-kicker">From the Trailblazer workbench</p>
            <h1 className="section-title">
              Selected
              <br />
              <span>solutions.</span>
            </h1>
          </div>
          <p className="page-heading-aside">
            Learning by building practical Salesforce solutions for real
            business workflows.
          </p>
        </div>
      </header>

      <section className="work-projects section-pad">
        <div className="work-project-grid">
          {profile.projects.map((project, index) => (
            <article
              className={`work-project project-${project.color} work-project-${index + 1}`}
              key={project.number}
            >
              <div className="work-project-visual" aria-hidden="true">
                <span>{symbols[index]}</span>
              </div>
              <span className="project-number">{project.number}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="work-disclaimer">
          These are independent learning projects and explorations.
        </p>
      </section>

      <div className="skills-marquee" aria-label="Technologies and skills">
        <div className="skills-marquee-track">
          {[0, 1].map((repeat) => (
            <span key={repeat}>
              {profile.skills.map((skill) => (
                <span className="skills-marquee-item" key={`${repeat}-${skill}`}>
                  {skill} <b aria-hidden="true">✦</b>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="work-cta">
        <p className="section-kicker kicker-light">Ready to collaborate?</p>
        <h2 className="section-title section-title-light">
          Need a
          <br />
          <span>cloud learner?</span>
        </h2>
        <Link className="button button-white" href="/contact">
          start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
