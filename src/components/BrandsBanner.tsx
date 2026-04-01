const BrandsBanner = () => {
  const brands = ["Sony", "JBL", "Sonos", "SoundLab", "Bose", "Sennheiser", "Audio-Technica", "Shure"];

  return (
    <section className="py-16 border-y border-border">
      <div className="container">
        <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] text-center mb-2">Trusted Partners</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Brands We Work With</h2>
        <p className="text-muted-foreground text-center text-sm mb-12">Incredible brands at incredible wholesale prices.</p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {brands.map((b) => (
            <span key={b} className="text-muted-foreground font-display text-lg font-semibold hover:text-foreground transition-colors cursor-default">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsBanner;
