import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    setIsMenuOpen(false);
    navigate('/');
  };

  const handleNavigation = (sectionId: string | null) => {
    setIsMenuOpen(false);
    
    if (!sectionId) {
      goHome();
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const menuItems = [
    { name: 'Home', sectionId: null },
    { name: 'Our Services', sectionId: 'services' },
    { name: 'Why Choose Us', sectionId: 'why-choose-us' },
    { name: 'Contact Us', sectionId: 'lead-form' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <button 
              onClick={goHome} 
              className="flex items-center group hover:opacity-90 transition duration-200"
            >
              <Logo className="h-16 w-auto" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.sectionId)}
                  className="text-gray-700 hover:text-[#E8A95C] font-medium transition duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-[#E8A95C] transition duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.sectionId)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-[#E8A95C] hover:bg-gray-50 font-medium transition duration-200 rounded-lg"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}