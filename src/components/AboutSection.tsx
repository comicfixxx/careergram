import { Award, Briefcase, Clock, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "2000+", label: "Students Coached" },
  { icon: Briefcase, value: "500+", label: "Career Transitions" },
  { icon: Clock, value: "6+", label: "Years Experience" },
  { icon: Award, value: "98%", label: "Success Rate" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/josna-profile.jpg" 
                alt="Josna Maria Babu - Interview Prep & Career Coach"
                className="w-full aspect-[4/5] object-cover"
                width={600}
                height={750}
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="text-xl md:text-2xl font-bold">Josna Maria Babu</h3>
                <p className="text-primary-foreground/80 text-sm">Interview Prep & Career Coach</p>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-card rounded-xl shadow-lg p-5 max-w-[200px] border border-border/50 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-bold text-foreground">Certified</div>
                  <div className="text-xs text-muted-foreground">Career Coach</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              About Me
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Helping You Unlock Your <span className="text-gradient">Full Potential</span>
            </h2>
            
            <div className="space-y-4 text-body text-muted-foreground mb-8">
              <p>
                Hi, I'm <strong className="text-foreground">Josna Maria Babu</strong>, and for over 6 years, 
                I've been dedicated to transforming careers and building confident communicators.
              </p>
              <p>
                Having guided <strong className="text-foreground">2000+ students</strong> through their career 
                journeys, I understand the challenges you face—whether it's mastering English communication, 
                preparing for that crucial interview, or navigating career transitions.
              </p>
              <p>
                My approach combines practical skills with personalized mentoring, ensuring you don't just 
                learn concepts but apply them confidently in real-world situations.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div 
                  key={stat.label}
                  className="bg-secondary/50 rounded-xl p-4 text-center hover:bg-secondary transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
