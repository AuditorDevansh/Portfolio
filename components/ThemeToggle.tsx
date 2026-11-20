"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme: Theme = savedTheme === "light" ? "light" : "dark";

    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  }

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      className="theme-toggle"
      onClick={toggleTheme}
      title={`Switch to ${nextTheme} mode`}
      type="button"
    >
      <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
      <span className="theme-toggle-label">{nextTheme}</span>
    </button>
  );
}
