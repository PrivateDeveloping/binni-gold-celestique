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
import braceletsStack from "@/assets/bracelets-stack.jpg";
import { useTranslation } from "react-i18next";

const Bracelets = () => {
  const { t } = useTranslation();
  const bracelets = [
    { name: "Twisted Bangle", price: "$385", image: product8 },
    { name: "Bracelet Stack", price: "$425", image: braceletsStack },
    { name: "Chain Bracelet", price: "$295", image: product1 },
    { name: "Cuff Statement", price: "$455", image: product5 },
    { name: "Tennis Bracelet", price: "$595", image: product2 },
    { name: "Charm Bracelet", price: "$365", image: product3 },
    { name: "Link Chain", price: "$325", image: product6 },
    { name: "Bangle Set", price: "$485", image: product4 },
    { name: "Beaded Design", price: "$275", image: product7 },
    { name: "Infinity Bangle", price: "$415", image: product8 },
  ].map((bracelet) => ({ ...bracelet, labelKey: "common.goldLabel" }));

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src={braceletsStack} 
            alt="Bracelets collection" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="font-serif text-6xl md:text-8xl font-light mb-6 tracking-wide">
            {t("collectionPages.bracelets.title")}
          </h2>
          <p className="text-xl md:text-2xl font-light tracking-wider">
            {t("collectionPages.bracelets.subtitle")}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bracelets.map((product, index) => (
              <div key={index} className="group cursor-pointer" data-testid={`product-bracelet-${index}`}>
                <div className="relative overflow-hidden rounded-lg mb-4 bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-background/90 px-3 py-1 rounded-full text-xs tracking-wider">
                    {t(product.labelKey)}
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

export default Bracelets;
