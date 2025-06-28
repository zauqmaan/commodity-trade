import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Wheat } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className={`transition-all duration-500 ${
          isScrolled || !isHomePage 
            ? 'bg-white/95 backdrop-blur-lg shadow-xl rounded-full border border-gray-200/50' 
            : 'bg-white/10 backdrop-blur-md rounded-full border border-white/20'
        }`}>
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className={`w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                isScrolled || !isHomePage ? 'shadow-lg' : 'shadow-white/20'
              }`}>
                <Wheat className="text-white" size={24} />
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
                }`}>AMEGT</h1>
                <p className={`text-xs transition-colors duration-300 ${
                  isScrolled || !isHomePage ? 'text-gray-600' : 'text-gray-200'
                }`}>Dubai</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-all duration-300 hover:scale-105 relative group px-3 py-2 rounded-lg ${
                    isActive(item.path) 
                      ? 'text-white bg-green-600 shadow-lg' 
                      : isScrolled || !isHomePage 
                        ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                        : 'text-white hover:text-green-300 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  {!isActive(item.path) && (
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full`}></span>
                  )}
                </Link>
              ))}
              <Link 
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Request Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isScrolled || !isHomePage ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 rounded-b-2xl mt-2 animate-fade-in-up">
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 font-medium rounded-lg transition-all duration-300 hover:scale-105 ${
                      isActive(item.path) 
                        ? 'text-white bg-green-600 shadow-lg font-semibold' 
                        : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block w-full mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 text-center hover:scale-105"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request Quote
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;