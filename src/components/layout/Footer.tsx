import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-neutral-900">Eseentia</h4>
            <p className="text-neutral-600 leading-relaxed">
              Providing premium quality, sustainable wholefood products since 2010.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:scale-110 transform" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:scale-110 transform" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 hover:scale-110 transform" 
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-neutral-900">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/products" 
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=tablets" 
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Spirulina Tablets
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=powder" 
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Spirulina Powder
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=capsules" 
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Spirulina Capsules
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-neutral-900">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/sustainability" 
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-bold text-neutral-900">Stay Updated</h4>
            <p className="text-neutral-600 leading-relaxed">
              Subscribe to our newsletter for the latest products and offers.
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-neutral-300 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-4 py-2 rounded-r-lg hover:bg-primary-700 transition-colors duration-200 transform hover:scale-105"
                  aria-label="Subscribe"
                >
                  <Mail size={20} />
                </button>
              </div>
              <p className="text-xs text-neutral-500">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-sm">
              &copy; {currentYear} Eseentia. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/privacy" 
                className="text-neutral-500 text-sm hover:text-primary-600 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-neutral-500 text-sm hover:text-primary-600 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                to="/shipping" 
                className="text-neutral-500 text-sm hover:text-primary-600 transition-colors duration-200"
              >
                Shipping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;