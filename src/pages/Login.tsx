import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import logo from "@/assets/kendi-logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login - in real app, this would validate credentials
    if (email && password) {
      toast.success("Login successful!");
      
      // Route based on email address
      const emailLower = email.toLowerCase().trim();
      
      if (emailLower === "doctor@gmail.com") {
        localStorage.setItem("userRole", "aesthetician");
        navigate("/dashboard");
      } else if (emailLower === "admin@gmail.com") {
        localStorage.setItem("userRole", "admin");
        navigate("/pages/Dashboard");
      } else if (emailLower === "patient@gmail.com") {
        localStorage.setItem("userRole", "patient");
        navigate("/client/dashboard");
      } else {
        // Default to patient for any other email
        localStorage.setItem("userRole", "patient");
        navigate("/client/dashboard");
      }
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero p-4">
      <Card className="w-full max-w-md shadow-elegant">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="Kendi Logo" className="h-16 w-16" />
          </div>
          <CardTitle className="font-playfair text-3xl">Welcome Back</CardTitle>
          <CardDescription className="font-poppins">
            Sign in to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-poppins font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="patient@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-poppins"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="font-poppins font-medium">Password</Label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline font-poppins">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="font-poppins"
                required
              />
            </div>

            <Button type="submit" className="w-full font-poppins bg-gradient-to-r from-[#ab817a] to-[#ba9993] hover:from-[#ba9993] hover:to-[#ab817a] text-white shadow-elegant hover:shadow-gold transition-all">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-sm font-poppins">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline font-medium">
              Register here
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary font-poppins">
              ← Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
