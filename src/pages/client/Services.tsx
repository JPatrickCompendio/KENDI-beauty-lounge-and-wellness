import { ClientLayout } from "@/pages/client/ClientLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Droplet, Wind, Heart, Zap, Star } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      name: "Facial Rejuvenation",
      description: "Deep cleansing, exfoliation, and anti-aging treatments to restore your skin's natural glow",
      features: ["Deep Cleansing", "Anti-Aging Treatment", "Hydration Therapy", "LED Light Therapy"],
      duration: "60-90 minutes",
      price: "Starting at ₱2,500"
    },
    {
      icon: Droplet,
      name: "Gluta Drip Therapy",
      description: "IV infusion of glutathione and essential vitamins for radiant, even-toned skin",
      features: ["Glutathione 1200mg", "Vitamin C Complex", "Skin Whitening", "Antioxidant Boost"],
      duration: "45-60 minutes",
      price: "Starting at ₱3,500"
    },
    {
      icon: Wind,
      name: "Slimming Treatments",
      description: "Non-invasive body contouring and weight management programs",
      features: ["Fat Reduction", "Cellulite Treatment", "Skin Tightening", "Body Sculpting"],
      duration: "60-120 minutes",
      price: "Starting at ₱4,000"
    },
    {
      icon: Heart,
      name: "Body Contouring",
      description: "Advanced techniques to shape and tone your body for your desired look",
      features: ["Ultrasound Cavitation", "RF Body Tightening", "Cryolipolysis", "Muscle Toning"],
      duration: "90-120 minutes",
      price: "Starting at ₱5,000"
    },
    {
      icon: Zap,
      name: "Laser Treatments",
      description: "State-of-the-art laser technology for hair removal and skin rejuvenation",
      features: ["Hair Removal", "Pigmentation Treatment", "Scar Reduction", "Skin Resurfacing"],
      duration: "30-60 minutes",
      price: "Starting at ₱2,000"
    },
    {
      icon: Star,
      name: "Premium Wellness Packages",
      description: "Comprehensive wellness programs combining multiple treatments",
      features: ["Full Body Treatment", "Facial Care", "IV Therapy", "Consultation"],
      duration: "2-3 hours",
      price: "Starting at ₱10,000"
    }
  ];

  return (
    <ClientLayout>
      <div className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-5xl font-bold text-black mb-6">
              Our Services
            </h1>
            <p className="font-poppins text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and wellness treatments, designed to help you look and feel your absolute best
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-gold transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-full bg-[#ab817a] flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-2xl font-semibold text-black mb-2">
                          {service.name}
                        </h3>
                        <p className="font-poppins text-gray-700 mb-4">
                          {service.description}
                        </p>

                        <div className="mb-4">
                          <p className="font-poppins text-sm font-medium text-black mb-2">What's Included:</p>
                          <ul className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="font-poppins text-sm text-gray-600 flex items-start">
                                <span className="mr-2">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div>
                            <p className="font-poppins text-xs text-gray-600">Duration</p>
                            <p className="font-poppins text-sm font-medium">{service.duration}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-poppins text-xs text-gray-600">Price</p>
                            <p className="font-playfair text-lg font-semibold text-primary">{service.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-black mb-4">
                Why Choose Kendi?
              </h2>
              <p className="font-poppins text-lg text-gray-600">
                Experience the difference with our premium treatments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="shadow-elegant text-center">
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                    Advanced Technology
                  </h3>
                  <p className="font-poppins text-sm text-gray-600">
                    State-of-the-art equipment and the latest treatment techniques
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant text-center">
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-[#ab817a] flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                    Personalized Care
                  </h3>
                  <p className="font-poppins text-sm text-gray-600">
                    Treatments tailored to your unique needs and goals
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant text-center">
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                    Expert Professionals
                  </h3>
                  <p className="font-poppins text-sm text-gray-600">
                    Highly trained and certified aestheticians and doctors
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ab817a]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-4xl font-bold text-white mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="font-poppins text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your appointment today and start your journey to enhanced beauty and wellness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="font-poppins text-lg shadow-gold text-black">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="font-poppins text-lg border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ClientLayout>
  );
}
