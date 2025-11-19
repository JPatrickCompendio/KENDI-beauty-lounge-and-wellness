import { Header } from "@/pages/landing pages/Header";
import { Footer } from "@/pages/client/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { ScrollAnimatedCard } from "@/components/ScrollAnimatedCard";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#ab817a]/20 via-background to-[#ba9993]/20">
          <div className="container mx-auto px-4 text-center">
            <ScrollAnimatedCard delay={0}>
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] mb-6 shadow-lg">
                  <MessageSquare className="h-10 w-10 text-white" />
                </div>
                <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
                  Get In Touch
                </h1>
                <p className="font-poppins text-xl text-muted-foreground max-w-3xl mx-auto">
                  We'd love to hear from you. Reach out to us for appointments, inquiries, or just to say hello!
                </p>
              </div>
            </ScrollAnimatedCard>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollAnimatedCard delay={100}>
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="font-poppins text-muted-foreground max-w-2xl mx-auto">
                  Visit us at our clinics or reach out through any of our contact channels
                </p>
              </div>
            </ScrollAnimatedCard>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
              {/* Contact Information */}
              <ScrollAnimatedCard delay={200} className="h-full">
                <Card className="shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                  <CardContent className="pt-6 flex flex-col flex-grow">
                    <div className="space-y-6 flex-grow">
                      {[
                        {
                          icon: MapPin,
                          title: "Locations",
                          content: [
                            { label: "Baliuag Branch:", text: "123 Main Street, Baliuag, Bulacan 3006" },
                            { label: "Malolos Branch:", text: "456 City Center, Malolos, Bulacan 3000" }
                          ],
                          color: "from-[#ab817a] to-[#ba9993]"
                        },
                        {
                          icon: Phone,
                          title: "Phone",
                          content: [
                            { text: "Baliuag: +63 123 456 7890" },
                            { text: "Malolos: +63 123 456 7891" }
                          ],
                          color: "from-[#ab817a] to-[#ba9993]"
                        },
                        {
                          icon: Mail,
                          title: "Email",
                          content: [
                            { text: "info@kendiwellness.com" },
                            { text: "appointments@kendiwellness.com" }
                          ],
                          color: "from-[#ab817a] to-[#ba9993]"
                        },
                        {
                          icon: Clock,
                          title: "Business Hours",
                          content: [
                            { text: "Monday - Saturday: 9:00 AM - 7:00 PM" },
                            { text: "Sunday: Closed" }
                          ],
                          color: "from-[#ab817a] to-[#ba9993]"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4 group/item hover:translate-x-2 transition-transform duration-300">
                          <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform duration-300`}>
                            <item.icon className="h-7 w-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-playfair text-lg font-semibold text-foreground mb-2 group-hover/item:text-[#ab817a] transition-colors duration-300">
                              {item.title}
                            </h3>
                            {item.content.map((content, idx) => (
                              <p key={idx} className="font-poppins text-sm text-muted-foreground mb-1">
                                {content.label && <strong className="text-foreground">{content.label}</strong>}
                                {content.label && <br />}
                                {content.text}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Social Media */}
                    <div className="pt-6 mt-6 border-t border-border">
                      <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                        Follow Us
                      </h3>
                      <p className="font-poppins text-sm text-muted-foreground mb-4">
                        Stay connected with us on social media
                      </p>
                      <div className="flex space-x-4">
                        <a
                          href="https://facebook.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-12 w-12 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg group"
                        >
                          <Facebook className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                        </a>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-12 w-12 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md hover:shadow-lg group"
                        >
                          <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimatedCard>

              {/* Contact Form */}
              <ScrollAnimatedCard delay={200} className="h-full">
                <Card className="shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                  <CardContent className="pt-6 flex flex-col flex-grow">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] flex items-center justify-center shadow-lg">
                        <Send className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
                        Send Us a Message
                      </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-poppins font-medium text-foreground">Full Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          required 
                          className="font-poppins border-2 focus:border-[#ab817a] transition-colors duration-300" 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-poppins font-medium text-foreground">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          required 
                          className="font-poppins border-2 focus:border-[#ab817a] transition-colors duration-300" 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-poppins font-medium text-foreground">Phone Number</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+63 XXX XXX XXXX" 
                          className="font-poppins border-2 focus:border-[#ab817a] transition-colors duration-300" 
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject" className="font-poppins font-medium text-foreground">Subject</Label>
                        <Input 
                          id="subject" 
                          placeholder="What is this about?" 
                          required 
                          className="font-poppins border-2 focus:border-[#ab817a] transition-colors duration-300" 
                        />
                      </div>

                      <div className="space-y-2 flex-grow flex flex-col">
                        <Label htmlFor="message" className="font-poppins font-medium text-foreground">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          required
                          className="font-poppins border-2 focus:border-[#ab817a] transition-colors duration-300 resize-none flex-grow min-h-[150px]"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full font-poppins bg-gradient-to-r from-[#ab817a] to-[#ba9993] hover:from-[#ba9993] hover:to-[#ab817a] text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mt-auto"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollAnimatedCard>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#ab817a]/10 via-background to-[#ba9993]/10">
          <div className="container mx-auto px-4">
            <ScrollAnimatedCard delay={0}>
              <div className="text-center mb-12">
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Visit Our Clinics
                </h2>
                <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
                  Find us at our convenient locations in Bulacan
                </p>
              </div>
            </ScrollAnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  branch: "Baliuag Branch",
                  address: "123 Main Street, Baliuag, Bulacan 3006",
                  phone: "+63 123 456 7890"
                },
                {
                  branch: "Malolos Branch",
                  address: "456 City Center, Malolos, Bulacan 3000",
                  phone: "+63 123 456 7891"
                }
              ].map((location, index) => (
                <ScrollAnimatedCard key={index} delay={index * 150}>
                  <Card className="shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-2 group">
                    <CardContent className="pt-6">
                      <div className="aspect-video bg-gradient-to-br from-[#ab817a]/20 to-[#ba9993]/20 rounded-lg flex items-center justify-center mb-4 border-2 border-[#ab817a]/30 group-hover:border-[#ab817a] transition-colors duration-300">
                        <div className="text-center">
                          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#ab817a] to-[#ba9993] flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="h-8 w-8 text-white" />
                          </div>
                          <p className="font-poppins text-sm font-semibold text-foreground mb-1">{location.branch}</p>
                          <p className="font-poppins text-xs text-muted-foreground">Click to view on map</p>
                        </div>
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-foreground mb-2 group-hover:text-[#ab817a] transition-colors duration-300">
                        {location.branch}
                      </h3>
                      <p className="font-poppins text-sm text-muted-foreground mb-2">
                        {location.address}
                      </p>
                      <p className="font-poppins text-sm text-muted-foreground flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-[#ab817a]" />
                        {location.phone}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimatedCard>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
