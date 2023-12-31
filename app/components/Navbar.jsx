"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={menuOpen ? "active" : ""}>
      <div id="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/skills" onClick={closeMenu}>Skills</Link>
        <Link href="/experience" onClick={closeMenu}>Experience</Link>
        <Link href="/projects" onClick={closeMenu}>Projects</Link>
        <Link href="/social" onClick={closeMenu}>Social</Link>
      </div>
    </nav>
  );
}
