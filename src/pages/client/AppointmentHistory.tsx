import { ClientLayout } from "@/pages/client/ClientLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalendarIcon, Search, Calendar, Clock, User, FileText, MapPin, Phone, Mail, AlertCircle, X, Ban, Star, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

type Appointment = {
  id: string;
  date: string; // ISO
  service: string;
  provider: string;
  price: number;
  status: "Completed" | "Upcoming" | "Cancelled" | "No Show";
};

const MOCK_APPOINTMENTS: Appointment[] = [
  { id: "APT-001", date: "2025-09-12T09:30:00Z", service: "Hydrafacial", provider: "Dr. M. Dela Cruz", price: 2500, status: "Completed" },
  { id: "APT-002", date: "2025-10-05T14:00:00Z", service: "Laser Hair Removal", provider: "Nurse A. Santos", price: 1800, status: "Completed" },
  { id: "APT-003", date: "2025-11-15T11:00:00Z", service: "Botox Consultation", provider: "Dr. R. Flores", price: 1200, status: "Upcoming" },
  { id: "APT-004", date: "2025-08-20T16:00:00Z", service: "Chemical Peel", provider: "Dr. M. Dela Cruz", price: 2200, status: "Cancelled" },
  { id: "APT-005", date: "2025-07-08T10:15:00Z", service: "Microdermabrasion", provider: "Nurse L. Cruz", price: 1500, status: "Completed" },
];

