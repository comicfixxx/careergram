import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { YouTubeSection } from "@/components/YouTubeSection";
import { Footer } from "@/components/Footer";
import { LeadCapturePopup } from "@/components/LeadCapturePopup";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { DevToolsProtection } from "@/components/DevToolsProtection";

const Index = () => {
  return (
    <>
      <DevToolsProtection />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <YouTubeSection />
      </main>
      <Footer />
      <LeadCapturePopup />
      <WhatsAppWidget />
    </>
  );
};

export default Index;
