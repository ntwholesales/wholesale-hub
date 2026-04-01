import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24">
    <div className="container max-w-4xl">
      <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] text-center mb-2">Get In Touch</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">Phone</p>
              <a href="tel:+447709537486" className="text-muted-foreground text-sm hover:text-primary transition-colors">+44 7709 537486</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">Email</p>
              <a href="mailto:info@ntwholesales.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">info@ntwholesales.com</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm mb-1">Location</p>
              <p className="text-muted-foreground text-sm">United Kingdom</p>
            </div>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
