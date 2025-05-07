import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
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

          {/* Contact Information */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-lg font-serif font-bold text-neutral-900">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-neutral-600 mt-1 flex-shrink-0" />
                <a 
                  href="tel:+919975105971" 
                  className="text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                >
                  +91 9975105971
                </a>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-neutral-600 mt-1 flex-shrink-0" />
                  <div className="text-neutral-600">
                    <p className="font-medium">Business Registered Address:</p>
                    <p>Raitown, Flat no- B3-303,</p>
                    <p>IC Chowk Hingan Road,</p>
                    <p>Nagpur - 440016</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-neutral-600 mt-1 flex-shrink-0" />
                  <div className="text-neutral-600">
                    <p className="font-medium">Office Address:</p>
                    <p>Flat No. 03, Harihar Sahanlwas,</p>
                    <p>Beside Dhandanla Infotech,</p>
                    <p>Giripeth, Nagpur - 440010</p>
                  </div>
                </div>
              </div>
            </div>
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