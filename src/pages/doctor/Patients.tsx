import { useState } from "react";
import { DashboardLayout } from "@/pages/doctor/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Eye, FileText, Download, Calendar, Phone, Mail, MapPin, User, Heart, Pill, Clock, Stethoscope } from "lucide-react";
import { toast } from "sonner";

export default function Patients() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [showReport, setShowReport] = useState(false);

  const patients = [
    {
      id: "PAT-001",
      name: "Angela Cruz",
      age: 32,
      gender: "Female",
      contact: "+63 912 345 6789",
      email: "angela.cruz@email.com",
      address: "123 Main Street, Baliuag, Bulacan 3006",
      dateOfBirth: "March 15, 1992",
      bloodType: "O+",
      emergencyContact: "Maria Cruz - +63 912 345 6790",
      lastVisit: "Dec 15, 2024",
      registeredDate: "Jan 10, 2023",
      allergies: "None",
      medicalHistory: [
        "Hypertension (controlled with medication)",
        "Previous facial treatments - no complications"
      ],
      visits: [
        { 
          date: "Dec 15, 2024", 
          service: "Facial Rejuvenation", 
          doctor: "Dr. M. Dela Cruz",
          duration: "45 min",
          notes: "Patient responded well to treatment. Skin showed significant improvement.",
          cost: "₱3,500"
        },
        { 
          date: "Nov 20, 2024", 
          service: "Gluta Drip Therapy", 
          doctor: "Dr. J. Reyes",
          duration: "60 min",
          notes: "Regular maintenance session. No adverse reactions.",
          cost: "₱2,500"
        },
        { 
          date: "Oct 25, 2024", 
          service: "BB Glow Facial", 
          doctor: "Dr. M. Dela Cruz",
          duration: "60 min",
          notes: "Initial treatment. Patient satisfied with results.",
          cost: "₱4,000"
        },
        { 
          date: "Sep 10, 2024", 
          service: "Facial Rejuvenation", 
          doctor: "Dr. M. Dela Cruz",
          duration: "45 min",
          notes: "Follow-up treatment. Continued improvement observed.",
          cost: "₱3,500"
        }
      ],
      prescriptions: [
        {
          id: "RX-001",
          date: "Dec 15, 2024",
          doctor: "Dr. M. Dela Cruz",
          medications: [
            { name: "Retinol Cream 0.5%", dosage: "Apply once daily at night", duration: "30 days" },
            { name: "Hyaluronic Acid Serum", dosage: "Apply twice daily", duration: "60 days" },
            { name: "Sunscreen SPF 50", dosage: "Apply every morning", duration: "Ongoing" }
          ],
          notes: "Continue skincare routine. Avoid direct sunlight. Follow up in 2 weeks."
        },
        {
          id: "RX-002",
          date: "Nov 20, 2024",
          doctor: "Dr. J. Reyes",
          medications: [
            { name: "Vitamin C Supplement", dosage: "500mg once daily", duration: "30 days" },
            { name: "Glutathione Capsules", dosage: "500mg twice daily", duration: "60 days" }
          ],
          notes: "Take with meals. Monitor for any side effects."
        }
      ],
      totalSpent: "₱13,500",
      nextAppointment: "Jan 15, 2025"
    },
    {
      id: "PAT-002",
      name: "Maria Santos",
      age: 28,
      gender: "Female",
      contact: "+63 923 456 7890",
      email: "maria.santos@email.com",
      address: "456 City Center, Malolos, Bulacan 3000",
      dateOfBirth: "July 22, 1996",
      bloodType: "A+",
      emergencyContact: "Juan Santos - +63 923 456 7891",
      lastVisit: "Dec 18, 2024",
      registeredDate: "Feb 15, 2023",
      allergies: "Aspirin, Latex",
      medicalHistory: [
        "No significant medical history",
        "Regular aesthetic treatments since 2023"
      ],
      visits: [
        { 
          date: "Dec 18, 2024", 
          service: "Gluta Drip Therapy", 
          doctor: "Dr. J. Reyes",
          duration: "60 min",
          notes: "Regular maintenance. Patient reported improved skin tone.",
          cost: "₱2,500"
        },
        { 
          date: "Nov 15, 2024", 
          service: "Botox & Fillers", 
          doctor: "Dr. M. Dela Cruz",
          duration: "30 min",
          notes: "Forehead and crow's feet treatment. Results satisfactory.",
          cost: "₱15,000"
        },
        { 
          date: "Oct 10, 2024", 
          service: "Body Contouring", 
          doctor: "Dr. A. Santos",
          duration: "90 min",
          notes: "Mesolipo treatment. Patient satisfied with initial results.",
          cost: "₱8,000"
        }
      ],
      prescriptions: [
        {
          id: "RX-003",
          date: "Dec 18, 2024",
          doctor: "Dr. J. Reyes",
          medications: [
            { name: "Vitamin C Serum", dosage: "Apply in the morning", duration: "30 days" },
            { name: "Moisturizing Cream", dosage: "Apply twice daily", duration: "Ongoing" }
          ],
          notes: "Maintain hydration. Avoid harsh skincare products."
        },
        {
          id: "RX-004",
          date: "Nov 15, 2024",
          doctor: "Dr. M. Dela Cruz",
          medications: [
            { name: "Arnica Gel", dosage: "Apply to injection sites as needed", duration: "7 days" }
          ],
          notes: "Apply cold compress if swelling occurs. Avoid touching treated areas."
        }
      ],
      totalSpent: "₱25,500",
      nextAppointment: "Jan 20, 2025"
    },
    {
      id: "PAT-003",
      name: "John Reyes",
      age: 35,
      gender: "Male",
      contact: "+63 934 567 8901",
      email: "john.reyes@email.com",
      address: "789 Poblacion, Baliuag, Bulacan 3006",
      dateOfBirth: "September 5, 1989",
      bloodType: "B+",
      emergencyContact: "Anna Reyes - +63 934 567 8902",
      lastVisit: "Dec 12, 2024",
      registeredDate: "Mar 20, 2024",
      allergies: "None",
      medicalHistory: [
        "Type 2 Diabetes (well-controlled)",
        "Regular exercise routine"
      ],
      visits: [
        { 
          date: "Dec 12, 2024", 
          service: "Slimming Treatment", 
          doctor: "Dr. M. Dela Cruz",
          duration: "90 min",
          notes: "Mesolipo + RF treatment. Patient following diet plan.",
          cost: "₱12,000"
        },
        { 
          date: "Nov 8, 2024", 
          service: "Laser Hair Removal", 
          doctor: "Dr. A. Santos",
          duration: "45 min",
          notes: "Chest and back treatment. Good progress.",
          cost: "₱5,000"
        },
        { 
          date: "Oct 5, 2024", 
          service: "Slimming Treatment", 
          doctor: "Dr. M. Dela Cruz",
          duration: "90 min",
          notes: "Initial consultation and first treatment session.",
          cost: "₱12,000"
        }
      ],
      prescriptions: [
        {
          id: "RX-005",
          date: "Dec 12, 2024",
          doctor: "Dr. M. Dela Cruz",
          medications: [
            { name: "Topical Cream", dosage: "Apply to treated areas twice daily", duration: "14 days" },
            { name: "Compression Garment", dosage: "Wear for 6-8 hours daily", duration: "30 days" }
          ],
          notes: "Maintain healthy diet. Continue exercise routine. Follow up in 1 month."
        }
      ],
      totalSpent: "₱29,000",
      nextAppointment: "Jan 12, 2025"
    },
    {
      id: "PAT-004",
      name: "Sofia Garcia",
      age: 29,
      gender: "Female",
      contact: "+63 945 678 9012",
      email: "sofia.garcia@email.com",
      address: "321 Barangay Road, Malolos, Bulacan 3000",
      dateOfBirth: "April 18, 1995",
      bloodType: "AB+",
      emergencyContact: "Carlos Garcia - +63 945 678 9013",
      lastVisit: "Dec 20, 2024",
      registeredDate: "Jan 5, 2024",
      allergies: "Penicillin, Sulfa drugs",
      medicalHistory: [
        "No significant medical history",
        "Regular aesthetic patient"
      ],
      visits: [
        { 
          date: "Dec 20, 2024", 
          service: "Body Contouring", 
          doctor: "Dr. A. Santos",
          duration: "60 min",
          notes: "7D HIFU treatment. Patient satisfied with results.",
          cost: "₱6,500"
        },
        { 
          date: "Nov 25, 2024", 
          service: "Facial Rejuvenation", 
          doctor: "Dr. M. Dela Cruz",
          duration: "45 min",
          notes: "Pico Carbon Laser treatment. Excellent results.",
          cost: "₱4,500"
        },
        { 
          date: "Oct 22, 2024", 
          service: "BB Glow Facial", 
          doctor: "Dr. M. Dela Cruz",
          duration: "60 min",
          notes: "Initial BB Glow session. Patient very pleased.",
          cost: "₱4,000"
        }
      ],
      prescriptions: [
        {
          id: "RX-006",
          date: "Dec 20, 2024",
          doctor: "Dr. A. Santos",
          medications: [
            { name: "Moisturizing Lotion", dosage: "Apply to treated areas twice daily", duration: "14 days" },
            { name: "Vitamin E Oil", dosage: "Apply at night", duration: "30 days" }
          ],
          notes: "Avoid sun exposure. Use sunscreen daily. No strenuous exercise for 48 hours."
        },
        {
          id: "RX-007",
          date: "Nov 25, 2024",
          doctor: "Dr. M. Dela Cruz",
          medications: [
            { name: "Gentle Cleanser", dosage: "Use twice daily", duration: "Ongoing" },
            { name: "Hydrating Serum", dosage: "Apply morning and night", duration: "60 days" }
          ],
          notes: "Maintain gentle skincare routine. Avoid exfoliants for 1 week."
        }
      ],
      totalSpent: "₱15,000",
      nextAppointment: "Jan 22, 2025"
    },
    {
      id: "PAT-005",
      name: "Catherine Lim",
      age: 41,
      gender: "Female",
      contact: "+63 956 789 0123",
      email: "catherine.lim@email.com",
      address: "555 San Jose, Baliuag, Bulacan 3006",
      dateOfBirth: "January 8, 1983",
      bloodType: "A+",
      emergencyContact: "David Lim - +63 956 789 0124",
      lastVisit: "Dec 10, 2024",
      registeredDate: "Apr 12, 2023",
      allergies: "None",
      medicalHistory: [
        "Hypertension (well-controlled)",
        "Regular aesthetic treatments for 2 years"
      ],
      visits: [
        { 
          date: "Dec 10, 2024", 
          service: "Botox & Fillers", 
          doctor: "Dr. M. Dela Cruz",
          duration: "30 min",
          notes: "Forehead, crow's feet, and lip enhancement. Excellent results.",
          cost: "₱18,000"
        },
        { 
          date: "Nov 5, 2024", 
          service: "Facial Rejuvenation", 
          doctor: "Dr. M. Dela Cruz",
          duration: "45 min",
          notes: "Anti-aging treatment. Patient very satisfied.",
          cost: "₱4,500"
        },
        { 
          date: "Oct 15, 2024", 
          service: "BB Glow Facial", 
          doctor: "Dr. J. Reyes",
          duration: "60 min",
          notes: "Maintenance session. Skin glowing.",
          cost: "₱4,000"
        }
      ],
      prescriptions: [
        {
          id: "RX-008",
          date: "Dec 10, 2024",
          doctor: "Dr. M. Dela Cruz",
          medications: [
            { name: "Arnica Gel", dosage: "Apply to injection sites 3x daily", duration: "7 days" },
            { name: "Hyaluronic Acid Serum", dosage: "Apply twice daily", duration: "30 days" }
          ],
          notes: "Avoid touching treated areas. No makeup for 24 hours. Apply cold compress if needed."
        }
      ],
      totalSpent: "₱26,500",
      nextAppointment: "Jan 10, 2025"
    },
    {
      id: "PAT-006",
      name: "Michael Tan",
      age: 27,
      gender: "Male",
      contact: "+63 967 890 1234",
      email: "michael.tan@email.com",
      address: "888 Poblacion, Malolos, Bulacan 3000",
      dateOfBirth: "November 20, 1997",
      bloodType: "O+",
      emergencyContact: "Sarah Tan - +63 967 890 1235",
      lastVisit: "Dec 8, 2024",
      registeredDate: "May 18, 2024",
      allergies: "None",
      medicalHistory: [
        "No significant medical history",
        "Active lifestyle, regular gym-goer"
      ],
      visits: [
        { 
          date: "Dec 8, 2024", 
          service: "Laser Hair Removal", 
          doctor: "Dr. A. Santos",
          duration: "45 min",
          notes: "Back and chest treatment. Good progress after 3 sessions.",
          cost: "₱5,000"
        },
        { 
          date: "Nov 3, 2024", 
          service: "Laser Hair Removal", 
          doctor: "Dr. A. Santos",
          duration: "45 min",
          notes: "Second session. Patient following aftercare instructions.",
          cost: "₱5,000"
        },
        { 
          date: "Oct 1, 2024", 
          service: "Laser Hair Removal", 
          doctor: "Dr. A. Santos",
          duration: "45 min",
          notes: "Initial consultation and first treatment session.",
          cost: "₱5,000"
        }
      ],
      prescriptions: [
        {
          id: "RX-009",
          date: "Dec 8, 2024",
          doctor: "Dr. A. Santos",
          medications: [
            { name: "Aloe Vera Gel", dosage: "Apply to treated areas 3x daily", duration: "7 days" },
            { name: "Sunscreen SPF 50", dosage: "Apply daily, avoid sun exposure", duration: "Ongoing" }
          ],
          notes: "Keep treated areas clean and moisturized. Avoid hot showers for 48 hours."
        }
      ],
      totalSpent: "₱15,000",
      nextAppointment: "Jan 8, 2025"
    },
    {
      id: "PAT-007",
      name: "Patricia Ong",
      age: 33,
      gender: "Female",
      contact: "+63 978 901 2345",
      email: "patricia.ong@email.com",
      address: "222 Barangay Road, Baliuag, Bulacan 3006",
      dateOfBirth: "August 14, 1991",
      bloodType: "B+",
      emergencyContact: "Mark Ong - +63 978 901 2346",
      lastVisit: "Dec 14, 2024",
      registeredDate: "Jun 5, 2023",
      allergies: "Latex",
      medicalHistory: [
        "No significant medical history",
        "Regular aesthetic patient since 2023"
      ],
      visits: [
        { 
          date: "Dec 14, 2024", 
          service: "BB Glow Facial", 
          doctor: "Dr. M. Dela Cruz",
          duration: "60 min",
          notes: "Maintenance session. Patient loves the results.",
          cost: "₱4,000"
        },
        { 
          date: "Nov 18, 2024", 
          service: "Gluta Drip Therapy", 
          doctor: "Dr. J. Reyes",
          duration: "60 min",
          notes: "Regular maintenance. Improved skin tone observed.",
          cost: "₱2,500"
        },
        { 
          date: "Oct 12, 2024", 
          service: "Facial Rejuvenation", 
          doctor: "Dr. M. Dela Cruz",
          duration: "45 min",
          notes: "Pico Carbon Laser treatment. Excellent results.",
          cost: "₱4,500"
        },
        { 
          date: "Sep 8, 2024", 
          service: "BB Glow Facial", 
          doctor: "Dr. M. Dela Cruz",
          duration: "60 min",
          notes: "Initial BB Glow treatment. Patient very pleased.",
          cost: "₱4,000"
        }
      ],
      prescriptions: [
        {
          id: "RX-010",
          date: "Dec 14, 2024",
          doctor: "Dr. M. Dela Cruz",
          medications: [
            { name: "Gentle Cleanser", dosage: "Use twice daily", duration: "Ongoing" },
            { name: "Moisturizing Cream", dosage: "Apply morning and night", duration: "60 days" },
            { name: "Sunscreen SPF 50", dosage: "Apply every morning", duration: "Ongoing" }
          ],
          notes: "Maintain gentle skincare routine. Avoid harsh products."
        },
        {
          id: "RX-011",
          date: "Nov 18, 2024",
          doctor: "Dr. J. Reyes",
          medications: [
            { name: "Vitamin C Supplement", dosage: "500mg once daily", duration: "30 days" }
          ],
          notes: "Take with meals for better absorption."
        }
      ],
      totalSpent: "₱15,000",
      nextAppointment: "Jan 14, 2025"
    },
    {
      id: "PAT-008",
      name: "Robert Chen",
      age: 38,
      gender: "Male",
      contact: "+63 989 012 3456",
      email: "robert.chen@email.com",
      address: "777 City Center, Malolos, Bulacan 3000",
      dateOfBirth: "February 22, 1986",
      bloodType: "AB+",
      emergencyContact: "Lisa Chen - +63 989 012 3457",
      lastVisit: "Dec 5, 2024",
      registeredDate: "Jul 10, 2024",
      allergies: "None",
      medicalHistory: [
        "High cholesterol (controlled with diet)",
        "Regular exercise routine"
      ],
      visits: [
        { 
          date: "Dec 5, 2024", 
          service: "Mesolipo Treatment", 
          doctor: "Dr. A. Santos",
          duration: "75 min",
          notes: "Abdomen and love handles treatment. Patient following diet plan.",
          cost: "₱10,000"
        },
        { 
          date: "Nov 1, 2024", 
          service: "Slimming Treatment", 
          doctor: "Dr. M. Dela Cruz",
          duration: "90 min",
          notes: "Mesolipo + RF treatment. Good progress.",
          cost: "₱12,000"
        },
        { 
          date: "Oct 2, 2024", 
          service: "Mesolipo Treatment", 
          doctor: "Dr. A. Santos",
          duration: "75 min",
          notes: "Initial consultation and first treatment.",
          cost: "₱10,000"
        }
      ],
      prescriptions: [
        {
          id: "RX-012",
          date: "Dec 5, 2024",
          doctor: "Dr. A. Santos",
          medications: [
            { name: "Topical Cream", dosage: "Apply to treated areas twice daily", duration: "14 days" },
            { name: "Compression Garment", dosage: "Wear for 6-8 hours daily", duration: "30 days" }
          ],
          notes: "Maintain healthy diet. Continue exercise. Follow up in 1 month."
        }
      ],
      totalSpent: "₱32,000",
      nextAppointment: "Jan 5, 2025"
    },
    {
      id: "PAT-009",
      name: "Lisa Martinez",
      age: 29,
      gender: "Female",
      contact: "+63 990 123 4567",
      email: "lisa.martinez@email.com",
      address: "444 Poblacion, Baliuag, Bulacan 3006",
      dateOfBirth: "March 30, 1995",
      bloodType: "O+",
      emergencyContact: "Carlos Martinez - +63 990 123 4568",
      lastVisit: "Dec 22, 2024",
      registeredDate: "Aug 15, 2023",
      allergies: "None",
      medicalHistory: [
        "No significant medical history",
        "Regular aesthetic treatments"
      ],
      visits: [
        { 
          date: "Dec 22, 2024", 
          service: "Facial Rejuvenation", 
          doctor: "Dr. M. Dela Cruz",
          duration: "45 min",
          notes: "Holiday special treatment. Patient very happy with results.",
          cost: "₱3,500"
        },
        { 
          date: "Nov 28, 2024", 
          service: "Gluta Drip Therapy", 
          doctor: "Dr. J. Reyes",
          duration: "60 min",
          notes: "Regular maintenance session.",
          cost: "₱2,500"
        },
        { 
          date: "Oct 30, 2024", 
          service: "BB Glow Facial", 
          doctor: "Dr. M. Dela Cruz",
          duration: "60 min",
          notes: "Monthly maintenance. Excellent results.",
          cost: "₱4,000"
        },
        { 
          date: "Sep 25, 2024", 
          service: "Facial Rejuvenation", 
          doctor: "Dr. M. Dela Cruz",
          duration: "45 min",
          notes: "Regular treatment. Skin improving.",
          cost: "₱3,500"
        }
      ],
      prescriptions: [
        {
          id: "RX-013",
          date: "Dec 22, 2024",
          doctor: "Dr. M. Dela Cruz",
          medications: [
            { name: "Retinol Cream 0.5%", dosage: "Apply once daily at night", duration: "30 days" },
            { name: "Hyaluronic Acid Serum", dosage: "Apply twice daily", duration: "60 days" }
          ],
          notes: "Continue skincare routine. Avoid direct sunlight."
        }
      ],
      totalSpent: "₱13,500",
      nextAppointment: "Jan 22, 2025"
    },
    {
      id: "PAT-010",
      name: "Jennifer Lee",
      age: 36,
      gender: "Female",
      contact: "+63 901 234 5678",
      email: "jennifer.lee@email.com",
      address: "999 San Jose, Malolos, Bulacan 3000",
      dateOfBirth: "June 12, 1988",
      bloodType: "A-",
      emergencyContact: "James Lee - +63 901 234 5679",
      lastVisit: "Dec 16, 2024",
      registeredDate: "Sep 20, 2023",
      allergies: "Ibuprofen",
      medicalHistory: [
        "Migraine (occasional, controlled)",
        "Regular aesthetic patient"
      ],
      visits: [
        { 
          date: "Dec 16, 2024", 
          service: "Body Contouring", 
          doctor: "Dr. A. Santos",
          duration: "60 min",
          notes: "7D HIFU treatment on abdomen. Patient satisfied.",
          cost: "₱6,500"
        },
        { 
          date: "Nov 22, 2024", 
          service: "Botox & Fillers", 
          doctor: "Dr. M. Dela Cruz",
          duration: "30 min",
          notes: "Under-eye filler treatment. Excellent results.",
          cost: "₱12,000"
        },
        { 
          date: "Oct 18, 2024", 
          service: "Facial Rejuvenation", 
          doctor: "Dr. M. Dela Cruz",
          duration: "45 min",
          notes: "Anti-aging treatment. Skin texture improved.",
          cost: "₱4,500"
        }
      ],
      prescriptions: [
        {
          id: "RX-014",
          date: "Dec 16, 2024",
          doctor: "Dr. A. Santos",
          medications: [
            { name: "Moisturizing Lotion", dosage: "Apply to treated areas twice daily", duration: "14 days" },
            { name: "Vitamin E Oil", dosage: "Apply at night", duration: "30 days" }
          ],
          notes: "Avoid sun exposure. Use sunscreen daily."
        },
        {
          id: "RX-015",
          date: "Nov 22, 2024",
          doctor: "Dr. M. Dela Cruz",
          medications: [
            { name: "Arnica Gel", dosage: "Apply to injection sites as needed", duration: "7 days" }
          ],
          notes: "Apply cold compress if swelling. Avoid touching treated areas."
        }
      ],
      totalSpent: "₱23,000",
      nextAppointment: "Jan 16, 2025"
    },
    {
      id: "PAT-011",
      name: "Amanda Torres",
      age: 31,
      gender: "Female",
      contact: "+63 912 345 6780",
      email: "amanda.torres@email.com",
      address: "111 Barangay Road, Baliuag, Bulacan 3006",
      dateOfBirth: "September 5, 1993",
      bloodType: "B+",
      emergencyContact: "Miguel Torres - +63 912 345 6781",
      lastVisit: "Dec 19, 2024",
      registeredDate: "Oct 8, 2023",
      allergies: "None",
      medicalHistory: [
        "No significant medical history",
        "Regular aesthetic treatments"
      ],
      visits: [
        { 
          date: "Dec 19, 2024", 
          service: "Botox & Fillers", 
          doctor: "Dr. M. Dela Cruz",
          duration: "30 min",
          notes: "Lip enhancement and nasolabial folds. Natural-looking results.",
          cost: "₱16,000"
        },
        { 
          date: "Nov 12, 2024", 
          service: "Gluta Drip Therapy", 
          doctor: "Dr. J. Reyes",
          duration: "60 min",
          notes: "Regular maintenance. Improved skin tone.",
          cost: "₱2,500"
        },
        { 
          date: "Oct 8, 2024", 
          service: "BB Glow Facial", 
          doctor: "Dr. M. Dela Cruz",
          duration: "60 min",
          notes: "Initial treatment. Patient very pleased.",
          cost: "₱4,000"
        }
      ],
      prescriptions: [
        {
          id: "RX-016",
          date: "Dec 19, 2024",
          doctor: "Dr. M. Dela Cruz",
          medications: [
            { name: "Arnica Gel", dosage: "Apply to injection sites 3x daily", duration: "7 days" },
            { name: "Lip Balm SPF 30", dosage: "Apply as needed", duration: "Ongoing" }
          ],
          notes: "Avoid kissing or using straws for 24 hours. No makeup on lips for 12 hours."
        }
      ],
      totalSpent: "₱22,500",
      nextAppointment: "Jan 19, 2025"
    },
    {
      id: "PAT-012",
      name: "Nicole Ramos",
      age: 26,
      gender: "Female",
      contact: "+63 923 456 7891",
      email: "nicole.ramos@email.com",
      address: "333 City Center, Malolos, Bulacan 3000",
      dateOfBirth: "December 18, 1998",
      bloodType: "O+",
      emergencyContact: "Paul Ramos - +63 923 456 7892",
      lastVisit: "Dec 11, 2024",
      registeredDate: "Nov 5, 2024",
      allergies: "None",
      medicalHistory: [
        "No significant medical history",
        "New patient, first aesthetic treatments"
      ],
      visits: [
        { 
          date: "Dec 11, 2024", 
          service: "Body Contouring", 
          doctor: "Dr. A. Santos",
          duration: "60 min",
          notes: "7D HIFU treatment. First session. Patient excited about results.",
          cost: "₱6,500"
        },
        { 
          date: "Nov 5, 2024", 
          service: "Facial Rejuvenation", 
          doctor: "Dr. M. Dela Cruz",
          duration: "45 min",
          notes: "Initial consultation and first treatment. Patient very satisfied.",
          cost: "₱4,500"
        }
      ],
      prescriptions: [
        {
          id: "RX-017",
          date: "Dec 11, 2024",
          doctor: "Dr. A. Santos",
          medications: [
            { name: "Moisturizing Lotion", dosage: "Apply to treated areas twice daily", duration: "14 days" },
            { name: "Sunscreen SPF 50", dosage: "Apply daily", duration: "Ongoing" }
          ],
          notes: "Avoid sun exposure. No strenuous exercise for 48 hours."
        },
        {
          id: "RX-018",
          date: "Nov 5, 2024",
          doctor: "Dr. M. Dela Cruz",
          medications: [
            { name: "Gentle Cleanser", dosage: "Use twice daily", duration: "Ongoing" },
            { name: "Hydrating Serum", dosage: "Apply morning and night", duration: "60 days" }
          ],
          notes: "Maintain gentle skincare routine. Follow up in 2 weeks."
        }
      ],
      totalSpent: "₱11,000",
      nextAppointment: "Jan 11, 2025"
    }
  ];

  const handleAddPatient = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Patient added successfully!");
  };

  const handleGenerateReport = () => {
    setShowReport(true);
  };

  const handlePrintReport = () => {
    window.print();
  };

  const handleDownloadReport = () => {
    toast.success("Report download initiated!");
    // In a real application, this would generate and download a PDF
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.contact.includes(searchQuery)
  );

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
              <Button className="font-poppins bg-primary text-white shadow-elegant hover:bg-primary/90">
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

                <Button type="submit" className="w-full font-poppins bg-primary text-white hover:bg-primary/90">
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
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id} className="hover:bg-secondary/30">
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
                            className="font-poppins hover:bg-[#ab817a] hover:text-white transition-colors"
                            onClick={() => setSelectedPatient(patient)}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View Record
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="font-playfair text-2xl flex items-center gap-2">
                              <User className="h-6 w-6 text-[#ab817a]" />
                              Patient Complete Record
                            </DialogTitle>
                          </DialogHeader>
                          {selectedPatient && (
                            <div className="space-y-6">
                              {/* Patient Information */}
                              <Card className="border-2 border-[#ab817a]/20">
                                <CardContent className="pt-6">
                                  <h3 className="font-playfair text-xl font-semibold mb-4 flex items-center gap-2">
                                    <User className="h-5 w-5 text-[#ab817a]" />
                                    Personal Information
                                  </h3>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <p className="font-poppins text-sm text-muted-foreground mb-1">Patient ID</p>
                                      <p className="font-poppins font-semibold text-base">{selectedPatient.id}</p>
                                    </div>
                                    <div>
                                      <p className="font-poppins text-sm text-muted-foreground mb-1">Full Name</p>
                                      <p className="font-poppins font-semibold text-base">{selectedPatient.name}</p>
                                    </div>
                                    <div>
                                      <p className="font-poppins text-sm text-muted-foreground mb-1">Date of Birth</p>
                                      <p className="font-poppins font-semibold text-base">{selectedPatient.dateOfBirth}</p>
                                    </div>
                                    <div>
                                      <p className="font-poppins text-sm text-muted-foreground mb-1">Age</p>
                                      <p className="font-poppins font-semibold text-base">{selectedPatient.age} years old</p>
                                    </div>
                                    <div>
                                      <p className="font-poppins text-sm text-muted-foreground mb-1">Gender</p>
                                      <p className="font-poppins font-semibold text-base">{selectedPatient.gender}</p>
                                    </div>
                                    <div>
                                      <p className="font-poppins text-sm text-muted-foreground mb-1">Blood Type</p>
                                      <p className="font-poppins font-semibold text-base">{selectedPatient.bloodType}</p>
                                    </div>
                                    <div>
                                      <p className="font-poppins text-sm text-muted-foreground mb-1 flex items-center gap-1">
                                        <Phone className="h-3 w-3" />
                                        Contact Number
                                      </p>
                                      <p className="font-poppins font-semibold text-base">{selectedPatient.contact}</p>
                                    </div>
                                    <div>
                                      <p className="font-poppins text-sm text-muted-foreground mb-1 flex items-center gap-1">
                                        <Mail className="h-3 w-3" />
                                        Email Address
                                      </p>
                                      <p className="font-poppins font-semibold text-base">{selectedPatient.email}</p>
                                    </div>
                                    <div className="col-span-2">
                                      <p className="font-poppins text-sm text-muted-foreground mb-1 flex items-center gap-1">
                                        <MapPin className="h-3 w-3" />
                                        Address
                                      </p>
                                      <p className="font-poppins font-semibold text-base">{selectedPatient.address}</p>
                                    </div>
                                    <div className="col-span-2">
                                      <p className="font-poppins text-sm text-muted-foreground mb-1">Emergency Contact</p>
                                      <p className="font-poppins font-semibold text-base">{selectedPatient.emergencyContact}</p>
                                    </div>
                                    <div>
                                      <p className="font-poppins text-sm text-muted-foreground mb-1">Registered Date</p>
                                      <p className="font-poppins font-semibold text-base">{selectedPatient.registeredDate}</p>
                                    </div>
                                    <div>
                                      <p className="font-poppins text-sm text-muted-foreground mb-1">Last Visit</p>
                                      <p className="font-poppins font-semibold text-base">{selectedPatient.lastVisit}</p>
                                    </div>
                                    <div className="col-span-2">
                                      <p className="font-poppins text-sm text-muted-foreground mb-1">Allergies</p>
                                      <p className={`font-poppins font-semibold text-base ${selectedPatient.allergies === "None" ? "text-green-600" : "text-red-600"}`}>
                                        {selectedPatient.allergies}
                                      </p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Medical History */}
                              <Card className="border-2 border-[#ab817a]/20">
                                <CardContent className="pt-6">
                                  <h3 className="font-playfair text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Heart className="h-5 w-5 text-[#ab817a]" />
                                    Medical History
                                  </h3>
                                  <div className="space-y-2">
                                    {selectedPatient.medicalHistory.map((history: string, index: number) => (
                                      <div key={index} className="p-3 bg-secondary/30 rounded-lg border border-border">
                                        <p className="font-poppins text-sm">{history}</p>
                                      </div>
                                    ))}
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Visit History */}
                              <Card className="border-2 border-[#ab817a]/20">
                                <CardContent className="pt-6">
                                  <h3 className="font-playfair text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Calendar className="h-5 w-5 text-[#ab817a]" />
                                    Visit History ({selectedPatient.visits.length} visits)
                                  </h3>
                                  <div className="space-y-3">
                                    {selectedPatient.visits.map((visit: any, index: number) => (
                                      <div key={index} className="p-4 border border-border rounded-lg hover:bg-secondary/30 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                          <div>
                                            <p className="font-poppins font-semibold text-base text-foreground">{visit.service}</p>
                                            <p className="font-poppins text-sm text-muted-foreground">{visit.doctor}</p>
                                          </div>
                                          <div className="text-right">
                                            <p className="font-poppins font-semibold text-base text-[#ab817a]">{visit.cost}</p>
                                            <p className="font-poppins text-xs text-muted-foreground flex items-center gap-1">
                                              <Clock className="h-3 w-3" />
                                              {visit.duration}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                          <p className="font-poppins text-sm text-muted-foreground">{visit.date}</p>
                                        </div>
                                        {visit.notes && (
                                          <div className="mt-2 pt-2 border-t border-border">
                                            <p className="font-poppins text-xs text-muted-foreground italic">{visit.notes}</p>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                  <div className="mt-4 pt-4 border-t border-border">
                                    <div className="flex justify-between items-center">
                                      <p className="font-poppins text-sm text-muted-foreground">Total Amount Spent</p>
                                      <p className="font-playfair text-xl font-bold text-[#ab817a]">{selectedPatient.totalSpent}</p>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Prescriptions */}
                              <Card className="border-2 border-[#ab817a]/20">
                                <CardContent className="pt-6">
                                  <h3 className="font-playfair text-xl font-semibold mb-4 flex items-center gap-2">
                                    <Pill className="h-5 w-5 text-[#ab817a]" />
                                    Prescriptions ({selectedPatient.prescriptions.length} prescriptions)
                                  </h3>
                                  <div className="space-y-4">
                                    {selectedPatient.prescriptions.map((prescription: any, index: number) => (
                                      <div key={index} className="p-4 border border-border rounded-lg bg-blue-50/50">
                                        <div className="flex justify-between items-start mb-3">
                                          <div>
                                            <p className="font-poppins font-semibold text-base">Prescription #{prescription.id}</p>
                                            <p className="font-poppins text-sm text-muted-foreground">{prescription.doctor}</p>
                                          </div>
                                          <p className="font-poppins text-sm text-muted-foreground">{prescription.date}</p>
                                        </div>
                                        <div className="space-y-2 mb-3">
                                          {prescription.medications.map((med: any, medIndex: number) => (
                                            <div key={medIndex} className="p-2 bg-white rounded border border-border">
                                              <p className="font-poppins font-semibold text-sm">{med.name}</p>
                                              <p className="font-poppins text-xs text-muted-foreground">Dosage: {med.dosage}</p>
                                              <p className="font-poppins text-xs text-muted-foreground">Duration: {med.duration}</p>
                                            </div>
                                          ))}
                                        </div>
                                        {prescription.notes && (
                                          <div className="pt-2 border-t border-border">
                                            <p className="font-poppins text-xs text-muted-foreground italic">{prescription.notes}</p>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </CardContent>
                              </Card>

                              {/* Next Appointment */}
                              {selectedPatient.nextAppointment && (
                                <Card className="border-2 border-green-200 bg-green-50/30">
                                  <CardContent className="pt-6">
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <p className="font-poppins text-sm text-muted-foreground mb-1">Next Scheduled Appointment</p>
                                        <p className="font-playfair text-xl font-bold text-green-700">{selectedPatient.nextAppointment}</p>
                                      </div>
                                      <Calendar className="h-8 w-8 text-green-600" />
                                    </div>
                                  </CardContent>
                                </Card>
                              )}

                              <DialogFooter className="gap-2">
                                <Button
                                  variant="outline"
                                  onClick={() => setSelectedPatient(null)}
                                  className="font-poppins"
                                >
                                  Close
                                </Button>
                                <Button
                                  onClick={handleGenerateReport}
                                  className="font-poppins bg-gradient-to-r from-[#ab817a] to-[#ba9993] hover:from-[#ba9993] hover:to-[#ab817a] text-white"
                                >
                                  <FileText className="mr-2 h-4 w-4" />
                                  Generate Report
                                </Button>
                              </DialogFooter>
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

        {/* Patient Report Dialog */}
        <Dialog open={showReport} onOpenChange={setShowReport}>
          <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto print:max-w-full print:max-h-full">
            {selectedPatient && (
              <div className="print:p-8">
                {/* Report Header */}
                <div className="text-center mb-8 pb-6 border-b-2 border-[#ab817a] print:border-black">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] flex items-center justify-center">
                      <Stethoscope className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="font-playfair text-3xl font-bold text-foreground">Kendi Beauty Lounge & Wellness</h1>
                      <p className="font-poppins text-sm text-muted-foreground">Baliuag & Malolos, Bulacan</p>
                    </div>
                  </div>
                  <h2 className="font-playfair text-2xl font-semibold mt-4 text-[#ab817a]">PATIENT MEDICAL REPORT</h2>
                  <p className="font-poppins text-sm text-muted-foreground mt-2">
                    Generated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>

                {/* Patient Information Section */}
                <div className="mb-6">
                  <h3 className="font-playfair text-xl font-semibold mb-4 text-[#ab817a] border-b border-border pb-2">
                    Patient Information
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Patient ID</p>
                      <p className="font-poppins font-semibold">{selectedPatient.id}</p>
                    </div>
                    <div>
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Full Name</p>
                      <p className="font-poppins font-semibold">{selectedPatient.name}</p>
                    </div>
                    <div>
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Date of Birth</p>
                      <p className="font-poppins font-semibold">{selectedPatient.dateOfBirth}</p>
                    </div>
                    <div>
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Age</p>
                      <p className="font-poppins font-semibold">{selectedPatient.age} years old</p>
                    </div>
                    <div>
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Gender</p>
                      <p className="font-poppins font-semibold">{selectedPatient.gender}</p>
                    </div>
                    <div>
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Blood Type</p>
                      <p className="font-poppins font-semibold">{selectedPatient.bloodType}</p>
                    </div>
                    <div>
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Contact Number</p>
                      <p className="font-poppins font-semibold">{selectedPatient.contact}</p>
                    </div>
                    <div>
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Email Address</p>
                      <p className="font-poppins font-semibold">{selectedPatient.email}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Address</p>
                      <p className="font-poppins font-semibold">{selectedPatient.address}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Emergency Contact</p>
                      <p className="font-poppins font-semibold">{selectedPatient.emergencyContact}</p>
                    </div>
                    <div>
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Registered Date</p>
                      <p className="font-poppins font-semibold">{selectedPatient.registeredDate}</p>
                    </div>
                    <div>
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Last Visit</p>
                      <p className="font-poppins font-semibold">{selectedPatient.lastVisit}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-poppins text-xs text-muted-foreground mb-1">Allergies</p>
                      <p className={`font-poppins font-semibold ${selectedPatient.allergies === "None" ? "text-green-600" : "text-red-600"}`}>
                        {selectedPatient.allergies}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Medical History Section */}
                <div className="mb-6">
                  <h3 className="font-playfair text-xl font-semibold mb-4 text-[#ab817a] border-b border-border pb-2">
                    Medical History
                  </h3>
                  <div className="space-y-2">
                    {selectedPatient.medicalHistory.map((history: string, index: number) => (
                      <div key={index} className="p-3 bg-secondary/30 rounded-lg border border-border">
                        <p className="font-poppins text-sm">{index + 1}. {history}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visit History Section */}
                <div className="mb-6">
                  <h3 className="font-playfair text-xl font-semibold mb-4 text-[#ab817a] border-b border-border pb-2">
                    Treatment History ({selectedPatient.visits.length} visits)
                  </h3>
                  <div className="space-y-3">
                    {selectedPatient.visits.map((visit: any, index: number) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-poppins font-semibold text-base">{visit.service}</p>
                            <p className="font-poppins text-sm text-muted-foreground">Dr. {visit.doctor}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-poppins font-semibold text-base text-[#ab817a]">{visit.cost}</p>
                            <p className="font-poppins text-xs text-muted-foreground">{visit.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-poppins text-sm text-muted-foreground">Date: {visit.date}</p>
                        </div>
                        {visit.notes && (
                          <div className="mt-2 pt-2 border-t border-border">
                            <p className="font-poppins text-xs text-muted-foreground italic">Notes: {visit.notes}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t-2 border-[#ab817a]">
                    <div className="flex justify-between items-center">
                      <p className="font-poppins font-semibold text-base">Total Amount Spent</p>
                      <p className="font-playfair text-2xl font-bold text-[#ab817a]">{selectedPatient.totalSpent}</p>
                    </div>
                  </div>
                </div>

                {/* Prescriptions Section */}
                <div className="mb-6">
                  <h3 className="font-playfair text-xl font-semibold mb-4 text-[#ab817a] border-b border-border pb-2">
                    Prescription History ({selectedPatient.prescriptions.length} prescriptions)
                  </h3>
                  <div className="space-y-4">
                    {selectedPatient.prescriptions.map((prescription: any, index: number) => (
                      <div key={index} className="p-4 border-2 border-blue-200 rounded-lg bg-blue-50/30">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="font-poppins font-semibold text-base">Prescription #{prescription.id}</p>
                            <p className="font-poppins text-sm text-muted-foreground">Prescribed by: {prescription.doctor}</p>
                          </div>
                          <p className="font-poppins text-sm text-muted-foreground">Date: {prescription.date}</p>
                        </div>
                        <div className="space-y-2 mb-3">
                          <p className="font-poppins font-semibold text-sm mb-2">Medications:</p>
                          {prescription.medications.map((med: any, medIndex: number) => (
                            <div key={medIndex} className="p-2 bg-white rounded border border-border">
                              <p className="font-poppins font-semibold text-sm">{medIndex + 1}. {med.name}</p>
                              <p className="font-poppins text-xs text-muted-foreground ml-4">Dosage: {med.dosage}</p>
                              <p className="font-poppins text-xs text-muted-foreground ml-4">Duration: {med.duration}</p>
                            </div>
                          ))}
                        </div>
                        {prescription.notes && (
                          <div className="pt-2 border-t border-border">
                            <p className="font-poppins text-xs text-muted-foreground italic"><strong>Notes:</strong> {prescription.notes}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Appointment */}
                {selectedPatient.nextAppointment && (
                  <div className="mb-6 p-4 border-2 border-green-200 bg-green-50/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-poppins text-sm text-muted-foreground mb-1">Next Scheduled Appointment</p>
                        <p className="font-playfair text-xl font-bold text-green-700">{selectedPatient.nextAppointment}</p>
                      </div>
                      <Calendar className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                )}

                {/* Report Footer */}
                <div className="mt-8 pt-6 border-t-2 border-[#ab817a] text-center">
                  <p className="font-poppins text-xs text-muted-foreground">
                    This is a computer-generated report. For official purposes, please contact the clinic.
                  </p>
                  <p className="font-poppins text-xs text-muted-foreground mt-2">
                    Kendi Beauty Lounge & Wellness | Baliuag & Malolos, Bulacan | +63 123 456 7890
                  </p>
                </div>

                {/* Action Buttons (Hidden when printing) */}
                <DialogFooter className="mt-6 print:hidden gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowReport(false)}
                    className="font-poppins"
                  >
                    Close
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handlePrintReport}
                    className="font-poppins"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Print Report
                  </Button>
                  <Button
                    onClick={handleDownloadReport}
                    className="font-poppins bg-gradient-to-r from-[#ab817a] to-[#ba9993] hover:from-[#ba9993] hover:to-[#ab817a] text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </DialogFooter>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:p-8,
          .print\\:p-8 * {
            visibility: visible;
          }
          .print\\:p-8 {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .print\\:max-w-full {
            max-width: 100% !important;
          }
          .print\\:max-h-full {
            max-height: 100% !important;
          }
          .print\\:border-black {
            border-color: black !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </DashboardLayout>
  );
}
