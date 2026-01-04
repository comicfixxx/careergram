import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    image: "PS",
    content: "Josna's interview training was a game-changer! Her mock sessions and feedback helped me crack my dream job at Google. The confidence I gained is priceless.",
    rating: 5,
  },
  {
    name: "Rahul Menon",
    role: "Marketing Manager",
    image: "RM",
    content: "The 2-month English training transformed my communication. I went from nervous presentations to confidently leading team meetings. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anjali Thomas",
    role: "Business Analyst at Amazon",
    image: "AT",
    content: "The 1:1 strategy call gave me clarity on my career path. Josna's personalized approach and genuine care made all the difference.",
    rating: 5,
  },
  {
    name: "Arjun Nair",
    role: "Product Manager",
    image: "AN",
    content: "I was struggling with interview anxiety. After the 10-day bootcamp, I aced 3 interviews and received multiple offers. Thank you, Career Gram!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Success Stories
          </span>
          <h2 className="heading-section text-foreground mb-4">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-body text-muted-foreground">
            Real results from real people who transformed their careers with our coaching programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 card-hover relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Content */}
              <p className="text-body text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-coral-dark flex items-center justify-center text-accent-foreground font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
