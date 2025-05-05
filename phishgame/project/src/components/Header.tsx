import React, { useState } from 'react';
import { Shield, Menu, X, Home, CheckSquare, Mail } from 'lucide-react';
import { useGameContext } from '../context/GameContext';

interface HeaderProps {
  onNavigate: (path: string) => void;
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPath }) => {
  const { gameState } = useGameContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const isHomePage = currentPath === 'home';

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => handleNavigation('home')} 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-90 transition-opacity"
            aria-label="Go to Home Page"
          >
            <Shield className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Phishing Defender</h1>
          </button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded hover:bg-blue-700 transition"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => handleNavigation('home')} 
              className={`px-3 py-2 rounded transition flex items-center ${currentPath === 'home' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            >
              <Home className="h-4 w-4 mr-1" />
              Home
            </button>
            <button 
              onClick={() => handleNavigation('inbox')} 
              className={`px-3 py-2 rounded transition flex items-center ${currentPath === 'inbox' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            >
              <Mail className="h-4 w-4 mr-1" />
              Inbox
            </button>
            <button 
              onClick={() => handleNavigation('tutorial')} 
              className={`px-3 py-2 rounded transition ${currentPath === 'tutorial' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            >
              Tutorial
            </button>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-2">
            <button 
              onClick={() => handleNavigation('home')} 
              className={`px-3 py-2 rounded transition flex items-center ${currentPath === 'home' ? 'bg-blue-700' : 'hover:bg-blue-700'} text-left`}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </button>
            <button 
              onClick={() => handleNavigation('inbox')} 
              className={`px-3 py-2 rounded transition flex items-center ${currentPath === 'inbox' ? 'bg-blue-700' : 'hover:bg-blue-700'} text-left`}
            >
              <Mail className="h-4 w-4 mr-2" />
              Inbox
            </button>
            <button 
              onClick={() => handleNavigation('tutorial')} 
              className={`px-3 py-2 rounded transition ${currentPath === 'tutorial' ? 'bg-blue-700' : 'hover:bg-blue-700'} text-left`}
            >
              Tutorial
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;