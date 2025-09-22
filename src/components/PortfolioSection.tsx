import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ArrowRight, ExternalLink } from 'lucide-react';
import clientsImage from '@/assets/clients-partnership.jpg';

const PortfolioSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CEO',
      content: 'Exact Solution International transformed our business operations with their custom software. The team is professional, responsive, and delivers exceptional results.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612d7cc?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      company: 'Global Hotels Group',
      role: 'Operations Director',
      content: 'Their hotel management system increased our efficiency by 40%. The support team is always available and the system is incredibly robust.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Restaurant Chain Plus',
      role: 'IT Manager',
      content: 'Outstanding restaurant management solution! It streamlined our operations across all locations and the ROI was evident within months.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  const clients = [
    'TechCorp Solutions', 'Global Hotels Group', 'Restaurant Chain Plus', 
    'MediCare Systems', 'EduTech Institute', 'Retail Masters', 
    'Financial Services Co', 'Manufacturing Hub', 'Tourism Board',
    'Healthcare Network', 'Transportation Ltd', 'Energy Solutions'
  ];

  const projectStats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '1600+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Served' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Portfolio & Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are proud to be a proven and reliable partner for many companies across the globe. 
            Our track record speaks for our commitment to excellence and client satisfaction.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {projectStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Partnership */}
        <div className="mb-16">
          <Card className="overflow-hidden card-hover border-0 bg-gradient-to-r from-primary/5 to-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img 
                  src={clientsImage} 
                  alt="Client partnership" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Global Partnerships
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Exact Solution International is proud to be a proven and reliable outsourcing 
                  partner for many companies based in Japan, USA, Australia, and across the globe. 
                  We maintain long-term relationships built on trust, quality, and consistent delivery.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    🇺🇸 United States
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    🇯🇵 Japan
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    🇦🇺 Australia
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    🇪🇺 Europe
                  </span>
                </div>
                <Button className="btn-primary w-fit">
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Clients Grid */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-border/50 hover:bg-white/80 transition-all duration-300 text-center"
              >
                <div className="text-sm font-medium text-muted-foreground">
                  {client}
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;