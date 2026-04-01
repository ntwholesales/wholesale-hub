import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BrandsBanner from "@/components/BrandsBanner";
import Products from "@/components/Products";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Services />
    <BrandsBanner />
    <Products />
    <Categories />
    <Testimonials />
    <FAQ />
    <Contact />
    <Footer />
  </div>
);

export default Index;
