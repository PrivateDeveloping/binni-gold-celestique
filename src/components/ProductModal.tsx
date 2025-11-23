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

  const detailItems = [
    { label: "Material", value: "14K Solid Gold" },
    { label: "Finish", value: "Mirror Polished" },
    { label: "Crafting", value: "Handmade in Pristina" },
    { label: "Delivery", value: "Ready in 4-6 weeks" },
  ];

  const highlightItems = [
    "Ethically sourced gold with lifetime care.",
    "Custom sizing consultation with our atelier.",
    "Complimentary engraving for personal stories.",
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
                Signature collection
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
                  Price on request
                </span>
              </div>

              <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                Handcrafted with 14K gold for timeless elegance. A refined
                creation designed to elevate your unique style.
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
                Highlights
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
                href="https://wa.me/38344123456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/90 px-5 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-primary"
              >
                Contact us on WhatsApp
              </a>
              <p className="text-[0.6rem] uppercase tracking-[0.45em] text-muted-foreground">
                or even better, come give us a visit
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
