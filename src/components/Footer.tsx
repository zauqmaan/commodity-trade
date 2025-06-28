import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Instagram,
  ArrowUp,
  Wheat
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    products: [
      { name: "Premium Rice", path: "/products/rice" },
      { name: "Sugar", path: "/products/sugar" },
      { name: "Cooking Oil", path: "/products/oil" },
      { name: "Wheat", path: "/products/wheat" },
      { name: "Private Label", path: "/products" }
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/about" },
      { name: "Certifications", path: "/about" },
      { name: "Gallery", path: "/gallery" },
      { name: "Testimonials", path: "/testimonials" }
    ],
    support: [
      { name: "Contact Us", path: "/contact" },
      { name: "Request Quote", path: "/contact" },
      { name: "Product Inquiry", path: "/contact" },
      { name: "Partnership", path: "/contact" },
      { name: "Export Services", path: "/contact" }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                  <Wheat className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AMEGT</h3>
                  <p className="text-sm text-gray-400">Dubai</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Africa & Middle East General Trading - Your trusted partner for premium agro-commodities with over 20 years of excellence in global trading.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-green-400" />
                  <span className="text-sm">+971 4 XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-green-400" />
                  <span className="text-sm">info@amegtdubai.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-green-400" />
                  <span className="text-sm">Business Bay, Dubai, UAE</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((product, index) => (
                  <li key={index}>
                    <Link to={product.path} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.support.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © 2024 AMEGT Dubai. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Export Terms
                </a>
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;