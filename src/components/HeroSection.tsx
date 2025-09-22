import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Smartphone, Cloud } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-section opacity-90"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            International Leading
            <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Software Development
            </span>
            Company
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            We provide quality service using cutting edge technology, clean design and user friendly interface. 
            Committed to deliver high-end software solutions that are robust, secure, simple and highly scalable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => scrollToSection('services')}
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => scrollToSection('portfolio')}
            >
              View Portfolio
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <Code className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
              <p className="text-white/80 text-sm">Tailored software solutions for your business needs</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <Smartphone className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Mobile Applications</h3>
              <p className="text-white/80 text-sm">Native and cross-platform mobile solutions</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <Cloud className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-white/80 text-sm">Scalable cloud infrastructure and services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => scrollToSection('about')}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;