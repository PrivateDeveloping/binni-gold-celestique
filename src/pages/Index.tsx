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
import { useTranslation } from "react-i18next";

const productData = [
  { name: "Eternal Band", price: "$285", image: product1 },
  { name: "Delicate Chain", price: "$340", image: product2 },
  { name: "Crystal Pendant", price: "$495", image: product3 },
  { name: "Pearl Drops", price: "$425", image: product4 },
  { name: "Luna Gold Ring", price: "$315", image: product5 },
  { name: "Classic Hoops", price: "$275", image: product6 },
  { name: "Layered Pearl", price: "$520", image: product7 },
  { name: "Twisted Bangle", price: "$385", image: product8 },
];

const collectionCards = [
  { key: "rings", image: ringPearl, link: "/rings", alt: "Rings collection", testId: "link-collection-rings" },
  { key: "earrings", image: earringsTwisted, link: "/earrings", alt: "Earrings collection", testId: "link-collection-earrings" },
  { key: "necklaces", image: necklaceChain, link: "/necklaces", alt: "Necklaces collection", testId: "link-collection-necklaces" },
  { key: "bracelets", image: braceletsStack, link: "/bracelets", alt: "Bracelets collection", testId: "link-collection-bracelets" },
];

const Index = () => {
  const { t } = useTranslation();
  const products = productData.map((product) => ({ ...product, labelKey: "common.goldLabel" }));

  return (
    <div >
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
            {t("home.hero.title")}
          </h2>
          <p className="text-xl md:text-2xl font-light mb-8 tracking-wider animate-slide-up">
            {t("home.hero.subtitle")}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-light tracking-wider px-8 py-6 text-base"
          >
            <a href="#collections">{t("home.hero.cta")}</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-6xl md:text-7xl font-light tracking-wide leading-tight whitespace-pre-line">
                {t("home.about.heading")}
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("home.about.body1")}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("home.about.body2")}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("home.about.body3")}
              </p>
              <Button variant="outline" size="lg" className="mt-4">
                {t("common.learnMore")}
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
          <h3 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-normal md:tracking-wide leading-tight text-center mb-16 px-2">
            {t("home.collections.heading")}
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {collectionCards.map((card) => (
              <Link
                key={card.key}
                to={card.link}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                data-testid={card.testId}
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-8">
                  <div>
                    <h4 className="font-serif text-4xl text-primary-foreground mb-2">
                      {t(`home.collections.cards.${card.key}`)}
                    </h4>
                    <p className="text-primary-foreground/90 text-sm tracking-wider">{t("common.exploreCollection")}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Most Loved Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="font-serif text-6xl md:text-7xl font-light tracking-wide text-center mb-16 whitespace-pre-line">
            {t("home.mostLoved.heading")}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={product.name + index} className="group cursor-pointer">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-5xl md:text-6xl font-light tracking-wide mb-8 capitalize">
                {t("home.contact.heading")}
              </h3>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0">
                {t("home.contact.body")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  {t("common.followInstagram")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {t("common.emailUs")}
                </Button>
              </div>
            </div>
            <div className="relative bg-background border border-border rounded-3xl shadow-xl overflow-hidden min-h-[360px]">
              <div className="absolute left-0 right-0 -top-24 -bottom-24">
                <iframe
                  title="Binni Gold location"
                  src="https://www.google.com/maps?q=42.6658607,21.1632563&z=17&output=embed"
                  className="w-full h-full pointer-events-none select-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href="https://maps.app.goo.gl/ygsHktr5Ex4N53PF8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-6 py-3 text-primary-foreground text-sm font-medium tracking-wide shadow-lg transition hover:bg-primary"
                >
                  {t("common.getDirections")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
