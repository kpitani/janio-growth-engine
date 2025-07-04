import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from '@/components/Navigation';
import { Calculator, FileText, BookOpen, TrendingUp, Download, Clock } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground mb-6">
              Resources to <span className="text-primary">Transform</span> Your Logistics
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Guides, tools, and insights to optimize your supply chain operations and drive strategic growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/assessment">Take Assessment</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/calculator/laas-roi">Calculate ROI</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Assessments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Interactive Assessments
              </h2>
              <p className="text-xl text-muted-foreground">
                Evaluate your logistics maturity and identify optimization opportunities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>E-commerce Logistics Maturity Assessment</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>15 minutes</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Comprehensive evaluation of your current logistics capabilities and growth readiness
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Operations efficiency analysis</li>
                    <li>• Technology assessment</li>
                    <li>• Scalability evaluation</li>
                    <li>• Cost optimization opportunities</li>
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/assessment/ecommerce-logistics-maturity">Start Assessment</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Transportation Procurement Health Check</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>10 minutes</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Evaluate your freight procurement process and identify cost reduction opportunities
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rate benchmarking analysis</li>
                    <li>• Contract optimization review</li>
                    <li>• Process efficiency evaluation</li>
                    <li>• Savings potential calculation</li>
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/assessment/transportation-procurement">Start Health Check</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                ROI Calculators
              </h2>
              <p className="text-xl text-muted-foreground">
                Calculate potential savings and value from logistics optimization
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>LaaS ROI Calculator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Calculate the potential return on investment from Logistics as a Service
                  </p>
                  <div className="text-sm font-medium text-primary">Typical ROI: 300-500%</div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/calculator/laas-roi">Calculate ROI</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Transportation Procurement ROI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Estimate savings from optimized freight procurement
                  </p>
                  <div className="text-sm font-medium text-primary">Typical Savings: 10-20%</div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/calculator/transportation-procurement-roi">Calculate Savings</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Invoice Audit ROI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Calculate potential recovery from freight invoice auditing
                  </p>
                  <div className="text-sm font-medium text-primary">Typical Recovery: 3-8%</div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/calculator/invoice-audit-roi">Calculate Recovery</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display text-foreground mb-4">
                Strategic Guides
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive logistics playbooks for strategic decision making
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Complete Guide to E-commerce Logistics Scaling</CardTitle>
                      <div className="text-sm text-muted-foreground">35 pages • PDF Download</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Step-by-step playbook for scaling e-commerce logistics from startup to enterprise
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Scaling frameworks and methodologies</li>
                    <li>• Technology selection and implementation</li>
                    <li>• Partner evaluation and management</li>
                    <li>• Performance metrics and KPIs</li>
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/guides/ecommerce-scaling">
                      <Download className="mr-2 h-4 w-4" />
                      Download Guide
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Transportation Procurement Excellence Playbook</CardTitle>
                      <div className="text-sm text-muted-foreground">28 pages • PDF Download</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Master freight procurement with proven strategies and best practices
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• RFQ process optimization</li>
                    <li>• Carrier evaluation frameworks</li>
                    <li>• Contract negotiation strategies</li>
                    <li>• Performance management systems</li>
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/guides/transportation-procurement">
                      <Download className="mr-2 h-4 w-4" />
                      Download Playbook
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Case Studies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold font-display text-foreground mb-6">
                  Latest from Our Blog
                </h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">
                        5 Signs Your E-commerce Logistics Needs a 4PL Partner
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Identify the key indicators that signal it's time to outsource your logistics operations...
                      </p>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/blog/signs-need-4pl-partner">Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">
                        Peak Season Preparation: A 90-Day Countdown Checklist
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Comprehensive preparation guide for handling holiday demand surges...
                      </p>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/blog/peak-season-preparation">Read More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link to="/blog">View All Articles</Link>
                  </Button>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold font-display text-foreground mb-6">
                  Customer Success Stories
                </h2>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">
                        Fashion Brand Scales 500% with Zero Logistics Headaches
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        How LaaS enabled rapid growth without operational complexity...
                      </p>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/case-studies/fashion-brand-scaling">Read Case Study</Link>
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">
                        Manufacturer Cuts Freight Costs 20% in 6 Months
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Strategic procurement delivers immediate and sustainable savings...
                      </p>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/case-studies/manufacturer-cost-reduction">Read Case Study</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link to="/case-studies">View All Case Studies</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-secondary-foreground mb-6">
              Ready to optimize your logistics?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-8">
              Start with a comprehensive assessment of your current operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/assessment">Take Assessment</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/contact">Get Expert Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;