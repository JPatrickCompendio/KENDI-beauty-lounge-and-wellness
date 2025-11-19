import { Header } from "@/pages/landing pages/Header";
import { Footer } from "@/pages/client/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Droplet, Wind, Heart, Zap, Star, Scissors, Eye, Smile, Target, Shield, Gem, CheckCircle2 } from "lucide-react";
import { ScrollAnimatedCard } from "@/components/ScrollAnimatedCard";

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      name: "Facial Rejuvenation",
      description: "Deep cleansing, exfoliation, and anti-aging treatments to restore your skin's natural glow",
      features: ["Deep Cleansing", "Anti-Aging Treatment", "Hydration Therapy", "LED Light Therapy"],
      duration: "60-90 minutes",
      price: "Starting at ₱2,500",
      popular: false
    },
    {
      icon: Droplet,
      name: "Gluta Drip Therapy",
      description: "IV infusion of glutathione and essential vitamins for radiant, even-toned skin",
      features: ["Glutathione 1200mg", "Vitamin C Complex", "Skin Whitening", "Antioxidant Boost"],
      duration: "45-60 minutes",
      price: "Starting at ₱3,500",
      popular: true
    },
    {
      icon: Wind,
      name: "Slimming Treatments",
      description: "Non-invasive body contouring and weight management programs",
      features: ["Fat Reduction", "Cellulite Treatment", "Skin Tightening", "Body Sculpting"],
      duration: "60-120 minutes",
      price: "Starting at ₱4,000",
      popular: false
    },
    {
      icon: Heart,
      name: "Body Contouring",
      description: "Advanced techniques to shape and tone your body for your desired look",
      features: ["Ultrasound Cavitation", "RF Body Tightening", "Cryolipolysis", "Muscle Toning"],
      duration: "90-120 minutes",
      price: "Starting at ₱5,000",
      popular: false
    },
    {
      icon: Zap,
      name: "Laser Treatments",
      description: "State-of-the-art laser technology for hair removal and skin rejuvenation",
      features: ["Hair Removal", "Pigmentation Treatment", "Scar Reduction", "Skin Resurfacing"],
      duration: "30-60 minutes",
      price: "Starting at ₱2,000",
      popular: false
    },
    {
      icon: Scissors,
      name: "Botox & Fillers",
      description: "Expert injectable treatments for wrinkle reduction and facial enhancement",
      features: ["Forehead Botox", "Chin Filler", "Lip Enhancement", "Natural Results"],
      duration: "30-45 minutes",
      price: "Starting at ₱8,000",
      popular: true
    },
    {
      icon: Eye,
      name: "BB Glow Treatment",
      description: "Semi-permanent foundation treatment for flawless, glowing complexion",
      features: ["BB Glow Facial", "Skin Brightening", "Pore Minimizing", "Long-lasting Results"],
      duration: "60-90 minutes",
      price: "Starting at ₱3,500",
      popular: false
    },
    {
      icon: Smile,
      name: "Hydra Facial",
      description: "10-in-1 deep cleansing facial with collagen mask for instant radiance",
      features: ["Deep Cleansing", "Exfoliation", "Hydration", "Collagen Mask"],
      duration: "60 minutes",
      price: "Starting at ₱1,199",
      popular: true
    },
    {
      icon: Target,
      name: "Mesolipo + RF",
      description: "Combined mesotherapy and radio frequency for targeted fat reduction",
      features: ["Face Treatment", "Arms Treatment", "Tummy Treatment", "Thigh Treatment"],
      duration: "60-90 minutes",
      price: "Starting at ₱2,500",
      popular: false
    },
    {
      icon: Shield,
      name: "Carbon Laser Facial",
      description: "Pico Carbon Laser treatment with Omega Light and whitening mask",
      features: ["Pico Carbon Laser", "Omega Light", "Whitening Mask", "Skin Rejuvenation"],
      duration: "45-60 minutes",
      price: "Starting at ₱1,399",
      popular: false
    },
    {
      icon: Gem,
      name: "7D HIFU Treatment",
      description: "High-intensity focused ultrasound for non-surgical skin lifting and tightening",
      features: ["Face Lifting", "Neck Tightening", "Body Contouring", "Non-Invasive"],
      duration: "60-90 minutes",
      price: "Starting at ₱6,000",
      popular: false
    },
    {
      icon: Star,
      name: "Premium Wellness Packages",
      description: "Comprehensive wellness programs combining multiple treatments",
      features: ["Full Body Treatment", "Facial Care", "IV Therapy", "Consultation"],
      duration: "2-3 hours",
      price: "Starting at ₱10,000",
      popular: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#ab817a]/20 via-background to-[#ba9993]/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and wellness treatments, designed to help you look and feel your absolute best
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ScrollAnimatedCard key={index} delay={index * 100} className="h-full">
                <Card 
                  className={`group relative overflow-hidden border-border shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-2 h-full flex flex-col ${
                    service.popular ? 'ring-2 ring-[#ab817a] ring-offset-2' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-[#ab817a] to-[#ba9993] text-white text-xs font-poppins font-semibold px-3 py-1 rounded-full shadow-lg">
                        Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="pt-6 p-6 flex flex-col flex-grow">
                    <div className="flex flex-col h-full">
                      {/* Icon */}
                      <div className="mb-4">
                        <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3 group-hover:text-[#ab817a] transition-colors">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="font-poppins text-sm text-muted-foreground mb-4 flex-grow">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <p className="font-poppins text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">What's Included:</p>
                        <ul className="space-y-1.5">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="font-poppins text-xs text-muted-foreground flex items-center">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#ab817a] mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer with Duration and Price */}
                      <div className="pt-4 mt-auto border-t border-border">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-poppins text-xs text-muted-foreground mb-1">Duration</p>
                            <p className="font-poppins text-sm font-medium text-foreground">{service.duration}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-poppins text-xs text-muted-foreground mb-1">Price</p>
                            <p className="font-playfair text-lg font-bold text-[#ab817a]">{service.price}</p>
                          </div>
                        </div>
                        <Link to="/register" className="block mt-4">
                          <Button className="w-full font-poppins bg-gradient-to-r from-[#ab817a] to-[#ba9993] hover:from-[#ba9993] hover:to-[#ab817a] text-white shadow-md hover:shadow-lg transition-all">
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </ScrollAnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* Featured Packages (image-based) */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-3">Featured Packages</h2>
              <p className="font-poppins text-lg text-muted-foreground">Highlights from Kendi promotions and services</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { src: "/promos/picosure-laser-legs.jpg", title: "Picosure Laser (Legs)" },
                { src: "/promos/ultimate-trio.jpg", title: "Ultimate Trio" },
                { src: "/promos/kendi-slimming-2.jpg", title: "Kendi Slimming 2.0" },
                { src: "/promos/radiant-glow.jpg", title: "Radiant Glow Package" },
                { src: "/promos/barbie-face-chin-filler.jpg", title: "Barbie Face + Chin Filler" },
                { src: "/promos/kendi-bb-glow.jpg", title: "Kendi BB Glow" },
              ].map((item, idx) => (
                <ScrollAnimatedCard key={idx} delay={idx * 100} className="h-full">
                <Card 
                  className="overflow-hidden border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col"
                >
                  <div className="relative w-full h-64 md:h-80 lg:h-96 bg-white flex items-center justify-center overflow-hidden flex-grow">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/70 to-transparent">
                      <h3 className="font-playfair text-lg md:text-xl text-white group-hover:translate-y-[-4px] transition-transform duration-300">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Card>
                </ScrollAnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-16 bg-gradient-to-br from-[#ab817a]/10 via-background to-[#ba9993]/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Choose Kendi?
              </h2>
              <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with our premium treatments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Sparkles,
                  title: "Advanced Technology",
                  description: "State-of-the-art equipment and the latest treatment techniques",
                  color: "from-[#ab817a] to-[#ba9993]"
                },
                {
                  icon: Heart,
                  title: "Personalized Care",
                  description: "Treatments tailored to your unique needs and goals",
                  color: "from-[#ab817a] to-[#ba9993]"
                },
                {
                  icon: Star,
                  title: "Expert Professionals",
                  description: "Highly trained and certified aestheticians and doctors",
                  color: "from-[#ab817a] to-[#ba9993]"
                }
              ].map((item, idx) => (
                <ScrollAnimatedCard key={idx} delay={idx * 150} className="h-full">
                <Card 
                  className="shadow-elegant text-center hover:shadow-gold transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col"
                >
                  <CardContent className="pt-6 flex flex-col flex-grow">
                    <div className={`h-16 w-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 group-hover:text-[#ab817a] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-sm text-muted-foreground flex-grow">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
                </ScrollAnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#ab817a] to-[#ba9993]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="font-poppins text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your appointment today and start your journey to enhanced beauty and wellness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="font-poppins text-lg shadow-gold hover:shadow-elegant transition-all">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-poppins text-lg bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
