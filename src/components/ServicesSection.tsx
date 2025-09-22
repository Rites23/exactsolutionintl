import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Shield,
  Palette,
  Settings,
  ArrowRight
} from 'lucide-react';
import servicesImage from '@/assets/services-illustration.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your unique business requirements and objectives.'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies and frameworks.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Robust database design, optimization, and management for efficient data storage and retrieval.'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure, migration services, and cloud-based application development.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure data integrity.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.'
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration of various systems and applications to improve business efficiency.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We deliver quality service through agile software development process, cutting edge technologies 
            and highly competent engineers.
          </p>
        </div>

        {/* Featured Service */}
        <div className="mb-16">
          <Card className="overflow-hidden card-hover border-0 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Enterprise Software Solutions
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We specialize in developing comprehensive enterprise solutions that streamline 
                  business processes, improve efficiency, and drive growth. Our solutions are 
                  scalable, secure, and designed to evolve with your business needs.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Enterprise Resource Planning
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Customer Relationship Management
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Business Intelligence
                  </span>
                </div>
                <Button className="btn-primary w-fit">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="h-64 lg:h-auto">
                <img 
                  src={servicesImage} 
                  alt="Our services illustration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 card-hover border-0 bg-white/50 backdrop-blur-sm h-full">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our expert team can help you achieve your technology goals 
              and drive your business forward with innovative solutions.
            </p>
            <Button className="btn-primary text-lg px-8 py-3">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;