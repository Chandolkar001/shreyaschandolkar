"use client"
import Link from "next/link";
import { useState } from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaFileAlt, FaGraduationCap } from 'react-icons/fa';
import about from "@/_data/about";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const socialLinks = [
    { icon: FaGithub, href: about.socialMedia.github, label: 'GitHub' },
    { icon: FaLinkedin, href: about.socialMedia.linkedin, label: 'LinkedIn' },
    { icon: FaGraduationCap, href: about.socialMedia.scholar, label: 'Google Scholar' },
    { icon: FaTwitter, href: about.socialMedia.twitter, label: 'Twitter' },
    { icon: FaFileAlt, href: about.socialMedia.resume, label: 'Resume' }
  ];

  return (
    <>
      <nav className={menuOpen ? "active" : ""}>
        {/* Mobile hamburger menu - hidden on desktop */}
        <div id="menu-toggle" className="lg:hidden" onClick={toggleMenu}>
          ☰
        </div>
        
        {/* Desktop Navigation Links - Only visible on large screens */}
        <div className="hidden lg:flex items-center space-x-10 flex-grow">
          <Link href="/" className="nav-link">About</Link>
          <Link href="/experience" className="nav-link">Experience</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
        </div>

        {/* Social Links - Right Side Desktop */}
        <div className="social-links hidden lg:flex items-center space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-gray hover:text-primary-blue transition-colors duration-200 p-1.5 hover:bg-light-blue rounded-lg"
              title={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-content">
          <div className="mobile-nav-links">
            <Link href="/" onClick={closeMenu}>About</Link>
            <Link href="/experience" onClick={closeMenu}>Experience</Link>
            <Link href="/projects" onClick={closeMenu}>Projects</Link>
          </div>
          
          {/* Social Links in Mobile Sidebar */}
          <div className="mobile-social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-gray hover:text-primary-blue transition-colors duration-200 p-2"
                title={social.label}
                onClick={closeMenu}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {menuOpen && <div className="mobile-sidebar-overlay" onClick={closeMenu}></div>}
    </>
  );
}
