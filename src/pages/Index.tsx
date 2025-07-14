import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from '@/components/Navigation';
import PersonaCard from '@/components/PersonaCard';
import HowItWorksStep from '@/components/HowItWorksStep';
import heroImage from '@/assets/hero-elegant-premium.jpg';
import dashboardImage from '@/assets/dashboard-analytics.jpg';
import { 
  Settings, 
  DollarSign, 
  Network, 
  BarChart3,
  Search,
  Lightbulb,
  Play,
  CheckCircle,
  ArrowRight,
  Users,
  Globe,
  Clock,
  Shield
} from 'lucide-react';

const Index = () => {
  const personas = [
    {
      title: "For Operations Teams",
      headline: "Focus on growth, not logistics firefighting",
      subtext: "Scalable LaaS solutions for e-commerce operations",
      href: "/solutions/operations-teams",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "For Procurement Teams", 
      headline: "Cut freight costs by up to 15%",
      subtext: "Expert transportation procurement services",
      href: "/solutions/procurement-teams",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "For Supply Chain Leaders",
      headline: "Turn complexity into competitive advantage", 
      subtext: "Real-time visibility with Control Tower platform",
      href: "/solutions/supply-chain-leaders",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "For Finance Teams",
      headline: "Recover 3-8% of logistics spend immediately",
      subtext: "Systematic invoice audit and cost recovery",
      href: "/solutions/finance-teams", 
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const steps = [
    {
      stepNumber: 1,
      title: "Assess",
      description: "We analyze your current logistics setup",
      icon: <Search className="w-6 h-6" />
    },
    {
      stepNumber: 2,
      title: "Design", 
      description: "Custom 4PL solution across all modes",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      stepNumber: 3,
      title: "Execute",
      description: "Expert team manages day-to-day operations",
      icon: <Play className="w-6 h-6" />
    },
    {
      stepNumber: 4,
      title: "Optimize",
      description: "Continuous improvement and scaling",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const metrics = [
    {
      value: "15%",
      label: "Average cost reduction",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      value: "99.5%", 
      label: "On-time delivery rate",
      icon: <Clock className="w-5 h-5" />
    },
    {
      value: "24/7",
      label: "Visibility and control",
      icon: <Globe className="w-5 h-5" />
    },
    {
      value: "$50M+",
      label: "In cost savings recovered",
      icon: <Shield className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional business workspace with modern technology"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative container mx-auto px-4 py-24 lg:py-40 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-professional">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-display leading-tight tracking-tight">
                Scale your e-commerce{' '}
                <span className="text-white font-light">without logistics complexity</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-2xl font-medium">
                Expert-managed Land, Air, Ocean & Warehousing that grows with your business
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button variant="cta" size="xl" asChild className="shadow-professional">
                  <Link to="/assessment">
                    Get Your Logistics Assessment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero" size="xl" asChild className="shadow-elegant">
                  <Link to="/how-it-works">
                    See How It Works
                  </Link>
                </Button>
              </div>
            </div>
            <div className="animate-slide-up lg:justify-self-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl" />
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-professional">
                  <img 
                    src={dashboardImage} 
                    alt="Logistics analytics dashboard showing lane analysis and performance metrics"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions by Role Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Solutions Tailored to Your Role
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're scaling operations, optimizing costs, or managing complexity, 
              we have the expertise to transform your logistics.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {personas.map((persona, index) => (
              <div key={persona.href} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PersonaCard {...persona} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven 4-step process transforms your logistics from burden to strategic advantage
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={step.stepNumber} className="animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <HowItWorksStep {...step} isLast={index === steps.length - 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & Results Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-accent mr-2" />
              <p className="text-lg font-medium text-muted-foreground">
                Trusted by 200+ e-commerce brands
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-foreground mb-4">
              Proven Results That Drive Growth
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={metric.label} className="text-center p-6 animate-slide-up hover:shadow-medium transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                      {metric.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold font-display text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-primary-foreground mb-6">
              Ready to transform your logistics?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Get a free assessment of your logistics operations and discover how much you could save
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/assessment">
                  Get Your Free Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero" size="xl" asChild>
                <Link to="/resources/guides">
                  Download Our Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;