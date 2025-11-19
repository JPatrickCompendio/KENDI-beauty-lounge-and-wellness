import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { UserPlus } from "lucide-react";
import { AdminLayout } from "@/components/AdminLayout";
import { useToast } from "@/hooks/use-toast";

const mockStaff = [
  { id: 1, name: "Dr. Maria Santos", role: "Doctor", contact: "0917-111-2222", schedule: "Mon-Fri, 9AM-5PM", appointments: 45, rating: 4.8, status: "Active" },
  { id: 2, name: "Ana Reyes", role: "Aesthetician", contact: "0918-222-3333", schedule: "Mon-Sat, 10AM-6PM", appointments: 38, rating: 4.9, status: "Active" },
  { id: 3, name: "Carlos Gomez", role: "Staff", contact: "0919-333-4444", schedule: "Tue-Sun, 9AM-5PM", appointments: 12, rating: 4.5, status: "Active" },
];

export default function Staff() {
  const [staffList, setStaffList] = useState(mockStaff);
  const [addStaffModalOpen, setAddStaffModalOpen] = useState(false);
  const [staffForm, setStaffForm] = useState({
    name: "",
    role: "",
    contact: "",
    schedule: "",
    email: "",
    address: "",
    emergencyContact: "",
    notes: ""
  });
  const { toast } = useToast();

  const handleAddStaff = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!staffForm.name || !staffForm.role || !staffForm.contact) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const newStaff = {
      id: staffList.length + 1,
      name: staffForm.name,
      role: staffForm.role,
      contact: staffForm.contact,
      schedule: staffForm.schedule,
      appointments: 0,
      rating: 0,
      status: "Active"
    };

    setStaffList([...staffList, newStaff]);
    setAddStaffModalOpen(false);
    setStaffForm({
      name: "",
      role: "",
      contact: "",
      schedule: "",
      email: "",
      address: "",
      emergencyContact: "",
      notes: ""
    });
    
    toast({
      title: "Success",
      description: "Staff member added successfully"
    });
  };

  const handleFormChange = (field: string, value: string) => {
    setStaffForm({ ...staffForm, [field]: value });
  };

  return (
    <AdminLayout>
      <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">Doctors & Staff</h1>
          <p className="text-muted-foreground">Manage your clinic's medical professionals and staff.</p>
        </div>
        <Button className="gap-2" onClick={() => setAddStaffModalOpen(true)}>
          <UserPlus className="w-4 h-4" />
          Add Staff
        </Button>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Schedule</TableHead>
              <TableHead>Appointments</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staffList.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell className="font-medium">{staff.name}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{staff.role}</Badge>
                </TableCell>
                <TableCell>{staff.contact}</TableCell>
                <TableCell>{staff.schedule}</TableCell>
                <TableCell>{staff.appointments}</TableCell>
                <TableCell>⭐ {staff.rating}</TableCell>
                <TableCell>
                  <Badge>{staff.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Add Staff Modal */}
      <Dialog open={addStaffModalOpen} onOpenChange={setAddStaffModalOpen}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-heading">Add New Staff Member</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleAddStaff} className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <div className="space-y-1">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={staffForm.name}
                  onChange={(e) => handleFormChange("name", e.target.value)}
                  placeholder="Enter full name"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="role">Role *</Label>
                <Select value={staffForm.role} onValueChange={(value) => handleFormChange("role", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Doctor">Doctor</SelectItem>
                    <SelectItem value="Aesthetician">Aesthetician</SelectItem>
                    <SelectItem value="Staff">Staff</SelectItem>
                    <SelectItem value="Receptionist">Receptionist</SelectItem>
                    <SelectItem value="Manager">Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="space-y-1">
                <Label htmlFor="contact">Contact Number *</Label>
                <Input
                  id="contact"
                  value={staffForm.contact}
                  onChange={(e) => handleFormChange("contact", e.target.value)}
                  placeholder="0917-123-4567"
                  required
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={staffForm.email}
                  onChange={(e) => handleFormChange("email", e.target.value)}
                  placeholder="staff@kendi.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="schedule">Work Schedule</Label>
              <Input
                id="schedule"
                value={staffForm.schedule}
                onChange={(e) => handleFormChange("schedule", e.target.value)}
                placeholder="Mon-Fri, 9AM-5PM"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                value={staffForm.address}
                onChange={(e) => handleFormChange("address", e.target.value)}
                placeholder="Enter complete address"
                rows={2}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="emergencyContact">Emergency Contact</Label>
              <Input
                id="emergencyContact"
                value={staffForm.emergencyContact}
                onChange={(e) => handleFormChange("emergencyContact", e.target.value)}
                placeholder="Emergency contact number"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={staffForm.notes}
                onChange={(e) => handleFormChange("notes", e.target.value)}
                placeholder="Additional notes or comments"
                rows={2}
              />
            </div>

            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={() => setAddStaffModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                Add Staff Member
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      </div>
    </AdminLayout>
  );
}