export default function AppointmentHistory() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<string>("All");
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [rescheduleData, setRescheduleData] = useState({
    date: "",
    time: "",
    reason: "",
    doctor: "",
    branch: "",
    contactNumber: "",
    email: "",
    preferredContact: "",
    specialRequirements: ""
  });
  const [cancelData, setCancelData] = useState({
    reason: "",
    details: "",
    alternativeDate: ""
  });
  const [reviewData, setReviewData] = useState({
    rating: 0,
    serviceRating: 0,
    staffRating: 0,
    cleanlinessRating: 0,
    valueRating: 0,
    comment: "",
    recommend: ""
  });

  // Blocked dates (weekends and specific dates)
  const blockedDates = [
    "2025-12-25", // Christmas
    "2025-12-31", // New Year's Eve
    "2026-01-01", // New Year's Day
    "2026-01-15", // Example blocked date
    "2026-01-20", // Example blocked date
  ];

  // Available time slots
  const availableTimes = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
  ];

  // Blocked time slots (example: lunch break and some hours)
  const blockedTimes = [
    "12:00 PM", "12:30 PM", // Lunch break
    "01:00 PM", // Example blocked
  ];

  // Available doctors
  const availableDoctors = [
    "Dr. M. Dela Cruz",
    "Dr. R. Flores",
    "Nurse A. Santos",
    "Nurse L. Cruz",
    "Dr. J. Reyes"
  ];

  // Available branches
  const availableBranches = [
    "Baliuag Branch",
    "Malolos Branch"
  ];

  // Preferred contact methods
  const contactMethods = [
    "Phone Call",
    "SMS/Text Message",
    "Email",
    "Any Method"
  ];

  // Check if date is blocked
  const isDateBlocked = (date: string) => {
    const dateObj = new Date(date);
    const dayOfWeek = dateObj.getDay();
    // Block weekends (Saturday = 6, Sunday = 0)
    if (dayOfWeek === 0 || dayOfWeek === 6) return true;
    // Block specific dates
    if (blockedDates.includes(date)) return true;
    // Block past dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (dateObj < today) return true;
    return false;
  };

  // Get available times for selected date
  const getAvailableTimes = () => {
    return availableTimes.filter(time => !blockedTimes.includes(time));
  };

  const handleReschedule = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setRescheduleData({
      date: "",
      time: "",
      reason: "",
      doctor: appointment.provider,
      branch: "Baliuag Branch", // Default branch
      contactNumber: "",
      email: "",
      preferredContact: "Phone Call",
      specialRequirements: ""
    });
    setShowRescheduleModal(true);
  };

  const handleSubmitReschedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rescheduleData.date || !rescheduleData.time) {
      toast.error("Please select a date and time");
      return;
    }
    if (!rescheduleData.branch) {
      toast.error("Please select a branch");
      return;
    }
    if (!rescheduleData.contactNumber) {
      toast.error("Please provide your contact number");
      return;
    }
    toast.success(`Appointment ${selectedAppointment?.id} rescheduled successfully! We will contact you to confirm.`);
    setShowRescheduleModal(false);
    setRescheduleData({ 
      date: "", 
      time: "", 
      reason: "", 
      doctor: "",
      branch: "",
      contactNumber: "",
      email: "",
      preferredContact: "",
      specialRequirements: ""
    });
    setSelectedAppointment(null);
  };

  const handleCancel = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setCancelData({
      reason: "",
      details: "",
      alternativeDate: ""
    });
    setShowCancelModal(true);
  };

  const handleSubmitCancel = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cancelData.reason) {
      toast.error("Please provide a reason for cancellation");
      return;
    }
    toast.success(`Appointment ${selectedAppointment?.id} cancellation request submitted. We will contact you to confirm.`);
    setShowCancelModal(false);
    setCancelData({
      reason: "",
      details: "",
      alternativeDate: ""
    });
    setSelectedAppointment(null);
  };

  const handleReview = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setReviewData({
      rating: 0,
      serviceRating: 0,
      staffRating: 0,
      cleanlinessRating: 0,
      valueRating: 0,
      comment: "",
      recommend: ""
    });
    setShowReviewModal(true);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewData.rating || reviewData.rating === 0) {
      toast.error("Please provide an overall rating");
      return;
    }
    if (!reviewData.comment.trim() || reviewData.comment.trim().length < 10) {
      toast.error("Please provide a review comment with at least 10 characters");
      return;
    }
    toast.success(`Thank you! Your review for appointment ${selectedAppointment?.id} has been submitted.`);
    setShowReviewModal(false);
    setReviewData({
      rating: 0,
      serviceRating: 0,
      staffRating: 0,
      cleanlinessRating: 0,
      valueRating: 0,
      comment: "",
      recommend: ""
    });
    setSelectedAppointment(null);
  };

  const StarRating = ({ 
    rating, 
    onRatingChange, 
    label 
  }: { 
    rating: number; 
    onRatingChange: (rating: number) => void; 
    label: string;
  }) => {
    return (
      <div className="space-y-2">
        <Label className="font-poppins font-medium text-sm">{label}</Label>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => onRatingChange(star)}
              className="focus:outline-none transition-transform hover:scale-110"
            >
              <Star
                className={`h-6 w-6 ${
                  star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                } transition-colors`}
              />
            </button>
          ))}
          {rating > 0 && (
            <span className="ml-2 font-poppins text-sm text-muted-foreground">
              {rating}/5
            </span>
          )}
        </div>
      </div>
    );
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MOCK_APPOINTMENTS.filter((a) => {
      const matchesQuery = !q || [a.id, a.service, a.provider].some((v) => v.toLowerCase().includes(q));
      const matchesStatus = status === "All" || a.status === status;
      return matchesQuery && matchesStatus;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [query, status]);

  const statusBadge = (s: Appointment["status"]) => {
    switch (s) {
      case "Completed":
        return <Badge className="bg-emerald-500 hover:bg-emerald-500">Completed</Badge>;
      case "Upcoming":
        return <Badge className="bg-blue-500 hover:bg-blue-500">Upcoming</Badge>;
      case "Cancelled":
        return <Badge variant="destructive">Cancelled</Badge>;
      case "No Show":
        return <Badge className="bg-amber-500 hover:bg-amber-500">No Show</Badge>;
    }
  };

  return (
    <ClientLayout>
      <div className="container mx-auto px-8 py-8">
        <div className="mb-6">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">Appointment History</h1>
          <p className="font-poppins text-muted-foreground mt-1">Review past and upcoming appointments</p>
        </div>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="font-playfair">Your Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-4">
              <div className="flex gap-3 w-full md:w-auto">
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by ID, service, or provider"
                    className="pl-9 font-poppins"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <Select value={status} onValueChange={(v) => setStatus(v)}>
                  <SelectTrigger className="w-40 font-poppins">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Upcoming">Upcoming</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                    <SelectItem value="No Show">No Show</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            
            </div>

            <div className="rounded-md border border-border overflow-x-auto w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-poppins whitespace-nowrap">Appointment ID</TableHead>
                    <TableHead className="font-poppins whitespace-nowrap">Date</TableHead>
                    <TableHead className="font-poppins">Service</TableHead>
                    <TableHead className="font-poppins">Provider</TableHead>
                    <TableHead className="font-poppins">Status</TableHead>
                    <TableHead className="text-right font-poppins whitespace-nowrap">Price</TableHead>
                    <TableHead className="text-right font-poppins">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((a) => (
                    <TableRow key={a.id}>
                      <TableCell className="font-poppins">{a.id}</TableCell>
                      <TableCell className="font-poppins">{new Date(a.date).toLocaleString()}</TableCell>
                      <TableCell className="font-poppins">{a.service}</TableCell>
                      <TableCell className="font-poppins">{a.provider}</TableCell>
                      <TableCell className="font-poppins">{statusBadge(a.status)}</TableCell>
                      <TableCell className="text-right font-poppins">₱{a.price.toLocaleString()}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          {a.status === "Upcoming" && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                className="font-poppins hover:bg-[#ab817a] hover:text-white transition-colors border-[#ab817a]"
                                onClick={() => handleReschedule(a)}
                              >
                                <Calendar className="mr-2 h-4 w-4" />
                                Reschedule
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="font-poppins hover:bg-red-600 hover:text-white transition-colors border-red-500 text-red-600"
                                onClick={() => handleCancel(a)}
                              >
                                <X className="mr-2 h-4 w-4" />
                                Cancel
                              </Button>
                            </>
                          )}
                          {a.status === "Completed" && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="font-poppins hover:bg-yellow-500 hover:text-white transition-colors border-yellow-500 text-yellow-600"
                              onClick={() => handleReview(a)}
                            >
                              <Star className="mr-2 h-4 w-4" />
                              Review
                            </Button>
                          )}
                          {(a.status === "Cancelled" || a.status === "No Show") && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="font-poppins hover:bg-[#ab817a] hover:text-white transition-colors border-[#ab817a]"
                              onClick={() => handleReschedule(a)}
                            >
                              <Calendar className="mr-2 h-4 w-4" />
                              Reschedule
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

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
                    <p className="text-sm text-muted-foreground">Service: {selectedAppointment.service}</p>
                    <p className="text-sm text-muted-foreground">Current Date: {new Date(selectedAppointment.date).toLocaleDateString()}</p>
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
                  onChange={(e) => {
                    const selectedDate = e.target.value;
                    if (!isDateBlocked(selectedDate)) {
                      setRescheduleData(prev => ({ ...prev, date: selectedDate }));
                    } else {
                      toast.error("This date is not available. Please select another date.");
                    }
                  }}
                  className="font-poppins"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
                <p className="font-poppins text-xs text-muted-foreground">
                  Note: Weekends and some dates are blocked. Please select a weekday.
                </p>
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
                    {getAvailableTimes().map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="font-poppins text-xs text-muted-foreground">
                  Available time slots for the selected date
                </p>
              </div>

              {/* Branch Selection */}
              <div className="space-y-2">
                <Label htmlFor="reschedule-branch" className="font-poppins font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#ab817a]" />
                  Select Branch <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={rescheduleData.branch}
                  onValueChange={(value) => setRescheduleData(prev => ({ ...prev, branch: value }))}
                  required
                >
                  <SelectTrigger id="reschedule-branch" className="font-poppins">
                    <SelectValue placeholder="Select branch" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableBranches.map((branch) => (
                      <SelectItem key={branch} value={branch}>
                        {branch}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="reschedule-contact" className="font-poppins font-medium flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#ab817a]" />
                    Contact Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="reschedule-contact"
                    type="tel"
                    placeholder="+63 912 345 6789"
                    value={rescheduleData.contactNumber}
                    onChange={(e) => setRescheduleData(prev => ({ ...prev, contactNumber: e.target.value }))}
                    className="font-poppins"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reschedule-email" className="font-poppins font-medium flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#ab817a]" />
                    Email Address
                  </Label>
                  <Input
                    id="reschedule-email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={rescheduleData.email}
                    onChange={(e) => setRescheduleData(prev => ({ ...prev, email: e.target.value }))}
                    className="font-poppins"
                  />
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div className="space-y-2">
                <Label htmlFor="reschedule-contact-method" className="font-poppins font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#ab817a]" />
                  Preferred Contact Method
                </Label>
                <Select
                  value={rescheduleData.preferredContact}
                  onValueChange={(value) => setRescheduleData(prev => ({ ...prev, preferredContact: value }))}
                >
                  <SelectTrigger id="reschedule-contact-method" className="font-poppins">
                    <SelectValue placeholder="Select contact method" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactMethods.map((method) => (
                      <SelectItem key={method} value={method}>
                        {method}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Doctor Selection (Optional) */}
              <div className="space-y-2">
                <Label htmlFor="reschedule-doctor" className="font-poppins font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-[#ab817a]" />
                  Select Doctor (Optional)
                </Label>
                <Select
                  value={rescheduleData.doctor}
                  onValueChange={(value) => setRescheduleData(prev => ({ ...prev, doctor: value }))}
                >
                  <SelectTrigger id="reschedule-doctor" className="font-poppins">
                    <SelectValue placeholder="Select doctor (optional)" />
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

              {/* Special Requirements */}
              <div className="space-y-2">
                <Label htmlFor="reschedule-requirements" className="font-poppins font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-[#ab817a]" />
                  Special Requirements or Notes
                </Label>
                <Textarea
                  id="reschedule-requirements"
                  placeholder="Any special requirements, accessibility needs, or additional notes..."
                  value={rescheduleData.specialRequirements}
                  onChange={(e) => setRescheduleData(prev => ({ ...prev, specialRequirements: e.target.value }))}
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
                    setRescheduleData({ date: "", time: "", reason: "", doctor: "" });
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
                    <p className="text-sm text-muted-foreground">Service: {selectedAppointment.service}</p>
                    <p className="text-sm text-muted-foreground">Scheduled Date: {new Date(selectedAppointment.date).toLocaleDateString()}</p>
                    <p className="text-sm text-muted-foreground">Provider: {selectedAppointment.provider}</p>
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
                    <SelectItem value="schedule-conflict">Schedule Conflict</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                    <SelectItem value="illness">Illness</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="financial">Financial Reasons</SelectItem>
                    <SelectItem value="found-alternative">Found Alternative Provider</SelectItem>
                    <SelectItem value="no-longer-needed">No Longer Needed</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Details */}
              <div className="space-y-2">
                <Label htmlFor="cancel-details" className="font-poppins font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-red-600" />
                  Additional Details
                </Label>
                <Textarea
                  id="cancel-details"
                  placeholder="Please provide more details about your cancellation..."
                  value={cancelData.details}
                  onChange={(e) => setCancelData(prev => ({ ...prev, details: e.target.value }))}
                  className="font-poppins"
                  rows={4}
                />
              </div>

              {/* Alternative Date Preference */}
              <div className="space-y-2">
                <Label htmlFor="cancel-alternative-date" className="font-poppins font-medium flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-red-600" />
                  Would you like to reschedule instead?
                </Label>
                <Input
                  id="cancel-alternative-date"
                  type="date"
                  placeholder="Select alternative date (optional)"
                  value={cancelData.alternativeDate}
                  onChange={(e) => {
                    const selectedDate = e.target.value;
                    if (!isDateBlocked(selectedDate)) {
                      setCancelData(prev => ({ ...prev, alternativeDate: selectedDate }));
                    } else {
                      toast.error("This date is not available. Please select another date.");
                    }
                  }}
                  className="font-poppins"
                  min={new Date().toISOString().split('T')[0]}
                />
                <p className="font-poppins text-xs text-muted-foreground">
                  If you'd like to reschedule instead of canceling, select a preferred date
                </p>
              </div>

              {/* Warning Message */}
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-poppins font-semibold text-red-800 mb-1">Cancellation Policy</p>
                    <ul className="font-poppins text-sm text-red-700 space-y-1 list-disc list-inside">
                      <li>Cancellations made 24+ hours in advance: Full refund</li>
                      <li>Cancellations made less than 24 hours: 50% refund or store credit</li>
                      <li>No-show appointments: No refund</li>
                    </ul>
                  </div>
                </div>
              </div>

              <DialogFooter className="gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowCancelModal(false);
                    setCancelData({
                      reason: "",
                      details: "",
                      alternativeDate: ""
                    });
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

        {/* Review Modal */}
        <Dialog open={showReviewModal} onOpenChange={setShowReviewModal}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-playfair text-2xl flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                Submit Review
              </DialogTitle>
              <DialogDescription className="font-poppins">
                {selectedAppointment && (
                  <div className="mt-2">
                    <p className="font-semibold text-foreground">Appointment ID: {selectedAppointment.id}</p>
                    <p className="text-sm text-muted-foreground">Service: {selectedAppointment.service}</p>
                    <p className="text-sm text-muted-foreground">Provider: {selectedAppointment.provider}</p>
                    <p className="text-sm text-muted-foreground">Date: {new Date(selectedAppointment.date).toLocaleDateString()}</p>
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmitReview} className="space-y-6">
              {/* Overall Rating */}
              <div className="space-y-2">
                <Label className="font-poppins font-medium text-base">Overall Rating <span className="text-red-500">*</span></Label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewData(prev => ({ ...prev, rating: star }))}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= reviewData.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        } transition-colors`}
                      />
                    </button>
                  ))}
                  {reviewData.rating > 0 && (
                    <span className="ml-3 font-poppins text-lg font-semibold text-foreground">
                      {reviewData.rating} out of 5
                    </span>
                  )}
                </div>
              </div>

              {/* Detailed Ratings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border">
                <StarRating
                  rating={reviewData.serviceRating}
                  onRatingChange={(rating) => setReviewData(prev => ({ ...prev, serviceRating: rating }))}
                  label="Service Quality"
                />
                <StarRating
                  rating={reviewData.staffRating}
                  onRatingChange={(rating) => setReviewData(prev => ({ ...prev, staffRating: rating }))}
                  label="Staff Professionalism"
                />
                <StarRating
                  rating={reviewData.cleanlinessRating}
                  onRatingChange={(rating) => setReviewData(prev => ({ ...prev, cleanlinessRating: rating }))}
                  label="Clinic Cleanliness"
                />
                <StarRating
                  rating={reviewData.valueRating}
                  onRatingChange={(rating) => setReviewData(prev => ({ ...prev, valueRating: rating }))}
                  label="Value for Money"
                />
              </div>

              {/* Review Comment */}
              <div className="space-y-2">
                <Label htmlFor="review-comment" className="font-poppins font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-yellow-500" />
                  Your Review <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="review-comment"
                  placeholder="Share your experience with this appointment. What did you like? What could be improved?"
                  value={reviewData.comment}
                  onChange={(e) => setReviewData(prev => ({ ...prev, comment: e.target.value }))}
                  className="font-poppins"
                  rows={6}
                  required
                />
                <p className="font-poppins text-xs text-muted-foreground">
                  Minimum 10 characters required
                </p>
              </div>

              {/* Would You Recommend */}
              <div className="space-y-2">
                <Label htmlFor="review-recommend" className="font-poppins font-medium flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  Would you recommend this service to others?
                </Label>
                <Select
                  value={reviewData.recommend}
                  onValueChange={(value) => setReviewData(prev => ({ ...prev, recommend: value }))}
                >
                  <SelectTrigger id="review-recommend" className="font-poppins">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="definitely">Definitely Yes</SelectItem>
                    <SelectItem value="probably">Probably Yes</SelectItem>
                    <SelectItem value="maybe">Maybe</SelectItem>
                    <SelectItem value="probably-not">Probably Not</SelectItem>
                    <SelectItem value="definitely-not">Definitely Not</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <DialogFooter className="gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowReviewModal(false);
                    setReviewData({
                      rating: 0,
                      serviceRating: 0,
                      staffRating: 0,
                      cleanlinessRating: 0,
                      valueRating: 0,
                      comment: "",
                      recommend: ""
                    });
                    setSelectedAppointment(null);
                  }}
                  className="font-poppins"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="font-poppins bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white"
                  disabled={reviewData.rating === 0 || reviewData.comment.trim().length < 10}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Review
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </ClientLayout>
  );
}

