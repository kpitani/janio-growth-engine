import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resources from "./pages/Resources";
import OperationsTeams from "./pages/solutions/OperationsTeams";
import ProcurementTeams from "./pages/solutions/ProcurementTeams";
import SupplyChainLeaders from "./pages/solutions/SupplyChainLeaders";
import FinanceTeams from "./pages/solutions/FinanceTeams";
import LogisticsAsAService from "./pages/services/LogisticsAsAService";
import TransportationProcurement from "./pages/services/TransportationProcurement";
import ControlTower from "./pages/services/ControlTower";
import InvoiceAudit from "./pages/services/InvoiceAudit";
import EcommerceScaling from "./pages/use-cases/EcommerceScaling";
import InternationalExpansion from "./pages/use-cases/InternationalExpansion";
import PeakSeason from "./pages/use-cases/PeakSeason";
import Digitization from "./pages/use-cases/Digitization";
import Assessments from "./pages/resources/Assessments";
import Calculators from "./pages/resources/Calculators";
import Guides from "./pages/resources/Guides";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          
          {/* Solutions Routes */}
          <Route path="/solutions/operations-teams" element={<OperationsTeams />} />
          <Route path="/solutions/procurement-teams" element={<ProcurementTeams />} />
          <Route path="/solutions/supply-chain-leaders" element={<SupplyChainLeaders />} />
          <Route path="/solutions/finance-teams" element={<FinanceTeams />} />
          
          {/* Services Routes */}
          <Route path="/services/logistics-as-a-service" element={<LogisticsAsAService />} />
          <Route path="/services/transportation-procurement" element={<TransportationProcurement />} />
          <Route path="/services/control-tower" element={<ControlTower />} />
          <Route path="/services/invoice-audit" element={<InvoiceAudit />} />
          
          {/* Use Cases Routes */}
          <Route path="/use-cases/ecommerce-scaling" element={<EcommerceScaling />} />
          <Route path="/use-cases/international-expansion" element={<InternationalExpansion />} />
          <Route path="/use-cases/peak-season" element={<PeakSeason />} />
          <Route path="/use-cases/digitization" element={<Digitization />} />
          
          {/* Resources Routes */}
          <Route path="/resources/assessments" element={<Assessments />} />
          <Route path="/resources/calculators" element={<Calculators />} />
          <Route path="/resources/guides" element={<Guides />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
