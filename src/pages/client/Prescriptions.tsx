import { useState } from "react";
import { ClientLayout } from "@/pages/client/ClientLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, FileText, Printer, Clock, User, Pill, Calendar, History, Download, X } from "lucide-react";
import { toast } from "sonner";

export default function Prescriptions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPrescription, setSelectedPrescription] = useState<any>(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const prescriptions = [
    {
      id: "RX-001",
      patient: "Angela Cruz",
      patientId: "PAT-001",
      age: 32,
      gender: "Female",
      contact: "+63 912 345 6789",
      email: "angela.cruz@email.com",
      medication: "Retinol Cream 0.5%",
      medications: [
        { name: "Retinol Cream 0.5%", dosage: "Apply once daily at night", duration: "30 days", quantity: "1 tube" },
        { name: "Hyaluronic Acid Serum", dosage: "Apply twice daily", duration: "60 days", quantity: "1 bottle" },
        { name: "Sunscreen SPF 50", dosage: "Apply every morning", duration: "Ongoing", quantity: "1 bottle" }
      ],
      dosage: "Apply once daily at night",
      doctor: "Dr. M. Dela Cruz",
      doctorLicense: "12345678",
      dateIssued: "Dec 15, 2024",
      validUntil: "Jan 15, 2025",
      status: "Active",
      notes: "Continue skincare routine. Avoid direct sunlight. Follow up in 2 weeks.",
      instructions: "Apply retinol cream at night after cleansing. Use hyaluronic acid serum in the morning and evening. Always apply sunscreen before going outside.",
      warnings: "Avoid using retinol with other exfoliants. Discontinue if irritation occurs."
    },
    {
      id: "RX-002",
      patient: "Maria Santos",
      patientId: "PAT-002",
      age: 28,
      gender: "Female",
      contact: "+63 923 456 7890",
      email: "maria.santos@email.com",
      medication: "Vitamin C Supplement",
      medications: [
        { name: "Vitamin C Supplement", dosage: "500mg once daily", duration: "30 days", quantity: "30 capsules" },
        { name: "Glutathione Capsules", dosage: "500mg twice daily", duration: "60 days", quantity: "60 capsules" }
      ],
      dosage: "500mg once daily",
      doctor: "Dr. J. Reyes",
      doctorLicense: "87654321",
      dateIssued: "Nov 20, 2024",
      validUntil: "Dec 20, 2024",
      status: "Active",
      notes: "Take with meals. Monitor for any side effects.",
      instructions: "Take Vitamin C supplement once daily with breakfast. Take Glutathione capsules twice daily with meals.",
      warnings: "May cause mild stomach upset. Take with food to minimize."
    },
    {
      id: "RX-003",
      patient: "Sofia Garcia",
      patientId: "PAT-004",
      age: 29,
      gender: "Female",
      contact: "+63 945 678 9012",
      email: "sofia.garcia@email.com",
      medication: "Moisturizing Lotion",
      medications: [
        { name: "Moisturizing Lotion", dosage: "Apply to treated areas twice daily", duration: "14 days", quantity: "1 bottle" },
        { name: "Vitamin E Oil", dosage: "Apply at night", duration: "30 days", quantity: "1 bottle" }
      ],
      dosage: "Apply to treated areas twice daily",
      doctor: "Dr. A. Santos",
      doctorLicense: "11223344",
      dateIssued: "Dec 20, 2024",
      validUntil: "Jan 20, 2025",
      status: "Active",
      notes: "Avoid sun exposure. Use sunscreen daily. No strenuous exercise for 48 hours.",
      instructions: "Apply moisturizing lotion to treated areas in the morning and evening. Use Vitamin E oil at night before bed.",
      warnings: "Keep away from eyes. Discontinue if rash or irritation develops."
    },
    {
      id: "RX-004",
      patient: "John Reyes",
      patientId: "PAT-003",
      age: 35,
      gender: "Male",
      contact: "+63 934 567 8901",
      email: "john.reyes@email.com",
      medication: "Topical Cream",
      medications: [
        { name: "Topical Cream", dosage: "Apply to treated areas twice daily", duration: "14 days", quantity: "1 tube" },
        { name: "Compression Garment", dosage: "Wear for 6-8 hours daily", duration: "30 days", quantity: "1 piece" }
      ],
      dosage: "Apply to treated areas twice daily",
      doctor: "Dr. M. Dela Cruz",
      doctorLicense: "12345678",
      dateIssued: "Dec 12, 2024",
      validUntil: "Jan 12, 2025",
      status: "Active",
      notes: "Maintain healthy diet. Continue exercise routine. Follow up in 1 month.",
      instructions: "Apply topical cream to treated areas in the morning and evening. Wear compression garment for 6-8 hours daily, preferably during the day.",
      warnings: "Do not apply to broken skin. Remove compression garment if discomfort occurs."
    },
    {
      id: "RX-005",
      patient: "Catherine Lim",
      patientId: "PAT-005",
      age: 41,
      gender: "Female",
      contact: "+63 956 789 0123",
      email: "catherine.lim@email.com",
      medication: "Arnica Gel",
      medications: [
        { name: "Arnica Gel", dosage: "Apply to injection sites 3x daily", duration: "7 days", quantity: "1 tube" },
        { name: "Hyaluronic Acid Serum", dosage: "Apply twice daily", duration: "30 days", quantity: "1 bottle" }
      ],
      dosage: "Apply to injection sites 3x daily",
      doctor: "Dr. M. Dela Cruz",
      doctorLicense: "12345678",
      dateIssued: "Dec 10, 2024",
      validUntil: "Jan 10, 2025",
      status: "Active",
      notes: "Avoid touching treated areas. No makeup for 24 hours. Apply cold compress if needed.",
      instructions: "Apply Arnica gel to injection sites three times daily. Use Hyaluronic Acid Serum in the morning and evening.",
      warnings: "Do not apply Arnica gel to open wounds. Avoid touching injection sites."
    },
    {
      id: "RX-006",
      patient: "Patricia Ong",
      patientId: "PAT-007",
      age: 33,
      gender: "Female",
      contact: "+63 978 901 2345",
      email: "patricia.ong@email.com",
      medication: "Gentle Cleanser",
      medications: [
        { name: "Gentle Cleanser", dosage: "Use twice daily", duration: "Ongoing", quantity: "1 bottle" },
        { name: "Moisturizing Cream", dosage: "Apply morning and night", duration: "60 days", quantity: "1 jar" },
        { name: "Sunscreen SPF 50", dosage: "Apply every morning", duration: "Ongoing", quantity: "1 bottle" }
      ],
      dosage: "Use twice daily",
      doctor: "Dr. M. Dela Cruz",
      doctorLicense: "12345678",
      dateIssued: "Dec 14, 2024",
      validUntil: "Jan 14, 2025",
      status: "Active",
      notes: "Maintain gentle skincare routine. Avoid harsh products.",
      instructions: "Use gentle cleanser in the morning and evening. Apply moisturizing cream after cleansing. Always apply sunscreen in the morning.",
      warnings: "Avoid using with other exfoliating products. Patch test before full application."
    }
  ];

  // Patient prescription history data
  const patientHistory: { [key: string]: any[] } = {
    "Angela Cruz": [
      {
        id: "RX-001",
        date: "Dec 15, 2024",
        medication: "Retinol Cream 0.5%",
        doctor: "Dr. M. Dela Cruz",
        status: "Active"
      },
      {
        id: "RX-002",
        date: "Nov 20, 2024",
        medication: "Vitamin C Supplement",
        doctor: "Dr. J. Reyes",
        status: "Completed"
      },
      {
        id: "RX-003",
        date: "Oct 25, 2024",
        medication: "Hyaluronic Acid Serum",
        doctor: "Dr. M. Dela Cruz",
        status: "Completed"
      }
    ],
    "Maria Santos": [
      {
        id: "RX-002",
        date: "Nov 20, 2024",
        medication: "Vitamin C Supplement",
        doctor: "Dr. J. Reyes",
        status: "Active"
      },
      {
        id: "RX-004",
        date: "Nov 15, 2024",
        medication: "Arnica Gel",
        doctor: "Dr. M. Dela Cruz",
        status: "Completed"
      }
    ],
    "Sofia Garcia": [
      {
        id: "RX-003",
        date: "Dec 20, 2024",
        medication: "Moisturizing Lotion",
        doctor: "Dr. A. Santos",
        status: "Active"
      },
      {
        id: "RX-007",
        date: "Nov 25, 2024",
        medication: "Gentle Cleanser",
        doctor: "Dr. M. Dela Cruz",
        status: "Completed"
      }
    ],
    "John Reyes": [
      {
        id: "RX-004",
        date: "Dec 12, 2024",
        medication: "Topical Cream",
        doctor: "Dr. M. Dela Cruz",
        status: "Active"
      }
    ],
    "Catherine Lim": [
      {
        id: "RX-005",
        date: "Dec 10, 2024",
        medication: "Arnica Gel",
        doctor: "Dr. M. Dela Cruz",
        status: "Active"
      }
    ],
    "Patricia Ong": [
      {
        id: "RX-006",
        date: "Dec 14, 2024",
        medication: "Gentle Cleanser",
        doctor: "Dr. M. Dela Cruz",
        status: "Active"
      },
      {
        id: "RX-011",
        date: "Nov 18, 2024",
        medication: "Vitamin C Supplement",
        doctor: "Dr. J. Reyes",
        status: "Completed"
      }
    ]
  };

  const handleAddPrescription = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Prescription created successfully!");
  };

  const getStatusColor = (status: string) => {
    return status === "Active" 
      ? "bg-green-100 text-green-700 border border-green-200" 
      : status === "Completed"
      ? "bg-blue-100 text-blue-700 border border-blue-200"
      : "bg-gray-100 text-gray-700 border border-gray-200";
  };

  const filteredPrescriptions = prescriptions.filter(rx =>
    rx.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rx.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rx.medication.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleViewPrescription = (prescription: any) => {
    setSelectedPrescription(prescription);
  };

  const handleViewHistory = () => {
    setShowHistoryModal(true);
  };

  const handlePrintPrescription = (prescription: any) => {
    window.print();
    toast.success(`Printing prescription ${prescription.id}`);
  };

  return (
    <ClientLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-playfair text-4xl font-bold text-foreground mb-2">E-Prescription Tracker</h1>
            <p className="font-poppins text-muted-foreground">Manage and track patient prescriptions</p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-poppins bg-[#ab817a] shadow-elegant text-white hover:text-white">
                <Plus className="mr-2 h-4 w-4" />
                Add Prescription
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl">Create Prescription</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddPrescription} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="patient" className="font-poppins">Patient Name</Label>
                  <Input id="patient" placeholder="Select patient" className="font-poppins" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medication" className="font-poppins">Medication Name</Label>
                  <Input id="medication" placeholder="Enter medication" className="font-poppins" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dosage" className="font-poppins">Dosage & Instructions</Label>
                  <Textarea 
                    id="dosage" 
                    placeholder="e.g., Take 1 tablet twice daily after meals" 
                    className="font-poppins"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="remarks" className="font-poppins">Remarks (Optional)</Label>
                  <Textarea 
                    id="remarks" 
                    placeholder="Additional notes or warnings" 
                    className="font-poppins"
                    rows={2}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-poppins">Doctor's Name</Label>
                  <Input value="Dr. M. Dela Cruz" disabled className="font-poppins" />
                </div>

                <Button type="submit" className="w-full font-poppins bg-[#ab817a]">
                  Create Prescription
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
                placeholder="Search prescriptions by patient, medication, or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 font-poppins"
              />
            </div>
          </CardContent>
        </Card>

        {/* Prescription Table */}
        <Card className="shadow-elegant">
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-poppins">Prescription ID</TableHead>
                  <TableHead className="font-poppins">Patient Name</TableHead>
                  <TableHead className="font-poppins">Medication</TableHead>
                  <TableHead className="font-poppins">Dosage</TableHead>
                  <TableHead className="font-poppins">Status</TableHead>
                  <TableHead className="font-poppins">Date Issued</TableHead>
                  <TableHead className="font-poppins">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPrescriptions.map((rx) => (
                  <TableRow key={rx.id} className="hover:bg-secondary/30">
                    <TableCell className="font-poppins font-medium">{rx.id}</TableCell>
                    <TableCell className="font-poppins">{rx.patient}</TableCell>
                    <TableCell className="font-poppins">{rx.medication}</TableCell>
                    <TableCell className="font-poppins text-muted-foreground text-sm">{rx.dosage}</TableCell>
                    <TableCell>
                      <span className={`px-3 py-1 rounded-full text-xs font-poppins font-medium ${getStatusColor(rx.status)}`}>
                        {rx.status}
                      </span>
                    </TableCell>
                    <TableCell className="font-poppins text-muted-foreground">{rx.dateIssued}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="font-poppins hover:bg-[#ab817a] hover:text-white transition-colors"
                              onClick={() => handleViewPrescription(rx)}
                            >
                              <FileText className="mr-2 h-4 w-4" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                            {selectedPrescription && (
                              <>
                                <DialogHeader>
                                  <DialogTitle className="font-playfair text-2xl flex items-center gap-2">
                                    <Pill className="h-6 w-6 text-[#ab817a]" />
                                    Prescription Details
                                  </DialogTitle>
                                </DialogHeader>
                                
                                <div className="space-y-6">
                                  {/* Patient Information */}
                                  <Card className="border-2 border-[#ab817a]/20">
                                    <CardContent className="pt-6">
                                      <h3 className="font-playfair text-xl font-semibold mb-4 flex items-center gap-2">
                                        <User className="h-5 w-5 text-[#ab817a]" />
                                        Patient Information
                                      </h3>
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <p className="font-poppins text-sm text-muted-foreground mb-1">Patient Name</p>
                                          <p className="font-poppins font-semibold text-base">{selectedPrescription.patient}</p>
                                        </div>
                                        <div>
                                          <p className="font-poppins text-sm text-muted-foreground mb-1">Patient ID</p>
                                          <p className="font-poppins font-semibold text-base">{selectedPrescription.patientId}</p>
                                        </div>
                                        <div>
                                          <p className="font-poppins text-sm text-muted-foreground mb-1">Age</p>
                                          <p className="font-poppins font-semibold text-base">{selectedPrescription.age} years old</p>
                                        </div>
                                        <div>
                                          <p className="font-poppins text-sm text-muted-foreground mb-1">Gender</p>
                                          <p className="font-poppins font-semibold text-base">{selectedPrescription.gender}</p>
                                        </div>
                                        <div>
                                          <p className="font-poppins text-sm text-muted-foreground mb-1">Contact</p>
                                          <p className="font-poppins font-semibold text-base">{selectedPrescription.contact}</p>
                                        </div>
                                        <div>
                                          <p className="font-poppins text-sm text-muted-foreground mb-1">Email</p>
                                          <p className="font-poppins font-semibold text-base">{selectedPrescription.email}</p>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>

                                  {/* Prescription Information */}
                                  <Card className="border-2 border-[#ab817a]/20">
                                    <CardContent className="pt-6">
                                      <h3 className="font-playfair text-xl font-semibold mb-4 flex items-center gap-2">
                                        <Pill className="h-5 w-5 text-[#ab817a]" />
                                        Prescription Information
                                      </h3>
                                      <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                          <p className="font-poppins text-sm text-muted-foreground mb-1">Prescription ID</p>
                                          <p className="font-poppins font-semibold text-base">{selectedPrescription.id}</p>
                                        </div>
                                        <div>
                                          <p className="font-poppins text-sm text-muted-foreground mb-1">Date Issued</p>
                                          <p className="font-poppins font-semibold text-base flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            {selectedPrescription.dateIssued}
                                          </p>
                                        </div>
                                        <div>
                                          <p className="font-poppins text-sm text-muted-foreground mb-1">Valid Until</p>
                                          <p className="font-poppins font-semibold text-base">{selectedPrescription.validUntil}</p>
                                        </div>
                                        <div>
                                          <p className="font-poppins text-sm text-muted-foreground mb-1">Status</p>
                                          <span className={`px-3 py-1 rounded-full text-xs font-poppins font-medium ${getStatusColor(selectedPrescription.status)}`}>
                                            {selectedPrescription.status}
                                          </span>
                                        </div>
                                        <div className="col-span-2">
                                          <p className="font-poppins text-sm text-muted-foreground mb-1">Prescribed by</p>
                                          <p className="font-poppins font-semibold text-base">{selectedPrescription.doctor}</p>
                                          <p className="font-poppins text-xs text-muted-foreground">License No: {selectedPrescription.doctorLicense}</p>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>

                                  {/* Medications */}
                                  <Card className="border-2 border-[#ab817a]/20">
                                    <CardContent className="pt-6">
                                      <h3 className="font-playfair text-xl font-semibold mb-4 flex items-center gap-2">
                                        <Pill className="h-5 w-5 text-[#ab817a]" />
                                        Medications ({selectedPrescription.medications.length})
                                      </h3>
                                      <div className="space-y-3">
                                        {selectedPrescription.medications.map((med: any, index: number) => (
                                          <div key={index} className="p-4 border border-border rounded-lg bg-blue-50/30">
                                            <div className="flex items-start justify-between mb-2">
                                              <div className="flex-1">
                                                <p className="font-poppins font-semibold text-base">{index + 1}. {med.name}</p>
                                                <p className="font-poppins text-sm text-muted-foreground mt-1">Quantity: {med.quantity}</p>
                                              </div>
                                            </div>
                                            <div className="space-y-1 mt-2">
                                              <p className="font-poppins text-sm">
                                                <span className="font-semibold">Dosage:</span> {med.dosage}
                                              </p>
                                              <p className="font-poppins text-sm">
                                                <span className="font-semibold">Duration:</span> {med.duration}
                                              </p>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </CardContent>
                                  </Card>

                                  {/* Instructions */}
                                  <Card className="border-2 border-[#ab817a]/20">
                                    <CardContent className="pt-6">
                                      <h3 className="font-playfair text-xl font-semibold mb-4 flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-[#ab817a]" />
                                        Instructions
                                      </h3>
                                      <p className="font-poppins text-sm text-foreground whitespace-pre-line">
                                        {selectedPrescription.instructions}
                                      </p>
                                    </CardContent>
                                  </Card>

                                  {/* Warnings */}
                                  {selectedPrescription.warnings && (
                                    <Card className="border-2 border-yellow-200 bg-yellow-50/30">
                                      <CardContent className="pt-6">
                                        <h3 className="font-playfair text-xl font-semibold mb-4 text-yellow-700">
                                          ⚠️ Warnings
                                        </h3>
                                        <p className="font-poppins text-sm text-yellow-800">
                                          {selectedPrescription.warnings}
                                        </p>
                                      </CardContent>
                                    </Card>
                                  )}

                                  {/* Notes */}
                                  {selectedPrescription.notes && (
                                    <Card className="border-2 border-[#ab817a]/20">
                                      <CardContent className="pt-6">
                                        <h3 className="font-playfair text-xl font-semibold mb-4">Additional Notes</h3>
                                        <p className="font-poppins text-sm text-muted-foreground">
                                          {selectedPrescription.notes}
                                        </p>
                                      </CardContent>
                                    </Card>
                                  )}
                                </div>

                                <DialogFooter className="gap-2 mt-6">
                                  <Button
                                    variant="outline"
                                    onClick={() => setSelectedPrescription(null)}
                                    className="font-poppins"
                                  >
                                    Close
                                  </Button>
                                  <Button
                                    variant="outline"
                                    onClick={handleViewHistory}
                                    className="font-poppins"
                                  >
                                    <History className="mr-2 h-4 w-4" />
                                    View Patient History
                                  </Button>
                                  <Button
                                    onClick={() => handlePrintPrescription(selectedPrescription)}
                                    className="font-poppins bg-gradient-to-r from-[#ab817a] to-[#ba9993] hover:from-[#ba9993] hover:to-[#ab817a] text-white"
                                  >
                                    <Printer className="mr-2 h-4 w-4" />
                                    Print
                                  </Button>
                                </DialogFooter>
                              </>
                            )}
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="outline"
                          size="sm"
                          className="font-poppins hover:bg-[#ab817a] hover:text-white transition-colors"
                          onClick={() => handlePrintPrescription(rx)}
                        >
                          <Printer className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Patient Prescription History Modal */}
        <Dialog open={showHistoryModal} onOpenChange={setShowHistoryModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedPrescription && patientHistory[selectedPrescription.patient] && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-playfair text-2xl flex items-center gap-2">
                    <History className="h-6 w-6 text-[#ab817a]" />
                    Prescription History - {selectedPrescription.patient}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4">
                  {/* Patient Summary */}
                  <Card className="border-2 border-[#ab817a]/20">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-poppins font-semibold text-lg">{selectedPrescription.patient}</p>
                          <p className="font-poppins text-sm text-muted-foreground">Patient ID: {selectedPrescription.patientId}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-poppins text-sm text-muted-foreground">Total Prescriptions</p>
                          <p className="font-playfair text-2xl font-bold text-[#ab817a]">
                            {patientHistory[selectedPrescription.patient].length}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* History List */}
                  <div className="space-y-3">
                    {patientHistory[selectedPrescription.patient].map((historyRx, index) => (
                      <Card 
                        key={index} 
                        className={`border-2 ${
                          historyRx.id === selectedPrescription.id 
                            ? "border-[#ab817a] bg-[#ab817a]/5" 
                            : "border-border"
                        } hover:shadow-md transition-all`}
                      >
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                                  historyRx.id === selectedPrescription.id
                                    ? "bg-gradient-to-br from-[#ab817a] to-[#ba9993] text-white"
                                    : "bg-secondary text-foreground"
                                }`}>
                                  <Pill className="h-5 w-5" />
                                </div>
                                <div>
                                  <p className="font-poppins font-semibold text-base">{historyRx.medication}</p>
                                  <p className="font-poppins text-sm text-muted-foreground">Prescription #{historyRx.id}</p>
                                </div>
                              </div>
                              <div className="ml-13 space-y-1">
                                <p className="font-poppins text-sm flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-muted-foreground">Date Issued:</span>
                                  <span className="font-medium">{historyRx.date}</span>
                                </p>
                                <p className="font-poppins text-sm flex items-center gap-2">
                                  <User className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-muted-foreground">Prescribed by:</span>
                                  <span className="font-medium">{historyRx.doctor}</span>
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-poppins font-medium ${getStatusColor(historyRx.status)}`}>
                                {historyRx.status}
                              </span>
                              {historyRx.id === selectedPrescription.id && (
                                <span className="px-2 py-1 rounded text-xs font-poppins font-medium bg-[#ab817a] text-white">
                                  Current
                                </span>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Statistics */}
                  <Card className="border-2 border-[#ab817a]/20 bg-gradient-to-br from-[#ab817a]/5 to-transparent">
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="font-poppins text-sm text-muted-foreground mb-1">Active</p>
                          <p className="font-playfair text-2xl font-bold text-green-600">
                            {patientHistory[selectedPrescription.patient].filter((h: any) => h.status === "Active").length}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="font-poppins text-sm text-muted-foreground mb-1">Completed</p>
                          <p className="font-playfair text-2xl font-bold text-blue-600">
                            {patientHistory[selectedPrescription.patient].filter((h: any) => h.status === "Completed").length}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="font-poppins text-sm text-muted-foreground mb-1">Total</p>
                          <p className="font-playfair text-2xl font-bold text-[#ab817a]">
                            {patientHistory[selectedPrescription.patient].length}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <DialogFooter className="mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setShowHistoryModal(false)}
                    className="font-poppins"
                  >
                    Close
                  </Button>
                  <Button
                    onClick={() => {
                      setShowHistoryModal(false);
                      handlePrintPrescription(selectedPrescription);
                    }}
                    className="font-poppins bg-gradient-to-r from-[#ab817a] to-[#ba9993] hover:from-[#ba9993] hover:to-[#ab817a] text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Export History
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </ClientLayout>
  );
}
