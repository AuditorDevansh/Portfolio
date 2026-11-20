"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/lib/profile";

const links = [
  { href: "/", label: "index", key: "index" },
  { href: "/work", label: "work", key: "work" },
  { href: "/#about", label: "about", key: "about" },
];

export default function NavigationPill() {
  const pathname = usePathname();
  const activeKey =
    pathname === "/work"
      ? "work"
      : pathname === "/"
        ? "index"
        : pathname === "/testimonials"
          ? "about"
          : "";

  return (
    <nav className="navigation-pill" aria-label="Main navigation">
      <div className="navigation-links">
        {links.map(({ href, label, key }) => (
          <Link
            aria-current={activeKey === key ? "page" : undefined}
            className={`navigation-link navigation-${key}${activeKey === key ? " is-active" : ""}`}
            href={href}
            key={key}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="navigation-actions">
        <Link className="navigation-cta" href={`mailto:${profile.email}`}>
          hire me
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
