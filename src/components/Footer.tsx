import { ArrowRight, Mail, MapPin, Phone, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  programs: [
    { label: "English Training", href: "https://forms.gle/3sF6tfd2X3tNuK2r7", external: true },
    { label: "Interview Training", href: "https://forms.gle/tUbHdwrtSV2QJMS49", external: true },
    { label: "1:1 Strategy Call", href: "https://topmate.io/josna_maria_babu", external: true },
    { label: "YouTube Channel", href: "https://youtube.com/@josnamariababu?si=xFkKXYgqifwk2xmi", external: true },
  ],
};

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/career_gram/", color: "hover:text-pink-500" },
  { icon: Instagram, label: "Student Page", href: "https://www.instagram.com/careergram_students/", color: "hover:text-pink-400" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@josnamariababu?si=xFkKXYgqifwk2xmi", color: "hover:text-red-500" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* CTA Section */}
      <div className="container-main py-12 md:py-16">
        <div className="bg-gradient-to-r from-accent to-coral-dark rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
            Book a free strategy call today and take the first step towards your dream career.
          </p>
          <Button 
            variant="navy"
            size="lg"
            onClick={() => window.open("https://topmate.io/josna_maria_babu", "_blank")}
          >
            Book Free Call
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-main py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#home" className="flex items-center gap-2 mb-4">
                <img 
                  src="/favicon.jpg" 
                  alt="Career Gram" 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-accent/30"
                />
                <span className="text-xl font-bold">Career<span className="text-accent">Gram</span></span>
              </a>
              <p className="text-primary-foreground/60 text-sm mb-6">
                Empowering careers through expert coaching in communication, 
                interview preparation, and personal development.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                {footerLinks.programs.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.instagram.com/career_gram/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    <Instagram className="w-4 h-4" />
                    @career_gram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/careergram_students/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    <Instagram className="w-4 h-4" />
                    @careergram_students
                  </a>
                </li>
                <li>
                  <a 
                    href="https://topmate.io/josna_maria_babu" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Book a Call
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-main py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50 text-center md:text-left">
            © {new Date().getFullYear()} Career Gram. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Designed with ❤️ for your career success
          </p>
        </div>
      </div>
    </footer>
  );
};
