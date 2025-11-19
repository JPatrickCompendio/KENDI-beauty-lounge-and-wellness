import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ClientLayout } from "@/pages/client/ClientLayout";
import { Clock, MapPin, Calendar as CalendarIcon, FileText, CheckCircle2 } from "lucide-react";

const AVAILABLE_TIMES = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "02:00 PM", "03:00 PM", "04:00 PM"
];

const SERVICES = [
  {
    id: "facial",
    name: "Facial Rejuvenation",
    duration: "60 mins",
    price: "₱2,500"
  },
  {
    id: "slimming",
    name: "Slimming Treatment",
    duration: "45 mins",
    price: "₱3,000"
  },
  {
    id: "gluta",
    name: "Gluta Drip Therapy",
    duration: "30 mins",
    price: "₱1,800"
  }
];

const BRANCHES = [
  { id: "baliuag", name: "Baliuag Branch" },
  { id: "malolos", name: "Malolos Branch" }
];

export default function ClientBookAppointment() {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [service, setService] = useState<string>();
  const [branch, setBranch] = useState<string>();
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !time || !service || !branch) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Mock appointment creation
    toast.success("Appointment booked successfully!");
    navigate("/client/dashboard");
  };

  return (
    <ClientLayout>
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-3">
                Book an Appointment
              </h1>
              <p className="font-poppins text-lg text-muted-foreground">
                Schedule your wellness journey with us
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-elegant border-0">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Service and Branch Selection */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Service Selection */}
                        <div className="space-y-2">
                          <Label htmlFor="service" className="font-poppins font-medium">Select Service</Label>
                          <Select value={service} onValueChange={setService}>
                            <SelectTrigger id="service" className="focus:ring-2 focus:ring-[#ab817a]">
                              <SelectValue placeholder="Choose a service" />
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

                        {/* Branch Selection */}
                        <div className="space-y-2">
                          <Label htmlFor="branch" className="font-poppins font-medium">Select Branch</Label>
                          <Select value={branch} onValueChange={setBranch}>
                            <SelectTrigger id="branch" className="focus:ring-2 focus:ring-[#ab817a]">
                              <SelectValue placeholder="Choose a branch" />
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

                      {/* Date Selection */}
                      <div className="space-y-3">
                        <Label className="font-poppins font-medium flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          Select Date
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
                          Available Time Slots
                        </Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {AVAILABLE_TIMES.map((t) => (
                            <Button
                              key={t}
                              type="button"
                              variant={time === t ? "default" : "outline"}
                              className={`font-poppins transition-all ${
                                time === t
                                  ? "bg-[#ab817a] text-white hover:bg-[#9a7069] border-[#ab817a]"
                                  : "hover:border-[#ab817a] hover:text-[#ab817a]"
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
                          placeholder="Any specific concerns or requests..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="font-poppins focus:ring-2 focus:ring-[#ab817a] resize-none"
                          rows={4}
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1 font-poppins border-2 hover:bg-muted"
                          onClick={() => navigate("/client/dashboard")}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="flex-1 font-poppins bg-[#ab817a] shadow-elegant text-white hover:bg-[#9a7069] hover:text-white transition-colors py-6"
                          disabled={!service || !date || !time || !branch}
                        >
                          Confirm Booking
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-4">
                  {service && date && time && branch ? (
                    <Card className="shadow-elegant border-0 bg-gradient-to-br from-[#ab817a]/10 to-secondary/20">
                      <CardHeader className="pb-4">
                        <CardTitle className="font-playfair text-2xl flex items-center gap-2">
                          <CheckCircle2 className="h-6 w-6 text-[#ab817a]" />
                          Booking Summary
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-4 font-poppins">
                          <div className="p-3 bg-background rounded-lg border">
                            <div className="flex items-start gap-3">
                              <div className="h-10 w-10 rounded-full bg-[#ab817a]/20 flex items-center justify-center flex-shrink-0">
                                <FileText className="h-5 w-5 text-[#ab817a]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs text-muted-foreground mb-1">Service</p>
                                <p className="font-semibold text-sm">{SERVICES.find(s => s.id === service)?.name}</p>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 bg-background rounded-lg border">
                            <div className="flex items-start gap-3">
                              <div className="h-10 w-10 rounded-full bg-[#ab817a]/20 flex items-center justify-center flex-shrink-0">
                                <MapPin className="h-5 w-5 text-[#ab817a]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs text-muted-foreground mb-1">Branch</p>
                                <p className="font-semibold text-sm">{BRANCHES.find(b => b.id === branch)?.name}</p>
                              </div>
                            </div>
                          </div>

                          <div className="p-3 bg-background rounded-lg border">
                            <div className="flex items-start gap-3">
                              <div className="h-10 w-10 rounded-full bg-[#ab817a]/20 flex items-center justify-center flex-shrink-0">
                                <CalendarIcon className="h-5 w-5 text-[#ab817a]" />
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

                          <div className="p-3 bg-background rounded-lg border">
                            <div className="flex items-start gap-3">
                              <div className="h-10 w-10 rounded-full bg-[#ab817a]/20 flex items-center justify-center flex-shrink-0">
                                <Clock className="h-5 w-5 text-[#ab817a]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                                <p className="font-semibold text-sm">{SERVICES.find(s => s.id === service)?.duration}</p>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 bg-[#ab817a] rounded-lg text-white">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-lg">Total Price</span>
                              <span className="font-bold text-xl">{SERVICES.find(s => s.id === service)?.price}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="shadow-elegant border-0 bg-muted/30">
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
        </div>
      </div>
    </ClientLayout>
  );
}