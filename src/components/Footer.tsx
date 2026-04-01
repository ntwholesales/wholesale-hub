import { Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-secondary/20">
    <div className="container">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <p className="font-display text-lg font-bold mb-4">
            NT <span className="text-primary">Wholesales</span>
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Your trusted distributor for premium electronics. Competitive wholesale pricing with reliable UK-wide delivery.
          </p>
        </div>

        <div>
          <p className="font-semibold text-sm mb-4">Quick Links</p>
          <div className="space-y-2">
            {["Home", "Products", "Services", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-sm mb-4">Categories</p>
          <div className="space-y-2">
            {["Headphones", "Speakers", "Microphones", "Cameras"].map((c) => (
              <a key={c} href="#categories" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {c}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-sm mb-4">Contact</p>
          <div className="space-y-3">
            <a href="tel:+447709537486" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> +44 7709 537486
            </a>
            <a href="mailto:info@ntwholesales.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> info@ntwholesales.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} NT Wholesales. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
