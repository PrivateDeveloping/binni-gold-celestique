import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-hand.jpg";
import aboutImage from "@/assets/about-model.jpg";
import ringPearl from "@/assets/ring-pearl.jpg";
import earringsTwisted from "@/assets/earrings-twisted.jpg";
import necklaceChain from "@/assets/necklace-chain.jpg";
import braceletsStack from "@/assets/bracelets-stack.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const Index = () => {
  const products = [
    { name: "Eternal Band", price: "$285", image: product1, label: "14K GOLD" },
    { name: "Delicate Chain", price: "$340", image: product2, label: "14K GOLD" },
    { name: "Crystal Pendant", price: "$495", image: product3, label: "14K GOLD" },
    { name: "Pearl Drops", price: "$425", image: product4, label: "14K GOLD" },
    { name: "Luna Gold Ring", price: "$315", image: product5, label: "14K GOLD" },
    { name: "Classic Hoops", price: "$275", image: product6, label: "14K GOLD" },
    { name: "Layered Pearl", price: "$520", image: product7, label: "14K GOLD" },
    { name: "Twisted Bangle", price: "$385", image: product8, label: "14K GOLD" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Elegant gold jewelry" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="font-serif text-6xl md:text-8xl font-light mb-6 tracking-wide animate-fade-in">
            BINNI GOLD
          </h2>
          <p className="text-xl md:text-2xl font-light mb-8 tracking-wider animate-slide-up">
            Timeless Elegance in Every Detail
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-light tracking-wider px-8 py-6 text-base"
          >
            <a href="#collections">DISCOVER COLLECTION</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-6xl md:text-7xl font-light tracking-wide leading-tight">
                ABOUT<br />US
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Binni Gold, we believe fine jewelry is more than just an accessory - it's a timeless expression of elegance and personal style.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Each piece in our collection is meticulously handcrafted from the finest 14k gold, blending traditional craftsmanship with contemporary design. From the intricate details to the flawless finish, every creation tells a story of dedication to excellence.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Whether you're searching for a special piece to mark life's meaningful moments or seeking to elevate your everyday style, our curated collection offers treasures that transcend fleeting trends.
              </p>
              <Button variant="outline" size="lg" className="mt-4">
                LEARN MORE
              </Button>
            </div>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Model wearing elegant jewelry" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="font-serif text-6xl md:text-7xl font-light tracking-wide text-center mb-16">
            OUR COLLECTIONS
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link to="/rings" className="group relative overflow-hidden rounded-lg cursor-pointer" data-testid="link-collection-rings">
              <img 
                src={ringPearl} 
                alt="Rings collection" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-8">
                <div>
                  <h4 className="font-serif text-4xl text-primary-foreground mb-2">RINGS</h4>
                  <p className="text-primary-foreground/90 text-sm tracking-wider">Explore Collection →</p>
                </div>
              </div>
            </Link>

            <Link to="/earrings" className="group relative overflow-hidden rounded-lg cursor-pointer" data-testid="link-collection-earrings">
              <img 
                src={earringsTwisted} 
                alt="Earrings collection" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-8">
                <div>
                  <h4 className="font-serif text-4xl text-primary-foreground mb-2">EARRINGS</h4>
                  <p className="text-primary-foreground/90 text-sm tracking-wider">Explore Collection →</p>
                </div>
              </div>
            </Link>

            <Link to="/necklaces" className="group relative overflow-hidden rounded-lg cursor-pointer" data-testid="link-collection-necklaces">
              <img 
                src={necklaceChain} 
                alt="Necklaces collection" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-8">
                <div>
                  <h4 className="font-serif text-4xl text-primary-foreground mb-2">NECKLACES</h4>
                  <p className="text-primary-foreground/90 text-sm tracking-wider">Explore Collection →</p>
                </div>
              </div>
            </Link>

            <Link to="/bracelets" className="group relative overflow-hidden rounded-lg cursor-pointer" data-testid="link-collection-bracelets">
              <img 
                src={braceletsStack} 
                alt="Bracelets collection" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-8">
                <div>
                  <h4 className="font-serif text-4xl text-primary-foreground mb-2">BRACELETS</h4>
                  <p className="text-primary-foreground/90 text-sm tracking-wider">Explore Collection →</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Most Loved Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="font-serif text-6xl md:text-7xl font-light tracking-wide text-center mb-16">
            OUR MOST LOVED<br />CREATIONS
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-background/90 px-3 py-1 rounded-full text-xs tracking-wider">
                    {product.label}
                  </div>
                </div>
                <h4 className="font-serif text-lg mb-1">{product.name}</h4>
                <p className="text-sm text-muted-foreground font-semibold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="font-serif text-5xl md:text-6xl font-light tracking-wide mb-8">
            Get In Touch
          </h3>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our collections or need assistance, our team is ready to answer all your questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Follow on Instagram
            </Button>
            <Button 
              size="lg" 
              variant="outline"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
