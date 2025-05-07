import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartSidebar from '../cart/CartSidebar';
import SearchBar from '../common/SearchBar';
import logo from '../../images/eseentia logo-1.png'

// Login Modal Component
const LoginModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  if (!isOpen) return null;

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
    setIsSignUp(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
        
        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              onClick={onClose}
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              {isForgotPassword 
                ? 'Reset your password' 
                : isSignUp 
                  ? 'Create your account' 
                  : 'Sign in to your account'
              }
            </h2>
            {isForgotPassword && (
              <p className="mt-2 text-center text-sm text-gray-600">
                Enter your email address and we'll send you a link to reset your password.
              </p>
            )}
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {isForgotPassword ? (
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="resetEmail" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="resetEmail"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Send reset link
                  </button>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleBackToLogin}
                    className="text-sm font-semibold text-primary-600 hover:text-primary-500"
                  >
                    Back to login
                  </button>
                </div>
              </form>
            ) : (
              <form className="space-y-6" action="#" method="POST">
                {isSignUp && (
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    {!isSignUp && (
                      <div className="text-sm">
                        <button
                          type="button"
                          onClick={() => setIsForgotPassword(true)}
                          className="font-semibold text-primary-600 hover:text-primary-500"
                        >
                          Forgot password?
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete={isSignUp ? "new-password" : "current-password"}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3"
                    />
                  </div>
                </div>

                {isSignUp && (
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                      Confirm Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 px-3"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    {isSignUp ? 'Sign up' : 'Sign in'}
                  </button>
                </div>
              </form>
            )}

            {!isForgotPassword && (
              <p className="mt-10 text-center text-sm text-gray-500">
                {isSignUp ? 'Already have an account?' : 'Not a member?'}{' '}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="font-semibold leading-6 text-primary-600 hover:text-primary-500"
                >
                  {isSignUp ? 'Sign in' : 'Sign up now'}
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const { totalItems, toggleCart, isCartOpen } = useCart();
  const location = useLocation();
  const submenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSubmenu = (menuName: string) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      name: 'Products',
      path: '/products',
      submenu: [
        { name: 'All Products', path: '/products' },
        { name: 'New Arrivals', path: '/products/new' },
        { name: 'Best Sellers', path: '/products/best-sellers' },
        { name: 'Categories', path: '/products/categories' },
      ]
    },
    {
      name: 'About',
      path: '/about',
      submenu: [
        { name: 'Our Story', path: '/about/story' },
        { name: 'Team', path: '/about/team' },
        { name: 'Careers', path: '/about/careers' },
      ]
    },
    {
      name: 'Support',
      path: '/support',
      submenu: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Shipping', path: '/shipping' },
        { name: 'Returns', path: '/returns' },
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 transition-all duration-300 group-hover:scale-105">
              <img 
                src={logo}
                alt="Eseentia Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" ref={submenuRef}>
            <Link 
              to="/" 
              className="text-neutral-800 hover:text-primary-600 font-medium transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleSubmenu(item.name)}
                  className="flex items-center text-neutral-800 hover:text-primary-600 font-medium transition-all duration-300 relative group"
                >
                  {item.name}
                  <ChevronDown size={16} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {/* Desktop Submenu */}
                <div className={`absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl py-3 transition-all duration-300 transform origin-top ${
                  activeSubmenu === item.name 
                    ? 'opacity-100 scale-100 translate-y-2' 
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block px-6 py-2.5 text-sm text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-all duration-200 hover:translate-x-1"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Desktop Utilities */}
          <div className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={toggleSearch}
              className="text-neutral-700 hover:text-primary-600 p-2 transition-all duration-300 hover:bg-neutral-100 rounded-full hover:scale-110"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsLoginOpen(true)}
              className="text-neutral-700 hover:text-primary-600 p-2 transition-all duration-300 hover:bg-neutral-100 rounded-full hover:scale-110"
              aria-label="Account"
            >
              <User size={20} />
            </button>
            <button 
              onClick={toggleCart} 
              className="relative text-neutral-700 hover:text-primary-600 p-2 transition-all duration-300 hover:bg-neutral-100 rounded-full hover:scale-110"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform scale-100 transition-transform duration-300 hover:scale-110">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button 
              onClick={toggleSearch}
              className="text-neutral-700 hover:text-primary-600 p-2 transition-all duration-300 hover:bg-neutral-100 rounded-full hover:scale-110"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              onClick={toggleCart} 
              className="relative text-neutral-700 hover:text-primary-600 p-2 transition-all duration-300 hover:bg-neutral-100 rounded-full hover:scale-110"
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
              className="text-neutral-700 hover:text-primary-600 p-2 transition-all duration-300 hover:bg-neutral-100 rounded-full hover:scale-110"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transform transition-all duration-300 ease-in-out">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              to="/" 
              className="block py-3 text-neutral-800 hover:text-primary-600 font-medium border-b border-neutral-100 transition-all duration-300 hover:translate-x-2 text-sm"
            >
              Home
            </Link>
            
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-neutral-100">
                <button
                  onClick={() => toggleSubmenu(item.name)}
                  className="w-full flex items-center justify-between py-3 text-neutral-800 hover:text-primary-600 font-medium transition-all duration-300 text-sm"
                >
                  {item.name}
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-300 ${
                      activeSubmenu === item.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {/* Mobile Submenu */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeSubmenu === item.name ? 'max-h-96' : 'max-h-0'
                }`}>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block pl-6 py-3 text-sm text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 transition-all duration-300 hover:translate-x-2"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <Link 
              to="/account" 
              className="block py-3 text-neutral-800 hover:text-primary-600 font-medium transition-all duration-300 hover:translate-x-2 text-sm"
            >
              My Account
            </Link>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl transform transition-all duration-300 ease-in-out">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <SearchBar onClose={toggleSearch} />
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      <CartSidebar />
      
      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
};

export default Header;