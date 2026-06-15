import React, { useState } from "react";
import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, CodeIcon, LinkIcon, GlobeIcon, MessageSquareIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const socialIcons = [
    { name: "GitHub", icon: CodeIcon, href: portfolioData.contact.socials.github },
    { name: "LinkedIn", icon: LinkIcon, href: portfolioData.contact.socials.linkedin },
    { name: "Twitter", icon: GlobeIcon, href: portfolioData.contact.socials.twitter },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out to me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              {[
                { icon: MailIcon, label: "Email", value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}` },
                { icon: PhoneIcon, label: "Phone", value: portfolioData.contact.phone, href: `tel:${portfolioData.contact.phone}` },
                { icon: MapPinIcon, label: "Location", value: portfolioData.contact.location },
              ].map((item, index) => (
                <Card key={index} className="border-none shadow-sm bg-muted/50 group hover:bg-muted transition-colors">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-background border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{item.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialIcons.map((social) => (
                  <Button key={social.name} asChild variant="outline" size="icon" className="rounded-2xl hover:bg-primary hover:text-primary-foreground transition-all">
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold ml-1">Your Name</label>
                      <Input
                        required
                        placeholder="John Doe"
                        className="rounded-xl"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold ml-1">Your Email</label>
                      <Input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="rounded-xl"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Subject</label>
                    <Input
                      required
                      placeholder="Project Discussion"
                      className="rounded-xl"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">Message</label>
                    <Textarea
                      required
                      placeholder="Tell me more about your project..."
                      className="min-h-[150px] rounded-xl"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto px-12 py-6 rounded-full font-bold text-lg">
                    Send Message <SendIcon className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
