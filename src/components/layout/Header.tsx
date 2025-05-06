import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartSidebar from '../cart/CartSidebar';
import SearchBar from '../common/SearchBar';

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
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-primary-800">Eseentia</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-neutral-800 hover:text-primary-600 font-medium">Home</Link>
          <Link to="/products" className="text-neutral-800 hover:text-primary-600 font-medium">Products</Link>
          <Link to="/about" className="text-neutral-800 hover:text-primary-600 font-medium">About</Link>
        </nav>

        {/* Desktop Utilities */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleSearch}
            className="text-neutral-700 hover:text-primary-600 p-2"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={toggleCart} 
            className="relative text-neutral-700 hover:text-primary-600 p-2"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleSearch}
            className="text-neutral-700 hover:text-primary-600 p-2"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={toggleCart} 
            className="relative text-neutral-700 hover:text-primary-600 p-2"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button 
            onClick={toggleMenu} 
            className="text-neutral-700 hover:text-primary-600 p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-slideDown">
          <nav className="container py-4 flex flex-col">
            <Link to="/" className="py-3 text-neutral-800 hover:text-primary-600 font-medium border-b border-neutral-100">Home</Link>
            <Link to="/products" className="py-3 text-neutral-800 hover:text-primary-600 font-medium border-b border-neutral-100">Spirulina</Link>
            <Link to="/about" className="py-3 text-neutral-800 hover:text-primary-600 font-medium">About</Link>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md animate-slideDown">
          <div className="container py-4">
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