import { Package, ShieldCheck, Truck } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Wholesale Sourcing",
    desc: "Access premium electronics at competitive wholesale prices. We source from trusted brands and manufacturers worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    desc: "Every product undergoes rigorous quality checks. We only supply authentic, certified products to ensure your business thrives.",
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    desc: "Efficient logistics and delivery across the UK and internationally. We ensure your orders arrive on time, every time.",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-secondary/30">
    <div className="container">
      <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] text-center mb-2">What We Offer</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
