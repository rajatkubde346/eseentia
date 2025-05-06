import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartSidebar from '../cart/CartSidebar';
import SearchBar from '../common/SearchBar';
import logo from '../../images/eseentia logo-1.png'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems, toggleCart, isCartOpen } = useCart();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 transition-all duration-300 group-hover:scale-105">
              <img 
                src={logo}
                alt="Eseentia Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* <div className="hidden sm:flex flex-col">
              <span className="font-serif text-xl font-bold text-primary-800 leading-none">Eseentia</span>
              <span className="text-xs text-neutral-500 mt-0.5">Natural Wellness</span>
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </Link>
            <Link 
              to="/products" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 hover:after:w-full after:transition-all after:duration-300"
            >
              Products
            </Link>
            <Link 
              to="/" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 hover:after:w-full after:transition-all after:duration-300"
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Utilities */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={toggleSearch}
              className="text-neutral-700 hover:text-primary-600 p-2 transition-all duration-200 hover:bg-neutral-100 rounded-full hover:scale-110"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              to="/account"
              className="text-neutral-700 hover:text-primary-600 p-2 transition-all duration-200 hover:bg-neutral-100 rounded-full hover:scale-110"
              aria-label="Account"
            >
              <User size={20} />
            </Link>
            <button 
              onClick={toggleCart} 
              className="relative text-neutral-700 hover:text-primary-600 p-2 transition-all duration-200 hover:bg-neutral-100 rounded-full hover:scale-110"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform scale-100 transition-transform duration-200 hover:scale-110">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              onClick={toggleSearch}
              className="text-neutral-700 hover:text-primary-600 p-2 transition-all duration-200 hover:scale-110"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              onClick={toggleCart} 
              className="relative text-neutral-700 hover:text-primary-600 p-2 transition-all duration-200 hover:scale-110"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              onClick={toggleMenu} 
              className="text-neutral-700 hover:text-primary-600 p-2 transition-all duration-200 hover:scale-110"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              to="/" 
              className="block py-3 text-neutral-800 hover:text-primary-600 font-medium border-b border-neutral-100 transition-all duration-200 hover:translate-x-2"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block py-3 text-neutral-800 hover:text-primary-600 font-medium border-b border-neutral-100 transition-all duration-200 hover:translate-x-2"
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="block py-3 text-neutral-800 hover:text-primary-600 font-medium border-b border-neutral-100 transition-all duration-200 hover:translate-x-2"
            >
              About
            </Link>
            <Link 
              to="/account" 
              className="block py-3 text-neutral-800 hover:text-primary-600 font-medium transition-all duration-200 hover:translate-x-2"
            >
              My Account
            </Link>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <SearchBar onClose={toggleSearch} />
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      <CartSidebar />
    </header>
  );
};

export default Header;