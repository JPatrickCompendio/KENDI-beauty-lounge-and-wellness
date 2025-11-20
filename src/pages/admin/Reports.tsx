import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Download, FileText, Calendar } from "lucide-react";
import { ExportReportModal } from "@/components/ExportReportModal";
import { AdminLayout } from "@/components/AdminLayout";

const COLORS = ["#C4A69F", "#D4AF37", "#F7D4D4", "#EDEDED"];

const incomeData = {
  Baliuag: [
    { month: "Jan", income: 125000 },
    { month: "Feb", income: 142000 },
    { month: "Mar", income: 138000 },
    { month: "Apr", income: 155000 },
  ],
  Malolos: [
    { month: "Jan", income: 98000 },
    { month: "Feb", income: 112000 },
    { month: "Mar", income: 105000 },
    { month: "Apr", income: 128000 },
  ],
};

const appointmentData = {
  Baliuag: [
    { month: "Jan", appointments: 145 },
    { month: "Feb", appointments: 168 },
    { month: "Mar", appointments: 152 },
    { month: "Apr", appointments: 180 },
  ],
  Malolos: [
    { month: "Jan", appointments: 98 },
    { month: "Feb", appointments: 112 },
    { month: "Mar", appointments: 105 },
    { month: "Apr", appointments: 135 },
  ],
};

const serviceData = {
  Baliuag: [
    { name: "Facial", value: 35 },
    { name: "Slimming", value: 25 },
    { name: "Drip", value: 20 },
    { name: "Wellness", value: 20 },
  ],
  Malolos: [
    { name: "Facial", value: 40 },
    { name: "Slimming", value: 22 },
    { name: "Drip", value: 18 },
    { name: "Wellness", value: 20 },
  ],
};

const staffPerformance = {
  Baliuag: [
    { name: "Dr. Santos", appointments: 85, rating: 4.8 },
    { name: "Dr. Reyes", appointments: 72, rating: 4.6 },
    { name: "Aesthetician Cruz", appointments: 95, rating: 4.9 },
  ],
  Malolos: [
    { name: "Dr. Garcia", appointments: 68, rating: 4.7 },
    { name: "Dr. Torres", appointments: 55, rating: 4.5 },
    { name: "Aesthetician Lopez", appointments: 78, rating: 4.8 },
  ],
};

const feedbackRatings = {
  Baliuag: [
    { rating: "5 Stars", value: 65 },
    { rating: "4 Stars", value: 25 },
    { rating: "3 Stars", value: 7 },
    { rating: "2 Stars", value: 2 },
    { rating: "1 Star", value: 1 },
  ],
  Malolos: [
    { rating: "5 Stars", value: 58 },
    { rating: "4 Stars", value: 28 },
    { rating: "3 Stars", value: 10 },
    { rating: "2 Stars", value: 3 },
    { rating: "1 Star", value: 1 },
  ],
};

