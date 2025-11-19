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
import { useAuth } from "@/context/AuthContext";
import { UserRole } from "@/types/auth";
import logo from "@/assets/kendi-logo.png";

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState("patient");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const { register: registerUser } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (Object.values(formData).some(val => !val)) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await registerUser({
        email: formData.email,
        password: formData.password,
        name: formData.fullName,
        role: role as UserRole,
        phone: formData.phone
      });

      if (role === "patient") {
        navigate("/client-dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
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
              <div className="space-y-2">
                <Label htmlFor="role" className="font-poppins">Register As</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger id="role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="patient">Patient/Customer</SelectItem>
                    <SelectItem value="staff">Staff (Doctor/Receptionist)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName" className="font-poppins">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Angela Cruz"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="font-poppins"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-poppins">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="angela@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="font-poppins"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-poppins">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+63 123 456 7890"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="font-poppins"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="font-poppins">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="font-poppins"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="font-poppins">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  className="font-poppins"
                />
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full font-poppins bg-[#ab817a] shadow-elegant text-white hover:text-white">
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
