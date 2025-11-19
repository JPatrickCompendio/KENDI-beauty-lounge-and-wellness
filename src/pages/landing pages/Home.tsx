import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/pages/landing pages/Header";
import { Footer } from "@/pages/client/Footer";
import { Calendar, Users, FileText, Sparkles, Heart, Shield, Star, Award, Clock, MapPin, Phone, Mail, ArrowRight, TrendingUp, Zap, Target, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { ScrollAnimatedCard } from "@/components/ScrollAnimatedCard";

export default function Home() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Effortless appointment booking with real-time availability and instant confirmations"
    },
    {
      icon: Users,
      title: "Patient Records",
      description: "Comprehensive digital health records management for seamless care"
    },
    {
      icon: FileText,
      title: "E-Prescriptions",
      description: "Digital prescription tracking and management at your fingertips"
    },
    {
      icon: Sparkles,
      title: "Premium Services",
      description: "Luxury treatments using cutting-edge aesthetic technology"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Tailored treatments designed specifically for your unique needs"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data protected with industry-leading security standards"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
    { number: "50+", label: "Expert Treatments", icon: Sparkles }
  ];

  const services = [
    {
      name: "Facial Rejuvenation",
      description: "Advanced anti-aging treatments using Pico Carbon Laser, Omega Light, and premium facial masks for radiant, youthful skin",
      features: ["Deep Cleansing", "Anti-Aging", "Skin Brightening"],
      icon: Sparkles
    },
    {
      name: "Slimming Treatments",
      description: "Body contouring and weight management through Mesolipo, Radio Frequency, and advanced slimming technologies",
      features: ["Body Contouring", "Fat Reduction", "Skin Tightening"],
      icon: Target
    },
    {
      name: "Gluta Drip Therapy",
      description: "IV infusion therapy for radiant skin, enhanced immunity, and overall wellness boost",
      features: ["Skin Whitening", "Immune Boost", "Energy Enhancement"],
      icon: Zap
    },
    {
      name: "Botox & Fillers",
      description: "Expert injectable treatments for wrinkle reduction, facial enhancement, and natural-looking results",
      features: ["Wrinkle Reduction", "Facial Enhancement", "Natural Results"],
      icon: Heart
    },
    {
      name: "Laser Treatments",
      description: "Picosure laser technology for hair removal, skin rejuvenation, and pigmentation correction",
      features: ["Hair Removal", "Pigmentation", "Skin Rejuvenation"],
      icon: TrendingUp
    },
    {
      name: "BB Glow & Skin Care",
      description: "Semi-permanent makeup and advanced skincare treatments for flawless, glowing complexion",
      features: ["BB Glow", "Skin Care", "Makeup Enhancement"],
      icon: Star
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Regular Client",
      content: "Kendi transformed my skin! The facial treatments are amazing and the staff is incredibly professional. Highly recommend!",
      rating: 5
    },
    {
      name: "Angela Cruz",
      role: "VIP Member",
      content: "Best aesthetic clinic in Bulacan! The slimming treatments worked wonders and I feel more confident than ever.",
      rating: 5
    },
    {
      name: "Sofia Garcia",
      role: "New Client",
      content: "From consultation to treatment, everything was perfect. The Gluta drip therapy gave me the glow I've been wanting!",
      rating: 5
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Book Consultation",
      description: "Schedule your free consultation with our expert aestheticians"
    },
    {
      step: "02",
      title: "Personalized Plan",
      description: "Receive a customized treatment plan tailored to your goals"
    },
    {
      step: "03",
      title: "Expert Treatment",
      description: "Experience premium treatments with state-of-the-art technology"
    },
    {
      step: "04",
      title: "Follow-up Care",
      description: "Ongoing support and maintenance for lasting results"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div
          className="absolute inset-0 bg-cover bg-center hero-bg-animate"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 animate-gradient-shift" />
          <div className="absolute inset-0 bg-gradient-hero opacity-40 animate-pulse-slow" />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-[#ab817a]/20 to-[#ba9993]/20 blur-xl floating-element"
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + i * 2}s`
              }}
            />
          ))}
        </div>

        {/* Sparkle Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { left: '10%', top: '20%', delay: '0s', duration: '2s' },
            { left: '25%', top: '15%', delay: '0.5s', duration: '2.5s' },
            { left: '40%', top: '25%', delay: '1s', duration: '3s' },
            { left: '60%', top: '20%', delay: '1.5s', duration: '2.2s' },
            { left: '75%', top: '30%', delay: '0.8s', duration: '2.8s' },
            { left: '85%', top: '15%', delay: '1.2s', duration: '3.2s' },
            { left: '15%', top: '60%', delay: '0.3s', duration: '2.3s' },
            { left: '30%', top: '70%', delay: '0.7s', duration: '2.7s' },
            { left: '50%', top: '65%', delay: '1.1s', duration: '3.1s' },
            { left: '70%', top: '75%', delay: '0.4s', duration: '2.4s' },
            { left: '90%', top: '60%', delay: '0.9s', duration: '2.9s' },
            { left: '5%', top: '45%', delay: '0.6s', duration: '2.6s' }
          ].map((sparkle, i) => (
            <div
              key={i}
              className="absolute sparkle"
              style={{
                left: sparkle.left,
                top: sparkle.top,
                animationDelay: sparkle.delay,
                animationDuration: sparkle.duration
              }}
            >
              <Sparkles className="h-4 w-4 text-white/60" />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Text container with enhanced animations */}
            <div 
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl hero-container"
              style={{
                animation: `fadeInUp 1s ease-out 0.2s both, float 6s ease-in-out infinite 1s`
              }}
            >
              {/* Animated underline effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ab817a]/20 via-transparent to-[#ba9993]/20 animate-shimmer pointer-events-none" />
              
              <h1 
                className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl relative hero-title"
                style={{
                  animation: `fadeInUp 1s ease-out 0.4s both, textGlow 3s ease-in-out infinite 2s`
                }}
              >
                <span className="inline-block animate-slide-in-left">Enhance</span>{" "}
                <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.1s' }}>Your</span>{" "}
                <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.2s' }}>Wellness</span>{" "}
                <span className="inline-block animate-slide-in-left" style={{ animationDelay: '0.3s' }}>Journey</span>
              </h1>
              
              <p 
                className="font-poppins text-xl md:text-2xl text-white/95 mb-8 drop-shadow-lg max-w-2xl mx-auto hero-subtitle"
                style={{
                  animation: `fadeInUp 1s ease-out 0.6s both, slideInRight 1s ease-out 0.8s both`
                }}
              >
                Experience the perfect blend of beauty, wellness, and professional care at Kendi Beauty Lounge & Wellness
              </p>
              
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons"
                style={{
                  animation: `fadeInUp 1s ease-out 0.8s both, scaleIn 0.8s ease-out 1s both`
                }}
              >
                <Link to="/register" className="group/btn">
                  <Button 
                    size="lg" 
                    className="font-poppins text-lg bg-[#ab817a] hover:bg-[#ba9993] text-white shadow-gold hover:shadow-elegant border-0 button-glow relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Calendar className="h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Book Appointment
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </Button>
                </Link>
                <Link to="/about" className="group/btn">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="font-poppins text-lg bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm button-border-glow relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Learn More
                      <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Statistics Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#ab817a]/10 via-background to-[#ba9993]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimatedCard key={index} delay={index * 100}>
                <Card className="text-center border-border hover:shadow-elegant transition-all duration-500 hover:scale-110 hover:-translate-y-2 group">
                  <CardContent className="pt-6">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <stat.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-[#ab817a] transition-colors duration-300">
                      {stat.number}
                    </p>
                    <p className="font-poppins text-sm md:text-base text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3">Kendi Promotions & Highlights</h2>
            <p className="font-poppins text-lg text-muted-foreground">Featured services and limited-time offers</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { src: "/promos/anniversary-02.jpg", title: "Anniversary Promo", desc: "Up to 80% OFF • Slimming Package" },
              { src: "/promos/premium-hydra-facial.jpg", title: "Premium Hydra Facial", desc: "10-in-1 Hydrafacial • Collagen Mask • ₱1,199" },
              { src: "/promos/hugis-bigas.jpg", title: "Hugis Bigas Package", desc: "Incl. Mesolipo, 7D HIFU, KendiLift • ₱4,999" },
              { src: "/promos/forehead-botox-before-after.jpg", title: "Forehead Botox", desc: "Real patient result • Before & After" },
              { src: "/promos/kendi-carbon-2.jpg", title: "Kendi Carbon 2.0 Facial", desc: "Pico Carbon Laser • ₱1,399" },
              { src: "/promos/mesolipo-rf.jpg", title: "Mesolipo + Radio Frequency", desc: "Body contouring options available" }
            ].map((item, index) => (
              <ScrollAnimatedCard key={index} delay={index * 100}>
              <Card 
                className="overflow-hidden border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] group"
              >
                <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="max-h-full max-w-full object-contain block group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/70 to-transparent transform group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-playfair text-xl text-white mb-1 group-hover:translate-y-[-2px] transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-white/90 text-sm">{item.desc}</p>
                  </div>
                </div>
              </Card>
              </ScrollAnimatedCard>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" className="font-poppins">Explore Services</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Kendi?
            </h2>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with personalized care to provide the best wellness experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <ScrollAnimatedCard key={index} delay={index * 100}>
              <Card 
                className="border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] group"
              >
                <CardContent className="pt-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <feature.icon className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 group-hover:text-[#ab817a] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="font-poppins text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
              </ScrollAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Signature Services
            </h2>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Luxurious treatments tailored to enhance your natural beauty with state-of-the-art technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ScrollAnimatedCard key={index} delay={index * 100} className="h-full">
              <Card 
                className="border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] group h-full flex flex-col"
              >
                <CardContent className="pt-6 flex flex-col flex-grow">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <service.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3 group-hover:text-[#ab817a] transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="font-poppins text-muted-foreground mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="font-poppins text-xs px-3 py-1 rounded-full bg-[#ab817a]/10 text-[#ab817a] border border-[#ab817a]/20 group-hover:bg-[#ab817a]/20 transition-colors duration-300"
                        style={{
                          animation: `fadeIn 0.5s ease-out ${(index * 0.1 + idx * 0.05) + 0.5}s both`
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link to="/services" className="mt-auto">
                    <Button variant="outline" className="w-full font-poppins group-hover:bg-[#ab817a] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              </ScrollAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Your journey to beauty and wellness in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <ScrollAnimatedCard key={index} delay={index * 150}>
              <div className="relative">
                <Card className="border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] text-center h-full group">
                  <CardContent className="pt-6">
                    <div className="font-playfair text-5xl font-bold text-[#ab817a]/20 mb-4 group-hover:text-[#ab817a]/30 transition-colors duration-300">
                      {step.step}
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-3 group-hover:text-[#ab817a] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="font-poppins text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 animate-pulse">
                    <ArrowRight className="h-6 w-6 text-[#ab817a]" />
                  </div>
                )}
              </div>
              </ScrollAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#ab817a]/10 via-background to-[#ba9993]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimatedCard key={index} delay={index * 150}>
              <Card 
                className="border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] group"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          animation: `fadeIn 0.5s ease-out ${(index * 0.15 + i * 0.1) + 0.3}s both`
                        }}
                      />
                    ))}
                  </div>
                  <p className="font-poppins text-muted-foreground mb-4 italic group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-playfair font-semibold text-foreground group-hover:text-[#ab817a] transition-colors duration-300">
                      {testimonial.name}
                    </p>
                    <p className="font-poppins text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
              </ScrollAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimatedCard delay={200}>
          <Card 
            className="border-border shadow-elegant bg-gradient-to-br from-[#ab817a]/5 to-[#ba9993]/5 hover:shadow-gold transition-all duration-500 hover:scale-[1.01]"
          >
            <CardContent className="pt-6 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Visit Our Clinics
                  </h2>
                  <p className="font-poppins text-muted-foreground mb-6">
                    We have two convenient locations in Bulacan to serve you better. Book your appointment today!
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: MapPin, label: "Locations", value: "Baliuag & Malolos, Bulacan" },
                      { icon: Phone, label: "Phone", value: "+63 123 456 7890" },
                      { icon: Mail, label: "Email", value: "info@kendiwellness.com" },
                      { icon: Clock, label: "Hours", value: "Mon-Sat: 9:00 AM - 7:00 PM" }
                    ].map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start space-x-3 group/item hover:translate-x-2 transition-transform duration-300"
                        style={{
                          animation: `fadeInLeft 0.6s ease-out ${(idx * 0.1) + 0.5}s both`
                        }}
                      >
                        <item.icon className="h-5 w-5 text-[#ab817a] mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                        <div>
                          <p className="font-poppins font-semibold text-foreground">{item.label}</p>
                          <p className="font-poppins text-sm text-muted-foreground">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="w-full font-poppins bg-[#ab817a] hover:bg-[#ba9993] text-white shadow-gold hover:shadow-elegant hover:scale-105 transition-all duration-300">
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button size="lg" variant="outline" className="w-full font-poppins hover:bg-[#ab817a] hover:text-white hover:scale-105 transition-all duration-300">
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
          </ScrollAnimatedCard>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#ab817a] to-[#ba9993]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="font-poppins text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Kendi Beauty Lounge & Wellness for their beauty and wellness needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register">
              <Button size="lg" variant="secondary" className="font-poppins text-lg shadow-gold hover:shadow-elegant">
              Schedule Your Appointment
            </Button>
          </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="font-poppins text-lg bg-white/10 border-white/30 text-white hover:bg-white/20">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Hero Section Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes hero-bg-animate {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .hero-bg-animate {
          animation: hero-bg-animate 20s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) translateX(20px) rotate(120deg);
          }
          66% {
            transform: translateY(20px) translateX(-20px) rotate(240deg);
          }
        }

        .floating-element {
          animation: floating 10s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }

        .sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
          background-size: 200% 100%;
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out both;
        }

        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
                         0 0 40px rgba(171, 129, 122, 0.3),
                         0 0 60px rgba(171, 129, 122, 0.2);
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.7),
                         0 0 60px rgba(171, 129, 122, 0.5),
                         0 0 90px rgba(171, 129, 122, 0.3);
          }
        }

        .hero-title {
          animation: fadeInUp 1s ease-out 0.4s both, textGlow 3s ease-in-out infinite 2s;
        }

        @keyframes buttonGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(171, 129, 122, 0.4),
                        0 0 40px rgba(171, 129, 122, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(171, 129, 122, 0.6),
                        0 0 60px rgba(171, 129, 122, 0.4);
          }
        }

        .button-glow {
          animation: buttonGlow 2s ease-in-out infinite 1.5s;
        }

        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
                        inset 0 0 10px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
                        inset 0 0 20px rgba(255, 255, 255, 0.2);
          }
        }

        .button-border-glow {
          animation: borderGlow 2s ease-in-out infinite 1.5s;
        }

        .hero-container:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease-out;
        }

        .hero-buttons button {
          transition: all 0.3s ease;
        }

        .hero-buttons button:hover {
          transform: scale(1.05) translateY(-2px);
        }
      `}</style>
    </div>
  );
}
