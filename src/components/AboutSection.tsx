import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';
import aboutImage from '@/assets/about-team.jpg';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: '1600+', label: 'Happy Clients' },
    { icon: Globe, value: '15+', label: 'Years Experience' },
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: CheckCircle, value: '99%', label: 'Success Rate' }
  ];

  const features = [
    'Cutting-edge technology solutions',
    'Clean design and user-friendly interfaces',
    'Robust, secure, and scalable applications',
    'Agile development process',
    'Highly competent engineering team',
    'Proven track record since 2006'
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Welcome to Exact Solution International
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Exact Solution International is a leading software development company established in 2006.
            We provide quality service using cutting edge technology, clean design and user friendly interface.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img 
              src={aboutImage} 
              alt="Our professional team" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 rounded-2xl"></div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              We are committed to deliver high-end software solutions
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team consists of highly skilled professionals who are passionate about creating 
              innovative solutions that drive business growth. We specialize in developing robust, 
              secure, simple and highly scalable applications within precise deadlines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center card-hover border-0 bg-white/50 backdrop-blur-sm">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;