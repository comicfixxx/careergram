import { MessageCircle } from "lucide-react";

export const WhatsAppWidget = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in Career Gram coaching. Please share more details."
    );
    window.open(`https://wa.me/918086257035?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-[1000] w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 animate-pulse-soft"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" />
    </button>
  );
};
