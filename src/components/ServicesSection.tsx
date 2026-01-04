import { ArrowRight, BookOpen, MessageCircle, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BookOpen,
    title: "2-Month English Training",
    subtitle: "Master Communication",
    description: "Build fluency, confidence, and professional communication skills that set you apart in any workplace.",
    features: ["Daily practice sessions", "Real-world scenarios", "Personalized feedback", "Certificate included"],
    cta: "Enroll Now",
    link: "https://forms.gle/3sF6tfd2X3tNuK2r7",
    accent: true,
  },
  {
    icon: Target,
    title: "10-Day Interview Training",
    subtitle: "Ace Every Interview",
    description: "Intensive bootcamp designed to transform your interview performance and land offers from top companies.",
    features: ["Mock interviews", "Body language coaching", "Answer frameworks", "Salary negotiation"],
    cta: "Join Bootcamp",
    link: "https://forms.gle/tUbHdwrtSV2QJMS49",
    accent: false,
  },
  {
    icon: MessageCircle,
    title: "1:1 Strategy Call",
    subtitle: "Personal Guidance",
    description: "Get personalized career advice, resume review, and interview strategy tailored to your specific goals.",
    features: ["Career roadmap", "Resume optimization", "Mock interview", "Follow-up support"],
    cta: "Book Your Call",
    link: "https://topmate.io/josna_maria_babu",
    accent: false,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Our Programs
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Choose Your Path to <span className="text-gradient">Success</span>
          </h2>
          <p className="text-body text-muted-foreground">
            Structured programs designed to accelerate your career growth, 
            whether you're a fresher or an experienced professional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`group relative bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 card-hover ${
                service.accent ? "ring-2 ring-accent/30" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {service.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                service.accent 
                  ? "bg-accent text-accent-foreground" 
                  : "bg-navy/10 text-navy group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
              }`}>
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">{service.subtitle}</span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-3">{service.title}</h3>
              <p className="text-body-sm text-muted-foreground mb-5">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                variant={service.accent ? "accent" : "navy-outline"}
                className="w-full"
                onClick={() => window.open(service.link, "_blank")}
              >
                {service.cta}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
