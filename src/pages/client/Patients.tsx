import { useState } from "react";
import { DashboardLayout } from "@/pages/doctor/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Eye } from "lucide-react";
import { toast } from "sonner";

export default function Patients() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const patients = [
    {
      id: "PAT-001",
      name: "Angela Cruz",
      age: 25,
      gender: "Female",
      contact: "+63 912 345 6789",
      email: "angela.cruz@email.com",
      lastVisit: "Oct 25, 2025",
      allergies: "None",
      visits: [
        { date: "Oct 25, 2025", service: "Facial Treatment", doctor: "Dr. M. Dela Cruz" },
        { date: "Sep 10, 2025", service: "Gluta Drip", doctor: "Dr. J. Reyes" }
      ]
    },
    {
      id: "PAT-002",
      name: "Maria Santos",
      age: 32,
      gender: "Female",
      contact: "+63 923 456 7890",
      email: "maria.santos@email.com",
      lastVisit: "Oct 27, 2025",
      allergies: "Aspirin",
      visits: [
        { date: "Oct 27, 2025", service: "Gluta Drip", doctor: "Dr. J. Reyes" }
      ]
    },
    {
      id: "PAT-003",
      name: "John Reyes",
      age: 28,
      gender: "Male",
      contact: "+63 934 567 8901",
      email: "john.reyes@email.com",
      lastVisit: "Oct 20, 2025",
      allergies: "None",
      visits: [
        { date: "Oct 20, 2025", service: "Slimming Treatment", doctor: "Dr. M. Dela Cruz" }
      ]
    },
    {
      id: "PAT-004",
      name: "Sofia Garcia",
      age: 35,
      gender: "Female",
      contact: "+63 945 678 9012",
      email: "sofia.garcia@email.com",
      lastVisit: "Oct 22, 2025",
      allergies: "Penicillin",
      visits: [
        { date: "Oct 22, 2025", service: "Body Contouring", doctor: "Dr. A. Santos" }
      ]
    }
  ];

  const handleAddPatient = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Patient added successfully!");
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-playfair text-4xl font-bold text-foreground mb-2">Patient Records</h1>
            <p className="font-poppins text-muted-foreground">Manage patient information and history</p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-poppins bg-[#ab817a] shadow-elegant text-white hover:text-white">
                <Plus className="mr-2 h-4 w-4" />
                Add Patient
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl">Add New Patient</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddPatient} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="font-poppins">Full Name</Label>
                  <Input id="fullName" placeholder="Enter full name" className="font-poppins" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age" className="font-poppins">Age</Label>
                    <Input id="age" type="number" placeholder="Age" className="font-poppins" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender" className="font-poppins">Gender</Label>
                    <Input id="gender" placeholder="Gender" className="font-poppins" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact" className="font-poppins">Contact Number</Label>
                  <Input id="contact" placeholder="+63 XXX XXX XXXX" className="font-poppins" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-poppins">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" className="font-poppins" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allergies" className="font-poppins">Allergies</Label>
                  <Input id="allergies" placeholder="None or list allergies" className="font-poppins" />
                </div>

                <Button type="submit" className="w-full font-poppins bg-[#ab817a]">
                  Add Patient
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <Card className="mb-6 shadow-elegant">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search patients by name, ID, or contact..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 font-poppins"
              />
            </div>
          </CardContent>
        </Card>

        {/* Patient Table */}
        <Card className="shadow-elegant">
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-poppins">Patient ID</TableHead>
                  <TableHead className="font-poppins">Full Name</TableHead>
                  <TableHead className="font-poppins">Contact</TableHead>
                  <TableHead className="font-poppins">Last Visit</TableHead>
                  <TableHead className="font-poppins">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-poppins font-medium">{patient.id}</TableCell>
                    <TableCell className="font-poppins">{patient.name}</TableCell>
                    <TableCell className="font-poppins text-muted-foreground">{patient.contact}</TableCell>
                    <TableCell className="font-poppins text-muted-foreground">{patient.lastVisit}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="font-poppins"
                            onClick={() => setSelectedPatient(patient)}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="font-playfair text-2xl">Patient Details</DialogTitle>
                          </DialogHeader>
                          {selectedPatient && (
                            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground">Patient ID</p>
                                  <p className="font-poppins font-medium">{selectedPatient.id}</p>
                                </div>
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground">Full Name</p>
                                  <p className="font-poppins font-medium">{selectedPatient.name}</p>
                                </div>
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground">Age</p>
                                  <p className="font-poppins font-medium">{selectedPatient.age} years</p>
                                </div>
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground">Gender</p>
                                  <p className="font-poppins font-medium">{selectedPatient.gender}</p>
                                </div>
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground">Contact</p>
                                  <p className="font-poppins font-medium">{selectedPatient.contact}</p>
                                </div>
                                <div>
                                  <p className="font-poppins text-sm text-muted-foreground">Email</p>
                                  <p className="font-poppins font-medium">{selectedPatient.email}</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="font-poppins text-sm text-muted-foreground">Allergies</p>
                                  <p className="font-poppins font-medium">{selectedPatient.allergies}</p>
                                </div>
                              </div>

                              <div>
                                <h3 className="font-playfair text-lg font-semibold mb-3">Visit History</h3>
                                <div className="space-y-2">
                                  {selectedPatient.visits.map((visit: any, index: number) => (
                                    <div key={index} className="p-3 border border-border rounded-lg">
                                      <div className="flex justify-between items-start">
                                        <div>
                                          <p className="font-poppins font-medium">{visit.service}</p>
                                          <p className="font-poppins text-sm text-muted-foreground">{visit.doctor}</p>
                                        </div>
                                        <p className="font-poppins text-sm text-muted-foreground">{visit.date}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
