import { useState } from "react";
import ArrowIcon from "./ArrowIcon.jsx";

  // komponent där jag skapar Header för sidan, och jag implementa ikon komonent och också använder useState från Reacts library

const navItems = [
  ["Våra skolor", "#schools"],
  ["Om oss", "#about"],
  ["Kontakta oss", "#contact"],
  ["Våra program", "#programs"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a className="brand" href="#" aria-label="LBS Kreativa Gymnasiet">
        <span className="brand-box">
          <img src="/lbslogosvg.svg" alt="LBS" />
        </span>

      </a>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Öppna meny"
        aria-expanded={open}
      >
        <span>[</span><span>MENY</span><span>]</span>
      </button>

      <nav className={`nav ${open ? "nav-open" : ""}`}>
        {navItems.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="#open-house" onClick={() => setOpen(false)}>
          ÖPPET HUS <ArrowIcon size="sm" />
        </a>
      </nav>
    </header>
  );
}