import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Premium electronics"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />

      <div className="container relative z-10 pt-24">
        <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4 animate-fade-in">
          Electronics Distributor
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight max-w-2xl mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Premium Electronics Distribution
        </h1>
        <p className="text-muted-foreground text-lg max-w-lg mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          NT Wholesales is your trusted distributor for premium headphones, speakers, cameras and audio equipment. Competitive wholesale pricing with reliable UK-wide delivery.
        </p>

        <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <a href="#products" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition text-sm">
            Shop Wholesale
          </a>
          <a href="#services" className="border border-primary/30 text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition text-sm">
            Our Services
          </a>
        </div>

        <div className="flex gap-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div>
            <p className="font-display text-3xl font-bold text-foreground">500+</p>
            <p className="text-sm text-muted-foreground">Electronics Products</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-foreground">80+</p>
            <p className="text-sm text-muted-foreground">Top Brands</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-foreground">5★</p>
            <p className="text-sm text-muted-foreground">Client Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
