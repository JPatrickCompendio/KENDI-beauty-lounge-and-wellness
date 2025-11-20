import { ClientLayout } from "@/pages/client/ClientLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, Phone, MapPin, Lock, Upload, Info, Calendar, Heart } from "lucide-react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function Profile() {
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated successfully!");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Password changed successfully!");
  };

  return (
    <ClientLayout>
      <div className="p-0">
        <div className="relative">
          <div className="h-40 w-full bg-gradient-to-r from-[#ab817a]/20 via-transparent to-[#ab817a]/20" />
          <div className="container mx-auto px-8 -mt-12">
            <Card className="shadow-elegant overflow-hidden">
              <div className="h-24 w-full bg-gradient-to-r from-[#ab817a] to-[#caa79f]" />
              <CardContent className="pt-0">
                <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-12">
                  <div className="relative">
                    <Avatar className="h-24 w-24 ring-4 ring-background">
                      <AvatarFallback className="bg-[#ab817a] text-white text-2xl font-playfair">MS</AvatarFallback>
                    </Avatar>
                    <Button size="icon" variant="secondary" className="absolute -right-2 bottom-0 h-8 w-8 rounded-full shadow" aria-label="Upload photo">
                      <Upload className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1 pb-4">
                    <h1 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-12">Profile Settings</h1>
                    <p className="font-poppins text-muted-foreground mt-1 flex items-center gap-2">
                      <Info className="h-4 w-4" /> Manage your account information
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="container mx-auto px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="font-playfair">Your Profile</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center">
                  <h2 className="font-playfair text-2xl font-bold text-foreground mb-1">Maria Santos</h2>
                  <p className="font-poppins text-sm text-muted-foreground">Patient</p>
                </div>

                <Separator className="my-6" />

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-poppins text-muted-foreground">maria.santos@email.com</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-poppins text-muted-foreground">+63 912 345 6789</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-poppins text-muted-foreground">Baliuag, Bulacan</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-poppins text-muted-foreground">Date of Birth: Jan 15, 1990</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Edit Profile Form */}
            <Card className="lg:col-span-2 shadow-elegant">
              <CardHeader>
                <CardTitle className="font-playfair">Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpdateProfile} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-poppins">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="firstName" defaultValue="Maria" className="font-poppins pl-9" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-poppins">Last Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="lastName" defaultValue="Santos" className="font-poppins pl-9" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-poppins">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="email" type="email" defaultValue="maria.santos@email.com" className="font-poppins pl-9" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-poppins">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="phone" type="tel" defaultValue="+63 912 345 6789" className="font-poppins pl-9" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="font-poppins">Date of Birth</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="dateOfBirth" type="date" defaultValue="1990-01-15" className="font-poppins pl-9" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="font-poppins">Gender</Label>
                      <div className="relative">
                        <Heart className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="gender" defaultValue="Female" className="font-poppins pl-9" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="font-poppins">Address</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="address" defaultValue="Baliuag, Bulacan" className="font-poppins pl-9" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio" className="font-poppins">Short Bio</Label>
                    <Textarea id="bio" placeholder="Tell us a bit about yourself…" className="font-poppins min-h-[96px]" />
                  </div>

                  <div className="flex items-center gap-3">
                    <Button type="submit" className="font-poppins bg-[#ab817a] hover:bg-[#9e756d]">Save Changes</Button>
                    <Button type="button" variant="outline" className="font-poppins">Cancel</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Change Password */}
            <Card className="lg:col-span-3 shadow-elegant">
              <CardHeader>
                <CardTitle className="font-playfair flex items-center">
                  <Lock className="mr-2 h-5 w-5" />
                  Change Password
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleChangePassword} className="space-y-6 max-w-xl">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword" className="font-poppins">Current Password</Label>
                    <Input id="currentPassword" type="password" className="font-poppins" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword" className="font-poppins">New Password</Label>
                      <Input id="newPassword" type="password" className="font-poppins" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="font-poppins">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" className="font-poppins" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button type="submit" className="font-poppins bg-[#ab817a] hover:bg-[#9e756d]">Update Password</Button>
                    <Button type="button" variant="outline" className="font-poppins">Cancel</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
