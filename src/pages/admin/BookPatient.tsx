import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Calendar as CalendarIcon, Clock, User, FileText, MapPin, Stethoscope, Plus, Search, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data
const mockClients = [
  { id: 1, name: "Maria Santos", contact: "0917-123-4567", email: "maria.santos@email.com" },
  { id: 2, name: "Juan Dela Cruz", contact: "0918-234-5678", email: "juan.delacruz@email.com" },
  { id: 3, name: "Ana Reyes", contact: "0919-345-6789", email: "ana.reyes@email.com" },
  { id: 4, name: "Sofia Martinez", contact: "0920-456-7890", email: "sofia.martinez@email.com" },
  { id: 5, name: "Carlos Gomez", contact: "0921-567-8901", email: "carlos.gomez@email.com" },
];

const SERVICES = [
  { id: "facial", name: "Facial Rejuvenation", duration: "60 mins", price: "₱2,500" },
  { id: "slimming", name: "Slimming Treatment", duration: "45 mins", price: "₱3,000" },
  { id: "gluta", name: "Gluta Drip Therapy", duration: "30 mins", price: "₱1,800" },
  { id: "contouring", name: "Body Contouring", duration: "60 mins", price: "₱4,500" },
  { id: "botox", name: "Botox & Fillers", duration: "30 mins", price: "₱5,000" },
  { id: "laser", name: "Laser Hair Removal", duration: "45 mins", price: "₱3,500" },
  { id: "bbglow", name: "BB Glow Facial", duration: "60 mins", price: "₱2,800" },
  { id: "mesolipo", name: "Mesolipo Treatment", duration: "75 mins", price: "₱4,000" },
];

const BRANCHES = [
  { id: "baliuag", name: "Baliuag Branch", address: "123 Main St, Baliuag, Bulacan" },
  { id: "malolos", name: "Malolos Branch", address: "456 Rizal Ave, Malolos, Bulacan" }
];

const AVAILABLE_DOCTORS = [
  "Dr. M. Dela Cruz",
  "Dr. J. Reyes",
  "Dr. A. Santos",
  "Dr. R. Flores",
  "Nurse A. Santos",
  "Nurse L. Cruz"
];

const AVAILABLE_TIMES = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"
];

