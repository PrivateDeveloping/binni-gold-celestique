import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import clsx from "clsx";

const SHOW_AFTER_SCROLL = 240;
const BUTTON_POSITION_CLASSES =
  "fixed bottom-6 right-6 sm:bottom-10 sm:right-10"; // update to move the button

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll back to the top"
      title="Back to top"
      onClick={handleClick}
      className={clsx(
        BUTTON_POSITION_CLASSES,
        "z-50 rounded-full bg-foreground/80 text-background transition-all duration-300",
        "shadow-lg backdrop-blur px-3 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "hover:bg-foreground hover:-translate-y-0.5",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      )}
    >
      <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
    </button>
  );
}
