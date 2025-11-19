import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

export const SharedFooter = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Kendi Beauty Lounge & Wellness</h3>
            <p className="text-sm text-muted-foreground">
              Enhance your wellness journey with us
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Locations</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Baliuag Branch</li>
              <li>Malolos Branch</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg text-black mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-primary hover:text-accent transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Kendi Beauty Lounge & Wellness | All Rights Reserved</p>
          <div className="mt-2 space-x-4">
            <Link to="#" className="hover:text-primary transition-smooth">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-smooth">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
