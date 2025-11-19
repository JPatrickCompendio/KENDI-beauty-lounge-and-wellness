import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero({ ctaTo = "/register", ctaText = "Book Appointment" }: { ctaTo?: string; ctaText?: string }) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Enhance Your Wellness Journey
          </h1>
          <p className="font-poppins text-xl text-muted-foreground mb-8">
            Experience the perfect blend of beauty, wellness, and professional care at Kendi Beauty Lounge & Wellness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={ctaTo}>
              <Button size="lg" className="font-poppins text-lg bg-[#ab817a] shadow-gold hover:shadow-elegant transition-all">
                {ctaText}
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="font-poppins text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
