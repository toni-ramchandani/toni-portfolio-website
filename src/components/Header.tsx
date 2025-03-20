import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm dark:bg-gray-800">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Toni Ramchandani
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#book" className="nav-link">
              Book
            </Link>
            <Link href="#skills" className="nav-link">
              Expertise
            </Link>
            <Link href="#speaking" className="nav-link">
              Speaking
            </Link>
            <Link href="#trainings" className="nav-link">
              Trainings
            </Link>
            <Link href="#connect" className="nav-link">
              Connect
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 pb-2 md:hidden">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="#about" className="nav-link">
                About
              </Link>
              <Link href="#book" className="nav-link">
                Book
              </Link>
              <Link href="#skills" className="nav-link">
                Expertise
              </Link>
              <Link href="#speaking" className="nav-link">
                Speaking
              </Link>
              <Link href="#trainings" className="nav-link">
                Trainings
              </Link>
              <Link href="#connect" className="nav-link">
                Connect
              </Link>
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 