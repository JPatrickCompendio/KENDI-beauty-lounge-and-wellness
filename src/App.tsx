import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landing pages/Home";
import ClientDashboard from "./pages/client/ClientDashboard";
import ClientAppointments from "./pages/client/Appointments";
import ClientServices from "./pages/client/Services";
import ClientPrescriptions from "./pages/client/Prescriptions";
import ClientProfile from "./pages/client/Profile";
import ClientAppointmentHistory from "./pages/client/AppointmentHistory";
import ClientAbout from "./pages/landing pages/About";
import ClientContact from "./pages/client/Contact";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminClients from "./pages/admin/Clients";
import AdminStaff from "./pages/admin/Staff";
import AdminServices from "./pages/admin/Services";
import AdminPayments from "./pages/admin/Payments";
import AdminReports from "./pages/admin/Reports";
import AdminFeedback from "./pages/admin/Feedback";
import AdminInventory from "./pages/admin/Inventory";
import AdminSettings from "./pages/admin/Settings";
import Login from "./pages/Login";
import Register from "./pages/landing pages/Register";
import Dashboard from "./pages/doctor/Dashboard";
import Appointments from "./pages/doctor/Appointments";
import Patients from "./pages/doctor/Patients";
import Prescriptions from "./pages/doctor/Prescriptions";
import Reports from "./pages/doctor/Reports";
import About from "./pages/landing pages/About";
import Services from "./pages/landing pages/Services";
import Contact from "./pages/landing pages/Contact";
import NotFound from "./pages/doctor/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ClientDashboard" element={<ClientDashboard />} />
          {/* Client Routes */}
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/client/appointments" element={<ClientAppointments />} />
          <Route path="/client/services" element={<ClientServices />} />
          <Route path="/client/prescriptions" element={<ClientPrescriptions />} />
          <Route path="/client/appointment-history" element={<ClientAppointmentHistory />} />
          <Route path="/client/profile" element={<ClientProfile />} />
          <Route path="/client/about" element={<ClientAbout />} />
          <Route path="/client/contact" element={<ClientContact />} />
          {/* Admin Routes */}
          <Route path="/pages/Dashboard" element={<AdminDashboard />} />
          <Route path="/pages/Clients" element={<AdminClients />} />
          <Route path="/pages/Staff" element={<AdminStaff />} />
          <Route path="/pages/Services" element={<AdminServices />} />
          <Route path="/pages/Payments" element={<AdminPayments />} />
          <Route path="/pages/Reports" element={<AdminReports />} />
          <Route path="/pages/Feedback" element={<AdminFeedback />} />
          <Route path="/pages/Inventory" element={<AdminInventory />} />
          <Route path="/pages/Settings" element={<AdminSettings />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/prescriptions" element={<Prescriptions />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
