import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is the minimum order quantity?", a: "Our minimum order quantity varies by product category. For most electronics, the MOQ starts from 10 units. Contact us for specific product requirements." },
  { q: "Do you ship internationally?", a: "Yes, we offer international shipping to most countries. Delivery times and costs vary by destination. Contact us for a shipping quote." },
  { q: "How do I become a wholesale customer?", a: "Simply reach out to us via our contact form or email. We'll set you up with a trade account and provide access to our wholesale pricing." },
  { q: "Are all products authentic and certified?", a: "Absolutely. We only source from authorised distributors and manufacturers. All products come with full manufacturer warranties." },
];

const FAQ = () => (
  <section id="faq" className="py-24 bg-secondary/30">
    <div className="container max-w-3xl">
      <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] text-center mb-2">FAQ</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Common Questions</h2>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-sm font-semibold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
