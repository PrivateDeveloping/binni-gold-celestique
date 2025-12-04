import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductModal } from "@/components/ProductModal";
import NotFound from "@/pages/NotFound";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

type Product = {
  slug: string;
  name: string;
  image: string;
  price?: string;
  labelKey?: string;
  active?: boolean;
};

const imageModules = import.meta.glob<{ default: string }>("../assets/*", { eager: true });

const heroImageMap: Record<string, string> = {
  rings: "ring-pearl.jpg",
  earrings: "earrings-twisted.jpg",
  necklaces: "necklace-chain.jpg",
  bracelets: "bracelets-stack.jpg",
};

const resolveImage = (imagePath: string) => {
  const match = Object.entries(imageModules).find(([key]) => key.endsWith(`/assets/${imagePath}`));
  return match ? match[1].default : imagePath;
};

const CollectionPage = () => {
  const { collection = "" } = useParams<{ collection: string }>();
  const normalizedCollection = collection.toLowerCase();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoadError(false);
    setProducts(null);
    setSelectedProduct(null);

    import(`../data/${normalizedCollection}.json`)
      .then((module) => {
        if (!isMounted) return;
        const items = module.default ?? [];
        setProducts(
          items.map((product) => ({
            ...product,
            image: resolveImage(product.image),
            active: product.active ?? true,
          }))
        );
      })
      .catch(() => {
        if (!isMounted) return;
        setLoadError(true);
      });

    return () => {
      isMounted = false;
    };
  }, [normalizedCollection]);

  useEffect(() => {
    if (!products) return;

    const slugFromUrl = searchParams.get("product");
    if (slugFromUrl) {
      const activeProducts = products.filter((item) => item.active !== false);
      const match = activeProducts.find((item) => item.slug === slugFromUrl);
      setSelectedProduct(match ?? null);
    } else {
      setSelectedProduct(null);
    }
  }, [products, searchParams]);

  const updateProductParam = (slug?: string) => {
    const params = new URLSearchParams(searchParams);
    if (slug) {
      params.set("product", slug);
    } else {
      params.delete("product");
    }
    setSearchParams(params, { replace: true });
  };

  if (loadError) {
    return <NotFound />;
  }

  if (!products) {
    return null;
  }

  const activeProducts = products.filter((item) => item.active !== false);
  const heroImage = resolveImage(heroImageMap[normalizedCollection] ?? activeProducts[0]?.image ?? products[0]?.image ?? "");

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`${normalizedCollection} collection`}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="font-serif text-6xl md:text-8xl font-light mb-4 tracking-wide">
            {t(`collectionPages.${normalizedCollection}.title`)}
          </h2>
          <p className="text-xl md:text-2xl font-light tracking-wider opacity-90">
            {t(`collectionPages.${normalizedCollection}.subtitle`)}
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-3 sm:px-6">
        <div className="container mx-auto max-w-7xl px-0 sm:px-4">
          <h3 className="font-serif text-4xl md:text-6xl font-light text-center mb-16 tracking-wide">
            {t(`collectionPages.${normalizedCollection}.catalogTitle`)}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2.5 gap-y-10 sm:gap-x-4 md:gap-10">
            {activeProducts.map((product) => (
              <div key={product.slug} className="group cursor-pointer">
                <div
                  className="relative overflow-hidden rounded-xl shadow-md bg-muted"
                  onClick={() => {
                    setSelectedProduct(product);
                    updateProductParam(product.slug);
                  }}
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
                    onClick={() => {
                      setSelectedProduct(product);
                      updateProductParam(product.slug);
                    }}
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

      {/* Boutique Invitation */}
      <section className="pt-0 pb-20 px-3 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/20 px-6 py-12 sm:px-10 sm:py-14 text-center shadow-lg">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-foreground/5" />
            <div className="relative space-y-6 max-w-2xl mx-auto">
              <h4 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-tight">
                {t("collectionPages.invitation.title")}
              </h4>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t("collectionPages.invitation.body")}
              </p>
              <div className="flex justify-center">
                <Button asChild className="px-6 sm:px-8 py-3 text-sm sm:text-base tracking-wide rounded-full">
                  <a href="/#contact">{t("collectionPages.invitation.cta")}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductModal
        open={selectedProduct !== null}
        onClose={() => {
          setSelectedProduct(null);
          updateProductParam(undefined);
          navigate(".", { replace: true });
        }}
        product={selectedProduct}
        t={t}
      />

      <Footer />
    </div>
  );
};

export default CollectionPage;
