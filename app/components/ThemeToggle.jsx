"use client"
import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isLight;
    setIsLight(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-full bg-light-blue border-2 border-primary-blue text-primary-blue hover:text-dark-blue transition-all duration-300 z-50 shadow-lg"
      aria-label="Toggle theme"
    >
      {isLight ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
}