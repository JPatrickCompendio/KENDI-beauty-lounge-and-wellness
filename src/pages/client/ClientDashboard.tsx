import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, FileText, User, LogOut, Clock, MapPin, Heart, Pill, Flower, Sparkles, ArrowRight } from "lucide-react";
import logo from "@/assets/kendi-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import { ClientLayout } from "@/pages/client/ClientLayout";

export default function ClientDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("appointments");

  useEffect(() => {
    // basic client-only guard: redirect if user role is not patient
    try {
      const userRole = localStorage.getItem("userRole");
      if (userRole !== "patient") {
        navigate("/login");
      }
    } catch (e) {
      navigate("/login");
    }
  }, [navigate]);

  const upcomingAppointments = [
    { 
      id: 1, 
      date: "2025-10-28", 
      time: "10:00 AM", 
      service: "Facial Rejuvenation", 
      status: "Confirmed", 
      branch: "Baliuag Branch",
      duration: "60 mins"
    },
    { 
      id: 2, 
      date: "2025-11-05", 
      time: "2:30 PM", 
      service: "Gluta Drip Therapy", 
      status: "Pending", 
      branch: "Malolos Branch",
      duration: "45 mins"
    }
  ];

  const pastAppointments = [
    { 
      id: 3, 
      date: "2025-10-15", 
      service: "Slimming Treatment", 
      status: "Completed", 
      branch: "Baliuag Branch",
      rating: "5.0"
    }
  ];

  const prescriptions = [
    {
      id: 1,
      date: "2025-10-15",
      doctor: "Dr. Maria Dela Cruz",
      items: ["Vitamin C Serum", "Sunscreen SPF 50"],
      status: "Active"
    }
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  const cancelAppointment = (id: number) => {
    // Mock cancellation
    alert("Appointment cancellation requested. We'll contact you to confirm.");
  };

  return (
    <ClientLayout>
      <div className="bg-background">
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
                <Link to="/client/appointments" className="group/btn">
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
              </div>
            </div>
          </div>
        </div>
      </section>

  <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="font-playfair text-4xl font-bold text-foreground mb-2">
            Welcome back, Angela!
          </h1>
          <p className="font-poppins text-muted-foreground">
            Here's your wellness journey overview
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-elegant hover:shadow-gold hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-poppins text-sm text-muted-foreground">Upcoming Appointments</p>
                  <p className="font-playfair text-3xl font-bold text-foreground">2</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-[#ab817a] flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-gold hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-poppins text-sm text-muted-foreground">Active Prescriptions</p>
                  <p className="font-playfair text-3xl font-bold text-foreground">1</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Pill className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-gold hover:scale-105 transition-all duration-300 cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-poppins text-sm text-muted-foreground">Loyalty Points</p>
                  <p className="font-playfair text-3xl font-bold text-foreground">150</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-elegant sticky top-8 bg-gradient-soft-pink rounded-xl">
              <CardContent className="pt-8 px-6">
                <nav className="space-y-3">
                  <Button
                    variant={activeTab === "appointments" ? "default" : "ghost"}
                    className={`w-full justify-start font-poppins text-[#4f3a30] transition-all  hover:text-foreground hover:scale-105 hover:shadow-lg ${activeTab === "appointments" ? "bg-[#ab817a]" : ""}`}
                    onClick={() => setActiveTab("appointments")}
                  >
                    <Calendar className="h-4 w-4 mr-3" />
                    My Appointments
                  </Button>
                  <Button
                    variant={activeTab === "prescriptions" ? "default" : "ghost"}
                    className={`w-full justify-start font-poppins transition-all hover:bg-gradient-to-r hover:from-rose-400/30 hover:to-pink-400/30
 hover:text-foreground hover:scale-105 hover:shadow-lg ${activeTab === "prescriptions" ? "bg-[#ab817a]" : ""}`}
                    onClick={() => setActiveTab("prescriptions")}
                  >
                    <FileText className="h-4 w-4 mr-3" />
                    Prescriptions
                  </Button>
                  <Button
                    variant={activeTab === "profile" ? "default" : "ghost"}
                    className={`w-full justify-start font-poppins transition-all hover:bg-gradient-to-r hover:from-rose-400/30 hover:to-pink-400/30
 hover:text-foreground hover:scale-105 hover:shadow-lg ${activeTab === "profile" ? "bg-[#ab817a]" : ""}`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="h-4 w-4 mr-3" />
                    My Profile
                  </Button>
                </nav>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <Link to="/book-appointment">
                    <Button className="w-full font-poppins bg-[#c3a89d] shadow-elegant transition-all hover:scale-105 text-white hover:text-white">
                      Book New Appointment
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Wellness Tip Section */}
            <Card className="shadow-elegant mb-6 bg-gradient-soft-pink border-0">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-[#ab817a] flex items-center justify-center">
                    <Flower className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-foreground">Daily Wellness Tip</h3>
                    <p className="font-poppins text-muted-foreground">
                      Stay hydrated! Drink at least 8 glasses of water today to keep your skin glowing and your body energized.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointments Tab */}
            {activeTab === "appointments" && (
              <div className="space-y-6">
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="font-playfair">Upcoming Appointments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingAppointments.map((apt) => (
                        <div key={apt.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/30 hover:shadow-md transition-all duration-300 cursor-pointer">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4">
                              <div className="h-12 w-12 rounded-full bg-[#ab817a] flex items-center justify-center">
                                <Calendar className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <p className="font-poppins font-medium text-foreground">{apt.service}</p>
                                <div className="flex items-center space-x-4 mt-1">
                                  <div className="flex items-center text-sm text-muted-foreground">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {apt.date} at {apt.time}
                                  </div>
                                  <div className="flex items-center text-sm text-muted-foreground">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    {apt.branch}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right space-y-2">
                            <span className={`inline-block px-3 py-1 text-sm rounded-full font-poppins ${
                              apt.status === "Confirmed"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}>
                              {apt.status}
                            </span>
                            <div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="font-poppins hover:bg-red-50 hover:border-red-200 transition-colors"
                                onClick={() => cancelAppointment(apt.id)}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="font-playfair">Appointment History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {pastAppointments.map((apt) => (
                        <div key={apt.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                          <div className="flex-1">
                            <p className="font-poppins font-medium text-foreground">{apt.service}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-sm text-muted-foreground">{apt.date}</span>
                              <span className="text-sm text-muted-foreground">{apt.branch}</span>
                              <span className="flex items-center text-sm text-yellow-600">
                                ★ {apt.rating}
                              </span>
                            </div>
                          </div>
                          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full font-poppins">
                            {apt.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Prescriptions Tab */}
            {activeTab === "prescriptions" && (
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-playfair">My Prescriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {prescriptions.map((prescription) => (
                      <div key={prescription.id} className="p-4 rounded-lg border border-border hover:bg-secondary/30 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <p className="font-poppins font-medium text-foreground">
                              Prescription from {prescription.doctor}
                            </p>
                            <p className="font-poppins text-sm text-muted-foreground">
                              Issued: {prescription.date}
                            </p>
                          </div>
                          <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full font-poppins">
                            {prescription.status}
                          </span>
                        </div>
                        <div>
                          <p className="font-poppins text-sm font-medium text-foreground mb-2">Prescribed Items:</p>
                          <ul className="list-disc list-inside space-y-1">
                            {prescription.items.map((item, index) => (
                              <li key={index} className="font-poppins text-sm text-muted-foreground">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-playfair">My Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="h-20 w-20 rounded-full bg-[#ab817a] flex items-center justify-center">
                        <span className="text-2xl text-white font-playfair">AC</span>
                      </div>
                      <div>
                        <h3 className="font-playfair text-2xl font-semibold text-foreground">Angela Cruz</h3>
                        <p className="font-poppins text-muted-foreground">Member since 2024</p>
                        <div className="mt-2">
                          <p className="font-poppins text-sm text-muted-foreground mb-1">Loyalty Points Progress</p>
                          <Progress value={75} className="w-full" />
                          <p className="font-poppins text-xs text-muted-foreground mt-1">150 / 200 points to next reward</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-playfair text-lg font-semibold text-foreground mb-4">Contact Information</h4>
                        <div className="space-y-3 font-poppins">
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="text-foreground">angela@example.com</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p className="text-foreground">+63 912 345 6789</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Preferred Branch</p>
                            <p className="text-foreground">Baliuag Branch</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-playfair text-lg font-semibold text-foreground mb-4">Wellness Preferences</h4>
                        <div className="space-y-3 font-poppins">
                          <div>
                            <p className="text-sm text-muted-foreground">Allergies</p>
                            <p className="text-foreground">None reported</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Medical Conditions</p>
                            <p className="text-foreground">None reported</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Preferred Services</p>
                            <p className="text-foreground">Facial Treatments, IV Therapy</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button className="font-poppins bg-[#ab817a] transition-all hover:scale-105">
                        Edit Profile
                      </Button>
                      <Button variant="outline" className="font-poppins transition-all hover:bg-secondary">
                        Change Password
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      </div>

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
    </ClientLayout>
  );
}