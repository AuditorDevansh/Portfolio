"use client";

import { useState } from "react";

const skills = [
  "CRM & platform fundamentals",
  "Users, profiles & permissions",
  "Objects, fields & relationships",
  "Validation rules",
  "Reports & dashboards",
  "Flow & automation concepts"
];

const certifications = [
  "Microsoft Azure Fundamentals — AZ-900",
  "Salesforce Trailhead — Administration & Developer Learning",
  "Cloud Computing Fundamentals",
  "Linux Administration Fundamentals"
];

const communities = [
  "Salesforce Trailblazer Community",
  "Salesforce Admin Community",
  "Salesforce Developer Community",
  "AWS Builder Community"
];

const capabilityModes = {
  admin: {
    label: "Admin systems",
    title: "A reliable Salesforce foundation.",
    description: "I can help structure the platform behind the work: users, profiles, permissions, objects, relationships, validation and clean data practices.",
    items: ["Objects & relationships", "Security & access", "Data quality"]
  },
  build: {
    label: "Custom builds",
    title: "A focused app for the actual requirement.",
    description: "I turn a workflow into a practical custom application with a clear data model, usable navigation, page layouts and room to grow.",
    items: ["Custom applications", "Flows & automation", "Salesforce development"]
  },
  insight: {
    label: "Decision support",
    title: "Visibility that helps teams act.",
    description: "I can shape reports and dashboards around the questions a team needs to answer, moving data from storage toward a useful next step.",
    items: ["Reports & dashboards", "Trend analysis", "Operational visibility"]
  }
} as const;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M3 13 13 3M5 3h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="m3.5 8.2 3 3L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCapability, setActiveCapability] = useState<keyof typeof capabilityModes>("admin");
  const capability = capabilityModes[activeCapability];

  return (
    <main className={darkMode ? "dark-mode" : ""}>
      <nav className="nav shell" aria-label="Main navigation">
        <a href="#" className="brand" aria-label="Devansh Mishra home">
          <span className="brand-mark">DM</span>
          <span>Devansh Mishra</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-tools">
          <button
            className="era-toggle"
            type="button"
            aria-pressed={darkMode}
            onClick={() => setDarkMode((mode) => !mode)}
          >
            <span className="toggle-orb" aria-hidden="true"><span className="toggle-sun" /><span className="toggle-moon" /></span>
            <span>{darkMode ? "Light mode" : "Dark mode"}</span>
          </button>
          <a className="nav-cta" href="mailto:auditor.devansh.in@gmail.com">
            Let&apos;s talk <ArrowIcon />
          </a>
        </div>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse" /> Open to Salesforce opportunities</p>
          <h1>Turning business needs<br /><em>into working systems.</em></h1>
          <p className="hero-intro">
            I help teams organise customer data, automate routine work and make better decisions across Salesforce, AWS and Azure — from the first requirement to a usable, secure system.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-dark">Explore my work <ArrowIcon /></a>
            <a href="mailto:auditor.devansh.in@gmail.com" className="text-link">Get in touch <span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="system-pulse">
            <span className="pulse-ring pulse-ring-one" />
            <span className="pulse-ring pulse-ring-two" />
            <span className="pulse-core">DM</span>
            <span className="pulse-label pulse-label-top">REQUIREMENT</span>
            <span className="pulse-label pulse-label-right">CONFIGURE</span>
            <span className="pulse-label pulse-label-bottom">DELIVER</span>
          </div>
          <div className="art-card">
            <div className="art-card-top"><span className="dot" /><span>PROJECT / 01</span><span>↗</span></div>
            <div className="art-line art-line-long" />
            <div className="art-line art-line-short" />
            <div className="art-grid">
              <span /><span /><span /><span /><span /><span />
            </div>
            <div className="art-footer"><span>Salesforce</span><strong>Admin</strong></div>
          </div>
          <span className="art-note note-one">curious by default</span>
          <span className="art-note note-two">✳ systems thinker</span>
        </div>
      </section>

      <section className="proof-strip">
        <div className="shell proof-inner">
          <span className="proof-label">What I can take on</span>
          <span>CRM administration</span><i /> <span>Cloud operations</span><i /> <span>Decision-ready reporting</span>
        </div>
      </section>

      <section className="signal-grid shell" aria-label="Portfolio signals">
        <div className="signal-cell signal-index"><span>01 / NEED</span><strong>Bring order<br />to customer data</strong><small>Objects / security / data management</small></div>
        <div className="signal-cell signal-highlight"><span className="signal-icon">↗</span><strong>Build for the<br />real constraint</strong><small>Offline-first AWS system · Bharat Builds Tour 2026</small></div>
        <div className="signal-cell signal-meter"><span>DELIVERABLE</span><div className="meter"><i /><i /><i /><i /><i /><i /><i /></div><strong>Reports that support decisions</strong></div>
        <div className="signal-cell signal-location"><span>PLATFORM COVERAGE</span><strong>Salesforce<br /><em>AWS / Azure</em></strong><small>Administration · configuration · learning</small></div>
      </section>

      <section id="work" className="section shell">
        <div className="section-heading">
          <div><p className="kicker">Selected work</p><h2>From requirement<br />to result.</h2></div>
          <p>Examples of how I translate a business need into a structured application, cleaner data and a clearer next action.</p>
        </div>
        <div className="project-grid">
          <article className="project-card project-dark">
            <div className="project-meta"><span>01 / 02</span><span>Trailhead project</span></div>
            <div className="project-visual recruiting-visual">
              <div className="mini-window"><div className="window-bar"><i /><i /><i /></div><div className="window-content"><b>Recruiting</b><span /><span /><span /><small>AW COMPUTING</small></div></div>
              <div className="visual-badge">Built on<br /><strong>Salesforce</strong></div>
            </div>
            <p className="project-type">Recruiting application</p>
            <h3>AW Computing Recruiting App</h3>
            <p className="project-description">When a team needs one place to manage candidates and open roles, I can shape the data model, configure the experience and make progress visible through reporting.</p>
            <div className="tag-row"><span>Custom objects</span><span>Page layouts</span><span>Sales reports</span></div>
          </article>
          <article className="project-card project-light">
            <div className="project-meta"><span>02 / 02</span><span>Practice environment</span></div>
            <div className="project-visual management-visual">
              <div className="chart-label">PROJECT HEALTH <strong>92%</strong></div>
              <div className="bars"><i /><i /><i /><i /><i /></div>
              <div className="task-list"><span>◎ Design system</span><span>✓ Data model</span><span>○ User testing</span></div>
            </div>
            <p className="project-type">Custom application</p>
            <h3>Project Management App</h3>
            <p className="project-description">When work is spread across spreadsheets, I can create a custom Salesforce app with related objects, permissions, navigation, dashboards and status reporting.</p>
            <div className="tag-row"><span>Relationships</span><span>Dashboards</span><span>Permissions</span></div>
          </article>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="shell about-grid">
          <div><p className="kicker">How I help</p><h2>Less friction.<br /><em>Better decisions.</em></h2></div>
          <div className="about-copy">
            <p className="lead">You need someone who can move between a requirement, a platform and the people who depend on it. That is the space I am building toward.</p>
            <p>I can support cloud administration across AWS, Azure and Salesforce; configure custom objects and applications; manage data and access; and turn operational data into reports and dashboards that help teams act. I am currently moving rapidly toward Salesforce development.</p>
            <div className="stat-row"><div><strong>03</strong><span>Cloud platforms<br />in scope</span></div><div><strong>04</strong><span>Active builder<br />communities</span></div><div><strong>01</strong><span>AWS offline-first<br />first commit</span></div></div>
          </div>
        </div>
      </section>

      <section className="capabilities section shell">
        <div className="section-heading"><div><p className="kicker">Capability map</p><h2>What you can<br />hand me.</h2></div><p>Cloud administration, custom Salesforce configuration and data-led visibility — connected to the requirement, not just the tool.</p></div>
        <div className="capability-switcher" aria-label="Capability focus">
          <div className="switcher-tabs" role="tablist">
            {(Object.keys(capabilityModes) as Array<keyof typeof capabilityModes>).map((mode) => (
              <button key={mode} className={activeCapability === mode ? "switcher-tab is-active" : "switcher-tab"} type="button" role="tab" aria-selected={activeCapability === mode} onClick={() => setActiveCapability(mode)}>
                <span>0{Object.keys(capabilityModes).indexOf(mode) + 1}</span>{capabilityModes[mode].label}
              </button>
            ))}
          </div>
          <div className="switcher-panel">
            <div><p className="panel-kicker">Current focus / {activeCapability}</p><h3>{capability.title}</h3><p>{capability.description}</p></div>
            <div className="panel-items">{capability.items.map((item) => <span key={item}>↗ {item}</span>)}</div>
          </div>
        </div>
        <div className="capability-grid">
          <div className="capability-column"><p className="column-label">Configure & secure</p>{skills.map((skill) => <p className="check-item" key={skill}><CheckIcon />{skill}</p>)}<p className="check-item"><CheckIcon />Data access and security</p></div>
          <div className="capability-column"><p className="column-label">Build & operate</p><p className="check-item"><CheckIcon />AWS, Azure & Salesforce administration</p><p className="check-item"><CheckIcon />Custom apps for business requirements</p><p className="check-item"><CheckIcon />C, Python & SQL foundations</p><p className="check-item"><CheckIcon />Git, GitHub & VS Code</p></div>
          <div className="cert-column"><p className="column-label">Communities & learning</p>{communities.map((community) => <p className="cert-item" key={community}>{community}</p>)}{certifications.slice(0, 2).map((certification) => <p className="cert-item" key={certification}>{certification}</p>)}</div>
        </div>
      </section>

      <section className="community-section section shell">
        <div className="section-heading"><div><p className="kicker">Community signal</p><h2>Learning in public.</h2></div><p>Good systems grow through shared practice. These are the spaces where I ask, build and contribute.</p></div>
        <div className="community-grid">
          {communities.map((community, index) => (
            <a className="community-card" href="#contact" key={community}>
              <span className="community-number">0{index + 1}</span>
              <strong>{community}</strong>
              <span className="community-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section shell">
        <p className="kicker">Have a role in mind?</p>
        <h2>Let&apos;s build what&apos;s<br /><em>next.</em></h2>
        <a className="contact-email" href="mailto:auditor.devansh.in@gmail.com">auditor.devansh.in@gmail.com <ArrowIcon /></a>
        <div className="social-links"><a href="https://www.linkedin.com/in/devanshmishra29" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a><a href="https://trailhead.salesforce.com/" target="_blank" rel="noreferrer">Trailhead <ArrowIcon /></a><a href="https://github.com/AuditorDevansh" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a></div>
      </section>

      <footer className="footer"><div className="shell footer-inner"><span>© 2026 Devansh Mishra</span><span>Designed & built with intention.</span><span>New Delhi, India ↗</span></div></footer>
    </main>
  );
}
