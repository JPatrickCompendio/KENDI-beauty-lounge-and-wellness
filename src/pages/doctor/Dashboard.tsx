import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, FileText, BarChart3, LogOut, Menu, X, TrendingUp, DollarSign, Clock, Activity, Sparkles, Heart, Star, ArrowUpRight, ArrowDownRight } from "lucide-react";
import logo from "@/assets/kendi-logo.png";
import { DashboardLayout } from "@/pages/doctor/DashboardLayout";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);

  const menuItems = [
    { icon: BarChart3, label: "Dashboard", path: "/dashboard" },
    { icon: Calendar, label: "Appointments", path: "/appointments" },
    { icon: Users, label: "Patients", path: "/patients" },
    { icon: FileText, label: "Prescriptions", path: "/prescriptions" },
    { icon: BarChart3, label: "Reports", path: "/reports" },
  ];

  const stats = [
    { 
      title: "Total Patients", 
      value: "150", 
      change: "+12%", 
      changeType: "up",
      icon: Users, 
      color: "bg-gradient-to-br from-[#ab817a] to-[#ba9993]",
      bgColor: "bg-[#ab817a]/10"
    },
    { 
      title: "Today's Appointments", 
      value: "24", 
      change: "+3", 
      changeType: "up",
      icon: Calendar, 
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10"
    },
    { 
      title: "Monthly Revenue", 
      value: "₱485,000", 
      change: "+18%", 
      changeType: "up",
      icon: DollarSign, 
      color: "bg-gradient-to-br from-green-500 to-green-600",
      bgColor: "bg-green-500/10"
    },
    { 
      title: "Completed Today", 
      value: "12", 
      change: "+2", 
      changeType: "up",
      icon: Activity, 
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10"
    },
    { 
      title: "Pending Appointments", 
      value: "8", 
      change: "-3", 
      changeType: "down",
      icon: Clock, 
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/10"
    },
    { 
      title: "Avg. Session Time", 
      value: "52 min", 
      change: "-5 min", 
      changeType: "down",
      icon: Clock, 
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10"
    },
  ];

  const upcomingAppointments = [
    { 
      patient: "Angela Cruz", 
      time: "9:00 AM", 
      service: "Facial Rejuvenation", 
      status: "Confirmed", 
      duration: "45 min",
      phone: "+63 912 345 6789",
      email: "angela.cruz@email.com",
      age: 32,
      gender: "Female"
    },
    { 
      patient: "Maria Santos", 
      time: "10:00 AM", 
      service: "Gluta Drip Therapy", 
      status: "Confirmed", 
      duration: "60 min",
      phone: "+63 923 456 7890",
      email: "maria.santos@email.com",
      age: 28,
      gender: "Female"
    },
    { 
      patient: "John Reyes", 
      time: "11:00 AM", 
      service: "Slimming Treatment", 
      status: "Pending", 
      duration: "90 min",
      phone: "+63 934 567 8901",
      email: "john.reyes@email.com",
      age: 35,
      gender: "Male"
    },
    { 
      patient: "Sofia Garcia", 
      time: "1:00 PM", 
      service: "Body Contouring", 
      status: "Confirmed", 
      duration: "60 min",
      phone: "+63 945 678 9012",
      email: "sofia.garcia@email.com",
      age: 29,
      gender: "Female"
    },
    { 
      patient: "Catherine Lim", 
      time: "2:00 PM", 
      service: "Botox & Fillers", 
      status: "Confirmed", 
      duration: "30 min",
      phone: "+63 956 789 0123",
      email: "catherine.lim@email.com",
      age: 41,
      gender: "Female"
    },
    { 
      patient: "Michael Tan", 
      time: "2:30 PM", 
      service: "Laser Hair Removal", 
      status: "Pending", 
      duration: "45 min",
      phone: "+63 967 890 1234",
      email: "michael.tan@email.com",
      age: 27,
      gender: "Male"
    },
    { 
      patient: "Patricia Ong", 
      time: "3:30 PM", 
      service: "BB Glow Facial", 
      status: "Confirmed", 
      duration: "60 min",
      phone: "+63 978 901 2345",
      email: "patricia.ong@email.com",
      age: 33,
      gender: "Female"
    },
    { 
      patient: "Robert Chen", 
      time: "4:00 PM", 
      service: "Mesolipo Treatment", 
      status: "Confirmed", 
      duration: "75 min",
      phone: "+63 989 012 3456",
      email: "robert.chen@email.com",
      age: 38,
      gender: "Male"
    },
  ];

  const recentPatients = [
    { name: "Lisa Martinez", lastVisit: "2 days ago", service: "Facial Rejuvenation", nextAppointment: "Dec 28, 2024" },
    { name: "Jennifer Lee", lastVisit: "3 days ago", service: "Gluta Drip", nextAppointment: "Jan 2, 2025" },
    { name: "Amanda Torres", lastVisit: "5 days ago", service: "Botox", nextAppointment: "Jan 5, 2025" },
    { name: "Nicole Ramos", lastVisit: "1 week ago", service: "Body Contouring", nextAppointment: "Jan 8, 2025" },
  ];

  const popularServices = [
    { name: "Facial Rejuvenation", count: 145, revenue: "₱145,000", trend: "+15%" },
    { name: "Gluta Drip Therapy", count: 128, revenue: "₱128,000", trend: "+22%" },
    { name: "Slimming Treatment", count: 98, revenue: "₱196,000", trend: "+8%" },
    { name: "Botox & Fillers", count: 87, revenue: "₱174,000", trend: "+12%" },
    { name: "Body Contouring", count: 76, revenue: "₱152,000", trend: "+18%" },
  ];

  const revenueData = [
    { day: "Mon", amount: 45000 },
    { day: "Tue", amount: 52000 },
    { day: "Wed", amount: 48000 },
    { day: "Thu", amount: 61000 },
    { day: "Fri", amount: 55000 },
    { day: "Sat", amount: 72000 },
    { day: "Sun", amount: 38000 },
  ];

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  const maxRevenue = Math.max(...revenueData.map(d => d.amount));

  return (
    <DashboardLayout>
      <div className="p-6 md:p-8 bg-background min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-2">
                Welcome back!
              </h1>
              <p className="font-poppins text-muted-foreground">
                Here's what's happening at your clinic today
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="font-poppins text-sm text-muted-foreground">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-gold transition-all duration-300 hover:-translate-y-1 border-border group"
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`h-5 w-5 ${
                      stat.title.includes('Patients') ? 'text-[#ab817a]' :
                      stat.title.includes('Appointments') ? 'text-blue-600' :
                      stat.title.includes('Revenue') ? 'text-green-600' :
                      stat.title.includes('Completed') ? 'text-purple-600' :
                      stat.title.includes('Pending') ? 'text-yellow-600' :
                      'text-indigo-600'
                    }`} />
                  </div>
                  <span className={`text-xs font-poppins px-2 py-1 rounded-full flex items-center gap-1 ${
                    stat.changeType === "up" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-red-100 text-red-700"
                  }`}>
                    {stat.changeType === "up" ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3" />
                    )}
                    {stat.change}
                  </span>
                </div>
                <p className="font-poppins text-xs text-muted-foreground mb-1">{stat.title}</p>
                <p className="font-playfair text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Today's Appointments */}
          <Card className="lg:col-span-2 shadow-elegant">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="font-playfair text-2xl">Today's Appointments</CardTitle>
                <span className="font-poppins text-sm text-muted-foreground">
                  {upcomingAppointments.length} scheduled
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-none">
                  <CardContent className="flex flex-col items-center py-3">
                    <span className="font-poppins text-xs text-green-700 mb-1">Confirmed</span>
                    <span className="font-playfair text-2xl font-bold text-green-800">
                      {upcomingAppointments.filter(a => a.status === "Confirmed").length}
                    </span>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 shadow-none">
                  <CardContent className="flex flex-col items-center py-3">
                    <span className="font-poppins text-xs text-yellow-700 mb-1">Pending</span>
                    <span className="font-playfair text-2xl font-bold text-yellow-800">
                      {upcomingAppointments.filter(a => a.status === "Pending").length}
                    </span>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-none">
                  <CardContent className="flex flex-col items-center py-3">
                    <span className="font-poppins text-xs text-blue-700 mb-1">Completed</span>
                    <span className="font-playfair text-2xl font-bold text-blue-800">12</span>
                  </CardContent>
                </Card>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {upcomingAppointments.map((apt, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border border-border hover:bg-gradient-to-r hover:from-[#ab817a]/5 hover:to-transparent transition-all duration-300 gap-3 group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] flex items-center justify-center text-white font-poppins font-semibold">
                          {apt.patient.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-poppins font-semibold text-base text-foreground">{apt.patient}</p>
                          <p className="font-poppins text-sm text-muted-foreground">{apt.service}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center">
                        <span className="font-poppins text-xs text-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {apt.time}
                        </span>
                        <span className="font-poppins text-xs text-muted-foreground">•</span>
                        <span className="font-poppins text-xs text-muted-foreground">{apt.duration}</span>
                        <span className="font-poppins text-xs text-muted-foreground">•</span>
                        <span className={`font-poppins text-xs px-2 py-1 rounded-full ${
                          apt.status === "Confirmed" 
                            ? "bg-green-100 text-green-700 border border-green-200" 
                            : apt.status === "Pending" 
                            ? "bg-yellow-100 text-yellow-700 border border-yellow-200" 
                            : "bg-blue-100 text-blue-700 border border-blue-200"
                        }`}>
                          {apt.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="font-poppins text-xs hover:bg-[#ab817a] hover:text-white transition-colors" 
                            onClick={() => setSelectedRecord(apt)}
                          >
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="font-playfair text-2xl">Patient Appointment Details</DialogTitle>
                          </DialogHeader>
                          {selectedRecord && (
                            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground mb-1">Full Name</p>
                                  <p className="font-poppins font-semibold text-base">{selectedRecord.patient}</p>
                                </div>
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground mb-1">Service</p>
                                  <p className="font-poppins font-semibold text-base">{selectedRecord.service}</p>
                                </div>
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground mb-1">Appointment Time</p>
                                  <p className="font-poppins font-semibold text-base">{selectedRecord.time}</p>
                                </div>
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground mb-1">Duration</p>
                                  <p className="font-poppins font-semibold text-base">{selectedRecord.duration}</p>
                                </div>
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground mb-1">Status</p>
                                  <span className={`font-poppins text-xs px-3 py-1 rounded-full ${
                                    selectedRecord.status === "Confirmed" 
                                      ? "bg-green-100 text-green-700" 
                                      : selectedRecord.status === "Pending" 
                                      ? "bg-yellow-100 text-yellow-700" 
                                      : "bg-blue-100 text-blue-700"
                                  }`}>
                                    {selectedRecord.status}
                                  </span>
                                </div>
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground mb-1">Age</p>
                                  <p className="font-poppins font-semibold text-base">{selectedRecord.age} years old</p>
                                </div>
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground mb-1">Gender</p>
                                  <p className="font-poppins font-semibold text-base">{selectedRecord.gender}</p>
                                </div>
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground mb-1">Contact Number</p>
                                  <p className="font-poppins font-semibold text-base">{selectedRecord.phone}</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="font-poppins text-sm text-muted-foreground mb-1">Email Address</p>
                                  <p className="font-poppins font-semibold text-base">{selectedRecord.email}</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <Link to="/appointments">
                  <Button className="w-full font-poppins bg-gradient-to-r from-[#ab817a] to-[#ba9993] hover:from-[#ba9993] hover:to-[#ab817a] text-white shadow-lg hover:shadow-xl transition-all">
                    View All Appointments
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions & Recent Patients */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/appointments">
                  <Button variant="outline" className="w-full justify-start font-poppins hover:bg-[#ab817a]/10 hover:border-[#ab817a] transition-colors">
                    <Calendar className="mr-2 h-4 w-4" />
                    New Appointment
                  </Button>
                </Link>
                <Link to="/patients">
                  <Button variant="outline" className="w-full justify-start font-poppins hover:bg-[#ab817a]/10 hover:border-[#ab817a] transition-colors">
                    <Users className="mr-2 h-4 w-4" />
                    Add Patient
                  </Button>
                </Link>
                <Link to="/prescriptions">
                  <Button variant="outline" className="w-full justify-start font-poppins hover:bg-[#ab817a]/10 hover:border-[#ab817a] transition-colors">
                    <FileText className="mr-2 h-4 w-4" />
                    Create Prescription
                  </Button>
                </Link>
                <Link to="/reports">
                  <Button variant="outline" className="w-full justify-start font-poppins hover:bg-[#ab817a]/10 hover:border-[#ab817a] transition-colors">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Generate Report
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Patients */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">Recent Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentPatients.map((patient, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-secondary/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] flex items-center justify-center text-white font-poppins font-semibold text-sm">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-poppins font-semibold text-sm text-foreground">{patient.name}</p>
                          <p className="font-poppins text-xs text-muted-foreground">{patient.service}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-poppins text-xs text-muted-foreground">{patient.lastVisit}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/patients" className="block mt-4">
                  <Button variant="outline" className="w-full font-poppins text-sm">
                    View All Patients
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Revenue Chart */}
          <Card className="shadow-elegant">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-playfair text-xl">Weekly Revenue</CardTitle>
                <span className="font-poppins text-sm text-green-600 flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  +18%
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-end justify-between h-48 gap-2">
                  {revenueData.map((data, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className="w-full flex flex-col justify-end h-full">
                        <div
                          className="w-full bg-gradient-to-t from-[#ab817a] to-[#ba9993] rounded-t-lg hover:from-[#ba9993] hover:to-[#ab817a] transition-all duration-300 cursor-pointer group-hover:opacity-80"
                          style={{ height: `${(data.amount / maxRevenue) * 100}%` }}
                          title={`${data.day}: ₱${data.amount.toLocaleString()}`}
                        />
                      </div>
                      <span className="font-poppins text-xs text-muted-foreground">{data.day}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-poppins text-sm text-muted-foreground">Total Weekly Revenue</p>
                      <p className="font-playfair text-2xl font-bold text-foreground">
                        ₱{revenueData.reduce((sum, d) => sum + d.amount, 0).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Popular Services */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="font-playfair text-xl flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#ab817a]" />
                Popular Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-gradient-to-r hover:from-[#ab817a]/5 hover:to-transparent transition-all duration-300 group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] flex items-center justify-center">
                          <span className="font-poppins font-bold text-white text-xs">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-poppins font-semibold text-sm text-foreground">{service.name}</p>
                          <p className="font-poppins text-xs text-muted-foreground">
                            {service.count} appointments
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-playfair font-bold text-base text-foreground mb-1">{service.revenue}</p>
                      <span className="font-poppins text-xs text-green-600 flex items-center gap-1 justify-end">
                        <TrendingUp className="h-3 w-3" />
                        {service.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
