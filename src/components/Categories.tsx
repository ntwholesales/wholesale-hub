import { Headphones, Speaker, Mic, Camera } from "lucide-react";

const categories = [
  { icon: Headphones, title: "Headphones", desc: "Wireless, gaming and studio headphones from top brands like Sony, JBL and more.", discount: "Up to 50% off" },
  { icon: Speaker, title: "Speakers", desc: "Smart speakers, portable Bluetooth and home audio systems at wholesale prices.", discount: "Up to 45% off" },
  { icon: Mic, title: "Microphones", desc: "Condenser, wireless and USB microphones for studio, streaming and content creation.", discount: "Up to 40% off" },
  { icon: Camera, title: "Cameras & Accessories", desc: "Digital cameras, lenses, wireless mics and professional recording equipment.", discount: "Up to 35% off" },
];

const Categories = () => (
  <section id="categories" className="py-24 bg-secondary/30">
    <div className="container">
      <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] text-center mb-2">Browse Our Range</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Shop Top Categories</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c) => (
          <div key={c.title} className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors group cursor-pointer">
            <span className="text-xs text-primary font-semibold">{c.discount}</span>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center my-4 group-hover:bg-primary/20 transition-colors">
              <c.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{c.desc}</p>
            <span className="text-primary text-sm font-medium">Shop Now →</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
