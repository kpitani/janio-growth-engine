import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Ship, Globe, Zap, Shield, Clock, TrendingUp } from "lucide-react";

export default function Marketplaces() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-elegant pt-20 pb-16">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Seamless <span className="text-accent">Warehouse-to-Warehouse</span>{" "}
              Logistics Across Asia Pacific
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in delay-100">
              Stop juggling multiple freight forwarders. Janio orchestrates your complete cross-border supply chain from pickup to delivery across 8+ Asian markets through one platform, one relationship.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 animate-fade-in delay-200">
              Map Your Cross-Border Routes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            {/* Trust Bar */}
            <div className="mt-12 space-y-4 animate-fade-in delay-300">
              <p className="text-sm opacity-80">Powering Shopee • Lazada • Shein • 6,000+ Tonnes Monthly</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Complete Export/Import</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Air Freight Optimization</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">SOC2 Certified</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Awareness Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Cross-Border Logistics Complexity is Limiting Your Marketplace Growth</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Every new route requires a new freight forwarder. Every new country means new clearance procedures. Every shipment involves multiple handoffs and potential failure points. Your marketplace growth is constrained by logistics complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-destructive/20 hover:border-destructive/40 transition-colors">
                <CardHeader>
                  <Ship className="h-12 w-12 text-destructive mb-4" />
                  <CardTitle className="text-destructive text-lg">Managing a Web of Providers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Different freight forwarders for each country pair</li>
                    <li>• Inconsistent service quality across regions</li>
                    <li>• Multiple contracts and payment terms</li>
                    <li>• No single source of truth for visibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
                <CardHeader>
                  <Clock className="h-12 w-12 text-orange-500 mb-4" />
                  <CardTitle className="text-orange-500 text-lg">Operations Eating Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Export clearance procedures vary by origin</li>
                    <li>• Import requirements change frequently</li>
                    <li>• Manual coordination between teams</li>
                    <li>• Constant firefighting with customs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <CardHeader>
                  <Globe className="h-12 w-12 text-yellow-600 mb-4" />
                  <CardTitle className="text-yellow-600 text-lg">Slow Route Establishment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Months to vet freight forwarders</li>
                    <li>• Complex due diligence for clearance</li>
                    <li>• Testing per service provider</li>
                    <li>• Risk assessment per country</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-500/20 hover:border-red-500/40 transition-colors">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-red-500 mb-4" />
                  <CardTitle className="text-red-500 text-lg">Scaling Feels Impossible</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Can't predict peak season capacity</li>
                    <li>• Limited shipment visibility</li>
                    <li>• Inconsistent service levels</li>
                    <li>• Growing operational overhead</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="bg-muted/50 border-primary/20 max-w-3xl mx-auto">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">The Real Cost</h3>
                  <p className="text-lg">
                    While you're coordinating between freight forwarders and dealing with clearance issues, your competitors are launching new routes and capturing market share across Asia Pacific.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Awareness Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Cross-Border Logistics Orchestration</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Instead of managing relationships with dozens of regional freight forwarders, get complete warehouse-to-warehouse logistics through one strategic partnership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-destructive">Traditional Cross-Border</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    You coordinate between separate providers for pickup, export clearance, air freight, import clearance, and final delivery. Each handoff creates risk and delays.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Janio's 4PL Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    We orchestrate your entire cross-border supply chain through our network of 500+ vetted providers, giving you seamless operations with single-point accountability.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Ship className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Complete Service Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Warehouse pickup coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Export clearance management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Optimized air freight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Import clearance expertise</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Key Advantages</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Single point of accountability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Regulatory expertise across all markets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Scalable capacity guaranteed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Real-time visibility</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-primary">Network Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>8+ countries with local expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-modal transportation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>API integration platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Marketplace-focused features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Leading Marketplaces Across Asia</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Shopee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic">
                    "Streamlined cross-border operations across multiple Asian markets with consistent service levels and reduced complexity."
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Lazada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic">
                    "Achieved operational efficiency and cost optimization while maintaining rapid expansion across Southeast Asia."
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Shein</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic">
                    "Scaled cross-border logistics operations to support explosive growth across Asian markets with reliable service quality."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20-30%</div>
                <div className="text-sm text-muted-foreground">Faster Transit Times</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99%+</div>
                <div className="text-sm text-muted-foreground">First-time Clearance</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">6,000+</div>
                <div className="text-sm text-muted-foreground">Tonnes Monthly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Vetted Providers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Integration Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for Marketplace Operations</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">API Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>RESTful APIs for seamless platform connection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Real-time data flow with webhook support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Bulk operations for high-volume processing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Marketplace Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-vendor support across platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Automated HS code classification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Performance analytics and optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Simplify Your Cross-Border Operations?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop coordinating between multiple freight forwarders. Join Shopee, Lazada, and other leading marketplaces who've streamlined their cross-border logistics through Janio's 4PL platform.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">Get immediate access to:</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Complete warehouse-to-warehouse logistics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>20-30% faster transit times</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Single integration vs. multiple APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Expert regulatory compliance</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                Map Your Cross-Border Routes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  See Our Network in Action
                </Button>
              </div>
            </div>

            <div className="mt-12 space-y-2 text-sm opacity-80">
              <p><strong>Email:</strong> marketplace@janio.asia | <strong>Phone:</strong> +65 XXXX XXXX</p>
              <p><strong>Office:</strong> Singapore • Hong Kong • Bangkok • Jakarta</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}