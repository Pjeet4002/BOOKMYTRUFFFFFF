import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  user: any;
  setIsLoggedIn: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, user, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BT</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">BookMyTurf</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/turfs" 
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/turfs' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Turfs
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/about' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors duration-200 ${
                location.pathname === '/contact' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                >
                  <User className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <Link 
                to="/" 
                className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/turfs" 
                className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Turfs
              </Link>
              <Link 
                to="/about" 
                className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {isLoggedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;