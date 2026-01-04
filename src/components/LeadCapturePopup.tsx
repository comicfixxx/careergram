import { useState, useEffect } from "react";
import { X, Send, User, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LeadCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasShown = localStorage.getItem("leadPopupShown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("leadPopupShown", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let message = "🎯 *New Lead from Career Gram!*\n\n";
    message += `👤 *Name:* ${formData.name}\n`;
    message += `📱 *Phone:* ${formData.phone}\n`;
    
    if (formData.address) {
      message += `🏠 *Address:* ${formData.address}\n`;
    }
    
    if (formData.message) {
      message += `💬 *Message:* ${formData.message}\n`;
    }
    
    message += `\n⏰ *Time:* ${new Date().toLocaleString()}`;
    
    const whatsappUrl = `https://wa.me/918086257035?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    handleClose();
    setFormData({ name: "", phone: "", address: "", message: "" });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-foreground/50 backdrop-blur-sm animate-fade-in p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-card rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 relative animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Get Your Free Quote</h2>
          <p className="text-muted-foreground text-sm">Leave your details and we'll contact you soon</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Your Full Name *"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="tel"
              placeholder="Your Phone Number *"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Your Address (optional)"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <textarea
              placeholder="Your Message (optional)"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
            />
          </div>

          <Button type="submit" variant="accent" className="w-full" size="lg">
            <Send className="w-5 h-5" />
            Send My Details
          </Button>
        </form>
      </div>
    </div>
  );
};
