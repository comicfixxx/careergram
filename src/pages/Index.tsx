import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { YouTubeSection } from "@/components/YouTubeSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { LeadCapturePopup } from "@/components/LeadCapturePopup";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { DevToolsProtection } from "@/components/DevToolsProtection";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { PageLoader } from "@/components/PageLoader";

const Index = () => {
  return (
    <>
      <PageLoader />
      <DevToolsProtection />
      <ScrollProgressBar />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <YouTubeSection />
        <FAQSection />
      </main>
      <Footer />
      <LeadCapturePopup />
      <WhatsAppWidget />
      <BackToTopButton />
    </>
  );
};

export default Index;
