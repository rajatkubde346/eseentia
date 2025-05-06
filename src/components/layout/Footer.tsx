import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 pt-16 pb-8 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-neutral-900">Seven Hills</h4>
            <p className="text-neutral-600 mb-4">
              Providing premium quality, sustainable wholefood products since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-neutral-600 hover:text-primary-600" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-neutral-600 hover:text-primary-600" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-neutral-600 hover:text-primary-600" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-neutral-900">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-neutral-600 hover:text-primary-600">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=tablets" className="text-neutral-600 hover:text-primary-600">
                  Spirulina Tablets
                </Link>
              </li>
              <li>
                <Link to="/products?category=powder" className="text-neutral-600 hover:text-primary-600">
                  Spirulina Powder
                </Link>
              </li>
              <li>
                <Link to="/products?category=capsules" className="text-neutral-600 hover:text-primary-600">
                  Spirulina Capsules
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-neutral-900">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-neutral-600 hover:text-primary-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-neutral-600 hover:text-primary-600">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-600 hover:text-primary-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 hover:text-primary-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-neutral-900">Stay Updated</h4>
            <p className="text-neutral-600 mb-4">
              Subscribe to our newsletter for the latest products and offers.
            </p>
            <form className="flex flex-col space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-neutral-300 rounded-l-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700"
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm">
              &copy; {currentYear} Seven Hills Wholefoods. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-neutral-500 text-sm hover:text-primary-600">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-neutral-500 text-sm hover:text-primary-600">
                Terms of Service
              </Link>
              <Link to="/shipping" className="text-neutral-500 text-sm hover:text-primary-600">
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