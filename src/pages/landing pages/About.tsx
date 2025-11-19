import { Header } from "@/pages/landing pages/Header";
import { Footer } from "@/pages/client/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Target } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your wellness and satisfaction are at the heart of everything we do"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to the highest standards of quality and professionalism"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly trained aestheticians and medical professionals"
    },
    {
      icon: Target,
      title: "Personalized Approach",
      description: "Tailored treatments designed for your unique needs"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-5xl font-bold text-foreground mb-6">
              About Kendi Beauty Lounge & Wellness
            </h1>
            <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated to enhancing your natural beauty and promoting holistic wellness through professional care and luxurious treatments
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-elegant">
                <CardContent className="pt-6">
                  <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    To provide exceptional beauty and wellness services that empower individuals to look and feel their best. We strive to create a serene environment where advanced treatments meet personalized care, ensuring every client experiences transformation and renewed confidence.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardContent className="pt-6">
                  <h2 className="font-playfair text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="font-poppins text-muted-foreground leading-relaxed">
                    To become the leading beauty and wellness destination in Bulacan and beyond, recognized for our commitment to excellence, innovation in aesthetic treatments, and unwavering dedication to client satisfaction. We envision a community where everyone has access to professional wellness care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="font-poppins text-lg text-muted-foreground">
                The principles that guide our every action
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-gold transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-[#ab817a] flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="font-poppins text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-6 text-center">Our Story</h2>
              <div className="space-y-4 font-poppins text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, Kendi Beauty Lounge & Wellness was born from a passion for helping people discover their most confident selves. What started as a small clinic in Baliuag has grown into a trusted name in aesthetic and wellness treatments across Bulacan.
                </p>
                <p>
                  Our founders, experienced medical professionals with a vision for accessible luxury care, established Kendi with the belief that everyone deserves to feel beautiful and healthy. Today, we serve hundreds of satisfied clients from our locations in Baliuag and Malolos.
                </p>
                <p>
                  We combine advanced medical aesthetics with traditional wellness practices, offering a comprehensive approach to beauty and health. Our state-of-the-art facilities and highly trained staff ensure that every treatment is performed with the utmost care and professionalism.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="font-poppins text-lg text-muted-foreground">
                Dedicated professionals committed to your wellness journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Dr. Diana Diviene Dungo", role: "Manager", specialty: "Aesthetic Medicine" },
                { name: "Dr. Juan Reyes", role: "Staff", specialty: "IV Therapy & Wellness" },
                { name: "Dr. Ana Santos", role: "Staff", specialty: "Body Contouring" }
              ].map((member, index) => (
                <Card key={index} className="shadow-elegant">
                  <CardContent className="pt-6 text-center">
                    <div className="h-24 w-24 rounded-full bg-[#ab817a] flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-white font-playfair">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="font-poppins text-sm text-primary mb-1">{member.role}</p>
                    <p className="font-poppins text-sm text-muted-foreground">{member.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">Our Locations</h2>
              <p className="font-poppins text-lg text-muted-foreground">
                Visit us at our conveniently located clinics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="shadow-elegant">
                <CardContent className="pt-6">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">Baliuag Branch</h3>
                  <div className="space-y-2 font-poppins text-muted-foreground">
                    <p>123 Main Street, Baliuag</p>
                    <p>Bulacan, Philippines 3006</p>
                    <p className="pt-2">Tel: +63 123 456 7890</p>
                    <p>Hours: Mon-Sat 9AM-7PM</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardContent className="pt-6">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">Malolos Branch</h3>
                  <div className="space-y-2 font-poppins text-muted-foreground">
                    <p>456 City Center, Malolos</p>
                    <p>Bulacan, Philippines 3000</p>
                    <p className="pt-2">Tel: +63 123 456 7891</p>
                    <p>Hours: Mon-Sat 9AM-7PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
