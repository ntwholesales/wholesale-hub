import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "NT Wholesales has been a game-changer for our retail business. Their range of electronics and competitive pricing helped us expand our offerings significantly.",
    name: "Sarah M.",
    role: "Retail Business Owner",
  },
  {
    quote: "The quality of headphones and speakers we source from NT Wholesales is exceptional. Their delivery is always on time and customer support is top-notch.",
    name: "James K.",
    role: "Online Electronics Retailer",
  },
  {
    quote: "Working with NT Wholesales has been seamless. From order placement to delivery, every step is handled professionally. Highly recommend for bulk purchases.",
    name: "Amira P.",
    role: "Tech Store Owner",
  },
];

const Testimonials = () => (
  <section className="py-24">
    <div className="container">
      <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] text-center mb-2">Testimonials</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-xl p-8">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
            <p className="font-semibold text-sm">{t.name}</p>
            <p className="text-muted-foreground text-xs">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
