import headphonesSoundlab from "@/assets/products/headphones-soundlab.png";
import headphonesJblGaming from "@/assets/products/headphones-jbl-gaming.png";
import headphonesJblWhite from "@/assets/products/headphones-jbl-white.png";
import headphonesSony from "@/assets/products/headphones-sony.png";
import speakerSonos from "@/assets/products/speaker-sonos.png";
import microphoneSony from "@/assets/products/microphone-sony.png";
import cameraSony from "@/assets/products/camera-sony.png";
import wirelessMicSony from "@/assets/products/wireless-mic-sony.png";

const products = [
  { img: headphonesSoundlab, category: "Headphones", name: "SoundLab Wireless Bluetooth", price: "£18.50", rrp: "£34.99" },
  { img: headphonesJblGaming, category: "Gaming", name: "JBL Quantum 610 Gaming Headset", price: "£52.00", rrp: "£99.99" },
  { img: headphonesJblWhite, category: "Headphones", name: "JBL Quantum 100P Wired", price: "£14.99", rrp: "£29.99" },
  { img: headphonesSony, category: "Headphones", name: "Sony WH-CH520 Wireless", price: "£24.99", rrp: "£49.99" },
  { img: speakerSonos, category: "Speakers", name: "Sonos Play:1 Smart Speaker", price: "£89.00", rrp: "£169.00" },
  { img: microphoneSony, category: "Microphones", name: "Sony C-80 Condenser Microphone", price: "£195.00", rrp: "£349.00" },
  { img: cameraSony, category: "Cameras", name: "Sony Alpha 7C II Kit", price: "£1,450.00", rrp: "£2,199.00" },
  { img: wirelessMicSony, category: "Microphones", name: "Sony ECM-W3 Wireless Mic", price: "£149.00", rrp: "£279.00" },
];

const Products = () => (
  <section id="products" className="py-24">
    <div className="container">
      <p className="text-primary font-semibold text-sm uppercase tracking-[0.2em] text-center mb-2">Our Products</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Wholesale Products</h2>
      <p className="text-muted-foreground text-center mb-16">Premium electronics at wholesale prices.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.name} className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="aspect-square bg-secondary/50 flex items-center justify-center p-6 overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <span className="text-xs text-primary font-medium">{p.category}</span>
              <h3 className="font-display font-semibold mt-1 mb-3 text-sm">{p.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">{p.price}</span>
                <span className="text-muted-foreground text-sm line-through">{p.rrp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
