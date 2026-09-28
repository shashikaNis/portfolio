"use client";

import { useEffect, useState } from "react";
import { MenuIcon, MoonIcon, SunIcon } from "./icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function currentlyDark() {
  const t = document.documentElement.dataset.theme;
  return t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function Header({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => setDark(currentlyDark()), []);

  const toggleTheme = () => {
    const next = currentlyDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setDark(next === "dark");
  };

  return (
    <header>
      <nav className="container">
        <a href="#top" className="logo">
          {name}
          <span>.</span>
        </a>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="theme-li">
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>
        <button className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Open menu" aria-expanded={open}>
          <MenuIcon />
        </button>
      </nav>
    </header>
  );
}
