import { ArrowRight, Play, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export const YouTubeSection = () => {
  return (
    <section id="youtube" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy -z-10" />
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              <Youtube className="w-4 h-4" />
              <span>Free Content</span>
            </div>

            <h2 className="heading-section text-primary-foreground mb-6">
              Learn Free Tips on{" "}
              <span className="text-accent">YouTube</span>
            </h2>

            <p className="text-body text-primary-foreground/70 mb-8 max-w-lg mx-auto lg:mx-0">
              Subscribe to Career Gram on YouTube for weekly videos on interview tips, 
              English communication, resume building, and career growth strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="accent"
                size="lg"
                onClick={() => window.open("https://youtube.com/@josnamariababu?si=xFkKXYgqifwk2xmi", "_blank")}
              >
                <Youtube className="w-5 h-5" />
                Subscribe Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 justify-center lg:justify-start">
              <div>
                <div className="text-3xl font-bold text-accent">10K+</div>
                <div className="text-sm text-primary-foreground/60">Subscribers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className="text-sm text-primary-foreground/60">Videos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">500K+</div>
                <div className="text-sm text-primary-foreground/60">Views</div>
              </div>
            </div>
          </div>

          {/* YouTube Preview */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-navy-light/50 border border-primary-foreground/10">
              {/* Thumbnail placeholder */}
              <img 
                src="/og-image.png" 
                alt="Career Gram YouTube Channel - Free career tips and interview preparation videos"
                className="w-full h-full object-cover"
                width={640}
                height={360}
                loading="lazy"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-navy/30">
                <button 
                  onClick={() => window.open("https://youtube.com/@josnamariababu?si=xFkKXYgqifwk2xmi", "_blank")}
                  className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-lg hover:scale-110 transition-transform btn-glow"
                >
                  <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                </button>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 md:left-8 bg-card rounded-xl shadow-lg p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">New video</div>
                  <div className="text-xs text-muted-foreground">every week!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
