import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#ab817a] border-t border-primary/20 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-lg font-semibold text-black mb-4">
              Kendi Beauty Lounge & Wellness
            </h3>
            <p className="font-poppins text-sm text-gray-800">
              Enhance your wellness journey with professional care and luxurious treatments.
            </p>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-black mb-4">Quick Links</h4>
            <ul className="space-y-2 font-poppins text-sm">
              <li>
                <Link to="/" className="text-gray-800 hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-800 hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-800 hover:text-black transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-800 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-black mb-4">Contact Info</h4>
            <ul className="space-y-3 font-poppins text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                <span className="text-gray-800">Baliuag & Malolos, Bulacan</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-black flex-shrink-0" />
                <span className="text-gray-800">+63 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-black flex-shrink-0" />
                <span className="text-gray-800">info@kendiwellness.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-semibold text-black mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <Facebook className="h-5 w-5 text-black" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
              >
                <Instagram className="h-5 w-5 text-black" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-poppins text-sm text-gray-800">
              © 2025 Kendi Beauty Lounge & Wellness | All Rights Reserved
            </p>
            <div className="flex space-x-6 font-poppins text-sm">
              <Link to="/privacy" className="text-gray-800 hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-800 hover:text-black transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
