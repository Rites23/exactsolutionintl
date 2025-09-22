import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' }
  ];

  const services = [
    { name: 'Custom Software Development', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile App Development', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' }
  ];

  const products = [
    { name: 'Hotel Management System', href: '#products' },
    { name: 'Restaurant Management', href: '#products' },
    { name: 'E-commerce Platform', href: '#products' },
    { name: 'Healthcare Management', href: '#products' }
  ];

  const handleLinkClick = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">E</span>
              </div>
              <span className="font-bold text-lg">Exact Solution International</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed text-sm">
              Leading software development company established in 2006. We provide quality service 
              using cutting edge technology, clean design and user friendly interface.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleLinkClick('#portfolio')}
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors cursor-pointer"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('#contact')}
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(service.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <div>
                  <div className="text-sm text-primary-foreground/80">info@exactsolutionintl.com</div>
                  <div className="text-xs text-primary-foreground/60">support@exactsolutionintl.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <div>
                  <div className="text-sm text-primary-foreground/80">+1 (555) 123-4567</div>
                  <div className="text-xs text-primary-foreground/60">+1 (555) 987-6543</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <div>
                  <div className="text-sm text-primary-foreground/80">123 Business District</div>
                  <div className="text-xs text-primary-foreground/60">International City, IC 12345</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
              © {currentYear} Exact Solution International. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;