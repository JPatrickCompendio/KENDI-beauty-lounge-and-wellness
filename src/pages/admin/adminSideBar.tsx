import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  Sparkles,
  CreditCard,
  BarChart3,
  MessageSquare,
  Settings,
  Package,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/pages/Dashboard" },
  { icon: Users, label: "Clients", path: "/pages/Clients" },
  { icon: Stethoscope, label: "Doctors & Staff", path: "/pages/Staff" },
  { icon: Sparkles, label: "Services", path: "/pages/Services" },
  { icon: CreditCard, label: "Payments", path: "/pages/Payments" },
  { icon: BarChart3, label: "Reports", path: "/pages/Reports" },
  { icon: MessageSquare, label: "Feedback", path: "/pages/Feedback" },
  { icon: Package, label: "Inventory", path: "/pages/Inventory" },
  { icon: Settings, label: "Settings", path: "/pages/Settings" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-card border-r border-border shadow-elegant z-50 flex flex-col transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6 border-b border-border">
          <h1 className="text-3xl font-heading font-bold text-primary">KENDI</h1>
          <p className="text-sm text-muted-foreground mt-1">Beauty Lounge & Wellness</p>
          <button
            className="lg:hidden absolute right-3 top-3 rounded-md p-2 text-foreground hover:bg-accent"
            aria-label="Close sidebar"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <Button
            variant="outline"
            className="w-full justify-start gap-3"
            onClick={() => setShowLogout(true)}
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </Button>
        </div>
      </aside>

      {showLogout && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-card p-8 rounded-2xl shadow-gold max-w-md w-full mx-4 border border-primary/20">
            <h3 className="text-2xl font-heading font-semibold mb-4">Confirm Logout</h3>
            <p className="text-muted-foreground mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={() => setShowLogout(false)}>
                Cancel
              </Button>
              <Button onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
