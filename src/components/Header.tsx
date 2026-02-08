import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "YouTube", href: "#youtube" },
  { label: "FAQ", href: "#faq" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container-main">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="flex items-center gap-2 group"
          >
            <img 
              src="/favicon.jpg" 
              alt="Career Gram" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-accent/20 group-hover:ring-accent/50 transition-all"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-foreground">Career<span className="text-accent">Gram</span></span>
              <span className="text-[10px] md:text-xs text-muted-foreground -mt-1 hidden sm:block">by Josna Maria Babu</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-lg hover:bg-secondary"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button 
              variant="accent" 
              size="default"
              onClick={() => window.open("https://topmate.io/josna_maria_babu", "_blank")}
            >
              Book 1:1 Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg animate-slide-up">
            <div className="container-main py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left px-4 py-3 text-base font-medium text-foreground/80 hover:text-accent hover:bg-secondary rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-2 border-t border-border flex items-center gap-3">
                <ThemeToggle />
                <Button 
                  variant="accent" 
                  className="flex-1"
                  onClick={() => window.open("https://topmate.io/josna_maria_babu", "_blank")}
                >
                  Book 1:1 Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
