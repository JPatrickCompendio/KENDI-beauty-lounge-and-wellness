import jsPDF from "jspdf";
import html2canvas from "html2canvas";
  const handleSavePrescriptionPDF = async (prescription: any) => {
    const printId = `printable-prescription-${prescription.id}`;
    const printContents = document.getElementById(printId);
    if (printContents) {
      const canvas = await html2canvas(printContents, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: [canvas.width, canvas.height] });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`Prescription-${prescription.id}.pdf`);
    } else {
      toast.error('Prescription details not found for saving.');
    }
  };
import { useState } from "react";
import { DashboardLayout } from "@/pages/doctor/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, FileText, Printer } from "lucide-react";
import { toast } from "sonner";

export default function Prescriptions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPrescription, setSelectedPrescription] = useState<any>(null);

  const prescriptions = [
    {
      id: "RX-001",
      patient: "Angela Cruz",
      medication: "Glutathione 1200mg IV",
      dosage: "Once weekly for 3 sessions",
      doctor: "Dr. M. Dela Cruz",
      dateIssued: "Oct 25, 2025",
      status: "Active"
    },
    {
      id: "RX-002",
      patient: "Maria Santos",
      medication: "Vitamin C 1000mg",
      dosage: "Once daily for 30 days",
      doctor: "Dr. J. Reyes",
      dateIssued: "Oct 27, 2025",
      status: "Active"
    },
    {
      id: "RX-003",
      patient: "Sofia Garcia",
      medication: "Collagen Supplement",
      dosage: "Twice daily with meals",
      doctor: "Dr. A. Santos",
      dateIssued: "Oct 22, 2025",
      status: "Completed"
    },
    {
      id: "RX-004",
      patient: "John Reyes",
      medication: "L-Carnitine Injectable",
      dosage: "Twice weekly for 4 weeks",
      doctor: "Dr. M. Dela Cruz",
      dateIssued: "Oct 20, 2025",
      status: "Active"
    }
  ];

  const handleAddPrescription = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Prescription created successfully!");
  };

  const handlePrintPrescription = (prescription: any) => {
    // Use a unique id for each prescription
    const printId = `printable-prescription-${prescription.id}`;
    const printContents = document.getElementById(printId);
    if (printContents) {
      const printWindow = window.open('', '', 'height=600,width=800');
      printWindow.document.write('<html><head><title>Print Prescription</title>');
      printWindow.document.write('<style>body{font-family:sans-serif;padding:24px;} .font-playfair{font-family:Playfair Display,serif;} .font-poppins{font-family:Poppins,sans-serif;} .rounded-lg{border-radius:0.5rem;} .border{border:1px solid #e5e7eb;} .bg-secondary\/20{background-color:#f3f4f6;} .px-3{padding-left:0.75rem;padding-right:0.75rem;} .py-1{padding-top:0.25rem;padding-bottom:0.25rem;} .text-xs{font-size:0.75rem;} .font-medium{font-weight:500;} .text-muted-foreground{color:#6b7280;} .text-foreground{color:#111827;} .mb-1{margin-bottom:0.25rem;} .mb-3{margin-bottom:0.75rem;} .mb-4{margin-bottom:1rem;} .mb-6{margin-bottom:1.5rem;} .p-6{padding:1.5rem;} .mt-4{margin-top:1rem;} .text-center{text-align:center;} .grid{display:grid;} .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));} .gap-4{gap:1rem;} </style>');
      printWindow.document.write('</head><body >');
      printWindow.document.write(printContents.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    } else {
      toast.error('Prescription details not found for printing.');
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Active" 
      ? "bg-green-100 text-green-700" 
      : "bg-blue-100 text-blue-700";
  };

  return (
    <DashboardLayout>
      <div className="p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="min-w-0">
            <h1 className="font-playfair text-4xl font-bold text-foreground mb-2">E-Prescription Tracker</h1>
            <p className="font-poppins text-muted-foreground">Manage and track patient prescriptions</p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-poppins bg-primary text-white shadow-elegant hover:bg-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                Add Prescription
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[95vw] max-w-md md:max-w-lg">
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

                <Button type="submit" className="w-full font-poppins bg-primary text-white hover:bg-primary/90">
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
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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
            <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-poppins whitespace-nowrap">Prescription ID</TableHead>
                  <TableHead className="font-poppins whitespace-nowrap">Patient Name</TableHead>
                  <TableHead className="font-poppins">Medication</TableHead>
                  <TableHead className="font-poppins min-w-[180px]">Dosage</TableHead>
                  <TableHead className="font-poppins">Status</TableHead>
                  <TableHead className="font-poppins whitespace-nowrap">Date Issued</TableHead>
                  <TableHead className="font-poppins whitespace-nowrap">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prescriptions.map((rx) => (
                  <TableRow key={rx.id}>
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
                      <div className="flex flex-wrap gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className="font-poppins"
                              onClick={() => setSelectedPrescription(rx)}
                            >
                              <FileText className="mr-2 h-4 w-4" />
                              View Prescription
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="w-[95vw] max-w-xl md:max-w-2xl">
                            <DialogHeader>
                              <DialogTitle className="font-playfair text-2xl">Prescription</DialogTitle>
                            </DialogHeader>
                            {selectedPrescription && (
                              <>
                                <div id={`printable-prescription-${selectedPrescription.id}`} style={{display:'block'}}>
                                  <div className="border border-border rounded-lg bg-white p-8 shadow-lg max-w-xl mx-auto mt-4">
                                    <div className="flex items-center mb-6">
                                      <img src="/src/assets/kendi-logo.png" alt="Clinic Logo" className="h-16 w-16 mr-4" />
                                      <div>
                                        <h2 className="font-playfair text-3xl font-bold text-foreground mb-1">Kendi Beauty Lounge & Wellness</h2>
                                        <p className="font-poppins text-sm text-muted-foreground">Baliuag & Malolos, Bulacan</p>
                                        <p className="font-poppins text-sm text-muted-foreground">Contact: +63 123 456 7890</p>
                                      </div>
                                    </div>
                                    <div className="border-b border-border mb-4"></div>
                                    <div className="flex justify-between mb-4">
                                      <div>
                                        <p className="font-poppins text-xs text-muted-foreground">Date Issued:</p>
                                        <p className="font-poppins text-base font-medium">{selectedPrescription.dateIssued}</p>
                                      </div>
                                      <div>
                                        <p className="font-poppins text-xs text-muted-foreground">Prescription ID:</p>
                                        <p className="font-poppins text-base font-medium">{selectedPrescription.id}</p>
                                      </div>
                                    </div>
                                    <div className="mb-6">
                                      <p className="font-poppins text-xs text-muted-foreground">Patient Name:</p>
                                      <p className="font-poppins text-lg font-semibold">{selectedPrescription.patient}</p>
                                    </div>
                                    <div className="mb-6">
                                      <p className="font-poppins text-xs text-muted-foreground">Medication:</p>
                                      <p className="font-poppins text-lg font-semibold">{selectedPrescription.medication}</p>
                                    </div>
                                    <div className="mb-6">
                                      <p className="font-poppins text-xs text-muted-foreground">Dosage & Instructions:</p>
                                      <p className="font-poppins text-base">{selectedPrescription.dosage}</p>
                                    </div>
                                    <div className="mb-6">
                                      <p className="font-poppins text-xs text-muted-foreground">Prescribing Doctor:</p>
                                      <p className="font-poppins text-base font-semibold">{selectedPrescription.doctor}</p>
                                    </div>
                                    <div className="mb-6">
                                      <p className="font-poppins text-xs text-muted-foreground">Status:</p>
                                      <span className={`px-3 py-1 rounded-full text-xs font-poppins font-medium ${getStatusColor(selectedPrescription.status)}`}>{selectedPrescription.status}</span>
                                    </div>
                                    <div className="flex justify-end mt-8">
                                      <div className="text-right">
                                        <p className="font-poppins text-xs text-muted-foreground mb-2">Signature:</p>
                                        <div className="border-b border-border w-48 mb-2"></div>
                                        <p className="font-poppins text-xs text-muted-foreground">{selectedPrescription.doctor}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-wrap justify-end mt-6 gap-2">
                                  <Button variant="outline" size="sm" className="font-poppins" onClick={() => handlePrintPrescription(selectedPrescription)}>
                                    <Printer className="h-4 w-4 mr-2" /> Print
                                  </Button>
                                  <Button variant="outline" size="sm" className="font-poppins" onClick={() => handleSavePrescriptionPDF(selectedPrescription)}>
                                    Save as PDF
                                  </Button>
                                </div>
                              </>
                            )}
                          </DialogContent>
                        </Dialog>
                        {/* Remove extra Print button outside modal to avoid confusion */}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
