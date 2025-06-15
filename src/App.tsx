
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import BeneficiaryPortal from "./pages/BeneficiaryPortal";
import InventoryManagement from "./pages/InventoryManagement";
import ProfileSettings from "./pages/ProfileSettings";
import Notifications from "./pages/Notifications";
import ApplicationReview from "./pages/ApplicationReview";
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/beneficiary-portal" element={<BeneficiaryPortal />} />
          <Route path="/inventory-management" element={<InventoryManagement />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/application-review/:applicationId" element={<ApplicationReview />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
