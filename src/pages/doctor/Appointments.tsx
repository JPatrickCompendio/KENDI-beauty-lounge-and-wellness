import { useState } from "react";
import { DashboardLayout } from "@/pages/doctor/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Plus, Search, Filter, CalendarIcon, X, Ban, User, FileText, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function Appointments() {
  const [activeTab, setActiveTab] = useState("all");
  const [filterStatus, setFilterStatus] = useState("today");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [rescheduleData, setRescheduleData] = useState({
    date: "",
    time: "",
    reason: "",
    notes: "",
    doctor: ""
  });
  const [cancelData, setCancelData] = useState({
    reason: "",
    notes: ""
  });

  const appointments = [
    {
      id: "APT-001",
      patient: "Angela Cruz",
      date: "Oct 28, 2025",
      time: "10:00 AM",
      service: "Facial Rejuvenation",
      aesthetician: "Dr. M. Dela Cruz",
      status: "Confirmed",
      isRescheduled: false
    },
    {
      id: "APT-002",
      patient: "Maria Santos",
      date: "Oct 28, 2025",
      time: "11:30 AM",
      service: "Gluta Drip",
      aesthetician: "Dr. J. Reyes",
      status: "Confirmed",
      isRescheduled: true,
      originalDate: "Oct 25, 2025",
      originalTime: "2:00 PM"
    },
    {
      id: "APT-003",
      patient: "John Reyes",
      date: "Oct 28, 2025",
      time: "2:00 PM",
      service: "Slimming Treatment",
      aesthetician: "Dr. M. Dela Cruz",
      status: "Pending",
      isRescheduled: false
    },
    {
      id: "APT-004",
      patient: "Sofia Garcia",
      date: "Oct 28, 2025",
      time: "9:00 AM",
      service: "Body Contouring",
      aesthetician: "Dr. A. Santos",
      status: "Confirmed",
      isRescheduled: true,
      originalDate: "Oct 27, 2025",
      originalTime: "3:00 PM"
    },
    {
      id: "APT-005",
      patient: "Luis Hernandez",
      date: "Oct 29, 2025",
      time: "1:00 PM",
      service: "Facial Treatment",
      aesthetician: "Dr. M. Dela Cruz",
      status: "Completed",
      isRescheduled: false
    },
    {
      id: "APT-006",
      patient: "Patricia Ong",
      date: "Oct 30, 2025",
      time: "10:30 AM",
      service: "Botox & Fillers",
      aesthetician: "Dr. R. Flores",
      status: "Confirmed",
      isRescheduled: true,
      originalDate: "Oct 28, 2025",
      originalTime: "4:00 PM"
    }
  ];

  const handleNewAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Appointment created successfully!");
  };

  // Available time slots
  const availableTimes = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
  ];

  // Available doctors
  const availableDoctors = [
    "Dr. M. Dela Cruz",
    "Dr. J. Reyes",
    "Dr. A. Santos",
    "Dr. R. Flores",
    "Nurse A. Santos",
    "Nurse L. Cruz"
  ];

  // Cancellation reasons
  const cancellationReasons = [
    "Patient Requested",
    "Doctor Unavailable",
    "Emergency",
    "Equipment Issue",
    "Clinic Closure",
    "Weather Conditions",
    "Other"
  ];

  const handleReschedule = (appointment: any) => {
    setSelectedAppointment(appointment);
    setRescheduleData({
      date: "",
      time: "",
      reason: "",
      notes: "",
      doctor: appointment.aesthetician
    });
    setShowRescheduleModal(true);
  };

  const handleSubmitReschedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rescheduleData.date || !rescheduleData.time) {
      toast.error("Please select a date and time");
      return;
    }
    toast.success(`Appointment ${selectedAppointment?.id} rescheduled successfully!`);
    setShowRescheduleModal(false);
    setRescheduleData({ date: "", time: "", reason: "", notes: "", doctor: "" });
    setSelectedAppointment(null);
  };

  const handleCancel = (appointment: any) => {
    setSelectedAppointment(appointment);
    setCancelData({
      reason: "",
      notes: ""
    });
    setShowCancelModal(true);
  };

  const handleSubmitCancel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cancelData.reason) {
      toast.error("Please provide a reason for cancellation");
      return;
    }
    toast.success(`Appointment ${selectedAppointment?.id} cancelled successfully!`);
    setShowCancelModal(false);
    setCancelData({ reason: "", notes: "" });
    setSelectedAppointment(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Completed":
        return "bg-blue-100 text-blue-700";
      case "Canceled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Filter appointments based on activeTab and filterStatus
  const filteredAppointments = appointments.filter((apt) => {
    // First filter by tab (All, Rescheduled)
    if (activeTab === "rescheduled" && !apt.isRescheduled) {
      return false;
    }
    if (activeTab === "all" && apt.isRescheduled) {
      // For "all" tab, we still show rescheduled but can filter by date
    }

    // Then filter by date range
    if (filterStatus === "today") {
      return apt.date === "Oct 28, 2025";
    }
    if (filterStatus === "week") {
      return ["Oct 27, 2025", "Oct 28, 2025", "Oct 29, 2025", "Oct 30, 2025", "Oct 31, 2025", "Nov 1, 2025", "Nov 2, 2025"].includes(apt.date);
    }
    if (filterStatus === "month") {
      return apt.date.includes("Oct");
    }
    if (filterStatus === "year") {
      return apt.date.includes("2025");
    }
    return true;
  }).filter((apt) => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        apt.patient.toLowerCase().includes(query) ||
        apt.service.toLowerCase().includes(query) ||
        apt.id.toLowerCase().includes(query) ||
        apt.aesthetician.toLowerCase().includes(query)
      );
    }
    return true;
  });

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-playfair text-4xl font-bold text-foreground mb-2">Appointments</h1>
            <p className="font-poppins text-muted-foreground">Manage your clinic appointments</p>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-poppins bg-primary text-white shadow-elegant hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                New Appointment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl">Create Appointment</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleNewAppointment} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="patient" className="font-poppins">Patient Name</Label>
                  <Input id="patient" placeholder="Select or enter patient name" className="font-poppins" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="font-poppins">Date</Label>
                    <Input id="date" type="date" className="font-poppins" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="font-poppins">Time</Label>
                    <Input id="time" type="time" className="font-poppins" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="font-poppins">Service Type</Label>
                  <Select>
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="facial">Facial Rejuvenation</SelectItem>
                      <SelectItem value="slimming">Slimming Treatment</SelectItem>
                      <SelectItem value="drip">Gluta Drip</SelectItem>
                      <SelectItem value="contouring">Body Contouring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aesthetician" className="font-poppins">Assigned Aesthetician</Label>
                  <Select>
                    <SelectTrigger id="aesthetician">
                      <SelectValue placeholder="Select aesthetician" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dela-cruz">Dr. M. Dela Cruz</SelectItem>
                      <SelectItem value="reyes">Dr. J. Reyes</SelectItem>
                      <SelectItem value="santos">Dr. A. Santos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full font-poppins bg-primary text-white hover:bg-primary/90">
                  Create Appointment
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Tab Filters */}
        <Card className="mb-6 shadow-elegant">
          <CardContent className="pt-6">
            <div className="flex flex-col gap-4">
              {/* Tab Buttons */}
              <div className="flex flex-wrap gap-2 border-b border-border pb-4">
                <Button
                  variant={activeTab === "all" ? "default" : "ghost"}
                  onClick={() => setActiveTab("all")}
                  className={`font-poppins transition-all ${
                    activeTab === "all"
                      ? "bg-[#ab817a] text-white hover:bg-[#ba9993]"
                      : "hover:bg-secondary"
                  }`}
                >
                  All Appointments
                </Button>
                <Button
                  variant={activeTab === "rescheduled" ? "default" : "ghost"}
                  onClick={() => setActiveTab("rescheduled")}
                  className={`font-poppins transition-all ${
                    activeTab === "rescheduled"
                      ? "bg-[#ab817a] text-white hover:bg-[#ba9993]"
                      : "hover:bg-secondary"
                  }`}
                >
                  Rescheduled
                  {appointments.filter(apt => apt.isRescheduled).length > 0 && (
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs">
                      {appointments.filter(apt => apt.isRescheduled).length}
                    </span>
                  )}
                </Button>
              </div>

              {/* Search and Date Filter */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search appointments..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 font-poppins"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appointments List - Refactored for Today filter to match Dashboard */}
        <div className="space-y-2">
          {filteredAppointments.map((apt) => (
            <div
              key={apt.id}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/30 transition-colors gap-2"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-poppins font-semibold text-lg text-foreground">{apt.patient}</p>
                  {apt.isRescheduled && (
                    <Badge className="bg-orange-100 text-orange-700 border border-orange-200 font-poppins text-xs">
                      Rescheduled
                    </Badge>
                  )}
                </div>
                <p className="font-poppins text-sm text-muted-foreground mb-1">{apt.service}</p>
                <div className="flex flex-wrap gap-4 mb-1">
                  <span className="font-poppins text-xs text-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {apt.time}
                  </span>
                  <span className="font-poppins text-xs text-foreground">30 min</span>
                  {apt.isRescheduled && apt.originalDate && (
                    <span className="font-poppins text-xs text-muted-foreground italic">
                      Originally: {apt.originalDate} at {apt.originalTime}
                    </span>
                  )}
                  <span className={`font-poppins text-xs px-2 py-1 rounded ${apt.status === "Confirmed" ? "bg-green-200 text-green-800" : apt.status === "Pending" ? "bg-yellow-200 text-yellow-800" : apt.status === "Completed" ? "bg-blue-200 text-blue-800" : "bg-gray-200 text-gray-800"}`}>{apt.status.toLowerCase()}</span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                {(apt.status === "Confirmed" || apt.status === "Pending") && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-poppins hover:bg-[#ab817a] hover:text-white transition-colors border-[#ab817a]"
                      onClick={() => handleReschedule(apt)}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Reschedule
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-poppins hover:bg-red-600 hover:text-white transition-colors border-red-500 text-red-600"
                      onClick={() => handleCancel(apt)}
                    >
                      <X className="mr-2 h-4 w-4" />
                      Cancel
                    </Button>
                  </>
                )}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="default"
                      size="sm"
                      className="font-poppins bg-primary text-white hover:bg-primary/80"
                      onClick={() => setSelectedRecord(apt)}
                    >
                      View Record
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="font-playfair text-2xl">Patient Details</DialogTitle>
                    </DialogHeader>
                    {selectedRecord && (
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="font-poppins text-sm text-muted-foreground">Full Name</p>
                            <p className="font-poppins font-medium">{selectedRecord.patient}</p>
                          </div>
                          <div>
                            <p className="font-poppins text-sm text-muted-foreground">Service</p>
                            <p className="font-poppins font-medium">{selectedRecord.service}</p>
                          </div>
                          <div>
                            <p className="font-poppins text-sm text-muted-foreground">Date</p>
                            <p className="font-poppins font-medium">{selectedRecord.date}</p>
                          </div>
                          <div>
                            <p className="font-poppins text-sm text-muted-foreground">Time</p>
                            <p className="font-poppins font-medium">{selectedRecord.time}</p>
                          </div>
                          <div>
                            <p className="font-poppins text-sm text-muted-foreground">Aesthetician</p>
                            <p className="font-poppins font-medium">{selectedRecord.aesthetician}</p>
                          </div>
                          <div>
                            <p className="font-poppins text-sm text-muted-foreground">Status</p>
                            <span className={`px-3 py-1 rounded-full text-xs font-poppins font-medium ${getStatusColor(selectedRecord.status)}`}>{selectedRecord.status}</span>
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

        {/* Reschedule Modal */}
        <Dialog open={showRescheduleModal} onOpenChange={setShowRescheduleModal}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-playfair text-2xl flex items-center gap-2">
                <Calendar className="h-6 w-6 text-[#ab817a]" />
                Reschedule Appointment
              </DialogTitle>
              <DialogDescription className="font-poppins">
                {selectedAppointment && (
                  <div className="mt-2">
                    <p className="font-semibold text-foreground">Appointment ID: {selectedAppointment.id}</p>
                    <p className="text-sm text-muted-foreground">Patient: {selectedAppointment.patient}</p>
                    <p className="text-sm text-muted-foreground">Service: {selectedAppointment.service}</p>
                    <p className="text-sm text-muted-foreground">Current Date: {selectedAppointment.date} at {selectedAppointment.time}</p>
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmitReschedule} className="space-y-6">
              {/* Date Picker */}
              <div className="space-y-2">
                <Label htmlFor="reschedule-date" className="font-poppins font-medium flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-[#ab817a]" />
                  Select New Date <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="reschedule-date"
                  type="date"
                  value={rescheduleData.date}
                  onChange={(e) => setRescheduleData(prev => ({ ...prev, date: e.target.value }))}
                  className="font-poppins"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              {/* Time Selector */}
              <div className="space-y-2">
                <Label htmlFor="reschedule-time" className="font-poppins font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#ab817a]" />
                  Select New Time <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={rescheduleData.time}
                  onValueChange={(value) => setRescheduleData(prev => ({ ...prev, time: value }))}
                  disabled={!rescheduleData.date}
                >
                  <SelectTrigger id="reschedule-time" className="font-poppins">
                    <SelectValue placeholder={rescheduleData.date ? "Select time" : "Select date first"} />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTimes.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Doctor Selection */}
              <div className="space-y-2">
                <Label htmlFor="reschedule-doctor" className="font-poppins font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-[#ab817a]" />
                  Assign Doctor/Aesthetician
                </Label>
                <Select
                  value={rescheduleData.doctor}
                  onValueChange={(value) => setRescheduleData(prev => ({ ...prev, doctor: value }))}
                >
                  <SelectTrigger id="reschedule-doctor" className="font-poppins">
                    <SelectValue placeholder="Select doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableDoctors.map((doctor) => (
                      <SelectItem key={doctor} value={doctor}>
                        {doctor}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Reason for Rescheduling */}
              <div className="space-y-2">
                <Label htmlFor="reschedule-reason" className="font-poppins font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#ab817a]" />
                  Reason for Rescheduling
                </Label>
                <Textarea
                  id="reschedule-reason"
                  placeholder="Please provide a reason for rescheduling this appointment..."
                  value={rescheduleData.reason}
                  onChange={(e) => setRescheduleData(prev => ({ ...prev, reason: e.target.value }))}
                  className="font-poppins"
                  rows={3}
                />
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="reschedule-notes" className="font-poppins font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#ab817a]" />
                  Additional Notes
                </Label>
                <Textarea
                  id="reschedule-notes"
                  placeholder="Any additional notes or instructions..."
                  value={rescheduleData.notes}
                  onChange={(e) => setRescheduleData(prev => ({ ...prev, notes: e.target.value }))}
                  className="font-poppins"
                  rows={3}
                />
              </div>

              <DialogFooter className="gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowRescheduleModal(false);
                    setRescheduleData({ date: "", time: "", reason: "", notes: "", doctor: "" });
                    setSelectedAppointment(null);
                  }}
                  className="font-poppins"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="font-poppins bg-gradient-to-r from-[#ab817a] to-[#ba9993] hover:from-[#ba9993] hover:to-[#ab817a] text-white"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Confirm Reschedule
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Cancel Appointment Modal */}
        <Dialog open={showCancelModal} onOpenChange={setShowCancelModal}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-playfair text-2xl flex items-center gap-2">
                <Ban className="h-6 w-6 text-red-600" />
                Cancel Appointment
              </DialogTitle>
              <DialogDescription className="font-poppins">
                {selectedAppointment && (
                  <div className="mt-2">
                    <p className="font-semibold text-foreground">Appointment ID: {selectedAppointment.id}</p>
                    <p className="text-sm text-muted-foreground">Patient: {selectedAppointment.patient}</p>
                    <p className="text-sm text-muted-foreground">Service: {selectedAppointment.service}</p>
                    <p className="text-sm text-muted-foreground">Scheduled Date: {selectedAppointment.date} at {selectedAppointment.time}</p>
                    <p className="text-sm text-muted-foreground">Provider: {selectedAppointment.aesthetician}</p>
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmitCancel} className="space-y-6">
              {/* Reason for Cancellation */}
              <div className="space-y-2">
                <Label htmlFor="cancel-reason" className="font-poppins font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  Reason for Cancellation <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={cancelData.reason}
                  onValueChange={(value) => setCancelData(prev => ({ ...prev, reason: value }))}
                  required
                >
                  <SelectTrigger id="cancel-reason" className="font-poppins">
                    <SelectValue placeholder="Select reason" />
                  </SelectTrigger>
                  <SelectContent>
                    {cancellationReasons.map((reason) => (
                      <SelectItem key={reason} value={reason}>
                        {reason}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="cancel-notes" className="font-poppins font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-red-600" />
                  Additional Notes
                </Label>
                <Textarea
                  id="cancel-notes"
                  placeholder="Please provide additional details about the cancellation..."
                  value={cancelData.notes}
                  onChange={(e) => setCancelData(prev => ({ ...prev, notes: e.target.value }))}
                  className="font-poppins"
                  rows={4}
                />
              </div>

              {/* Warning Message */}
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-poppins font-semibold text-red-800 mb-1">Cancellation Notice</p>
                    <p className="font-poppins text-sm text-red-700">
                      This action will cancel the appointment. The patient will be notified of the cancellation. 
                      Please ensure you have a valid reason before proceeding.
                    </p>
                  </div>
                </div>
              </div>

              <DialogFooter className="gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowCancelModal(false);
                    setCancelData({ reason: "", notes: "" });
                    setSelectedAppointment(null);
                  }}
                  className="font-poppins"
                >
                  Keep Appointment
                </Button>
                <Button
                  type="submit"
                  className="font-poppins bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
                >
                  <Ban className="mr-2 h-4 w-4" />
                  Confirm Cancellation
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
}
