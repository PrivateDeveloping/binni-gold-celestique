import { Instagram, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

useEffect(() => {
  const html = document.documentElement;
  const body = document.body;

  if (isMenuOpen) {
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    html.style.touchAction = "none";
    body.style.touchAction = "none";
  } else {
    html.style.overflow = "";
    body.style.overflow = "";
    html.style.touchAction = "";
    body.style.touchAction = "";
  }
}, [isMenuOpen]);



  return (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-background/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        <Link to="/" data-testid="link-home">
          <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wider hover:text-primary transition-colors">
            {t("common.brand")}
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-light tracking-wide">
          <Link to="/#about" className="hover:text-primary transition-colors">
            {t("nav.about")}
          </Link>
          <Link to="/#collections" className="hover:text-primary transition-colors">
            {t("nav.collections")}
          </Link>
          <Link to="/#contact" className="hover:text-primary transition-colors">
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Desktop Toggles */}
        <div className="hidden md:flex gap-4 items-center">
          <LanguageToggle />
          <ThemeToggle />
          <a href="https://instagram.com/binnigold" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="link-instagram">
            <Instagram className="w-5 h-5 hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-4">
          <a href="https://instagram.com/binnigold" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-testid="link-instagram-mobile">
            <Instagram className="w-5 h-5 hover:text-primary transition-colors" />
          </a>
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="rounded-full p-2 hover:border-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute right-0 top-full mt-3 w-64 rounded-2xl bg-background border border-border shadow-xl transition-all duration-300 transform z-50 ${
            isMenuOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-6 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-8 px-6 text-center text-base tracking-wide">
            <Link to="/#about" className="w-full py-2 hover:text-primary transition-colors" onClick={closeMenu}>
              {t("nav.about")}
            </Link>
            <Link to="/#collections" className="w-full py-2 hover:text-primary transition-colors" onClick={closeMenu}>
              {t("nav.collections")}
            </Link>
            <Link to="/#contact" className="w-full py-2 hover:text-primary transition-colors" onClick={closeMenu}>
              {t("nav.contact")}
            </Link>

            <div className="flex flex-col items-center gap-4 pt-4 w-full border-t border-border">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      </header>
    </>
  );
}
