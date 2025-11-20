import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Users, FileText, BarChart3, LogOut, Menu, X } from "lucide-react";
import logo from "@/assets/kendi-logo.png";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const menuItems = [
    { icon: BarChart3, label: "Dashboard", path: "/dashboard" },
    { icon: Calendar, label: "Appointments", path: "/appointments" },
    { icon: Users, label: "Patients", path: "/patients" },
    { icon: FileText, label: "Prescriptions", path: "/prescriptions" },
    { icon: BarChart3, label: "Reports", path: "/reports" },
  ];

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex bg-background w-full">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col flex-shrink-0 fixed left-0 top-0`}
      >
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between flex-shrink-0">
          {sidebarOpen && (
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Kendi" className="h-10 w-10" />
              <span className="font-playfair font-semibold text-sidebar-foreground">Kendi</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-sidebar-foreground"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-2 overflow-hidden">
          {menuItems.map((item, idx) => (
            <Link key={item.path} to={item.path} className="block">
              <Button
                variant={isActive(item.path) ? "default" : "ghost"}
                className={`w-full justify-start font-poppins rounded-none shadow-none py-5 px-4 flex items-center border-b border-sidebar-border text-base md:text-lg mt-2
                  ${isActive(item.path)
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"}
                  ${idx === 0 ? "rounded-t-xl" : ""} ${idx === menuItems.length - 1 ? "rounded-b-xl" : ""}`}
              >
                <item.icon className={`h-6 w-6 ${sidebarOpen ? "mr-4" : ""}`} />
                {sidebarOpen && <span className="font-semibold">{item.label}</span>}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border flex-shrink-0">
          <Button
            variant="ghost"
            className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent font-poppins"
            onClick={handleLogout}
          >
            <LogOut className={`h-5 w-5 ${sidebarOpen ? "mr-3" : ""}`} />
            {sidebarOpen && <span className="text-base md:text-lg">Logout</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 overflow-auto ${sidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300`}>
        {children}
      </main>

      {/* Logout Confirmation Dialog */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogDescription>
              Are you sure you want to logout? You will need to sign in again to access your account.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowLogoutDialog(false)}>
              Cancel
            </Button>
            <Button onClick={confirmLogout}>
              Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
