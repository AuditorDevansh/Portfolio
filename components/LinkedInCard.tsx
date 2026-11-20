"use client";

import Image from "next/image";
import { useState, type PointerEvent } from "react";
import { profile } from "@/lib/profile";

export default function LinkedInCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    event.currentTarget.style.setProperty(
      "--tilt-x",
      `${(0.5 - y) * 13}deg`,
    );
    event.currentTarget.style.setProperty("--tilt-y", `${(x - 0.5) * 17}deg`);
  }

  function resetPointer(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.removeProperty("--tilt-x");
    event.currentTarget.style.removeProperty("--tilt-y");
  }

  return (
    <div
      className={`linkedin-card-stage${isFlipped ? " is-flipped" : ""}`}
      onPointerLeave={resetPointer}
      onPointerMove={handlePointerMove}
    >
      <div className="linkedin-card">
        <article
          aria-hidden={isFlipped}
          className="linkedin-card-face linkedin-card-front"
        >
          <div className="card-rays" aria-hidden="true" />
          <div className="linkedin-card-heading">
            <span className="linkedin-logo">in</span>
            <span>Trailblazer / 01</span>
          </div>
          <div className="linkedin-card-body">
            <div className="linkedin-card-copy">
              <p>Salesforce Admin &amp; Developer</p>
              <h2>
                Devansh
                <br />
                Mishra
              </h2>
              <span>Agentforce Champion · Trailhead Ranger</span>
            </div>
            <div className="linkedin-portrait-sticker">
              <Image
                alt="Portrait of Devansh Mishra"
                height={320}
                src="/images/devansh-portrait.png"
                width={320}
              />
            </div>
          </div>
          <div className="linkedin-card-footer">
            <span>{profile.location}</span>
            <span>SALESFORCE × AI</span>
          </div>
        </article>

        <article
          aria-hidden={!isFlipped}
          aria-label="LinkedIn QR card"
          className="linkedin-card-face linkedin-card-back"
          inert={!isFlipped}
        >
          <div>
            <span className="linkedin-back-kicker">LET&apos;S CONNECT</span>
            <h2>Find me on LinkedIn.</h2>
            <a href={profile.linkedin} rel="noreferrer" target="_blank">
              linkedin.com/in/devanshmishra29 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a
            aria-label="Open Devansh Mishra's LinkedIn profile"
            className="linkedin-qr"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt="LinkedIn QR code from Devansh's business card"
              height={256}
              src="/images/linkedin-qr.png"
              width={256}
            />
            <span>SCAN TO CONNECT</span>
          </a>
        </article>
      </div>
      <button
        aria-pressed={isFlipped}
        className="linkedin-card-flip"
        onClick={() => setIsFlipped((flipped) => !flipped)}
        type="button"
      >
        <span aria-hidden="true">↻</span>
        {isFlipped ? "show the front" : "flip to scan"}
      </button>
    </div>
  );
}
