// import { Link } from 'react-router-dom';

import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  
  ArrowUp,
  Mail,
  Phone,
} from 'lucide-react';
import logo from '../../logo.png'; // Adjust path as needed

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background-light pt-16 pb-6 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary bg-opacity-5 rounded-full"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent bg-opacity-5 rounded-full"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Logo and Intro */}
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <img
                src={logo}
                alt="SAM CREATIVE Logo"
                className="w-20 h-20 mr-2 object-contain"
              />
              <span className="text-xl font-bold tracking-wider text-text">
                SAM CREATIVE
              </span>
            </div>
            <p className="text-text-muted mb-6 max-w-xs">
              Creating digital experiences that inspire and innovate. Your
              vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/SamCreative/100064029940645/?rdid=Es8gcLQM4WROprwf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16bao9N87o%2F"
                className="w-10 h-10 rounded-full bg-background-lighter flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              
              <a
                href="https://www.instagram.com/sam.creative.animation/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
                className="w-10 h-10 rounded-full bg-background-lighter flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/samcreative-/"
                className="w-10 h-10 rounded-full bg-background-lighter flex items-center justify-center hover:bg-primary hover:text-background transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-text">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-text-muted hover:text-primary transition-colors duration-300"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-muted hover:text-primary transition-colors duration-300"
                >
                  React.js Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-muted hover:text-primary transition-colors duration-300"
                >
                  E-commerce Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-muted hover:text-primary transition-colors duration-300"
                >
                  WordPress Website
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-muted hover:text-primary transition-colors duration-300"
                >
                  SEO & Content Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-text">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-text-muted hover:text-primary transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-text-muted hover:text-primary transition-colors duration-300"
                >
                  Our Work
                </a>
              </li>
              
              <li>
                <a
                  href="#contact"
                  className="text-text-muted hover:text-primary transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-text">Contact</h4>
            <ul className="space-y-4">
              
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-3" />
                <span className="text-text-muted">+92 326 3778850</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-3" />
                <span className="text-text-muted">+92 313 8372573</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-3" />
                <span className="text-text-muted">
                  samcreativeoficial@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-background-lighter my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} SAM CREATIVE. All rights reserved.
          </p>
          {/* <div className="flex space-x-4 mt-4 md:mt-0">
  <Link
    to="/privacy-policy"
    className="text-text-muted hover:text-primary text-sm"
  >
    Privacy Policy
  </Link>
  <Link
    to="/terms-of-service"
    className="text-text-muted hover:text-primary text-sm"
  >
    Terms of Service
  </Link>
  <Link
    to="/cookie-policy"
    className="text-text-muted hover:text-primary text-sm"
  >
    Cookies
  </Link>
</div> */}
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-12 right-12 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary-light transition-all duration-300 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="text-background" />
      </button>
    </footer>
  );
};

export default Footer;
