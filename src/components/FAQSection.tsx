import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is the 2-Month English Training for?",
    answer:
      "This program is ideal for freshers, job seekers, and working professionals who want to improve their spoken English, build workplace communication skills, and gain confidence in professional settings.",
  },
  {
    question: "What does the 10-Day Interview Training cover?",
    answer:
      "The bootcamp covers mock interviews, body language coaching, answer frameworks (STAR method), salary negotiation, common HR & technical questions, and personalized feedback to help you crack interviews at top companies.",
  },
  {
    question: "How do I enroll in a program?",
    answer:
      "Simply click the 'Enroll Now' or 'Join Bootcamp' button on the respective program card. You'll be redirected to a Google Form where you can fill in your details. Our team will reach out to you within 24 hours.",
  },
  {
    question: "What is the 1:1 Strategy Call?",
    answer:
      "It's a personalized one-on-one session with Josna Maria Babu where you get career guidance, resume review, mock interview practice, and a tailored action plan for your specific goals. Book via Topmate.",
  },
  {
    question: "Are the sessions conducted online or offline?",
    answer:
      "All sessions are conducted online via Zoom or Google Meet, making it convenient for participants from anywhere in the world to join.",
  },
  {
    question: "Will I get a certificate after completing the training?",
    answer:
      "Yes! Upon successful completion of the 2-Month English Training or the 10-Day Interview Training, you will receive a certificate of completion that you can add to your LinkedIn profile and resume.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "Recorded sessions are shared with all participants, so you can catch up at your own pace. However, we encourage attending live for maximum interaction and feedback.",
  },
  {
    question: "Is there any refund policy?",
    answer:
      "We offer a satisfaction-based approach. If you're not satisfied within the first 3 days of the program, reach out to us and we'll work out a resolution. Terms apply.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Got Questions?
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-body text-muted-foreground">
            Everything you need to know about our programs and enrollment process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-sm data-[state=open]:ring-2 data-[state=open]:ring-accent/20"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