// Example comprehensive report data by month and year
const generateReportData = (branch: "Baliuag" | "Malolos", month?: string, year?: string) => {
  const baseData = {
    appointments: [
      { id: "APT-001", patient: "Maria Santos", service: "Facial Rejuvenation", date: "2025-01-15", time: "10:00 AM", amount: 2500, status: "Completed", doctor: "Dr. M. Dela Cruz" },
      { id: "APT-002", patient: "John Reyes", service: "Gluta Drip", date: "2025-01-16", time: "2:00 PM", amount: 3500, status: "Completed", doctor: "Dr. J. Reyes" },
      { id: "APT-003", patient: "Sofia Garcia", service: "Body Contouring", date: "2025-01-18", time: "11:00 AM", amount: 5000, status: "Completed", doctor: "Dr. A. Santos" },
      { id: "APT-004", patient: "Luis Hernandez", service: "Botox & Fillers", date: "2025-01-20", time: "3:00 PM", amount: 8000, status: "Completed", doctor: "Dr. R. Flores" },
      { id: "APT-005", patient: "Patricia Ong", service: "Hydra Facial", date: "2025-01-22", time: "9:00 AM", amount: 1199, status: "Completed", doctor: "Nurse A. Santos" },
      { id: "APT-006", patient: "Angela Cruz", service: "Slimming Treatment", date: "2025-01-25", time: "1:00 PM", amount: 4000, status: "Completed", doctor: "Dr. M. Dela Cruz" },
      { id: "APT-007", patient: "David Lee", service: "Carbon Laser Facial", date: "2025-01-28", time: "4:00 PM", amount: 1399, status: "Completed", doctor: "Nurse L. Cruz" },
    ],
    services: [
      { name: "Facial Rejuvenation", count: 45, revenue: 112500, avgRating: 4.8 },
      { name: "Gluta Drip", count: 38, revenue: 133000, avgRating: 4.9 },
      { name: "Body Contouring", count: 32, revenue: 160000, avgRating: 4.7 },
      { name: "Botox & Fillers", count: 28, revenue: 224000, avgRating: 4.8 },
      { name: "Hydra Facial", count: 52, revenue: 62348, avgRating: 4.6 },
      { name: "Slimming Treatment", count: 41, revenue: 164000, avgRating: 4.7 },
    ],
    staff: [
      { name: "Dr. M. Dela Cruz", appointments: 85, revenue: 212500, rating: 4.8 },
      { name: "Dr. J. Reyes", appointments: 72, revenue: 252000, rating: 4.9 },
      { name: "Dr. A. Santos", appointments: 68, revenue: 340000, rating: 4.7 },
      { name: "Dr. R. Flores", appointments: 55, revenue: 440000, rating: 4.8 },
      { name: "Nurse A. Santos", appointments: 95, revenue: 113905, rating: 4.6 },
      { name: "Nurse L. Cruz", appointments: 78, revenue: 109122, rating: 4.7 },
    ],
    payments: [
      { id: "PAY-001", appointment: "APT-001", patient: "Maria Santos", amount: 2500, method: "Cash", date: "2025-01-15", status: "Paid" },
      { id: "PAY-002", appointment: "APT-002", patient: "John Reyes", amount: 3500, method: "GCash", date: "2025-01-16", status: "Paid" },
      { id: "PAY-003", appointment: "APT-003", patient: "Sofia Garcia", amount: 5000, method: "Credit Card", date: "2025-01-18", status: "Paid" },
      { id: "PAY-004", appointment: "APT-004", patient: "Luis Hernandez", amount: 8000, method: "Bank Transfer", date: "2025-01-20", status: "Paid" },
      { id: "PAY-005", appointment: "APT-005", patient: "Patricia Ong", amount: 1199, method: "Cash", date: "2025-01-22", status: "Paid" },
    ],
    summary: {
      totalAppointments: 340,
      totalRevenue: 756475,
      totalPatients: 287,
      averageRating: 4.75,
      topService: "Hydra Facial",
      topStaff: "Nurse A. Santos"
    }
  };

  // Filter by month/year if provided
  let filteredData = { ...baseData };
  if (month || year) {
    // In a real app, this would filter actual data
    // For prototype, we'll just return the base data
    filteredData = baseData;
  }

  return filteredData;
};

