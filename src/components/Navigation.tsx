import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import janioLogo from "@/assets/janio-logo.png";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from 'lucide-react';
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const solutionsItems = [{
    title: "For Operations Teams",
    href: "/solutions/operations-teams",
    description: "Focus on growth, not logistics firefighting"
  }, {
    title: "For Procurement Teams",
    href: "/solutions/procurement-teams",
    description: "Cut freight costs by up to 15%"
  }, {
    title: "For Supply Chain Leaders",
    href: "/solutions/supply-chain-leaders",
    description: "Turn complexity into competitive advantage"
  }, {
    title: "For Finance Teams",
    href: "/solutions/finance-teams",
    description: "Recover 3-8% of logistics spend immediately"
  }];
  const servicesItems = [{
    title: "Logistics as a Service (LaaS)",
    href: "/services/logistics-as-a-service",
    description: "Complete 4PL solution for e-commerce scaling"
  }, {
    title: "Transportation Procurement",
    href: "/services/transportation-procurement",
    description: "Expert freight procurement and optimization"
  }, {
    title: "Supply Chain Control Tower",
    href: "/services/control-tower",
    description: "Real-time visibility and proactive control"
  }, {
    title: "Invoice Audit Services",
    href: "/services/invoice-audit",
    description: "Recover overcharges and billing errors"
  }];
  const useCasesItems = [{
    title: "E-commerce Scaling",
    href: "/use-cases/ecommerce-scaling",
    description: "Scale operations without logistics complexity"
  }, {
    title: "International Expansion",
    href: "/use-cases/international-expansion",
    description: "Seamless global supply chain management"
  }, {
    title: "Peak Season Management",
    href: "/use-cases/peak-season",
    description: "Handle demand spikes with confidence"
  }, {
    title: "Supply Chain Digitization",
    href: "/use-cases/digitization",
    description: "Transform manual processes with technology"
  }];
  const resourcesItems = [{
    title: "Interactive Assessments",
    href: "/resources/assessments",
    description: "Evaluate your logistics maturity"
  }, {
    title: "ROI Calculators",
    href: "/resources/calculators",
    description: "Calculate potential savings and value"
  }, {
    title: "Strategic Guides",
    href: "/resources/guides",
    description: "Comprehensive logistics playbooks"
  }, {
    title: "Blog",
    href: "/blog",
    description: "Industry insights and best practices"
  }, {
    title: "Case Studies",
    href: "/case-studies",
    description: "Real customer success stories"
  }];
  return <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300">
            
            <span className="text-xl font-bold text-primary tracking-tight">JANIO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Solutions */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                      {solutionsItems.map(item => <NavigationMenuLink asChild key={item.href}>
                          <Link to={item.href} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="text-xs leading-snug font-normal text-inherit">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>)}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                      {servicesItems.map(item => <NavigationMenuLink asChild key={item.href}>
                          <Link to={item.href} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="text-xs leading-snug text-inherit">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>)}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Use Cases */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Use Cases
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                      {useCasesItems.map(item => <NavigationMenuLink asChild key={item.href}>
                          <Link to={item.href} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="text-xs leading-snug text-inherit">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>)}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                      {resourcesItems.map(item => <NavigationMenuLink asChild key={item.href}>
                          <Link to={item.href} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground")}>
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="text-xs leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>)}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* About & Contact */}
                <NavigationMenuItem>
                  <Link to="/about" className={cn("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50", location.pathname === "/about" && "bg-accent text-accent-foreground")}>
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className={cn("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50", location.pathname === "/contact" && "bg-accent text-accent-foreground")}>
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button */}
            <Button variant="cta" size="lg" asChild>
              <Link to="/assessment">Get Assessment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link to="/solutions/operations-teams" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                For Operations Teams
              </Link>
              <Link to="/solutions/procurement-teams" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                For Procurement Teams
              </Link>
              <Link to="/services/logistics-as-a-service" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Logistics as a Service
              </Link>
              <Link to="/resources" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Resources
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <Button variant="cta" size="lg" asChild className="w-fit">
                <Link to="/assessment" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Assessment
                </Link>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;