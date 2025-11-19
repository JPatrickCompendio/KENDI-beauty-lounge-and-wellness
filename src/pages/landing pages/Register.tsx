import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import logo from "@/assets/kendi-logo.png";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    address: ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    if (Object.values(formData).some(val => !val)) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Registration successful!");
    localStorage.setItem("userRole", "patient");
    navigate("/client/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <Card className="w-full max-w-4xl shadow-elegant">
        <CardHeader className="space-y-1 text-center pb-6">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Kendi Logo" className="h-16 w-16" />
          </div>
          <CardTitle className="font-playfair text-3xl">Create Account</CardTitle>
          <CardDescription className="font-poppins">
            Join Kendi Beauty Lounge & Wellness
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="font-poppins font-medium">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Angela Cruz"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="font-poppins"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <Label htmlFor="email" className="font-poppins font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="angela@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="font-poppins"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div className="space-y-2">
                <Label htmlFor="mobileNumber" className="font-poppins font-medium">Mobile Number</Label>
                <Input
                  id="mobileNumber"
                  type="tel"
                  placeholder="+63 912 345 6789"
                  value={formData.mobileNumber}
                  onChange={(e) => handleChange("mobileNumber", e.target.value)}
                  className="font-poppins"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="font-poppins font-medium">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                  className="font-poppins"
                  required
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <Label htmlFor="gender" className="font-poppins font-medium">Gender</Label>
                <Select value={formData.gender} onValueChange={(value) => handleChange("gender", value)}>
                  <SelectTrigger id="gender" className="font-poppins">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="font-poppins font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="font-poppins"
                  required
                  minLength={6}
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="font-poppins font-medium">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  className="font-poppins"
                  required
                  minLength={6}
                />
              </div>

              {/* Address - Full Width */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address" className="font-poppins font-medium">Address</Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Street, Barangay, City, Province"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className="font-poppins"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full font-poppins shadow-elegant bg-[#ab817a] text-white hover:text-white">
                Create Account
              </Button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 pt-4 border-t">
            <div className="text-center sm:text-left text-sm font-poppins">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    type="button" 
                    variant="link" 
                    className="text-sm text-muted-foreground hover:text-primary font-poppins"
                  >
                    Terms and Conditions
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle className="font-playfair text-2xl">Terms and Conditions</DialogTitle>
                    <DialogDescription className="font-poppins">
                      Please read our terms and conditions carefully
                    </DialogDescription>
                  </DialogHeader>
                  <ScrollArea className="max-h-[60vh] pr-4">
                    <div className="space-y-4 font-poppins text-sm">
                      <div>
                        <h3 className="font-semibold text-base mb-2">1. Acceptance of Terms</h3>
                        <p className="text-muted-foreground">
                          By accessing and using Kendi Beauty Lounge & Wellness services, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-2">2. Account Registration</h3>
                        <p className="text-muted-foreground">
                          You must provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-2">3. Appointments and Cancellations</h3>
                        <p className="text-muted-foreground">
                          Appointments must be made through our official booking system. Cancellations should be made at least 24 hours in advance. Late cancellations or no-shows may result in fees or restrictions on future bookings.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-2">4. Service Policies</h3>
                        <p className="text-muted-foreground">
                          All services are provided subject to availability. We reserve the right to refuse service to anyone for any reason. Prices and services are subject to change without prior notice.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-2">5. Payment Terms</h3>
                        <p className="text-muted-foreground">
                          Payment is due at the time of service unless otherwise arranged. We accept cash, credit cards, and approved payment methods. Refunds are subject to our refund policy.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-2">6. Privacy and Data Protection</h3>
                        <p className="text-muted-foreground">
                          We respect your privacy and are committed to protecting your personal information. Your data will be used in accordance with our Privacy Policy and applicable data protection laws.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-2">7. Limitation of Liability</h3>
                        <p className="text-muted-foreground">
                          Kendi Beauty Lounge & Wellness shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-2">8. Modification of Terms</h3>
                        <p className="text-muted-foreground">
                          We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of any modifications.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-2">9. Contact Information</h3>
                        <p className="text-muted-foreground">
                          If you have any questions about these Terms and Conditions, please contact us through our official channels.
                        </p>
                      </div>
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
              
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary font-poppins">
                ← Back to Home
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
