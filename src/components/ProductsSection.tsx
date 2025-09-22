import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Utensils, 
  ShoppingCart, 
  Hospital, 
  GraduationCap, 
  Car,
  ArrowRight,
  Star
} from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      icon: Building2,
      title: 'Hotel & Resort Management',
      description: 'Comprehensive management system for hotels and resorts with booking, inventory, and guest management.',
      features: ['Room Management', 'Booking System', 'POS Integration', 'Report Analytics'],
      popular: true
    },
    {
      icon: Utensils,
      title: 'Restaurant Management',
      description: 'Complete restaurant solution with order management, kitchen display, and payment processing.',
      features: ['Order Management', 'Kitchen Display', 'Payment Processing', 'Inventory Control'],
      popular: true
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Platform',
      description: 'Full-featured online store with inventory management, payment gateway, and analytics.',
      features: ['Product Catalog', 'Payment Gateway', 'Order Tracking', 'Customer Management'],
      popular: false
    },
    {
      icon: Hospital,
      title: 'Healthcare Management',
      description: 'Integrated healthcare system for hospitals and clinics with patient and staff management.',
      features: ['Patient Records', 'Appointment Scheduling', 'Billing System', 'Inventory Management'],
      popular: false
    },
    {
      icon: GraduationCap,
      title: 'Education Management',
      description: 'School and college management system with student, teacher, and course management.',
      features: ['Student Management', 'Grade Tracking', 'Fee Management', 'Online Classes'],
      popular: false
    },
    {
      icon: Car,
      title: 'Fleet Management',
      description: 'Vehicle fleet management system with tracking, maintenance, and driver management.',
      features: ['Vehicle Tracking', 'Maintenance Scheduling', 'Driver Management', 'Expense Tracking'],
      popular: false
    }
  ];

  return (
    <section id="products" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are leading software provider for Hotel, Resorts, Restaurant and Bar Business with more than 1600 
            clients all over the world. Our products are designed to streamline operations and boost efficiency.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className={`card-hover border-0 bg-white/80 backdrop-blur-sm relative ${
              product.popular ? 'ring-2 ring-primary' : ''
            }`}>
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </div>
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {product.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Product Highlight */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Custom Software Development
          </h3>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Need something specific for your business? We create custom software solutions tailored to your 
            unique requirements. From concept to deployment, we handle every aspect of your project with 
            precision and expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Custom Built</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Scalability</div>
            </div>
          </div>
          <Button className="btn-primary text-lg px-8 py-3">
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;