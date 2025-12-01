import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    name: string;
    image: string;
  } | null;
  t: (key: string) => string;
}

export function ProductModal({ open, onClose, product, t }: ProductModalProps) {
  if (!product) return null;

  const whatsappNumber = "38345333222";
  const productUrl = typeof window !== "undefined" ? window.location.href : "";
  const productImageUrl =
    product.image.startsWith("http") || product.image.startsWith("//")
      ? product.image
      : typeof window !== "undefined"
        ? new URL(product.image, window.location.origin).href
        : product.image;
  const whatsappText = encodeURIComponent(
    t("productModal.whatsappMessage", { name: product.name, image: productImageUrl, url: productUrl })
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const detailItems = [
    { label: t("productModal.details.material.label"), value: t("productModal.details.material.value") },
    { label: t("productModal.details.finish.label"), value: t("productModal.details.finish.value") },
    { label: t("productModal.details.crafting.label"), value: t("productModal.details.crafting.value") },
    { label: t("productModal.details.delivery.label"), value: t("productModal.details.delivery.value") },
  ];

  const highlightItems = [
    t("productModal.highlights.item1"),
    t("productModal.highlights.item2"),
    t("productModal.highlights.item3"),
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl lg:max-w-3xl p-0 rounded-[1.75rem] border border-border/60 bg-background/95 shadow-xl backdrop-blur-md max-h-[85vh] overflow-y-auto md:max-h-[90vh] md:overflow-hidden">
        <div className="grid md:grid-cols-[1.05fr_0.95fr]">
          {/* Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="h-56 w-full object-cover md:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                {t("productModal.signature")}
              </p>
              <p className="mt-2 text-3xl font-serif font-light">{product.name}</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 p-5 md:p-6">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <DialogTitle className="text-xl font-serif tracking-wide text-left">
                  {product.name}
                </DialogTitle>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                  {t("productModal.priceOnRequest")}
                </span>
              </div>

              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                {t("productModal.description")}
              </DialogDescription>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-3 text-left text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
              {detailItems.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-2xl border border-border/60 bg-muted/40 p-3"
                >
                  <p>{detail.label}</p>
                  <p className="mt-1 text-sm normal-case tracking-normal text-foreground">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-2">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                {t("productModal.highlightsTitle")}
              </p>
              <ul className="space-y-1 text-xs text-foreground/90">
                {highlightItems.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 rounded-2xl border border-border/60 bg-background/80 px-3 py-2"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <p>{highlight}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-1 text-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/90 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-primary"
              >
                {t("productModal.contactCta")}
              </a>
              <p className="text-[0.6rem] uppercase tracking-[0.45em] text-muted-foreground">
                {t("productModal.contactVisit")}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
