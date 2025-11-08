import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import ringPearl from "@/assets/ring-pearl.jpg";

const Rings = () => {
  const rings = [
    { name: "Eternal Band", price: "$285", image: product1, label: "14K GOLD" },
    { name: "Luna Gold Ring", price: "$315", image: product5, label: "14K GOLD" },
    { name: "Pearl Solitaire", price: "$445", image: ringPearl, label: "14K GOLD" },
    { name: "Twisted Band", price: "$295", image: product3, label: "14K GOLD" },
    { name: "Diamond Accent", price: "$525", image: product2, label: "14K GOLD" },
    { name: "Stackable Set", price: "$380", image: product6, label: "14K GOLD" },
    { name: "Vintage Rose", price: "$420", image: product4, label: "14K GOLD" },
    { name: "Minimalist Band", price: "$245", image: product7, label: "14K GOLD" },
    { name: "Crown Setting", price: "$595", image: product8, label: "14K GOLD" },
    { name: "Infinity Band", price: "$335", image: product1, label: "14K GOLD" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src={ringPearl} 
            alt="Rings collection" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="font-serif text-6xl md:text-8xl font-light mb-6 tracking-wide">
            RINGS
          </h2>
          <p className="text-xl md:text-2xl font-light tracking-wider">
            Timeless symbols of elegance and commitment
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {rings.map((product, index) => (
              <div key={index} className="group cursor-pointer" data-testid={`product-ring-${index}`}>
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

      <Footer />
    </div>
  );
};

export default Rings;
