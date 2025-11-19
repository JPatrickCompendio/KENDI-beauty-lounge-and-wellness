import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import kendiLogo from "@/assets/kendi-logo.png";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";

interface SharedHeaderProps {
  navLinks?: Array<{ path: string; label: string }>;
  showLogin?: boolean;
  userRole?: 'admin' | 'doctor' | 'client' | null;
}

export const SharedHeader = ({ 
  navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ],
  showLogin = true,
  userRole = null
}: SharedHeaderProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={kendiLogo} alt="Kendi Beauty Lounge & Wellness" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-smooth ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {showLogin && !userRole && (
              <Link to="/login">
                <Button variant="default">Login</Button>
              </Link>
            )}
            {userRole && (
              <Link to="/dashboard">
                <Button variant="default">
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-smooth ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {showLogin && !userRole && (
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" className="w-full">Login</Button>
              </Link>
            )}
            {userRole && (
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" className="w-full">
                  <User className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};
