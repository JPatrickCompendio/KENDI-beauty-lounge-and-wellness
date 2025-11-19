import { DashboardLayout } from "@/pages/doctor/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart3, TrendingUp, Users, Calendar, FileText, Download } from "lucide-react";
import { toast } from "sonner";
import { useState, useRef } from "react";
import { saveAs } from "file-saver";

export default function Reports() {
  const [month, setMonth] = useState("october");
  const [reportType, setReportType] = useState("all");
  const sampleReportRef = useRef<HTMLDivElement>(null);

  const handleExport = (format: string) => {
    if (format === "CSV") {
      // Simple CSV export for metrics
      let data = "Metric,Value\n";
      if (filteredMetrics.patients !== null) data += `Patients,${filteredMetrics.patients}\n`;
      if (filteredMetrics.appointments !== null) data += `Appointments,${filteredMetrics.appointments}\n`;
      if (filteredMetrics.prescriptions !== null) data += `Prescriptions,${filteredMetrics.prescriptions}\n`;
      if (filteredMetrics.revenue !== null) data += `Revenue,${filteredMetrics.revenue}\n`;
      const blob = new Blob([data], { type: "text/csv;charset=utf-8" });
      saveAs(blob, `report-${month}-${reportType}.csv`);
      toast.success("CSV exported!");
    } else if (format === "PDF") {
      import("jspdf").then(jsPDFModule => {
        const jsPDF = jsPDFModule.default;
        // Set PDF to landscape
        const doc = new jsPDF({ orientation: "landscape" });
        // Use html2canvas to render the sample report div as image for PDF
        import("html2canvas").then(html2canvasModule => {
          const html2canvas = html2canvasModule.default;
          if (sampleReportRef.current) {
            html2canvas(sampleReportRef.current).then(canvas => {
              const imgData = canvas.toDataURL("image/png");
              const imgProps = doc.getImageProperties(imgData);
              const pdfWidth = doc.internal.pageSize.getWidth();
              const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
              // Calculate scale to fit content in landscape PDF
              const pageWidth = doc.internal.pageSize.getWidth();
              const pageHeight = doc.internal.pageSize.getHeight();
              let imgWidth = canvas.width;
              let imgHeight = canvas.height;
              // Scale image to fit within PDF page with some margin
              const margin = 10;
              const scale = Math.min((pageWidth - margin * 2) / imgWidth, (pageHeight - margin * 2) / imgHeight);
              imgWidth *= scale;
              imgHeight *= scale;
              const x = (pageWidth - imgWidth) / 2;
              const y = (pageHeight - imgHeight) / 2;
              doc.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
              doc.save(`report-${month}-${reportType}.pdf`);
              toast.success("PDF exported!");
            });
          }
        });
      });
    }
  };

  // Filtered metrics and report data based on selected filters
  const filteredMetrics = {
    patients: reportType === "patients" || reportType === "all" ? (month === "october" ? 485 : month === "september" ? 473 : 490) : null,
    appointments: reportType === "appointments" || reportType === "all" ? (month === "october" ? 120 : month === "september" ? 110 : 130) : null,
    prescriptions: reportType === "prescriptions" || reportType === "all" ? (month === "october" ? 95 : month === "september" ? 90 : 100) : null,
    revenue: reportType === "revenue" || reportType === "all" ? (month === "october" ? "₱125K" : month === "september" ? "₱115K" : "₱135K") : null
  };

  return (
    <DashboardLayout>
      <div className="p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="min-w-0">
            <h1 className="font-playfair text-4xl font-bold text-foreground mb-2">Reports & Analytics</h1>
            <p className="font-poppins text-muted-foreground">Track performance and generate insights</p>
          </div>

          <div className="flex flex-wrap gap-2">
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
              <Select value={month} onValueChange={setMonth}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="september">September 2025</SelectItem>
                  <SelectItem value="october">October 2025</SelectItem>
                  <SelectItem value="november">November 2025</SelectItem>
                </SelectContent>
              </Select>

              <Select value={reportType} onValueChange={setReportType}>
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
          {filteredMetrics.patients !== null && (
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Users className="h-8 w-8 text-primary" />
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <p className="font-poppins text-sm text-muted-foreground">Total Patients</p>
                <p className="font-playfair text-3xl font-bold text-foreground">{filteredMetrics.patients}</p>
                <p className="font-poppins text-xs text-green-600 mt-1">+12% from last month</p>
              </CardContent>
            </Card>
          )}
          {filteredMetrics.appointments !== null && (
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Calendar className="h-8 w-8 text-accent" />
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <p className="font-poppins text-sm text-muted-foreground">Appointments</p>
                <p className="font-playfair text-3xl font-bold text-foreground">{filteredMetrics.appointments}</p>
                <p className="font-poppins text-xs text-green-600 mt-1">+8% from last month</p>
              </CardContent>
            </Card>
          )}
          {filteredMetrics.prescriptions !== null && (
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <FileText className="h-8 w-8 text-secondary" />
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <p className="font-poppins text-sm text-muted-foreground">Prescriptions</p>
                <p className="font-playfair text-3xl font-bold text-foreground">{filteredMetrics.prescriptions}</p>
                <p className="font-poppins text-xs text-green-600 mt-1">+5% from last month</p>
              </CardContent>
            </Card>
          )}
          {filteredMetrics.revenue !== null && (
            <Card className="shadow-elegant">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <p className="font-poppins text-sm text-muted-foreground">Revenue</p>
                <p className="font-playfair text-3xl font-bold text-foreground">{filteredMetrics.revenue}</p>
                <p className="font-poppins text-xs text-green-600 mt-1">+15% from last month</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="font-playfair">Monthly Appointments Trend</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Monthly Appointments Trend - Filter Accurate */}
              <div className="h-64 flex items-end justify-around gap-2">
                {(() => {
                  const monthMap = {
                    january: "Jan", february: "Feb", march: "Mar", april: "Apr", may: "May", june: "Jun", july: "Jul", august: "Aug", september: "Sep", october: "Oct", november: "Nov", december: "Dec"
                  };
                  const dataArr = [
                    { month: "Jan", value: 52, color: "bg-[#ab817a]" },
                    { month: "Feb", value: 60, color: "bg-gradient-gold" },
                    { month: "Mar", value: 70, color: "bg-primary" },
                    { month: "Apr", value: 80, color: "bg-secondary" },
                    { month: "May", value: 65, color: "bg-[#ab817a]" },
                    { month: "Jun", value: 78, color: "bg-gradient-gold" },
                    { month: "Jul", value: 85, color: "bg-primary" },
                    { month: "Aug", value: 92, color: "bg-secondary" },
                    { month: "Sep", value: 105, color: "bg-[#ab817a]" },
                    { month: "Oct", value: 120, color: "bg-gradient-gold" },
                    { month: "Nov", value: 110, color: "bg-primary" },
                    { month: "Dec", value: 130, color: "bg-secondary" }
                  ];
                  const selectedMonth = monthMap[month] || "Oct";
                  return dataArr.map((data, index, arr) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <span className={`font-poppins text-xs mb-1 ${data.month === selectedMonth ? "text-foreground font-bold" : "text-muted-foreground"}`}>{data.value}</span>
                      <div 
                        className={`w-8 rounded-t-lg shadow-lg border border-border flex items-end justify-center ${data.color} ${data.month === selectedMonth ? "opacity-100" : "opacity-40"}`}
                        style={{ height: `${(data.value / Math.max(...arr.map(d => d.value))) * 120}px`, minHeight: '16px' }}
                      >
                      </div>
                      <p className={`font-poppins text-xs mt-2 ${data.month === selectedMonth ? "text-foreground font-bold" : "text-muted-foreground"}`}>{data.month}</p>
                    </div>
                  ));
                })()}
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

        {/* Hidden Sample Report for Export */}
        <div ref={sampleReportRef} style={{ position: 'absolute', left: '-9999px', top: 0 }}>
          <div className="border-2 border-dashed border-border p-8 rounded-lg bg-secondary/20">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-2">
                Kendi Beauty Lounge & Wellness
              </h2>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                Monthly Report - {month.charAt(0).toUpperCase() + month.slice(1)} 2025
              </h3>
              <p className="font-poppins text-sm text-muted-foreground">
                Generated on: {new Date().toLocaleDateString()}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                {filteredMetrics.appointments !== null && (
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-poppins text-sm text-muted-foreground">Total Appointments</p>
                    <p className="font-playfair text-2xl font-bold text-foreground">{filteredMetrics.appointments}</p>
                  </div>
                )}
                {filteredMetrics.patients !== null && (
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-poppins text-sm text-muted-foreground">New Patients</p>
                    <p className="font-playfair text-2xl font-bold text-foreground">{filteredMetrics.patients}</p>
                  </div>
                )}
                {filteredMetrics.prescriptions !== null && (
                  <div className="border-l-4 border-secondary pl-4">
                    <p className="font-poppins text-sm text-muted-foreground">Prescriptions Issued</p>
                    <p className="font-playfair text-2xl font-bold text-foreground">{filteredMetrics.prescriptions}</p>
                  </div>
                )}
              </div>
              <div className="space-y-4">
                {filteredMetrics.revenue !== null && (
                  <div className="border-l-4 border-accent pl-4">
                    <p className="font-poppins text-sm text-muted-foreground">Revenue</p>
                    <p className="font-playfair text-2xl font-bold text-foreground">{filteredMetrics.revenue}</p>
                    <p className="font-poppins text-sm text-green-600">+15% vs last month</p>
                  </div>
                )}
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
        </div>
      </div>
    </DashboardLayout>
  );
}
