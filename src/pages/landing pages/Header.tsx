import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/kendi-logo.png";

export const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 transition-opacity hover:opacity-80">
            <img src={logo} alt="Kendi Beauty Lounge & Wellness" className="h-12 w-12 object-contain" />
            <span className="font-playfair text-xl font-semibold text-foreground">
              Kendi Beauty Lounge & Wellness
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-poppins text-sm font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-poppins text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`font-poppins text-sm font-medium transition-colors hover:text-primary ${
                isActive("/services") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Services
            </Link>
           
            <Link
              to="/contact"
              className={`font-poppins text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="font-poppins">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="font-poppins bg-[#aa827a] shadow-elegant">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
