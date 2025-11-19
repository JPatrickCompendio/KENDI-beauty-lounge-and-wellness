import { ClientLayout } from "@/pages/client/ClientLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry! We'll get back to you soon.");
  };

  return (
    <ClientLayout>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="font-poppins text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to us for appointments, inquiries, or just to say hello!
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Contact Information
                  </h2>
                  <p className="font-poppins text-muted-foreground mb-6">
                    Visit us at our clinics or reach out through any of our contact channels
                  </p>
                </div>

                <Card className="shadow-elegant border-0">
                  <CardContent className="pt-6 space-y-5">
                    <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="h-14 w-14 rounded-full bg-[#ab817a] flex items-center justify-center flex-shrink-0 shadow-md">
                        <MapPin className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-lg font-semibold text-foreground mb-3">Locations</h3>
                        <div className="space-y-2">
                          <p className="font-poppins text-sm text-muted-foreground">
                            <strong className="text-foreground">Baliuag Branch:</strong><br />
                            123 Main Street, Baliuag, Bulacan 3006
                          </p>
                          <p className="font-poppins text-sm text-muted-foreground">
                            <strong className="text-foreground">Malolos Branch:</strong><br />
                            456 City Center, Malolos, Bulacan 3000
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Phone className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Phone</h3>
                        <p className="font-poppins text-sm text-muted-foreground">
                          Baliuag: <a href="tel:+631234567890" className="text-[#ab817a] hover:underline">+63 123 456 7890</a><br />
                          Malolos: <a href="tel:+631234567891" className="text-[#ab817a] hover:underline">+63 123 456 7891</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Mail className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Email</h3>
                        <p className="font-poppins text-sm text-muted-foreground">
                          <a href="mailto:info@kendiwellness.com" className="text-[#ab817a] hover:underline">info@kendiwellness.com</a><br />
                          <a href="mailto:appointments@kendiwellness.com" className="text-[#ab817a] hover:underline">appointments@kendiwellness.com</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Clock className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">Business Hours</h3>
                        <p className="font-poppins text-sm text-muted-foreground">
                          Monday - Saturday: 9:00 AM - 7:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="shadow-elegant border-0">
                  <CardContent className="pt-6">
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-5">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-14 w-14 rounded-full bg-[#ab817a] flex items-center justify-center hover:bg-[#9a7069] hover:shadow-lg hover:scale-110 transition-all duration-300"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-7 w-7 text-white" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-14 w-14 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-7 w-7 text-white" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="shadow-elegant border-0">
                <CardContent className="pt-6">
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Send Us a Message
                  </h2>
                  <p className="font-poppins text-sm text-muted-foreground mb-6">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-poppins font-medium">Full Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          required 
                          className="font-poppins focus:ring-2 focus:ring-[#ab817a]" 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-poppins font-medium">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          required 
                          className="font-poppins focus:ring-2 focus:ring-[#ab817a]" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-poppins font-medium">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+63 XXX XXX XXXX" 
                          className="font-poppins focus:ring-2 focus:ring-[#ab817a]" 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="font-poppins font-medium">Subject</Label>
                        <Input 
                          id="subject" 
                          placeholder="What is this about?" 
                          required 
                          className="font-poppins focus:ring-2 focus:ring-[#ab817a]" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-poppins font-medium">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                        className="font-poppins focus:ring-2 focus:ring-[#ab817a] resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full font-poppins bg-[#ab817a] shadow-elegant text-white hover:bg-[#9a7069] hover:text-white transition-colors mt-2 py-6 text-base"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/20 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Visit Our Clinics
              </h2>
              <p className="font-poppins text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Find us at our convenient locations in Bulacan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Card className="shadow-elegant border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#ab817a]/10"></div>
                    <div className="text-center relative z-10">
                      <div className="h-16 w-16 rounded-full bg-[#ab817a] flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                      <p className="font-poppins text-sm font-medium text-foreground">Map placeholder</p>
                      <p className="font-poppins text-xs text-muted-foreground mt-1">Baliuag Branch</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Baliuag Branch</h3>
                    <p className="font-poppins text-sm text-muted-foreground mb-3">
                      123 Main Street, Baliuag, Bulacan 3006
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full font-poppins text-sm border-[#ab817a] text-[#ab817a] hover:bg-[#ab817a] hover:text-white transition-colors"
                      onClick={() => window.open('https://maps.google.com', '_blank')}
                    >
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elegant border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#ab817a]/10"></div>
                    <div className="text-center relative z-10">
                      <div className="h-16 w-16 rounded-full bg-[#ab817a] flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <MapPin className="h-8 w-8 text-white" />
                      </div>
                      <p className="font-poppins text-sm font-medium text-foreground">Map placeholder</p>
                      <p className="font-poppins text-xs text-muted-foreground mt-1">Malolos Branch</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Malolos Branch</h3>
                    <p className="font-poppins text-sm text-muted-foreground mb-3">
                      456 City Center, Malolos, Bulacan 3000
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full font-poppins text-sm border-[#ab817a] text-[#ab817a] hover:bg-[#ab817a] hover:text-white transition-colors"
                      onClick={() => window.open('https://maps.google.com', '_blank')}
                    >
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    </ClientLayout>
  );
}
