import { DashboardLayout } from "@/pages/doctor/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, TrendingUp, Users, Calendar, FileText, Download } from "lucide-react";
import { toast } from "sonner";

export default function Reports() {
  const handleExport = (format: string) => {
    toast.success(`Exporting report as ${format}...`);
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-playfair text-4xl font-bold text-foreground mb-2">Reports & Analytics</h1>
            <p className="font-poppins text-muted-foreground">Track performance and generate insights</p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="font-poppins" onClick={() => handleExport("PDF")}>
              <Download className="mr-2 h-4 w-4" />
              Export PDF
            </Button>
            <Button variant="outline" className="font-poppins" onClick={() => handleExport("CSV")}>
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="mb-6 shadow-elegant">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <Select defaultValue="september">
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="september">September 2025</SelectItem>
                  <SelectItem value="october">October 2025</SelectItem>
                  <SelectItem value="november">November 2025</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Reports</SelectItem>
                  <SelectItem value="appointments">Appointments</SelectItem>
                  <SelectItem value="patients">Patients</SelectItem>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="prescriptions">Prescriptions</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-8 w-8 text-primary" />
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <p className="font-poppins text-sm text-muted-foreground">Total Patients</p>
              <p className="font-playfair text-3xl font-bold text-foreground">485</p>
              <p className="font-poppins text-xs text-green-600 mt-1">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Calendar className="h-8 w-8 text-accent" />
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <p className="font-poppins text-sm text-muted-foreground">Appointments</p>
              <p className="font-playfair text-3xl font-bold text-foreground">120</p>
              <p className="font-poppins text-xs text-green-600 mt-1">+8% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <FileText className="h-8 w-8 text-secondary" />
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <p className="font-poppins text-sm text-muted-foreground">Prescriptions</p>
              <p className="font-playfair text-3xl font-bold text-foreground">95</p>
              <p className="font-poppins text-xs text-green-600 mt-1">+5% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <BarChart3 className="h-8 w-8 text-primary" />
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <p className="font-poppins text-sm text-muted-foreground">Revenue</p>
              <p className="font-playfair text-3xl font-bold text-foreground">₱125K</p>
              <p className="font-poppins text-xs text-green-600 mt-1">+15% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="font-playfair">Monthly Appointments Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-around gap-2">
                {[65, 78, 85, 92, 105, 120].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-[#ab817a] rounded-t-lg transition-all hover:opacity-80"
                      style={{ height: `${(value / 120) * 100}%` }}
                    />
                    <p className="font-poppins text-xs text-muted-foreground mt-2">
                      {["May", "Jun", "Jul", "Aug", "Sep", "Oct"][index]}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="font-playfair">Top Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Facial Rejuvenation", count: 45, color: "bg-[#ab817a]" },
                  { name: "Gluta Drip", count: 38, color: "bg-gradient-gold" },
                  { name: "Slimming Treatment", count: 28, color: "bg-primary" },
                  { name: "Body Contouring", count: 22, color: "bg-secondary" }
                ].map((service, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-poppins text-sm">{service.name}</p>
                      <p className="font-poppins text-sm font-medium">{service.count}</p>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${service.color}`}
                        style={{ width: `${(service.count / 45) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sample Report */}
        <Card className="shadow-elegant">
          <CardContent className="pt-6">
            <div className="border-2 border-dashed border-border p-8 rounded-lg bg-secondary/20">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-2">
                  Kendi Beauty Lounge & Wellness
                </h2>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  Monthly Report - September 2025
                </h3>
                <p className="font-poppins text-sm text-muted-foreground">
                  Generated on: October 1, 2025
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-poppins text-sm text-muted-foreground">Total Appointments</p>
                    <p className="font-playfair text-2xl font-bold text-foreground">120</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-poppins text-sm text-muted-foreground">New Patients</p>
                    <p className="font-playfair text-2xl font-bold text-foreground">45</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="font-poppins text-sm text-muted-foreground">Prescriptions Issued</p>
                    <p className="font-playfair text-2xl font-bold text-foreground">95</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-poppins text-sm text-muted-foreground">Most Popular Service</p>
                    <p className="font-poppins text-lg font-medium text-foreground">Facial Rejuvenation</p>
                    <p className="font-poppins text-sm text-muted-foreground">45 bookings</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-poppins text-sm text-muted-foreground">Revenue</p>
                    <p className="font-playfair text-2xl font-bold text-foreground">₱125,000</p>
                    <p className="font-poppins text-sm text-green-600">+15% vs last month</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="font-poppins text-sm text-muted-foreground">Patient Satisfaction</p>
                    <p className="font-playfair text-2xl font-bold text-foreground">98%</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-playfair text-lg font-semibold mb-3">Key Insights</h4>
                <ul className="space-y-2 font-poppins text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Facial treatments remain the most requested service with 37.5% of total bookings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Patient retention rate improved by 8% compared to previous month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Weekend appointments are fully booked for the next 3 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Gluta Drip treatments show highest profit margin at 45%</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
