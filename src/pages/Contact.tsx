import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from '@/components/Navigation';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceInterest: '',
    companySize: '',
    message: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      city: "Singapore",
      address: "1 Raffles Place, #20-61",
      postal: "Singapore 048616", 
      phone: "+65 6123 4567",
      email: "singapore@janio.com"
    },
    {
      city: "Hong Kong",
      address: "Central Plaza, 18 Harbour Road",
      postal: "Wan Chai, Hong Kong",
      phone: "+852 2123 4567", 
      email: "hongkong@janio.com"
    },
    {
      city: "Los Angeles",
      address: "633 W 5th Street, Suite 2890",
      postal: "Los Angeles, CA 90071",
      phone: "+1 (213) 123-4567",
      email: "usa@janio.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold font-display mb-6 animate-fade-in">
              Let's Transform Your Logistics Together
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up">
              Ready to scale without complexity? Get a free assessment and discover 
              how Janio can optimize your supply chain operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="p-8 shadow-medium">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-display text-foreground">
                    Get Your Free Logistics Assessment
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your business and we'll provide personalized recommendations.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <Select onValueChange={(value) => handleInputChange('serviceInterest', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="laas">Logistics as a Service</SelectItem>
                            <SelectItem value="procurement">Transportation Procurement</SelectItem>
                            <SelectItem value="control-tower">Supply Chain Control Tower</SelectItem>
                            <SelectItem value="audit">Invoice Audit Services</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                            <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-size">Company Size</Label>
                        <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="startup">Startup (1-50 employees)</SelectItem>
                            <SelectItem value="growth">Growth Stage (51-200 employees)</SelectItem>
                            <SelectItem value="midmarket">Mid-Market (201-1000 employees)</SelectItem>
                            <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your logistics challenges</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Describe your current logistics setup, challenges, and goals..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Get My Assessment
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              
              {/* Office Locations */}
              <div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Office Locations
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={office.city} className="p-6 hover:shadow-medium transition-all duration-300">
                      <CardContent className="pt-0">
                        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                          <MapPin className="w-5 h-5 text-accent mr-2" />
                          {office.city}
                        </h4>
                        <div className="space-y-2 text-muted-foreground">
                          <p>{office.address}</p>
                          <p>{office.postal}</p>
                          <div className="flex items-center pt-2">
                            <Phone className="w-4 h-4 text-accent mr-2" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 text-accent mr-2" />
                            <span>{office.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-display text-foreground flex items-center">
                    <Clock className="w-5 h-5 text-accent mr-2" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm">
                        <strong>Emergency Support:</strong> 24/7 for existing clients
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Promise */}
              <Card className="p-6 bg-gradient-subtle border-l-4 border-l-accent">
                <CardContent>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Our Response Promise
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>✓ Response within 2 hours during business hours</p>
                    <p>✓ Free assessment within 48 hours</p>
                    <p>✓ Custom proposal within 5 business days</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;