export default function Reports() {
  const [branch, setBranch] = useState<"Baliuag" | "Malolos">("Baliuag");
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [reportType, setReportType] = useState("");
  const [generateReportModalOpen, setGenerateReportModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [generatedReport, setGeneratedReport] = useState<any>(null);

  const currentIncomeData = incomeData[branch];
  const currentAppointmentData = appointmentData[branch];
  const currentServiceData = serviceData[branch];
  const currentStaffData = staffPerformance[branch];
  const currentFeedbackData = feedbackRatings[branch];

  const totalIncome = currentIncomeData.reduce((sum, d) => sum + d.income, 0);
  const totalAppointments = currentAppointmentData.reduce((sum, d) => sum + d.appointments, 0);
  const topService = currentServiceData.reduce((max, s) => s.value > max.value ? s : max, currentServiceData[0]);
  const topStaff = currentStaffData.reduce((max, s) => s.rating > max.rating ? s : max, currentStaffData[0]);

  const handleExport = (type: string) => {
    setReportType(type);
    setExportModalOpen(true);
  };

  const getExportData = () => {
    switch (reportType) {
      case "income":
        return currentIncomeData.map(d => ({ Month: d.month, Income: `₱${d.income.toLocaleString()}`, Branch: branch }));
      case "appointments":
        return currentAppointmentData.map(d => ({ Month: d.month, Appointments: d.appointments, Branch: branch }));
      case "services":
        return currentServiceData.map(d => ({ Service: d.name, Percentage: `${d.value}%`, Branch: branch }));
      case "staff":
        return currentStaffData.map(d => ({ Staff: d.name, Appointments: d.appointments, Rating: d.rating, Branch: branch }));
      case "feedback":
        return currentFeedbackData.map(d => ({ Rating: d.rating, Count: d.value, Percentage: `${d.value}%`, Branch: branch }));
      case "user-management":
        return [
          { User: "Admin User", Role: "Administrator", Status: "Active", Last_Login: "2025-01-20", Branch: branch },
          { User: "Dr. Santos", Role: "Doctor", Status: "Active", Last_Login: "2025-01-19", Branch: branch },
          { User: "Receptionist A", Role: "Staff", Status: "Active", Last_Login: "2025-01-20", Branch: branch },
          { User: "Manager B", Role: "Manager", Status: "Active", Last_Login: "2025-01-18", Branch: branch },
        ];
      default:
        return [];
    }
  };

  const handleGenerateReport = () => {
    const reportData = generateReportData(branch, selectedMonth, selectedYear);
    setGeneratedReport(reportData);
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = ["2025", "2024", "2023"];

  return (
    <AdminLayout>
      <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-heading font-bold">Reports & Analytics</h1>
        <div className="flex items-center gap-4">
          <Button 
            onClick={() => setGenerateReportModalOpen(true)}
            className="bg-[#ab817a] hover:bg-[#ba9993] text-white"
          >
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
          <Select value={branch} onValueChange={(v) => setBranch(v as "Baliuag" | "Malolos")}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Baliuag">Baliuag Branch</SelectItem>
              <SelectItem value="Malolos">Malolos Branch</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Total Appointments</p>
          <p className="text-3xl font-bold text-primary">{totalAppointments}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Total Income</p>
          <p className="text-3xl font-bold text-gold">₱{totalIncome.toLocaleString()}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Top Service</p>
          <p className="text-3xl font-bold">{topService.name}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Top Staff</p>
          <p className="text-lg font-bold">{topStaff.name}</p>
          <p className="text-sm text-muted-foreground">Rating: {topStaff.rating}</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-heading font-semibold">Monthly Income</h3>
            <Button size="sm" variant="outline" onClick={() => handleExport("income")}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={currentIncomeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#D4AF37" strokeWidth={2} name="Income (₱)" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-heading font-semibold">Appointment Trends</h3>
            <Button size="sm" variant="outline" onClick={() => handleExport("appointments")}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={currentAppointmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="appointments" fill="#C4A69F" name="Appointments" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-heading font-semibold">Most Availed Services</h3>
            <Button size="sm" variant="outline" onClick={() => handleExport("services")}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={currentServiceData} cx="50%" cy="50%" labelLine={false} label={(entry) => `${entry.name}: ${entry.value}%`} outerRadius={100} fill="#8884d8" dataKey="value">
                {currentServiceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-heading font-semibold">Staff Performance</h3>
            <Button size="sm" variant="outline" onClick={() => handleExport("staff")}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={currentStaffData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="appointments" fill="#C4A69F" name="Appointments" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-heading font-semibold">Feedback Rating Summary</h3>
            <Button size="sm" variant="outline" onClick={() => handleExport("feedback")}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={currentFeedbackData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#8884d8" paddingAngle={5} dataKey="value" label={(entry) => `${entry.rating}: ${entry.value}%`}>
                {currentFeedbackData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-heading font-semibold">User Management Report</h3>
            <Button size="sm" variant="outline" onClick={() => handleExport("user-management")}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          <p className="text-muted-foreground">Export detailed user access, roles, and activity logs.</p>
        </Card>
      </div>

      <ExportReportModal
        open={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        reportType={reportType === "user-management" ? "User Management Report" : `${reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report`}
        branch={branch}
        data={getExportData()}
        totals={reportType === "income" ? { total_income: `₱${totalIncome.toLocaleString()}` } : undefined}
      />

      {/* Generate Report Modal */}
      <Dialog open={generateReportModalOpen} onOpenChange={setGenerateReportModalOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Generate Comprehensive Report
            </DialogTitle>
            <DialogDescription>
              Filter and generate a detailed report by selecting month and/or year
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Filter Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-secondary/30 rounded-lg">
              <div className="space-y-2">
                <Label htmlFor="month" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Filter by Month
                </Label>
                <Select value={selectedMonth || "all"} onValueChange={(value) => setSelectedMonth(value === "all" ? "" : value)}>
                  <SelectTrigger id="month">
                    <SelectValue placeholder="Select month (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Months</SelectItem>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="year" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Filter by Year
                </Label>
                <Select value={selectedYear || "all"} onValueChange={(value) => setSelectedYear(value === "all" ? "" : value)}>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Select year (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button 
                  onClick={handleGenerateReport}
                  className="w-full bg-[#ab817a] hover:bg-[#ba9993] text-white"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </div>

            {/* Generated Report Display */}
            {generatedReport && (
              <div className="space-y-6">
                {/* Summary Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="p-4">
                    <p className="text-sm text-muted-foreground">Total Appointments</p>
                    <p className="text-2xl font-bold text-primary">{generatedReport.summary.totalAppointments}</p>
                  </Card>
                  <Card className="p-4">
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold text-gold">₱{generatedReport.summary.totalRevenue.toLocaleString()}</p>
                  </Card>
                  <Card className="p-4">
                    <p className="text-sm text-muted-foreground">Total Patients</p>
                    <p className="text-2xl font-bold">{generatedReport.summary.totalPatients}</p>
                  </Card>
                  <Card className="p-4">
                    <p className="text-sm text-muted-foreground">Average Rating</p>
                    <p className="text-2xl font-bold">{generatedReport.summary.averageRating}/5.0</p>
                  </Card>
                </div>

                {/* Appointments Table */}
                <Card>
                  <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold">Appointments</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Patient</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Doctor</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {generatedReport.appointments.map((apt: any) => (
                          <TableRow key={apt.id}>
                            <TableCell className="font-medium">{apt.id}</TableCell>
                            <TableCell>{apt.patient}</TableCell>
                            <TableCell>{apt.service}</TableCell>
                            <TableCell>{apt.date}</TableCell>
                            <TableCell>{apt.time}</TableCell>
                            <TableCell>₱{apt.amount.toLocaleString()}</TableCell>
                            <TableCell>{apt.doctor}</TableCell>
                            <TableCell>
                              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                {apt.status}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>

                {/* Services Performance */}
                <Card>
                  <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold">Services Performance</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Service Name</TableHead>
                          <TableHead>Count</TableHead>
                          <TableHead>Revenue</TableHead>
                          <TableHead>Avg Rating</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {generatedReport.services.map((service: any, idx: number) => (
                          <TableRow key={idx}>
                            <TableCell className="font-medium">{service.name}</TableCell>
                            <TableCell>{service.count}</TableCell>
                            <TableCell>₱{service.revenue.toLocaleString()}</TableCell>
                            <TableCell>{service.avgRating}/5.0</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>

                {/* Staff Performance */}
                <Card>
                  <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold">Staff Performance</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Staff Name</TableHead>
                          <TableHead>Appointments</TableHead>
                          <TableHead>Revenue</TableHead>
                          <TableHead>Rating</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {generatedReport.staff.map((staff: any, idx: number) => (
                          <TableRow key={idx}>
                            <TableCell className="font-medium">{staff.name}</TableCell>
                            <TableCell>{staff.appointments}</TableCell>
                            <TableCell>₱{staff.revenue.toLocaleString()}</TableCell>
                            <TableCell>{staff.rating}/5.0</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>

                {/* Payments */}
                <Card>
                  <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold">Payment Records</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Payment ID</TableHead>
                          <TableHead>Appointment</TableHead>
                          <TableHead>Patient</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Method</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {generatedReport.payments.map((payment: any) => (
                          <TableRow key={payment.id}>
                            <TableCell className="font-medium">{payment.id}</TableCell>
                            <TableCell>{payment.appointment}</TableCell>
                            <TableCell>{payment.patient}</TableCell>
                            <TableCell>₱{payment.amount.toLocaleString()}</TableCell>
                            <TableCell>{payment.method}</TableCell>
                            <TableCell>{payment.date}</TableCell>
                            <TableCell>
                              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                                {payment.status}
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setGenerateReportModalOpen(false);
              setGeneratedReport(null);
              setSelectedMonth("");
              setSelectedYear("");
            }}>
              Close
            </Button>
            {generatedReport && (
              <Button 
                onClick={() => {
                  // Export functionality can be added here
                  setExportModalOpen(true);
                  setReportType("comprehensive");
                }}
                className="bg-[#ab817a] hover:bg-[#ba9993] text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </div>
    </AdminLayout>
  );
}
