import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductModal } from "@/components/ProductModal";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import ringPearl from "@/assets/ring-pearl.jpg";

import { useTranslation } from "react-i18next";

const Rings = () => {
  const { t } = useTranslation();

  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    image: string;
  } | null>(null);

  const rings = [
    { name: "Eternal Band", image: product1 },
    { name: "Luna Gold Ring", image: product5 },
    { name: "Pearl Solitaire", image: ringPearl },
    { name: "Twisted Band", image: product3 },
    { name: "Diamond Accent", image: product2 },
    { name: "Stackable Set", image: product6 },
    { name: "Vintage Rose", image: product4 },
    { name: "Minimalist Band", image: product7 },
    { name: "Crown Setting", image: product8 },
    { name: "Infinity Band", image: product1 },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
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
          <h2 className="font-serif text-6xl md:text-8xl font-light mb-4 tracking-wide">
            {t("collectionPages.rings.title")}
          </h2>
          <p className="text-xl md:text-2xl font-light tracking-wider opacity-90">
            {t("collectionPages.rings.subtitle")}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-3 sm:px-6">
        <div className="container mx-auto max-w-7xl px-0 sm:px-4">
          <h3 className="font-serif text-4xl md:text-6xl font-light text-center mb-16 tracking-wide">
            {t("collectionPages.rings.catalogTitle")}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2.5 gap-y-10 sm:gap-x-4 md:gap-10">
            {rings.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className="relative overflow-hidden rounded-xl shadow-md bg-muted"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[0.75] object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>
                </div>

                <div className="mt-4 text-center">
                  <h4 className="font-serif text-lg md:text-xl mb-2 tracking-wide">
                    {product.name}
                  </h4>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="hidden md:inline-block mt-1 text-sm tracking-wider px-4 py-2 border border-foreground/20 rounded-full hover:bg-foreground hover:text-background transition"
                  >
                    {t("common.viewDetails")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        open={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
        t={t}
      />

      <Footer />
    </div>
  );
};

export default Rings;
