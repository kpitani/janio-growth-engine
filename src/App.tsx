import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import OperationsTeams from "./pages/solutions/OperationsTeams";
import ProcurementTeams from "./pages/solutions/ProcurementTeams";
import SupplyChainLeaders from "./pages/solutions/SupplyChainLeaders";
import FinanceTeams from "./pages/solutions/FinanceTeams";
import LogisticsAsAService from "./pages/services/LogisticsAsAService";
import TransportationProcurement from "./pages/services/TransportationProcurement";
import ControlTower from "./pages/services/ControlTower";
import InvoiceAudit from "./pages/services/InvoiceAudit";
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
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
