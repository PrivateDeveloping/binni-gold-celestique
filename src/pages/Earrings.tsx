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
import earringsTwisted from "@/assets/earrings-twisted.jpg";
import { useTranslation } from "react-i18next";

const Earrings = () => {
  const { t } = useTranslation();
  const earrings = [
    { name: "Pearl Drops", price: "$425", image: product4 },
    { name: "Classic Hoops", price: "$275", image: product6 },
    { name: "Twisted Hoops", price: "$325", image: earringsTwisted },
    { name: "Stud Elegance", price: "$195", image: product1 },
    { name: "Drop Dangles", price: "$385", image: product3 },
    { name: "Chandelier Style", price: "$495", image: product2 },
    { name: "Minimalist Studs", price: "$165", image: product5 },
    { name: "Huggie Hoops", price: "$245", image: product7 },
    { name: "Gemstone Drops", price: "$545", image: product8 },
    { name: "Threader Earrings", price: "$295", image: product4 },
  ].map((earring) => ({ ...earring, labelKey: "common.goldLabel" }));

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src={earringsTwisted} 
            alt="Earrings collection" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="font-serif text-6xl md:text-8xl font-light mb-6 tracking-wide">
            {t("collectionPages.earrings.title")}
          </h2>
          <p className="text-xl md:text-2xl font-light tracking-wider">
            {t("collectionPages.earrings.subtitle")}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {earrings.map((product, index) => (
              <div key={index} className="group cursor-pointer" data-testid={`product-earring-${index}`}>
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

export default Earrings;
