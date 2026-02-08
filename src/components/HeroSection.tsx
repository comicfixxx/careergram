import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-background to-accent/5 -z-10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse-soft" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl -z-10" />

      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span>2000+ Lives Transformed</span>
            </div>

            <h1 className="heading-hero text-foreground mb-6 animate-fade-in animation-delay-100">
              Crack Your Dream Job with{" "}
              <span className="text-gradient">Expert Coaching</span>
            </h1>

            <p className="text-body text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              Master English communication, ace interviews, and build the confidence 
              to land your dream career. Personalized coaching that delivers real results.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-300">
              <Button 
                variant="hero"
                onClick={() => window.open("https://topmate.io/josna_maria_babu", "_blank")}
              >
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="hero-outline"
                onClick={() => window.open("https://youtube.com/@josnamariababu?si=xFkKXYgqifwk2xmi", "_blank")}
              >
                <Play className="w-5 h-5" />
                Watch Free Tips
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-in animation-delay-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-coral-dark ring-2 ring-background flex items-center justify-center text-accent-foreground text-xs font-bold"
                    >
                      {i}K
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Happy Students</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-muted-foreground ml-1">5.0 Rating</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 md:-inset-6 rounded-full bg-gradient-to-br from-accent/20 to-navy/20 blur-xl animate-pulse-soft" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-accent/30 shadow-lg">
                <img 
                  src="/josna-profile.jpg" 
                  alt="Josna Maria Babu - Career Coach & Interview Expert"
                  className="w-full h-full object-cover"
                  width={384}
                  height={384}
                  loading="eager"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 bg-card shadow-lg rounded-xl px-4 py-3 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">6+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
