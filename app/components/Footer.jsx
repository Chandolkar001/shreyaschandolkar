
import React from 'react';
import about from "@/_data/about";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-light-blue border-t border-medium-blue py-1 text-center mt-auto">
        <div className="container mx-auto px-4">
          {/* Copyright */}
          <p className="text-blue-gray body-text text-xs leading-tight">&copy; {currentYear} {about.name}. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  