export default function BookPatient() {
  const navigate = useNavigate();
  const [selectedPatient, setSelectedPatient] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewPatientModal, setShowNewPatientModal] = useState(false);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [branch, setBranch] = useState<string>("");
  const [doctor, setDoctor] = useState<string>("");
  const [notes, setNotes] = useState("");
  
  // New patient form data
  const [newPatient, setNewPatient] = useState({
    name: "",
    contact: "",
    email: "",
    address: ""
  });

  const filteredClients = mockClients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.contact.includes(searchQuery) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNewPatientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPatient.name || !newPatient.contact) {
      toast.error("Please fill in required fields (Name and Contact)");
      return;
    }
    // In a real app, this would create a new patient
    toast.success("New patient added successfully!");
    setShowNewPatientModal(false);
    setNewPatient({ name: "", contact: "", email: "", address: "" });
    // Auto-select the newly created patient
    setSelectedPatient(newPatient.name);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedPatient || !date || !time || !service || !branch || !doctor) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Mock appointment creation
    toast.success("Appointment booked successfully!");
    
    // Reset form
    setSelectedPatient("");
    setDate(undefined);
    setTime("");
    setService("");
    setBranch("");
    setDoctor("");
    setNotes("");
    setSearchQuery("");
  };

  const selectedService = SERVICES.find(s => s.id === service);
  const selectedBranch = BRANCHES.find(b => b.id === branch);
  const selectedClient = mockClients.find(c => c.id.toString() === selectedPatient || c.name === selectedPatient);

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">Book Patient Appointment</h1>
          <p className="text-muted-foreground">Schedule an appointment for a patient</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Appointment Details</CardTitle>
                <CardDescription>Fill in the information to book an appointment</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* Patient Selection */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="patient" className="font-poppins font-medium flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Select Patient *
                      </Label>
                      <Dialog open={showNewPatientModal} onOpenChange={setShowNewPatientModal}>
                        <DialogTrigger asChild>
                          <Button type="button" variant="outline" size="sm" className="gap-2">
                            <Plus className="h-4 w-4" />
                            New Patient
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Add New Patient</DialogTitle>
                          </DialogHeader>
                          <form onSubmit={handleNewPatientSubmit} className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="new-name">Full Name *</Label>
                              <Input
                                id="new-name"
                                value={newPatient.name}
                                onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                                placeholder="Enter patient name"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="new-contact">Contact Number *</Label>
                              <Input
                                id="new-contact"
                                value={newPatient.contact}
                                onChange={(e) => setNewPatient({ ...newPatient, contact: e.target.value })}
                                placeholder="0912-345-6789"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="new-email">Email Address</Label>
                              <Input
                                id="new-email"
                                type="email"
                                value={newPatient.email}
                                onChange={(e) => setNewPatient({ ...newPatient, email: e.target.value })}
                                placeholder="patient@email.com"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="new-address">Address</Label>
                              <Textarea
                                id="new-address"
                                value={newPatient.address}
                                onChange={(e) => setNewPatient({ ...newPatient, address: e.target.value })}
                                placeholder="Enter address"
                                rows={3}
                              />
                            </div>
                            <DialogFooter>
                              <Button type="button" variant="outline" onClick={() => setShowNewPatientModal(false)}>
                                Cancel
                              </Button>
                              <Button type="submit">Add Patient</Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                    
                    {!selectedPatient ? (
                      <div className="space-y-2">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            placeholder="Search patients by name, contact, or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                          />
                        </div>
                        {searchQuery && (
                          <Card className="max-h-60 overflow-y-auto">
                            <CardContent className="p-2">
                              {filteredClients.length > 0 ? (
                                <div className="space-y-1">
                                  {filteredClients.map((client) => (
                                    <button
                                      key={client.id}
                                      type="button"
                                      onClick={() => {
                                        setSelectedPatient(client.id.toString());
                                        setSearchQuery("");
                                      }}
                                      className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors"
                                    >
                                      <div className="font-semibold">{client.name}</div>
                                      <div className="text-sm text-muted-foreground">
                                        {client.contact} • {client.email}
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              ) : (
                                <p className="text-sm text-muted-foreground text-center py-4">
                                  No patients found
                                </p>
                              )}
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    ) : (
                      <Card className="bg-accent/50">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold">{selectedClient?.name || newPatient.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {selectedClient?.contact || newPatient.contact}
                                {selectedClient?.email && ` • ${selectedClient.email}`}
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedPatient("")}
                            >
                              Change
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Service and Branch Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="font-poppins font-medium flex items-center gap-2">
                        <Stethoscope className="h-4 w-4" />
                        Service *
                      </Label>
                      <Select value={service} onValueChange={setService}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((svc) => (
                            <SelectItem key={svc.id} value={svc.id}>
                              <div className="flex flex-col w-full">
                                <span className="font-semibold">{svc.name}</span>
                                <span className="text-xs text-muted-foreground">
                                  {svc.duration} • {svc.price}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="branch" className="font-poppins font-medium flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Branch *
                      </Label>
                      <Select value={branch} onValueChange={setBranch}>
                        <SelectTrigger id="branch">
                          <SelectValue placeholder="Select branch" />
                        </SelectTrigger>
                        <SelectContent>
                          {BRANCHES.map((br) => (
                            <SelectItem key={br.id} value={br.id}>
                              {br.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Doctor Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="doctor" className="font-poppins font-medium flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Assigned Doctor/Staff *
                    </Label>
                    <Select value={doctor} onValueChange={setDoctor}>
                      <SelectTrigger id="doctor">
                        <SelectValue placeholder="Select doctor or staff" />
                      </SelectTrigger>
                      <SelectContent>
                        {AVAILABLE_DOCTORS.map((doc) => (
                          <SelectItem key={doc} value={doc}>
                            {doc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date Selection */}
                  <div className="space-y-3">
                    <Label className="font-poppins font-medium flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      Select Date *
                    </Label>
                    <Card className="border-2">
                      <CardContent className="p-4">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md w-full"
                          disabled={(date) => {
                            const now = new Date();
                            now.setHours(0, 0, 0, 0);
                            return date < now || date.getDay() === 0; // Disable past dates and Sundays
                          }}
                        />
                      </CardContent>
                    </Card>
                  </div>

                  {/* Time Selection */}
                  <div className="space-y-3">
                    <Label className="font-poppins font-medium flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Available Time Slots *
                    </Label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {AVAILABLE_TIMES.map((t) => (
                        <Button
                          key={t}
                          type="button"
                          variant={time === t ? "default" : "outline"}
                          className={`font-poppins transition-all ${
                            time === t
                              ? "bg-primary text-primary-foreground"
                              : "hover:border-primary hover:text-primary"
                          }`}
                          onClick={() => setTime(t)}
                        >
                          {t}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="font-poppins font-medium flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Additional Notes (Optional)
                    </Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special instructions or notes..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="font-poppins resize-none"
                      rows={4}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => navigate("/pages/Dashboard")}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1"
                      disabled={!selectedPatient || !date || !time || !service || !branch || !doctor}
                    >
                      Book Appointment
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              {selectedPatient && date && time && service && branch && doctor ? (
                <Card className="shadow-elegant bg-gradient-to-br from-primary/10 to-secondary/20">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Booking Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3 font-poppins">
                      <div className="p-3 bg-background rounded-lg border">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <User className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground mb-1">Patient</p>
                            <p className="font-semibold text-sm">{selectedClient?.name || newPatient.name}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-background rounded-lg border">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Stethoscope className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground mb-1">Service</p>
                            <p className="font-semibold text-sm">{selectedService?.name}</p>
                            <p className="text-xs text-muted-foreground mt-1">{selectedService?.duration}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-background rounded-lg border">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <User className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground mb-1">Doctor/Staff</p>
                            <p className="font-semibold text-sm">{doctor}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-background rounded-lg border">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground mb-1">Branch</p>
                            <p className="font-semibold text-sm">{selectedBranch?.name}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-background rounded-lg border">
                        <div className="flex items-start gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <CalendarIcon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-muted-foreground mb-1">Date & Time</p>
                            <p className="font-semibold text-sm">
                              {date?.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">at {time}</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-primary rounded-lg text-primary-foreground">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-lg">Total Price</span>
                          <span className="font-bold text-xl">{selectedService?.price}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-elegant bg-muted/30">
                  <CardContent className="pt-6 text-center">
                    <div className="flex flex-col items-center gap-3 text-muted-foreground">
                      <CalendarIcon className="h-12 w-12 opacity-50" />
                      <p className="font-poppins text-sm">
                        Fill in the form to see your booking summary
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

